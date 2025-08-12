'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Play, Code2, Trophy, Target, BookOpen } from 'lucide-react'
import { getUserProgress } from '@/services/progressService'
import { UserProgress } from '@/types/lesson'

export default function HomePage() {
  const [progress, setProgress] = useState<UserProgress | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setProgress(getUserProgress())
  }, [])
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4">
              <Code2 className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Java学習
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              マスター
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            毎日少しずつ、楽しくJavaを学ぼう。
            <br />
            ゲーミフィケーション機能で継続学習をサポート！
          </p>
          <Link 
            href="/learn"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2" />
            学習を始める
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">段階的学習</h3>
            <p className="text-gray-600">
              Java入門から実践プロジェクトまで、段階的に学習できるカリキュラム
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">実践的コーディング</h3>
            <p className="text-gray-600">
              ブラウザ上でJavaコードを実際に書いて実行。すぐに結果が確認できる
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">ゲーミフィケーション</h3>
            <p className="text-gray-600">
              レベルアップ、バッジ、連続学習日数で楽しく継続学習
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">あなたの学習状況</h2>
          {mounted && progress ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{progress.completedLessons.length}</div>
                <div className="text-sm text-gray-600">完了レッスン</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <div className="text-2xl font-bold text-green-600">{progress.level}</div>
                </div>
                <div className="text-2xl font-bold text-gray-900">レベル</div>
                <div className="text-sm text-gray-600">現在レベル</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <div className="text-2xl font-bold text-orange-600">{progress.streak}</div>
                </div>
                <div className="text-2xl font-bold text-gray-900">日</div>
                <div className="text-sm text-gray-600">連続学習</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <Trophy className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{progress.badges.length}</div>
                <div className="text-sm text-gray-600">獲得バッジ</div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <div className="animate-pulse bg-blue-200 rounded-full w-8 h-8"></div>
                </div>
                <div className="text-2xl font-bold text-gray-900">-</div>
                <div className="text-sm text-gray-600">完了レッスン</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <div className="animate-pulse bg-green-200 rounded-full w-8 h-8"></div>
                </div>
                <div className="text-2xl font-bold text-gray-900">-</div>
                <div className="text-sm text-gray-600">現在レベル</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <div className="animate-pulse bg-orange-200 rounded-full w-8 h-8"></div>
                </div>
                <div className="text-2xl font-bold text-gray-900">-</div>
                <div className="text-sm text-gray-600">連続学習</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <div className="animate-pulse bg-purple-200 rounded-full w-8 h-8"></div>
                </div>
                <div className="text-2xl font-bold text-gray-900">-</div>
                <div className="text-sm text-gray-600">獲得バッジ</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
