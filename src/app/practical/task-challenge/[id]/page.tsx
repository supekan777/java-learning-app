'use client'

import { useState, useEffect, use } from 'react'
import Link from 'next/link'
import { ArrowLeft, Briefcase, Clock, User, Target, CheckCircle, Lightbulb, Code, Play, ChevronDown } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PuzzleCodeEditor from '@/components/PuzzleCodeEditor'
import { practicalChallenges, PracticalChallenge, loadChallengeDetails } from '@/data/practicalChallengesOptimized'

interface Props {
  params: Promise<{
    id: string
  }>
}

export default function TaskChallengeDetailPage({ params }: Props) {
  const resolvedParams = use(params)
  const [challenge, setChallenge] = useState<PracticalChallenge | null>(null)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [showHints, setShowHints] = useState(false)
  const [currentHintLevel, setCurrentHintLevel] = useState(1)
  const [userCode, setUserCode] = useState('')
  const [isStarted, setIsStarted] = useState(false)
  const [isTaskInfoExpanded, setIsTaskInfoExpanded] = useState(true)
  const [isLearningPointsExpanded, setIsLearningPointsExpanded] = useState(true)
  const [isProgressExpanded, setIsProgressExpanded] = useState(false)
  const [generatedCode, setGeneratedCode] = useState<Array<{type: 'code' | 'todo', content: string, todoNumber?: number}>>([])

  useEffect(() => {
    const loadChallenge = async () => {
      const id = parseInt(resolvedParams.id)
      try {
        const detailedChallenge = await loadChallengeDetails(id)
        if (detailedChallenge) {
          setChallenge(detailedChallenge)
          setUserCode(detailedChallenge.starterCode)
        }
      } catch (error) {
        // フォールバック: 基本データを使用
        const basicChallenge = practicalChallenges.find(c => c.id === id)
        if (basicChallenge) {
          setChallenge(basicChallenge)
          setUserCode(basicChallenge.starterCode)
        }
      }
    }
    loadChallenge()
  }, [resolvedParams])

  if (!challenge) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">チャレンジが見つかりません</h1>
            <Link href="/practical/task-challenge" className="text-blue-600 hover:text-blue-800">
              ← チャレンジ一覧に戻る
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const handleStartChallenge = () => {
    setIsStarted(true)
    // チャレンジ開始時に自動で縮小
    setIsTaskInfoExpanded(false)
    setIsLearningPointsExpanded(false)
  }

  const handleNextPhase = () => {
    if (currentPhase < challenge.phases.length - 1) {
      setCurrentPhase(currentPhase + 1)
    } else {
      alert('🎉 チャレンジ完了！おめでとうございます！')
    }
  }

  const handleShowHint = () => {
    setShowHints(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            href="/practical/task-challenge"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            実務指示チャレンジに戻る
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* チャレンジ情報パネル */}
          <div className="lg:col-span-1">
            {/* 業務指示書 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <button 
                onClick={() => setIsTaskInfoExpanded(!isTaskInfoExpanded)}
                className="flex items-center justify-between w-full mb-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">業務指示書</h2>
                    <p className="text-sm text-gray-500">#{challenge.id.toString().padStart(3, '0')}</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${
                  isTaskInfoExpanded ? 'rotate-180' : ''
                }`} />
              </button>

              {isTaskInfoExpanded && (
                <div className="space-y-4 border-t pt-4">
                <div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <User className="w-4 h-4 mr-2" />
                    <span>依頼者</span>
                  </div>
                  <p className="font-semibold text-gray-900">{challenge.client}</p>
                </div>

                <div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>期限</span>
                  </div>
                  <p className="font-semibold text-red-600">{challenge.deadline}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">背景・依頼内容</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{challenge.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">要求機能</h3>
                  <ul className="space-y-1">
                    {challenge.requirements.map((req, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">制約条件</h3>
                  <ul className="space-y-1">
                    {challenge.constraints.map((constraint, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {constraint}
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
              )}
            </div>

            {/* 学習ポイント */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <button 
                onClick={() => setIsLearningPointsExpanded(!isLearningPointsExpanded)}
                className="flex items-center justify-between w-full mb-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              >
                <h3 className="font-bold text-gray-900 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-600" />
                  学習ポイント
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${
                  isLearningPointsExpanded ? 'rotate-180' : ''
                }`} />
              </button>
              {isLearningPointsExpanded && (
                <div className="border-t pt-4">
                  <ul className="space-y-2">
                    {challenge.learningPoints.map((point, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 進捗パネル */}
            {isStarted && (
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <button 
                  onClick={() => setIsProgressExpanded(!isProgressExpanded)}
                  className="flex items-center justify-between w-full mb-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <h3 className="font-bold text-gray-900">進捗状況</h3>
                    <span className="ml-2 text-sm text-gray-500">
                      Phase {currentPhase + 1}/{challenge.phases.length}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${
                    isProgressExpanded ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {/* 縮小時は現在のフェーズのみ表示 */}
                {!isProgressExpanded && (
                  <div className="border-t pt-4">
                    <div className={`p-3 rounded-lg border-2 border-orange-300 bg-orange-50`}>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{challenge.phases[currentPhase]?.title}</span>
                        <div className="w-4 h-4 bg-orange-400 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* 展開時は全フェーズ表示 */}
                {isProgressExpanded && (
                  <div className="border-t pt-4">
                    <div className="space-y-3">
                      {challenge.phases.map((phase, index) => (
                        <div key={phase.id} className={`p-3 rounded-lg border-2 ${
                          index === currentPhase 
                            ? 'border-orange-300 bg-orange-50' 
                            : index < currentPhase 
                            ? 'border-green-300 bg-green-50'
                            : 'border-gray-200 bg-gray-50'
                        }`}>
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{phase.title}</span>
                            {index < currentPhase && (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            )}
                            {index === currentPhase && (
                              <div className="w-4 h-4 bg-orange-400 rounded-full animate-pulse" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* 生成されたコード（チャレンジ開始後のみ表示） */}
            {isStarted && challenge.puzzleMode && (
              <div className="bg-white rounded-2xl p-6 shadow-lg mt-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mr-3">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">生成されたコード</h3>
                </div>
                <div className="bg-gray-900 rounded-xl p-4 overflow-auto border" style={{ minHeight: '400px', maxHeight: '600px' }}>
                  <div className="text-sm font-mono whitespace-pre-wrap leading-relaxed">
                    {generatedCode.map((element, index) => (
                      <span 
                        key={index}
                        className={element.type === 'todo' ? 'text-red-400 bg-red-900/30 px-1 rounded' : 'text-green-400'}
                      >
                        {element.content}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* コーディングエリア */}
          <div className="lg:col-span-2">
            {!isStarted ? (
              // スタート画面
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{challenge.title}</h1>
                <p className="text-gray-600 mb-6">
                  推定時間: {challenge.estimatedTime} | 難易度: {challenge.difficulty}
                </p>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                  実際の業務指示に従って、要求されるプログラムを作成してください。
                  段階的なヒント機能と評価システムがあなたの学習をサポートします。
                </p>
                <button
                  onClick={handleStartChallenge}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2" />
                  チャレンジ開始
                </button>
              </div>
            ) : (
              // コーディング画面
              <div className="space-y-6">
                {/* フェーズ情報 */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900">
                      {challenge.phases[currentPhase]?.title}
                    </h2>
                    <span className="text-sm text-gray-500">
                      {currentPhase + 1} / {challenge.phases.length}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {challenge.phases[currentPhase]?.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">このフェーズの目標:</h4>
                    <ul className="space-y-1">
                      {challenge.phases[currentPhase]?.objectives.map((obj, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* パズル形式のコードエディタ */}
                {challenge.puzzleMode ? (
                  <PuzzleCodeEditor
                    codeBlocks={challenge.codeBlocks}
                    codeSlots={challenge.codeSlots}
                    currentPhase={currentPhase + 1}
                    onPhaseComplete={handleNextPhase}
                    onCodeGenerated={setGeneratedCode}
                  />
                ) : (
                  // 従来のコードエディタ
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                        <span className="text-gray-300 text-sm">HouseholdBudget.java</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={handleShowHint}
                          className="flex items-center px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <Lightbulb className="w-4 h-4 mr-1" />
                          ヒント
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <textarea
                        value={userCode}
                        onChange={(e) => setUserCode(e.target.value)}
                        className="w-full h-96 font-mono text-sm border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-blue-500"
                        placeholder="ここにコードを書いてください..."
                      />
                    </div>
                    <div className="bg-gray-50 px-6 py-4 border-t">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          文字数: {userCode.length} | 行数: {userCode.split('\n').length}
                        </div>
                        <div className="flex space-x-3">
                          <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                            実行
                          </button>
                          <button 
                            onClick={handleNextPhase}
                            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            次のフェーズ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ヒント表示（従来のエディタ使用時のみ） */}
                {!challenge.puzzleMode && showHints && (
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-yellow-400">
                    <div className="flex items-center mb-4">
                      <Lightbulb className="w-5 h-5 text-yellow-600 mr-2" />
                      <h3 className="font-bold text-gray-900">
                        ヒント {currentHintLevel}: {challenge.hints[currentHintLevel - 1]?.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      {challenge.hints[currentHintLevel - 1]?.content}
                    </p>
                    {challenge.hints[currentHintLevel - 1]?.codeExample && (
                      <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-green-400 text-sm">
                          <code>{challenge.hints[currentHintLevel - 1].codeExample}</code>
                        </pre>
                      </div>
                    )}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex space-x-2">
                        {challenge.hints.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentHintLevel(index + 1)}
                            className={`w-8 h-8 rounded-full text-sm ${
                              currentHintLevel === index + 1
                                ? 'bg-yellow-500 text-white'
                                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                            }`}
                          >
                            {index + 1}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => setShowHints(false)}
                        className="text-gray-500 hover:text-gray-700 text-sm"
                      >
                        閉じる
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}