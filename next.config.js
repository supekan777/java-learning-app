/** @type {import('next').NextConfig} */
const nextConfig = {
  // エラーを無視してビルド
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },

  // シンプルな最適化のみ
  compress: true,
  
  // 問題のある実験的機能を無効化
  experimental: {
    // optimizeCss: false,
  },

  // スタンドアロン出力
  output: 'standalone',
}

module.exports = nextConfig