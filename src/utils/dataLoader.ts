// データの動的読み込みヘルパー

export const loadLessons = async () => {
  const { lessons } = await import('@/data/lessons')
  return lessons
}

export const loadQuizData = async () => {
  const { simpleQuizData } = await import('@/data/simpleQuizData')
  return simpleQuizData
}

export const loadChallengeData = async () => {
  const { challengeLevels } = await import('@/data/challengeData')
  return challengeLevels
}