import { Quiz } from '@/types/lesson'

export const quizData: { [lessonId: number]: Quiz[] } = {
  // レッスン1: Hello World
  1: [
    {
      id: 1,
      question: "Javaプログラムのエントリーポイントとなるメソッドの正しい宣言はどれですか？",
      options: [
        "public static void main(String[] args)",
        "public void main(String args)",
        "static main(String[] args)",
        "void main()"
      ],
      correctAnswer: 0,
      explanation: "Javaプログラムのエントリーポイントは必ず 'public static void main(String[] args)' という形式である必要があります。"
    },
    {
      id: 2,
      question: "System.out.println() の役割は何ですか？",
      options: [
        "エラーを表示する",
        "文字列を出力して改行する",
        "ファイルに書き込む",
        "入力を受け取る"
      ],
      correctAnswer: 1,
      explanation: "System.out.println() は標準出力に文字列を出力し、最後に改行を追加します。"
    },
    {
      id: 3,
      question: "Javaのクラス名に関する規則として正しいものはどれですか？",
      options: [
        "小文字で始める",
        "数字で始めてもよい",
        "大文字で始める（慣習）",
        "アンダースコアで始める"
      ],
      correctAnswer: 2,
      explanation: "Javaのクラス名は慣習として大文字で始めます（PascalCase）。これは必須ではありませんが、強く推奨されています。"
    },
    {
      id: 4,
      question: "Javaプログラムのファイル拡張子は何ですか？",
      options: [
        ".java",
        ".js",
        ".class",
        ".jar"
      ],
      correctAnswer: 0,
      explanation: "Javaのソースコードファイルの拡張子は .java です。コンパイル後は .class になります。"
    },
    {
      id: 5,
      question: "public キーワードの意味は何ですか？",
      options: [
        "プライベートアクセス",
        "パッケージ内のみアクセス可能",
        "どこからでもアクセス可能",
        "継承のみ可能"
      ],
      correctAnswer: 2,
      explanation: "public はアクセス修飾子で、どこからでもアクセス可能であることを意味します。"
    }
  ],

  // レッスン2: 複数行の出力
  2: [
    {
      id: 1,
      question: "System.out.println() を3回実行すると、何行の出力になりますか？",
      options: [
        "1行",
        "2行",
        "3行",
        "0行"
      ],
      correctAnswer: 2,
      explanation: "println() は出力後に改行するため、3回実行すると3行の出力になります。"
    },
    {
      id: 2,
      question: "次のコードの出力は何行になりますか？\nSystem.out.println(\"A\");\nSystem.out.println(\"B\");",
      options: [
        "1行にABと表示",
        "2行に分けてAとBを表示",
        "エラーになる",
        "何も表示されない"
      ],
      correctAnswer: 1,
      explanation: "各 println() は改行を含むため、AとBは別々の行に表示されます。"
    },
    {
      id: 3,
      question: "複数の文字列を一度に出力する最も簡単な方法は？",
      options: [
        "System.out.println() を複数回使う",
        "System.out.print() を使う",
        "System.out.write() を使う",
        "System.out.format() を使う"
      ],
      correctAnswer: 0,
      explanation: "複数行を出力する最も簡単な方法は、System.out.println() を複数回使用することです。"
    },
    {
      id: 4,
      question: "println の 'ln' は何の略ですか？",
      options: [
        "link",
        "line",
        "length",
        "long"
      ],
      correctAnswer: 1,
      explanation: "println の 'ln' は 'line' の略で、出力後に改行（new line）することを意味します。"
    },
    {
      id: 5,
      question: "System.out.println(\"\"); の出力結果は？",
      options: [
        "エラーになる",
        "何も出力されない",
        "空行が1行出力される",
        "スペースが出力される"
      ],
      correctAnswer: 2,
      explanation: "空文字列を println() で出力すると、改行だけが出力されるため、空行が1行表示されます。"
    }
  ],

  // レッスン3: print と println の違い
  3: [
    {
      id: 1,
      question: "System.out.print() と System.out.println() の違いは？",
      options: [
        "print() は改行しない、println() は改行する",
        "print() は改行する、println() は改行しない",
        "両方とも改行する",
        "両方とも改行しない"
      ],
      correctAnswer: 0,
      explanation: "print() は改行せずに出力し、println() は出力後に改行します。"
    },
    {
      id: 2,
      question: "次のコードの出力結果は？\nSystem.out.print(\"Hello\");\nSystem.out.print(\"World\");",
      options: [
        "Hello World（1行）",
        "HelloWorld（1行）",
        "Hello\nWorld（2行）",
        "エラーになる"
      ],
      correctAnswer: 1,
      explanation: "print() は改行しないため、HelloとWorldが連続して1行に表示されます。"
    },
    {
      id: 3,
      question: "1行に複数の値を空白区切りで出力するには？",
      options: [
        "System.out.println() を使う",
        "System.out.print() で出力し、間に空白を入れる",
        "System.out.write() を使う",
        "不可能"
      ],
      correctAnswer: 1,
      explanation: "System.out.print() を使って値と空白を順番に出力することで、1行に複数の値を表示できます。"
    },
    {
      id: 4,
      question: "次のコードの最終的な行数は？\nSystem.out.print(\"A\");\nSystem.out.println(\"B\");\nSystem.out.print(\"C\");",
      options: [
        "1行",
        "2行",
        "3行",
        "4行"
      ],
      correctAnswer: 1,
      explanation: "最初の2つでABが1行目に、最後のCが2行目の先頭に表示されるため、合計2行になります。"
    },
    {
      id: 5,
      question: "プログレスバーのような表示を作るのに適しているのは？",
      options: [
        "System.out.println()",
        "System.out.print()",
        "System.out.write()",
        "System.out.format()"
      ],
      correctAnswer: 1,
      explanation: "print() は改行しないため、同じ行に順次文字を追加していくプログレスバーのような表示に適しています。"
    }
  ],

  // レッスン4: エスケープシーケンス
  4: [
    {
      id: 1,
      question: "改行を表すエスケープシーケンスは？",
      options: [
        "\\r",
        "\\n",
        "\\t",
        "\\b"
      ],
      correctAnswer: 1,
      explanation: "\\n は改行（new line）を表すエスケープシーケンスです。"
    },
    {
      id: 2,
      question: "タブ文字を表すエスケープシーケンスは？",
      options: [
        "\\t",
        "\\tab",
        "\\s",
        "\\space"
      ],
      correctAnswer: 0,
      explanation: "\\t はタブ文字を表すエスケープシーケンスです。"
    },
    {
      id: 3,
      question: "文字列内でダブルクォート(\")を表示するには？",
      options: [
        "'\"'",
        "\\\"",
        "\"\"",
        "//\""
      ],
      correctAnswer: 1,
      explanation: "\\\" を使用することで、文字列内でダブルクォートを表示できます。"
    },
    {
      id: 4,
      question: "System.out.println(\"Hello\\nWorld\"); の出力は？",
      options: [
        "Hello\\nWorld",
        "HelloWorld",
        "Hello World",
        "Hello\nWorld（2行）"
      ],
      correctAnswer: 3,
      explanation: "\\n は改行として解釈されるため、HelloとWorldが2行に分かれて表示されます。"
    },
    {
      id: 5,
      question: "バックスラッシュ自体を表示するには？",
      options: [
        "\\",
        "\\\\",
        "/\\",
        "\\b"
      ],
      correctAnswer: 1,
      explanation: "\\\\ を使用することで、バックスラッシュ自体を表示できます。"
    }
  ],

  // レッスン5: コメントの書き方
  5: [
    {
      id: 1,
      question: "1行コメントの記法は？",
      options: [
        "/* コメント */",
        "// コメント",
        "<!-- コメント -->",
        "# コメント"
      ],
      correctAnswer: 1,
      explanation: "// から行末までが1行コメントになります。"
    },
    {
      id: 2,
      question: "複数行コメントの記法は？",
      options: [
        "/* コメント */",
        "// コメント //",
        "''' コメント '''",
        "<!-- コメント -->"
      ],
      correctAnswer: 0,
      explanation: "/* から */ までが複数行コメントになります。"
    },
    {
      id: 3,
      question: "Javadocコメントの開始記号は？",
      options: [
        "/*",
        "//",
        "/**",
        "///"
      ],
      correctAnswer: 2,
      explanation: "/** で始まるコメントはJavadocコメントで、APIドキュメントの生成に使用されます。"
    },
    {
      id: 4,
      question: "コメントの主な目的は？",
      options: [
        "プログラムを高速化する",
        "コードの説明や注釈を残す",
        "エラーを防ぐ",
        "メモリを節約する"
      ],
      correctAnswer: 1,
      explanation: "コメントはコードの説明や注釈を残すために使用され、実行時には無視されます。"
    },
    {
      id: 5,
      question: "コメントアウトの目的として適切なものは？",
      options: [
        "コードを削除する",
        "一時的にコードを無効化する",
        "コードを暗号化する",
        "コードを圧縮する"
      ],
      correctAnswer: 1,
      explanation: "コメントアウトは、コードを削除せずに一時的に無効化するために使用されます。"
    }
  ]
}

// レッスン6-10のクイズデータ
export const quizDataPart2: { [lessonId: number]: Quiz[] } = {
  // レッスン6: 変数の宣言と代入
  6: [
    {
      id: 1,
      question: "変数宣言の正しい構文は？",
      options: [
        "int x = 10;",
        "x = 10 int;",
        "variable x = 10;",
        "10 = int x;"
      ],
      correctAnswer: 0,
      explanation: "変数宣言は '型名 変数名 = 値;' の形式で行います。"
    },
    {
      id: 2,
      question: "変数名として使用できないものは？",
      options: [
        "myVariable",
        "variable1",
        "1variable",
        "_variable"
      ],
      correctAnswer: 2,
      explanation: "変数名は数字で始めることはできません。"
    },
    {
      id: 3,
      question: "変数の初期化とは？",
      options: [
        "変数を削除すること",
        "変数に最初の値を代入すること",
        "変数の型を変更すること",
        "変数を定数にすること"
      ],
      correctAnswer: 1,
      explanation: "初期化は変数に最初の値を代入することです。"
    },
    {
      id: 4,
      question: "int x; の後に x の値は？",
      options: [
        "null",
        "0",
        "未定義",
        "エラー"
      ],
      correctAnswer: 1,
      explanation: "int型の変数は宣言時に自動的に0で初期化されます（インスタンス変数の場合）。"
    },
    {
      id: 5,
      question: "変数の再代入として正しいものは？",
      options: [
        "int x = 5; x = 10;",
        "int x = 5; int x = 10;",
        "x = 5; int x = 10;",
        "final int x = 5; x = 10;"
      ],
      correctAnswer: 0,
      explanation: "一度宣言した変数には、型を指定せずに新しい値を代入できます。"
    }
  ],

  // レッスン7: 整数型（int）
  7: [
    {
      id: 1,
      question: "int型の値の範囲は？",
      options: [
        "-128 から 127",
        "-32768 から 32767",
        "-2147483648 から 2147483647",
        "0 から 4294967295"
      ],
      correctAnswer: 2,
      explanation: "int型は32ビットで、約-21億から+21億までの整数を扱えます。"
    },
    {
      id: 2,
      question: "int型の変数に代入できない値は？",
      options: [
        "100",
        "-500",
        "0",
        "3.14"
      ],
      correctAnswer: 3,
      explanation: "int型は整数型なので、小数点を含む値は代入できません。"
    },
    {
      id: 3,
      question: "int a = 5; int b = 2; a / b の結果は？",
      options: [
        "2.5",
        "2",
        "3",
        "エラー"
      ],
      correctAnswer: 1,
      explanation: "整数同士の除算は整数になり、小数部分は切り捨てられます。"
    },
    {
      id: 4,
      question: "より大きな整数を扱う場合に使用する型は？",
      options: [
        "short",
        "byte",
        "long",
        "float"
      ],
      correctAnswer: 2,
      explanation: "long型は64ビットで、intより大きな整数を扱えます。"
    },
    {
      id: 5,
      question: "int x = Integer.MAX_VALUE; x++; の結果は？",
      options: [
        "Integer.MAX_VALUE + 1",
        "エラー",
        "Integer.MIN_VALUE",
        "0"
      ],
      correctAnswer: 2,
      explanation: "整数のオーバーフローが発生し、最大値の次は最小値になります。"
    }
  ],

  // レッスン8: 浮動小数点型（double）
  8: [
    {
      id: 1,
      question: "double型の特徴は？",
      options: [
        "整数のみ扱える",
        "小数を扱える",
        "文字を扱える",
        "真偽値を扱える"
      ],
      correctAnswer: 1,
      explanation: "double型は浮動小数点数を扱うための型です。"
    },
    {
      id: 2,
      question: "double x = 10.0 / 3.0; の結果は？",
      options: [
        "3",
        "3.0",
        "3.333...",
        "エラー"
      ],
      correctAnswer: 2,
      explanation: "double型では小数の計算結果も保持できます（3.3333...）。"
    },
    {
      id: 3,
      question: "float と double の違いは？",
      options: [
        "floatの方が精度が高い",
        "doubleの方が精度が高い",
        "同じ精度",
        "floatは整数専用"
      ],
      correctAnswer: 1,
      explanation: "doubleは64ビット、floatは32ビットで、doubleの方が高精度です。"
    },
    {
      id: 4,
      question: "double型のリテラルの書き方は？",
      options: [
        "3.14",
        "3.14f",
        "3.14d",
        "AとCの両方"
      ],
      correctAnswer: 3,
      explanation: "3.14 または 3.14d の両方がdouble型のリテラルです。"
    },
    {
      id: 5,
      question: "double x = 0.1 + 0.2; の結果について正しいものは？",
      options: [
        "必ず 0.3",
        "誤差が生じる可能性がある",
        "0",
        "エラー"
      ],
      correctAnswer: 1,
      explanation: "浮動小数点数の計算では丸め誤差が生じる可能性があります。"
    }
  ],

  // レッスン9: 文字列型（String）
  9: [
    {
      id: 1,
      question: "String型の正しい宣言は？",
      options: [
        "String name = \"太郎\";",
        "string name = \"太郎\";",
        "String name = '太郎';",
        "Str name = \"太郎\";"
      ],
      correctAnswer: 0,
      explanation: "String型は大文字で始まり、文字列はダブルクォートで囲みます。"
    },
    {
      id: 2,
      question: "文字列の連結に使用する演算子は？",
      options: [
        "&",
        "+",
        ".",
        "*"
      ],
      correctAnswer: 1,
      explanation: "+ 演算子を使用して文字列を連結できます。"
    },
    {
      id: 3,
      question: "\"Hello\" + \" \" + \"World\" の結果は？",
      options: [
        "HelloWorld",
        "Hello World",
        "Hello  World",
        "エラー"
      ],
      correctAnswer: 1,
      explanation: "文字列が順番に連結され、\"Hello World\" になります。"
    },
    {
      id: 4,
      question: "String.length() メソッドの役割は？",
      options: [
        "文字列を大文字にする",
        "文字列を小文字にする",
        "文字列の長さを取得する",
        "文字列を反転する"
      ],
      correctAnswer: 2,
      explanation: "length() メソッドは文字列の文字数を返します。"
    },
    {
      id: 5,
      question: "String は何型？",
      options: [
        "プリミティブ型",
        "参照型",
        "数値型",
        "論理型"
      ],
      correctAnswer: 1,
      explanation: "Stringは参照型（クラス型）で、プリミティブ型ではありません。"
    }
  ],

  // レッスン10: 真偽値型（boolean）
  10: [
    {
      id: 1,
      question: "boolean型が取りうる値は？",
      options: [
        "0 または 1",
        "true または false",
        "yes または no",
        "on または off"
      ],
      correctAnswer: 1,
      explanation: "boolean型は true または false の2つの値のみを取ります。"
    },
    {
      id: 2,
      question: "boolean isAdult = age >= 18; で age が 20 の場合、isAdult の値は？",
      options: [
        "20",
        "18",
        "true",
        "false"
      ],
      correctAnswer: 2,
      explanation: "20 >= 18 は真なので、isAdult は true になります。"
    },
    {
      id: 3,
      question: "boolean型の初期値は？",
      options: [
        "true",
        "false",
        "null",
        "未定義"
      ],
      correctAnswer: 1,
      explanation: "boolean型のインスタンス変数の初期値は false です。"
    },
    {
      id: 4,
      question: "!true の結果は？",
      options: [
        "true",
        "false",
        "null",
        "エラー"
      ],
      correctAnswer: 1,
      explanation: "! は論理否定演算子で、true を false に反転します。"
    },
    {
      id: 5,
      question: "boolean型の主な用途は？",
      options: [
        "数値計算",
        "文字列処理",
        "条件判定",
        "ファイル操作"
      ],
      correctAnswer: 2,
      explanation: "boolean型は主に条件判定やフラグ管理に使用されます。"
    }
  ]
}

// レッスン11-20のクイズデータ
export const quizDataPart3: { [lessonId: number]: Quiz[] } = {
  // レッスン11: 文字型（char）
  11: [
    {
      id: 1,
      question: "char型の正しい宣言は？",
      options: [
        "char c = 'A';",
        "char c = \"A\";",
        "char c = A;",
        "char c = 'AB';"
      ],
      correctAnswer: 0,
      explanation: "char型はシングルクォートで囲んだ単一文字を代入します。"
    },
    {
      id: 2,
      question: "char型で扱える文字数は？",
      options: [
        "1文字",
        "2文字",
        "8文字",
        "制限なし"
      ],
      correctAnswer: 0,
      explanation: "char型は単一の文字のみを扱うことができます。"
    },
    {
      id: 3,
      question: "char c = 'A'; System.out.println(c + 1); の出力は？",
      options: [
        "A1",
        "B",
        "66",
        "エラー"
      ],
      correctAnswer: 2,
      explanation: "charは内部的に数値として扱われ、'A'のASCII値は65なので、65+1=66が出力されます。"
    },
    {
      id: 4,
      question: "改行文字をchar型で表現するには？",
      options: [
        "char c = '\\n';",
        "char c = \"\\n\";",
        "char c = newline;",
        "char c = \\n;"
      ],
      correctAnswer: 0,
      explanation: "エスケープシーケンス \\n をシングルクォートで囲んで使用します。"
    },
    {
      id: 5,
      question: "char型のサイズは？",
      options: [
        "8ビット",
        "16ビット",
        "32ビット",
        "64ビット"
      ],
      correctAnswer: 1,
      explanation: "char型は16ビット（2バイト）でUnicode文字を表現できます。"
    }
  ],

  // レッスン12: 定数（final）
  12: [
    {
      id: 1,
      question: "定数の正しい宣言は？",
      options: [
        "final int NUMBER = 10;",
        "const int NUMBER = 10;",
        "constant int NUMBER = 10;",
        "readonly int NUMBER = 10;"
      ],
      correctAnswer: 0,
      explanation: "Javaでは final キーワードを使用して定数を宣言します。"
    },
    {
      id: 2,
      question: "定数の命名規則として適切なものは？",
      options: [
        "camelCase",
        "PascalCase",
        "UPPER_SNAKE_CASE",
        "kebab-case"
      ],
      correctAnswer: 2,
      explanation: "定数名は慣習的に全て大文字でアンダースコア区切り（UPPER_SNAKE_CASE）で書きます。"
    },
    {
      id: 3,
      question: "final変数の特徴は？",
      options: [
        "値を変更できる",
        "一度代入すると値を変更できない",
        "自動的に初期化される",
        "メモリ使用量が少ない"
      ],
      correctAnswer: 1,
      explanation: "final変数は一度値が代入されると、その後値を変更することはできません。"
    },
    {
      id: 4,
      question: "final int x; x = 10; x = 20; の結果は？",
      options: [
        "x = 20",
        "x = 10",
        "コンパイルエラー",
        "実行時エラー"
      ],
      correctAnswer: 2,
      explanation: "final変数に2回目の代入を行うとコンパイルエラーが発生します。"
    },
    {
      id: 5,
      question: "定数を使用する利点は？",
      options: [
        "実行速度が向上する",
        "メモリ使用量が削減される",
        "コードの可読性と保守性が向上する",
        "ファイルサイズが小さくなる"
      ],
      correctAnswer: 2,
      explanation: "定数を使用することで、マジックナンバーを避け、コードの意味が明確になります。"
    }
  ],

  // レッスン13: 型変換
  13: [
    {
      id: 1,
      question: "暗黙の型変換（拡大変換）が可能なのは？",
      options: [
        "double → int",
        "int → double",
        "String → int",
        "boolean → int"
      ],
      correctAnswer: 1,
      explanation: "小さなデータ型から大きなデータ型への変換は暗黙的に行われます。"
    },
    {
      id: 2,
      question: "明示的な型変換（キャスト）の正しい書き方は？",
      options: [
        "int x = double(3.14);",
        "int x = (int)3.14;",
        "int x = 3.14 as int;",
        "int x = convert(3.14, int);"
      ],
      correctAnswer: 1,
      explanation: "キャストは (型名) の形式で行います。"
    },
    {
      id: 3,
      question: "int x = (int)3.9; の結果は？",
      options: [
        "3",
        "4",
        "3.9",
        "エラー"
      ],
      correctAnswer: 0,
      explanation: "intへのキャストでは小数部分が切り捨てられます（四捨五入ではありません）。"
    },
    {
      id: 4,
      question: "文字列を数値に変換するメソッドは？",
      options: [
        "String.toInt()",
        "Integer.parseInt()",
        "(int)\"123\"",
        "convert(\"123\")"
      ],
      correctAnswer: 1,
      explanation: "Integer.parseInt() メソッドを使用して文字列を整数に変換します。"
    },
    {
      id: 5,
      question: "byte b = 200; の結果は？",
      options: [
        "200",
        "-56",
        "コンパイルエラー",
        "実行時エラー"
      ],
      correctAnswer: 2,
      explanation: "byteの範囲は-128〜127なので、200は範囲外でコンパイルエラーになります。"
    }
  ],

  // レッスン14: 変数の命名規則
  14: [
    {
      id: 1,
      question: "Java変数名の命名規則として正しいものは？",
      options: [
        "数字で始めることができる",
        "空白を含むことができる",
        "アンダースコアで始めることができる",
        "ハイフンを使用できる"
      ],
      correctAnswer: 2,
      explanation: "変数名はアンダースコア（_）で始めることができます。"
    },
    {
      id: 2,
      question: "camelCase記法の例として正しいものは？",
      options: [
        "user_name",
        "UserName",
        "userName",
        "username"
      ],
      correctAnswer: 2,
      explanation: "camelCaseは最初の単語は小文字、以降の単語の最初は大文字にします。"
    },
    {
      id: 3,
      question: "Javaの予約語として使用できないものは？",
      options: [
        "myClass",
        "class",
        "className",
        "classType"
      ],
      correctAnswer: 1,
      explanation: "class は Java の予約語なので変数名として使用できません。"
    },
    {
      id: 4,
      question: "変数名として適切でないものは？",
      options: [
        "age",
        "2ndPlace",
        "firstName",
        "_count"
      ],
      correctAnswer: 1,
      explanation: "変数名は数字で始めることができません。"
    },
    {
      id: 5,
      question: "boolean変数の命名で推奨されるのは？",
      options: [
        "flag",
        "isValid",
        "check",
        "status"
      ],
      correctAnswer: 1,
      explanation: "boolean変数は is や has で始まる命名が推奨されます。"
    }
  ],

  // レッスン15: 変数のスコープ
  15: [
    {
      id: 1,
      question: "ローカル変数のスコープは？",
      options: [
        "クラス全体",
        "メソッド全体",
        "宣言されたブロック内",
        "パッケージ全体"
      ],
      correctAnswer: 2,
      explanation: "ローカル変数は宣言されたブロック（{}）内でのみ有効です。"
    },
    {
      id: 2,
      question: "インスタンス変数の特徴は？",
      options: [
        "メソッド内でのみ使用可能",
        "static修飾子が必要",
        "オブジェクトごとに独立した値を持つ",
        "自動的にfinalになる"
      ],
      correctAnswer: 2,
      explanation: "インスタンス変数は各オブジェクトごとに独立した値を持ちます。"
    },
    {
      id: 3,
      question: "ブロック内で宣言された変数はいつまで有効？",
      options: [
        "プログラム終了まで",
        "メソッド終了まで",
        "ブロック終了まで",
        "クラス終了まで"
      ],
      correctAnswer: 2,
      explanation: "ブロック内の変数はそのブロックの終了時に破棄されます。"
    },
    {
      id: 4,
      question: "同名の変数を異なるスコープで宣言した場合は？",
      options: [
        "エラーになる",
        "最後の宣言が有効",
        "内側のスコープが優先される",
        "外側のスコープが優先される"
      ],
      correctAnswer: 2,
      explanation: "内側のスコープで宣言された変数が外側の同名変数を隠蔽します。"
    },
    {
      id: 5,
      question: "変数の初期化が必要なのは？",
      options: [
        "インスタンス変数",
        "クラス変数",
        "ローカル変数",
        "定数"
      ],
      correctAnswer: 2,
      explanation: "ローカル変数は使用前に明示的に初期化する必要があります。"
    }
  ],

  // レッスン16: 算術演算子
  16: [
    {
      id: 1,
      question: "7 % 3 の結果は？",
      options: [
        "2",
        "1",
        "2.33",
        "エラー"
      ],
      correctAnswer: 1,
      explanation: "% は剰余演算子で、7を3で割った余りは1です。"
    },
    {
      id: 2,
      question: "int a = 5; int b = 2; a / b の結果は？",
      options: [
        "2.5",
        "2",
        "3",
        "エラー"
      ],
      correctAnswer: 1,
      explanation: "整数同士の除算は整数になり、小数部分は切り捨てられます。"
    },
    {
      id: 3,
      question: "演算の優先順位が最も高いのは？",
      options: [
        "加算 (+)",
        "乗算 (*)",
        "減算 (-)",
        "除算 (/)"
      ],
      correctAnswer: 1,
      explanation: "乗算と除算は加算と減算より優先順位が高くなります。"
    },
    {
      id: 4,
      question: "2 + 3 * 4 の結果は？",
      options: [
        "20",
        "14",
        "11",
        "24"
      ],
      correctAnswer: 1,
      explanation: "乗算が先に計算されるため、3*4=12、2+12=14となります。"
    },
    {
      id: 5,
      question: "ゼロ除算が発生するとどうなる？",
      options: [
        "0が返される",
        "無限大が返される",
        "実行時エラーが発生",
        "コンパイルエラーが発生"
      ],
      correctAnswer: 2,
      explanation: "整数でのゼロ除算は実行時にArithmeticExceptionが発生します。"
    }
  ],

  // レッスン17: 代入演算子
  17: [
    {
      id: 1,
      question: "x += 5 と同じ意味は？",
      options: [
        "x = x - 5",
        "x = x + 5",
        "x = 5",
        "x = x * 5"
      ],
      correctAnswer: 1,
      explanation: "+= は複合代入演算子で、x = x + 5 と同じ意味です。"
    },
    {
      id: 2,
      question: "int x = 10; x *= 3; の後のxの値は？",
      options: [
        "13",
        "30",
        "7",
        "3"
      ],
      correctAnswer: 1,
      explanation: "x *= 3 は x = x * 3 と同じなので、10 * 3 = 30 になります。"
    },
    {
      id: 3,
      question: "x /= 2 の意味は？",
      options: [
        "x = x / 2",
        "x = 2 / x",
        "x = x + 2",
        "x = x - 2"
      ],
      correctAnswer: 0,
      explanation: "/= は x = x / 2 と同じ意味の複合代入演算子です。"
    },
    {
      id: 4,
      question: "複合代入演算子の利点は？",
      options: [
        "実行速度が向上する",
        "コードが短くなる",
        "メモリ使用量が削減される",
        "型変換が自動で行われる"
      ],
      correctAnswer: 1,
      explanation: "複合代入演算子を使用することでコードがより簡潔になります。"
    },
    {
      id: 5,
      question: "String s = \"Hello\"; s += \" World\"; の結果は？",
      options: [
        "Hello",
        "World", 
        "Hello World",
        "エラー"
      ],
      correctAnswer: 2,
      explanation: "文字列でも += 演算子を使用して連結が可能です。"
    }
  ],

  // レッスン18: 比較演算子
  18: [
    {
      id: 1,
      question: "5 == 5.0 の結果は？",
      options: [
        "true",
        "false",
        "エラー",
        "null"
      ],
      correctAnswer: 0,
      explanation: "数値の比較では型が違っても値が同じであれば true になります。"
    },
    {
      id: 2,
      question: "文字列の比較に適した方法は？",
      options: [
        "==",
        "!=",
        ".equals()",
        "="
      ],
      correctAnswer: 2,
      explanation: "文字列の内容比較には .equals() メソッドを使用します。"
    },
    {
      id: 3,
      question: "10 >= 10 の結果は？",
      options: [
        "true",
        "false",
        "エラー",
        "undefined"
      ],
      correctAnswer: 0,
      explanation: ">= は「以上」を意味するため、10は10以上なのでtrueです。"
    },
    {
      id: 4,
      question: "!= 演算子の意味は？",
      options: [
        "等しい",
        "等しくない",
        "より大きい",
        "より小さい"
      ],
      correctAnswer: 1,
      explanation: "!= は「等しくない」を表す比較演算子です。"
    },
    {
      id: 5,
      question: "null == null の結果は？",
      options: [
        "true",
        "false",
        "エラー",
        "undefined"
      ],
      correctAnswer: 0,
      explanation: "null同士の比較は true になります。"
    }
  ],

  // レッスン19: 論理演算子
  19: [
    {
      id: 1,
      question: "true && false の結果は？",
      options: [
        "true",
        "false",
        "エラー",
        "null"
      ],
      correctAnswer: 1,
      explanation: "AND演算子（&&）は両方がtrueの場合のみtrueになります。"
    },
    {
      id: 2,
      question: "true || false の結果は？",
      options: [
        "true",
        "false",
        "エラー",
        "null"
      ],
      correctAnswer: 0,
      explanation: "OR演算子（||）はどちらか一方がtrueであればtrueになります。"
    },
    {
      id: 3,
      question: "!true の結果は？",
      options: [
        "true",
        "false",
        "エラー",
        "null"
      ],
      correctAnswer: 1,
      explanation: "NOT演算子（!）はtrue/falseを反転させます。"
    },
    {
      id: 4,
      question: "短絡評価とは？",
      options: [
        "計算を高速化する技法",
        "条件の一部が確定したら残りを評価しない",
        "エラーを回避する方法",
        "メモリを節約する技法"
      ],
      correctAnswer: 1,
      explanation: "&&や||では左辺で結果が決まれば右辺は評価されません。"
    },
    {
      id: 5,
      question: "false && (1/0 == 0) の結果は？",
      options: [
        "true",
        "false",
        "エラー",
        "無限大"
      ],
      correctAnswer: 1,
      explanation: "短絡評価により、左辺がfalseなので右辺は評価されずfalseになります。"
    }
  ],

  // レッスン20: インクリメント・デクリメント
  20: [
    {
      id: 1,
      question: "int x = 5; x++; の後のxの値は？",
      options: [
        "4",
        "5",
        "6",
        "エラー"
      ],
      correctAnswer: 2,
      explanation: "x++ は後置インクリメントで、xの値を1増加させます。"
    },
    {
      id: 2,
      question: "前置と後置インクリメントの違いは？",
      options: [
        "速度が違う",
        "メモリ使用量が違う",
        "値を返すタイミングが違う",
        "違いはない"
      ],
      correctAnswer: 2,
      explanation: "前置（++x）は増加後の値、後置（x++）は増加前の値を返します。"
    },
    {
      id: 3,
      question: "int x = 5; int y = ++x; の後のyの値は？",
      options: [
        "5",
        "6",
        "4",
        "エラー"
      ],
      correctAnswer: 1,
      explanation: "前置インクリメント（++x）は先に増加してからその値を返します。"
    },
    {
      id: 4,
      question: "int x = 5; int y = x++; の後のyの値は？",
      options: [
        "5",
        "6",
        "4",
        "エラー"
      ],
      correctAnswer: 0,
      explanation: "後置インクリメント（x++）は元の値を返してから増加します。"
    },
    {
      id: 5,
      question: "デクリメント演算子は？",
      options: [
        "++",
        "--",
        "+-",
        "-+"
      ],
      correctAnswer: 1,
      explanation: "-- がデクリメント演算子で、値を1減少させます。"
    }
  ]
}

// レッスン21-30のクイズデータも追加
export const quizDataPart5: { [lessonId: number]: Quiz[] } = {
  // レッスン21-30のクイズデータ（条件分岐・ループ）
  21: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `if文に関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "if文の基本概念についての説明"
  })),
  
  22: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `if-else文に関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "if-else文の基本概念についての説明"
  })),
  
  23: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `else if文に関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "else if文の基本概念についての説明"
  })),
  
  24: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `switch文に関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "switch文の基本概念についての説明"
  })),
  
  25: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `三項演算子に関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "三項演算子の基本概念についての説明"
  })),
  
  26: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `for文に関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "for文の基本概念についての説明"
  })),
  
  27: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `while文に関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "while文の基本概念についての説明"
  })),
  
  28: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `do-while文に関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "do-while文の基本概念についての説明"
  })),
  
  29: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `break文に関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "break文の基本概念についての説明"
  })),
  
  30: Array.from({length: 5}, (_, i) => ({
    id: i + 1,
    question: `continue文に関する問題${i + 1}`,
    options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
    correctAnswer: i % 4,
    explanation: "continue文の基本概念についての説明"
  }))
}