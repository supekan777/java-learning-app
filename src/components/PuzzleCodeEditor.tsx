'use client'

import { useState, useEffect, useCallback } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd'
import { CodeBlock, CodeSlot } from '@/data/practicalChallenges'
import { Code, Lightbulb, CheckCircle, AlertCircle, Puzzle } from 'lucide-react'

interface PuzzleCodeEditorProps {
  codeBlocks: CodeBlock[]
  codeSlots: CodeSlot[]
  currentPhase: number
  onPhaseComplete: () => void
  onCodeGenerated?: (code: Array<{type: 'code' | 'todo', content: string, todoNumber?: number}>) => void
}

interface SlotAssignment {
  slotId: string
  blockIds: string[] // 最大2つのブロックを格納
}

export default function PuzzleCodeEditor({ 
  codeBlocks, 
  codeSlots, 
  currentPhase, 
  onPhaseComplete,
  onCodeGenerated
}: PuzzleCodeEditorProps) {
  const [slotAssignments, setSlotAssignments] = useState<SlotAssignment[]>([])
  const [availableBlocks, setAvailableBlocks] = useState<CodeBlock[]>([])
  const [showHint, setShowHint] = useState<{ [key: string]: boolean }>({})
  const [generatedCode, setGeneratedCode] = useState<Array<{type: 'code' | 'todo', content: string, todoNumber?: number}>>([])

  // 現在のフェーズのブロックとスロットを取得
  const currentPhaseBlocks = codeBlocks.filter(block => block.phase === currentPhase)
  const currentPhaseSlots = codeSlots.filter(slot => slot.phaseId === currentPhase)

  // コード生成関数（HTMLハイライト付き）
  const generateCode = useCallback(() => {
    let codeElements: Array<{type: 'code' | 'todo', content: string, todoNumber?: number}> = []
    let todoCounter = 1
    
    // インポート文を追加
    codeElements.push({type: 'code', content: 'import java.util.*;\nimport java.time.*;\nimport java.time.format.*;\n\n'})
    
    // 各フェーズのスロットからコードを生成
    for (let phase = 1; phase <= currentPhase; phase++) {
      const phaseSlots = codeSlots.filter(slot => slot.phaseId === phase)
      phaseSlots.sort((a, b) => a.position - b.position)
      
      for (const slot of phaseSlots) {
        const assignment = slotAssignments.find(a => a.slotId === slot.id)
        if (assignment?.blockIds && assignment.blockIds.length > 0) {
          // 複数ブロックがある場合は最初のブロックのみ使用
          const firstBlockId = assignment.blockIds[0]
          const block = codeBlocks.find(b => b.id === firstBlockId)
          if (block) {
            codeElements.push({type: 'code', content: block.code + '\n\n'})
          }
        } else {
          codeElements.push({
            type: 'todo', 
            content: `// TODO [${todoCounter}]: ${slot.label}を追加してください\n\n`,
            todoNumber: todoCounter
          })
          todoCounter++
        }
      }
    }
    
    setGeneratedCode(codeElements)
    // 親コンポーネントにコードを送信
    if (onCodeGenerated) {
      onCodeGenerated(codeElements)
    }
  }, [currentPhase, codeSlots, slotAssignments, codeBlocks])

  useEffect(() => {
    // 利用可能なブロックを設定（現在のフェーズと前のフェーズのブロック）
    const blocks = codeBlocks.filter(block => block.phase <= currentPhase)
    setAvailableBlocks(blocks)

    // スロット割り当てを初期化（現在のフェーズのスロットのみ）
    const currentSlots = codeSlots.filter(slot => slot.phaseId === currentPhase)
    const newAssignments = currentSlots.map(slot => ({
      slotId: slot.id,
      blockIds: []
    }))
    
    // 既存の割り当てとマージ（他のフェーズの割り当ては保持）
    setSlotAssignments(prev => {
      const existingAssignments = prev.filter(a => 
        !currentSlots.some(slot => slot.id === a.slotId)
      )
      return [...existingAssignments, ...newAssignments]
    })
  }, [currentPhase, codeBlocks, codeSlots])

  // コード生成（slotAssignmentsとcurrentPhaseが変更されたときのみ）
  useEffect(() => {
    generateCode()
  }, [generateCode])

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const { source, destination } = result
    
    // ブロックをスロットにドロップした場合
    if (destination.droppableId.startsWith('slot-')) {
      const slotId = destination.droppableId.replace('slot-', '')
      let blockId = result.draggableId.replace('block-', '').replace('slot-block-', '')
      
      const slot = currentPhaseSlots.find(s => s.id === slotId)
      const block = availableBlocks.find(b => b.id === blockId)
      
      if (!slot || !block) {
        return
      }

      // バリデーションは行わず、どのブロックでも配置を許可

      // スロット割り当てを更新
      setSlotAssignments(prev => {
        const newAssignments = [...prev]
        
        // 既に他の場所で使用されているブロックを削除
        newAssignments.forEach(assignment => {
          assignment.blockIds = assignment.blockIds.filter(id => id !== blockId)
        })
        
        // 対象スロットに配置
        const existingIndex = newAssignments.findIndex(a => a.slotId === slotId)
        
        if (existingIndex >= 0) {
          // 2つまでしか追加できない
          if (newAssignments[existingIndex].blockIds.length < 2) {
            newAssignments[existingIndex].blockIds.push(blockId)
          } else {
            // 最初のブロックを置き換え
            newAssignments[existingIndex].blockIds[0] = blockId
          }
        } else {
          newAssignments.push({ slotId, blockIds: [blockId] })
        }
        
        return newAssignments
      })
    }

    // スロット間でのブロック移動
    if (source.droppableId.startsWith('slot-') && destination.droppableId.startsWith('slot-')) {
      const sourceSlotId = source.droppableId.replace('slot-', '')
      const destSlotId = destination.droppableId.replace('slot-', '')
      let blockId = result.draggableId.replace('block-', '').replace('slot-block-', '')
      
      setSlotAssignments(prev => {
        const newAssignments = [...prev]
        const sourceAssignment = newAssignments.find(a => a.slotId === sourceSlotId)
        const destAssignment = newAssignments.find(a => a.slotId === destSlotId)
        
        if (sourceAssignment && destAssignment) {
          // ソースからブロックを削除
          sourceAssignment.blockIds = sourceAssignment.blockIds.filter(id => id !== blockId)
          
          // デスティネーションに追加（2つまで）
          if (destAssignment.blockIds.length < 2) {
            destAssignment.blockIds.push(blockId)
          } else {
            // 最初のブロックを置き換え
            destAssignment.blockIds[0] = blockId
          }
        }
        
        return newAssignments
      })
    }

    // スロットからブロックを削除する場合
    if (source.droppableId.startsWith('slot-') && destination.droppableId === 'available-blocks') {
      const slotId = source.droppableId.replace('slot-', '')
      let blockId = result.draggableId.replace('slot-block-', '')
      
      setSlotAssignments(prev => 
        prev.map(a => a.slotId === slotId ? { ...a, blockIds: a.blockIds.filter(id => id !== blockId) } : a)
      )
    }
  }

  const getBlockColorClass = (block: CodeBlock) => {
    switch (block.type) {
      case 'class': return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-200'
      case 'method': return 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald-200'
      case 'variable': return 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-purple-200'
      case 'loop': return 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-200'
      case 'condition': return 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-amber-200'
      case 'statement': return 'bg-gradient-to-r from-slate-500 to-slate-600 text-white shadow-slate-200'
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-gray-200'
    }
  }

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '🟢'
      case 'medium': return '🟡'
      case 'hard': return '🔴'
      default: return '⚪'
    }
  }

  const checkPhaseCompletion = () => {
    const requiredSlots = currentPhaseSlots.filter(slot => slot.isRequired)
    const results: Array<{slotId: string, isCorrect: boolean, expectedBlock?: string, actualBlock?: string}> = []
    
    for (const slot of requiredSlots) {
      const assignment = slotAssignments.find(a => a.slotId === slot.id)
      
      if (!assignment || assignment.blockIds.length === 0) {
        results.push({slotId: slot.id, isCorrect: false})
        continue
      }
      
      // 最初のブロックで判定
      const firstBlockId = assignment.blockIds[0]
      const assignedBlock = codeBlocks.find(b => b.id === firstBlockId)
      
      if (!assignedBlock) {
        results.push({slotId: slot.id, isCorrect: false})
        continue
      }
      
      // タイプとカテゴリをチェック
      const isValidType = slot.acceptedTypes.includes(assignedBlock.type)
      const isValidCategory = slot.acceptedCategories.includes(assignedBlock.category)
      
      results.push({
        slotId: slot.id,
        isCorrect: isValidType && isValidCategory,
        expectedBlock: `${slot.acceptedTypes.join('/')} (${slot.acceptedCategories.join('/')})`,
        actualBlock: `${assignedBlock.type} (${assignedBlock.category})`
      })
    }
    
    return results
  }
  
  const handlePhaseComplete = () => {
    const results = checkPhaseCompletion()
    const correctCount = results.filter(r => r.isCorrect).length
    const totalCount = results.length
    
    if (correctCount === totalCount) {
      alert(`🎉 フェーズ${currentPhase}完了！すべて正解です！`)
      onPhaseComplete()
    } else {
      const incorrectResults = results.filter(r => !r.isCorrect)
      let message = `❌ ${totalCount}問中${correctCount}問正解\n\n間違いがあります：\n`
      
      incorrectResults.forEach((result, index) => {
        const slot = currentPhaseSlots.find(s => s.id === result.slotId)
        message += `${index + 1}. ${slot?.label}：\n`
        if (result.actualBlock) {
          message += `   配置済み: ${result.actualBlock}\n   必要: ${result.expectedBlock}\n\n`
        } else {
          message += `   未配置\n\n`
        }
      })
      
      message += "修正してから再度お試しください。"
      alert(message)
    }
  }

  const isBlockUsed = (blockId: string) => {
    return slotAssignments.some(a => a.blockIds.includes(blockId))
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid lg:grid-cols-5 gap-6">
        {/* ブロックパレット */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <Puzzle className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">利用可能なブロック</h3>
              <span className="ml-auto px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">
                Phase {currentPhase}
              </span>
            </div>
            
            <Droppable droppableId="available-blocks">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`space-y-3 min-h-32 p-4 rounded-xl border-2 border-dashed transition-colors duration-200 ${
                    snapshot.isDraggingOver 
                      ? 'border-blue-400 bg-blue-50' 
                      : 'border-gray-300 bg-gray-50/50'
                  }`}
                >
                  {currentPhaseBlocks
                    .filter(block => !isBlockUsed(block.id))
                    .map((block, index) => (
                    <Draggable 
                      key={block.id} 
                      draggableId={`block-${block.id}`} 
                      index={index}
                      isDragDisabled={false}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`group p-3 rounded-xl border-0 cursor-move transition-all duration-200 shadow-lg ${
                            getBlockColorClass(block)
                          } ${
                            snapshot.isDragging ? 'rotate-2 scale-105 shadow-2xl' : 'hover:shadow-xl hover:scale-102'
                          }`}
                          style={{
                            ...provided.draggableProps.style
                          }}
                        >
                          <p className="text-xs opacity-90 mb-2 line-clamp-2 text-center font-medium">{block.description}</p>
                          
                          {/* コードプレビュー（常に表示）*/}
                          <div className="mt-2">
                            <div className="p-2 bg-black/80 rounded text-xs max-h-24 overflow-auto">
                              <pre className="text-green-400 font-mono whitespace-pre-wrap leading-relaxed">
                                {block.code.length > 120 
                                  ? block.code.substring(0, 120) + '...' 
                                  : block.code
                                }
                              </pre>
                            </div>
                          </div>
                          
                        </div>
                      )}
                    </Draggable>
                  ))}
                  <div style={{ display: 'none' }}>{provided.placeholder}</div>
                </div>
              )}
            </Droppable>
            
            {/* 空の状態メッセージ */}
            {currentPhaseBlocks.filter(block => !isBlockUsed(block.id)).length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
                <p className="text-sm">すべてのブロックが配置されました！</p>
              </div>
            )}
          </div>

          {/* 使用済みブロック表示 */}
          {currentPhaseBlocks.some(block => isBlockUsed(block.id)) && (
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">配置済みブロック</h3>
              </div>
              
              <div className="space-y-3 overflow-auto" style={{ maxHeight: '300px' }}>
                {currentPhaseBlocks
                  .filter(block => isBlockUsed(block.id))
                  .map((block) => (
                    <div
                      key={`used-${block.id}`}
                      className={`p-3 rounded-xl border-0 opacity-80 shadow-md ${getBlockColorClass(block)}`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-sm truncate">{block.label}</h4>
                        <CheckCircle className="w-4 h-4 text-white/80" />
                      </div>
                      <p className="text-xs opacity-90">{block.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* コード組み立てエリア */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">コード組み立て</h3>
              </div>
              <button
                onClick={handlePhaseComplete}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                フェーズ完了
              </button>
            </div>

            <div className="grid gap-4">
              {currentPhaseSlots
                .sort((a, b) => a.position - b.position)
                .map((slot) => {
                  const assignment = slotAssignments.find(a => a.slotId === slot.id)
                  const assignedBlocks = assignment?.blockIds 
                    ? assignment.blockIds.map(id => codeBlocks.find(b => b.id === id)).filter(Boolean)
                    : []

                  return (
                    <div key={slot.id} className="border border-gray-200 rounded-xl p-3 bg-gradient-to-br from-gray-50 to-white shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-2">
                            <span className="text-white text-xs font-bold">{slot.position}</span>
                          </div>
                          <h4 className="font-semibold text-gray-900">{slot.label}</h4>
                        </div>
                        <div className="flex items-center space-x-2">
                          {slot.isRequired && (
                            <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-semibold rounded-full">必須</span>
                          )}
                          <button
                            onClick={() => setShowHint(prev => ({ ...prev, [slot.id]: !prev[slot.id] }))}
                            className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
                          >
                            <Lightbulb className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      {showHint[slot.id] && (
                        <div className="mb-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <p className="text-sm text-yellow-800">{slot.hint}</p>
                        </div>
                      )}

                      <Droppable droppableId={`slot-${slot.id}`}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={`min-h-20 p-3 rounded-xl border-2 border-dashed transition-colors duration-200 ${
                              snapshot.isDraggingOver
                                ? 'border-green-400 bg-green-50'
                                : assignedBlocks.length > 0
                                ? 'border-green-300 bg-green-50'
                                : 'border-gray-300 bg-gray-50/50'
                            }`}
                          >
                            {assignedBlocks.length > 0 ? (
                              <div className="space-y-2">
                                {assignedBlocks.map((assignedBlock, blockIndex) => (
                                  <Draggable 
                                    key={assignedBlock.id}
                                    draggableId={`slot-block-${assignedBlock.id}`} 
                                    index={blockIndex}
                                  >
                                    {(provided, snapshot) => (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={`p-3 rounded-xl border-0 cursor-move shadow-lg ${getBlockColorClass(assignedBlock)} ${
                                          snapshot.isDragging ? 'rotate-1 scale-105 shadow-2xl opacity-90' : 'hover:shadow-xl'
                                        }`}
                                        style={{
                                          ...provided.draggableProps.style
                                        }}
                                      >
                                        <div className="flex items-center justify-between mb-2">
                                          <h5 className="font-semibold text-sm">{assignedBlock.label}</h5>
                                          <div className="flex items-center space-x-1">
                                            <span className="text-xs bg-white/20 px-1 rounded">{blockIndex + 1}</span>
                                            <CheckCircle className="w-4 h-4 text-white/80" />
                                          </div>
                                        </div>
                                        <div className="mt-2 bg-gray-800 rounded p-2 overflow-auto max-h-16">
                                          <pre className="text-xs font-mono whitespace-pre-wrap text-green-400 leading-relaxed">
                                            {assignedBlock.code}
                                          </pre>
                                        </div>
                                      </div>
                                    )}
                                  </Draggable>
                                ))}
                                {assignedBlocks.length < 2 && (
                                  <div className="p-2 border border-dashed border-gray-300 rounded-lg text-center text-gray-400 text-xs bg-gray-50/30">
                                    もう1つブロックを追加可能
                                  </div>
                                )}
                              </div>
                            ) : (
                              <div className="flex items-center justify-center h-full text-gray-400">
                                <div className="text-center">
                                  <AlertCircle className="w-6 h-6 mx-auto mb-2" />
                                  <p className="text-sm font-medium">
                                    {slot.hint}
                                  </p>
                                  <p className="text-xs mt-1 opacity-75">
                                    必要なコードをドラッグ&ドロップ
                                  </p>
                                </div>
                              </div>
                            )}
                            <div style={{ display: 'none' }}>{provided.placeholder}</div>
                          </div>
                        )}
                      </Droppable>
                    </div>
                  )
                })}
            </div>
          </div>

        </div>
      </div>
    </DragDropContext>
  )
}