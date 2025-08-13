import { Quiz } from '@/types/lesson'

// レッスン31-50のクイズデータ
export const quizDataPart4: { [lessonId: number]: Quiz[] } = {
  // レッスン31: 配列の宣言と初期化
  31: [
    {
      id: 1,
      question: "配列の正しい宣言方法は？",
      options: [
        "int[] arr = new int[5];",
        "int arr[5];",
        "array int arr = 5;",
        "int arr = new array[5];"
      ],
      correctAnswer: 0,
      explanation: "Javaでは int[] arr = new int[5]; の形式で配列を宣言・初期化します。"
    },
    {
      id: 2,
      question: "int[] numbers = {1, 2, 3}; の配列サイズは？",
      options: [
        "2",
        "3",
        "4",
        "エラー"
      ],
      correctAnswer: 1,
      explanation: "要素が3個あるため、配列サイズは3です。"
    },
    {
      id: 3,
      question: "配列のインデックスは何から始まる？",
      options: [
        "1",
        "0",
        "-1",
        "任意"
      ],
      correctAnswer: 1,
      explanation: "Javaの配列インデックスは0から始まります。"
    },
    {
      id: 4,
      question: "new int[5] で作成した配列の初期値は？",
      options: [
        "null",
        "0",
        "ランダム値",
        "エラー"
      ],
      correctAnswer: 1,
      explanation: "int配列の要素は自動的に0で初期化されます。"
    },
    {
      id: 5,
      question: "配列宣言の別の書き方は？",
      options: [
        "int arr[];",
        "int[] arr;",
        "両方とも正しい",
        "どちらも間違い"
      ],
      correctAnswer: 2,
      explanation: "int arr[]; と int[] arr; の両方とも有効な配列宣言です。"
    }
  ],

  // レッスン32: 配列の要素へのアクセス
  32: [
    {
      id: 1,
      question: "配列の要素にアクセスする方法は？",
      options: [
        "arr.get(0)",
        "arr[0]",
        "arr(0)",
        "arr->0"
      ],
      correctAnswer: 1,
      explanation: "配列の要素には arr[インデックス] でアクセスします。"
    },
    {
      id: 2,
      question: "int[] arr = {10, 20, 30}; arr[1] の値は？",
      options: [
        "10",
        "20",
        "30",
        "エラー"
      ],
      correctAnswer: 1,
      explanation: "インデックス1の要素は20です（0から始まるため）。"
    },
    {
      id: 3,
      question: "配列の範囲外アクセスで発生する例外は？",
      options: [
        "NullPointerException",
        "ArrayIndexOutOfBoundsException",
        "IllegalArgumentException",
        "RuntimeException"
      ],
      correctAnswer: 1,
      explanation: "配列の範囲外アクセスではArrayIndexOutOfBoundsExceptionが発生します。"
    },
    {
      id: 4,
      question: "arr[arr.length] はどうなる？",
      options: [
        "最後の要素を取得",
        "新しい要素を追加",
        "例外が発生",
        "null を返す"
      ],
      correctAnswer: 2,
      explanation: "lengthは要素数なので、arr[length]は範囲外アクセスになります。"
    },
    {
      id: 5,
      question: "配列の要素を変更するには？",
      options: [
        "arr[0] = 100;",
        "arr.set(0, 100);",
        "arr.change(0, 100);",
        "arr.update(0, 100);"
      ],
      correctAnswer: 0,
      explanation: "arr[インデックス] = 値; で配列の要素を変更できます。"
    }
  ],

  // レッスン33: 配列の長さ
  33: [
    {
      id: 1,
      question: "配列の長さを取得するプロパティは？",
      options: [
        "size",
        "length",
        "count",
        "capacity"
      ],
      correctAnswer: 1,
      explanation: "配列の長さは length プロパティで取得できます。"
    },
    {
      id: 2,
      question: "arr.length の戻り値の型は？",
      options: [
        "int",
        "long",
        "double",
        "String"
      ],
      correctAnswer: 0,
      explanation: "length プロパティはint型の値を返します。"
    },
    {
      id: 3,
      question: "length は何？",
      options: [
        "メソッド",
        "プロパティ（フィールド）",
        "変数",
        "定数"
      ],
      correctAnswer: 1,
      explanation: "lengthはメソッドではなくpublicなfinalフィールドです。"
    },
    {
      id: 4,
      question: "int[] arr = new int[10]; arr.length の値は？",
      options: [
        "9",
        "10",
        "11",
        "エラー"
      ],
      correctAnswer: 1,
      explanation: "配列サイズが10なので、lengthは10を返します。"
    },
    {
      id: 5,
      question: "配列の最後の要素にアクセスするには？",
      options: [
        "arr[arr.length]",
        "arr[arr.length - 1]",
        "arr.last()",
        "arr[-1]"
      ],
      correctAnswer: 1,
      explanation: "最後の要素のインデックスは length - 1 です。"
    }
  ],

  // レッスン34: 配列のループ処理
  34: [
    {
      id: 1,
      question: "配列を順番に処理するfor文の書き方は？",
      options: [
        "for (int i = 1; i <= arr.length; i++)",
        "for (int i = 0; i < arr.length; i++)",
        "for (int i = 0; i <= arr.length; i++)",
        "for (int i = arr.length; i > 0; i--)"
      ],
      correctAnswer: 1,
      explanation: "インデックスは0から始まり、lengthより小さい間ループします。"
    },
    {
      id: 2,
      question: "拡張for文（for-each）の構文は？",
      options: [
        "for (int element in arr)",
        "for (int element : arr)",
        "for each (int element in arr)",
        "foreach (int element : arr)"
      ],
      correctAnswer: 1,
      explanation: "Javaの拡張for文は for (型 変数 : 配列) の形式です。"
    },
    {
      id: 3,
      question: "拡張for文の利点は？",
      options: [
        "実行速度が速い",
        "メモリ使用量が少ない",
        "インデックスエラーが起こりにくい",
        "配列サイズを変更できる"
      ],
      correctAnswer: 2,
      explanation: "インデックスを直接扱わないため、範囲外エラーが起こりにくくなります。"
    },
    {
      id: 4,
      question: "拡張for文で配列の要素を変更できる？",
      options: [
        "できる",
        "できない",
        "場合による",
        "エラーになる"
      ],
      correctAnswer: 1,
      explanation: "拡張for文では要素のコピーを扱うため、元の配列は変更されません。"
    },
    {
      id: 5,
      question: "配列の逆順処理に適したループは？",
      options: [
        "拡張for文",
        "while文",
        "通常のfor文",
        "do-while文"
      ],
      correctAnswer: 2,
      explanation: "逆順処理にはインデックスを制御できる通常のfor文が適しています。"
    }
  ],

  // レッスン35: 多次元配列
  35: [
    {
      id: 1,
      question: "2次元配列の正しい宣言は？",
      options: [
        "int[][] arr = new int[3][4];",
        "int[3][4] arr = new int;",
        "int arr[3,4];",
        "array int arr = new [3][4];"
      ],
      correctAnswer: 0,
      explanation: "2次元配列は int[][] arr = new int[行][列]; で宣言します。"
    },
    {
      id: 2,
      question: "int[][] matrix = new int[3][4]; の要素数は？",
      options: [
        "7",
        "12",
        "3",
        "4"
      ],
      correctAnswer: 1,
      explanation: "3行×4列 = 12個の要素があります。"
    },
    {
      id: 3,
      question: "matrix[1][2] の意味は？",
      options: [
        "1列目2行目の要素",
        "2行目1列目の要素", 
        "2行目3列目の要素",
        "1行目2列目の要素"
      ],
      correctAnswer: 2,
      explanation: "matrix[行][列] なので、2行目（インデックス1）3列目（インデックス2）の要素です。"
    },
    {
      id: 4,
      question: "ジャグ配列とは？",
      options: [
        "要素が削除された配列",
        "各行の列数が異なる配列",
        "3次元以上の配列",
        "文字列専用の配列"
      ],
      correctAnswer: 1,
      explanation: "ジャグ配列は各行の列数が異なる不規則な2次元配列です。"
    },
    {
      id: 5,
      question: "2次元配列の行数を取得するには？",
      options: [
        "arr.length",
        "arr[0].length",
        "arr.rows",
        "arr.height"
      ],
      correctAnswer: 0,
      explanation: "arr.length で行数を取得できます。"
    }
  ],

  // レッスン36: メソッドの基本
  36: [
    {
      id: 1,
      question: "メソッドの基本構文は？",
      options: [
        "アクセス修飾子 戻り値型 メソッド名(引数)",
        "メソッド名 戻り値型 (引数)",
        "戻り値型 メソッド名 アクセス修飾子 (引数)",
        "function メソッド名(引数) : 戻り値型"
      ],
      correctAnswer: 0,
      explanation: "メソッドは アクセス修飾子 戻り値型 メソッド名(引数) の順で宣言します。"
    },
    {
      id: 2,
      question: "戻り値がないメソッドの戻り値型は？",
      options: [
        "null",
        "void",
        "empty",
        "none"
      ],
      correctAnswer: 1,
      explanation: "戻り値がない場合は void を指定します。"
    },
    {
      id: 3,
      question: "メソッドを呼び出すには？",
      options: [
        "メソッド名(引数)",
        "call メソッド名(引数)",
        "invoke メソッド名(引数)",
        "run メソッド名(引数)"
      ],
      correctAnswer: 0,
      explanation: "メソッド名(引数) の形式でメソッドを呼び出します。"
    },
    {
      id: 4,
      question: "return文の役割は？",
      options: [
        "メソッドを一時停止する",
        "値を返してメソッドを終了する",
        "ループを抜ける",
        "例外を発生させる"
      ],
      correctAnswer: 1,
      explanation: "return文は値を返し、メソッドの実行を終了します。"
    },
    {
      id: 5,
      question: "voidメソッドでreturn文は？",
      options: [
        "必須",
        "使用不可",
        "値なしで使用可能",
        "エラーになる"
      ],
      correctAnswer: 2,
      explanation: "voidメソッドでは return; として値なしでreturn文を使えます。"
    }
  ],

  // レッスン37-50の簡略版クイズデータを続けて追加
  37: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `引数と戻り値に関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: 0,
    explanation: "引数と戻り値の概念についての説明"
  })),

  38: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `メソッドオーバーロードに関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: 1,
    explanation: "メソッドオーバーロードの概念についての説明"
  })),

  39: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `再帰メソッドに関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: 2,
    explanation: "再帰メソッドの概念についての説明"
  })),

  40: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `staticメソッドに関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: 0,
    explanation: "staticメソッドの概念についての説明"
  })),

  // レッスン41-50も同様のパターンで生成
  41: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `クラスの基本に関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "クラスの基本概念についての説明"
  })),

  42: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `コンストラクタに関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "コンストラクタの概念についての説明"
  })),

  43: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `インスタンス変数とメソッドに関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "インスタンス変数とメソッドの概念についての説明"
  })),

  44: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `カプセル化に関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "カプセル化の概念についての説明"
  })),

  45: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `継承の基礎に関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "継承の基本概念についての説明"
  })),

  46: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `数当てゲームに関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "数当てゲームの実装についての説明"
  })),

  47: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `電卓プログラムに関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "電卓プログラムの実装についての説明"
  })),

  48: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `学生管理システムに関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "学生管理システムの実装についての説明"
  })),

  49: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `図書館管理システムに関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "図書館管理システムの実装についての説明"
  })),

  50: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `在庫管理システムに関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "在庫管理システムの実装についての説明"
  }))
}