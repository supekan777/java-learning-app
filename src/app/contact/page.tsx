'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle, AlertCircle, MessageSquare, User, AtSign } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // フォーム送信のシミュレーション
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const subjectOptions = [
    { value: '', label: '選択してください' },
    { value: 'question', label: '学習内容に関する質問' },
    { value: 'bug', label: 'バグ・不具合の報告' },
    { value: 'feature', label: '新機能の提案・要望' },
    { value: 'technical', label: '技術的なサポート' },
    { value: 'other', label: 'その他' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ご質問、ご要望、バグ報告など、お気軽にお聞かせください。<br />
            より良いサービス提供のために、皆様のご意見をお待ちしています。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">お問い合わせについて</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MessageSquare className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">学習サポート</h4>
                      <p className="text-sm text-gray-600">レッスン内容やプログラミングに関するご質問</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-orange-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">バグ報告</h4>
                      <p className="text-sm text-gray-600">システムの不具合やエラーのご報告</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">機能要望</h4>
                      <p className="text-sm text-gray-600">新機能のご提案やサービス改善のご意見</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">📚 よくある質問</h3>
                <p className="text-blue-100 text-sm">
                  お問い合わせの前に、学習の進め方やよくある技術的な質問については、
                  レッスン内のヒント機能もご活用ください。
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">メッセージを送信</h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <p className="text-green-800 font-medium">お問い合わせを受け付けました！</p>
                    </div>
                    <p className="text-green-700 text-sm mt-1">
                      ご連絡いただきありがとうございます。内容を確認次第、お返事いたします。
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                      <p className="text-red-800 font-medium">送信に失敗しました</p>
                    </div>
                    <p className="text-red-700 text-sm mt-1">
                      申し訳ございません。もう一度お試しください。
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="山田太郎"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      <AtSign className="w-4 h-4 inline mr-1" />
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      お問い合わせ種別 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {subjectOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      メッセージ <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="お問い合わせ内容を詳しくお聞かせください..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          送信中...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="w-5 h-5 mr-2" />
                          メッセージを送信
                        </div>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>個人情報の取り扱い：</strong>
                    いただいた個人情報は、お問い合わせへの回答のみに使用し、
                    <Link href="/privacy" className="text-blue-600 hover:underline ml-1">
                      プライバシーポリシー
                    </Link>
                    に従って適切に管理いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function Link({ href, className, children }: { href: string, className?: string, children: React.ReactNode }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}