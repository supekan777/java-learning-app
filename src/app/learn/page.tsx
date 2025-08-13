'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Play, Lock, CheckCircle, Star, Trophy, Target, Zap, Calendar, Award, TrendingUp } from 'lucide-react'
import { lessons } from '@/data/lessons'
import { getUserProgress, isLessonUnlocked, getExpToNextLevel } from '@/services/progressService'
import { UserProgress } from '@/types/lesson'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function LearnPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setProgress(getUserProgress())
  }, [])

  if (!mounted || !progress) {
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

  const completedCount = progress.completedLessons.length
  const totalStars = Object.values(progress.lessonProgress).reduce((sum, p) => sum + p.stars, 0)
  const progressPercentage = (completedCount / lessons.length) * 100
  const expInfo = getExpToNextLevel(progress.experience, progress.level)

  // レッスンデータに進捗情報をマージ
  const enrichedLessons = lessons.map(lesson => ({
    ...lesson,
    completed: progress.completedLessons.includes(lesson.id),
    locked: !isLessonUnlocked(lesson.id),
    stars: progress.lessonProgress[lesson.id]?.stars || 0
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Link 
              href="/"
              className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-colors mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              ホームに戻る
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Java学習コース</h1>
              <p className="text-gray-600 mt-1">段階的にJavaを学んで、プロフェッショナルを目指そう</p>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Lv.{progress.level}</div>
              <div className="text-xs text-gray-500">レベル</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{progress.streak}</div>
              <div className="text-xs text-gray-500">連続日数</div>
            </div>
          </div>
        </div>

        {/* User Progress Dashboard */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Main Progress */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">学習進捗</h2>
              <span className="text-sm text-gray-600">{completedCount} / {lessons.length} 完了</span>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                  style={{ width: `${Math.max(progressPercentage, 8)}%` }}
                >
                  {progressPercentage > 10 && (
                    <span className="text-xs text-white font-medium">
                      {Math.round(progressPercentage)}%
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>開始</span>
                <span>完了</span>
              </div>
            </div>

            {/* Level Progress */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="font-medium text-gray-900">レベル {progress.level}</span>
                </div>
                <span className="text-sm text-gray-600">
                  {expInfo.current} / {expInfo.required} EXP
                </span>
              </div>
              <div className="w-full bg-white/50 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(expInfo.percentage, 2)}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Stats Panel */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">統計</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">完了レッスン</span>
                </div>
                <span className="font-bold text-gray-900">{completedCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-gray-700">獲得スター</span>
                </div>
                <span className="font-bold text-gray-900">{totalStars}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Zap className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-gray-700">連続学習</span>
                </div>
                <span className="font-bold text-gray-900">{progress.streak}日</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-gray-700">バッジ</span>
                </div>
                <span className="font-bold text-gray-900">{progress.badges.length}</span>
              </div>
            </div>

            {/* Recent Badges */}
            {progress.badges.length > 0 && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-700 mb-2">最新バッジ</h4>
                <div className="flex flex-wrap gap-2">
                  {progress.badges.slice(-3).map((badge) => (
                    <div 
                      key={badge.id}
                      className="flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 px-2 py-1 rounded-full"
                      title={badge.description}
                    >
                      <span className="text-lg mr-1">{badge.icon}</span>
                      <span className="text-xs font-medium text-gray-700">{badge.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">レッスン一覧</h2>
            <div className="text-sm text-gray-600">
              {enrichedLessons.filter(l => !l.locked).length} / {lessons.length} アンロック済み
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrichedLessons.map((lesson, index) => (
              <div 
                key={lesson.id}
                className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-200 relative overflow-hidden ${
                  lesson.locked 
                    ? 'opacity-60 cursor-not-allowed' 
                    : 'hover:shadow-xl hover:transform hover:scale-105 cursor-pointer'
                }`}
              >
                {/* Progress Indicator */}
                {lesson.completed && (
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-green-500">
                    <CheckCircle className="absolute -top-6 -right-1 w-4 h-4 text-white" />
                  </div>
                )}

                {/* Lesson Number */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {lesson.id}
                </div>

                {/* Lesson Header */}
                <div className="flex items-center justify-between mb-4 pt-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    lesson.completed 
                      ? 'bg-green-100' 
                      : lesson.locked 
                        ? 'bg-gray-100' 
                        : 'bg-blue-100'
                  }`}>
                    {lesson.completed ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : lesson.locked ? (
                      <Lock className="w-6 h-6 text-gray-400" />
                    ) : (
                      <Play className="w-6 h-6 text-blue-600" />
                    )}
                  </div>
                  
                  {/* Stars */}
                  <div className="flex">
                    {[1, 2, 3].map((star) => (
                      <Star 
                        key={star}
                        className={`w-4 h-4 ${
                          star <= lesson.stars 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Lesson Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {lesson.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {lesson.description}
                </p>

                {/* Lesson Meta */}
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className={`px-3 py-1 rounded-full font-medium ${
                    lesson.difficulty === '初級' 
                      ? 'bg-green-100 text-green-700'
                      : lesson.difficulty === '中級'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                  }`}>
                    {lesson.difficulty}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{lesson.duration}</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6">
                  {lesson.locked ? (
                    <div className="w-full py-3 px-4 bg-gray-100 text-gray-400 rounded-xl text-center font-medium">
                      <Lock className="w-4 h-4 inline mr-1" />
                      前のレッスンを完了
                    </div>
                  ) : (
                    <Link
                      href={`/learn/${lesson.id}`}
                      className="block w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-center font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                    >
                      {lesson.completed ? (
                        <>
                          <Trophy className="w-4 h-4 inline mr-1" />
                          復習する
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 inline mr-1" />
                          学習開始
                        </>
                      )}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Challenge Banner */}
        {progress.streak > 0 && (
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">🔥 連続学習記録</h3>
                <p className="text-orange-100">
                  素晴らしい！{progress.streak}日連続で学習しています。この調子で続けましょう！
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{progress.streak}</div>
                <div className="text-orange-200 text-sm">日連続</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}