import { Quiz } from '@/types/lesson'

// 各レッスンに特化したクイズデータ
export const simpleQuizData: { [lessonId: number]: Quiz[] } = {
  // レッスン1: Hello World
  1: [
    {
      id: 1,
      question: "Javaプログラムのメインメソッドの正しい記述はどれですか？",
      options: [
        "public static void main(String[] args)",
        "public void main(String[] args)",
        "static void main(String args)",
        "public main(String[] args)"
      ],
      correctAnswer: 0,
      explanation: "Javaのメインメソッドは必ず 'public static void main(String[] args)' で記述します。"
    },
    {
      id: 2,
      question: "文字列を出力するために使用するメソッドはどれですか？",
      options: [
        "System.out.print()",
        "System.out.println()",
        "System.console.write()",
        "System.display()"
      ],
      correctAnswer: 1,
      explanation: "System.out.println()は文字列を出力し、自動的に改行を追加します。"
    },
    {
      id: 3,
      question: "Java文の最後に必要な記号は何ですか？",
      options: [
        "コンマ(,)",
        "ピリオド(.)",
        "セミコロン(;)",
        "コロン(:)"
      ],
      correctAnswer: 2,
      explanation: "Javaでは各文の最後にセミコロン(;)を付ける必要があります。"
    },
    {
      id: 4,
      question: "文字列リテラルを囲むために使用する記号はどれですか？",
      options: [
        "シングルクォート(')",
        "ダブルクォート(\")",
        "角括弧([])",
        "波括弧({})"
      ],
      correctAnswer: 1,
      explanation: "Javaでは文字列リテラルをダブルクォート(\")で囲みます。"
    },
    {
      id: 5,
      question: "Hello Worldプログラムで、クラス名とファイル名の関係はどうなりますか？",
      options: [
        "クラス名とファイル名は同じでなければならない",
        "クラス名とファイル名は異なっていても良い",
        "ファイル名は常に Main.java でなければならない",
        "クラス名は常に HelloWorld でなければならない"
      ],
      correctAnswer: 0,
      explanation: "Javaでは、publicクラス名とファイル名（拡張子.javaを除く）は完全に一致している必要があります。"
    }
  ],

  // レッスン2: 複数行の出力
  2: [
    {
      id: 1,
      question: "複数行を出力するために最も適切な方法はどれですか？",
      options: [
        "System.out.println()を複数回使用する",
        "System.out.print()を複数回使用する",
        "System.out.display()を使用する",
        "System.console.write()を使用する"
      ],
      correctAnswer: 0,
      explanation: "println()は自動的に改行を追加するため、複数行の出力に最適です。"
    },
    {
      id: 2,
      question: "System.out.println()の特徴はどれですか？",
      options: [
        "出力後に改行を追加しない",
        "出力後に自動的に改行を追加する",
        "文字列のみ出力できる",
        "数値のみ出力できる"
      ],
      correctAnswer: 1,
      explanation: "println()は出力後に自動的に改行（\\n）を追加します。"
    },
    {
      id: 3,
      question: "以下のコードの出力行数は何行ですか？\nSystem.out.println(\"1行目\");\nSystem.out.println(\"2行目\");\nSystem.out.println(\"3行目\");",
      options: [
        "1行",
        "2行",
        "3行",
        "4行"
      ],
      correctAnswer: 2,
      explanation: "println()を3回使用しているため、3行が出力されます。"
    },
    {
      id: 4,
      question: "自己紹介プログラムで、名前と趣味を別々の行に出力したい場合の適切な方法は？",
      options: [
        "System.out.print()を2回使用",
        "System.out.println()を2回使用",
        "System.out.println()を1回だけ使用",
        "System.out.write()を使用"
      ],
      correctAnswer: 1,
      explanation: "別々の行に出力するには、println()を複数回使用するのが最適です。"
    },
    {
      id: 5,
      question: "複数行出力プログラムで最も重要な考慮事項は何ですか？",
      options: [
        "出力の順序",
        "文字列の長さ",
        "変数の使用",
        "ループの使用"
      ],
      correctAnswer: 0,
      explanation: "複数行出力では、情報が正しい順序で表示されることが最も重要です。"
    }
  ],

  // レッスン3: print と println の違い
  3: [
    {
      id: 1,
      question: "System.out.print()とSystem.out.println()の主な違いは何ですか？",
      options: [
        "print()は数値のみ、println()は文字列のみ",
        "print()は改行なし、println()は改行あり",
        "print()は高速、println()は低速",
        "print()は古い、println()は新しい"
      ],
      correctAnswer: 1,
      explanation: "print()は改行を追加せず、println()は自動的に改行を追加します。"
    },
    {
      id: 2,
      question: "以下のコードの出力結果は？\nSystem.out.print(\"Hello\");\nSystem.out.print(\" \");\nSystem.out.println(\"World\");",
      options: [
        "Hello\nWorld",
        "Hello World",
        "HelloWorld",
        "Hello  World"
      ],
      correctAnswer: 1,
      explanation: "print()は改行せず連続して出力し、最後のprintln()で改行します。結果は'Hello World'となります。"
    },
    {
      id: 3,
      question: "同じ行に複数の要素を出力したい場合、どのメソッドを使うべきですか？",
      options: [
        "println()のみ",
        "print()のみ",
        "print()とprintln()の組み合わせ",
        "write()メソッド"
      ],
      correctAnswer: 2,
      explanation: "同じ行に複数要素を出力するには、print()で要素を出力し、最後にprintln()で改行するのが一般的です。"
    },
    {
      id: 4,
      question: "以下のコードで何行出力されますか？\nSystem.out.print(\"A\");\nSystem.out.print(\"B\");\nSystem.out.print(\"C\");",
      options: [
        "1行",
        "2行",
        "3行",
        "0行"
      ],
      correctAnswer: 0,
      explanation: "print()は改行しないため、すべて同じ行に出力され、結果は1行となります。"
    },
    {
      id: 5,
      question: "表形式のデータを出力する際に最も適切な方法は？",
      options: [
        "println()のみ使用",
        "print()のみ使用",
        "print()とprintln()を適切に組み合わせ",
        "System.out.format()を使用"
      ],
      correctAnswer: 2,
      explanation: "表形式では、行内の要素はprint()で、行の終わりはprintln()で改行するのが効果的です。"
    }
  ],

  // レッスン4: エスケープシーケンス
  4: [
    {
      id: 1,
      question: "改行を表すエスケープシーケンスはどれですか？",
      options: [
        "\\t",
        "\\n",
        "\\r",
        "\\b"
      ],
      correctAnswer: 1,
      explanation: "\\nは改行（newline）を表すエスケープシーケンスです。"
    },
    {
      id: 2,
      question: "文字列内でダブルクォートを表示するエスケープシーケンスは？",
      options: [
        "\\'",
        "\\\"",
        "\\q",
        "\\d"
      ],
      correctAnswer: 1,
      explanation: "\\\"は文字列内でダブルクォート文字を表示するために使用します。"
    },
    {
      id: 3,
      question: "タブ文字を表すエスケープシーケンスはどれですか？",
      options: [
        "\\s",
        "\\t",
        "\\tab",
        "\\space"
      ],
      correctAnswer: 1,
      explanation: "\\tはタブ文字を表すエスケープシーケンスです。"
    },
    {
      id: 4,
      question: "以下のコードの出力結果は？\nSystem.out.println(\"Hello\\nWorld\");",
      options: [
        "Hello\\nWorld",
        "HellonWorld",
        "Hello\nWorld",
        "Hello(改行)World"
      ],
      correctAnswer: 3,
      explanation: "\\nにより、HelloとWorldの間で改行が発生します。"
    },
    {
      id: 5,
      question: "バックスラッシュ文字自体を出力するエスケープシーケンスは？",
      options: [
        "\\b",
        "\\\\",
        "\\s",
        "\\back"
      ],
      correctAnswer: 1,
      explanation: "\\\\はバックスラッシュ文字自体を出力するために使用します。"
    }
  ],

  // レッスン5: フォーマット済み出力
  5: [
    {
      id: 1,
      question: "System.out.printf()の主な用途は何ですか？",
      options: [
        "高速な出力",
        "フォーマット済みの出力",
        "ファイルへの出力",
        "エラーメッセージの出力"
      ],
      correctAnswer: 1,
      explanation: "printf()は指定されたフォーマットに従って出力を整形するために使用します。"
    },
    {
      id: 2,
      question: "文字列を表すフォーマット指定子はどれですか？",
      options: [
        "%d",
        "%s",
        "%f",
        "%c"
      ],
      correctAnswer: 1,
      explanation: "%sは文字列（String）を表すフォーマット指定子です。"
    },
    {
      id: 3,
      question: "整数を表すフォーマット指定子はどれですか？",
      options: [
        "%s",
        "%f",
        "%d",
        "%b"
      ],
      correctAnswer: 2,
      explanation: "%dは整数（decimal）を表すフォーマット指定子です。"
    },
    {
      id: 4,
      question: "以下のコードの出力は？\nSystem.out.printf(\"名前: %s, 年齢: %d\", \"太郎\", 20);",
      options: [
        "名前: %s, 年齢: %d",
        "名前: 太郎, 年齢: 20",
        "名前: 20, 年齢: 太郎",
        "エラーが発生"
      ],
      correctAnswer: 1,
      explanation: "printf()は%sを\"太郎\"に、%dを20に置き換えて出力します。"
    },
    {
      id: 5,
      question: "printf()とprintln()の主な違いは何ですか？",
      options: [
        "printf()は自動改行しない",
        "printf()は高速",
        "printf()は文字列のみ",
        "printf()は古い形式"
      ],
      correctAnswer: 0,
      explanation: "printf()は自動的に改行を追加しません。改行が必要な場合は\\nを使用します。"
    }
  ]
}

// レッスン6-50の基本クイズを自動生成（レッスン内容に基づく）
for (let lessonId = 6; lessonId <= 50; lessonId++) {
  let lessonTopics: any = {}
  
  // レッスンごとのトピックを設定
  if (lessonId >= 6 && lessonId <= 10) {
    // レベル2: 変数と基本データ型
    lessonTopics = {
      topic: "変数とデータ型",
      questions: [
        { q: "Java変数の宣言において正しい構文はどれですか？", a: ["int number;", "number int;", "var number;", "integer number;"], correct: 0, exp: "Javaでは「データ型 変数名;」の順序で変数を宣言します。" },
        { q: "int型の変数に小数点数を代入するとどうなりますか？", a: ["自動的に切り捨てられる", "自動的に切り上げられる", "コンパイルエラーになる", "実行時エラーになる"], correct: 2, exp: "int型には整数のみ代入可能で、小数点数を代入するとコンパイルエラーになります。" },
        { q: "Javaの基本データ型でないものはどれですか？", a: ["int", "double", "boolean", "String"], correct: 3, exp: "Stringは参照型（クラス）であり、基本データ型ではありません。" },
        { q: "変数の初期化とは何ですか？", a: ["変数を宣言すること", "変数に最初の値を代入すること", "変数を削除すること", "変数の型を変更すること"], correct: 1, exp: "初期化とは、変数に最初の値を代入することです。" },
        { q: "final修飾子を付けた変数の特徴は何ですか？", a: ["値を変更できない", "自動的に初期化される", "メモリ使用量が少ない", "処理が高速になる"], correct: 0, exp: "final修飾子を付けた変数は定数となり、一度値を設定すると変更できません。" }
      ]
    }
  } else if (lessonId >= 11 && lessonId <= 15) {
    // レベル3: 演算子
    lessonTopics = {
      topic: "演算子",
      questions: [
        { q: "a++とb++aの違いは何ですか？", a: ["違いはない", "++aは前置、a++は後置", "++aは高速、a++は低速", "++aは整数のみ、a++は小数も可"], correct: 1, exp: "++aは前置インクリメント、a++は後置インクリメントで、実行タイミングが異なります。" },
        { q: "10 % 3の結果は何ですか？", a: ["3", "1", "0", "3.33"], correct: 1, exp: "%(剰余演算子)は割り算の余りを返します。10÷3=3余り1なので、結果は1です。" },
        { q: "論理演算子&&と&の違いは何ですか？", a: ["違いはない", "&&は短絡評価、&は完全評価", "&&は論理、&はビット演算", "&&の方が高速"], correct: 1, exp: "&&は短絡評価で、左側がfalseなら右側を評価せず、&は両辺を必ず評価します。" },
        { q: "比較演算子==と.equals()の使い分けは？", a: ["どちらも同じ", "==は基本型、.equals()は参照型", "==の方が高速", ".equals()の方が安全"], correct: 1, exp: "==は基本型の値比較や参照比較、.equals()は文字列などオブジェクトの内容比較に使用します。" },
        { q: "三項演算子?:の構文はどれですか？", a: ["条件 ? 真の値 : 偽の値", "? 条件 : 真の値 : 偽の値", "条件 : 真の値 ? 偽の値", "真の値 ? 条件 : 偽の値"], correct: 0, exp: "三項演算子の構文は「条件 ? 真の値 : 偽の値」です。" }
      ]
    }
  } else if (lessonId >= 16 && lessonId <= 20) {
    // レベル4: 制御構造
    lessonTopics = {
      topic: "制御構造",
      questions: [
        { q: "if文の条件式に使用できるデータ型は？", a: ["int", "String", "boolean", "double"], correct: 2, exp: "if文の条件式にはboolean型（trueまたはfalse）のみ使用できます。" },
        { q: "switch文で使用できないデータ型は？", a: ["int", "String", "char", "double"], correct: 3, exp: "switch文ではdouble型は使用できません。int, String, char, enumなどが使用可能です。" },
        { q: "for文の実行順序として正しいのは？", a: ["初期化→条件→処理→増減", "条件→初期化→処理→増減", "処理→条件→増減→初期化", "初期化→処理→条件→増減"], correct: 0, exp: "for文は「初期化→条件判定→処理→増減→条件判定→...」の順序で実行されます。" },
        { q: "break文の役割は何ですか？", a: ["ループを一時停止", "ループから脱出", "次の反復へスキップ", "プログラム終了"], correct: 1, exp: "break文はループから完全に脱出するために使用します。" },
        { q: "continue文の役割は何ですか？", a: ["ループを一時停止", "ループから脱出", "現在の反復をスキップして次へ", "プログラム終了"], correct: 2, exp: "continue文は現在の反復の残りをスキップして、次の反復に進みます。" }
      ]
    }
  } else if (lessonId >= 21 && lessonId <= 30) {
    // レベル5-6: 配列とメソッド
    lessonTopics = {
      topic: "配列とメソッド",
      questions: [
        { q: "配列の宣言として正しいのはどれですか？", a: ["int[] numbers;", "array int numbers;", "int numbers[];", "int[5] numbers;"], correct: 0, exp: "Javaでは「データ型[] 配列名」または「データ型 配列名[]」で配列を宣言します。推奨は前者です。" },
        { q: "配列の要素数を取得するには？", a: [".size()", ".length", ".count()", ".length()"], correct: 1, exp: "配列の要素数は.lengthプロパティ（メソッドではない）で取得します。" },
        { q: "メソッドの戻り値がない場合の戻り値型は？", a: ["null", "void", "empty", "none"], correct: 1, exp: "戻り値がないメソッドの戻り値型はvoidを使用します。" },
        { q: "メソッドのオーバーロードとは？", a: ["同じ名前で異なる引数のメソッドを定義", "メソッドを継承すること", "メソッドを呼び出すこと", "メソッドを削除すること"], correct: 0, exp: "オーバーロードは同じ名前で引数の型や数が異なるメソッドを複数定義することです。" },
        { q: "static修飾子の付いたメソッドの特徴は？", a: ["インスタンス化が必要", "クラス名で直接呼び出せる", "継承できない", "高速に実行される"], correct: 1, exp: "staticメソッドはクラス名で直接呼び出すことができ、インスタンス化は不要です。" }
      ]
    }
  } else if (lessonId >= 31 && lessonId <= 40) {
    // レベル7-8: クラスとオブジェクト
    lessonTopics = {
      topic: "クラスとオブジェクト",
      questions: [
        { q: "クラスとオブジェクトの関係として正しいのは？", a: ["クラスはオブジェクトの実体", "オブジェクトはクラスの実体", "クラスとオブジェクトは同じ", "関係はない"], correct: 1, exp: "クラスは設計図、オブジェクトはその設計図から作られた実体（インスタンス）です。" },
        { q: "コンストラクタの役割は何ですか？", a: ["オブジェクトを削除", "オブジェクトを初期化", "メソッドを定義", "変数を宣言"], correct: 1, exp: "コンストラクタはオブジェクトの生成時に呼び出され、オブジェクトを初期化する役割を持ちます。" },
        { q: "private修飾子の意味は？", a: ["どこからでもアクセス可能", "同じクラス内からのみアクセス可能", "同じパッケージからアクセス可能", "継承したクラスからアクセス可能"], correct: 1, exp: "private修飾子は、そのメンバを同じクラス内からのみアクセス可能にします。" },
        { q: "getter/setterメソッドの目的は？", a: ["処理速度の向上", "メモリ使用量の削減", "カプセル化の実現", "継承の実現"], correct: 2, exp: "getter/setterメソッドは、フィールドへの安全なアクセスを提供し、カプセル化を実現します。" },
        { q: "this参照の役割は何ですか？", a: ["親クラスを参照", "現在のオブジェクトを参照", "次のオブジェクトを参照", "静的メンバを参照"], correct: 1, exp: "this参照は現在のオブジェクト自身を参照するために使用します。" }
      ]
    }
  } else {
    // レベル9: 継承とポリモーフィズム（41-50）
    lessonTopics = {
      topic: "継承とポリモーフィズム",
      questions: [
        { q: "継承において子クラスが親クラスのメンバにアクセスする際のキーワードは？", a: ["this", "super", "parent", "base"], correct: 1, exp: "super参照を使用して、子クラスから親クラスのメンバにアクセスします。" },
        { q: "メソッドのオーバーライドとは？", a: ["同じ名前で異なる引数のメソッドを定義", "子クラスで親クラスのメソッドを再定義", "メソッドを削除すること", "メソッドを複製すること"], correct: 1, exp: "オーバーライドは、子クラスで親クラスのメソッドを再定義することです。" },
        { q: "abstract修飾子の付いたメソッドの特徴は？", a: ["実装が必須", "実装を持たない", "静的メソッド", "最終メソッド"], correct: 1, exp: "abstractメソッドは実装を持たず、子クラスで必ず実装される必要があります。" },
        { q: "ポリモーフィズムの利点は何ですか？", a: ["処理速度の向上", "メモリ使用量の削減", "コードの柔軟性と再利用性", "セキュリティの向上"], correct: 2, exp: "ポリモーフィズムにより、同じインターフェースで異なる実装を扱え、コードの柔軟性が向上します。" },
        { q: "final修飾子をクラスに付けた場合の効果は？", a: ["インスタンス化できない", "継承できない", "メソッドが追加できない", "変数が宣言できない"], correct: 1, exp: "finalクラスは継承することができません（例：Stringクラス）。" }
      ]
    }
  }

  // レッスン固有のクイズを生成
  simpleQuizData[lessonId] = lessonTopics.questions ? 
    lessonTopics.questions.map((q: any, index: number) => ({
      id: index + 1,
      question: q.q,
      options: q.a,
      correctAnswer: q.correct,
      explanation: q.exp
    })) :
    [
      {
        id: 1,
        question: `${lessonTopics.topic}に関する基本的な理解を確認する問題です。この分野で最も重要な概念は何ですか？`,
        options: ["構文の暗記", "概念の理解", "速度の最適化", "メモリ管理"],
        correctAnswer: 1,
        explanation: `${lessonTopics.topic}では、まず基本概念を理解することが最も重要です。`
      },
      {
        id: 2,
        question: `${lessonTopics.topic}を学習する際の効果的なアプローチは？`,
        options: ["理論のみ学習", "実践のみ重視", "理論と実践の組み合わせ", "暗記中心"],
        correctAnswer: 2,
        explanation: `${lessonTopics.topic}の習得には、理論的理解と実際のコーディング練習の両方が重要です。`
      },
      {
        id: 3,
        question: `${lessonTopics.topic}でよくある間違いを避けるために注意すべき点は？`,
        options: ["詳細な仕様の確認", "基本ルールの理解", "エラーメッセージの確認", "すべて重要"],
        correctAnswer: 3,
        explanation: `${lessonTopics.topic}では、基本ルールの理解、仕様の確認、エラーの適切な処理がすべて重要です。`
      },
      {
        id: 4,
        question: `${lessonTopics.topic}の知識を実際のプロジェクトで活用する方法は？`,
        options: ["小さな例から始める", "複雑な実装をすぐ試す", "理論だけで満足する", "他人のコードをコピー"],
        correctAnswer: 0,
        explanation: `${lessonTopics.topic}の知識は、まず小さな例で動作を確認してから、徐々に複雑な実装に発展させることが効果的です。`
      },
      {
        id: 5,
        question: `${lessonTopics.topic}のスキル向上のための継続学習方法は？`,
        options: ["定期的な復習と練習", "一度学習すれば十分", "最新技術のみ追跡", "理論書の読書のみ"],
        correctAnswer: 0,
        explanation: `${lessonTopics.topic}のスキル向上には、定期的な復習と実践的な練習が不可欠です。`
      }
    ]
}