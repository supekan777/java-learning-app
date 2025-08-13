'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, FileText, Users, Lightbulb, CheckSquare } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function RequirementsPage() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null)

  const modules = [
    {
      id: 'basics',
      name: '要件定義の基礎',
      description: 'システム開発における要件定義の役割と重要性を学習',
      color: 'from-green-500 to-emerald-500',
      icon: '📋',
      lessons: 8,
      duration: '2-3時間',
      topics: ['要件定義とは', 'ステークホルダー分析', '機能要件vs非機能要件']
    },
    {
      id: 'user-stories',
      name: 'ユーザーストーリー作成',
      description: 'ユーザー視点での要求をストーリー形式で整理する手法',
      color: 'from-blue-500 to-cyan-500',
      icon: '👥',
      lessons: 6,
      duration: '3-4時間',
      topics: ['ユーザーペルソナ', 'ストーリーマッピング', 'アクセプタンス条件']
    },
    {
      id: 'system-design',
      name: 'システム設計への落とし込み',
      description: '要件を技術的な仕様書に変換する実践的なアプローチ',
      color: 'from-purple-500 to-pink-500',
      icon: '🏗️',
      lessons: 7,
      duration: '4-5時間',
      topics: ['画面設計', 'データベース設計', 'API設計']
    },
    {
      id: 'practical',
      name: '実践演習',
      description: '実際のプロジェクトを想定した要件定義の総合演習',
      color: 'from-orange-500 to-red-500',
      icon: '💼',
      lessons: 5,
      duration: '5-6時間',
      topics: ['ケーススタディ', '要件レビュー', 'トレーサビリティ']
    }
  ]

  const skills = [
    {
      icon: Users,
      title: 'ステークホルダー管理',
      description: '関係者との効果的なコミュニケーション手法'
    },
    {
      icon: Lightbulb,
      title: '要求分析',
      description: '曖昧な要求を具体的な仕様に変換する技術'
    },
    {
      icon: CheckSquare,
      title: '検証・検收',
      description: '要件の妥当性を確認する評価手法'
    },
    {
      icon: FileText,
      title: 'ドキュメント作成',
      description: '分かりやすい要件定義書の作成スキル'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4">
              <FileText className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            要件定義学習
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            システム開発の成功を左右する要件定義の技術を習得。
            <br />
            顧客の要望を正確にシステム仕様に落とし込む力を身につけます。
          </p>
        </div>

        {/* Learning Modules */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {modules.map((module) => (
            <div
              key={module.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedModule(module.id)}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${module.color} rounded-2xl flex items-center justify-center mb-6`}>
                <span className="text-2xl">{module.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{module.name}</h3>
              <p className="text-gray-600 mb-6">{module.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>{module.lessons}つのレッスン</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckSquare className="w-4 h-4 mr-2" />
                  <span>学習時間: {module.duration}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">主要トピック:</h4>
                <div className="flex flex-wrap gap-2">
                  {module.topics.map((topic, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <button className={`w-full py-3 px-6 bg-gradient-to-r ${module.color} text-white font-semibold rounded-xl hover:opacity-90 transition-opacity`}>
                  学習開始
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">習得できるスキル</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">コンテンツ準備中</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            要件定義学習の詳細なカリキュラムは現在作成中です。
            実践的なケーススタディと豊富な演習問題をお楽しみに！
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}