'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Briefcase, Code, FileText, Clock, Users, Lightbulb } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PracticalChallengePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-slate-600 to-blue-600 rounded-2xl mb-4">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            実務
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-blue-600">
              チャレンジ
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            実際の開発現場で必要なスキルを身につけよう。
            <br />
            実務指示の理解から、コード実装、要件定義まで幅広くカバー！
          </p>
        </div>

        {/* Challenge Categories */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* 実務指示チャレンジ */}
          <Link 
            href="/practical/task-challenge"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">実務指示チャレンジ</h3>
            <p className="text-gray-600 mb-6">
              実際の業務で受ける指示に従って、要求されるプログラムを作成。
              現場で必要な指示理解力と実装力を養います。
            </p>
            <div className="flex items-center text-orange-600 font-semibold">
              <span>チャレンジを開始</span>
              <Clock className="w-4 h-4 ml-2" />
            </div>
            <div className="mt-4 text-sm text-gray-500">
              • 実際の業務シナリオ<br />
              • 段階的なヒント機能<br />
              • 複数の解法例を提示
            </div>
          </Link>

          {/* コード模写練習 */}
          <Link 
            href="/practical/code-copy"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">コード模写練習</h3>
            <p className="text-gray-600 mb-6">
              実務で使われる実際のコードを模写して、
              良いコードの書き方とパターンを身につけます。
            </p>
            <div className="flex items-center text-blue-600 font-semibold">
              <span>練習を開始</span>
              <Code className="w-4 h-4 ml-2" />
            </div>
            <div className="mt-4 text-sm text-gray-500">
              • 実際のプロジェクトコード<br />
              • タイピング精度測定<br />
              • コードパターン習得
            </div>
          </Link>

          {/* 要件定義学習 */}
          <Link 
            href="/practical/requirements"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">要件定義学習</h3>
            <p className="text-gray-600 mb-6">
              システム開発の出発点となる要件定義の手法を学習。
              顧客の要望をシステム仕様に落とし込む技術を習得します。
            </p>
            <div className="flex items-center text-purple-600 font-semibold">
              <span>学習を開始</span>
              <FileText className="w-4 h-4 ml-2" />
            </div>
            <div className="mt-4 text-sm text-gray-500">
              • 要件定義の基礎<br />
              • ユーザーストーリー作成<br />
              • システム設計への落とし込み
            </div>
          </Link>
        </div>

        {/* 特徴セクション */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">実務チャレンジの特徴</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">実際の業務シナリオ</h3>
              <p className="text-sm text-gray-600">
                現場で実際に発生する業務をベースにした実践的な学習
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">実用的なコード</h3>
              <p className="text-sm text-gray-600">
                実際のプロジェクトで使用されているコードパターンを学習
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">段階的学習</h3>
              <p className="text-sm text-gray-600">
                初心者から上級者まで対応した段階的な難易度設定
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}