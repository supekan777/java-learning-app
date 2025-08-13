'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Brain, Trophy, Target, CheckCircle, Lock } from 'lucide-react'
import { challengeLevels } from '@/data/challengeData'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ChallengePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link 
            href="/"
            className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            ホームに戻る
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">100問チャレンジ</h1>
            <p className="text-gray-600 mt-1">Java知識の総合力を試そう！</p>
          </div>
        </div>

        {/* Challenge Overview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">🧠 Java知識チャレンジ 🧠</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              5段階の難易度に分かれた100問ずつのチャレンジ！<br />
              あなたのJava知識はどこまで通用するかな？
            </p>
          </div>

          {/* Challenge Statistics */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">500問</div>
              <div className="text-sm text-red-600">総問題数</div>
            </div>
            <div className="text-center p-4 bg-pink-50 rounded-lg">
              <div className="text-2xl font-bold text-pink-600">5段階</div>
              <div className="text-sm text-pink-600">難易度レベル</div>
            </div>
            <div className="text-center p-4 bg-rose-50 rounded-lg">
              <div className="text-2xl font-bold text-rose-600">4択</div>
              <div className="text-sm text-rose-600">選択式問題</div>
            </div>
          </div>
        </div>

        {/* Challenge Levels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {challengeLevels.map((level, index) => (
            <div key={level.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <div className="text-center">
                {/* Level Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${level.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-2xl font-bold text-white">{level.id}</div>
                </div>
                
                {/* Level Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{level.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{level.description}</p>
                
                {/* Progress Info */}
                <div className="mb-4">
                  <div className="text-lg font-semibold text-gray-700">
                    {level.questions.length}/100問
                  </div>
                  <div className="text-sm text-gray-500">準備済み</div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className={`bg-gradient-to-r ${level.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${(level.questions.length / 100) * 100}%` }}
                  ></div>
                </div>
                
                {/* Challenge Button */}
                <Link
                  href={`/challenge/${level.id}`}
                  className={`w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r ${level.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-200`}
                >
                  <Target className="w-4 h-4 mr-2" />
                  チャレンジ開始
                </Link>
                
                {/* Status */}
                <div className="mt-3 text-xs text-gray-500">
                  {level.questions.length < 100 ? (
                    <span className="inline-flex items-center">
                      <Lock className="w-3 h-3 mr-1" />
                      問題追加中...
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-green-600">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      100問完備
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rules and Tips */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">チャレンジルール</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">📋 ルール</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 各レベル100問の4択クイズ</li>
                <li>• 時間制限なし、じっくり考えてOK</li>
                <li>• 途中保存機能で中断・再開可能</li>
                <li>• 何度でもチャレンジ可能</li>
                <li>• レベル順でなくても挑戦OK</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">💡 コツ</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• まずは自分のレベルから挑戦</li>
                <li>• 間違えた問題は解説をしっかり読む</li>
                <li>• 複数回挑戦して知識を定着させる</li>
                <li>• 分からない問題はレッスンで復習</li>
                <li>• 上位レベルは段階的に挑戦</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}