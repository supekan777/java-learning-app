'use client'

import { useState } from 'react'
import { Quiz } from '@/types/lesson'
import { CheckCircle, XCircle, ChevronRight, RefreshCw, Trophy } from 'lucide-react'

interface QuizComponentProps {
  quizzes: Quiz[]
  onComplete?: (score: number) => void
}

export default function QuizComponent({ quizzes, onComplete }: QuizComponentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(quizzes.length).fill(null))
  const [isCompleted, setIsCompleted] = useState(false)

  const currentQuestion = quizzes[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === quizzes.length - 1

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    setShowExplanation(true)
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = selectedAnswer
    setAnswers(newAnswers)

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setIsCompleted(true)
      if (onComplete) {
        onComplete(score)
      }
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnswers(new Array(quizzes.length).fill(null))
    setIsCompleted(false)
  }

  if (isCompleted) {
    const percentage = Math.round((score / quizzes.length) * 100)
    const isPerfect = score === quizzes.length
    
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-center">
          <div className="mb-6">
            {isPerfect ? (
              <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
            ) : (
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            )}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              クイズ完了！
            </h2>
            <p className="text-gray-600">
              お疲れ様でした！
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
              {score} / {quizzes.length}
            </div>
            <div className="text-2xl font-semibold text-gray-700">
              正解率: {percentage}%
            </div>
            {isPerfect && (
              <div className="mt-4 text-yellow-600 font-semibold">
                🎉 パーフェクト！素晴らしい！
              </div>
            )}
          </div>

          <div className="space-y-3 mb-6">
            {quizzes.map((quiz, index) => {
              const userAnswer = answers[index]
              const isCorrect = userAnswer === quiz.correctAnswer
              
              return (
                <div
                  key={quiz.id}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    isCorrect ? 'bg-green-50' : 'bg-red-50'
                  }`}
                >
                  <div className="flex items-center">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 mr-2" />
                    )}
                    <span className="font-medium">問題 {index + 1}</span>
                  </div>
                  <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                    {isCorrect ? '正解' : '不正解'}
                  </span>
                </div>
              )
            })}
          </div>

          <button
            onClick={handleRestart}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            もう一度挑戦
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>問題 {currentQuestionIndex + 1} / {quizzes.length}</span>
          <span>スコア: {score}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / quizzes.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {currentQuestion.question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isCorrect = index === currentQuestion.correctAnswer
            const showResult = showExplanation

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                  showResult && isCorrect
                    ? 'border-green-500 bg-green-50'
                    : showResult && isSelected && !isCorrect
                    ? 'border-red-500 bg-red-50'
                    : isSelected
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                } ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-3 ${
                        showResult && isCorrect
                          ? 'border-green-500 bg-green-100'
                          : showResult && isSelected && !isCorrect
                          ? 'border-red-500 bg-red-100'
                          : isSelected
                          ? 'border-blue-500 bg-blue-100'
                          : 'border-gray-300'
                      }`}
                    >
                      <span className="text-sm font-semibold">
                        {String.fromCharCode(65 + index)}
                      </span>
                    </div>
                    <span className={`${
                      showResult && isCorrect
                        ? 'text-green-700 font-semibold'
                        : showResult && isSelected && !isCorrect
                        ? 'text-red-700'
                        : ''
                    }`}>
                      {option}
                    </span>
                  </div>
                  {showResult && isCorrect && (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <XCircle className="w-6 h-6 text-red-600" />
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <h4 className="font-semibold text-blue-900 mb-2">解説</h4>
          <p className="text-blue-800">{currentQuestion.explanation}</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handleRestart}
          className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          最初から
        </button>
        
        {!showExplanation ? (
          <button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
              selectedAnswer === null
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
            }`}
          >
            回答する
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
          >
            {isLastQuestion ? '結果を見る' : '次の問題'}
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        )}
      </div>
    </div>
  )
}