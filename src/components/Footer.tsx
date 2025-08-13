'use client'

import Link from 'next/link'
import { Code2, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Java学習マスター</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              毎日少しずつ、楽しくJavaを学ぼう。ゲーミフィケーション機能で継続学習をサポートします。
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Java学習マスター. All rights reserved.
            </p>
          </div>

          {/* Learning Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">学習メニュー</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/learn" className="text-gray-400 hover:text-white transition-colors">
                  レッスン一覧
                </Link>
              </li>
              <li>
                <Link href="/typing" className="text-gray-400 hover:text-white transition-colors">
                  タイピングゲーム
                </Link>
              </li>
              <li>
                <Link href="/challenge" className="text-gray-400 hover:text-white transition-colors">
                  100問チャレンジ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">サポート</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for Java learners
          </p>
        </div>
      </div>
    </footer>
  )
}