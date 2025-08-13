'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Code, Timer, Target, Trophy } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function CodeCopyPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    {
      id: 'basic',
      name: '基本構文',
      description: 'Javaの基本的な構文とメソッドの模写練習',
      color: 'from-green-500 to-emerald-500',
      icon: '📝',
      exercises: 15,
      avgTime: '3-5分',
      difficulty: '初級'
    },
    {
      id: 'object-oriented',
      name: 'オブジェクト指向',
      description: 'クラス設計とオブジェクト指向プログラミングの実践',
      color: 'from-blue-500 to-cyan-500',
      icon: '🏗️',
      exercises: 12,
      avgTime: '5-10分',
      difficulty: '中級'
    },
    {
      id: 'algorithms',
      name: 'アルゴリズム',
      description: 'よく使われるアルゴリズムとデータ構造の実装',
      color: 'from-purple-500 to-pink-500',
      icon: '🧠',
      exercises: 10,
      avgTime: '10-15分',
      difficulty: '上級'
    },
    {
      id: 'enterprise',
      name: 'エンタープライズパターン',
      description: '実際の企業システムで使われるデザインパターン',
      color: 'from-orange-500 to-red-500',
      icon: '🏢',
      exercises: 8,
      avgTime: '15-20分',
      difficulty: '上級'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            href="/practical"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            実務チャレンジに戻る
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-4">
              <Code className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            コード模写練習
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            実務で使われる実際のコードを正確にタイピングして、
            <br />
            良いコードパターンとプログラミング技術を身につけます。
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                <span className="text-2xl">{category.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.name}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <Code className="w-4 h-4 mr-2" />
                  <span>{category.exercises}個の練習問題</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Timer className="w-4 h-4 mr-2" />
                  <span>平均時間: {category.avgTime}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Target className="w-4 h-4 mr-2" />
                  <span>難易度: {category.difficulty}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className={`w-full py-3 px-6 bg-gradient-to-r ${category.color} text-white font-semibold rounded-xl hover:opacity-90 transition-opacity`}>
                  練習開始
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">練習の特徴</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Timer className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">タイピング速度測定</h3>
              <p className="text-sm text-gray-600">
                コード入力の速度と正確性を測定し、プログラミング効率を向上
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">実用的なコード</h3>
              <p className="text-sm text-gray-600">
                実際のプロジェクトで使用されているコードパターンを練習
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">進捗トラッキング</h3>
              <p className="text-sm text-gray-600">
                練習履歴と上達具合を記録し、継続的な学習をサポート
              </p>
            </div>
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Code className="w-8 h-8 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">実装準備中</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            コード模写練習の詳細機能は現在開発中です。
            実際のプロジェクトコードを使った実践的な練習環境をお楽しみに！
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}