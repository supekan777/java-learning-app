import { Quiz } from '@/types/lesson'

export interface ChallengeLevel {
  id: number
  name: string
  description: string
  color: string
  questions: Quiz[]
}

// 5段階の難易度設定
export const challengeLevels: ChallengeLevel[] = [
  {
    id: 1,
    name: "初心者",
    description: "Java基礎の基礎から",
    color: "from-green-500 to-emerald-500",
    questions: [
      {
        id: 1,
        question: "Javaプログラムの拡張子は何ですか？",
        options: [".java", ".js", ".jar", ".class"],
        correctAnswer: 0,
        explanation: "Javaソースファイルの拡張子は.javaです。"
      },
      {
        id: 2,
        question: "Javaプログラムのエントリーポイントとなるメソッドは？",
        options: ["start()", "main()", "run()", "begin()"],
        correctAnswer: 1,
        explanation: "Javaプログラムはmain()メソッドから実行が開始されます。"
      },
      {
        id: 3,
        question: "コメントを書く正しい方法はどれですか？",
        options: ["# コメント", "// コメント", "<!-- コメント -->", "% コメント"],
        correctAnswer: 1,
        explanation: "Javaでは//を使って単行コメントを書きます。"
      },
      {
        id: 4,
        question: "Javaでコンソールに出力するメソッドは？",
        options: ["print()", "System.out.println()", "console.log()", "output()"],
        correctAnswer: 1,
        explanation: "System.out.println()を使ってコンソールに文字列を出力します。"
      },
      {
        id: 5,
        question: "Javaの予約語でないものはどれですか？",
        options: ["class", "public", "variable", "static"],
        correctAnswer: 2,
        explanation: "variableはJavaの予約語ではありません。変数を宣言する際のキーワードではありません。"
      },
      {
        id: 6,
        question: "Javaプログラムをコンパイルするコマンドは？",
        options: ["javac", "java", "compile", "build"],
        correctAnswer: 0,
        explanation: "javacコマンドを使ってJavaソースファイル(.java)をバイトコード(.class)にコンパイルします。"
      },
      {
        id: 7,
        question: "Javaプログラムを実行するコマンドは？",
        options: ["javac", "java", "run", "execute"],
        correctAnswer: 1,
        explanation: "javaコマンドを使ってコンパイル済みのJavaプログラム(.class)を実行します。"
      },
      {
        id: 8,
        question: "Javaの文字列リテラルを囲む記号は？",
        options: ["'（シングルクォート）", "\"（ダブルクォート）", "`（バッククォート）", "|（パイプ）"],
        correctAnswer: 1,
        explanation: "Javaでは文字列リテラルをダブルクォート(\")で囲みます。シングルクォートは文字リテラル用です。"
      },
      {
        id: 9,
        question: "Javaの文字リテラルを囲む記号は？",
        options: ["'（シングルクォート）", "\"（ダブルクォート）", "`（バッククォート）", "/（スラッシュ）"],
        correctAnswer: 0,
        explanation: "Javaでは文字リテラルをシングルクォート(')で囲みます。例：'A', '5'"
      },
      {
        id: 10,
        question: "Javaの複数行コメントの正しい書き方は？",
        options: ["<!-- コメント -->", "/* コメント */", "// コメント //", "## コメント ##"],
        correctAnswer: 1,
        explanation: "Javaでは/*と*/で囲むことで複数行コメントを書くことができます。"
      },
      {
        id: 11,
        question: "Javaのパッケージ宣言はファイルのどこに書きますか？",
        options: ["ファイルの最後", "ファイルの先頭", "クラス宣言の後", "main メソッドの中"],
        correctAnswer: 1,
        explanation: "package文はJavaファイルの最初（コメントを除く）に記述する必要があります。"
      },
      {
        id: 12,
        question: "Javaクラスのファイル名とクラス名の関係は？",
        options: ["関係ない", "ファイル名がクラス名より長い", "同じでなければならない", "クラス名がファイル名より長い"],
        correctAnswer: 2,
        explanation: "Javaではpublicクラスのクラス名とファイル名（拡張子を除く）は同じでなければなりません。"
      },
      {
        id: 13,
        question: "Javaプログラムの実行開始時に呼び出されるメソッドのシグネチャは？",
        options: ["public static void main(String args)", "public static void main(String[] args)", "static void main(String[] args)", "public void main(String[] args)"],
        correctAnswer: 1,
        explanation: "mainメソッドは\"public static void main(String[] args)\"として定義する必要があります。"
      },
      {
        id: 14,
        question: "Javaで大文字小文字を区別することを何と言いますか？",
        options: ["case-sensitive", "case-insensitive", "case-dependent", "case-free"],
        correctAnswer: 0,
        explanation: "Javaは大文字小文字を区別する言語で、これをcase-sensitiveと言います。"
      },
      {
        id: 15,
        question: "Javaの文の終わりを示す記号は？",
        options: [".", ",", ";", ":"],
        correctAnswer: 2,
        explanation: "Javaでは文の終わりにセミコロン(;)を付けます。"
      },
      {
        id: 16,
        question: "Javaでクラスを定義するキーワードは？",
        options: ["class", "define", "struct", "object"],
        correctAnswer: 0,
        explanation: "Javaではclassキーワードを使ってクラスを定義します。"
      },
      {
        id: 17,
        question: "Javaでアクセス修飾子でないものは？",
        options: ["public", "private", "protected", "internal"],
        correctAnswer: 3,
        explanation: "internalはJavaのアクセス修飾子ではありません。Javaには public, private, protected があります。"
      },
      {
        id: 18,
        question: "Javaで変数に値を代入する演算子は？",
        options: ["==", "=", "!=", "+="],
        correctAnswer: 1,
        explanation: "Javaでは=演算子を使って変数に値を代入します。==は比較演算子です。"
      },
      {
        id: 19,
        question: "System.out.println()とSystem.out.print()の違いは？",
        options: ["機能的な違いはない", "println()は改行する", "print()は改行する", "println()は高速"],
        correctAnswer: 1,
        explanation: "println()は出力後に改行しますが、print()は改行しません。"
      },
      {
        id: 20,
        question: "Javaでimport文を書く場所は？",
        options: ["ファイルの最後", "package文の前", "package文の後、class宣言の前", "main メソッドの中"],
        correctAnswer: 2,
        explanation: "import文はpackage文の後、class宣言の前に記述します。"
      },
      {
        id: 21,
        question: "Javaコンパイラが作成するファイルの拡張子は？",
        options: [".java", ".class", ".jar", ".exe"],
        correctAnswer: 1,
        explanation: "Javaコンパイラ(javac)は.javaファイルを.classファイル（バイトコード）に変換します。"
      },
      {
        id: 22,
        question: "Javaの実行環境を何と呼びますか？",
        options: ["JDK", "JVM", "JRE", "IDE"],
        correctAnswer: 2,
        explanation: "JRE（Java Runtime Environment）はJavaプログラムの実行環境です。"
      },
      {
        id: 23,
        question: "Javaの開発環境を何と呼びますか？",
        options: ["JDK", "JVM", "JRE", "API"],
        correctAnswer: 0,
        explanation: "JDK（Java Development Kit）はJavaの開発環境で、コンパイラやデバッガなどの開発ツールが含まれます。"
      },
      {
        id: 24,
        question: "Javaのバイトコードを実行する仮想マシンを何と呼びますか？",
        options: ["JDK", "JVM", "JRE", "JIT"],
        correctAnswer: 1,
        explanation: "JVM（Java Virtual Machine）はJavaバイトコードを実行する仮想マシンです。"
      },
      {
        id: 25,
        question: "Javaで数値リテラルの末尾にLを付ける理由は？",
        options: ["小数点を表す", "long型を表す", "文字列を表す", "負の数を表す"],
        correctAnswer: 1,
        explanation: "数値リテラルの末尾にLまたはlを付けることで、その値がlong型であることを明示します。"
      }
    ]
  },
  {
    id: 2,
    name: "基礎",
    description: "変数とデータ型をマスター",
    color: "from-blue-500 to-cyan-500",
    questions: [
      {
        id: 1,
        question: "int型で表現できる値の範囲として正しいのは？",
        options: ["-128〜127", "-32768〜32767", "-2147483648〜2147483647", "0〜65535"],
        correctAnswer: 2,
        explanation: "int型は32ビットの符号付き整数で、-2^31から2^31-1までの値を表現できます。"
      },
      {
        id: 2,
        question: "文字列を表すデータ型は？",
        options: ["char", "String", "text", "varchar"],
        correctAnswer: 1,
        explanation: "Javaでは文字列をStringクラスで表現します。"
      },
      {
        id: 3,
        question: "boolean型で取りうる値は？",
        options: ["0と1", "yes/no", "true/false", "on/off"],
        correctAnswer: 2,
        explanation: "boolean型はtrueまたはfalseの値のみを取ります。"
      },
      {
        id: 4,
        question: "変数宣言の正しい書き方は？",
        options: ["int 123number;", "int number123;", "int number-123;", "int number.123;"],
        correctAnswer: 1,
        explanation: "変数名は文字または_で始まり、数字、文字、_を含むことができます。"
      },
      {
        id: 5,
        question: "final修飾子を付けた変数の特徴は？",
        options: ["値を変更できない", "メモリ効率が良い", "処理が高速", "自動初期化される"],
        correctAnswer: 0,
        explanation: "final修飾子を付けた変数は定数となり、一度値を設定すると変更できません。"
      }
    ]
  },
  {
    id: 3,
    name: "中級",
    description: "制御構造と配列を理解",
    color: "from-yellow-500 to-orange-500",
    questions: [
      {
        id: 1,
        question: "for文の実行順序として正しいのは？",
        options: [
          "初期化→条件判定→処理→増減",
          "条件判定→初期化→処理→増減",
          "処理→初期化→条件判定→増減",
          "初期化→処理→条件判定→増減"
        ],
        correctAnswer: 0,
        explanation: "for文は「初期化→条件判定→処理→増減→条件判定→...」の順序で実行されます。"
      },
      {
        id: 2,
        question: "配列の要素数を取得するプロパティは？",
        options: [".size", ".length", ".count", ".size()"],
        correctAnswer: 1,
        explanation: "配列の要素数は.lengthプロパティで取得します（メソッドではありません）。"
      },
      {
        id: 3,
        question: "switch文で使用できないデータ型は？",
        options: ["int", "String", "double", "char"],
        correctAnswer: 2,
        explanation: "switch文ではdouble型は使用できません。int, String, char, enumなどが使用可能です。"
      },
      {
        id: 4,
        question: "while文とdo-while文の違いは？",
        options: [
          "処理速度が異なる",
          "do-whileは最低1回は実行される",
          "whileの方が新しい構文",
          "機能的な違いはない"
        ],
        correctAnswer: 1,
        explanation: "do-while文は条件判定の前に処理を実行するため、最低1回は処理が実行されます。"
      },
      {
        id: 5,
        question: "多次元配列の宣言として正しいのは？",
        options: ["int[][] array;", "int array[][];", "int[] array[];", "すべて正しい"],
        correctAnswer: 3,
        explanation: "Javaでは多次元配列の宣言方法が複数あり、すべて有効です。"
      }
    ]
  },
  {
    id: 4,
    name: "上級",
    description: "オブジェクト指向の核心",
    color: "from-purple-500 to-pink-500",
    questions: [
      {
        id: 1,
        question: "カプセル化の主な目的は？",
        options: [
          "処理速度の向上",
          "メモリ使用量の削減",
          "データの隠蔽と保護",
          "コードの短縮"
        ],
        correctAnswer: 2,
        explanation: "カプセル化は、オブジェクトの内部データを外部から直接アクセスできないよう隠蔽し、保護することが主な目的です。"
      },
      {
        id: 2,
        question: "継承において、子クラスから親クラスのメンバにアクセスするキーワードは？",
        options: ["this", "super", "parent", "base"],
        correctAnswer: 1,
        explanation: "super参照を使用して、子クラスから親クラスのメンバにアクセスします。"
      },
      {
        id: 3,
        question: "オーバーロードとオーバーライドの違いは？",
        options: [
          "オーバーロードは同名メソッドの複数定義、オーバーライドは親メソッドの再定義",
          "オーバーロードは処理の上書き、オーバーライドは処理の追加",
          "オーバーロードは静的、オーバーライドは動的",
          "基本的に同じ概念"
        ],
        correctAnswer: 0,
        explanation: "オーバーロードは同じクラス内で同名で引数が異なるメソッドを複数定義すること、オーバーライドは子クラスで親クラスのメソッドを再定義することです。"
      },
      {
        id: 4,
        question: "abstract修飾子を付けたクラスの特徴は？",
        options: [
          "インスタンス化できない",
          "継承できない",
          "メソッドを持てない",
          "静的メソッドのみ"
        ],
        correctAnswer: 0,
        explanation: "abstractクラスは抽象クラスと呼ばれ、直接インスタンス化することはできません。"
      },
      {
        id: 5,
        question: "インターフェースについて正しい説明は？",
        options: [
          "具象メソッドのみ定義可能",
          "多重継承が可能",
          "private修飾子が使用可能",
          "コンストラクタを持てる"
        ],
        correctAnswer: 1,
        explanation: "Javaではクラスの多重継承はできませんが、インターフェースの多重実装（多重継承）は可能です。"
      }
    ]
  },
  {
    id: 5,
    name: "エキスパート",
    description: "高度なJava技術",
    color: "from-red-500 to-rose-500",
    questions: [
      {
        id: 1,
        question: "Java 8で導入された関数型プログラミングの主要機能は？",
        options: ["ラムダ式", "ジェネリクス", "アノテーション", "enum"],
        correctAnswer: 0,
        explanation: "Java 8でラムダ式が導入され、関数型プログラミングが可能になりました。"
      },
      {
        id: 2,
        question: "Stream APIのterminal操作はどれですか？",
        options: ["filter()", "map()", "collect()", "peek()"],
        correctAnswer: 2,
        explanation: "collect()はterminal操作で、Streamの処理を終了して結果を収集します。"
      },
      {
        id: 3,
        question: "ConcurrentHashMapの特徴は？",
        options: [
          "シングルスレッド専用",
          "スレッドセーフなHashMap",
          "順序を保持する",
          "重複キーを許可"
        ],
        correctAnswer: 1,
        explanation: "ConcurrentHashMapは、マルチスレッド環境で安全に使用できるHashMapの実装です。"
      },
      {
        id: 4,
        question: "Optional<T>の主な目的は？",
        options: [
          "パフォーマンスの向上",
          "NullPointerExceptionの回避",
          "メモリ使用量の削減",
          "型安全性の向上"
        ],
        correctAnswer: 1,
        explanation: "OptionalはNullPointerExceptionを回避し、null値の安全な取り扱いを提供します。"
      },
      {
        id: 5,
        question: "CompletableFutureの用途は？",
        options: [
          "同期処理の最適化",
          "非同期処理とその組み合わせ",
          "データベースアクセス",
          "ファイル入出力"
        ],
        correctAnswer: 1,
        explanation: "CompletableFutureは非同期処理を簡潔に記述し、複数の非同期処理を組み合わせるために使用されます。"
      }
    ]
  }
]