export interface PracticalChallenge {
  id: number
  title: string
  client: string
  deadline: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: string
  description: string
  requirements: string[]
  constraints: string[]
  learningPoints: string[]
  hints: Hint[]
  phases: Phase[]
  starterCode: string
  solutionCode: string
  testCases: TestCase[]
  codeBlocks: CodeBlock[]
  codeSlots: CodeSlot[]
  puzzleMode: boolean
}

export interface Hint {
  level: number
  title: string
  content: string
  codeExample?: string
}

export interface Phase {
  id: number
  title: string
  description: string
  objectives: string[]
  completed: boolean
}

export interface TestCase {
  input: string
  expectedOutput: string
  description: string
}

export interface CodeBlock {
  id: string
  type: 'class' | 'method' | 'variable' | 'loop' | 'condition' | 'statement'
  category: string
  label: string
  code: string
  description: string
  phase: number
}

export interface CodeSlot {
  id: string
  phase: number
  expectedBlockId: string
  hint: string
}

// 軽量化されたチャレンジデータ（詳細なコードブロックは削除）
export const practicalChallenges: PracticalChallenge[] = [
  {
    id: 1,
    title: "家計簿アプリ",
    client: "一般家庭の田中さん",
    deadline: "1週間以内",
    difficulty: 'beginner',
    estimatedTime: "2-3時間",
    description: "毎月の収支管理ができる簡単な家計簿アプリケーションを作成してください。",
    requirements: [
      "収入・支出の入力機能",
      "カテゴリ分類機能",
      "月別収支表示機能"
    ],
    constraints: [
      "Java言語で実装",
      "コンソールベース"
    ],
    learningPoints: [
      "基本的な入出力処理",
      "ArrayListの使用",
      "クラス設計の基礎"
    ],
    hints: [
      {
        level: 1,
        title: "データ構造",
        content: "BudgetItemクラスを作成してデータを管理しましょう。"
      }
    ],
    phases: [
      {
        id: 1,
        title: "基本構造作成",
        description: "クラス設計と基本機能実装",
        objectives: ["クラス作成", "入力機能"],
        completed: false
      }
    ],
    starterCode: "// スターターコード",
    solutionCode: "// 解答コード",
    testCases: [],
    codeBlocks: [],
    codeSlots: [],
    puzzleMode: false
  },
  {
    id: 2,
    title: "電卓アプリ",
    client: "教育機関",
    deadline: "1週間以内",
    difficulty: 'beginner',
    estimatedTime: "2-3時間",
    description: "基本的な四則演算ができる電卓アプリケーションを作成してください。",
    requirements: [
      "加算・減算・乗算・除算機能",
      "連続計算機能",
      "履歴表示機能"
    ],
    constraints: [
      "Java言語で実装",
      "エラーハンドリング必須"
    ],
    learningPoints: [
      "例外処理",
      "メソッド設計",
      "数値計算"
    ],
    hints: [
      {
        level: 1,
        title: "計算機能",
        content: "各演算子に対応するメソッドを作成しましょう。"
      }
    ],
    phases: [
      {
        id: 1,
        title: "基本演算実装",
        description: "四則演算の実装",
        objectives: ["計算メソッド作成"],
        completed: false
      }
    ],
    starterCode: "// スターターコード",
    solutionCode: "// 解答コード", 
    testCases: [],
    codeBlocks: [],
    codeSlots: [],
    puzzleMode: false
  },
  {
    id: 3,
    title: "ToDoリスト管理",
    client: "プロジェクト管理者",
    deadline: "1週間以内",
    difficulty: 'beginner',
    estimatedTime: "2-3時間",
    description: "タスクの追加、完了、削除ができるToDoリスト管理システムを作成してください。",
    requirements: [
      "タスクの追加・削除機能",
      "完了状態の管理",
      "優先度設定機能"
    ],
    constraints: [
      "Java言語で実装",
      "データ永続化不要"
    ],
    learningPoints: [
      "リスト操作",
      "状態管理",
      "ユーザーインターフェース"
    ],
    hints: [
      {
        level: 1,
        title: "タスク管理",
        content: "Taskクラスでタスクの情報を管理しましょう。"
      }
    ],
    phases: [
      {
        id: 1,
        title: "タスククラス作成",
        description: "基本的なタスク管理機能",
        objectives: ["Taskクラス設計"],
        completed: false
      }
    ],
    starterCode: "// スターターコード",
    solutionCode: "// 解答コード",
    testCases: [],
    codeBlocks: [],
    codeSlots: [],
    puzzleMode: false
  },
  {
    id: 4,
    title: "図書管理システム",
    client: "小規模図書館",
    deadline: "2週間以内", 
    difficulty: 'beginner',
    estimatedTime: "3-4時間",
    description: "図書の貸出・返却管理システムを作成してください。",
    requirements: [
      "図書登録・検索機能",
      "貸出・返却処理",
      "在庫管理機能"
    ],
    constraints: [
      "Java言語で実装",
      "コンソールベース"
    ],
    learningPoints: [
      "クラス間連携",
      "データ検索",
      "状態管理"
    ],
    hints: [
      {
        level: 1,
        title: "クラス設計",
        content: "Book、Member、Libraryクラスを設計しましょう。"
      }
    ],
    phases: [
      {
        id: 1,
        title: "基本クラス設計",
        description: "図書館システムの基本構造",
        objectives: ["クラス設計"],
        completed: false
      }
    ],
    starterCode: "// スターターコード",
    solutionCode: "// 解答コード",
    testCases: [],
    codeBlocks: [],
    codeSlots: [],
    puzzleMode: false
  },
  {
    id: 5,
    title: "成績管理システム", 
    client: "教育関係者",
    deadline: "2週間以内",
    difficulty: 'beginner',
    estimatedTime: "3-4時間",
    description: "学生の成績を管理するシステムを作成してください。",
    requirements: [
      "学生情報管理",
      "科目別成績入力",
      "平均点計算機能"
    ],
    constraints: [
      "Java言語で実装",
      "データ検証必須"
    ],
    learningPoints: [
      "データ管理",
      "統計計算",
      "入力検証"
    ],
    hints: [
      {
        level: 1,
        title: "学生クラス",
        content: "Studentクラスで学生情報を管理しましょう。"
      }
    ],
    phases: [
      {
        id: 1,
        title: "学生データ管理",
        description: "基本的なデータ構造の作成",
        objectives: ["学生クラス設計"],
        completed: false
      }
    ],
    starterCode: "// スターターコード",
    solutionCode: "// 解答コード",
    testCases: [],
    codeBlocks: [],
    codeSlots: [],
    puzzleMode: false
  },
  {
    id: 6,
    title: "在庫管理システム",
    client: "小売店経営者",
    deadline: "2週間以内",
    difficulty: 'beginner', 
    estimatedTime: "3-4時間",
    description: "商品の在庫を管理するシステムを作成してください。",
    requirements: [
      "商品登録・更新機能",
      "在庫数管理",
      "低在庫アラート"
    ],
    constraints: [
      "Java言語で実装",
      "効率的なデータ管理"
    ],
    learningPoints: [
      "在庫計算",
      "アラート機能",
      "データ更新"
    ],
    hints: [
      {
        level: 1,
        title: "商品管理",
        content: "Productクラスで商品情報を管理しましょう。"
      }
    ],
    phases: [
      {
        id: 1,
        title: "商品データ構造",
        description: "基本的な商品管理機能",
        objectives: ["商品クラス設計"],
        completed: false
      }
    ],
    starterCode: "// スターターコード", 
    solutionCode: "// 解答コード",
    testCases: [],
    codeBlocks: [],
    codeSlots: [],
    puzzleMode: false
  },
  {
    id: 7,
    title: "図書館管理システム",
    client: "市立図書館",
    deadline: "2週間以内",
    difficulty: 'beginner',
    estimatedTime: "3-4時間", 
    description: "図書館の貸出・返却管理システムを作成してください。",
    requirements: [
      "図書・会員登録機能",
      "貸出・返却処理",
      "統計情報表示"
    ],
    constraints: [
      "Java言語で実装",
      "貸出上限管理"
    ],
    learningPoints: [
      "複数クラス連携",
      "貸出制限管理",
      "統計処理"
    ],
    hints: [
      {
        level: 1,
        title: "システム設計",
        content: "Book、Member、Libraryの3クラス構成で設計しましょう。"
      }
    ],
    phases: [
      {
        id: 1,
        title: "基本クラス設計", 
        description: "図書館システムの基本構造作成",
        objectives: ["3つのクラス設計"],
        completed: false
      }
    ],
    starterCode: "// スターターコード",
    solutionCode: "// 解答コード",
    testCases: [],
    codeBlocks: [],
    codeSlots: [],
    puzzleMode: false
  }
];

// 動的ローディング関数（必要時のみ詳細データを読み込み）
export async function loadChallengeDetails(challengeId: number): Promise<PracticalChallenge> {
  try {
    const challengeModule = await import(`./challenges/challenge-${challengeId}.ts`);
    return challengeModule[`challenge${challengeId}`];
  } catch (error) {
    console.warn(`詳細データが見つかりません: Challenge ${challengeId}`);
    return practicalChallenges.find(c => c.id === challengeId)!;
  }
}