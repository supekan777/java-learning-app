import { Lesson } from '@/types/lesson'

export const lessons: Lesson[] = [
  // === レベル1: 基本の出力（レッスン1-5） ===
  {
    id: 1,
    title: "Hello World",
    description: "Javaプログラムの基本構造を学ぼう",
    difficulty: "初級",
    duration: "5分",
    completed: false,
    locked: false,
    stars: 0,
    content: {
      explanation: `# Hello World プログラム\n\nJavaプログラミングの第一歩として、"Hello World"を出力するプログラムを作成しましょう。\n\n## Javaプログラムの基本構造\n\nJavaプログラムは以下の要素から構成されます：\n\n1. **クラス宣言**: \`public class ClassName\`\n2. **メインメソッド**: \`public static void main(String[] args)\`\n3. **実行文**: \`System.out.println("Hello World");\``,
      example: `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}`,
      initialCode: `public class HelloWorld {\n    public static void main(String[] args) {\n        // ここに"Hello World"を出力するコードを書いてください\n        \n    }\n}`,
      solution: `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}`,
      hints: ["System.out.println()を使用して文字列を出力します", "文字列は二重引用符(\")で囲みます", "文の最後にはセミコロン(;)を忘れずに付けましょう"]
    },
    exercises: [{
      id: 1,
      title: "基本的な出力",
      description: '"Hello World"を出力してください',
      initialCode: `public class HelloWorld {\n    public static void main(String[] args) {\n        // ここにコードを書いてください\n        \n    }\n}`,
      expectedOutput: "Hello World",
      solution: `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}`,
      hints: ["System.out.println()を使用します", "文字列は\"で囲みます"],
      testCases: [{input: "", expectedOutput: "Hello World", description: "Hello Worldを正確に出力する"}]
    }]
  },
  {
    id: 2,
    title: "複数行の出力",
    description: "複数の文字列を出力する方法を学ぼう",
    difficulty: "初級",
    duration: "5分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# 複数行の出力\n\n複数の文字列を出力するには、System.out.println()を複数回使用します。\n各println()は自動的に改行を追加します。`,
      example: `public class MultipleLines {\n    public static void main(String[] args) {\n        System.out.println("1行目");\n        System.out.println("2行目");\n        System.out.println("3行目");\n    }\n}`,
      initialCode: `public class MultipleLines {\n    public static void main(String[] args) {\n        // ここに3行分の出力を書いてください\n        \n    }\n}`,
      solution: `public class MultipleLines {\n    public static void main(String[] args) {\n        System.out.println("こんにちは");\n        System.out.println("私の名前は太郎です");\n        System.out.println("よろしくお願いします");\n    }\n}`,
      hints: ["println()を3回使用します", "各行は自動的に改行されます"]
    },
    exercises: [{
      id: 2,
      title: "自己紹介",
      description: '以下の3行を順番に出力してください：「こんにちは」「私の名前は太郎です」「よろしくお願いします」',
      initialCode: `public class SelfIntroduction {\n    public static void main(String[] args) {\n        // ここにコードを書いてください\n        \n    }\n}`,
      expectedOutput: "こんにちは\n私の名前は太郎です\nよろしくお願いします",
      solution: `public class SelfIntroduction {\n    public static void main(String[] args) {\n        System.out.println("こんにちは");\n        System.out.println("私の名前は太郎です");\n        System.out.println("よろしくお願いします");\n    }\n}`,
      hints: ["3つのprintln()を使用します"],
      testCases: [{input: "", expectedOutput: "こんにちは\n私の名前は太郎です\nよろしくお願いします", description: "3行の自己紹介を出力する"}]
    }]
  },
  {
    id: 3,
    title: "print と println の違い",
    description: "改行ありとなしの違いを理解しよう",
    difficulty: "初級",
    duration: "5分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# print と println の違い\n\n- **println()**: 出力後に自動的に改行\n- **print()**: 改行なし、連続して出力される`,
      example: `public class PrintExample {\n    public static void main(String[] args) {\n        System.out.print("Hello");\n        System.out.print(" ");\n        System.out.print("World");\n        System.out.println("!");\n        System.out.println("次の行");\n    }\n}`,
      initialCode: `public class PrintExample {\n    public static void main(String[] args) {\n        // print()とprintln()を使い分けてください\n        \n    }\n}`,
      solution: `public class PrintExample {\n    public static void main(String[] args) {\n        System.out.print("Java");\n        System.out.print("は");\n        System.out.println("楽しい");\n        System.out.println("プログラミング言語です");\n    }\n}`,
      hints: ["print()は改行なし", "println()は改行あり"]
    },
    exercises: [{
      id: 3,
      title: "文字を連結",
      description: 'print()を使って"Javaは楽しい"を一行で、println()で"プログラミング言語です"を次の行に出力してください',
      initialCode: `public class PrintExercise {\n    public static void main(String[] args) {\n        // ここにコードを書いてください\n        \n    }\n}`,
      expectedOutput: "Javaは楽しい\nプログラミング言語です",
      solution: `public class PrintExercise {\n    public static void main(String[] args) {\n        System.out.print("Java");\n        System.out.print("は");\n        System.out.println("楽しい");\n        System.out.println("プログラミング言語です");\n    }\n}`,
      hints: ["最初の3つはprint()を使用", "最後の2つはprintln()を使用"],
      testCases: [{input: "", expectedOutput: "Javaは楽しい\nプログラミング言語です", description: "printとprintlnを正しく使い分ける"}]
    }]
  },
  {
    id: 4,
    title: "エスケープシーケンス",
    description: "特殊文字の出力方法を学ぼう",
    difficulty: "初級",
    duration: "7分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# エスケープシーケンス\n\n特殊文字を出力するには、バックスラッシュ(\\)を使用します。\n\n- **\\n**: 改行\n- **\\t**: タブ\n- **\\\"**: ダブルクォート\n- **\\\\**: バックスラッシュ`,
      example: `public class EscapeSequence {\n    public static void main(String[] args) {\n        System.out.println("1行目\\n2行目");\n        System.out.println("名前:\\t太郎");\n        System.out.println("彼は\\"こんにちは\\"と言った");\n    }\n}`,
      initialCode: `public class EscapeSequence {\n    public static void main(String[] args) {\n        // エスケープシーケンスを使って出力してください\n        \n    }\n}`,
      solution: `public class EscapeSequence {\n    public static void main(String[] args) {\n        System.out.println("Hello\\nWorld");\n        System.out.println("名前:\\t田中太郎");\n        System.out.println("\\"Java\\"は素晴らしい");\n    }\n}`,
      hints: ["\\nで改行", "\\tでタブ", "\\\"でダブルクォート"]
    },
    exercises: [{
      id: 4,
      title: "特殊文字の出力",
      description: 'Hello\\nWorld、名前:\\t田中太郎、"Java"は素晴らしい を出力してください',
      initialCode: `public class EscapeExercise {\n    public static void main(String[] args) {\n        // ここにコードを書いてください\n        \n    }\n}`,
      expectedOutput: "Hello\nWorld\n名前:\t田中太郎\n\"Java\"は素晴らしい",
      solution: `public class EscapeExercise {\n    public static void main(String[] args) {\n        System.out.println("Hello\\nWorld");\n        System.out.println("名前:\\t田中太郎");\n        System.out.println("\\"Java\\"は素晴らしい");\n    }\n}`,
      hints: ["\\nで改行を表現", "\\tでタブを表現", "\\\"でダブルクォートを表現"],
      testCases: [{input: "", expectedOutput: "Hello\nWorld\n名前:\t田中太郎\n\"Java\"は素晴らしい", description: "エスケープシーケンスを正しく使用する"}]
    }]
  },
  {
    id: 5,
    title: "コメントの書き方",
    description: "コードにコメントを追加する方法を学ぼう",
    difficulty: "初級",
    duration: "5分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# コメントの書き方\n\nコメントはコードの説明を書くために使用し、プログラムの実行には影響しません。\n\n- **//** : 一行コメント\n- **/* */** : 複数行コメント`,
      example: `public class Comments {\n    public static void main(String[] args) {\n        // これは一行コメントです\n        System.out.println("Hello World");\n        \n        /*\n         * これは複数行コメントです\n         * 複数行にわたってコメントを書けます\n         */\n        System.out.println("Java学習中");\n    }\n}`,
      initialCode: `public class Comments {\n    public static void main(String[] args) {\n        // ここにコメント付きのコードを書いてください\n        \n    }\n}`,
      solution: `public class Comments {\n    public static void main(String[] args) {\n        // 挨拶を出力\n        System.out.println("おはようございます");\n        \n        /* 今日の予定を出力 */\n        System.out.println("今日はJavaの勉強をします");\n    }\n}`,
      hints: ["// で一行コメント", "/* */ で複数行コメント"]
    },
    exercises: [{
      id: 5,
      title: "コメント付きプログラム",
      description: 'コメントを含めて "おはようございます" と "今日はJavaの勉強をします" を出力してください',
      initialCode: `public class CommentExercise {\n    public static void main(String[] args) {\n        // ここにコードを書いてください\n        \n    }\n}`,
      expectedOutput: "おはようございます\n今日はJavaの勉強をします",
      solution: `public class CommentExercise {\n    public static void main(String[] args) {\n        // 挨拶を出力\n        System.out.println("おはようございます");\n        \n        /* 今日の予定を出力 */\n        System.out.println("今日はJavaの勉強をします");\n    }\n}`,
      hints: ["コメントは実行されません", "適切な説明を追加しましょう"],
      testCases: [{input: "", expectedOutput: "おはようございます\n今日はJavaの勉強をします", description: "コメント付きで正しく出力する"}]
    }]
  },

  // === レベル2: 変数の基本（レッスン6-15） ===
  {
    id: 6,
    title: "変数と型",
    description: "int, String, booleanなど基本的なデータ型",
    difficulty: "初級",
    duration: "10分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# 変数と基本データ型\n\nプログラミングにおいて、データを保存するために**変数**を使用します。\nJavaは**静的型付け言語**なので、変数を使用する前に型を宣言する必要があります。\n\n## 基本データ型\n\n### 整数型\n- \`int\`: 32ビット整数\n- \`long\`: 64ビット整数\n\n### 浮動小数点型\n- \`double\`: 64ビット浮動小数点数\n- \`float\`: 32ビット浮動小数点数\n\n### その他の型\n- \`boolean\`: true または false\n- \`char\`: 1文字\n- \`String\`: 文字列`,
      example: `public class Variables {\n    public static void main(String[] args) {\n        int age = 25;\n        String name = "太郎";\n        boolean isStudent = true;\n        double height = 170.5;\n        \n        System.out.println("名前: " + name);\n        System.out.println("年齢: " + age);\n        System.out.println("身長: " + height + "cm");\n        System.out.println("学生？: " + isStudent);\n    }\n}`,
      initialCode: `public class Variables {\n    public static void main(String[] args) {\n        // 変数を宣言して値を代入してください\n        \n        \n        // 変数を出力してください\n        \n    }\n}`,
      solution: `public class Variables {\n    public static void main(String[] args) {\n        int age = 20;\n        String name = "田中";\n        boolean isStudent = true;\n        \n        System.out.println("名前: " + name);\n        System.out.println("年齢: " + age);\n        System.out.println("学生？: " + isStudent);\n    }\n}`,
      hints: ["int型は整数を格納します", "String型は文字列を格納します", "boolean型はtrueまたはfalseを格納します", "文字列の連結には+演算子を使用します"]
    },
    exercises: [{
      id: 6,
      title: "変数の宣言と出力",
      description: "age(20), name(\"太郎\"), height(175.8)の変数を作成し出力してください",
      initialCode: `public class VariableExercise {\n    public static void main(String[] args) {\n        // ここに変数を宣言してください\n        \n        \n        // ここに出力してください\n        \n    }\n}`,
      expectedOutput: "年齢: 20\n名前: 太郎\n身長: 175.8",
      solution: `public class VariableExercise {\n    public static void main(String[] args) {\n        int age = 20;\n        String name = "太郎";\n        double height = 175.8;\n        \n        System.out.println("年齢: " + age);\n        System.out.println("名前: " + name);\n        System.out.println("身長: " + height);\n    }\n}`,
      hints: ["int age = 20; で整数型変数を宣言", "String name = \"太郎\"; で文字列型変数を宣言", "double height = 175.8; で浮動小数点型変数を宣言"],
      testCases: [{input: "", expectedOutput: "年齢: 20\n名前: 太郎\n身長: 175.8", description: "変数を正しく宣言し出力する"}]
    }]
  },
  {
    id: 7,
    title: "整数型変数",
    description: "int型とlong型の使い方を学ぼう",
    difficulty: "初級",
    duration: "8分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# 整数型変数\n\n整数を格納する型には主に以下があります：\n\n- **int**: -2,147,483,648 ～ 2,147,483,647\n- **long**: より大きな範囲の整数\n\nlong型を使用する場合は、値の後にLを付けます。`,
      example: `public class IntegerTypes {\n    public static void main(String[] args) {\n        int smallNumber = 100;\n        int maxInt = 2147483647;\n        long bigNumber = 3000000000L;\n        \n        System.out.println("小さな数: " + smallNumber);\n        System.out.println("intの最大値: " + maxInt);\n        System.out.println("大きな数: " + bigNumber);\n    }\n}`,
      initialCode: `public class IntegerTypes {\n    public static void main(String[] args) {\n        // 整数型変数を宣言してください\n        \n    }\n}`,
      solution: `public class IntegerTypes {\n    public static void main(String[] args) {\n        int score = 85;\n        long population = 125000000L;\n        \n        System.out.println("スコア: " + score);\n        System.out.println("人口: " + population);\n    }\n}`,
      hints: ["int型は一般的な整数に使用", "long型は大きな数値に使用", "long型の値にはLを付ける"]
    },
    exercises: [{
      id: 7,
      title: "整数型変数の練習",
      description: 'score(85), population(125000000L)を宣言し出力してください',
      initialCode: `public class IntegerExercise {\n    public static void main(String[] args) {\n        // ここに変数を宣言してください\n        \n    }\n}`,
      expectedOutput: "スコア: 85\n人口: 125000000",
      solution: `public class IntegerExercise {\n    public static void main(String[] args) {\n        int score = 85;\n        long population = 125000000L;\n        \n        System.out.println("スコア: " + score);\n        System.out.println("人口: " + population);\n    }\n}`,
      hints: ["int score = 85;", "long population = 125000000L;"],
      testCases: [{input: "", expectedOutput: "スコア: 85\n人口: 125000000", description: "整数型変数を正しく使用する"}]
    }]
  },
  {
    id: 8,
    title: "浮動小数点型変数",
    description: "double型とfloat型で小数を扱おう",
    difficulty: "初級",
    duration: "8分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# 浮動小数点型変数\n\n小数を格納する型には以下があります：\n\n- **double**: 倍精度浮動小数点数（推奨）\n- **float**: 単精度浮動小数点数\n\nfloat型を使用する場合は、値の後にfを付けます。`,
      example: `public class FloatingPoint {\n    public static void main(String[] args) {\n        double price = 299.99;\n        float weight = 65.5f;\n        double pi = 3.14159;\n        \n        System.out.println("価格: " + price + "円");\n        System.out.println("体重: " + weight + "kg");\n        System.out.println("円周率: " + pi);\n    }\n}`,
      initialCode: `public class FloatingPoint {\n    public static void main(String[] args) {\n        // 浮動小数点型変数を宣言してください\n        \n    }\n}`,
      solution: `public class FloatingPoint {\n    public static void main(String[] args) {\n        double temperature = 36.5;\n        float speed = 60.0f;\n        \n        System.out.println("体温: " + temperature + "度");\n        System.out.println("速度: " + speed + "km/h");\n    }\n}`,
      hints: ["double型が一般的", "float型にはfを付ける", "小数点以下の数値を扱える"]
    },
    exercises: [{
      id: 8,
      title: "浮動小数点型の練習",
      description: 'temperature(36.5), speed(60.0f)を宣言し出力してください',
      initialCode: `public class FloatExercise {\n    public static void main(String[] args) {\n        // ここに変数を宣言してください\n        \n    }\n}`,
      expectedOutput: "体温: 36.5度\n速度: 60.0km/h",
      solution: `public class FloatExercise {\n    public static void main(String[] args) {\n        double temperature = 36.5;\n        float speed = 60.0f;\n        \n        System.out.println("体温: " + temperature + "度");\n        System.out.println("速度: " + speed + "km/h");\n    }\n}`,
      hints: ["double temperature = 36.5;", "float speed = 60.0f;"],
      testCases: [{input: "", expectedOutput: "体温: 36.5度\n速度: 60.0km/h", description: "浮動小数点型変数を正しく使用する"}]
    }]
  },
  {
    id: 9,
    title: "boolean型変数",
    description: "真偽値（true/false）を扱おう",
    difficulty: "初級",
    duration: "6分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# boolean型変数\n\nboolean型は真偽値（true または false）を格納します。\n条件分岐やループでよく使用される重要な型です。`,
      example: `public class BooleanType {\n    public static void main(String[] args) {\n        boolean isRaining = true;\n        boolean isSunny = false;\n        boolean hasHomework = true;\n        \n        System.out.println("雨が降っている: " + isRaining);\n        System.out.println("晴れている: " + isSunny);\n        System.out.println("宿題がある: " + hasHomework);\n    }\n}`,
      initialCode: `public class BooleanType {\n    public static void main(String[] args) {\n        // boolean型変数を宣言してください\n        \n    }\n}`,
      solution: `public class BooleanType {\n    public static void main(String[] args) {\n        boolean isStudent = true;\n        boolean isWorking = false;\n        \n        System.out.println("学生である: " + isStudent);\n        System.out.println("働いている: " + isWorking);\n    }\n}`,
      hints: ["true または false のみ", "条件を表すのに便利", "is で始まる変数名が一般的"]
    },
    exercises: [{
      id: 9,
      title: "boolean型の練習",
      description: 'isStudent(true), isWorking(false)を宣言し出力してください',
      initialCode: `public class BooleanExercise {\n    public static void main(String[] args) {\n        // ここに変数を宣言してください\n        \n    }\n}`,
      expectedOutput: "学生である: true\n働いている: false",
      solution: `public class BooleanExercise {\n    public static void main(String[] args) {\n        boolean isStudent = true;\n        boolean isWorking = false;\n        \n        System.out.println("学生である: " + isStudent);\n        System.out.println("働いている: " + isWorking);\n    }\n}`,
      hints: ["boolean isStudent = true;", "boolean isWorking = false;"],
      testCases: [{input: "", expectedOutput: "学生である: true\n働いている: false", description: "boolean型変数を正しく使用する"}]
    }]
  },
  {
    id: 10,
    title: "char型変数",
    description: "1文字を扱うchar型を学ぼう",
    difficulty: "初級",
    duration: "6分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# char型変数\n\nchar型は1文字を格納する型です。\n文字はシングルクォート（'）で囲みます。`,
      example: `public class CharType {\n    public static void main(String[] args) {\n        char grade = 'A';\n        char initial = 'T';\n        char symbol = '@';\n        \n        System.out.println("成績: " + grade);\n        System.out.println("イニシャル: " + initial);\n        System.out.println("記号: " + symbol);\n    }\n}`,
      initialCode: `public class CharType {\n    public static void main(String[] args) {\n        // char型変数を宣言してください\n        \n    }\n}`,
      solution: `public class CharType {\n    public static void main(String[] args) {\n        char bloodType = 'O';\n        char firstLetter = 'J';\n        \n        System.out.println("血液型: " + bloodType);\n        System.out.println("頭文字: " + firstLetter);\n    }\n}`,
      hints: ["シングルクォートで囲む", "1文字のみ格納可能", "文字、数字、記号が使用可能"]
    },
    exercises: [{
      id: 10,
      title: "char型の練習",
      description: "bloodType('O'), firstLetter('J')を宣言し出力してください",
      initialCode: `public class CharExercise {\n    public static void main(String[] args) {\n        // ここに変数を宣言してください\n        \n    }\n}`,
      expectedOutput: "血液型: O\n頭文字: J",
      solution: `public class CharExercise {\n    public static void main(String[] args) {\n        char bloodType = 'O';\n        char firstLetter = 'J';\n        \n        System.out.println("血液型: " + bloodType);\n        System.out.println("頭文字: " + firstLetter);\n    }\n}`,
      hints: ["char bloodType = 'O';", "char firstLetter = 'J';"],
      testCases: [{input: "", expectedOutput: "血液型: O\n頭文字: J", description: "char型変数を正しく使用する"}]
    }]
  },

  // レッスン11-15: 変数の応用
  {
    id: 11,
    title: "変数の再代入",
    description: "変数の値を変更する方法を学ぼう",
    difficulty: "初級",
    duration: "6分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# 変数の再代入\n\n一度宣言した変数は、後から値を変更することができます。\n型は変更できませんが、同じ型の新しい値を代入できます。`,
      example: `public class VariableReassignment {\n    public static void main(String[] args) {\n        int count = 5;\n        System.out.println("最初の値: " + count);\n        \n        count = 10;\n        System.out.println("変更後の値: " + count);\n    }\n}`,
      initialCode: `public class VariableReassignment {\n    public static void main(String[] args) {\n        // 変数を宣言し、値を変更してください\n        \n    }\n}`,
      solution: `public class VariableReassignment {\n    public static void main(String[] args) {\n        String message = "Hello";\n        System.out.println(message);\n        \n        message = "Goodbye";\n        System.out.println(message);\n    }\n}`,
      hints: ["変数は再宣言不要", "同じ型の値のみ代入可能"]
    },
    exercises: [{
      id: 11,
      title: "変数の再代入練習",
      description: 'messageを"Hello"で初期化し、"Goodbye"に変更して両方出力してください',
      initialCode: `public class ReassignmentExercise {\n    public static void main(String[] args) {\n        // ここにコードを書いてください\n        \n    }\n}`,
      expectedOutput: "Hello\nGoodbye",
      solution: `public class ReassignmentExercise {\n    public static void main(String[] args) {\n        String message = "Hello";\n        System.out.println(message);\n        \n        message = "Goodbye";\n        System.out.println(message);\n    }\n}`,
      hints: ["String message = \"Hello\";", "message = \"Goodbye\";"],
      testCases: [{input: "", expectedOutput: "Hello\nGoodbye", description: "変数の再代入を正しく行う"}]
    }]
  },
  {
    id: 12,
    title: "定数（final変数）",
    description: "変更できない値を定義するfinal修飾子を学ぼう",
    difficulty: "初級",
    duration: "7分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# 定数（final変数）\n\nfinal修飾子を使用すると、一度初期化した後は値を変更できない定数を作成できます。\n定数名は通常大文字で書きます。`,
      example: `public class Constants {\n    public static void main(String[] args) {\n        final double PI = 3.14159;\n        final int MAX_SCORE = 100;\n        \n        System.out.println(\"円周率: \" + PI);\n        System.out.println(\"最高得点: \" + MAX_SCORE);\n    }\n}`,
      initialCode: `public class Constants {\n    public static void main(String[] args) {\n        // final修飾子を使って定数を定義してください\n        \n    }\n}`,
      solution: `public class Constants {\n    public static void main(String[] args) {\n        final String SCHOOL_NAME = \"Java高校\";\n        final int CLASS_SIZE = 30;\n        \n        System.out.println(\"学校名: \" + SCHOOL_NAME);\n        System.out.println(\"クラス人数: \" + CLASS_SIZE);\n    }\n}`,
      hints: ["final修飾子を使用", "定数名は大文字", "初期化後は変更不可"]
    },
    exercises: [{
      id: 12,
      title: "定数の練習",
      description: 'SCHOOL_NAME("Java高校"), CLASS_SIZE(30)の定数を作成し出力してください',
      initialCode: `public class ConstantExercise {\n    public static void main(String[] args) {\n        // ここに定数を定義してください\n        \n    }\n}`,
      expectedOutput: "学校名: Java高校\nクラス人数: 30",
      solution: `public class ConstantExercise {\n    public static void main(String[] args) {\n        final String SCHOOL_NAME = \"Java高校\";\n        final int CLASS_SIZE = 30;\n        \n        System.out.println(\"学校名: \" + SCHOOL_NAME);\n        System.out.println(\"クラス人数: \" + CLASS_SIZE);\n    }\n}`,
      hints: ["final String SCHOOL_NAME = \"Java高校\";", "final int CLASS_SIZE = 30;"],
      testCases: [{input: "", expectedOutput: "学校名: Java高校\nクラス人数: 30", description: "定数を正しく使用する"}]
    }]
  },
  {
    id: 13,
    title: "文字列の連結",
    description: "+演算子を使った文字列の結合方法を学ぼう",
    difficulty: "初級",
    duration: "8分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# 文字列の連結\n\n+演算子を使って文字列を結合できます。\n文字列と他の型を連結すると、自動的に文字列に変換されます。`,
      example: `public class StringConcatenation {\n    public static void main(String[] args) {\n        String firstName = \"太郎\";\n        String lastName = \"田中\";\n        int age = 20;\n        \n        String fullName = lastName + firstName;\n        String introduction = \"私は\" + fullName + \"、\" + age + \"歳です\";\n        \n        System.out.println(fullName);\n        System.out.println(introduction);\n    }\n}`,
      initialCode: `public class StringConcatenation {\n    public static void main(String[] args) {\n        // 文字列を連結してください\n        \n    }\n}`,
      solution: `public class StringConcatenation {\n    public static void main(String[] args) {\n        String city = \"東京\";\n        String weather = \"晴れ\";\n        int temperature = 25;\n        \n        String report = city + \"は\" + weather + \"、気温\" + temperature + \"度です\";\n        System.out.println(report);\n    }\n}`,
      hints: ["+ で文字列を連結", "数値も自動的に文字列に変換"]
    },
    exercises: [{
      id: 13,
      title: "天気予報の作成",
      description: 'city("東京"), weather("晴れ"), temperature(25)を使って"東京は晴れ、気温25度です"を出力してください',
      initialCode: `public class WeatherReport {\n    public static void main(String[] args) {\n        // ここにコードを書いてください\n        \n    }\n}`,
      expectedOutput: "東京は晴れ、気温25度です",
      solution: `public class WeatherReport {\n    public static void main(String[] args) {\n        String city = \"東京\";\n        String weather = \"晴れ\";\n        int temperature = 25;\n        \n        String report = city + \"は\" + weather + \"、気温\" + temperature + \"度です\";\n        System.out.println(report);\n    }\n}`,
      hints: ["変数を+演算子で連結", "文字列リテラルも含める"],
      testCases: [{input: "", expectedOutput: "東京は晴れ、気温25度です", description: "文字列連結を正しく行う"}]
    }]
  },
  {
    id: 14,
    title: "変数のスコープ",
    description: "変数が使用できる範囲について学ぼう",
    difficulty: "初級",
    duration: "10分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# 変数のスコープ\n\n変数には使用できる範囲（スコープ）があります。\n基本的に、変数は宣言された{}ブロック内でのみ使用可能です。`,
      example: `public class VariableScope {\n    public static void main(String[] args) {\n        int globalVar = 10;\n        System.out.println(\"メインスコープ: \" + globalVar);\n        \n        {\n            int localVar = 20;\n            System.out.println(\"ブロックスコープ: \" + localVar);\n            System.out.println(\"グローバルもアクセス可: \" + globalVar);\n        }\n        \n        // localVarはここでは使用不可\n        System.out.println(\"メインスコープに戻る: \" + globalVar);\n    }\n}`,
      initialCode: `public class VariableScope {\n    public static void main(String[] args) {\n        // スコープを意識して変数を使用してください\n        \n    }\n}`,
      solution: `public class VariableScope {\n    public static void main(String[] args) {\n        String mainMessage = \"メインスコープ\";\n        System.out.println(mainMessage);\n        \n        {\n            String blockMessage = \"ブロックスコープ\";\n            System.out.println(blockMessage);\n        }\n        \n        System.out.println(mainMessage);\n    }\n}`,
      hints: ["{}がスコープを決める", "内側から外側の変数は見える", "外側から内側の変数は見えない"]
    },
    exercises: [{
      id: 14,
      title: "スコープの理解",
      description: 'mainMessage("メインスコープ")を出力し、ブロック内でblockMessage("ブロックスコープ")を出力、再度mainMessageを出力してください',
      initialCode: `public class ScopeExercise {\n    public static void main(String[] args) {\n        // ここにコードを書いてください\n        \n    }\n}`,
      expectedOutput: "メインスコープ\nブロックスコープ\nメインスコープ",
      solution: `public class ScopeExercise {\n    public static void main(String[] args) {\n        String mainMessage = \"メインスコープ\";\n        System.out.println(mainMessage);\n        \n        {\n            String blockMessage = \"ブロックスコープ\";\n            System.out.println(blockMessage);\n        }\n        \n        System.out.println(mainMessage);\n    }\n}`,
      hints: ["{}でブロックを作成", "ブロック外の変数は使用可能"],
      testCases: [{input: "", expectedOutput: "メインスコープ\nブロックスコープ\nメインスコープ", description: "スコープを正しく理解する"}]
    }]
  },
  {
    id: 15,
    title: "変数の命名規則",
    description: "適切な変数名の付け方を学ぼう",
    difficulty: "初級",
    duration: "8分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# 変数の命名規則\n\nJavaの変数命名には以下の規則があります：\n\n## 必須ルール\n- 文字、数字、_、$のみ使用可能\n- 数字で始めることはできない\n- 予約語は使用不可\n\n## 推奨ルール\n- camelCase（キャメルケース）を使用\n- 意味のある名前を付ける\n- 定数は大文字とアンダースコア`,
      example: `public class NamingConvention {\n    public static void main(String[] args) {\n        // 良い例\n        int studentAge = 20;\n        String firstName = \"太郎\";\n        boolean isActive = true;\n        final int MAX_RETRY_COUNT = 3;\n        \n        // 悪い例（動作するが非推奨）\n        // int a = 20;\n        // String s = \"太郎\";\n        \n        System.out.println(\"学生の年齢: \" + studentAge);\n        System.out.println(\"名前: \" + firstName);\n    }\n}`,
      initialCode: `public class NamingConvention {\n    public static void main(String[] args) {\n        // 適切な変数名を使って変数を宣言してください\n        \n    }\n}`,
      solution: `public class NamingConvention {\n    public static void main(String[] args) {\n        String bookTitle = \"Javaプログラミング\";\n        int pageCount = 300;\n        boolean isAvailable = true;\n        \n        System.out.println(\"本のタイトル: \" + bookTitle);\n        System.out.println(\"ページ数: \" + pageCount);\n        System.out.println(\"利用可能: \" + isAvailable);\n    }\n}`,
      hints: ["camelCaseを使用", "意味のある名前", "boolean型はisで始める"]
    },
    exercises: [{
      id: 15,
      title: "適切な変数名",
      description: 'bookTitle("Javaプログラミング"), pageCount(300), isAvailable(true)の変数を作成し出力してください',
      initialCode: `public class NamingExercise {\n    public static void main(String[] args) {\n        // ここに適切な変数名で変数を宣言してください\n        \n    }\n}`,
      expectedOutput: "本のタイトル: Javaプログラミング\nページ数: 300\n利用可能: true",
      solution: `public class NamingExercise {\n    public static void main(String[] args) {\n        String bookTitle = \"Javaプログラミング\";\n        int pageCount = 300;\n        boolean isAvailable = true;\n        \n        System.out.println(\"本のタイトル: \" + bookTitle);\n        System.out.println(\"ページ数: \" + pageCount);\n        System.out.println(\"利用可能: \" + isAvailable);\n    }\n}`,
      hints: ["camelCaseで命名", "意味が分かる名前を使用"],
      testCases: [{input: "", expectedOutput: "本のタイトル: Javaプログラミング\nページ数: 300\n利用可能: true", description: "適切な変数命名を行う"}]
    }]
  },

  // === レベル3: 演算子（レッスン16-20） ===
  {
    id: 16,
    title: "算術演算子",
    description: "四則演算（+、-、*、/、%）を学ぼう",
    difficulty: "初級",
    duration: "8分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# 算術演算子\n\nJavaで数値の計算を行う演算子について学習します。\n\n## 基本的な算術演算子\n- **+**: 加算\n- **-**: 減算\n- **\***: 乗算\n- **/**: 除算\n- **%**: 剰余（余り）`,
      example: `public class ArithmeticOperators {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 3;\n        \n        System.out.println(a + " + " + b + " = " + (a + b));\n        System.out.println(a + " - " + b + " = " + (a - b));\n        System.out.println(a + " * " + b + " = " + (a * b));\n        System.out.println(a + " / " + b + " = " + (a / b));\n        System.out.println(a + " % " + b + " = " + (a % b));\n    }\n}`,
      initialCode: `public class ArithmeticOperators {\n    public static void main(String[] args) {\n        // 算術演算子を使って計算してください\n        \n    }\n}`,
      solution: `public class ArithmeticOperators {\n    public static void main(String[] args) {\n        int x = 15;\n        int y = 4;\n        \n        int sum = x + y;\n        int difference = x - y;\n        int product = x * y;\n        int quotient = x / y;\n        int remainder = x % y;\n        \n        System.out.println("和: " + sum);\n        System.out.println("差: " + difference);\n        System.out.println("積: " + product);\n        System.out.println("商: " + quotient);\n        System.out.println("余り: " + remainder);\n    }\n}`,
      hints: ["括弧を使って計算の優先順位を明確に", "整数同士の割り算は小数点以下切り捨て", "%演算子は余りを求める"]
    },
    exercises: [{
      id: 16,
      title: "基本計算",
      description: 'x(15)とy(4)の和、差、積、商、余りを計算して出力してください',
      initialCode: `public class CalculationExercise {\n    public static void main(String[] args) {\n        // ここに計算を書いてください\n        \n    }\n}`,
      expectedOutput: "和: 19\n差: 11\n積: 60\n商: 3\n余り: 3",
      solution: `public class CalculationExercise {\n    public static void main(String[] args) {\n        int x = 15;\n        int y = 4;\n        \n        System.out.println("和: " + (x + y));\n        System.out.println("差: " + (x - y));\n        System.out.println("積: " + (x * y));\n        System.out.println("商: " + (x / y));\n        System.out.println("余り: " + (x % y));\n    }\n}`,
      hints: ["int x = 15; int y = 4;", "各演算子を使って計算"],
      testCases: [{input: "", expectedOutput: "和: 19\n差: 11\n積: 60\n商: 3\n余り: 3", description: "算術演算子を正しく使用する"}]
    }]
  },
  {
    id: 17,
    title: "比較演算子",
    description: "値を比較する演算子（==、!=、<、>等）を学ぼう",
    difficulty: "初級",
    duration: "8分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# 比較演算子\n\n値を比較してboolean（true/false）を返す演算子です。\n\n- **==**: 等しい\n- **!=**: 等しくない\n- **<**: より小さい\n- **>**: より大きい\n- **<=**: 以下\n- **>=**: 以上`,
      example: `public class ComparisonOperators {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 5;\n        \n        System.out.println(a + " == " + b + ": " + (a == b));\n        System.out.println(a + " != " + b + ": " + (a != b));\n        System.out.println(a + " > " + b + ": " + (a > b));\n        System.out.println(a + " < " + b + ": " + (a < b));\n        System.out.println(a + " >= " + b + ": " + (a >= b));\n        System.out.println(a + " <= " + b + ": " + (a <= b));\n    }\n}`,
      initialCode: `public class ComparisonOperators {\n    public static void main(String[] args) {\n        // 比較演算子を使って比較してください\n        \n    }\n}`,
      solution: `public class ComparisonOperators {\n    public static void main(String[] args) {\n        int score = 85;\n        int passingGrade = 60;\n        \n        boolean isPassing = score >= passingGrade;\n        boolean isPerfect = score == 100;\n        boolean needsImprovement = score < 50;\n        \n        System.out.println("合格: " + isPassing);\n        System.out.println("満点: " + isPerfect);\n        System.out.println("要改善: " + needsImprovement);\n    }\n}`,
      hints: ["比較結果はboolean型", "結果をboolean変数に保存できる"]
    },
    exercises: [{
      id: 17,
      title: "成績判定",
      description: 'score(85), passingGrade(60)を使って、合格判定、満点判定、要改善判定を出力してください',
      initialCode: `public class GradeCheck {\n    public static void main(String[] args) {\n        // ここに比較処理を書いてください\n        \n    }\n}`,
      expectedOutput: "合格: true\n満点: false\n要改善: false",
      solution: `public class GradeCheck {\n    public static void main(String[] args) {\n        int score = 85;\n        int passingGrade = 60;\n        \n        boolean isPassing = score >= passingGrade;\n        boolean isPerfect = score == 100;\n        boolean needsImprovement = score < 50;\n        \n        System.out.println("合格: " + isPassing);\n        System.out.println("満点: " + isPerfect);\n        System.out.println("要改善: " + needsImprovement);\n    }\n}`,
      hints: [">=で以上の比較", "==で等価の比較", "<で未満の比較"],
      testCases: [{input: "", expectedOutput: "合格: true\n満点: false\n要改善: false", description: "比較演算子を正しく使用する"}]
    }]
  },
  {
    id: 18,
    title: "論理演算子",
    description: "AND、OR、NOTの論理演算子を学ぼう",
    difficulty: "初級",
    duration: "10分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# 論理演算子\n\nboolean値を組み合わせる演算子です。\n\n- **&&**: AND（両方がtrueの時true）\n- **||**: OR（どちらかがtrueの時true）\n- **!**: NOT（trueをfalse、falseをtrueに）`,
      example: `public class LogicalOperators {\n    public static void main(String[] args) {\n        boolean isRaining = true;\n        boolean hasUmbrella = false;\n        int age = 20;\n        \n        boolean canGoOut = !isRaining || hasUmbrella;\n        boolean isAdult = age >= 18;\n        boolean canDrive = isAdult && hasUmbrella; // 仮の条件\n        \n        System.out.println("外出可能: " + canGoOut);\n        System.out.println("成人: " + isAdult);\n        System.out.println("運転可能: " + canDrive);\n    }\n}`,
      initialCode: `public class LogicalOperators {\n    public static void main(String[] args) {\n        // 論理演算子を使って条件を組み合わせてください\n        \n    }\n}`,
      solution: `public class LogicalOperators {\n    public static void main(String[] args) {\n        boolean hasLicense = true;\n        boolean hasKey = false;\n        int age = 22;\n        \n        boolean canDrive = hasLicense && hasKey && (age >= 18);\n        boolean needsLicense = !hasLicense && (age >= 18);\n        boolean hasAnyDocument = hasLicense || hasKey;\n        \n        System.out.println("運転可能: " + canDrive);\n        System.out.println("免許が必要: " + needsLicense);\n        System.out.println("何か書類がある: " + hasAnyDocument);\n    }\n}`,
      hints: ["&&は全条件がtrueで結果がtrue", "||は1つでもtrueなら結果がtrue", "!は真偽を反転"]
    },
    exercises: [{
      id: 18,
      title: "運転条件判定",
      description: 'hasLicense(true), hasKey(false), age(22)を使って運転条件等を判定してください',
      initialCode: `public class DrivingCheck {\n    public static void main(String[] args) {\n        // ここに論理演算を書いてください\n        \n    }\n}`,
      expectedOutput: "運転可能: false\n免許が必要: false\n何か書類がある: true",
      solution: `public class DrivingCheck {\n    public static void main(String[] args) {\n        boolean hasLicense = true;\n        boolean hasKey = false;\n        int age = 22;\n        \n        boolean canDrive = hasLicense && hasKey && (age >= 18);\n        boolean needsLicense = !hasLicense && (age >= 18);\n        boolean hasAnyDocument = hasLicense || hasKey;\n        \n        System.out.println("運転可能: " + canDrive);\n        System.out.println("免許が必要: " + needsLicense);\n        System.out.println("何か書類がある: " + hasAnyDocument);\n    }\n}`,
      hints: ["&&で全条件をチェック", "!で否定条件", "||でいずれかの条件"],
      testCases: [{input: "", expectedOutput: "運転可能: false\n免許が必要: false\n何か書類がある: true", description: "論理演算子を正しく使用する"}]
    }]
  },
  {
    id: 19,
    title: "代入演算子",
    description: "複合代入演算子（+=、-=、*=等）を学ぼう",
    difficulty: "初級",
    duration: "8分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# 代入演算子\n\n変数に値を代入しながら演算を行う演算子です。\n\n- **+=**: 加算代入\n- **-=**: 減算代入\n- **\*=**: 乗算代入\n- **/=**: 除算代入\n- **%=**: 剰余代入`,
      example: `public class AssignmentOperators {\n    public static void main(String[] args) {\n        int score = 100;\n        System.out.println("初期スコア: " + score);\n        \n        score += 50;  // score = score + 50と同じ\n        System.out.println("50点追加後: " + score);\n        \n        score -= 20;\n        System.out.println("20点減点後: " + score);\n        \n        score *= 2;\n        System.out.println("2倍後: " + score);\n        \n        score /= 5;\n        System.out.println("5で割った後: " + score);\n    }\n}`,
      initialCode: `public class AssignmentOperators {\n    public static void main(String[] args) {\n        // 代入演算子を使って計算してください\n        \n    }\n}`,
      solution: `public class AssignmentOperators {\n    public static void main(String[] args) {\n        int money = 1000;\n        System.out.println("初期金額: " + money);\n        \n        money += 500;\n        System.out.println("500円追加: " + money);\n        \n        money -= 200;\n        System.out.println("200円使用: " + money);\n        \n        money *= 2;\n        System.out.println("2倍: " + money);\n    }\n}`,
      hints: ["+=は加算と代入を同時に行う", "-=, *=, /=も同様に動作"]
    },
    exercises: [{
      id: 19,
      title: "お金の計算",
      description: 'money(1000)から始めて、500円追加、200円使用、2倍の操作を行って結果を出力してください',
      initialCode: `public class MoneyCalculation {\n    public static void main(String[] args) {\n        // ここに代入演算子を使った計算を書いてください\n        \n    }\n}`,
      expectedOutput: "初期金額: 1000\n500円追加: 1500\n200円使用: 1300\n2倍: 2600",
      solution: `public class MoneyCalculation {\n    public static void main(String[] args) {\n        int money = 1000;\n        System.out.println("初期金額: " + money);\n        \n        money += 500;\n        System.out.println("500円追加: " + money);\n        \n        money -= 200;\n        System.out.println("200円使用: " + money);\n        \n        money *= 2;\n        System.out.println("2倍: " + money);\n    }\n}`,
      hints: ["money += 500; で500円追加", "money -= 200; で200円減額"],
      testCases: [{input: "", expectedOutput: "初期金額: 1000\n500円追加: 1500\n200円使用: 1300\n2倍: 2600", description: "代入演算子を正しく使用する"}]
    }]
  },
  {
    id: 20,
    title: "インクリメント・デクリメント",
    description: "++と--演算子で値を1増減させよう",
    difficulty: "初級",
    duration: "8分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: `# インクリメント・デクリメント演算子\n\n値を1つ増やしたり減らしたりする演算子です。\n\n- **++**: インクリメント（1増加）\n- **--**: デクリメント（1減少）\n\n前置（++i）と後置（i++）で微妙な違いがあります。`,
      example: `public class IncrementDecrement {\n    public static void main(String[] args) {\n        int counter = 0;\n        System.out.println("初期値: " + counter);\n        \n        counter++;\n        System.out.println("counter++後: " + counter);\n        \n        ++counter;\n        System.out.println("++counter後: " + counter);\n        \n        counter--;\n        System.out.println("counter--後: " + counter);\n        \n        --counter;\n        System.out.println("--counter後: " + counter);\n    }\n}`,
      initialCode: `public class IncrementDecrement {\n    public static void main(String[] args) {\n        // インクリメント・デクリメント演算子を使ってください\n        \n    }\n}`,
      solution: `public class IncrementDecrement {\n    public static void main(String[] args) {\n        int lives = 3;\n        System.out.println("残りライフ: " + lives);\n        \n        lives--;\n        System.out.println("1ライフ減少: " + lives);\n        \n        lives--;\n        System.out.println("さらに1ライフ減少: " + lives);\n        \n        lives++;\n        System.out.println("1ライフ回復: " + lives);\n    }\n}`,
      hints: ["++で1増加", "--で1減少", "単純なカウンタに便利"]
    },
    exercises: [{
      id: 20,
      title: "ライフ管理",
      description: 'lives(3)から始めて、2回減少させ、1回増加させる操作を行ってください',
      initialCode: `public class LifeManagement {\n    public static void main(String[] args) {\n        // ここにライフの増減処理を書いてください\n        \n    }\n}`,
      expectedOutput: "残りライフ: 3\n1ライフ減少: 2\nさらに1ライフ減少: 1\n1ライフ回復: 2",
      solution: `public class LifeManagement {\n    public static void main(String[] args) {\n        int lives = 3;\n        System.out.println("残りライフ: " + lives);\n        \n        lives--;\n        System.out.println("1ライフ減少: " + lives);\n        \n        lives--;\n        System.out.println("さらに1ライフ減少: " + lives);\n        \n        lives++;\n        System.out.println("1ライフ回復: " + lives);\n    }\n}`,
      hints: ["lives--; で1減少", "lives++; で1増加"],
      testCases: [{input: "", expectedOutput: "残りライフ: 3\n1ライフ減少: 2\nさらに1ライフ減少: 1\n1ライフ回復: 2", description: "インクリメント・デクリメント演算子を正しく使用する"}]
    }]
  },

  // === レベル4: 条件分岐（レッスン21-25） ===
  {
    id: 21,
    title: "if文の基本",
    description: "条件によって処理を分岐させるif文を学ぼう",
    difficulty: "中級",
    duration: "10分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# if文の基本\n\nif文は条件に応じて処理を分岐させる制御文です。\n条件がtrue（真）の場合のみ、{}内のコードが実行されます。\n\n## 基本構文\n```java\nif (条件式) {\n    // 条件がtrueの時に実行される処理\n}\n```",
      example: "public class IfStatement {\n    public static void main(String[] args) {\n        int score = 85;\n        \n        if (score >= 80) {\n            System.out.println(\"優秀な成績です！\");\n        }\n        \n        if (score >= 60) {\n            System.out.println(\"合格です\");\n        }\n        \n        System.out.println(\"スコア: \" + score);\n    }\n}",
      initialCode: "public class IfStatement {\n    public static void main(String[] args) {\n        // if文を使って条件分岐を書いてください\n        \n    }\n}",
      solution: "public class IfStatement {\n    public static void main(String[] args) {\n        int temperature = 25;\n        \n        if (temperature >= 25) {\n            System.out.println(\"暖かい日です\");\n        }\n        \n        if (temperature < 10) {\n            System.out.println(\"寒い日です\");\n        }\n        \n        System.out.println(\"気温: \" + temperature + \"度\");\n    }\n}",
      hints: ["if (条件式) { 処理 }", "条件式にはboolean型の結果が返る式を書く", "複数のif文を独立して実行できる"]
    },
    exercises: [{
      id: 21,
      title: "天気の判定",
      description: "temperature(25)を使って、25度以上なら\"暖かい日です\"、10度未満なら\"寒い日です\"を出力し、最後に気温を表示してください",
      initialCode: "public class WeatherCheck {\n    public static void main(String[] args) {\n        // ここに条件分岐を書いてください\n        \n    }\n}",
      expectedOutput: "暖かい日です\n気温: 25度",
      solution: "public class WeatherCheck {\n    public static void main(String[] args) {\n        int temperature = 25;\n        \n        if (temperature >= 25) {\n            System.out.println(\"暖かい日です\");\n        }\n        \n        if (temperature < 10) {\n            System.out.println(\"寒い日です\");\n        }\n        \n        System.out.println(\"気温: \" + temperature + \"度\");\n    }\n}",
      hints: ["int temperature = 25;", "if (temperature >= 25)", "if (temperature < 10)"],
      testCases: [{input: "", expectedOutput: "暖かい日です\n気温: 25度", description: "if文を正しく使用する"}]
    }]
  },

  // レッスン22: if-else文
  {
    id: 22,
    title: "if-else文",
    description: "条件がfalseの時の処理も定義しよう",
    difficulty: "中級",
    duration: "10分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# if-else文\n\nif-else文を使うことで、条件がtrueの場合とfalseの場合で異なる処理を実行できます。\n\n## 基本構文\n```java\nif (条件式) {\n    // 条件がtrueの時の処理\n} else {\n    // 条件がfalseの時の処理\n}\n```",
      example: "public class IfElseStatement {\n    public static void main(String[] args) {\n        int age = 17;\n        \n        if (age >= 18) {\n            System.out.println(\"成人です\");\n        } else {\n            System.out.println(\"未成年です\");\n        }\n        \n        int score = 75;\n        if (score >= 80) {\n            System.out.println(\"優秀\");\n        } else {\n            System.out.println(\"もう少し頑張りましょう\");\n        }\n    }\n}",
      initialCode: "public class IfElseStatement {\n    public static void main(String[] args) {\n        // if-else文を使って条件分岐を書いてください\n        \n    }\n}",
      solution: "public class IfElseStatement {\n    public static void main(String[] args) {\n        int number = 15;\n        \n        if (number % 2 == 0) {\n            System.out.println(number + \"は偶数です\");\n        } else {\n            System.out.println(number + \"は奇数です\");\n        }\n        \n        boolean isWeekend = false;\n        if (isWeekend) {\n            System.out.println(\"休日です\");\n        } else {\n            System.out.println(\"平日です\");\n        }\n    }\n}",
      hints: ["else節は条件がfalseの時に実行される", "どちらか一方だけが実行される", "%演算子で偶数・奇数を判定できる"]
    },
    exercises: [{
      id: 22,
      title: "偶数・奇数判定",
      description: "number(15)が偶数か奇数かを判定し、isWeekend(false)で休日か平日かを判定して出力してください",
      initialCode: "public class EvenOddCheck {\n    public static void main(String[] args) {\n        // ここに条件分岐を書いてください\n        \n    }\n}",
      expectedOutput: "15は奇数です\n平日です",
      solution: "public class EvenOddCheck {\n    public static void main(String[] args) {\n        int number = 15;\n        \n        if (number % 2 == 0) {\n            System.out.println(number + \"は偶数です\");\n        } else {\n            System.out.println(number + \"は奇数です\");\n        }\n        \n        boolean isWeekend = false;\n        if (isWeekend) {\n            System.out.println(\"休日です\");\n        } else {\n            System.out.println(\"平日です\");\n        }\n    }\n}",
      hints: ["number % 2 == 0で偶数判定", "boolean変数をそのまま条件に使用"],
      testCases: [{input: "", expectedOutput: "15は奇数です\n平日です", description: "if-else文を正しく使用する"}]
    }]
  },

  // レッスン23: else if文
  {
    id: 23,
    title: "else if文",
    description: "複数の条件を順番にチェックしよう",
    difficulty: "中級",
    duration: "12分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# else if文\n\nelse if文を使うことで、複数の条件を順番にチェックできます。\n最初にtrueになった条件の処理のみが実行されます。\n\n## 基本構文\n```java\nif (条件1) {\n    // 条件1がtrueの時の処理\n} else if (条件2) {\n    // 条件2がtrueの時の処理\n} else {\n    // 全ての条件がfalseの時の処理\n}\n```",
      example: "public class ElseIfStatement {\n    public static void main(String[] args) {\n        int score = 85;\n        \n        if (score >= 90) {\n            System.out.println(\"A評価\");\n        } else if (score >= 80) {\n            System.out.println(\"B評価\");\n        } else if (score >= 70) {\n            System.out.println(\"C評価\");\n        } else if (score >= 60) {\n            System.out.println(\"D評価\");\n        } else {\n            System.out.println(\"F評価\");\n        }\n        \n        System.out.println(\"スコア: \" + score);\n    }\n}",
      initialCode: "public class ElseIfStatement {\n    public static void main(String[] args) {\n        // else if文を使って複数条件分岐を書いてください\n        \n    }\n}",
      solution: "public class ElseIfStatement {\n    public static void main(String[] args) {\n        int temperature = 15;\n        \n        if (temperature >= 30) {\n            System.out.println(\"暑い\");\n        } else if (temperature >= 20) {\n            System.out.println(\"暖かい\");\n        } else if (temperature >= 10) {\n            System.out.println(\"涼しい\");\n        } else {\n            System.out.println(\"寒い\");\n        }\n        \n        System.out.println(\"気温: \" + temperature + \"度\");\n    }\n}",
      hints: ["条件は上から順番にチェックされる", "最初にtrueになった条件のみ実行", "else節は全条件がfalseの時のデフォルト処理"]
    },
    exercises: [{
      id: 23,
      title: "温度判定",
      description: "temperature(15)を使って、30度以上なら\"暑い\"、20度以上なら\"暖かい\"、10度以上なら\"涼しい\"、それ未満なら\"寒い\"を判定してください",
      initialCode: "public class TemperatureCheck {\n    public static void main(String[] args) {\n        // ここに複数条件分岐を書いてください\n        \n    }\n}",
      expectedOutput: "涼しい\n気温: 15度",
      solution: "public class TemperatureCheck {\n    public static void main(String[] args) {\n        int temperature = 15;\n        \n        if (temperature >= 30) {\n            System.out.println(\"暑い\");\n        } else if (temperature >= 20) {\n            System.out.println(\"暖かい\");\n        } else if (temperature >= 10) {\n            System.out.println(\"涼しい\");\n        } else {\n            System.out.println(\"寒い\");\n        }\n        \n        System.out.println(\"気温: \" + temperature + \"度\");\n    }\n}",
      hints: ["int temperature = 15;", "条件は高い値から順番に", "else節で最終的なケース"],
      testCases: [{input: "", expectedOutput: "涼しい\n気温: 15度", description: "else if文を正しく使用する"}]
    }]
  },

  // レッスン24: ネストしたif文
  {
    id: 24,
    title: "ネストしたif文",
    description: "if文の中にさらにif文を書く方法を学ぼう",
    difficulty: "中級",
    duration: "12分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# ネストしたif文\n\nif文の中にさらにif文を書くことができます。\nこれにより、より複雑な条件分岐を実現できます。\n\n## 基本構文\n```java\nif (条件1) {\n    if (条件2) {\n        // 条件1と条件2が両方trueの時の処理\n    } else {\n        // 条件1がtrue、条件2がfalseの時の処理\n    }\n} else {\n    // 条件1がfalseの時の処理\n}\n```",
      example: "public class NestedIf {\n    public static void main(String[] args) {\n        int age = 20;\n        boolean hasLicense = true;\n        \n        if (age >= 18) {\n            if (hasLicense) {\n                System.out.println(\"運転できます\");\n            } else {\n                System.out.println(\"免許を取得してください\");\n            }\n        } else {\n            System.out.println(\"18歳になってから免許を取得してください\");\n        }\n        \n        int score = 85;\n        boolean hasBonus = true;\n        \n        if (score >= 80) {\n            System.out.println(\"優秀な成績です\");\n            if (hasBonus) {\n                System.out.println(\"ボーナスポイント獲得！\");\n            }\n        }\n    }\n}",
      initialCode: "public class NestedIf {\n    public static void main(String[] args) {\n        // ネストしたif文を書いてください\n        \n    }\n}",
      solution: "public class NestedIf {\n    public static void main(String[] args) {\n        boolean isRaining = true;\n        boolean hasUmbrella = false;\n        \n        if (isRaining) {\n            if (hasUmbrella) {\n                System.out.println(\"外出できます\");\n            } else {\n                System.out.println(\"傘を持参してください\");\n            }\n        } else {\n            System.out.println(\"良い天気です\");\n        }\n        \n        int money = 1500;\n        if (money >= 1000) {\n            System.out.println(\"買い物に行けます\");\n            if (money >= 2000) {\n                System.out.println(\"贅沢な買い物もできます\");\n            }\n        }\n    }\n}",
      hints: ["if文の{}内に別のif文を書ける", "インデントで階層を分かりやすくする", "複雑な条件は論理演算子と使い分ける"]
    },
    exercises: [{
      id: 24,
      title: "外出判定",
      description: "isRaining(true), hasUmbrella(false), money(1500)を使って外出の判定と買い物の判定を行ってください",
      initialCode: "public class GoOutCheck {\n    public static void main(String[] args) {\n        // ここにネストしたif文を書いてください\n        \n    }\n}",
      expectedOutput: "傘を持参してください\n買い物に行けます",
      solution: "public class GoOutCheck {\n    public static void main(String[] args) {\n        boolean isRaining = true;\n        boolean hasUmbrella = false;\n        \n        if (isRaining) {\n            if (hasUmbrella) {\n                System.out.println(\"外出できます\");\n            } else {\n                System.out.println(\"傘を持参してください\");\n            }\n        } else {\n            System.out.println(\"良い天気です\");\n        }\n        \n        int money = 1500;\n        if (money >= 1000) {\n            System.out.println(\"買い物に行けます\");\n            if (money >= 2000) {\n                System.out.println(\"贅沢な買い物もできます\");\n            }\n        }\n    }\n}",
      hints: ["雨の条件の中で傘のチェック", "お金の条件の中でさらに金額をチェック"],
      testCases: [{input: "", expectedOutput: "傘を持参してください\n買い物に行けます", description: "ネストしたif文を正しく使用する"}]
    }]
  },

  // レッスン25: switch文
  {
    id: 25,
    title: "switch文",
    description: "複数の値を効率的に比較するswitch文を学ぼう",
    difficulty: "中級",
    duration: "12分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# switch文\n\nswitch文は、1つの変数を複数の値と比較する場合に便利です。\nelse ifよりも読みやすく、効率的です。\n\n## 基本構文\n```java\nswitch (変数) {\n    case 値1:\n        // 値1の時の処理\n        break;\n    case 値2:\n        // 値2の時の処理\n        break;\n    default:\n        // どのcaseにも当てはまらない時の処理\n        break;\n}\n```",
      example: "public class SwitchStatement {\n    public static void main(String[] args) {\n        int dayOfWeek = 3;\n        \n        switch (dayOfWeek) {\n            case 1:\n                System.out.println(\"月曜日\");\n                break;\n            case 2:\n                System.out.println(\"火曜日\");\n                break;\n            case 3:\n                System.out.println(\"水曜日\");\n                break;\n            case 4:\n                System.out.println(\"木曜日\");\n                break;\n            case 5:\n                System.out.println(\"金曜日\");\n                break;\n            default:\n                System.out.println(\"週末\");\n                break;\n        }\n        \n        char grade = 'B';\n        switch (grade) {\n            case 'A':\n                System.out.println(\"優秀\");\n                break;\n            case 'B':\n                System.out.println(\"良好\");\n                break;\n            case 'C':\n                System.out.println(\"普通\");\n                break;\n            default:\n                System.out.println(\"要改善\");\n                break;\n        }\n    }\n}",
      initialCode: "public class SwitchStatement {\n    public static void main(String[] args) {\n        // switch文を使って分岐処理を書いてください\n        \n    }\n}",
      solution: "public class SwitchStatement {\n    public static void main(String[] args) {\n        int month = 6;\n        \n        switch (month) {\n            case 12:\n            case 1:\n            case 2:\n                System.out.println(\"冬\");\n                break;\n            case 3:\n            case 4:\n            case 5:\n                System.out.println(\"春\");\n                break;\n            case 6:\n            case 7:\n            case 8:\n                System.out.println(\"夏\");\n                break;\n            case 9:\n            case 10:\n            case 11:\n                System.out.println(\"秋\");\n                break;\n            default:\n                System.out.println(\"無効な月\");\n                break;\n        }\n        \n        System.out.println(\"月: \" + month);\n    }\n}",
      hints: ["break文で各caseを区切る", "break文がないとfall-throughが起こる", "複数のcaseで同じ処理を共有できる", "default節は省略可能だが推奨"]
    },
    exercises: [{
      id: 25,
      title: "季節判定",
      description: "month(6)を使って、12,1,2月なら\"冬\"、3,4,5月なら\"春\"、6,7,8月なら\"夏\"、9,10,11月なら\"秋\"を判定してください",
      initialCode: "public class SeasonCheck {\n    public static void main(String[] args) {\n        // ここにswitch文を書いてください\n        \n    }\n}",
      expectedOutput: "夏\n月: 6",
      solution: "public class SeasonCheck {\n    public static void main(String[] args) {\n        int month = 6;\n        \n        switch (month) {\n            case 12:\n            case 1:\n            case 2:\n                System.out.println(\"冬\");\n                break;\n            case 3:\n            case 4:\n            case 5:\n                System.out.println(\"春\");\n                break;\n            case 6:\n            case 7:\n            case 8:\n                System.out.println(\"夏\");\n                break;\n            case 9:\n            case 10:\n            case 11:\n                System.out.println(\"秋\");\n                break;\n            default:\n                System.out.println(\"無効な月\");\n                break;\n        }\n        \n        System.out.println(\"月: \" + month);\n    }\n}",
      hints: ["int month = 6;", "複数のcaseを連続して書ける", "break文を忘れずに"],
      testCases: [{input: "", expectedOutput: "夏\n月: 6", description: "switch文を正しく使用する"}]
    }]
  },

  // === レベル5: ループ（レッスン26-30） ===
  // レッスン26: for文の基本
  {
    id: 26,
    title: "for文の基本",
    description: "繰り返し処理を効率的に実行するfor文を学ぼう",
    difficulty: "中級",
    duration: "10分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# for文の基本\n\nfor文は指定した回数だけ処理を繰り返すために使用します。\nカウンタ変数を使って制御します。\n\n## 基本構文\n```java\nfor (初期化; 条件式; 更新式) {\n    // 繰り返される処理\n}\n```\n\n- **初期化**: ループ開始時に1回だけ実行\n- **条件式**: trueの間ループが継続\n- **更新式**: 各ループの終わりに実行",
      example: "public class ForLoop {\n    public static void main(String[] args) {\n        // 1から5まで出力\n        for (int i = 1; i <= 5; i++) {\n            System.out.println(\"回数: \" + i);\n        }\n        \n        System.out.println(\"ループ終了\");\n        \n        // 偶数のみ出力\n        for (int i = 2; i <= 10; i += 2) {\n            System.out.println(\"偶数: \" + i);\n        }\n    }\n}",
      initialCode: "public class ForLoop {\n    public static void main(String[] args) {\n        // for文を使って繰り返し処理を書いてください\n        \n    }\n}",
      solution: "public class ForLoop {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            System.out.println(\"Hello World \" + i);\n        }\n        \n        for (int i = 10; i >= 1; i--) {\n            System.out.println(\"カウントダウン: \" + i);\n        }\n    }\n}",
      hints: ["iは慣習的に使われるカウンタ変数名", "i++で1ずつ増加", "i--で1ずつ減少", "条件式がfalseになるとループ終了"]
    },
    exercises: [{
      id: 26,
      title: "基本的なfor文",
      description: "1から3まで\"Hello World\"を番号付きで出力し、その後10から1までカウントダウンしてください",
      initialCode: "public class ForExercise {\n    public static void main(String[] args) {\n        // ここにfor文を書いてください\n        \n    }\n}",
      expectedOutput: "Hello World 1\nHello World 2\nHello World 3\nカウントダウン: 10\nカウントダウン: 9\nカウントダウン: 8\nカウントダウン: 7\nカウントダウン: 6\nカウントダウン: 5\nカウントダウン: 4\nカウントダウン: 3\nカウントダウン: 2\nカウントダウン: 1",
      solution: "public class ForExercise {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            System.out.println(\"Hello World \" + i);\n        }\n        \n        for (int i = 10; i >= 1; i--) {\n            System.out.println(\"カウントダウン: \" + i);\n        }\n    }\n}",
      hints: ["for (int i = 1; i <= 3; i++)", "for (int i = 10; i >= 1; i--)"],
      testCases: [{input: "", expectedOutput: "Hello World 1\nHello World 2\nHello World 3\nカウントダウン: 10\nカウントダウン: 9\nカウントダウン: 8\nカウントダウン: 7\nカウントダウン: 6\nカウントダウン: 5\nカウントダウン: 4\nカウントダウン: 3\nカウントダウン: 2\nカウントダウン: 1", description: "for文を正しく使用する"}]
    }]
  },

  // レッスン27: while文
  {
    id: 27,
    title: "while文",
    description: "条件を満たす間繰り返すwhile文を学ぼう",
    difficulty: "中級",
    duration: "10分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# while文\n\nwhile文は条件がtrueの間、処理を繰り返します。\n繰り返し回数が事前に分からない場合に便利です。\n\n## 基本構文\n```java\nwhile (条件式) {\n    // 条件がtrueの間繰り返される処理\n}\n```\n\n**注意**: 条件を必ずfalseにする処理を入れないと無限ループになります。",
      example: "public class WhileLoop {\n    public static void main(String[] args) {\n        int count = 1;\n        while (count <= 5) {\n            System.out.println(\"回数: \" + count);\n            count++;\n        }\n        \n        // 条件によるループ\n        int sum = 0;\n        int number = 1;\n        while (sum < 20) {\n            sum += number;\n            System.out.println(number + \"を加算: 合計=\" + sum);\n            number++;\n        }\n    }\n}",
      initialCode: "public class WhileLoop {\n    public static void main(String[] args) {\n        // while文を使って繰り返し処理を書いてください\n        \n    }\n}",
      solution: "public class WhileLoop {\n    public static void main(String[] args) {\n        int i = 1;\n        while (i <= 5) {\n            System.out.println(\"数値: \" + i);\n            i++;\n        }\n        \n        int money = 1000;\n        int day = 1;\n        while (money > 0) {\n            money -= 100;\n            System.out.println(day + \"日目: 残り\" + money + \"円\");\n            day++;\n        }\n    }\n}",
      hints: ["ループ変数の初期化を忘れずに", "ループ内で条件を変更する", "無限ループに注意"]
    },
    exercises: [{
      id: 27,
      title: "while文の練習",
      description: "1から5まで数値を出力し、その後1000円から毎日100円ずつ使って残金と日数を表示してください",
      initialCode: "public class WhileExercise {\n    public static void main(String[] args) {\n        // ここにwhile文を書いてください\n        \n    }\n}",
      expectedOutput: "数値: 1\n数値: 2\n数値: 3\n数値: 4\n数値: 5\n1日目: 残り900円\n2日目: 残り800円\n3日目: 残り700円\n4日目: 残り600円\n5日目: 残り500円\n6日目: 残り400円\n7日目: 残り300円\n8日目: 残り200円\n9日目: 残り100円\n10日目: 残り0円",
      solution: "public class WhileExercise {\n    public static void main(String[] args) {\n        int i = 1;\n        while (i <= 5) {\n            System.out.println(\"数値: \" + i);\n            i++;\n        }\n        \n        int money = 1000;\n        int day = 1;\n        while (money > 0) {\n            money -= 100;\n            System.out.println(day + \"日目: 残り\" + money + \"円\");\n            day++;\n        }\n    }\n}",
      hints: ["int i = 1; while (i <= 5)", "money > 0の間ループ"],
      testCases: [{input: "", expectedOutput: "数値: 1\n数値: 2\n数値: 3\n数値: 4\n数値: 5\n1日目: 残り900円\n2日目: 残り800円\n3日目: 残り700円\n4日目: 残り600円\n5日目: 残り500円\n6日目: 残り400円\n7日目: 残り300円\n8日目: 残り200円\n9日目: 残り100円\n10日目: 残り0円", description: "while文を正しく使用する"}]
    }]
  },

  // レッスン28: do-while文
  {
    id: 28,
    title: "do-while文",
    description: "最低1回は実行されるdo-while文を学ぼう",
    difficulty: "中級",
    duration: "8分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# do-while文\n\ndo-while文は、条件に関係なく最低1回は処理を実行してから条件をチェックします。\n\n## 基本構文\n```java\ndo {\n    // 最低1回は実行される処理\n} while (条件式);\n```\n\n**while文との違い**: \n- while文: 条件チェック → 実行\n- do-while文: 実行 → 条件チェック",
      example: "public class DoWhileLoop {\n    public static void main(String[] args) {\n        int count = 1;\n        do {\n            System.out.println(\"実行回数: \" + count);\n            count++;\n        } while (count <= 3);\n        \n        // 条件がfalseでも1回は実行される例\n        int x = 10;\n        do {\n            System.out.println(\"xの値: \" + x);\n            x++;\n        } while (x < 10); // 最初からfalseだが1回実行される\n    }\n}",
      initialCode: "public class DoWhileLoop {\n    public static void main(String[] args) {\n        // do-while文を使って繰り返し処理を書いてください\n        \n    }\n}",
      solution: "public class DoWhileLoop {\n    public static void main(String[] args) {\n        int number = 1;\n        do {\n            System.out.println(\"番号: \" + number);\n            number++;\n        } while (number <= 4);\n        \n        int value = 100;\n        do {\n            System.out.println(\"値: \" + value);\n            value -= 10;\n        } while (value > 50);\n    }\n}",
      hints: ["doブロックは必ず1回実行される", "whileの後にセミコロンを忘れずに", "条件チェックは実行後に行われる"]
    },
    exercises: [{
      id: 28,
      title: "do-while文の練習",
      description: "1から4まで番号を出力し、その後100から10ずつ減らしながら50より大きい間値を出力してください",
      initialCode: "public class DoWhileExercise {\n    public static void main(String[] args) {\n        // ここにdo-while文を書いてください\n        \n    }\n}",
      expectedOutput: "番号: 1\n番号: 2\n番号: 3\n番号: 4\n値: 100\n値: 90\n値: 80\n値: 70\n値: 60",
      solution: "public class DoWhileExercise {\n    public static void main(String[] args) {\n        int number = 1;\n        do {\n            System.out.println(\"番号: \" + number);\n            number++;\n        } while (number <= 4);\n        \n        int value = 100;\n        do {\n            System.out.println(\"値: \" + value);\n            value -= 10;\n        } while (value > 50);\n    }\n}",
      hints: ["do { 処理 } while (条件);", "必ず1回は実行される"],
      testCases: [{input: "", expectedOutput: "番号: 1\n番号: 2\n番号: 3\n番号: 4\n値: 100\n値: 90\n値: 80\n値: 70\n値: 60", description: "do-while文を正しく使用する"}]
    }]
  },

  // レッスン29: break文とcontinue文
  {
    id: 29,
    title: "break文とcontinue文",
    description: "ループの制御に使うbreak文とcontinue文を学ぼう",
    difficulty: "中級",
    duration: "12分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# break文とcontinue文\n\nループの実行を制御する文です。\n\n## break文\n- ループを即座に終了\n- ループ全体から抜け出す\n\n## continue文\n- 現在の繰り返しをスキップ\n- ループの次の繰り返しに進む",
      example: "public class BreakContinue {\n    public static void main(String[] args) {\n        // break文の例\n        for (int i = 1; i <= 10; i++) {\n            if (i == 5) {\n                break; // i=5でループ終了\n            }\n            System.out.println(\"break例: \" + i);\n        }\n        \n        System.out.println(\"---\");\n        \n        // continue文の例\n        for (int i = 1; i <= 5; i++) {\n            if (i == 3) {\n                continue; // i=3をスキップ\n            }\n            System.out.println(\"continue例: \" + i);\n        }\n    }\n}",
      initialCode: "public class BreakContinue {\n    public static void main(String[] args) {\n        // break文とcontinue文を使ってください\n        \n    }\n}",
      solution: "public class BreakContinue {\n    public static void main(String[] args) {\n        // 7以上でbreak\n        for (int i = 1; i <= 10; i++) {\n            if (i >= 7) {\n                break;\n            }\n            System.out.println(\"数値: \" + i);\n        }\n        \n        System.out.println(\"---\");\n        \n        // 偶数をスキップ\n        for (int i = 1; i <= 8; i++) {\n            if (i % 2 == 0) {\n                continue;\n            }\n            System.out.println(\"奇数: \" + i);\n        }\n    }\n}",
      hints: ["breakでループ全体を終了", "continueで現在の繰り返しをスキップ", "条件に応じて使い分ける"]
    },
    exercises: [{
      id: 29,
      title: "ループ制御の練習",
      description: "1から10まで数えて7以上でbreakし、1から8まで数えて偶数をcontinueでスキップしてください",
      initialCode: "public class LoopControl {\n    public static void main(String[] args) {\n        // ここにbreak文とcontinue文を書いてください\n        \n    }\n}",
      expectedOutput: "数値: 1\n数値: 2\n数値: 3\n数値: 4\n数値: 5\n数値: 6\n---\n奇数: 1\n奇数: 3\n奇数: 5\n奇数: 7",
      solution: "public class LoopControl {\n    public static void main(String[] args) {\n        // 7以上でbreak\n        for (int i = 1; i <= 10; i++) {\n            if (i >= 7) {\n                break;\n            }\n            System.out.println(\"数値: \" + i);\n        }\n        \n        System.out.println(\"---\");\n        \n        // 偶数をスキップ\n        for (int i = 1; i <= 8; i++) {\n            if (i % 2 == 0) {\n                continue;\n            }\n            System.out.println(\"奇数: \" + i);\n        }\n    }\n}",
      hints: ["if (i >= 7) { break; }", "if (i % 2 == 0) { continue; }"],
      testCases: [{input: "", expectedOutput: "数値: 1\n数値: 2\n数値: 3\n数値: 4\n数値: 5\n数値: 6\n---\n奇数: 1\n奇数: 3\n奇数: 5\n奇数: 7", description: "break文とcontinue文を正しく使用する"}]
    }]
  },

  // レッスン30: ネストしたループ
  {
    id: 30,
    title: "ネストしたループ",
    description: "ループの中にループを入れて複雑な処理を実現しよう",
    difficulty: "中級",
    duration: "15分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# ネストしたループ\n\nループの中に別のループを書くことができます。\n外側のループが1回実行されるごとに、内側のループが完全に実行されます。\n\n## 基本構文\n```java\nfor (外側の制御) {\n    for (内側の制御) {\n        // 内側の処理\n    }\n}\n```\n\n**計算量**: 外側n回、内側m回なら合計n×m回実行されます。",
      example: "public class NestedLoop {\n    public static void main(String[] args) {\n        // 九九の表\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= 3; j++) {\n                System.out.print(i + \"×\" + j + \"=\" + (i * j) + \" \");\n            }\n            System.out.println(); // 改行\n        }\n        \n        System.out.println(\"---\");\n        \n        // 星のパターン\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(\"★\");\n            }\n            System.out.println();\n        }\n    }\n}",
      initialCode: "public class NestedLoop {\n    public static void main(String[] args) {\n        // ネストしたループを書いてください\n        \n    }\n}",
      solution: "public class NestedLoop {\n    public static void main(String[] args) {\n        // 数字のパターン\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= 4; j++) {\n                System.out.print(i + \"-\" + j + \" \");\n            }\n            System.out.println();\n        }\n        \n        System.out.println(\"---\");\n        \n        // 三角形パターン\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
      hints: ["外側ループが1回につき内側ループが全回実行", "System.out.println()で改行", "変数名はi, j, kの順で使うのが慣習"]
    },
    exercises: [{
      id: 30,
      title: "パターン出力",
      description: "1から3まで外側ループ、1から4まで内側ループで\"i-j\"形式で出力し、その後1から4まで三角形の数字パターンを出力してください",
      initialCode: "public class PatternOutput {\n    public static void main(String[] args) {\n        // ここにネストしたループを書いてください\n        \n    }\n}",
      expectedOutput: "1-1 1-2 1-3 1-4 \n2-1 2-2 2-3 2-4 \n3-1 3-2 3-3 3-4 \n---\n1 \n1 2 \n1 2 3 \n1 2 3 4 ",
      solution: "public class PatternOutput {\n    public static void main(String[] args) {\n        // 数字のパターン\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= 4; j++) {\n                System.out.print(i + \"-\" + j + \" \");\n            }\n            System.out.println();\n        }\n        \n        System.out.println(\"---\");\n        \n        // 三角形パターン\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
      hints: ["外側for (int i = 1; i <= 3; i++)", "内側for (int j = 1; j <= 4; j++)", "System.out.println()で各行を区切る"],
      testCases: [{input: "", expectedOutput: "1-1 1-2 1-3 1-4 \n2-1 2-2 2-3 2-4 \n3-1 3-2 3-3 3-4 \n---\n1 \n1 2 \n1 2 3 \n1 2 3 4 ", description: "ネストしたループを正しく使用する"}]
    }]
  },

  // === レベル6: 配列（レッスン31-35） ===
  // レッスン31: 配列の基本
  {
    id: 31,
    title: "配列の基本",
    description: "複数の値をまとめて管理する配列を学ぼう",
    difficulty: "中級",
    duration: "12分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# 配列の基本\n\n配列は同じ型の複数の値をまとめて格納できるデータ構造です。\n各要素にはインデックス（0から始まる番号）でアクセスします。\n\n## 配列の宣言と初期化\n```java\n// 宣言と初期化を分ける\nint[] numbers = new int[5];\n\n// 宣言と同時に値を設定\nint[] scores = {85, 92, 78, 96, 88};\n```\n\n**重要**: Javaの配列インデックスは0から始まります。",
      example: "public class ArrayBasics {\n    public static void main(String[] args) {\n        // 配列の作成\n        int[] numbers = {10, 20, 30, 40, 50};\n        \n        // 配列の要素にアクセス\n        System.out.println(\"最初の要素: \" + numbers[0]);\n        System.out.println(\"3番目の要素: \" + numbers[2]);\n        \n        // 配列の長さ\n        System.out.println(\"配列の長さ: \" + numbers.length);\n        \n        // 要素の変更\n        numbers[1] = 25;\n        System.out.println(\"変更後の2番目: \" + numbers[1]);\n        \n        // 文字列配列\n        String[] names = {\"太郎\", \"花子\", \"次郎\"};\n        System.out.println(\"名前: \" + names[0]);\n    }\n}",
      initialCode: "public class ArrayBasics {\n    public static void main(String[] args) {\n        // 配列を作成して操作してください\n        \n    }\n}",
      solution: "public class ArrayBasics {\n    public static void main(String[] args) {\n        int[] scores = {85, 90, 78};\n        System.out.println(\"1番目のスコア: \" + scores[0]);\n        System.out.println(\"2番目のスコア: \" + scores[1]);\n        System.out.println(\"3番目のスコア: \" + scores[2]);\n        \n        String[] fruits = {\"りんご\", \"バナナ\", \"オレンジ\"};\n        System.out.println(\"果物1: \" + fruits[0]);\n        System.out.println(\"果物2: \" + fruits[1]);\n        System.out.println(\"果物3: \" + fruits[2]);\n    }\n}",
      hints: ["配列の宣言: int[] name = {値1, 値2, ...}", "インデックスは0から始まる", "array[0]で最初の要素にアクセス"]
    },
    exercises: [{
      id: 31,
      title: "配列の基本操作",
      description: "scores配列{85, 90, 78}とfruits配列{\"りんご\", \"バナナ\", \"オレンジ\"}を作成し、全ての要素を順番に出力してください",
      initialCode: "public class ArrayExercise {\n    public static void main(String[] args) {\n        // ここに配列を作成して出力してください\n        \n    }\n}",
      expectedOutput: "1番目のスコア: 85\n2番目のスコア: 90\n3番目のスコア: 78\n果物1: りんご\n果物2: バナナ\n果物3: オレンジ",
      solution: "public class ArrayExercise {\n    public static void main(String[] args) {\n        int[] scores = {85, 90, 78};\n        System.out.println(\"1番目のスコア: \" + scores[0]);\n        System.out.println(\"2番目のスコア: \" + scores[1]);\n        System.out.println(\"3番目のスコア: \" + scores[2]);\n        \n        String[] fruits = {\"りんご\", \"バナナ\", \"オレンジ\"};\n        System.out.println(\"果物1: \" + fruits[0]);\n        System.out.println(\"果物2: \" + fruits[1]);\n        System.out.println(\"果物3: \" + fruits[2]);\n    }\n}",
      hints: ["int[] scores = {85, 90, 78};", "String[] fruits = {\"りんご\", \"バナナ\", \"オレンジ\"};"],
      testCases: [{input: "", expectedOutput: "1番目のスコア: 85\n2番目のスコア: 90\n3番目のスコア: 78\n果物1: りんご\n果物2: バナナ\n果物3: オレンジ", description: "配列の基本操作を正しく行う"}]
    }]
  },

  // レッスン32: 配列の繰り返し処理
  {
    id: 32,
    title: "配列の繰り返し処理",
    description: "forループを使って配列の全要素を処理しよう",
    difficulty: "中級",
    duration: "12分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# 配列の繰り返し処理\n\n配列の全ての要素に対して処理を行うには、forループを使用します。\n配列の長さは`.length`プロパティで取得できます。\n\n## 基本的なforループ\n```java\nint[] array = {1, 2, 3, 4, 5};\nfor (int i = 0; i < array.length; i++) {\n    System.out.println(array[i]);\n}\n```\n\n## 拡張forループ（for-each）\n```java\nfor (int value : array) {\n    System.out.println(value);\n}\n```",
      example: "public class ArrayLoop {\n    public static void main(String[] args) {\n        int[] numbers = {10, 20, 30, 40, 50};\n        \n        // 通常のforループ\n        System.out.println(\"通常のforループ:\");\n        for (int i = 0; i < numbers.length; i++) {\n            System.out.println(\"インデックス\" + i + \": \" + numbers[i]);\n        }\n        \n        System.out.println(\"\\n拡張forループ:\");\n        // 拡張forループ\n        for (int num : numbers) {\n            System.out.println(\"値: \" + num);\n        }\n        \n        // 配列の合計を計算\n        int sum = 0;\n        for (int num : numbers) {\n            sum += num;\n        }\n        System.out.println(\"\\n合計: \" + sum);\n    }\n}",
      initialCode: "public class ArrayLoop {\n    public static void main(String[] args) {\n        // 配列の繰り返し処理を書いてください\n        \n    }\n}",
      solution: "public class ArrayLoop {\n    public static void main(String[] args) {\n        int[] scores = {80, 95, 72, 88, 91};\n        \n        for (int i = 0; i < scores.length; i++) {\n            System.out.println(\"スコア\" + (i + 1) + \": \" + scores[i]);\n        }\n        \n        int total = 0;\n        for (int score : scores) {\n            total += score;\n        }\n        double average = (double) total / scores.length;\n        System.out.println(\"平均: \" + average);\n    }\n}",
      hints: ["i < array.lengthで全要素をループ", "拡張forループ: for (type value : array)", "(double)でキャストして小数の割り算"]
    },
    exercises: [{
      id: 32,
      title: "配列の統計処理",
      description: "scores配列{80, 95, 72, 88, 91}を作成し、各スコアを\"スコア1: 80\"の形式で出力し、最後に平均を出力してください",
      initialCode: "public class ArrayStatistics {\n    public static void main(String[] args) {\n        // ここに配列の繰り返し処理を書いてください\n        \n    }\n}",
      expectedOutput: "スコア1: 80\nスコア2: 95\nスコア3: 72\nスコア4: 88\nスコア5: 91\n平均: 85.2",
      solution: "public class ArrayStatistics {\n    public static void main(String[] args) {\n        int[] scores = {80, 95, 72, 88, 91};\n        \n        for (int i = 0; i < scores.length; i++) {\n            System.out.println(\"スコア\" + (i + 1) + \": \" + scores[i]);\n        }\n        \n        int total = 0;\n        for (int score : scores) {\n            total += score;\n        }\n        double average = (double) total / scores.length;\n        System.out.println(\"平均: \" + average);\n    }\n}",
      hints: ["for (int i = 0; i < scores.length; i++)", "合計を計算してから配列の長さで割る"],
      testCases: [{input: "", expectedOutput: "スコア1: 80\nスコア2: 95\nスコア3: 72\nスコア4: 88\nスコア5: 91\n平均: 85.2", description: "配列の繰り返し処理を正しく行う"}]
    }]
  },

  // レッスン33: 配列の検索
  {
    id: 33,
    title: "配列の検索",
    description: "配列から特定の値を探す方法を学ぼう",
    difficulty: "中級",
    duration: "12分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# 配列の検索\n\n配列から特定の値を探すには、ループを使って各要素を順番にチェックします。\n\n## 基本的な検索パターン\n1. **値の存在チェック**: 指定した値が配列にあるかどうか\n2. **インデックス検索**: 指定した値が何番目にあるか\n3. **最大値・最小値検索**: 配列内の最大・最小値を探す\n\n```java\n// 値の存在チェック\nboolean found = false;\nfor (int value : array) {\n    if (value == target) {\n        found = true;\n        break;\n    }\n}\n```",
      example: "public class ArraySearch {\n    public static void main(String[] args) {\n        int[] numbers = {15, 22, 8, 31, 45, 12};\n        int target = 31;\n        \n        // 値の存在チェック\n        boolean found = false;\n        for (int num : numbers) {\n            if (num == target) {\n                found = true;\n                break;\n            }\n        }\n        System.out.println(target + \"が見つかった: \" + found);\n        \n        // インデックス検索\n        int index = -1;\n        for (int i = 0; i < numbers.length; i++) {\n            if (numbers[i] == target) {\n                index = i;\n                break;\n            }\n        }\n        System.out.println(target + \"のインデックス: \" + index);\n        \n        // 最大値検索\n        int max = numbers[0];\n        for (int num : numbers) {\n            if (num > max) {\n                max = num;\n            }\n        }\n        System.out.println(\"最大値: \" + max);\n    }\n}",
      initialCode: "public class ArraySearch {\n    public static void main(String[] args) {\n        // 配列の検索処理を書いてください\n        \n    }\n}",
      solution: "public class ArraySearch {\n    public static void main(String[] args) {\n        String[] names = {\"太郎\", \"花子\", \"次郎\", \"美香\", \"健太\"};\n        String target = \"花子\";\n        \n        boolean found = false;\n        int position = -1;\n        \n        for (int i = 0; i < names.length; i++) {\n            if (names[i].equals(target)) {\n                found = true;\n                position = i + 1;\n                break;\n            }\n        }\n        \n        if (found) {\n            System.out.println(target + \"が見つかりました\");\n            System.out.println(\"位置: \" + position + \"番目\");\n        } else {\n            System.out.println(target + \"は見つかりませんでした\");\n        }\n    }\n}",
      hints: ["文字列の比較はequals()を使用", "見つからない場合のデフォルト値を設定", "breakで検索を早期終了"]
    },
    exercises: [{
      id: 33,
      title: "名前検索",
      description: "names配列{\"太郎\", \"花子\", \"次郎\", \"美香\", \"健太\"}で\"花子\"を検索し、見つかったら\"花子が見つかりました\"と\"位置: 2番目\"を出力してください",
      initialCode: "public class NameSearch {\n    public static void main(String[] args) {\n        // ここに検索処理を書いてください\n        \n    }\n}",
      expectedOutput: "花子が見つかりました\n位置: 2番目",
      solution: "public class NameSearch {\n    public static void main(String[] args) {\n        String[] names = {\"太郎\", \"花子\", \"次郎\", \"美香\", \"健太\"};\n        String target = \"花子\";\n        \n        boolean found = false;\n        int position = -1;\n        \n        for (int i = 0; i < names.length; i++) {\n            if (names[i].equals(target)) {\n                found = true;\n                position = i + 1;\n                break;\n            }\n        }\n        \n        if (found) {\n            System.out.println(target + \"が見つかりました\");\n            System.out.println(\"位置: \" + position + \"番目\");\n        } else {\n            System.out.println(target + \"は見つかりませんでした\");\n        }\n    }\n}",
      hints: ["String[] names = {\"太郎\", \"花子\", \"次郎\", \"美香\", \"健太\"};", "names[i].equals(target)で文字列を比較"],
      testCases: [{input: "", expectedOutput: "花子が見つかりました\n位置: 2番目", description: "配列の検索を正しく行う"}]
    }]
  },

  // レッスン34: 多次元配列
  {
    id: 34,
    title: "多次元配列",
    description: "配列の配列である2次元配列を学ぼう",
    difficulty: "上級",
    duration: "15分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# 多次元配列\n\n多次元配列は配列の配列です。最も一般的なのは2次元配列で、\n表やマトリックスのようなデータを表現するのに使用します。\n\n## 2次元配列の宣言と初期化\n```java\n// 宣言と初期化\nint[][] matrix = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\n// サイズを指定して作成\nint[][] table = new int[3][4]; // 3行4列\n```\n\n**アクセス方法**: array[行][列]",
      example: "public class MultiArray {\n    public static void main(String[] args) {\n        // 2次元配列の作成\n        int[][] scores = {\n            {85, 90, 78},\n            {92, 88, 95},\n            {76, 82, 91}\n        };\n        \n        // 特定の要素にアクセス\n        System.out.println(\"1行2列の要素: \" + scores[0][1]);\n        \n        // 全要素を出力\n        for (int i = 0; i < scores.length; i++) {\n            for (int j = 0; j < scores[i].length; j++) {\n                System.out.print(scores[i][j] + \" \");\n            }\n            System.out.println();\n        }\n        \n        // 各行の合計\n        for (int i = 0; i < scores.length; i++) {\n            int sum = 0;\n            for (int j = 0; j < scores[i].length; j++) {\n                sum += scores[i][j];\n            }\n            System.out.println((i + 1) + \"行目の合計: \" + sum);\n        }\n    }\n}",
      initialCode: "public class MultiArray {\n    public static void main(String[] args) {\n        // 2次元配列を作成して操作してください\n        \n    }\n}",
      solution: "public class MultiArray {\n    public static void main(String[] args) {\n        int[][] table = {\n            {1, 2, 3},\n            {4, 5, 6}\n        };\n        \n        for (int i = 0; i < table.length; i++) {\n            for (int j = 0; j < table[i].length; j++) {\n                System.out.print(table[i][j] + \" \");\n            }\n            System.out.println();\n        }\n        \n        System.out.println(\"2行3列の要素: \" + table[1][2]);\n    }\n}",
      hints: ["int[][] array = {{値1, 値2}, {値3, 値4}}", "array[行][列]でアクセス", "ネストしたループで全要素を処理"]
    },
    exercises: [{
      id: 34,
      title: "2次元配列の操作",
      description: "2次元配列{{1, 2, 3}, {4, 5, 6}}を作成し、全要素を行ごとに出力し、最後に2行3列の要素(値6)を出力してください",
      initialCode: "public class TwoDimensionalArray {\n    public static void main(String[] args) {\n        // ここに2次元配列を作成して操作してください\n        \n    }\n}",
      expectedOutput: "1 2 3 \n4 5 6 \n2行3列の要素: 6",
      solution: "public class TwoDimensionalArray {\n    public static void main(String[] args) {\n        int[][] table = {\n            {1, 2, 3},\n            {4, 5, 6}\n        };\n        \n        for (int i = 0; i < table.length; i++) {\n            for (int j = 0; j < table[i].length; j++) {\n                System.out.print(table[i][j] + \" \");\n            }\n            System.out.println();\n        }\n        \n        System.out.println(\"2行3列の要素: \" + table[1][2]);\n    }\n}",
      hints: ["int[][] table = {{1, 2, 3}, {4, 5, 6}};", "table[1][2]で2行3列にアクセス"],
      testCases: [{input: "", expectedOutput: "1 2 3 \n4 5 6 \n2行3列の要素: 6", description: "2次元配列を正しく操作する"}]
    }]
  },

  // レッスン35: 配列の応用
  {
    id: 35,
    title: "配列の応用",
    description: "配列をより実践的に活用する方法を学ぼう",
    difficulty: "上級",
    duration: "18分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# 配列の応用\n\n配列を使ったより実践的な処理方法を学習します。\n\n## 主要な配列操作\n1. **ソート（並び替え）**: 要素を昇順・降順に整列\n2. **フィルタリング**: 条件に合う要素だけを抽出\n3. **データの集計**: 合計、平均、最大・最小値など\n4. **配列のコピー**: 既存配列から新しい配列を作成\n\n```java\n// 簡単なバブルソート\nfor (int i = 0; i < array.length - 1; i++) {\n    for (int j = 0; j < array.length - 1 - i; j++) {\n        if (array[j] > array[j + 1]) {\n            // 要素を交換\n            int temp = array[j];\n            array[j] = array[j + 1];\n            array[j + 1] = temp;\n        }\n    }\n}\n```",
      example: "public class ArrayAdvanced {\n    public static void main(String[] args) {\n        int[] numbers = {64, 34, 25, 12, 22, 11, 90};\n        \n        System.out.println(\"元の配列:\");\n        for (int num : numbers) {\n            System.out.print(num + \" \");\n        }\n        System.out.println();\n        \n        // バブルソート\n        for (int i = 0; i < numbers.length - 1; i++) {\n            for (int j = 0; j < numbers.length - 1 - i; j++) {\n                if (numbers[j] > numbers[j + 1]) {\n                    int temp = numbers[j];\n                    numbers[j] = numbers[j + 1];\n                    numbers[j + 1] = temp;\n                }\n            }\n        }\n        \n        System.out.println(\"ソート後:\");\n        for (int num : numbers) {\n            System.out.print(num + \" \");\n        }\n        System.out.println();\n        \n        // 50以上の数の個数\n        int count = 0;\n        for (int num : numbers) {\n            if (num >= 50) {\n                count++;\n            }\n        }\n        System.out.println(\"50以上の数: \" + count + \"個\");\n    }\n}",
      initialCode: "public class ArrayAdvanced {\n    public static void main(String[] args) {\n        // 配列の応用処理を書いてください\n        \n    }\n}",
      solution: "public class ArrayAdvanced {\n    public static void main(String[] args) {\n        int[] scores = {85, 92, 78, 95, 88};\n        \n        // 最大値と最小値\n        int max = scores[0];\n        int min = scores[0];\n        int sum = 0;\n        \n        for (int score : scores) {\n            if (score > max) max = score;\n            if (score < min) min = score;\n            sum += score;\n        }\n        \n        double average = (double) sum / scores.length;\n        \n        System.out.println(\"最高点: \" + max);\n        System.out.println(\"最低点: \" + min);\n        System.out.println(\"平均点: \" + average);\n        \n        // 平均以上の人数\n        int aboveAverage = 0;\n        for (int score : scores) {\n            if (score >= average) {\n                aboveAverage++;\n            }\n        }\n        System.out.println(\"平均以上: \" + aboveAverage + \"人\");\n    }\n}",
      hints: ["最大値・最小値は最初の要素で初期化", "平均は合計を配列長で割る", "条件に合う要素の個数をカウント"]
    },
    exercises: [{
      id: 35,
      title: "成績統計システム",
      description: "scores配列{85, 92, 78, 95, 88}で最高点、最低点、平均点、平均以上の人数を計算して出力してください",
      initialCode: "public class GradeStatistics {\n    public static void main(String[] args) {\n        // ここに統計処理を書いてください\n        \n    }\n}",
      expectedOutput: "最高点: 95\n最低点: 78\n平均点: 87.6\n平均以上: 3人",
      solution: "public class GradeStatistics {\n    public static void main(String[] args) {\n        int[] scores = {85, 92, 78, 95, 88};\n        \n        // 最大値と最小値\n        int max = scores[0];\n        int min = scores[0];\n        int sum = 0;\n        \n        for (int score : scores) {\n            if (score > max) max = score;\n            if (score < min) min = score;\n            sum += score;\n        }\n        \n        double average = (double) sum / scores.length;\n        \n        System.out.println(\"最高点: \" + max);\n        System.out.println(\"最低点: \" + min);\n        System.out.println(\"平均点: \" + average);\n        \n        // 平均以上の人数\n        int aboveAverage = 0;\n        for (int score : scores) {\n            if (score >= average) {\n                aboveAverage++;\n            }\n        }\n        System.out.println(\"平均以上: \" + aboveAverage + \"人\");\n    }\n}",
      hints: ["int[] scores = {85, 92, 78, 95, 88};", "最大値・最小値を追跡しながらループ", "平均と各スコアを比較してカウント"],
      testCases: [{input: "", expectedOutput: "最高点: 95\n最低点: 78\n平均点: 87.6\n平均以上: 3人", description: "配列の応用処理を正しく行う"}]
    }]
  },

  // === レベル7: メソッド（レッスン36-40） ===
  // レッスン36: メソッドの基本
  {
    id: 36,
    title: "メソッドの基本",
    description: "処理をまとめて再利用可能にするメソッドを学ぼう",
    difficulty: "上級",
    duration: "15分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# メソッドの基本\n\nメソッドは処理をまとめて名前を付けたものです。\n同じ処理を何度も書く代わりに、メソッドを呼び出すことで再利用できます。\n\n## メソッドの構成要素\n```java\nアクセス修飾子 [static] 戻り値の型 メソッド名(引数) {\n    // 処理内容\n    return 戻り値; // 必要に応じて\n}\n```\n\n- **public**: どこからでもアクセス可能\n- **static**: オブジェクトを作らずに呼び出し可能\n- **void**: 戻り値がない\n\n## メソッドの呼び出し\n```java\nメソッド名(引数);\n```",
      example: "public class MethodBasics {\n    public static void main(String[] args) {\n        // メソッドの呼び出し\n        greetUser();\n        greetUser();\n        \n        sayHello(\"太郎\");\n        sayHello(\"花子\");\n        \n        showInfo(\"次郎\", 25);\n    }\n    \n    // 引数なし、戻り値なしのメソッド\n    public static void greetUser() {\n        System.out.println(\"こんにちは！\");\n    }\n    \n    // 引数あり、戻り値なしのメソッド\n    public static void sayHello(String name) {\n        System.out.println(\"Hello, \" + name + \"さん！\");\n    }\n    \n    // 複数の引数を持つメソッド\n    public static void showInfo(String name, int age) {\n        System.out.println(\"名前: \" + name);\n        System.out.println(\"年齢: \" + age);\n    }\n}",
      initialCode: "public class MethodBasics {\n    public static void main(String[] args) {\n        // メソッドを呼び出してください\n        \n    }\n    \n    // ここにメソッドを定義してください\n    \n}",
      solution: "public class MethodBasics {\n    public static void main(String[] args) {\n        showWelcome();\n        printName(\"田中太郎\");\n        displayScore(85);\n    }\n    \n    public static void showWelcome() {\n        System.out.println(\"Javaプログラムへようこそ！\");\n    }\n    \n    public static void printName(String name) {\n        System.out.println(\"名前: \" + name);\n    }\n    \n    public static void displayScore(int score) {\n        System.out.println(\"スコア: \" + score);\n    }\n}",
      hints: ["publicとstaticキーワードが必要", "voidは戻り値がないことを示す", "メソッド名は動詞で始めるのが慣習"]
    },
    exercises: [{
      id: 36,
      title: "基本的なメソッド",
      description: "showWelcome()、printName(\"田中太郎\")、displayScore(85)のメソッドを作成して呼び出してください",
      initialCode: "public class MethodExercise {\n    public static void main(String[] args) {\n        // ここにメソッドを呼び出してください\n        \n    }\n    \n    // ここにメソッドを定義してください\n    \n}",
      expectedOutput: "Javaプログラムへようこそ！\n名前: 田中太郎\nスコア: 85",
      solution: "public class MethodExercise {\n    public static void main(String[] args) {\n        showWelcome();\n        printName(\"田中太郎\");\n        displayScore(85);\n    }\n    \n    public static void showWelcome() {\n        System.out.println(\"Javaプログラムへようこそ！\");\n    }\n    \n    public static void printName(String name) {\n        System.out.println(\"名前: \" + name);\n    }\n    \n    public static void displayScore(int score) {\n        System.out.println(\"スコア: \" + score);\n    }\n}",
      hints: ["public static void methodName()", "引数のあるメソッドは括弧内に型と名前を記述"],
      testCases: [{input: "", expectedOutput: "Javaプログラムへようこそ！\n名前: 田中太郎\nスコア: 85", description: "メソッドの基本を正しく使用する"}]
    }]
  },

  // レッスン37: 戻り値を持つメソッド
  {
    id: 37,
    title: "戻り値を持つメソッド",
    description: "計算結果などを返すメソッドを学ぼう",
    difficulty: "上級",
    duration: "15分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# 戻り値を持つメソッド\n\nメソッドは処理結果を呼び出し元に戻すことができます。\nこれを**戻り値**（返り値）と呼びます。\n\n## 戻り値の型\n- **int**: 整数を返す\n- **double**: 小数を返す\n- **String**: 文字列を返す\n- **boolean**: true/falseを返す\n\n## returnキーワード\n```java\npublic static int add(int a, int b) {\n    int result = a + b;\n    return result; // 結果を返す\n}\n```\n\n**重要**: メソッドの戻り値型と return で返す値の型は一致する必要があります。",
      example: "public class ReturnMethods {\n    public static void main(String[] args) {\n        // メソッドの戻り値を変数に代入\n        int sum = add(10, 20);\n        System.out.println(\"合計: \" + sum);\n        \n        // 直接使用\n        System.out.println(\"平均: \" + getAverage(85, 92, 78));\n        \n        // 条件分岐で使用\n        if (isEven(10)) {\n            System.out.println(\"10は偶数です\");\n        }\n        \n        String greeting = createGreeting(\"太郎\");\n        System.out.println(greeting);\n    }\n    \n    public static int add(int a, int b) {\n        return a + b;\n    }\n    \n    public static double getAverage(int a, int b, int c) {\n        return (double)(a + b + c) / 3;\n    }\n    \n    public static boolean isEven(int number) {\n        return number % 2 == 0;\n    }\n    \n    public static String createGreeting(String name) {\n        return \"こんにちは、\" + name + \"さん！\";\n    }\n}",
      initialCode: "public class ReturnMethods {\n    public static void main(String[] args) {\n        // 戻り値を持つメソッドを呼び出してください\n        \n    }\n    \n    // ここに戻り値を持つメソッドを定義してください\n    \n}",
      solution: "public class ReturnMethods {\n    public static void main(String[] args) {\n        int result = multiply(6, 7);\n        System.out.println(\"掛け算の結果: \" + result);\n        \n        double average = calculateAverage(80, 90);\n        System.out.println(\"平均: \" + average);\n        \n        String message = getMessage();\n        System.out.println(message);\n    }\n    \n    public static int multiply(int a, int b) {\n        return a * b;\n    }\n    \n    public static double calculateAverage(int a, int b) {\n        return (double)(a + b) / 2;\n    }\n    \n    public static String getMessage() {\n        return \"Hello, World!\";\n    }\n}",
      hints: ["returnキーワードで値を返す", "戻り値の型とreturnする値の型を一致させる", "戻り値を変数に代入して使用"]
    },
    exercises: [{
      id: 37,
      title: "計算メソッド",
      description: "multiply(6, 7)で掛け算、calculateAverage(80, 90)で平均、getMessage()で\"Hello, World!\"を返すメソッドを作成してください",
      initialCode: "public class CalculationMethods {\n    public static void main(String[] args) {\n        // ここにメソッドを呼び出してください\n        \n    }\n    \n    // ここにメソッドを定義してください\n    \n}",
      expectedOutput: "掛け算の結果: 42\n平均: 85.0\nHello, World!",
      solution: "public class CalculationMethods {\n    public static void main(String[] args) {\n        int result = multiply(6, 7);\n        System.out.println(\"掛け算の結果: \" + result);\n        \n        double average = calculateAverage(80, 90);\n        System.out.println(\"平均: \" + average);\n        \n        String message = getMessage();\n        System.out.println(message);\n    }\n    \n    public static int multiply(int a, int b) {\n        return a * b;\n    }\n    \n    public static double calculateAverage(int a, int b) {\n        return (double)(a + b) / 2;\n    }\n    \n    public static String getMessage() {\n        return \"Hello, World!\";\n    }\n}",
      hints: ["public static int multiply(int a, int b)", "return a * b;", "(double)でキャストして小数の計算"],
      testCases: [{input: "", expectedOutput: "掛け算の結果: 42\n平均: 85.0\nHello, World!", description: "戻り値を持つメソッドを正しく使用する"}]
    }]
  },

  // レッスン38: メソッドの応用
  {
    id: 38,
    title: "メソッドの応用",
    description: "より複雑なメソッドの活用方法を学ぼう",
    difficulty: "上級",
    duration: "18分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# メソッドの応用\n\nメソッドをより効果的に活用する方法を学習します。\n\n## メソッドの組み合わせ\n- 1つのメソッドから別のメソッドを呼び出す\n- 戻り値をそのまま別のメソッドの引数に使用\n\n## 配列を使ったメソッド\n```java\npublic static int getMax(int[] array) {\n    int max = array[0];\n    for (int value : array) {\n        if (value > max) {\n            max = value;\n        }\n    }\n    return max;\n}\n```\n\n## 条件分岐を含むメソッド\n```java\npublic static String getGrade(int score) {\n    if (score >= 90) return \"A\";\n    if (score >= 80) return \"B\";\n    if (score >= 70) return \"C\";\n    return \"D\";\n}\n```",
      example: "public class AdvancedMethods {\n    public static void main(String[] args) {\n        int[] scores = {85, 92, 78, 96, 88};\n        \n        int highest = findMax(scores);\n        int lowest = findMin(scores);\n        double avg = calculateArrayAverage(scores);\n        \n        System.out.println(\"最高点: \" + highest);\n        System.out.println(\"最低点: \" + lowest);\n        System.out.println(\"平均点: \" + avg);\n        \n        // 各スコアの評価\n        for (int score : scores) {\n            String grade = getLetterGrade(score);\n            System.out.println(score + \"点 → \" + grade + \"評価\");\n        }\n    }\n    \n    public static int findMax(int[] array) {\n        int max = array[0];\n        for (int value : array) {\n            if (value > max) {\n                max = value;\n            }\n        }\n        return max;\n    }\n    \n    public static int findMin(int[] array) {\n        int min = array[0];\n        for (int value : array) {\n            if (value < min) {\n                min = value;\n            }\n        }\n        return min;\n    }\n    \n    public static double calculateArrayAverage(int[] array) {\n        int sum = 0;\n        for (int value : array) {\n            sum += value;\n        }\n        return (double) sum / array.length;\n    }\n    \n    public static String getLetterGrade(int score) {\n        if (score >= 90) return \"A\";\n        if (score >= 80) return \"B\";\n        if (score >= 70) return \"C\";\n        if (score >= 60) return \"D\";\n        return \"F\";\n    }\n}",
      initialCode: "public class AdvancedMethods {\n    public static void main(String[] args) {\n        // メソッドの応用を実装してください\n        \n    }\n    \n    // ここに複数のメソッドを定義してください\n    \n}",
      solution: "public class AdvancedMethods {\n    public static void main(String[] args) {\n        int[] numbers = {12, 45, 23, 67, 34};\n        \n        int sum = calculateSum(numbers);\n        System.out.println(\"合計: \" + sum);\n        \n        boolean hasEven = containsEven(numbers);\n        System.out.println(\"偶数を含む: \" + hasEven);\n        \n        int evenCount = countEven(numbers);\n        System.out.println(\"偶数の個数: \" + evenCount);\n    }\n    \n    public static int calculateSum(int[] array) {\n        int sum = 0;\n        for (int value : array) {\n            sum += value;\n        }\n        return sum;\n    }\n    \n    public static boolean containsEven(int[] array) {\n        for (int value : array) {\n            if (value % 2 == 0) {\n                return true;\n            }\n        }\n        return false;\n    }\n    \n    public static int countEven(int[] array) {\n        int count = 0;\n        for (int value : array) {\n            if (value % 2 == 0) {\n                count++;\n            }\n        }\n        return count;\n    }\n}",
      hints: ["配列を引数として受け取る", "ループ処理をメソッド内に実装", "条件に応じて異なる値を返す"]
    },
    exercises: [{
      id: 38,
      title: "配列処理メソッド",
      description: "numbers配列{12, 45, 23, 67, 34}に対して、合計を計算するcalculateSum、偶数を含むかチェックするcontainsEven、偶数の個数を数えるcountEvenメソッドを作成してください",
      initialCode: "public class ArrayMethods {\n    public static void main(String[] args) {\n        // ここに配列処理メソッドを呼び出してください\n        \n    }\n    \n    // ここにメソッドを定義してください\n    \n}",
      expectedOutput: "合計: 181\n偶数を含む: true\n偶数の個数: 2",
      solution: "public class ArrayMethods {\n    public static void main(String[] args) {\n        int[] numbers = {12, 45, 23, 67, 34};\n        \n        int sum = calculateSum(numbers);\n        System.out.println(\"合計: \" + sum);\n        \n        boolean hasEven = containsEven(numbers);\n        System.out.println(\"偶数を含む: \" + hasEven);\n        \n        int evenCount = countEven(numbers);\n        System.out.println(\"偶数の個数: \" + evenCount);\n    }\n    \n    public static int calculateSum(int[] array) {\n        int sum = 0;\n        for (int value : array) {\n            sum += value;\n        }\n        return sum;\n    }\n    \n    public static boolean containsEven(int[] array) {\n        for (int value : array) {\n            if (value % 2 == 0) {\n                return true;\n            }\n        }\n        return false;\n    }\n    \n    public static int countEven(int[] array) {\n        int count = 0;\n        for (int value : array) {\n            if (value % 2 == 0) {\n                count++;\n            }\n        }\n        return count;\n    }\n}",
      hints: ["int[] numbers = {12, 45, 23, 67, 34};", "value % 2 == 0で偶数判定", "forループで配列を処理"],
      testCases: [{input: "", expectedOutput: "合計: 181\n偶数を含む: true\n偶数の個数: 2", description: "メソッドの応用を正しく実装する"}]
    }]
  },

  // レッスン39: メソッドオーバーロード
  {
    id: 39,
    title: "メソッドオーバーロード",
    description: "同じ名前で異なる引数を持つメソッドを学ぼう",
    difficulty: "上級",
    duration: "15分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# メソッドオーバーロード\n\nメソッドオーバーロードは、同じメソッド名で異なる引数を持つ複数のメソッドを定義することです。\n\n## オーバーロードの条件\n1. メソッド名が同じ\n2. 引数の**数**、**型**、**順序**のいずれかが異なる\n3. 戻り値の型のみの違いはオーバーロードにならない\n\n## 例\n```java\npublic static int add(int a, int b) {\n    return a + b;\n}\n\npublic static double add(double a, double b) {\n    return a + b;\n}\n\npublic static int add(int a, int b, int c) {\n    return a + b + c;\n}\n```\n\n呼び出し時に引数の型と数に応じて適切なメソッドが自動選択されます。",
      example: "public class MethodOverloading {\n    public static void main(String[] args) {\n        // 異なるバージョンのprintInfoメソッドを呼び出し\n        printInfo(\"太郎\");\n        printInfo(\"花子\", 25);\n        printInfo(\"次郎\", 30, \"エンジニア\");\n        \n        // 異なるバージョンのcalculateメソッドを呼び出し\n        System.out.println(\"2つの数の合計: \" + calculate(10, 20));\n        System.out.println(\"3つの数の合計: \" + calculate(10, 20, 30));\n        System.out.println(\"小数の合計: \" + calculate(10.5, 20.3));\n    }\n    \n    // 名前のみ\n    public static void printInfo(String name) {\n        System.out.println(\"名前: \" + name);\n    }\n    \n    // 名前と年齢\n    public static void printInfo(String name, int age) {\n        System.out.println(\"名前: \" + name + \", 年齢: \" + age);\n    }\n    \n    // 名前、年齢、職業\n    public static void printInfo(String name, int age, String job) {\n        System.out.println(\"名前: \" + name + \", 年齢: \" + age + \", 職業: \" + job);\n    }\n    \n    // 2つのint\n    public static int calculate(int a, int b) {\n        return a + b;\n    }\n    \n    // 3つのint\n    public static int calculate(int a, int b, int c) {\n        return a + b + c;\n    }\n    \n    // 2つのdouble\n    public static double calculate(double a, double b) {\n        return a + b;\n    }\n}",
      initialCode: "public class MethodOverloading {\n    public static void main(String[] args) {\n        // オーバーロードされたメソッドを呼び出してください\n        \n    }\n    \n    // ここにオーバーロードされたメソッドを定義してください\n    \n}",
      solution: "public class MethodOverloading {\n    public static void main(String[] args) {\n        display(\"Hello\");\n        display(42);\n        display(\"値\", 100);\n    }\n    \n    public static void display(String message) {\n        System.out.println(\"文字列: \" + message);\n    }\n    \n    public static void display(int number) {\n        System.out.println(\"数値: \" + number);\n    }\n    \n    public static void display(String label, int value) {\n        System.out.println(label + \": \" + value);\n    }\n}",
      hints: ["同じメソッド名で異なる引数", "引数の型と数で区別される", "適切なメソッドが自動選択される"]
    },
    exercises: [{
      id: 39,
      title: "オーバーロード実装",
      description: "display(\"Hello\")、display(42)、display(\"値\", 100)のオーバーロードされたメソッドを作成してください",
      initialCode: "public class OverloadExercise {\n    public static void main(String[] args) {\n        // ここにオーバーロードされたメソッドを呼び出してください\n        \n    }\n    \n    // ここにオーバーロードされたメソッドを定義してください\n    \n}",
      expectedOutput: "文字列: Hello\n数値: 42\n値: 100",
      solution: "public class OverloadExercise {\n    public static void main(String[] args) {\n        display(\"Hello\");\n        display(42);\n        display(\"値\", 100);\n    }\n    \n    public static void display(String message) {\n        System.out.println(\"文字列: \" + message);\n    }\n    \n    public static void display(int number) {\n        System.out.println(\"数値: \" + number);\n    }\n    \n    public static void display(String label, int value) {\n        System.out.println(label + \": \" + value);\n    }\n}",
      hints: ["public static void display(String message)", "public static void display(int number)", "public static void display(String label, int value)"],
      testCases: [{input: "", expectedOutput: "文字列: Hello\n数値: 42\n値: 100", description: "メソッドオーバーロードを正しく実装する"}]
    }]
  },

  // レッスン40: 再帰メソッド
  {
    id: 40,
    title: "再帰メソッド",
    description: "自分自身を呼び出すメソッドを学ぼう",
    difficulty: "上級",
    duration: "20分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# 再帰メソッド\n\n再帰メソッドは自分自身を呼び出すメソッドです。\n複雑な問題をより小さな同じ種類の問題に分解して解決します。\n\n## 再帰の重要な要素\n1. **基底条件**: 再帰を止める条件\n2. **再帰呼び出し**: 自分自身を呼び出す部分\n\n## 階乗の例\n```java\npublic static int factorial(int n) {\n    if (n <= 1) {\n        return 1; // 基底条件\n    }\n    return n * factorial(n - 1); // 再帰呼び出し\n}\n```\n\n**注意**: 基底条件を正しく設定しないと無限ループになります。",
      example: "public class RecursiveMethods {\n    public static void main(String[] args) {\n        // 階乗の計算\n        int n = 5;\n        System.out.println(n + \"! = \" + factorial(n));\n        \n        // フィボナッチ数列\n        System.out.println(\"フィボナッチ数列(10項目): \" + fibonacci(10));\n        \n        // カウントダウン\n        System.out.println(\"カウントダウン:\");\n        countdown(5);\n        \n        // 累乗計算\n        System.out.println(\"2の8乗: \" + power(2, 8));\n    }\n    \n    // 階乗を計算\n    public static int factorial(int n) {\n        if (n <= 1) {\n            return 1;\n        }\n        return n * factorial(n - 1);\n    }\n    \n    // フィボナッチ数列\n    public static int fibonacci(int n) {\n        if (n <= 1) {\n            return n;\n        }\n        return fibonacci(n - 1) + fibonacci(n - 2);\n    }\n    \n    // カウントダウン\n    public static void countdown(int n) {\n        if (n <= 0) {\n            System.out.println(\"発射！\");\n            return;\n        }\n        System.out.println(n);\n        countdown(n - 1);\n    }\n    \n    // 累乗計算\n    public static int power(int base, int exponent) {\n        if (exponent == 0) {\n            return 1;\n        }\n        return base * power(base, exponent - 1);\n    }\n}",
      initialCode: "public class RecursiveMethods {\n    public static void main(String[] args) {\n        // 再帰メソッドを呼び出してください\n        \n    }\n    \n    // ここに再帰メソッドを定義してください\n    \n}",
      solution: "public class RecursiveMethods {\n    public static void main(String[] args) {\n        int result = sum(5);\n        System.out.println(\"1から5までの合計: \" + result);\n        \n        System.out.println(\"数を数える:\");\n        countUp(1, 3);\n    }\n    \n    public static int sum(int n) {\n        if (n <= 1) {\n            return 1;\n        }\n        return n + sum(n - 1);\n    }\n    \n    public static void countUp(int current, int max) {\n        if (current > max) {\n            return;\n        }\n        System.out.println(current);\n        countUp(current + 1, max);\n    }\n}",
      hints: ["基底条件を必ず設定", "問題をより小さな同じ問題に分解", "無限ループに注意"]
    },
    exercises: [{
      id: 40,
      title: "再帰の実装",
      description: "1からnまでの合計を計算するsum(5)と、1から3まで数えるcountUp(1, 3)の再帰メソッドを作成してください",
      initialCode: "public class RecursiveExercise {\n    public static void main(String[] args) {\n        // ここに再帰メソッドを呼び出してください\n        \n    }\n    \n    // ここに再帰メソッドを定義してください\n    \n}",
      expectedOutput: "1から5までの合計: 15\n数を数える:\n1\n2\n3",
      solution: "public class RecursiveExercise {\n    public static void main(String[] args) {\n        int result = sum(5);\n        System.out.println(\"1から5までの合計: \" + result);\n        \n        System.out.println(\"数を数える:\");\n        countUp(1, 3);\n    }\n    \n    public static int sum(int n) {\n        if (n <= 1) {\n            return 1;\n        }\n        return n + sum(n - 1);\n    }\n    \n    public static void countUp(int current, int max) {\n        if (current > max) {\n            return;\n        }\n        System.out.println(current);\n        countUp(current + 1, max);\n    }\n}",
      hints: ["if (n <= 1) return 1; で基底条件", "return n + sum(n - 1); で再帰", "current > maxで終了条件"],
      testCases: [{input: "", expectedOutput: "1から5までの合計: 15\n数を数える:\n1\n2\n3", description: "再帰メソッドを正しく実装する"}]
    }]
  },

  // === レベル8: クラスとオブジェクト（レッスン41-45） ===
  // レッスン41: クラスの基本
  {
    id: 41,
    title: "クラスの基本",
    description: "オブジェクト指向プログラミングの基本であるクラスを学ぼう",
    difficulty: "上級",
    duration: "20分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# クラスの基本\n\nクラスはオブジェクト指向プログラミングの中核概念です。\nクラスは**データ（フィールド）**と**処理（メソッド）**をまとめたものです。\n\n## クラスの構成要素\n1. **フィールド**: データを保存する変数\n2. **メソッド**: データを操作する処理\n3. **コンストラクタ**: オブジェクトを初期化する特別なメソッド\n\n## 基本構文\n```java\nclass クラス名 {\n    // フィールド\n    private データ型 変数名;\n    \n    // コンストラクタ\n    public クラス名(引数) {\n        // 初期化処理\n    }\n    \n    // メソッド\n    public 戻り値の型 メソッド名() {\n        // 処理内容\n    }\n}\n```",
      example: "// Studentクラスの定義\nclass Student {\n    private String name;\n    private int age;\n    private int score;\n    \n    // コンストラクタ\n    public Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n        this.score = 0;\n    }\n    \n    // メソッド\n    public void setScore(int score) {\n        this.score = score;\n    }\n    \n    public int getScore() {\n        return score;\n    }\n    \n    public void showInfo() {\n        System.out.println(\"名前: \" + name);\n        System.out.println(\"年齢: \" + age);\n        System.out.println(\"スコア: \" + score);\n    }\n}\n\npublic class ClassBasics {\n    public static void main(String[] args) {\n        // オブジェクトの作成\n        Student student = new Student(\"太郎\", 20);\n        \n        // メソッドの呼び出し\n        student.setScore(85);\n        student.showInfo();\n    }\n}",
      initialCode: "class Person {\n    // ここにクラスの内容を定義してください\n    \n}\n\npublic class ClassBasics {\n    public static void main(String[] args) {\n        // ここにオブジェクトを作成して使用してください\n        \n    }\n}",
      solution: "class Person {\n    private String name;\n    private int age;\n    \n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    public void introduce() {\n        System.out.println(\"こんにちは、\" + name + \"です。\" + age + \"歳です。\");\n    }\n    \n    public String getName() {\n        return name;\n    }\n    \n    public int getAge() {\n        return age;\n    }\n}\n\npublic class ClassBasics {\n    public static void main(String[] args) {\n        Person person = new Person(\"田中太郎\", 25);\n        person.introduce();\n        System.out.println(\"名前: \" + person.getName());\n        System.out.println(\"年齢: \" + person.getAge());\n    }\n}",
      hints: ["privateで変数を隠蔽", "publicでメソッドを公開", "thisキーワードでフィールドを参照", "newキーワードでオブジェクト作成"]
    },
    exercises: [{
      id: 41,
      title: "Personクラス作成",
      description: "name(文字列)とage(整数)のフィールドを持つPersonクラスを作成し、introduce()メソッドで自己紹介、getName()とgetAge()でフィールドを取得してください",
      initialCode: "class Person {\n    // ここにクラスの内容を定義してください\n    \n}\n\npublic class PersonClass {\n    public static void main(String[] args) {\n        // ここにオブジェクトを作成して使用してください\n        \n    }\n}",
      expectedOutput: "こんにちは、田中太郎です。25歳です。\n名前: 田中太郎\n年齢: 25",
      solution: "class Person {\n    private String name;\n    private int age;\n    \n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    public void introduce() {\n        System.out.println(\"こんにちは、\" + name + \"です。\" + age + \"歳です。\");\n    }\n    \n    public String getName() {\n        return name;\n    }\n    \n    public int getAge() {\n        return age;\n    }\n}\n\npublic class PersonClass {\n    public static void main(String[] args) {\n        Person person = new Person(\"田中太郎\", 25);\n        person.introduce();\n        System.out.println(\"名前: \" + person.getName());\n        System.out.println(\"年齢: \" + person.getAge());\n    }\n}",
      hints: ["class Person { private String name; private int age; }", "public Person(String name, int age) { this.name = name; this.age = age; }", "Person person = new Person(\"田中太郎\", 25);"],
      testCases: [{input: "", expectedOutput: "こんにちは、田中太郎です。25歳です。\n名前: 田中太郎\n年齢: 25", description: "クラスの基本を正しく実装する"}]
    }]
  },

  // レッスン42: カプセル化
  {
    id: 42,
    title: "カプセル化",
    description: "データを隠蔽し、メソッドでアクセスするカプセル化を学ぼう",
    difficulty: "上級",
    duration: "18分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# カプセル化\n\nカプセル化はオブジェクト指向の重要な概念の一つです。\nデータを隠蔽し、メソッドを通してのみアクセスできるようにします。\n\n## アクセス修飾子\n- **private**: クラス内部でのみアクセス可能\n- **public**: どこからでもアクセス可能\n- **protected**: 同一パッケージ・継承関係でアクセス可能\n\n## ゲッターとセッター\n```java\npublic class BankAccount {\n    private int balance; // 残高を隠蔽\n    \n    // セッター（検証付き）\n    public void setBalance(int balance) {\n        if (balance >= 0) {\n            this.balance = balance;\n        }\n    }\n    \n    // ゲッター\n    public int getBalance() {\n        return balance;\n    }\n}\n```",
      example: "class BankAccount {\n    private String accountNumber;\n    private String ownerName;\n    private int balance;\n    \n    public BankAccount(String accountNumber, String ownerName) {\n        this.accountNumber = accountNumber;\n        this.ownerName = ownerName;\n        this.balance = 0;\n    }\n    \n    // 入金\n    public void deposit(int amount) {\n        if (amount > 0) {\n            balance += amount;\n            System.out.println(amount + \"円を入金しました。\");\n        } else {\n            System.out.println(\"正の金額を入力してください。\");\n        }\n    }\n    \n    // 出金\n    public boolean withdraw(int amount) {\n        if (amount > 0 && amount <= balance) {\n            balance -= amount;\n            System.out.println(amount + \"円を出金しました。\");\n            return true;\n        } else {\n            System.out.println(\"出金できません。\");\n            return false;\n        }\n    }\n    \n    // 残高照会\n    public int getBalance() {\n        return balance;\n    }\n    \n    public void showAccountInfo() {\n        System.out.println(\"口座番号: \" + accountNumber);\n        System.out.println(\"名義人: \" + ownerName);\n        System.out.println(\"残高: \" + balance + \"円\");\n    }\n}\n\npublic class Encapsulation {\n    public static void main(String[] args) {\n        BankAccount account = new BankAccount(\"123-456\", \"田中太郎\");\n        \n        account.deposit(10000);\n        account.withdraw(3000);\n        account.showAccountInfo();\n    }\n}",
      initialCode: "class Car {\n    // ここにカプセル化されたクラスを定義してください\n    \n}\n\npublic class Encapsulation {\n    public static void main(String[] args) {\n        // ここでCarオブジェクトを使用してください\n        \n    }\n}",
      solution: "class Car {\n    private String brand;\n    private int speed;\n    private boolean isRunning;\n    \n    public Car(String brand) {\n        this.brand = brand;\n        this.speed = 0;\n        this.isRunning = false;\n    }\n    \n    public void start() {\n        if (!isRunning) {\n            isRunning = true;\n            System.out.println(brand + \"を始動しました。\");\n        } else {\n            System.out.println(\"すでにエンジンが動いています。\");\n        }\n    }\n    \n    public void accelerate(int amount) {\n        if (isRunning && amount > 0) {\n            speed += amount;\n            System.out.println(\"加速しました。現在の速度: \" + speed + \"km/h\");\n        }\n    }\n    \n    public int getSpeed() {\n        return speed;\n    }\n    \n    public String getBrand() {\n        return brand;\n    }\n}\n\npublic class Encapsulation {\n    public static void main(String[] args) {\n        Car car = new Car(\"Toyota\");\n        car.start();\n        car.accelerate(30);\n        System.out.println(\"ブランド: \" + car.getBrand());\n        System.out.println(\"速度: \" + car.getSpeed() + \"km/h\");\n    }\n}",
      hints: ["privateでフィールドを隠蔽", "publicメソッドでアクセス制御", "適切な検証を追加"]
    },
    exercises: [{
      id: 42,
      title: "Car クラスの実装",
      description: "brand、speed、isRunningのフィールドを持つCarクラスを作成し、start()、accelerate(30)メソッドと各フィールドのゲッターを実装してください",
      initialCode: "class Car {\n    // ここにカプセル化されたクラスを定義してください\n    \n}\n\npublic class CarClass {\n    public static void main(String[] args) {\n        // ここでCarオブジェクトを使用してください\n        \n    }\n}",
      expectedOutput: "Toyotaを始動しました。\n加速しました。現在の速度: 30km/h\nブランド: Toyota\n速度: 30km/h",
      solution: "class Car {\n    private String brand;\n    private int speed;\n    private boolean isRunning;\n    \n    public Car(String brand) {\n        this.brand = brand;\n        this.speed = 0;\n        this.isRunning = false;\n    }\n    \n    public void start() {\n        if (!isRunning) {\n            isRunning = true;\n            System.out.println(brand + \"を始動しました。\");\n        } else {\n            System.out.println(\"すでにエンジンが動いています。\");\n        }\n    }\n    \n    public void accelerate(int amount) {\n        if (isRunning && amount > 0) {\n            speed += amount;\n            System.out.println(\"加速しました。現在の速度: \" + speed + \"km/h\");\n        }\n    }\n    \n    public int getSpeed() {\n        return speed;\n    }\n    \n    public String getBrand() {\n        return brand;\n    }\n}\n\npublic class CarClass {\n    public static void main(String[] args) {\n        Car car = new Car(\"Toyota\");\n        car.start();\n        car.accelerate(30);\n        System.out.println(\"ブランド: \" + car.getBrand());\n        System.out.println(\"速度: \" + car.getSpeed() + \"km/h\");\n    }\n}",
      hints: ["Car car = new Car(\"Toyota\");", "car.start(); car.accelerate(30);", "private フィールドをpublic メソッドでアクセス"],
      testCases: [{input: "", expectedOutput: "Toyotaを始動しました。\n加速しました。現在の速度: 30km/h\nブランド: Toyota\n速度: 30km/h", description: "カプセル化を正しく実装する"}]
    }]
  },

  // レッスン43: コンストラクタ
  {
    id: 43,
    title: "コンストラクタ",
    description: "オブジェクトの初期化を行うコンストラクタを詳しく学ぼう",
    difficulty: "上級",
    duration: "15分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# コンストラクタ\n\nコンストラクタはオブジェクトの初期化を行う特別なメソッドです。\nnewキーワードでオブジェクトを作成するときに自動的に呼び出されます。\n\n## コンストラクタの特徴\n- クラス名と同じ名前\n- 戻り値の型を書かない\n- オブジェクト作成時に自動実行\n\n## デフォルトコンストラクタ\n```java\npublic class Person {\n    // 引数なしコンストラクタ（デフォルト）\n    public Person() {\n        // 初期化処理\n    }\n}\n```\n\n## パラメータ付きコンストラクタ\n```java\npublic Person(String name, int age) {\n    this.name = name;\n    this.age = age;\n}\n```",
      example: "class Book {\n    private String title;\n    private String author;\n    private int pages;\n    private boolean isAvailable;\n    \n    // デフォルトコンストラクタ\n    public Book() {\n        this.title = \"未設定\";\n        this.author = \"未設定\";\n        this.pages = 0;\n        this.isAvailable = true;\n        System.out.println(\"デフォルトの本を作成しました。\");\n    }\n    \n    // パラメータ付きコンストラクタ\n    public Book(String title, String author, int pages) {\n        this.title = title;\n        this.author = author;\n        this.pages = pages;\n        this.isAvailable = true;\n        System.out.println(\"本『\" + title + \"』を作成しました。\");\n    }\n    \n    // オーバーロードされたコンストラクタ\n    public Book(String title, String author) {\n        this(title, author, 0); // 他のコンストラクタを呼び出し\n    }\n    \n    public void showInfo() {\n        System.out.println(\"タイトル: \" + title);\n        System.out.println(\"著者: \" + author);\n        System.out.println(\"ページ数: \" + pages);\n        System.out.println(\"貸出可能: \" + (isAvailable ? \"可能\" : \"不可\"));\n    }\n}\n\npublic class Constructor {\n    public static void main(String[] args) {\n        Book book1 = new Book();\n        Book book2 = new Book(\"Javaプログラミング\", \"田中太郎\", 300);\n        Book book3 = new Book(\"基礎から学ぶJava\", \"佐藤花子\");\n        \n        book1.showInfo();\n        System.out.println(\"---\");\n        book2.showInfo();\n    }\n}",
      initialCode: "class Rectangle {\n    // ここにコンストラクタを含むクラスを定義してください\n    \n}\n\npublic class Constructor {\n    public static void main(String[] args) {\n        // ここで異なるコンストラクタを使用してください\n        \n    }\n}",
      solution: "class Rectangle {\n    private int width;\n    private int height;\n    \n    public Rectangle() {\n        this.width = 1;\n        this.height = 1;\n        System.out.println(\"デフォルト長方形を作成しました。\");\n    }\n    \n    public Rectangle(int side) {\n        this.width = side;\n        this.height = side;\n        System.out.println(\"正方形を作成しました。\");\n    }\n    \n    public Rectangle(int width, int height) {\n        this.width = width;\n        this.height = height;\n        System.out.println(\"長方形を作成しました。\");\n    }\n    \n    public int getArea() {\n        return width * height;\n    }\n    \n    public void showInfo() {\n        System.out.println(\"幅: \" + width + \", 高さ: \" + height + \", 面積: \" + getArea());\n    }\n}\n\npublic class Constructor {\n    public static void main(String[] args) {\n        Rectangle rect1 = new Rectangle();\n        Rectangle rect2 = new Rectangle(5);\n        Rectangle rect3 = new Rectangle(4, 6);\n        \n        rect1.showInfo();\n        rect2.showInfo();\n        rect3.showInfo();\n    }\n}",
      hints: ["コンストラクタ名はクラス名と同じ", "戻り値の型は書かない", "this()で他のコンストラクタを呼び出し"]
    },
    exercises: [{
      id: 43,
      title: "Rectangle クラスの実装",
      description: "デフォルト(1x1)、正方形(一辺)、長方形(幅x高さ)の3つのコンストラクタを持つRectangleクラスを作成してください",
      initialCode: "class Rectangle {\n    // ここにコンストラクタを含むクラスを定義してください\n    \n}\n\npublic class RectangleClass {\n    public static void main(String[] args) {\n        // ここで異なるコンストラクタを使用してください\n        \n    }\n}",
      expectedOutput: "デフォルト長方形を作成しました。\n正方形を作成しました。\n長方形を作成しました。\n幅: 1, 高さ: 1, 面積: 1\n幅: 5, 高さ: 5, 面積: 25\n幅: 4, 高さ: 6, 面積: 24",
      solution: "class Rectangle {\n    private int width;\n    private int height;\n    \n    public Rectangle() {\n        this.width = 1;\n        this.height = 1;\n        System.out.println(\"デフォルト長方形を作成しました。\");\n    }\n    \n    public Rectangle(int side) {\n        this.width = side;\n        this.height = side;\n        System.out.println(\"正方形を作成しました。\");\n    }\n    \n    public Rectangle(int width, int height) {\n        this.width = width;\n        this.height = height;\n        System.out.println(\"長方形を作成しました。\");\n    }\n    \n    public int getArea() {\n        return width * height;\n    }\n    \n    public void showInfo() {\n        System.out.println(\"幅: \" + width + \", 高さ: \" + height + \", 面積: \" + getArea());\n    }\n}\n\npublic class RectangleClass {\n    public static void main(String[] args) {\n        Rectangle rect1 = new Rectangle();\n        Rectangle rect2 = new Rectangle(5);\n        Rectangle rect3 = new Rectangle(4, 6);\n        \n        rect1.showInfo();\n        rect2.showInfo();\n        rect3.showInfo();\n    }\n}",
      hints: ["public Rectangle() { this.width = 1; this.height = 1; }", "public Rectangle(int side) { this.width = side; this.height = side; }", "public Rectangle(int width, int height)"],
      testCases: [{input: "", expectedOutput: "デフォルト長方形を作成しました。\n正方形を作成しました。\n長方形を作成しました。\n幅: 1, 高さ: 1, 面積: 1\n幅: 5, 高さ: 5, 面積: 25\n幅: 4, 高さ: 6, 面積: 24", description: "コンストラクタを正しく実装する"}]
    }]
  },

  // レッスン44: 静的メンバー
  {
    id: 44,
    title: "静的メンバー（static）",
    description: "クラス共通のフィールドとメソッドであるstaticを学ぼう",
    difficulty: "上級",
    duration: "15分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# 静的メンバー（static）\n\nstaticキーワードを使うと、クラス共通のフィールドやメソッドを定義できます。\nstaticメンバーはオブジェクトを作成せずにアクセスできます。\n\n## staticフィールド\n- クラス全体で共有される\n- すべてのインスタンスで同じ値\n\n## staticメソッド\n- オブジェクトを作らずに呼び出し可能\n- インスタンスフィールドにアクセス不可\n\n## 使用例\n```java\npublic class Counter {\n    private static int count = 0; // クラス変数\n    \n    public static void increment() { // クラスメソッド\n        count++;\n    }\n    \n    public static int getCount() {\n        return count;\n    }\n}\n\n// 使用方法\nCounter.increment(); // オブジェクト不要\nint total = Counter.getCount();\n```",
      example: "class MathUtils {\n    // 定数\n    public static final double PI = 3.14159;\n    \n    // staticメソッド\n    public static double circleArea(double radius) {\n        return PI * radius * radius;\n    }\n    \n    public static double max(double a, double b) {\n        return (a > b) ? a : b;\n    }\n    \n    public static int factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n}\n\nclass Student {\n    private String name;\n    private int id;\n    private static int nextId = 1; // 自動採番用\n    private static int totalStudents = 0; // 総数カウント\n    \n    public Student(String name) {\n        this.name = name;\n        this.id = nextId++;\n        totalStudents++;\n    }\n    \n    public static int getTotalStudents() {\n        return totalStudents;\n    }\n    \n    public void showInfo() {\n        System.out.println(\"ID: \" + id + \", 名前: \" + name);\n    }\n}\n\npublic class StaticMembers {\n    public static void main(String[] args) {\n        // staticメソッドの使用\n        System.out.println(\"円の面積: \" + MathUtils.circleArea(5.0));\n        System.out.println(\"最大値: \" + MathUtils.max(10, 15));\n        \n        // 学生の作成\n        Student s1 = new Student(\"太郎\");\n        Student s2 = new Student(\"花子\");\n        \n        s1.showInfo();\n        s2.showInfo();\n        System.out.println(\"総学生数: \" + Student.getTotalStudents());\n    }\n}",
      initialCode: "class Calculator {\n    // ここにstaticメンバーを定義してください\n    \n}\n\npublic class StaticMembers {\n    public static void main(String[] args) {\n        // ここでstaticメンバーを使用してください\n        \n    }\n}",
      solution: "class Calculator {\n    public static final String VERSION = \"1.0\";\n    private static int operationCount = 0;\n    \n    public static int add(int a, int b) {\n        operationCount++;\n        return a + b;\n    }\n    \n    public static int multiply(int a, int b) {\n        operationCount++;\n        return a * b;\n    }\n    \n    public static int getOperationCount() {\n        return operationCount;\n    }\n    \n    public static void showVersion() {\n        System.out.println(\"Calculator Version: \" + VERSION);\n    }\n}\n\npublic class StaticMembers {\n    public static void main(String[] args) {\n        Calculator.showVersion();\n        \n        int sum = Calculator.add(10, 5);\n        int product = Calculator.multiply(4, 3);\n        \n        System.out.println(\"加算結果: \" + sum);\n        System.out.println(\"乗算結果: \" + product);\n        System.out.println(\"実行された操作数: \" + Calculator.getOperationCount());\n    }\n}",
      hints: ["staticメソッドはクラス名.メソッド名()で呼び出し", "staticフィールドはクラス全体で共有", "finalで定数を定義"]
    },
    exercises: [{
      id: 44,
      title: "Calculator クラスの実装",
      description: "VERSION定数、operationCount、add(10,5)、multiply(4,3)、getOperationCount()、showVersion()を持つCalculatorクラスを作成してください",
      initialCode: "class Calculator {\n    // ここにstaticメンバーを定義してください\n    \n}\n\npublic class CalculatorClass {\n    public static void main(String[] args) {\n        // ここでstaticメンバーを使用してください\n        \n    }\n}",
      expectedOutput: "Calculator Version: 1.0\n加算結果: 15\n乗算結果: 12\n実行された操作数: 2",
      solution: "class Calculator {\n    public static final String VERSION = \"1.0\";\n    private static int operationCount = 0;\n    \n    public static int add(int a, int b) {\n        operationCount++;\n        return a + b;\n    }\n    \n    public static int multiply(int a, int b) {\n        operationCount++;\n        return a * b;\n    }\n    \n    public static int getOperationCount() {\n        return operationCount;\n    }\n    \n    public static void showVersion() {\n        System.out.println(\"Calculator Version: \" + VERSION);\n    }\n}\n\npublic class CalculatorClass {\n    public static void main(String[] args) {\n        Calculator.showVersion();\n        \n        int sum = Calculator.add(10, 5);\n        int product = Calculator.multiply(4, 3);\n        \n        System.out.println(\"加算結果: \" + sum);\n        System.out.println(\"乗算結果: \" + product);\n        System.out.println(\"実行された操作数: \" + Calculator.getOperationCount());\n    }\n}",
      hints: ["public static final String VERSION = \"1.0\";", "private static int operationCount = 0;", "Calculator.showVersion(); Calculator.add(10, 5);"],
      testCases: [{input: "", expectedOutput: "Calculator Version: 1.0\n加算結果: 15\n乗算結果: 12\n実行された操作数: 2", description: "静的メンバーを正しく実装する"}]
    }]
  },

  // レッスン45: オブジェクトの応用
  {
    id: 45,
    title: "オブジェクトの応用",
    description: "複数のオブジェクトを組み合わせた実践的なプログラムを作成しよう",
    difficulty: "上級",
    duration: "25分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# オブジェクトの応用\n\n実際のアプリケーションでは、複数のクラスを組み合わせて複雑な処理を実現します。\nオブジェクト同士が相互に作用する設計を学習します。\n\n## 主要な概念\n1. **コンポジション**: オブジェクトが他のオブジェクトを含む\n2. **オブジェクトの配列**: 同じ型のオブジェクトを配列で管理\n3. **オブジェクト間の関係**: オブジェクト同士の連携\n\n## 実践例: 図書館管理システム\n```java\nclass Library {\n    private Book[] books;\n    private int bookCount;\n    \n    public void addBook(Book book) {\n        books[bookCount++] = book;\n    }\n    \n    public Book findBook(String title) {\n        for (Book book : books) {\n            if (book.getTitle().equals(title)) {\n                return book;\n            }\n        }\n        return null;\n    }\n}\n```",
      example: "class Product {\n    private String name;\n    private double price;\n    private int stock;\n    \n    public Product(String name, double price, int stock) {\n        this.name = name;\n        this.price = price;\n        this.stock = stock;\n    }\n    \n    public boolean purchase(int quantity) {\n        if (quantity <= stock) {\n            stock -= quantity;\n            return true;\n        }\n        return false;\n    }\n    \n    public double getPrice() { return price; }\n    public String getName() { return name; }\n    public int getStock() { return stock; }\n}\n\nclass ShoppingCart {\n    private Product[] items;\n    private int[] quantities;\n    private int itemCount;\n    \n    public ShoppingCart() {\n        items = new Product[10];\n        quantities = new int[10];\n        itemCount = 0;\n    }\n    \n    public void addItem(Product product, int quantity) {\n        if (product.purchase(quantity)) {\n            items[itemCount] = product;\n            quantities[itemCount] = quantity;\n            itemCount++;\n            System.out.println(product.getName() + \"を\" + quantity + \"個追加しました。\");\n        } else {\n            System.out.println(\"在庫が不足しています。\");\n        }\n    }\n    \n    public double getTotalPrice() {\n        double total = 0;\n        for (int i = 0; i < itemCount; i++) {\n            total += items[i].getPrice() * quantities[i];\n        }\n        return total;\n    }\n    \n    public void showCart() {\n        System.out.println(\"=== カート内容 ===\");\n        for (int i = 0; i < itemCount; i++) {\n            System.out.println(items[i].getName() + \" x \" + quantities[i] + \n                \" = \" + (items[i].getPrice() * quantities[i]) + \"円\");\n        }\n        System.out.println(\"合計: \" + getTotalPrice() + \"円\");\n    }\n}\n\npublic class ObjectApplication {\n    public static void main(String[] args) {\n        // 商品の作成\n        Product apple = new Product(\"りんご\", 150.0, 10);\n        Product banana = new Product(\"バナナ\", 200.0, 5);\n        \n        // ショッピングカートの使用\n        ShoppingCart cart = new ShoppingCart();\n        cart.addItem(apple, 3);\n        cart.addItem(banana, 2);\n        cart.showCart();\n    }\n}",
      initialCode: "class Account {\n    // ここに銀行口座クラスを定義してください\n    \n}\n\nclass Bank {\n    // ここに銀行クラスを定義してください\n    \n}\n\npublic class ObjectApplication {\n    public static void main(String[] args) {\n        // ここでオブジェクトの応用を実装してください\n        \n    }\n}",
      solution: "class Account {\n    private String accountNumber;\n    private String ownerName;\n    private double balance;\n    \n    public Account(String accountNumber, String ownerName, double initialBalance) {\n        this.accountNumber = accountNumber;\n        this.ownerName = ownerName;\n        this.balance = initialBalance;\n    }\n    \n    public void deposit(double amount) {\n        balance += amount;\n        System.out.println(ownerName + \"の口座に\" + amount + \"円入金しました。\");\n    }\n    \n    public boolean withdraw(double amount) {\n        if (amount <= balance) {\n            balance -= amount;\n            System.out.println(ownerName + \"の口座から\" + amount + \"円出金しました。\");\n            return true;\n        }\n        return false;\n    }\n    \n    public double getBalance() { return balance; }\n    public String getOwnerName() { return ownerName; }\n    public String getAccountNumber() { return accountNumber; }\n}\n\nclass Bank {\n    private Account[] accounts;\n    private int accountCount;\n    \n    public Bank() {\n        accounts = new Account[10];\n        accountCount = 0;\n    }\n    \n    public void addAccount(Account account) {\n        accounts[accountCount++] = account;\n        System.out.println(\"口座を開設しました: \" + account.getOwnerName());\n    }\n    \n    public double getTotalBalance() {\n        double total = 0;\n        for (int i = 0; i < accountCount; i++) {\n            total += accounts[i].getBalance();\n        }\n        return total;\n    }\n    \n    public void showAllAccounts() {\n        System.out.println(\"=== 全口座情報 ===\");\n        for (int i = 0; i < accountCount; i++) {\n            Account acc = accounts[i];\n            System.out.println(acc.getOwnerName() + \": \" + acc.getBalance() + \"円\");\n        }\n        System.out.println(\"銀行総預金額: \" + getTotalBalance() + \"円\");\n    }\n}\n\npublic class ObjectApplication {\n    public static void main(String[] args) {\n        Bank bank = new Bank();\n        \n        Account acc1 = new Account(\"001\", \"田中太郎\", 10000);\n        Account acc2 = new Account(\"002\", \"佐藤花子\", 5000);\n        \n        bank.addAccount(acc1);\n        bank.addAccount(acc2);\n        \n        acc1.deposit(3000);\n        acc2.withdraw(2000);\n        \n        bank.showAllAccounts();\n    }\n}",
      hints: ["オブジェクトの配列で複数のインスタンスを管理", "メソッドでオブジェクト間の連携を実現", "カプセル化でデータを保護"]
    },
    exercises: [{
      id: 45,
      title: "銀行システムの実装",
      description: "Account（口座）とBank（銀行）クラスを作成し、口座開設、入出金、全口座表示の機能を実装してください",
      initialCode: "class Account {\n    // ここに銀行口座クラスを定義してください\n    \n}\n\nclass Bank {\n    // ここに銀行クラスを定義してください\n    \n}\n\npublic class BankSystem {\n    public static void main(String[] args) {\n        // ここでオブジェクトの応用を実装してください\n        \n    }\n}",
      expectedOutput: "口座を開設しました: 田中太郎\n口座を開設しました: 佐藤花子\n田中太郎の口座に3000.0円入金しました。\n佐藤花子の口座から2000.0円出金しました。\n=== 全口座情報 ===\n田中太郎: 13000.0円\n佐藤花子: 3000.0円\n銀行総預金額: 16000.0円",
      solution: "class Account {\n    private String accountNumber;\n    private String ownerName;\n    private double balance;\n    \n    public Account(String accountNumber, String ownerName, double initialBalance) {\n        this.accountNumber = accountNumber;\n        this.ownerName = ownerName;\n        this.balance = initialBalance;\n    }\n    \n    public void deposit(double amount) {\n        balance += amount;\n        System.out.println(ownerName + \"の口座に\" + amount + \"円入金しました。\");\n    }\n    \n    public boolean withdraw(double amount) {\n        if (amount <= balance) {\n            balance -= amount;\n            System.out.println(ownerName + \"の口座から\" + amount + \"円出金しました。\");\n            return true;\n        }\n        return false;\n    }\n    \n    public double getBalance() { return balance; }\n    public String getOwnerName() { return ownerName; }\n    public String getAccountNumber() { return accountNumber; }\n}\n\nclass Bank {\n    private Account[] accounts;\n    private int accountCount;\n    \n    public Bank() {\n        accounts = new Account[10];\n        accountCount = 0;\n    }\n    \n    public void addAccount(Account account) {\n        accounts[accountCount++] = account;\n        System.out.println(\"口座を開設しました: \" + account.getOwnerName());\n    }\n    \n    public double getTotalBalance() {\n        double total = 0;\n        for (int i = 0; i < accountCount; i++) {\n            total += accounts[i].getBalance();\n        }\n        return total;\n    }\n    \n    public void showAllAccounts() {\n        System.out.println(\"=== 全口座情報 ===\");\n        for (int i = 0; i < accountCount; i++) {\n            Account acc = accounts[i];\n            System.out.println(acc.getOwnerName() + \": \" + acc.getBalance() + \"円\");\n        }\n        System.out.println(\"銀行総預金額: \" + getTotalBalance() + \"円\");\n    }\n}\n\npublic class BankSystem {\n    public static void main(String[] args) {\n        Bank bank = new Bank();\n        \n        Account acc1 = new Account(\"001\", \"田中太郎\", 10000);\n        Account acc2 = new Account(\"002\", \"佐藤花子\", 5000);\n        \n        bank.addAccount(acc1);\n        bank.addAccount(acc2);\n        \n        acc1.deposit(3000);\n        acc2.withdraw(2000);\n        \n        bank.showAllAccounts();\n    }\n}",
      hints: ["Account acc1 = new Account(\"001\", \"田中太郎\", 10000);", "bank.addAccount(acc1);", "acc1.deposit(3000); acc2.withdraw(2000);"],
      testCases: [{input: "", expectedOutput: "口座を開設しました: 田中太郎\n口座を開設しました: 佐藤花子\n田中太郎の口座に3000.0円入金しました。\n佐藤花子の口座から2000.0円出金しました。\n=== 全口座情報 ===\n田中太郎: 13000.0円\n佐藤花子: 3000.0円\n銀行総預金額: 16000.0円", description: "オブジェクトの応用を正しく実装する"}]
    }]
  },

  // === レベル9: 実践プロジェクト（レッスン46-50） ===
  // レッスン46: 数当てゲーム
  {
    id: 46,
    title: "数当てゲーム",
    description: "ランダムな数を当てるゲームを作成しよう",
    difficulty: "上級",
    duration: "25分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# 数当てゲーム\n\n今まで学習した内容を組み合わせて、実践的なゲームを作成します。\nランダムな数を生成し、ユーザーの入力を受け取って当てるゲームです。\n\n## 使用する技術\n- **ランダム数生成**: Math.random()メソッド\n- **ループ**: ゲームの繰り返し\n- **条件分岐**: 当たり判定\n- **配列**: 試行履歴の保存\n\n## ランダム数生成\n```java\n// 1から100までの乱数\nint randomNumber = (int)(Math.random() * 100) + 1;\n```\n\n## ゲームの流れ\n1. 1-100の乱数を生成\n2. プレイヤーが数を予想\n3. 大小のヒントを提供\n4. 正解まで繰り返し\n5. 試行回数を表示",
      example: "class NumberGuessingGame {\n    private int targetNumber;\n    private int attempts;\n    private int[] guessHistory;\n    private int historyCount;\n    \n    public NumberGuessingGame() {\n        targetNumber = (int)(Math.random() * 100) + 1;\n        attempts = 0;\n        guessHistory = new int[10];\n        historyCount = 0;\n    }\n    \n    public void startGame() {\n        System.out.println(\"=== 数当てゲーム ===\");\n        System.out.println(\"1から100までの数を当ててください！\");\n        \n        // ゲームループ（簡易版）\n        int[] testGuesses = {50, 75, 88, 94, 91}; // テスト用の予想\n        \n        for (int guess : testGuesses) {\n            attempts++;\n            guessHistory[historyCount++] = guess;\n            \n            System.out.println(\"\\n試行 \" + attempts + \": \" + guess);\n            \n            if (guess == targetNumber) {\n                System.out.println(\"正解！ 答えは \" + targetNumber + \" でした！\");\n                System.out.println(\"試行回数: \" + attempts + \"回\");\n                showHistory();\n                return;\n            } else if (guess < targetNumber) {\n                System.out.println(\"もっと大きな数です\");\n            } else {\n                System.out.println(\"もっと小さな数です\");\n            }\n        }\n    }\n    \n    private void showHistory() {\n        System.out.println(\"\\n=== 予想履歴 ===\");\n        for (int i = 0; i < historyCount; i++) {\n            System.out.println((i + 1) + \"回目: \" + guessHistory[i]);\n        }\n    }\n    \n    public int getTargetNumber() {\n        return targetNumber;\n    }\n}\n\npublic class GuessTheNumber {\n    public static void main(String[] args) {\n        NumberGuessingGame game = new NumberGuessingGame();\n        \n        // テスト用に答えを固定設定\n        System.out.println(\"（テスト用）答え: \" + game.getTargetNumber());\n        \n        game.startGame();\n    }\n}",
      initialCode: "class NumberGuessingGame {\n    // ここに数当てゲームを実装してください\n    \n}\n\npublic class GuessTheNumber {\n    public static void main(String[] args) {\n        // ここでゲームを開始してください\n        \n    }\n}",
      solution: "class NumberGuessingGame {\n    private int targetNumber;\n    private int attempts;\n    \n    public NumberGuessingGame() {\n        targetNumber = 42; // 固定値でテスト\n        attempts = 0;\n    }\n    \n    public void guess(int number) {\n        attempts++;\n        System.out.println(\"予想 \" + attempts + \": \" + number);\n        \n        if (number == targetNumber) {\n            System.out.println(\"正解！ \" + attempts + \"回で当てました！\");\n        } else if (number < targetNumber) {\n            System.out.println(\"もっと大きいです\");\n        } else {\n            System.out.println(\"もっと小さいです\");\n        }\n    }\n    \n    public boolean isCorrect(int number) {\n        return number == targetNumber;\n    }\n    \n    public void showGame() {\n        System.out.println(\"=== 数当てゲーム ===\");\n        System.out.println(\"1から100の数を当てよう！\");\n    }\n}\n\npublic class GuessTheNumber {\n    public static void main(String[] args) {\n        NumberGuessingGame game = new NumberGuessingGame();\n        game.showGame();\n        \n        game.guess(30);\n        game.guess(50);\n        game.guess(40);\n        game.guess(42);\n    }\n}",
      hints: ["Math.random()で乱数生成", "ループでゲーム継続", "条件分岐で当たり判定", "配列で履歴保存"]
    },
    exercises: [{
      id: 46,
      title: "数当てゲーム実装",
      description: "targetNumber(42)に対して30,50,40,42の順で予想し、大小のヒントと正解メッセージを表示する数当てゲームを作成してください",
      initialCode: "class NumberGuessingGame {\n    // ここに数当てゲームを実装してください\n    \n}\n\npublic class GuessGame {\n    public static void main(String[] args) {\n        // ここでゲームを開始してください\n        \n    }\n}",
      expectedOutput: "=== 数当てゲーム ===\n1から100の数を当てよう！\n予想 1: 30\nもっと大きいです\n予想 2: 50\nもっと小さいです\n予想 3: 40\nもっと大きいです\n予想 4: 42\n正解！ 4回で当てました！",
      solution: "class NumberGuessingGame {\n    private int targetNumber;\n    private int attempts;\n    \n    public NumberGuessingGame() {\n        targetNumber = 42; // 固定値でテスト\n        attempts = 0;\n    }\n    \n    public void guess(int number) {\n        attempts++;\n        System.out.println(\"予想 \" + attempts + \": \" + number);\n        \n        if (number == targetNumber) {\n            System.out.println(\"正解！ \" + attempts + \"回で当てました！\");\n        } else if (number < targetNumber) {\n            System.out.println(\"もっと大きいです\");\n        } else {\n            System.out.println(\"もっと小さいです\");\n        }\n    }\n    \n    public boolean isCorrect(int number) {\n        return number == targetNumber;\n    }\n    \n    public void showGame() {\n        System.out.println(\"=== 数当てゲーム ===\");\n        System.out.println(\"1から100の数を当てよう！\");\n    }\n}\n\npublic class GuessGame {\n    public static void main(String[] args) {\n        NumberGuessingGame game = new NumberGuessingGame();\n        game.showGame();\n        \n        game.guess(30);\n        game.guess(50);\n        game.guess(40);\n        game.guess(42);\n    }\n}",
      hints: ["private int targetNumber = 42;", "game.guess(30); で予想", "条件分岐で大小判定"],
      testCases: [{input: "", expectedOutput: "=== 数当てゲーム ===\n1から100の数を当てよう！\n予想 1: 30\nもっと大きいです\n予想 2: 50\nもっと小さいです\n予想 3: 40\nもっと大きいです\n予想 4: 42\n正解！ 4回で当てました！", description: "数当てゲームを正しく実装する"}]
    }]
  },

  // レッスン47: 電卓プログラム
  {
    id: 47,
    title: "電卓プログラム",
    description: "基本的な計算機能を持つ電卓を作成しよう",
    difficulty: "上級",
    duration: "25分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# 電卓プログラム\n\n実用的な電卓プログラムを作成します。\n四則演算、履歴機能、エラーハンドリングを実装します。\n\n## 実装する機能\n1. **基本演算**: +、-、*、/\n2. **計算履歴**: 過去の計算を保存\n3. **エラーハンドリング**: ゼロ除算などの対応\n4. **連続計算**: 結果を次の計算で使用\n\n## クラス設計\n```java\nclass Calculator {\n    private double currentResult;\n    private String[] history;\n    \n    public double add(double a, double b)\n    public double subtract(double a, double b)\n    public double multiply(double a, double b)\n    public double divide(double a, double b)\n}\n```",
      example: "class Calculator {\n    private double currentResult;\n    private String[] history;\n    private int historyCount;\n    \n    public Calculator() {\n        currentResult = 0;\n        history = new String[10];\n        historyCount = 0;\n    }\n    \n    public double add(double a, double b) {\n        double result = a + b;\n        addToHistory(a + \" + \" + b + \" = \" + result);\n        currentResult = result;\n        return result;\n    }\n    \n    public double subtract(double a, double b) {\n        double result = a - b;\n        addToHistory(a + \" - \" + b + \" = \" + result);\n        currentResult = result;\n        return result;\n    }\n    \n    public double multiply(double a, double b) {\n        double result = a * b;\n        addToHistory(a + \" × \" + b + \" = \" + result);\n        currentResult = result;\n        return result;\n    }\n    \n    public double divide(double a, double b) {\n        if (b == 0) {\n            System.out.println(\"エラー: ゼロで割ることはできません\");\n            return currentResult;\n        }\n        double result = a / b;\n        addToHistory(a + \" ÷ \" + b + \" = \" + result);\n        currentResult = result;\n        return result;\n    }\n    \n    private void addToHistory(String calculation) {\n        if (historyCount < history.length) {\n            history[historyCount++] = calculation;\n        }\n    }\n    \n    public void showHistory() {\n        System.out.println(\"=== 計算履歴 ===\");\n        for (int i = 0; i < historyCount; i++) {\n            System.out.println((i + 1) + \": \" + history[i]);\n        }\n    }\n    \n    public double getCurrentResult() {\n        return currentResult;\n    }\n    \n    public void clear() {\n        currentResult = 0;\n        historyCount = 0;\n        System.out.println(\"計算機をクリアしました\");\n    }\n}\n\npublic class CalculatorApp {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        \n        System.out.println(\"=== 電卓プログラム ===\");\n        \n        System.out.println(\"10 + 5 = \" + calc.add(10, 5));\n        System.out.println(\"20 - 8 = \" + calc.subtract(20, 8));\n        System.out.println(\"6 × 7 = \" + calc.multiply(6, 7));\n        System.out.println(\"15 ÷ 3 = \" + calc.divide(15, 3));\n        \n        // ゼロ除算のテスト\n        System.out.println(\"10 ÷ 0 = \" + calc.divide(10, 0));\n        \n        calc.showHistory();\n    }\n}",
      initialCode: "class Calculator {\n    // ここに電卓クラスを実装してください\n    \n}\n\npublic class CalculatorApp {\n    public static void main(String[] args) {\n        // ここで電卓を使用してください\n        \n    }\n}",
      solution: "class Calculator {\n    private String[] operations;\n    private int operationCount;\n    \n    public Calculator() {\n        operations = new String[5];\n        operationCount = 0;\n    }\n    \n    public double add(double a, double b) {\n        double result = a + b;\n        addOperation(\"加算: \" + a + \" + \" + b + \" = \" + result);\n        return result;\n    }\n    \n    public double subtract(double a, double b) {\n        double result = a - b;\n        addOperation(\"減算: \" + a + \" - \" + b + \" = \" + result);\n        return result;\n    }\n    \n    public double multiply(double a, double b) {\n        double result = a * b;\n        addOperation(\"乗算: \" + a + \" * \" + b + \" = \" + result);\n        return result;\n    }\n    \n    public double divide(double a, double b) {\n        if (b == 0) {\n            System.out.println(\"エラー: ゼロ除算\");\n            return 0;\n        }\n        double result = a / b;\n        addOperation(\"除算: \" + a + \" / \" + b + \" = \" + result);\n        return result;\n    }\n    \n    private void addOperation(String op) {\n        if (operationCount < operations.length) {\n            operations[operationCount++] = op;\n        }\n    }\n    \n    public void showOperations() {\n        System.out.println(\"=== 計算履歴 ===\");\n        for (int i = 0; i < operationCount; i++) {\n            System.out.println(operations[i]);\n        }\n    }\n}\n\npublic class CalculatorApp {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        System.out.println(\"=== 電卓プログラム ===\");\n        \n        calc.add(10, 5);\n        calc.subtract(20, 3);\n        calc.multiply(4, 6);\n        calc.divide(15, 3);\n        calc.divide(10, 0);\n        \n        calc.showOperations();\n    }\n}",
      hints: ["四則演算メソッドを実装", "ゼロ除算のエラーチェック", "履歴を配列で管理", "計算結果を文字列で保存"]
    },
    exercises: [{
      id: 47,
      title: "電卓実装",
      description: "add,subtract,multiply,divideメソッドを持つ電卓を作成し、(10,5),(20,3),(4,6),(15,3),(10,0)の計算を実行して履歴を表示してください",
      initialCode: "class Calculator {\n    // ここに電卓クラスを実装してください\n    \n}\n\npublic class SimpleCalculator {\n    public static void main(String[] args) {\n        // ここで電卓を使用してください\n        \n    }\n}",
      expectedOutput: "=== 電卓プログラム ===\nエラー: ゼロ除算\n=== 計算履歴 ===\n加算: 10.0 + 5.0 = 15.0\n減算: 20.0 - 3.0 = 17.0\n乗算: 4.0 * 6.0 = 24.0\n除算: 15.0 / 3.0 = 5.0",
      solution: "class Calculator {\n    private String[] operations;\n    private int operationCount;\n    \n    public Calculator() {\n        operations = new String[5];\n        operationCount = 0;\n    }\n    \n    public double add(double a, double b) {\n        double result = a + b;\n        addOperation(\"加算: \" + a + \" + \" + b + \" = \" + result);\n        return result;\n    }\n    \n    public double subtract(double a, double b) {\n        double result = a - b;\n        addOperation(\"減算: \" + a + \" - \" + b + \" = \" + result);\n        return result;\n    }\n    \n    public double multiply(double a, double b) {\n        double result = a * b;\n        addOperation(\"乗算: \" + a + \" * \" + b + \" = \" + result);\n        return result;\n    }\n    \n    public double divide(double a, double b) {\n        if (b == 0) {\n            System.out.println(\"エラー: ゼロ除算\");\n            return 0;\n        }\n        double result = a / b;\n        addOperation(\"除算: \" + a + \" / \" + b + \" = \" + result);\n        return result;\n    }\n    \n    private void addOperation(String op) {\n        if (operationCount < operations.length) {\n            operations[operationCount++] = op;\n        }\n    }\n    \n    public void showOperations() {\n        System.out.println(\"=== 計算履歴 ===\");\n        for (int i = 0; i < operationCount; i++) {\n            System.out.println(operations[i]);\n        }\n    }\n}\n\npublic class SimpleCalculator {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        System.out.println(\"=== 電卓プログラム ===\");\n        \n        calc.add(10, 5);\n        calc.subtract(20, 3);\n        calc.multiply(4, 6);\n        calc.divide(15, 3);\n        calc.divide(10, 0);\n        \n        calc.showOperations();\n    }\n}",
      hints: ["public double add(double a, double b)", "if (b == 0) でゼロ除算チェック", "String[] operations で履歴保存"],
      testCases: [{input: "", expectedOutput: "=== 電卓プログラム ===\nエラー: ゼロ除算\n=== 計算履歴 ===\n加算: 10.0 + 5.0 = 15.0\n減算: 20.0 - 3.0 = 17.0\n乗算: 4.0 * 6.0 = 24.0\n除算: 15.0 / 3.0 = 5.0", description: "電卓プログラムを正しく実装する"}]
    }]
  },

  // レッスン48: 学生管理システム
  {
    id: 48,
    title: "学生管理システム",
    description: "学生の情報を管理するシステムを作成しよう",
    difficulty: "上級",
    duration: "30分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# 学生管理システム\n\n学生の情報を管理する実践的なシステムを構築します。\nオブジェクト指向の設計パターンを活用します。\n\n## 実装する機能\n1. **学生情報の管理**: 名前、ID、成績\n2. **成績計算**: 平均点、合格判定\n3. **学生検索**: IDや名前での検索\n4. **統計情報**: クラス全体の統計\n5. **データ表示**: 一覧表示機能\n\n## クラス設計\n```java\nclass Student {\n    private String name;\n    private int id;\n    private int[] scores;\n}\n\nclass StudentManager {\n    private Student[] students;\n    public void addStudent(Student student)\n    public Student findStudent(int id)\n    public double getClassAverage()\n}\n```",
      example: "class Student {\n    private String name;\n    private int studentId;\n    private int[] scores;\n    private int scoreCount;\n    \n    public Student(String name, int studentId) {\n        this.name = name;\n        this.studentId = studentId;\n        this.scores = new int[5];\n        this.scoreCount = 0;\n    }\n    \n    public void addScore(int score) {\n        if (scoreCount < scores.length) {\n            scores[scoreCount++] = score;\n        }\n    }\n    \n    public double getAverage() {\n        if (scoreCount == 0) return 0;\n        int sum = 0;\n        for (int i = 0; i < scoreCount; i++) {\n            sum += scores[i];\n        }\n        return (double) sum / scoreCount;\n    }\n    \n    public boolean isPassing() {\n        return getAverage() >= 60;\n    }\n    \n    public void showInfo() {\n        System.out.println(\"学生ID: \" + studentId + \", 名前: \" + name + \", 平均: \" + getAverage() + \", 合格: \" + (isPassing() ? \"はい\" : \"いいえ\"));\n    }\n    \n    public String getName() { return name; }\n    public int getStudentId() { return studentId; }\n}\n\nclass StudentManager {\n    private Student[] students;\n    private int studentCount;\n    \n    public StudentManager() {\n        students = new Student[10];\n        studentCount = 0;\n    }\n    \n    public void addStudent(Student student) {\n        if (studentCount < students.length) {\n            students[studentCount++] = student;\n            System.out.println(\"学生を追加しました: \" + student.getName());\n        }\n    }\n    \n    public Student findStudent(int id) {\n        for (int i = 0; i < studentCount; i++) {\n            if (students[i].getStudentId() == id) {\n                return students[i];\n            }\n        }\n        return null;\n    }\n    \n    public void showAllStudents() {\n        System.out.println(\"=== 全学生情報 ===\");\n        for (int i = 0; i < studentCount; i++) {\n            students[i].showInfo();\n        }\n    }\n    \n    public double getClassAverage() {\n        if (studentCount == 0) return 0;\n        double sum = 0;\n        for (int i = 0; i < studentCount; i++) {\n            sum += students[i].getAverage();\n        }\n        return sum / studentCount;\n    }\n    \n    public int getPassingCount() {\n        int count = 0;\n        for (int i = 0; i < studentCount; i++) {\n            if (students[i].isPassing()) {\n                count++;\n            }\n        }\n        return count;\n    }\n}\n\npublic class StudentManagementSystem {\n    public static void main(String[] args) {\n        StudentManager manager = new StudentManager();\n        \n        // 学生作成と成績追加\n        Student student1 = new Student(\"田中太郎\", 1001);\n        student1.addScore(85);\n        student1.addScore(90);\n        student1.addScore(78);\n        \n        Student student2 = new Student(\"佐藤花子\", 1002);\n        student2.addScore(92);\n        student2.addScore(88);\n        student2.addScore(95);\n        \n        manager.addStudent(student1);\n        manager.addStudent(student2);\n        \n        manager.showAllStudents();\n        \n        System.out.println(\"クラス平均: \" + manager.getClassAverage());\n        System.out.println(\"合格者数: \" + manager.getPassingCount() + \"人\");\n    }\n}",
      initialCode: "class Student {\n    // ここに学生クラスを実装してください\n    \n}\n\nclass StudentManager {\n    // ここに学生管理クラスを実装してください\n    \n}\n\npublic class StudentManagementSystem {\n    public static void main(String[] args) {\n        // ここで学生管理システムを使用してください\n        \n    }\n}",
      solution: "class Student {\n    private String name;\n    private int id;\n    private double average;\n    \n    public Student(String name, int id, double average) {\n        this.name = name;\n        this.id = id;\n        this.average = average;\n    }\n    \n    public String getName() { return name; }\n    public int getId() { return id; }\n    public double getAverage() { return average; }\n    \n    public boolean isPassing() {\n        return average >= 60;\n    }\n    \n    public void showInfo() {\n        System.out.println(\"学生: \" + name + \", 平均: \" + average + \", 合格: \" + (isPassing() ? \"はい\" : \"いいえ\"));\n    }\n}\n\nclass StudentManager {\n    private Student[] students;\n    private int count;\n    \n    public StudentManager() {\n        students = new Student[10];\n        count = 0;\n    }\n    \n    public void addStudent(Student student) {\n        students[count++] = student;\n        System.out.println(\"学生を追加: \" + student.getName());\n    }\n    \n    public void showAllStudents() {\n        System.out.println(\"=== 学生一覧 ===\");\n        for (int i = 0; i < count; i++) {\n            students[i].showInfo();\n        }\n    }\n    \n    public double getClassAverage() {\n        double sum = 0;\n        for (int i = 0; i < count; i++) {\n            sum += students[i].getAverage();\n        }\n        return sum / count;\n    }\n}\n\npublic class StudentManagementSystem {\n    public static void main(String[] args) {\n        StudentManager manager = new StudentManager();\n        \n        Student s1 = new Student(\"田中太郎\", 1, 85.0);\n        Student s2 = new Student(\"佐藤花子\", 2, 92.0);\n        \n        manager.addStudent(s1);\n        manager.addStudent(s2);\n        \n        manager.showAllStudents();\n        System.out.println(\"クラス平均: \" + manager.getClassAverage());\n    }\n}",
      hints: ["Studentクラスに名前、ID、平均点を保存", "StudentManagerで学生配列を管理", "average >= 60で合格判定", "全学生の平均を計算"]
    },
    exercises: [{
      id: 48,
      title: "学生管理システム実装",
      description: "Student(名前,ID,平均点)とStudentManagerクラスを作成し、田中太郎(85.0)と佐藤花子(92.0)を管理して一覧とクラス平均を表示してください",
      initialCode: "class Student {\n    // ここに学生クラスを実装してください\n    \n}\n\nclass StudentManager {\n    // ここに学生管理クラスを実装してください\n    \n}\n\npublic class SchoolSystem {\n    public static void main(String[] args) {\n        // ここで学生管理システムを使用してください\n        \n    }\n}",
      expectedOutput: "学生を追加: 田中太郎\n学生を追加: 佐藤花子\n=== 学生一覧 ===\n学生: 田中太郎, 平均: 85.0, 合格: はい\n学生: 佐藤花子, 平均: 92.0, 合格: はい\nクラス平均: 88.5",
      solution: "class Student {\n    private String name;\n    private int id;\n    private double average;\n    \n    public Student(String name, int id, double average) {\n        this.name = name;\n        this.id = id;\n        this.average = average;\n    }\n    \n    public String getName() { return name; }\n    public int getId() { return id; }\n    public double getAverage() { return average; }\n    \n    public boolean isPassing() {\n        return average >= 60;\n    }\n    \n    public void showInfo() {\n        System.out.println(\"学生: \" + name + \", 平均: \" + average + \", 合格: \" + (isPassing() ? \"はい\" : \"いいえ\"));\n    }\n}\n\nclass StudentManager {\n    private Student[] students;\n    private int count;\n    \n    public StudentManager() {\n        students = new Student[10];\n        count = 0;\n    }\n    \n    public void addStudent(Student student) {\n        students[count++] = student;\n        System.out.println(\"学生を追加: \" + student.getName());\n    }\n    \n    public void showAllStudents() {\n        System.out.println(\"=== 学生一覧 ===\");\n        for (int i = 0; i < count; i++) {\n            students[i].showInfo();\n        }\n    }\n    \n    public double getClassAverage() {\n        double sum = 0;\n        for (int i = 0; i < count; i++) {\n            sum += students[i].getAverage();\n        }\n        return sum / count;\n    }\n}\n\npublic class SchoolSystem {\n    public static void main(String[] args) {\n        StudentManager manager = new StudentManager();\n        \n        Student s1 = new Student(\"田中太郎\", 1, 85.0);\n        Student s2 = new Student(\"佐藤花子\", 2, 92.0);\n        \n        manager.addStudent(s1);\n        manager.addStudent(s2);\n        \n        manager.showAllStudents();\n        System.out.println(\"クラス平均: \" + manager.getClassAverage());\n    }\n}",
      hints: ["Student s1 = new Student(\"田中太郎\", 1, 85.0);", "manager.addStudent(s1);", "average >= 60 で合格判定"],
      testCases: [{input: "", expectedOutput: "学生を追加: 田中太郎\n学生を追加: 佐藤花子\n=== 学生一覧 ===\n学生: 田中太郎, 平均: 85.0, 合格: はい\n学生: 佐藤花子, 平均: 92.0, 合格: はい\nクラス平均: 88.5", description: "学生管理システムを正しく実装する"}]
    }]
  },

  // レッスン49: 図書館管理システム
  {
    id: 49,
    title: "図書館管理システム",
    description: "本の貸出・返却を管理するシステムを作成しよう",
    difficulty: "上級",
    duration: "30分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# 図書館管理システム\n\n図書館の本の貸出・返却を管理するシステムを構築します。\n複数のクラスの連携と状態管理を学習します。\n\n## 実装する機能\n1. **本の管理**: タイトル、著者、ISBN、貸出状況\n2. **貸出機能**: 本を借りる処理\n3. **返却機能**: 本を返す処理\n4. **検索機能**: タイトルや著者で検索\n5. **状態確認**: 貸出可能な本の一覧\n\n## クラス設計\n```java\nclass Book {\n    private String title;\n    private String author;\n    private boolean isAvailable;\n}\n\nclass Library {\n    private Book[] books;\n    public boolean borrowBook(String title)\n    public boolean returnBook(String title)\n}\n```",
      example: "class Book {\n    private String title;\n    private String author;\n    private String isbn;\n    private boolean isAvailable;\n    \n    public Book(String title, String author, String isbn) {\n        this.title = title;\n        this.author = author;\n        this.isbn = isbn;\n        this.isAvailable = true;\n    }\n    \n    public boolean borrow() {\n        if (isAvailable) {\n            isAvailable = false;\n            return true;\n        }\n        return false;\n    }\n    \n    public void returnBook() {\n        isAvailable = true;\n    }\n    \n    public void showInfo() {\n        System.out.println(\"『\" + title + \"』 by \" + author + \" (\" + \n            (isAvailable ? \"貸出可能\" : \"貸出中\") + \")\");\n    }\n    \n    public String getTitle() { return title; }\n    public String getAuthor() { return author; }\n    public boolean isAvailable() { return isAvailable; }\n}\n\nclass Library {\n    private Book[] books;\n    private int bookCount;\n    \n    public Library() {\n        books = new Book[10];\n        bookCount = 0;\n    }\n    \n    public void addBook(Book book) {\n        if (bookCount < books.length) {\n            books[bookCount++] = book;\n            System.out.println(\"本を追加しました: \" + book.getTitle());\n        }\n    }\n    \n    public boolean borrowBook(String title) {\n        for (int i = 0; i < bookCount; i++) {\n            if (books[i].getTitle().equals(title)) {\n                if (books[i].borrow()) {\n                    System.out.println(\"『\" + title + \"』を借りました\");\n                    return true;\n                } else {\n                    System.out.println(\"『\" + title + \"』は貸出中です\");\n                    return false;\n                }\n            }\n        }\n        System.out.println(\"『\" + title + \"』は見つかりませんでした\");\n        return false;\n    }\n    \n    public boolean returnBook(String title) {\n        for (int i = 0; i < bookCount; i++) {\n            if (books[i].getTitle().equals(title)) {\n                books[i].returnBook();\n                System.out.println(\"『\" + title + \"』を返却しました\");\n                return true;\n            }\n        }\n        System.out.println(\"『\" + title + \"』は見つかりませんでした\");\n        return false;\n    }\n    \n    public void showAllBooks() {\n        System.out.println(\"=== 蔵書一覧 ===\");\n        for (int i = 0; i < bookCount; i++) {\n            books[i].showInfo();\n        }\n    }\n    \n    public void showAvailableBooks() {\n        System.out.println(\"=== 貸出可能な本 ===\");\n        for (int i = 0; i < bookCount; i++) {\n            if (books[i].isAvailable()) {\n                books[i].showInfo();\n            }\n        }\n    }\n}\n\npublic class LibrarySystem {\n    public static void main(String[] args) {\n        Library library = new Library();\n        \n        // 本を追加\n        library.addBook(new Book(\"Javaプログラミング\", \"田中太郎\", \"978-1234567890\"));\n        library.addBook(new Book(\"データ構造とアルゴリズム\", \"佐藤花子\", \"978-0987654321\"));\n        \n        // 貸出・返却のテスト\n        library.borrowBook(\"Javaプログラミング\");\n        library.borrowBook(\"Javaプログラミング\"); // 既に貸出中\n        \n        library.returnBook(\"Javaプログラミング\");\n        \n        library.showAllBooks();\n    }\n}",
      initialCode: "class Book {\n    // ここに本クラスを実装してください\n    \n}\n\nclass Library {\n    // ここに図書館クラスを実装してください\n    \n}\n\npublic class LibrarySystem {\n    public static void main(String[] args) {\n        // ここで図書館システムを使用してください\n        \n    }\n}",
      solution: "class Book {\n    private String title;\n    private String author;\n    private boolean isAvailable;\n    \n    public Book(String title, String author) {\n        this.title = title;\n        this.author = author;\n        this.isAvailable = true;\n    }\n    \n    public String getTitle() { return title; }\n    public String getAuthor() { return author; }\n    public boolean isAvailable() { return isAvailable; }\n    \n    public boolean borrow() {\n        if (isAvailable) {\n            isAvailable = false;\n            return true;\n        }\n        return false;\n    }\n    \n    public void returnBook() {\n        isAvailable = true;\n    }\n}\n\nclass Library {\n    private Book[] books;\n    private int count;\n    \n    public Library() {\n        books = new Book[5];\n        count = 0;\n    }\n    \n    public void addBook(Book book) {\n        books[count++] = book;\n        System.out.println(\"本を追加: \" + book.getTitle());\n    }\n    \n    public void borrowBook(String title) {\n        for (int i = 0; i < count; i++) {\n            if (books[i].getTitle().equals(title)) {\n                if (books[i].borrow()) {\n                    System.out.println(\"借りました: \" + title);\n                } else {\n                    System.out.println(\"貸出中: \" + title);\n                }\n                return;\n            }\n        }\n    }\n    \n    public void returnBook(String title) {\n        for (int i = 0; i < count; i++) {\n            if (books[i].getTitle().equals(title)) {\n                books[i].returnBook();\n                System.out.println(\"返却しました: \" + title);\n                return;\n            }\n        }\n    }\n    \n    public void showBooks() {\n        System.out.println(\"=== 図書一覧 ===\");\n        for (int i = 0; i < count; i++) {\n            System.out.println(books[i].getTitle() + \" - \" + (books[i].isAvailable() ? \"利用可能\" : \"貸出中\"));\n        }\n    }\n}\n\npublic class LibrarySystem {\n    public static void main(String[] args) {\n        Library library = new Library();\n        \n        library.addBook(new Book(\"Java入門\", \"田中太郎\"));\n        library.addBook(new Book(\"Python基礎\", \"佐藤花子\"));\n        \n        library.borrowBook(\"Java入門\");\n        library.borrowBook(\"Java入門\");\n        library.returnBook(\"Java入門\");\n        \n        library.showBooks();\n    }\n}",
      hints: ["BookクラスにisAvailableフィールド", "borrow()で貸出状態を変更", "equals()で文字列比較", "状態管理が重要"]
    },
    exercises: [{
      id: 49,
      title: "図書館システム実装",
      description: "BookとLibraryクラスを作成し、「Java入門」「Python基礎」を追加、Java入門を2回借りて1回返却し、図書一覧を表示してください",
      initialCode: "class Book {\n    // ここに本クラスを実装してください\n    \n}\n\nclass Library {\n    // ここに図書館クラスを実装してください\n    \n}\n\npublic class BookManagement {\n    public static void main(String[] args) {\n        // ここで図書館システムを使用してください\n        \n    }\n}",
      expectedOutput: "本を追加: Java入門\n本を追加: Python基礎\n借りました: Java入門\n貸出中: Java入門\n返却しました: Java入門\n=== 図書一覧 ===\nJava入門 - 利用可能\nPython基礎 - 利用可能",
      solution: "class Book {\n    private String title;\n    private String author;\n    private boolean isAvailable;\n    \n    public Book(String title, String author) {\n        this.title = title;\n        this.author = author;\n        this.isAvailable = true;\n    }\n    \n    public String getTitle() { return title; }\n    public String getAuthor() { return author; }\n    public boolean isAvailable() { return isAvailable; }\n    \n    public boolean borrow() {\n        if (isAvailable) {\n            isAvailable = false;\n            return true;\n        }\n        return false;\n    }\n    \n    public void returnBook() {\n        isAvailable = true;\n    }\n}\n\nclass Library {\n    private Book[] books;\n    private int count;\n    \n    public Library() {\n        books = new Book[5];\n        count = 0;\n    }\n    \n    public void addBook(Book book) {\n        books[count++] = book;\n        System.out.println(\"本を追加: \" + book.getTitle());\n    }\n    \n    public void borrowBook(String title) {\n        for (int i = 0; i < count; i++) {\n            if (books[i].getTitle().equals(title)) {\n                if (books[i].borrow()) {\n                    System.out.println(\"借りました: \" + title);\n                } else {\n                    System.out.println(\"貸出中: \" + title);\n                }\n                return;\n            }\n        }\n    }\n    \n    public void returnBook(String title) {\n        for (int i = 0; i < count; i++) {\n            if (books[i].getTitle().equals(title)) {\n                books[i].returnBook();\n                System.out.println(\"返却しました: \" + title);\n                return;\n            }\n        }\n    }\n    \n    public void showBooks() {\n        System.out.println(\"=== 図書一覧 ===\");\n        for (int i = 0; i < count; i++) {\n            System.out.println(books[i].getTitle() + \" - \" + (books[i].isAvailable() ? \"利用可能\" : \"貸出中\"));\n        }\n    }\n}\n\npublic class BookManagement {\n    public static void main(String[] args) {\n        Library library = new Library();\n        \n        library.addBook(new Book(\"Java入門\", \"田中太郎\"));\n        library.addBook(new Book(\"Python基礎\", \"佐藤花子\"));\n        \n        library.borrowBook(\"Java入門\");\n        library.borrowBook(\"Java入門\");\n        library.returnBook(\"Java入門\");\n        \n        library.showBooks();\n    }\n}",
      hints: ["library.addBook(new Book(\"Java入門\", \"田中太郎\"));", "library.borrowBook(\"Java入門\"); を2回", "library.returnBook(\"Java入門\");"],
      testCases: [{input: "", expectedOutput: "本を追加: Java入門\n本を追加: Python基礎\n借りました: Java入門\n貸出中: Java入門\n返却しました: Java入門\n=== 図書一覧 ===\nJava入門 - 利用可能\nPython基礎 - 利用可能", description: "図書館管理システムを正しく実装する"}]
    }]
  },

  // レッスン50: 総合プロジェクト
  {
    id: 50,
    title: "総合プロジェクト：在庫管理システム",
    description: "これまでの学習内容を全て活用した総合的なシステムを作成しよう",
    difficulty: "上級",
    duration: "35分",
    completed: false,
    locked: true,
    stars: 0,
    content: {
      explanation: "# 総合プロジェクト：在庫管理システム\n\nJava学習の集大成として、在庫管理システムを構築します。\nこれまで学習した全ての概念を統合した実践的なプロジェクトです。\n\n## 活用する技術\n1. **基本構文**: 変数、演算子、条件分岐、ループ\n2. **配列**: 商品データの管理\n3. **メソッド**: 機能の分割と再利用\n4. **クラスとオブジェクト**: オブジェクト指向設計\n5. **カプセル化**: データの隠蔽と保護\n\n## システム機能\n- **商品管理**: 追加、検索、更新、削除\n- **在庫管理**: 入荷、出荷、在庫確認\n- **統計機能**: 総在庫数、在庫価値計算\n- **警告機能**: 在庫不足の警告\n- **レポート機能**: 在庫状況の一覧表示",
      example: "class Product {\n    private String name;\n    private int productId;\n    private double price;\n    private int stock;\n    private int minStock; // 最小在庫数\n    \n    public Product(String name, int productId, double price, int stock, int minStock) {\n        this.name = name;\n        this.productId = productId;\n        this.price = price;\n        this.stock = stock;\n        this.minStock = minStock;\n    }\n    \n    public boolean addStock(int quantity) {\n        if (quantity > 0) {\n            stock += quantity;\n            return true;\n        }\n        return false;\n    }\n    \n    public boolean removeStock(int quantity) {\n        if (quantity > 0 && quantity <= stock) {\n            stock -= quantity;\n            return true;\n        }\n        return false;\n    }\n    \n    public boolean isLowStock() {\n        return stock <= minStock;\n    }\n    \n    public double getTotalValue() {\n        return price * stock;\n    }\n    \n    public void showInfo() {\n        System.out.println(\"商品: \" + name + \", 在庫: \" + stock + \", 価格: \" + price + \"円\" + \n            (isLowStock() ? \" [在庫不足警告]\" : \"\"));\n    }\n    \n    // Getters\n    public String getName() { return name; }\n    public int getProductId() { return productId; }\n    public double getPrice() { return price; }\n    public int getStock() { return stock; }\n}\n\nclass InventoryManager {\n    private Product[] products;\n    private int productCount;\n    private static final int MAX_PRODUCTS = 20;\n    \n    public InventoryManager() {\n        products = new Product[MAX_PRODUCTS];\n        productCount = 0;\n    }\n    \n    public boolean addProduct(Product product) {\n        if (productCount < MAX_PRODUCTS) {\n            products[productCount++] = product;\n            System.out.println(\"商品を追加しました: \" + product.getName());\n            return true;\n        }\n        System.out.println(\"これ以上商品を追加できません\");\n        return false;\n    }\n    \n    public Product findProduct(String name) {\n        for (int i = 0; i < productCount; i++) {\n            if (products[i].getName().equals(name)) {\n                return products[i];\n            }\n        }\n        return null;\n    }\n    \n    public void restockProduct(String name, int quantity) {\n        Product product = findProduct(name);\n        if (product != null) {\n            if (product.addStock(quantity)) {\n                System.out.println(name + \"を\" + quantity + \"個入荷しました\");\n            }\n        } else {\n            System.out.println(\"商品が見つかりません: \" + name);\n        }\n    }\n    \n    public void sellProduct(String name, int quantity) {\n        Product product = findProduct(name);\n        if (product != null) {\n            if (product.removeStock(quantity)) {\n                System.out.println(name + \"を\" + quantity + \"個販売しました\");\n            } else {\n                System.out.println(\"在庫不足: \" + name);\n            }\n        } else {\n            System.out.println(\"商品が見つかりません: \" + name);\n        }\n    }\n    \n    public void showAllProducts() {\n        System.out.println(\"=== 在庫一覧 ===\");\n        for (int i = 0; i < productCount; i++) {\n            products[i].showInfo();\n        }\n    }\n    \n    public void showLowStockWarnings() {\n        System.out.println(\"=== 在庫不足警告 ===\");\n        boolean hasLowStock = false;\n        for (int i = 0; i < productCount; i++) {\n            if (products[i].isLowStock()) {\n                products[i].showInfo();\n                hasLowStock = true;\n            }\n        }\n        if (!hasLowStock) {\n            System.out.println(\"在庫不足の商品はありません\");\n        }\n    }\n    \n    public double getTotalInventoryValue() {\n        double total = 0;\n        for (int i = 0; i < productCount; i++) {\n            total += products[i].getTotalValue();\n        }\n        return total;\n    }\n    \n    public void showSummary() {\n        System.out.println(\"=== 在庫サマリー ===\");\n        System.out.println(\"登録商品数: \" + productCount);\n        System.out.println(\"総在庫価値: \" + getTotalInventoryValue() + \"円\");\n        \n        int totalItems = 0;\n        for (int i = 0; i < productCount; i++) {\n            totalItems += products[i].getStock();\n        }\n        System.out.println(\"総在庫数: \" + totalItems + \"個\");\n    }\n}\n\npublic class InventoryManagementSystem {\n    public static void main(String[] args) {\n        System.out.println(\"=== 在庫管理システム ===\");\n        \n        InventoryManager manager = new InventoryManager();\n        \n        // 商品追加\n        manager.addProduct(new Product(\"ノートPC\", 1001, 80000, 5, 2));\n        manager.addProduct(new Product(\"マウス\", 1002, 2000, 15, 5));\n        manager.addProduct(new Product(\"キーボード\", 1003, 5000, 8, 3));\n        \n        // 在庫操作\n        manager.sellProduct(\"ノートPC\", 3);\n        manager.sellProduct(\"マウス\", 12);\n        manager.restockProduct(\"キーボード\", 10);\n        \n        // レポート表示\n        manager.showAllProducts();\n        manager.showLowStockWarnings();\n        manager.showSummary();\n    }\n}",
      initialCode: "class Product {\n    // ここに商品クラスを実装してください\n    \n}\n\nclass InventoryManager {\n    // ここに在庫管理クラスを実装してください\n    \n}\n\npublic class InventoryManagementSystem {\n    public static void main(String[] args) {\n        // ここで在庫管理システムを使用してください\n        \n    }\n}",
      solution: "class Product {\n    private String name;\n    private double price;\n    private int stock;\n    \n    public Product(String name, double price, int stock) {\n        this.name = name;\n        this.price = price;\n        this.stock = stock;\n    }\n    \n    public void addStock(int quantity) {\n        stock += quantity;\n    }\n    \n    public boolean sellStock(int quantity) {\n        if (quantity <= stock) {\n            stock -= quantity;\n            return true;\n        }\n        return false;\n    }\n    \n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public int getStock() { return stock; }\n    public double getTotalValue() { return price * stock; }\n    \n    public void showInfo() {\n        System.out.println(name + \": \" + stock + \"個, \" + price + \"円\");\n    }\n}\n\nclass InventoryManager {\n    private Product[] products;\n    private int count;\n    \n    public InventoryManager() {\n        products = new Product[10];\n        count = 0;\n    }\n    \n    public void addProduct(Product product) {\n        products[count++] = product;\n        System.out.println(\"商品追加: \" + product.getName());\n    }\n    \n    public void restock(String name, int quantity) {\n        for (int i = 0; i < count; i++) {\n            if (products[i].getName().equals(name)) {\n                products[i].addStock(quantity);\n                System.out.println(\"入荷: \" + name + \" (\" + quantity + \"個)\");\n                return;\n            }\n        }\n    }\n    \n    public void sell(String name, int quantity) {\n        for (int i = 0; i < count; i++) {\n            if (products[i].getName().equals(name)) {\n                if (products[i].sellStock(quantity)) {\n                    System.out.println(\"販売: \" + name + \" (\" + quantity + \"個)\");\n                } else {\n                    System.out.println(\"在庫不足: \" + name);\n                }\n                return;\n            }\n        }\n    }\n    \n    public void showInventory() {\n        System.out.println(\"=== 在庫状況 ===\");\n        double totalValue = 0;\n        for (int i = 0; i < count; i++) {\n            products[i].showInfo();\n            totalValue += products[i].getTotalValue();\n        }\n        System.out.println(\"総在庫価値: \" + totalValue + \"円\");\n    }\n}\n\npublic class InventoryManagementSystem {\n    public static void main(String[] args) {\n        System.out.println(\"=== 在庫管理システム ===\");\n        InventoryManager manager = new InventoryManager();\n        \n        manager.addProduct(new Product(\"PC\", 100000, 3));\n        manager.addProduct(new Product(\"マウス\", 2000, 10));\n        \n        manager.sell(\"PC\", 1);\n        manager.restock(\"マウス\", 5);\n        \n        manager.showInventory();\n    }\n}",
      hints: ["全ての学習内容を統合", "商品クラスで基本データ管理", "管理クラスで操作を集約", "メソッドで機能を分割"]
    },
    exercises: [{
      id: 50,
      title: "在庫管理システム完成",
      description: "ProductとInventoryManagerを使って、PC(100000円,3個)とマウス(2000円,10個)を管理し、PC1個販売、マウス5個入荷して在庫状況を表示してください",
      initialCode: "class Product {\n    // ここに商品クラスを実装してください\n    \n}\n\nclass InventoryManager {\n    // ここに在庫管理クラスを実装してください\n    \n}\n\npublic class FinalProject {\n    public static void main(String[] args) {\n        // ここで在庫管理システムを使用してください\n        \n    }\n}",
      expectedOutput: "=== 在庫管理システム ===\n商品追加: PC\n商品追加: マウス\n販売: PC (1個)\n入荷: マウス (5個)\n=== 在庫状況 ===\nPC: 2個, 100000.0円\nマウス: 15個, 2000.0円\n総在庫価値: 230000.0円",
      solution: "class Product {\n    private String name;\n    private double price;\n    private int stock;\n    \n    public Product(String name, double price, int stock) {\n        this.name = name;\n        this.price = price;\n        this.stock = stock;\n    }\n    \n    public void addStock(int quantity) {\n        stock += quantity;\n    }\n    \n    public boolean sellStock(int quantity) {\n        if (quantity <= stock) {\n            stock -= quantity;\n            return true;\n        }\n        return false;\n    }\n    \n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public int getStock() { return stock; }\n    public double getTotalValue() { return price * stock; }\n    \n    public void showInfo() {\n        System.out.println(name + \": \" + stock + \"個, \" + price + \"円\");\n    }\n}\n\nclass InventoryManager {\n    private Product[] products;\n    private int count;\n    \n    public InventoryManager() {\n        products = new Product[10];\n        count = 0;\n    }\n    \n    public void addProduct(Product product) {\n        products[count++] = product;\n        System.out.println(\"商品追加: \" + product.getName());\n    }\n    \n    public void restock(String name, int quantity) {\n        for (int i = 0; i < count; i++) {\n            if (products[i].getName().equals(name)) {\n                products[i].addStock(quantity);\n                System.out.println(\"入荷: \" + name + \" (\" + quantity + \"個)\");\n                return;\n            }\n        }\n    }\n    \n    public void sell(String name, int quantity) {\n        for (int i = 0; i < count; i++) {\n            if (products[i].getName().equals(name)) {\n                if (products[i].sellStock(quantity)) {\n                    System.out.println(\"販売: \" + name + \" (\" + quantity + \"個)\");\n                } else {\n                    System.out.println(\"在庫不足: \" + name);\n                }\n                return;\n            }\n        }\n    }\n    \n    public void showInventory() {\n        System.out.println(\"=== 在庫状況 ===\");\n        double totalValue = 0;\n        for (int i = 0; i < count; i++) {\n            products[i].showInfo();\n            totalValue += products[i].getTotalValue();\n        }\n        System.out.println(\"総在庫価値: \" + totalValue + \"円\");\n    }\n}\n\npublic class FinalProject {\n    public static void main(String[] args) {\n        System.out.println(\"=== 在庫管理システム ===\");\n        InventoryManager manager = new InventoryManager();\n        \n        manager.addProduct(new Product(\"PC\", 100000, 3));\n        manager.addProduct(new Product(\"マウス\", 2000, 10));\n        \n        manager.sell(\"PC\", 1);\n        manager.restock(\"マウス\", 5);\n        \n        manager.showInventory();\n    }\n}",
      hints: ["manager.addProduct(new Product(\"PC\", 100000, 3));", "manager.sell(\"PC\", 1);", "manager.restock(\"マウス\", 5);", "全ての技術を統合"],
      testCases: [{input: "", expectedOutput: "=== 在庫管理システム ===\n商品追加: PC\n商品追加: マウス\n販売: PC (1個)\n入荷: マウス (5個)\n=== 在庫状況 ===\nPC: 2個, 100000.0円\nマウス: 15個, 2000.0円\n総在庫価値: 230000.0円", description: "最終プロジェクトを正しく完成させる"}]
    }]
  }
]