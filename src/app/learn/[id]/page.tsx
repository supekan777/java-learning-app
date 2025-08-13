'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowLeft, Play, RotateCcw, Lightbulb, CheckCircle, AlertCircle, Code2, HelpCircle } from 'lucide-react'
import { loadLessons } from '@/utils/dataLoader'
import { executeJavaCode, validateTestCases } from '@/services/codeExecution'
import { completeLesson, getUserProgress } from '@/services/progressService'
import type { Lesson } from '@/types/lesson'
import QuizComponent from '@/components/Quiz'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Monaco Editorを動的インポート（クライアントサイドのみ）
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-gray-500">コードエディタを読み込み中...</div>
    </div>
  )
})

interface PageProps {
  params: Promise<{ id: string }>
}

export default function LessonPage({ params }: PageProps) {
  // すべてのhooksをコンポーネントの最上部で宣言
  const [lessonId, setLessonId] = useState<number | null>(null)
  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [currentHintIndex, setCurrentHintIndex] = useState(0)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'lesson' | 'quiz'>('lesson')

  // パラメータの解決とレッスンデータの設定
  useEffect(() => {
    let isMounted = true
    
    const loadData = async () => {
      const resolvedParams = await params
      const lessons = await loadLessons()
      
      if (isMounted) {
        const id = parseInt(resolvedParams.id)
        const foundLesson = lessons.find(l => l.id === id)
        
        
        setLessonId(id)
        setLesson(foundLesson || null)
        setIsLoading(false)
        
        if (foundLesson) {
          setCode(foundLesson.content.initialCode)
        }
      }
    }
    
    loadData().catch(() => {
      if (isMounted) {
        setIsLoading(false)
      }
    })

    return () => {
      isMounted = false
    }
  }, [params])

  // コード実行関数
  const runCode = async () => {
    if (!lesson) return
    
    setIsRunning(true)
    setOutput('')
    setIsSuccess(false)
    
    try {
      const result = await executeJavaCode(code)
      
      if (result.status === 'success') {
        setOutput(result.output)
        const testResults = validateTestCases(code, lesson.exercises[0]?.testCases || [])
        const allPassed = testResults.length > 0 && testResults.every(t => t.passed)
        setIsSuccess(allPassed)
        
        if (allPassed) {
          const stars = calculateStars(code, result.executionTime)
          const currentProgress = getUserProgress()
          const newProgress = completeLesson(lesson.id, stars)
          
          if (newProgress.level > currentProgress.level) {
            console.log('Level up!')
          }
          
          if (newProgress.badges.length > currentProgress.badges.length) {
            console.log('Badge earned!')
          }
        }
      } else {
        setOutput(result.error || '実行エラーが発生しました')
        setIsSuccess(false)
      }
    } catch (error) {
      setOutput('コードの実行中にエラーが発生しました')
      setIsSuccess(false)
    }
    
    setIsRunning(false)
  }
  
  // その他の関数
  const resetCode = () => {
    if (lesson) {
      setCode(lesson.content.initialCode)
      setOutput('')
      setIsSuccess(false)
    }
  }
  
  const showNextHint = () => {
    if (lesson && currentHintIndex < lesson.content.hints.length - 1) {
      setCurrentHintIndex(currentHintIndex + 1)
    }
  }
  
  const calculateStars = (code: string, executionTime?: number): number => {
    if (!lesson) return 1
    
    let stars = 1
    
    if (code.length < lesson.content.solution.length * 1.2) {
      stars = Math.min(stars + 1, 3)
    }
    
    if (executionTime && executionTime < 1000) {
      stars = Math.min(stars + 1, 3)
    }
    
    return stars
  }

  // ローディング状態
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navigation />
        <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">読み込み中...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // レッスンが見つからない場合
  if (!lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navigation />
        <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">レッスンが見つかりません</h1>
            <p className="text-gray-600 mb-4">レッスンID: {lessonId}</p>
            <Link href="/learn" className="text-blue-600 hover:underline">
              学習ページに戻る
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // メインレンダリング
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link 
            href="/learn"
            className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            レッスン一覧に戻る
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{lesson.title}</h1>
            <p className="text-gray-600 mt-1">{lesson.description}</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-6">
          <button
            onClick={() => setActiveTab('lesson')}
            className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
              activeTab === 'lesson'
                ? 'bg-white text-blue-600 shadow-lg'
                : 'bg-white/50 text-gray-600 hover:bg-white/70'
            }`}
          >
            <Code2 className="w-5 h-5 mr-2" />
            レッスン
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
              activeTab === 'quiz'
                ? 'bg-white text-purple-600 shadow-lg'
                : 'bg-white/50 text-gray-600 hover:bg-white/70'
            }`}
          >
            <HelpCircle className="w-5 h-5 mr-2" />
            クイズ ({lesson.quiz?.length || 0}問)
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'lesson' ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Content */}
            <div className="space-y-6">
            {/* Lesson Content */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">レッスン内容</h2>
              <div className="prose max-w-none text-gray-700">
                <div className="whitespace-pre-line leading-relaxed">
                  {lesson.content.explanation}
                </div>
              </div>
            </div>

            {/* Example Code */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">サンプルコード</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm">
                  <code>{lesson.content.example}</code>
                </pre>
              </div>
            </div>

            {/* Hints */}
            {showHints && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-5 h-5 text-yellow-600 mr-2" />
                  <h3 className="text-lg font-semibold text-yellow-800">
                    ヒント {currentHintIndex + 1} / {lesson.content.hints.length}
                  </h3>
                </div>
                <p className="text-yellow-700 mb-4">{lesson.content.hints[currentHintIndex]}</p>
                {currentHintIndex < lesson.content.hints.length - 1 && (
                  <button
                    onClick={showNextHint}
                    className="text-yellow-600 hover:text-yellow-800 font-medium"
                  >
                    次のヒント →
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Right Column - Code Editor */}
          <div className="space-y-6">
            {/* Exercise Description */}
            {lesson.exercises && lesson.exercises[0] && (
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">
                  練習問題: {lesson.exercises[0].title}
                </h3>
                <p className="text-blue-700 leading-relaxed">
                  {lesson.exercises[0].description}
                </p>
              </div>
            )}

            {/* Code Editor */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">コードエディタ</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowHints(!showHints)}
                    className="inline-flex items-center px-3 py-2 text-sm bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors"
                  >
                    <Lightbulb className="w-4 h-4 mr-1" />
                    ヒント
                  </button>
                  <button
                    onClick={resetCode}
                    className="inline-flex items-center px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4 mr-1" />
                    リセット
                  </button>
                  <button
                    onClick={runCode}
                    disabled={isRunning}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50"
                  >
                    <Play className="w-4 h-4 mr-1" />
                    {isRunning ? '実行中...' : '実行'}
                  </button>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <MonacoEditor
                  height="400px"
                  defaultLanguage="java"
                  value={code}
                  onChange={(value) => setCode(value || '')}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                  }}
                />
              </div>
            </div>

            {/* Output */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">実行結果</h3>
              <div className="bg-gray-900 rounded-lg p-4 min-h-[120px]">
                {output ? (
                  <div className="flex items-start">
                    {isSuccess ? (
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                    )}
                    <pre className={`text-sm ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
                      {output}
                    </pre>
                  </div>
                ) : (
                  <div className="text-gray-500 text-sm">
                    コードを実行してください...
                  </div>
                )}
              </div>
              
              {isSuccess && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">素晴らしい！正しく実行されました！</span>
                  </div>
                  <div className="mt-2">
                    <Link 
                      href="/learn"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      次のレッスンに進む
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        ) : (
          /* Quiz Tab Content */
          <div className="max-w-4xl mx-auto">
            {lesson.quiz && lesson.quiz.length > 0 ? (
              <QuizComponent 
                quizzes={lesson.quiz}
                onComplete={(score) => {
                  console.log('Quiz completed with score:', score)
                  // ここでクイズの結果を保存する処理を追加できます
                }}
              />
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  クイズはまだ準備中です
                </h3>
                <p className="text-gray-600">
                  このレッスンのクイズは現在作成中です。<br />
                  まずはレッスンタブでコーディングの練習をしてください。
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}