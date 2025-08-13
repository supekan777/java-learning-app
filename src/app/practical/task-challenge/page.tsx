'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Briefcase, Clock, Star } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { practicalChallenges } from '@/data/practicalChallenges'

export default function TaskChallengePage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('beginner')

  const difficulties = [
    {
      id: 'beginner',
      name: '初級',
      description: '基本的な業務指示の理解と単純なプログラム作成',
      color: 'from-green-500 to-emerald-500',
      icon: '🌱',
      tasks: 10,
      estimatedTime: '15-30分'
    },
    {
      id: 'intermediate',
      name: '中級',
      description: '複数の機能を持つアプリケーションの作成',
      color: 'from-blue-500 to-cyan-500',
      icon: '🚀',
      tasks: 8,
      estimatedTime: '30-60分'
    },
    {
      id: 'advanced',
      name: '上級',
      description: '複雑な業務要件の解析と高度なシステム実装',
      color: 'from-purple-500 to-pink-500',
      icon: '⚡',
      tasks: 6,
      estimatedTime: '60-120分'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mb-4">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            実務指示チャレンジ
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            実際の業務で受ける指示を基に、要求されるシステムを設計・実装します。
            <br />
            現場で必要な指示理解力と問題解決能力を身につけましょう。
          </p>
        </div>

        {/* Difficulty Selection with Challenges */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {difficulties.map((difficulty) => {
            const difficultyMap: { [key: string]: 'beginner' | 'intermediate' | 'advanced' } = {
              'beginner': 'beginner',
              'intermediate': 'intermediate',
              'advanced': 'advanced'
            };
            const challengesForDifficulty = practicalChallenges.filter(
              challenge => challenge.difficulty === difficultyMap[difficulty.id]
            );
            
            return (
              <div
                key={difficulty.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${difficulty.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <span className="text-2xl">{difficulty.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{difficulty.name}</h3>
                  <p className="text-gray-600 mb-6">{difficulty.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span>{difficulty.tasks}個のタスク</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>目安時間: {difficulty.estimatedTime}</span>
                    </div>
                  </div>
                </div>

                {/* Challenges List */}
                {challengesForDifficulty.length > 0 && (
                  <div className="border-t border-gray-100 bg-gray-50 p-4">
                    <div className="space-y-3">
                      {challengesForDifficulty.map((challenge) => (
                        <Link 
                          key={challenge.id}
                          href={`/practical/task-challenge/${challenge.id}`}
                          className="block bg-white rounded-lg p-4 hover:shadow-md transition-all duration-200 group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                                <Briefcase className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                                  {challenge.title}
                                </h4>
                                <p className="text-xs text-gray-500">{challenge.estimatedTime}</p>
                              </div>
                            </div>
                            <div className="text-orange-600 group-hover:translate-x-1 transition-transform">
                              →
                            </div>
                          </div>
                        </Link>
                      ))}
                      {/* 残りのタスク表示 */}
                      {difficulty.id === 'beginner' && challengesForDifficulty.length < difficulty.tasks && (
                        <div className="text-center py-3 text-gray-400 text-sm">
                          残り{difficulty.tasks - challengesForDifficulty.length}問は準備中...
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {/* 中級・上級の場合 */}
                {challengesForDifficulty.length === 0 && (
                  <div className="border-t border-gray-100 bg-gray-50 p-6">
                    <p className="text-center text-gray-500 text-sm">準備中...</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* More Coming Soon */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Star className="w-8 h-8 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">更なるチャレンジ準備中</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            初級レベルは全10問まで追加予定です。現在2問公開中。
            <br />
            中級・上級レベルの実務チャレンジも順次追加予定です。
            実際の業務シナリオを基にした実践的なチャレンジをお楽しみに！
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}