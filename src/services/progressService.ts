import { UserProgress, LessonProgress, Badge } from '@/types/lesson'

const PROGRESS_STORAGE_KEY = 'java_learning_progress'

// デフォルトの進捗データ
const defaultProgress: UserProgress = {
  level: 1,
  experience: 0,
  streak: 0,
  completedLessons: [],
  badges: [],
  lessonProgress: {}
}

// 進捗データを取得
export function getUserProgress(): UserProgress {
  if (typeof window === 'undefined') return defaultProgress
  
  try {
    const stored = localStorage.getItem(PROGRESS_STORAGE_KEY)
    if (!stored) return defaultProgress
    
    const progress = JSON.parse(stored) as UserProgress
    
    // データの整合性チェック
    return {
      ...defaultProgress,
      ...progress,
      lessonProgress: progress.lessonProgress || {}
    }
  } catch (error) {
    console.error('進捗データの読み込みエラー:', error)
    return defaultProgress
  }
}

// 進捗データを保存
export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress))
  } catch (error) {
    console.error('進捗データの保存エラー:', error)
  }
}

// レッスン完了時の処理
export function completeLesson(lessonId: number, stars: number = 1): UserProgress {
  const progress = getUserProgress()
  
  // レッスンの進捗を更新
  progress.lessonProgress[lessonId] = {
    completed: true,
    stars: Math.max(stars, progress.lessonProgress[lessonId]?.stars || 0),
    completedExercises: progress.lessonProgress[lessonId]?.completedExercises || [],
    attemptCount: (progress.lessonProgress[lessonId]?.attemptCount || 0) + 1
  }
  
  // 完了レッスン一覧に追加
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId)
  }
  
  // 経験値を加算（星の数に応じて）
  const expGain = calculateExpGain(stars)
  progress.experience += expGain
  
  // レベルアップチェック
  const newLevel = calculateLevel(progress.experience)
  const leveledUp = newLevel > progress.level
  progress.level = newLevel
  
  // 連続学習日数の更新
  updateStreak(progress)
  
  // バッジのチェック
  checkAndAwardBadges(progress)
  
  saveUserProgress(progress)
  
  return progress
}

// エクササイズ完了時の処理
export function completeExercise(lessonId: number, exerciseId: number): UserProgress {
  const progress = getUserProgress()
  
  if (!progress.lessonProgress[lessonId]) {
    progress.lessonProgress[lessonId] = {
      completed: false,
      stars: 0,
      completedExercises: [],
      attemptCount: 0
    }
  }
  
  const lessonProg = progress.lessonProgress[lessonId]
  if (!lessonProg.completedExercises.includes(exerciseId)) {
    lessonProg.completedExercises.push(exerciseId)
  }
  
  // 小さな経験値を加算
  progress.experience += 10
  progress.level = calculateLevel(progress.experience)
  
  saveUserProgress(progress)
  return progress
}

// 経験値からレベルを計算
function calculateLevel(experience: number): number {
  // レベル1: 0-99 exp
  // レベル2: 100-299 exp  
  // レベル3: 300-599 exp
  // レベル4: 600-999 exp
  // など、必要経験値が徐々に増加
  
  let level = 1
  let requiredExp = 100
  let totalExp = 0
  
  while (experience >= totalExp + requiredExp) {
    totalExp += requiredExp
    level++
    requiredExp = Math.floor(requiredExp * 1.5) // 1.5倍ずつ増加
  }
  
  return level
}

// 星の数に応じた経験値を計算
function calculateExpGain(stars: number): number {
  const baseExp = 50
  return baseExp + (stars - 1) * 25 // 1星:50, 2星:75, 3星:100
}

// 連続学習日数を更新
function updateStreak(progress: UserProgress): void {
  const today = new Date().toDateString()
  const lastStudyDate = progress.lastStudyDate
  
  if (lastStudyDate) {
    const lastDate = new Date(lastStudyDate)
    const todayDate = new Date(today)
    const daysDiff = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24))
    
    if (daysDiff === 1) {
      // 連続学習
      progress.streak += 1
    } else if (daysDiff > 1) {
      // 連続記録が途切れた
      progress.streak = 1
    }
    // daysDiff === 0 の場合（同日）は変更なし
  } else {
    // 初回学習
    progress.streak = 1
  }
  
  progress.lastStudyDate = today
}

// バッジの付与チェック
function checkAndAwardBadges(progress: UserProgress): void {
  const existingBadgeIds = progress.badges.map(b => b.id)
  const newBadges: Badge[] = []
  
  // 各種バッジの条件をチェック
  const badgeConditions = [
    {
      id: 'first_lesson',
      name: '初心者',
      description: '最初のレッスンを完了',
      icon: '🎓',
      category: 'completion' as const,
      condition: () => progress.completedLessons.length >= 1
    },
    {
      id: 'streak_3',
      name: '継続学習者',
      description: '3日連続で学習',
      icon: '🔥',
      category: 'streak' as const,
      condition: () => progress.streak >= 3
    },
    {
      id: 'streak_7',
      name: '1週間継続',
      description: '7日連続で学習',
      icon: '⭐',
      category: 'streak' as const,
      condition: () => progress.streak >= 7
    },
    {
      id: 'level_5',
      name: 'レベル5達成',
      description: 'レベル5に到達',
      icon: '🏆',
      category: 'completion' as const,
      condition: () => progress.level >= 5
    },
    {
      id: 'perfect_lesson',
      name: 'パーフェクト',
      description: 'レッスンで3つ星を獲得',
      icon: '✨',
      category: 'performance' as const,
      condition: () => Object.values(progress.lessonProgress).some(p => p.stars === 3)
    },
    {
      id: 'five_lessons',
      name: '学習意欲旺盛',
      description: '5つのレッスンを完了',
      icon: '📚',
      category: 'completion' as const,
      condition: () => progress.completedLessons.length >= 5
    }
  ]
  
  for (const badge of badgeConditions) {
    if (!existingBadgeIds.includes(badge.id) && badge.condition()) {
      newBadges.push({
        id: badge.id,
        name: badge.name,
        description: badge.description,
        icon: badge.icon,
        category: badge.category,
        earnedAt: new Date().toISOString()
      })
    }
  }
  
  progress.badges.push(...newBadges)
}

// 次のレベルまでの必要経験値を計算
export function getExpToNextLevel(currentExp: number, currentLevel: number): { current: number, required: number, percentage: number } {
  let totalExp = 0
  let requiredExp = 100
  
  // 現在のレベルまでの総経験値を計算
  for (let i = 1; i < currentLevel; i++) {
    totalExp += requiredExp
    requiredExp = Math.floor(requiredExp * 1.5)
  }
  
  const currentLevelExp = currentExp - totalExp
  const nextLevelRequiredExp = requiredExp
  
  return {
    current: currentLevelExp,
    required: nextLevelRequiredExp,
    percentage: Math.floor((currentLevelExp / nextLevelRequiredExp) * 100)
  }
}

// レッスンがアンロックされているかチェック
export function isLessonUnlocked(lessonId: number): boolean {
  if (lessonId === 1) return true // 最初のレッスンは常にアンロック
  
  const progress = getUserProgress()
  return progress.completedLessons.includes(lessonId - 1)
}

// 進捗データをリセット（デバッグ用）
export function resetProgress(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(PROGRESS_STORAGE_KEY)
}