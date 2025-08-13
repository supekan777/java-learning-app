'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowLeft, RotateCcw, Trophy, Timer, Target, Zap } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Java コードサンプル（寿司打風：短いコード片）
const javaCodeSamples = {
  beginner: [
    { code: 'int x = 5;', points: 10 },
    { code: 'String name;', points: 15 },
    { code: 'boolean flag;', points: 20 },
    { code: 'double price;', points: 20 },
    { code: 'System.out.println();', points: 30 },
    { code: 'if (x > 0)', points: 15 },
    { code: 'while (true)', points: 20 },
    { code: 'for (int i)', points: 20 },
    { code: 'new ArrayList()', points: 25 },
    { code: 'public class', points: 25 },
  ],
  intermediate: [
    { code: 'public static void main', points: 40 },
    { code: 'for (int i = 0; i < 10; i++)', points: 50 },
    { code: 'try { } catch (Exception e)', points: 60 },
    { code: 'String[] names = new String[5];', points: 70 },
    { code: 'List<Integer> list = new ArrayList<>();', points: 80 },
    { code: 'if (name != null && !name.isEmpty())', points: 75 },
    { code: 'public int calculate(int a, int b)', points: 65 },
    { code: 'return a + b * c - d / e;', points: 55 },
    { code: 'while (scanner.hasNextLine())', points: 60 },
    { code: 'Math.random() * 100 + 1', points: 45 },
  ],
  advanced: [
    { code: 'public class Person implements Comparable<Person>', points: 100 },
    { code: 'Stream<String> stream = list.stream().filter()', points: 90 },
    { code: '@Override public int compareTo(Person other)', points: 85 },
    { code: 'Map<String, List<Integer>> groupedData;', points: 95 },
    { code: 'CompletableFuture<String> future = CompletableFuture', points: 120 },
    { code: '.collect(Collectors.groupingBy(Person::getName))', points: 110 },
    { code: 'Optional<Person> result = people.stream()', points: 105 },
    { code: 'BiFunction<Integer, Integer, Integer> add', points: 100 },
    { code: 'consumer.accept(supplier.get().transform())', points: 115 },
    { code: 'new ConcurrentHashMap<String, AtomicInteger>()', points: 125 },
  ]
}

type Difficulty = 'beginner' | 'intermediate' | 'advanced'
type TimeLimit = 60 | 120

interface CodeItem {
  code: string
  points: number
}

interface CatState {
  position: number
  isWalking: boolean
  direction: 'left' | 'right'
  currentCat: number
}

interface GameStats {
  completedCodes: number
  correctKeystrokes: number
  missCount: number
  combo: number
  maxCombo: number
  accuracy: number
  timeRemaining: number
}

export default function TypingGamePage() {
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner')
  const [timeLimit, setTimeLimit] = useState<TimeLimit>(60)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameFinished, setGameFinished] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const [isCountingDown, setIsCountingDown] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(60)
  const [currentCodeItem, setCurrentCodeItem] = useState<CodeItem | null>(null)
  const [currentInput, setCurrentInput] = useState('')
  const [stats, setStats] = useState<GameStats>({
    completedCodes: 0,
    correctKeystrokes: 0,
    missCount: 0,
    combo: 0,
    maxCombo: 0,
    accuracy: 100,
    timeRemaining: 60
  })
  const [catState, setCatState] = useState<CatState>({
    position: 0,
    isWalking: false,
    direction: 'right',
    currentCat: 0
  })
  const inputRef = useRef<HTMLInputElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // ネコの種類を配列で管理
  const catEmojis = ['🐱', '🐈', '🐈‍⬛', '😸', '😹', '😻', '🙀', '😿', '😾']

  // ネコの鳴き声を表示する関数
  const showCatMeow = () => {
    const meow = document.createElement('div')
    meow.textContent = 'にゃあ〜 ♪'
    meow.style.cssText = `
      position: absolute;
      left: ${catState.position + 10}%;
      bottom: 120px;
      background: rgba(255, 255, 255, 0.9);
      padding: 8px 12px;
      border-radius: 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      font-size: 16px;
      color: #333;
      z-index: 1000;
      animation: fadeInOut 2s ease-in-out;
    `
    
    // アニメーション用のCSS
    if (!document.querySelector('#meow-animation-style')) {
      const style = document.createElement('style')
      style.id = 'meow-animation-style'
      style.textContent = `
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
      `
      document.head.appendChild(style)
    }
    
    const gameField = document.querySelector('.game-field')
    if (gameField) {
      gameField.appendChild(meow)
      setTimeout(() => {
        if (meow.parentNode) {
          meow.parentNode.removeChild(meow)
        }
      }, 2000)
    }
  }

  // ネコが時間切れした時の鳴き声を表示する関数
  const showCatFunyaa = () => {
    const funyaa = document.createElement('div')
    funyaa.textContent = 'ふにゃあ〜 💦'
    funyaa.style.cssText = `
      position: absolute;
      left: ${catState.position + 10}%;
      bottom: 120px;
      background: rgba(255, 192, 192, 0.9);
      padding: 8px 12px;
      border-radius: 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      font-size: 16px;
      color: #666;
      z-index: 1000;
      animation: fadeInOut 2s ease-in-out;
    `
    
    const gameField = document.querySelector('.game-field')
    if (gameField) {
      gameField.appendChild(funyaa)
      setTimeout(() => {
        if (funyaa.parentNode) {
          funyaa.parentNode.removeChild(funyaa)
        }
      }, 2000)
    }
  }

  const difficultyLabels = {
    beginner: '初級 (10-30点)',
    intermediate: '中級 (40-80点)', 
    advanced: '上級 (85-125点)'
  }

  const difficultyColors = {
    beginner: 'from-green-500 to-emerald-500',
    intermediate: 'from-yellow-500 to-orange-500',
    advanced: 'from-red-500 to-pink-500'
  }

  const timeLimitLabels = {
    60: '1分コース',
    120: '2分コース'
  }

  // 新しいコードを生成
  const generateNewCode = () => {
    const samples = javaCodeSamples[difficulty]
    const randomSample = samples[Math.floor(Math.random() * samples.length)]
    
    setCurrentCodeItem({
      code: randomSample.code,
      points: randomSample.points
    })
  }

  // ゲームタイマー開始
  const startGameTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    
    intervalRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setGameFinished(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  // コードアイテムの移動と生成
  const startCodeGeneration = () => {
    if (codeGenerationRef.current) {
      clearInterval(codeGenerationRef.current)
    }

    // 初回のコード生成
    generateNewCode()
    
    // 定期的に新しいコードを生成
    codeGenerationRef.current = setInterval(() => {
      if (Math.random() < 0.7) { // 70%の確率で新しいコードを生成
        generateNewCode()
      }
    }, 3000) // 3秒ごと
  }

  // タイマー停止
  const stopAllTimers = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  // カウントダウン開始
  const startCountdown = () => {
    setIsCountingDown(true)
    setCountdown(3)
    
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval)
          setIsCountingDown(false)
          startGameActual()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  // 実際のゲーム開始
  const startGameActual = () => {
    setCurrentCodeItem(null)
    setCurrentInput('')
    setTimeRemaining(timeLimit)
    setGameStarted(true)
    setGameFinished(false)
    setStats({
      completedCodes: 0,
      correctKeystrokes: 0,
      missCount: 0,
      combo: 0,
      maxCombo: 0,
      accuracy: 100,
      timeRemaining: timeLimit
    })
    setCatState({
      position: 0,
      isWalking: false,
      direction: 'right',
      currentCat: 0
    })
    
    startGameTimer()
    generateNewCode() // 最初のコードを生成
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  // ゲームリセット
  const resetGame = () => {
    stopAllTimers()
    setGameStarted(false)
    setGameFinished(false)
    setIsCountingDown(false)
    setCountdown(0)
    setCurrentCodeItem(null)
    setCurrentInput('')
    setTimeRemaining(timeLimit)
    setStats({
      completedCodes: 0,
      correctKeystrokes: 0,
      missCount: 0,
      combo: 0,
      maxCombo: 0,
      accuracy: 100,
      timeRemaining: timeLimit
    })
    setCatState({
      position: 0,
      isWalking: false,
      direction: 'right',
      currentCat: 0
    })
  }

  // コードアイテムの位置更新と失敗判定
  useEffect(() => {
    if (!gameStarted || gameFinished) return

    const moveInterval = setInterval(() => {
      setCodeItems(prev => 
        prev.map(item => {
          if (item.isCompleted || item.isFailed || item.isActive) return item // アクティブなアイテムは動かさない
          
          const newPosition = item.position - 0.5 // 右から左へゆっくり移動
          
          if (newPosition < -20) {
            // 画面左端を通過したら失敗
            if (!item.isFailed && !item.isCompleted) {
              setStats(prevStats => ({
                ...prevStats,
                combo: 0 // コンボリセット
              }))
            }
            return { ...item, isFailed: true, position: newPosition }
          }
          
          return { ...item, position: newPosition }
        }).filter(item => item.position > -50) // 完全に見えなくなったアイテムを削除
      )
    }, 100) // 100msごとに更新（よりゆっくり）

    return () => clearInterval(moveInterval)
  }, [gameStarted, gameFinished])

  // 入力処理
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    
    if (!gameStarted || gameFinished || !currentCodeItem) return
    
    // 新しく入力された文字をチェック（1文字ずつ判定）
    if (value.length > currentInput.length) {
      const newChar = value[value.length - 1]
      const expectedChar = currentCodeItem.code[value.length - 1]
      
      if (newChar === expectedChar) {
        // 正しい文字
        setCurrentInput(value)
        
        // 1文字ごとにコンボ増加と正解打数増加
        setStats(prev => ({
          ...prev,
          correctKeystrokes: prev.correctKeystrokes + 1,
          combo: prev.combo + 1,
          maxCombo: Math.max(prev.maxCombo, prev.combo + 1)
        }))
        
        
        // コード完成チェック
        if (currentCodeItem.code === value) {
          completeCode(currentCodeItem)
        }
      } else {
        // 間違った文字 - エフェクトを発生させるが入力欄は更新しない
        triggerErrorEffect()
      }
    } else if (value.length < currentInput.length) {
      // バックスペースで削除された場合
      setCurrentInput(value)
    }
  }
  
  // エラーエフェクト
  const triggerErrorEffect = () => {
    // コンボリセットとミス回数増加
    setStats(prev => ({ 
      ...prev, 
      combo: 0,
      missCount: prev.missCount + 1
    }))
    
    // コード部分のみを赤く点滅させる
    const codeDisplay = document.querySelector('.code-display')
    if (codeDisplay) {
      codeDisplay.classList.add('error-flash')
      setTimeout(() => {
        codeDisplay.classList.remove('error-flash')
      }, 200)
    }
  }
  
  // コード完成処理
  const completeCode = (code: CodeItem) => {
    setStats(prev => ({
      ...prev,
      completedCodes: prev.completedCodes + 1
    }))
    
    // 入力欄をクリア
    setCurrentInput('')
    
    // ネコの鳴き声を表示
    showCatMeow()
    
    // ネコを次の種類に交代
    setCatState(prev => ({
      ...prev,
      currentCat: (prev.currentCat + 1) % catEmojis.length
    }))
    
    // 完成エフェクト（コード部分のみ）
    const codeDisplay = document.querySelector('.code-display')
    if (codeDisplay) {
      codeDisplay.classList.add('success-flash')
      setTimeout(() => {
        codeDisplay.classList.remove('success-flash')
      }, 200)
    }
    
    // 次のコードを即座に生成（0.2秒後）
    setTimeout(() => {
      if (!gameFinished) {
        generateNewCode()
      }
    }, 200)
  }

  // ネコのレンダリング
  const renderCat = () => {
    const currentCatEmoji = catEmojis[catState.currentCat]
    return (
      <div 
        className="absolute bottom-4 text-4xl transition-all duration-100"
        style={{ 
          left: `${catState.position}%`,
          transform: catState.direction === 'right' ? 'scaleX(-1)' : 'scaleX(1)'
        }}
      >
        {currentCatEmoji}
      </div>
    )
  }

  // ネコの歩行アニメーション
  useEffect(() => {
    if (!gameStarted || gameFinished) return
    
    const catInterval = setInterval(() => {
      setCatState(prev => {
        let newPosition = prev.position
        let newDirection = prev.direction
        
        if (prev.direction === 'right') {
          newPosition = prev.position + 1
          if (newPosition >= 85) {
            // 右端に到達した時の処理
            showCatFunyaa()
            
            // ネコを次の種類に交代
            const nextCat = (prev.currentCat + 1) % catEmojis.length
            
            // 入力をクリアして新しいコードを生成
            setCurrentInput('')
            generateNewCode()
            
            // ネコを左端からリスタート
            return {
              position: 0,
              direction: 'right',
              isWalking: true,
              currentCat: nextCat
            }
          }
        } else {
          newPosition = prev.position - 1
          if (newPosition <= 0) {
            newDirection = 'right'
          }
        }
        
        return {
          ...prev,
          position: newPosition,
          direction: newDirection,
          isWalking: true
        }
      })
    }, 150) // 150msごとに位置を更新
    
    return () => clearInterval(catInterval)
  }, [gameStarted, gameFinished])

  // クリーンアップ
  useEffect(() => {
    return () => {
      stopAllTimers()
    }
  }, [])

  return (
    <>
      <Navigation />
      {/* CSS Styles for animations */}
      <style jsx>{`
        .error-flash {
          background: #fef2f2 !important;
          border-color: #f87171 !important;
          transform: scale(1.02);
        }
        
        .success-flash {
          background: #f0fdf4 !important;
          border-color: #4ade80 !important;
          transform: scale(1.02);
        }
        
        .code-display {
          transition: all 0.2s ease;
        }
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-100">
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
            <h1 className="text-3xl font-bold text-gray-900">Javaタイピングゲーム</h1>
            <p className="text-gray-600 mt-1">コーディング速度とJava構文をマスターしよう！</p>
          </div>
        </div>

        {/* Countdown Screen */}
        {isCountingDown && (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="text-8xl font-bold text-emerald-600 mb-4 animate-pulse">
                {countdown}
              </div>
              <div className="text-2xl text-gray-700">
                {countdown === 3 && '準備はいいですか？'}
                {countdown === 2 && 'ネコちゃんがスタンバイ！'}
                {countdown === 1 && 'スタート！'}
              </div>
              <div className="mt-8 text-6xl animate-bounce">
                🐱
              </div>
            </div>
          </div>
        )}

        {/* Game Setup */}
        {!gameStarted && !isCountingDown && (
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">🐱 ネコ歩きJavaタイピング 🐱</h2>
            <p className="text-center text-gray-600 mb-8">ネコと一緒にJavaコードをタイピングしてポイントを稼ごう！</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* 難易度選択 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">難易度選択</h3>
                <div className="space-y-3">
                  {(Object.keys(javaCodeSamples) as Difficulty[]).map((level) => (
                    <button
                      key={level}
                      onClick={() => setDifficulty(level)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                        difficulty === level
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${difficultyColors[level]} flex items-center justify-center mr-3`}>
                          <Target className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{difficultyLabels[level]}</h4>
                          <p className="text-sm text-gray-600">
                            {level === 'beginner' && '基本的な構文とキーワード'}
                            {level === 'intermediate' && 'ループと条件分岐'}
                            {level === 'advanced' && 'オブジェクト指向と高度な構文'}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* 時間制限選択 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">時間制限</h3>
                <div className="space-y-3">
                  {([60, 120] as TimeLimit[]).map((time) => (
                    <button
                      key={time}
                      onClick={() => setTimeLimit(time)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                        timeLimit === time
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3">
                          <Timer className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{timeLimitLabels[time]}</h4>
                          <p className="text-sm text-gray-600">{time}秒間でチャレンジ</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <button
              onClick={startCountdown}
              className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold py-4 text-xl rounded-xl hover:from-emerald-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              🐱 ゲーム開始 🐱
            </button>
          </div>
        )}

        {/* Game Area */}
        {gameStarted && (
          <>
            {/* Top Stats Bar */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-600">{timeRemaining}</div>
                  <div className="text-sm text-gray-600">残り時間</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">{stats.correctKeystrokes}</div>
                  <div className="text-sm text-gray-600">正解打数</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">{stats.missCount}</div>
                  <div className="text-sm text-gray-600">ミス回数</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">{stats.completedCodes}</div>
                  <div className="text-sm text-gray-600">完成数</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{stats.combo}</div>
                  <div className="text-sm text-gray-600">コンボ</div>
                </div>
                <div>
                  <button
                    onClick={resetGame}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    リセット
                  </button>
                </div>
              </div>
            </div>

            {/* Game Field - ネコ歩きタイピングエリア */}
            <div className="game-field bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8 shadow-lg mb-6 relative overflow-hidden transition-all duration-300" style={{ minHeight: '400px' }}>
              <div className="absolute top-4 left-4 text-lg font-semibold text-gray-700">
                {difficultyLabels[difficulty]} - {timeLimitLabels[timeLimit]}
              </div>
              
              {/* コンボ表示 */}
              {stats.combo > 0 && (
                <div className="absolute top-4 right-4 text-2xl font-bold text-purple-600 animate-pulse">
                  {stats.combo} COMBO! 🔥
                </div>
              )}
              
              {/* 中央のコード表示 */}
              <div className="flex items-center justify-center h-60">
                {currentCodeItem ? (
                  <div className="code-display text-center bg-white rounded-xl p-8 shadow-lg border-2 border-emerald-300">
                    <div className="font-mono text-2xl text-gray-800 mb-4">{currentCodeItem.code}</div>
                    <div className="text-sm text-gray-600">上記のコードをタイピングしてください</div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🎯</div>
                    <div className="text-lg">準備中...</div>
                  </div>
                )}
              </div>
              
              {/* 歩くネコ */}
              {renderCat()}
              
              {/* 入力フィールド */}
              <div className="absolute bottom-16 left-4 right-4">
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={handleInputChange}
                  disabled={gameFinished || !currentCodeItem}
                  className="w-full p-4 border-2 border-emerald-300 rounded-lg focus:border-emerald-500 focus:outline-none font-mono text-lg bg-white/90 backdrop-blur"
                  placeholder="上のコードをタイピングしてください..."
                  autoFocus
                />
              </div>
            </div>

            {/* Results - 寿司打風の結果画面 */}
            {gameFinished && (
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">🐱 ゲーム終了 🐱</h2>
                  
                  {/* タイピング結果判定 */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 mb-6">
                    <div className="text-4xl font-bold text-orange-600 mb-2">{stats.correctKeystrokes}打</div>
                    <div className="text-lg text-gray-700 mb-4">
                      {stats.correctKeystrokes >= 500 ? '🎆 タイピングマスター！素晴らしい速度です！' :
                       stats.correctKeystrokes >= 300 ? '🎉 おめでとう！かなり早いタイピングです！' :
                       stats.correctKeystrokes >= 150 ? '😊 良いペースです。もう少し頑張りましょう！' :
                       '😅 まだまだ練習が必要ですね。継続は力なりです！'}
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">{stats.correctKeystrokes}</div>
                    <div className="text-sm text-emerald-600">正解打数</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{stats.missCount}</div>
                    <div className="text-sm text-red-600">ミス回数</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{stats.completedCodes}</div>
                    <div className="text-sm text-blue-600">完成コード数</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{stats.maxCombo}</div>
                    <div className="text-sm text-purple-600">最大コンボ</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">{stats.correctKeystrokes > 0 ? Math.round((stats.correctKeystrokes / (stats.correctKeystrokes + stats.missCount)) * 100) : 0}%</div>
                    <div className="text-sm text-yellow-600">正確率</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={startCountdown}
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold py-4 text-lg rounded-xl hover:from-emerald-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
                  >
                    🐱 もう一回チャレンジ 🐱
                  </button>
                  <button
                    onClick={resetGame}
                    className="flex-1 bg-gray-100 text-gray-700 font-semibold py-4 rounded-xl hover:bg-gray-200 transition-all duration-200"
                  >
                    設定を変更
                  </button>
                </div>
              </div>
            )}
          </>
        )}
        </div>
      </div>
      <Footer />
    </>
  )
}