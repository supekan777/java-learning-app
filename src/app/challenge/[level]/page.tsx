'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, Trophy, Target, Brain } from 'lucide-react'
import { challengeLevels, ChallengeLevel } from '@/data/challengeData'
import { Quiz } from '@/types/lesson'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

interface PageProps {
  params: Promise<{ level: string }>
}

export default function ChallengeLevelPage({ params }: PageProps) {
  const [levelId, setLevelId] = useState<number | null>(null)
  const [challengeLevel, setChallengeLevel] = useState<ChallengeLevel | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [answers, setAnswers] = useState<{ questionId: number, answer: number, isCorrect: boolean }[]>([])
  const [isFinished, setIsFinished] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // パラメータの解決
  useEffect(() => {
    let isMounted = true
    
    params.then((resolvedParams) => {
      if (isMounted) {
        const id = parseInt(resolvedParams.level)
        const foundLevel = challengeLevels.find(l => l.id === id)
        
        setLevelId(id)
        setChallengeLevel(foundLevel || null)
        setIsLoading(false)
      }
    }).catch(() => {
      if (isMounted) {
        setIsLoading(false)
      }
    })

    return () => {
      isMounted = false
    }
  }, [params])

  const currentQuestion = challengeLevel?.questions[currentQuestionIndex]

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || !currentQuestion) return

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer
    const newAnswer = {
      questionId: currentQuestion.id,
      answer: selectedAnswer,
      isCorrect
    }

    setAnswers(prev => [...prev, newAnswer])
    setShowResult(true)
  }

  const handleNextQuestion = () => {
    if (!challengeLevel) return

    if (currentQuestionIndex < challengeLevel.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setIsFinished(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setAnswers([])
    setIsFinished(false)
  }

  const calculateScore = () => {
    const correctAnswers = answers.filter(a => a.isCorrect).length
    return {
      correct: correctAnswers,
      total: answers.length,
      percentage: Math.round((correctAnswers / answers.length) * 100)
    }
  }

  // ローディング状態
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
        <Navigation />
        <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
            <p className="text-gray-600">読み込み中...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // レベルが見つからない場合
  if (!challengeLevel) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
        <Navigation />
        <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">チャレンジレベルが見つかりません</h1>
            <p className="text-gray-600 mb-4">レベルID: {levelId}</p>
            <Link href="/challenge" className="text-red-600 hover:underline">
              チャレンジ一覧に戻る
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link 
            href="/challenge"
            className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            チャレンジ一覧に戻る
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{challengeLevel.name}レベル チャレンジ</h1>
            <p className="text-gray-600 mt-1">{challengeLevel.description}</p>
          </div>
        </div>

        {/* Challenge Finished */}
        {isFinished && (
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className={`w-20 h-20 bg-gradient-to-r ${challengeLevel.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎉 チャレンジ完了！ 🎉</h2>
            
            {(() => {
              const score = calculateScore()
              return (
                <div className="mb-8">
                  <div className="text-6xl font-bold text-red-600 mb-2">{score.percentage}%</div>
                  <div className="text-xl text-gray-700 mb-4">
                    {score.correct}問正解 / {score.total}問中
                  </div>
                  <div className="text-lg text-gray-600">
                    {score.percentage >= 90 ? '🌟 素晴らしい！完璧に近いです！' :
                     score.percentage >= 80 ? '🎊 とても良いスコアです！' :
                     score.percentage >= 70 ? '👏 良い結果です！' :
                     score.percentage >= 60 ? '📚 もう少し学習が必要ですね' :
                     '💪 基礎から復習しましょう！'}
                  </div>
                </div>
              )
            })()}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRestart}
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${challengeLevel.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-200`}
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                もう一回チャレンジ
              </button>
              <Link
                href="/challenge"
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200"
              >
                他のレベルに挑戦
              </Link>
            </div>
          </div>
        )}

        {/* Question */}
        {!isFinished && currentQuestion && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  問題 {currentQuestionIndex + 1} / {challengeLevel.questions.length}
                </span>
                <span className={`text-sm font-medium bg-gradient-to-r ${challengeLevel.color} text-transparent bg-clip-text`}>
                  {challengeLevel.name}レベル
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`bg-gradient-to-r ${challengeLevel.color} h-2 rounded-full transition-all duration-300`}
                  style={{ width: `${((currentQuestionIndex + 1) / challengeLevel.questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question Text */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {currentQuestion.question}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                    showResult
                      ? index === currentQuestion.correctAnswer
                        ? 'bg-green-50 border-green-500 text-green-800'
                        : index === selectedAnswer && index !== currentQuestion.correctAnswer
                        ? 'bg-red-50 border-red-500 text-red-800'
                        : 'bg-gray-50 border-gray-200 text-gray-600'
                      : selectedAnswer === index
                      ? `border-red-500 bg-red-50`
                      : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                  }`}
                >
                  <div className="flex items-center">
                    <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-3 text-sm font-semibold ${
                      showResult
                        ? index === currentQuestion.correctAnswer
                          ? 'bg-green-500 border-green-500 text-white'
                          : index === selectedAnswer && index !== currentQuestion.correctAnswer
                          ? 'bg-red-500 border-red-500 text-white'
                          : 'border-gray-300 text-gray-500'
                        : selectedAnswer === index
                        ? 'bg-red-500 border-red-500 text-white'
                        : 'border-gray-300 text-gray-500'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                    {showResult && index === currentQuestion.correctAnswer && (
                      <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                    )}
                    {showResult && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                      <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Explanation */}
            {showResult && (
              <div className={`p-4 rounded-xl mb-6 ${
                selectedAnswer === currentQuestion.correctAnswer 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                <h3 className={`font-semibold mb-2 ${
                  selectedAnswer === currentQuestion.correctAnswer ? 'text-green-800' : 'text-red-800'
                }`}>
                  {selectedAnswer === currentQuestion.correctAnswer ? '✅ 正解！' : '❌ 不正解'}
                </h3>
                <p className="text-gray-700">{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-center">
              {!showResult ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    selectedAnswer !== null
                      ? `bg-gradient-to-r ${challengeLevel.color} text-white hover:opacity-90`
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  回答する
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className={`px-8 py-3 bg-gradient-to-r ${challengeLevel.color} text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-200`}
                >
                  {currentQuestionIndex < challengeLevel.questions.length - 1 ? '次の問題' : '結果を見る'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}