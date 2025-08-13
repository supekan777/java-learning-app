export interface Lesson {
  id: number
  title: string
  description: string
  difficulty: '初級' | '中級' | '上級'
  duration: string
  completed: boolean
  locked: boolean
  stars: number
  content: {
    explanation: string
    example: string
    initialCode: string
    solution: string
    hints: string[]
  }
  exercises: Exercise[]
  quiz?: Quiz[]
}

export interface Exercise {
  id: number
  title: string
  description: string
  initialCode: string
  expectedOutput: string
  solution: string
  hints: string[]
  testCases: TestCase[]
}

export interface TestCase {
  input: string
  expectedOutput: string
  description: string
}

export interface UserProgress {
  userId?: string
  level: number
  experience: number
  streak: number
  lastStudyDate?: string
  completedLessons: number[]
  badges: Badge[]
  lessonProgress: { [lessonId: number]: LessonProgress }
}

export interface LessonProgress {
  completed: boolean
  stars: number
  completedExercises: number[]
  attemptCount: number
  bestTime?: number
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  earnedAt: string
  category: 'streak' | 'completion' | 'performance' | 'special'
}

export interface Quiz {
  id: number
  question: string
  options: string[]
  correctAnswer: number // 0-3のインデックス
  explanation: string
}