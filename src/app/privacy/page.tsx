'use client'

import { Shield, Lock, Eye, Database, Mail, Calendar } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-gray-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">プライバシーポリシー</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Java学習マスターでは、お客様の個人情報保護を重要視し、<br />
            適切な取り扱いに努めています。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-medium">最終更新日：2024年1月1日</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">はじめに</h2>
            <p className="text-gray-700 leading-relaxed">
              Java学習マスター（以下「当サービス」）は、ユーザーの皆様に安心してサービスをご利用いただくため、
              個人情報の収集、利用、管理について明確な方針を定めています。
              本プライバシーポリシーは、当サービスにおける個人情報の取り扱いについて説明するものです。
            </p>
          </div>

          {/* Information Collection */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">収集する情報</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">学習データ</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>完了したレッスン情報</li>
                  <li>学習進捗状況</li>
                  <li>クイズやチャレンジの結果</li>
                  <li>獲得したバッジや達成度</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">利用状況データ</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>アクセス日時</li>
                  <li>利用機能</li>
                  <li>タイピングゲームのスコア</li>
                  <li>学習時間</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">お問い合わせ情報</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>お名前</li>
                  <li>メールアドレス</li>
                  <li>お問い合わせ内容</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Information Usage */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">情報の利用目的</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">サービス提供</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>学習進捗の保存・表示</li>
                  <li>パーソナライズされた学習体験</li>
                  <li>レベルアップやバッジ機能</li>
                  <li>学習統計の提供</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">サービス改善</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>機能の改善・最適化</li>
                  <li>新機能の開発</li>
                  <li>ユーザビリティ向上</li>
                  <li>お問い合わせへの対応</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Storage */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">データの保存と管理</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 mb-2">ローカルストレージ</h3>
                <p className="text-purple-800 text-sm">
                  学習データはお客様のブラウザのローカルストレージに保存されます。
                  この情報は外部サーバーに送信されることはありません。
                </p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">セキュリティ対策</h3>
                <p className="text-green-800 text-sm">
                  不正アクセスや情報漏洩を防ぐため、適切な技術的・組織的安全管理措置を講じています。
                </p>
              </div>
            </div>
          </div>

          {/* Third Party */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">第三者への提供</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800">
                <strong>当サービスは、お客様の個人情報を第三者に提供することはありません。</strong>
                ただし、法令に基づく場合や、お客様の同意がある場合を除きます。
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">お問い合わせ</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              本プライバシーポリシーに関するご質問やご不明な点がございましたら、
              お気軽にお問い合わせください。
            </p>
            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                お問い合わせフォーム
              </a>
            </div>
          </div>

          {/* Changes */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">ポリシーの変更</h2>
            <p className="text-gray-700 leading-relaxed">
              当サービスは、必要に応じて本プライバシーポリシーを改定することがあります。
              重要な変更がある場合は、サービス内でお知らせいたします。
              最新のプライバシーポリシーは常に本ページに掲載されますので、定期的にご確認ください。
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}