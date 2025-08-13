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
  isRequired: boolean
  dependencies?: string[]
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface CodeSlot {
  id: string
  phaseId: number
  label: string
  acceptedTypes: string[]
  acceptedCategories: string[]
  position: number
  isRequired: boolean
  hint: string
}

export const practicalChallenges: PracticalChallenge[] = [
  {
    id: 1,
    title: "家計簿アプリ",
    client: "経理指導員 田中さん",
    deadline: "今日中",
    difficulty: "beginner",
    estimatedTime: "15-30分",
    description: "新入社員研修で使用する家計簿アプリを作成してほしいです。お金の管理の基本を学べるように、シンプルで分かりやすい機能にしてください。",
    requirements: [
      "収入・支出の記録ができること",
      "カテゴリ別に分類できること（食費、交通費、娯楽費など）", 
      "月の収支を確認できること",
      "簡単な統計（支出の多いカテゴリ）が見れること"
    ],
    constraints: [
      "Java初心者でも理解できるコードで",
      "複雑なライブラリは使わない",
      "コンソールアプリでOK"
    ],
    learningPoints: [
      "基本的な数値計算と変数の使用",
      "ArrayListでのデータ管理",
      "Scannerでのユーザー入力",
      "クラス設計の基礎",
      "条件分岐とループ処理"
    ],
    hints: [
      {
        level: 1,
        title: "データ構造を考えよう",
        content: "まずはTransactionクラスを作成しましょう。取引に必要な情報（日付、種類、金額、カテゴリ、メモ）を持つクラスです。",
        codeExample: `class Transaction {
    private String date;
    private String type;
    private int amount;
    private String category;
    private String memo;
    
    // コンストラクタとゲッター・セッターを追加
}`
      },
      {
        level: 2,
        title: "データ保存方法",
        content: "ArrayListを使って取引データを保存しましょう。リストに取引を追加・表示する機能を実装します。",
        codeExample: `ArrayList<Transaction> transactions = new ArrayList<>();
// 新しい取引を追加
transactions.add(new Transaction(date, type, amount, category, memo));`
      },
      {
        level: 3,
        title: "メニューシステム",
        content: "do-whileループとswitchを使ってメニューシステムを作成しましょう。ユーザーが選択するまで繰り返します。",
        codeExample: `Scanner scanner = new Scanner(System.in);
int choice;
do {
    // メニュー表示
    System.out.println("1. 取引記録");
    System.out.println("2. 一覧表示");
    choice = scanner.nextInt();
    
    switch(choice) {
        case 1: // 取引記録処理
            break;
        case 2: // 一覧表示処理
            break;
    }
} while(choice != 5);`
      },
      {
        level: 4,
        title: "合計計算",
        content: "for文を使って収入・支出の合計金額を計算してみましょう。タイプ別に分けて計算します。",
        codeExample: `int totalIncome = 0;
int totalExpense = 0;

for(Transaction t : transactions) {
    if(t.getType().equals("収入")) {
        totalIncome += t.getAmount();
    } else {
        totalExpense += t.getAmount();
    }
}`
      },
      {
        level: 5,
        title: "カテゴリ別集計",
        content: "HashMapを使ってカテゴリ別の支出額を集計しましょう。同じカテゴリの金額を合計します。",
        codeExample: `HashMap<String, Integer> categoryTotal = new HashMap<>();

for(Transaction t : transactions) {
    if(t.getType().equals("支出")) {
        String category = t.getCategory();
        categoryTotal.put(category, 
            categoryTotal.getOrDefault(category, 0) + t.getAmount());
    }
}`
      }
    ],
    phases: [
      {
        id: 1,
        title: "Phase 1: クラス設計",
        description: "Transactionクラスを作成し、基本的なデータ構造を定義します",
        objectives: [
          "Transactionクラスの作成",
          "必要なフィールドの定義",
          "コンストラクタの実装",
          "ゲッター・セッターの実装"
        ],
        completed: false
      },
      {
        id: 2,
        title: "Phase 2: メイン処理とメニュー",
        description: "メニューシステムとユーザー入力処理を実装します",
        objectives: [
          "mainメソッドの実装",
          "メニュー表示機能",
          "Scanner によるユーザー入力",
          "do-while ループでのメニュー制御"
        ],
        completed: false
      },
      {
        id: 3,
        title: "Phase 3: データ入力機能",
        description: "収入・支出の記録機能を実装します",
        objectives: [
          "取引タイプの選択（収入/支出）",
          "金額入力とバリデーション",
          "カテゴリ選択機能",
          "ArrayListへのデータ保存"
        ],
        completed: false
      },
      {
        id: 4,
        title: "Phase 4: データ表示機能",
        description: "登録した取引の一覧表示機能を実装します",
        objectives: [
          "全取引の一覧表示",
          "見やすい形式でのフォーマット",
          "空データの場合の処理",
          "表示順序の調整"
        ],
        completed: false
      },
      {
        id: 5,
        title: "Phase 5: 集計・レポート機能",
        description: "月次レポートとカテゴリ別集計機能を実装します",
        objectives: [
          "収入・支出の合計計算",
          "収支の算出",
          "カテゴリ別支出額の集計",
          "統計情報の表示"
        ],
        completed: false
      }
    ],
    starterCode: `import java.util.*;

// ここにTransactionクラスを作成してください
class Transaction {
    // フィールドを定義
    
    // コンストラクタを実装
    
    // ゲッター・セッターを実装
}

public class HouseholdBudget {
    private static ArrayList<Transaction> transactions = new ArrayList<>();
    private static Scanner scanner = new Scanner(System.in);
    
    public static void main(String[] args) {
        System.out.println("=== 家計簿アプリ ===");
        
        // ここにメニューシステムを実装してください
        int choice;
        do {
            showMenu();
            choice = scanner.nextInt();
            
            switch(choice) {
                case 1:
                    // 取引記録機能を実装
                    break;
                case 2:
                    // 一覧表示機能を実装
                    break;
                case 3:
                    // 月次レポート機能を実装
                    break;
                case 4:
                    // カテゴリ別レポート機能を実装
                    break;
                case 5:
                    System.out.println("アプリを終了します。");
                    break;
                default:
                    System.out.println("1-5の数字を入力してください。");
            }
        } while(choice != 5);
    }
    
    private static void showMenu() {
        System.out.println("\\n1. 取引を記録する");
        System.out.println("2. 取引一覧を見る");
        System.out.println("3. 月次レポートを見る");
        System.out.println("4. カテゴリ別レポートを見る");
        System.out.println("5. 終了");
        System.out.print("選択してください (1-5): ");
    }
    
    // ここに各機能のメソッドを実装してください
}`,
    solutionCode: `import java.util.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

class Transaction {
    private String date;
    private String type;
    private int amount;
    private String category;
    private String memo;
    
    public Transaction(String date, String type, int amount, String category, String memo) {
        this.date = date;
        this.type = type;
        this.amount = amount;
        this.category = category;
        this.memo = memo;
    }
    
    // ゲッター
    public String getDate() { return date; }
    public String getType() { return type; }
    public int getAmount() { return amount; }
    public String getCategory() { return category; }
    public String getMemo() { return memo; }
    
    @Override
    public String toString() {
        return String.format("%s | %s | %,d円 | %s | %s", 
            date, type, amount, category, memo);
    }
}

public class HouseholdBudget {
    private static ArrayList<Transaction> transactions = new ArrayList<>();
    private static Scanner scanner = new Scanner(System.in);
    private static String[] categories = {"食費", "交通費", "娯楽費", "その他"};
    
    public static void main(String[] args) {
        System.out.println("=== 家計簿アプリ ===");
        
        int choice;
        do {
            showMenu();
            choice = scanner.nextInt();
            scanner.nextLine(); // 改行消費
            
            switch(choice) {
                case 1:
                    addTransaction();
                    break;
                case 2:
                    showTransactions();
                    break;
                case 3:
                    showMonthlyReport();
                    break;
                case 4:
                    showCategoryReport();
                    break;
                case 5:
                    System.out.println("アプリを終了します。");
                    break;
                default:
                    System.out.println("1-5の数字を入力してください。");
            }
        } while(choice != 5);
    }
    
    private static void showMenu() {
        System.out.println("\\n1. 取引を記録する");
        System.out.println("2. 取引一覧を見る");
        System.out.println("3. 月次レポートを見る");
        System.out.println("4. カテゴリ別レポートを見る");
        System.out.println("5. 終了");
        System.out.print("選択してください (1-5): ");
    }
    
    private static void addTransaction() {
        System.out.println("\\n--- 取引記録 ---");
        
        // 種類選択
        System.out.print("種類を選択 (1:収入 2:支出): ");
        int typeChoice = scanner.nextInt();
        String type = (typeChoice == 1) ? "収入" : "支出";
        
        // 金額入力
        System.out.print("金額を入力: ");
        int amount = scanner.nextInt();
        scanner.nextLine(); // 改行消費
        
        // カテゴリ選択
        String category;
        if (type.equals("収入")) {
            category = "給与";
        } else {
            System.out.println("カテゴリを選択:");
            for (int i = 0; i < categories.length; i++) {
                System.out.println((i + 1) + ". " + categories[i]);
            }
            System.out.print("選択 (1-" + categories.length + "): ");
            int categoryChoice = scanner.nextInt();
            scanner.nextLine(); // 改行消費
            category = categories[categoryChoice - 1];
        }
        
        // メモ入力
        System.out.print("メモ (任意): ");
        String memo = scanner.nextLine();
        
        // 日付（今日の日付を自動設定）
        String date = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        
        // 取引を保存
        transactions.add(new Transaction(date, type, amount, category, memo));
        System.out.println("記録しました！");
    }
    
    private static void showTransactions() {
        System.out.println("\\n--- 取引一覧 ---");
        if (transactions.isEmpty()) {
            System.out.println("まだ取引が記録されていません。");
            return;
        }
        
        System.out.println("日付       | 種類 | 金額     | カテゴリ | メモ");
        System.out.println("----------------------------------------");
        for (Transaction t : transactions) {
            System.out.println(t);
        }
    }
    
    private static void showMonthlyReport() {
        System.out.println("\\n--- 月次レポート ---");
        if (transactions.isEmpty()) {
            System.out.println("まだ取引が記録されていません。");
            return;
        }
        
        int totalIncome = 0;
        int totalExpense = 0;
        
        for (Transaction t : transactions) {
            if (t.getType().equals("収入")) {
                totalIncome += t.getAmount();
            } else {
                totalExpense += t.getAmount();
            }
        }
        
        int balance = totalIncome - totalExpense;
        
        System.out.println("収入合計: " + String.format("%,d", totalIncome) + "円");
        System.out.println("支出合計: " + String.format("%,d", totalExpense) + "円");
        System.out.println("収支: " + String.format("%,d", balance) + "円");
        
        if (balance > 0) {
            System.out.println("✅ 黒字です！");
        } else if (balance < 0) {
            System.out.println("⚠️ 赤字です。支出を見直しましょう。");
        } else {
            System.out.println("収支が均衡しています。");
        }
    }
    
    private static void showCategoryReport() {
        System.out.println("\\n--- カテゴリ別レポート ---");
        if (transactions.isEmpty()) {
            System.out.println("まだ取引が記録されていません。");
            return;
        }
        
        HashMap<String, Integer> categoryTotal = new HashMap<>();
        
        for (Transaction t : transactions) {
            if (t.getType().equals("支出")) {
                String category = t.getCategory();
                categoryTotal.put(category, 
                    categoryTotal.getOrDefault(category, 0) + t.getAmount());
            }
        }
        
        if (categoryTotal.isEmpty()) {
            System.out.println("まだ支出が記録されていません。");
            return;
        }
        
        System.out.println("支出カテゴリ別:");
        for (Map.Entry<String, Integer> entry : categoryTotal.entrySet()) {
            System.out.println(entry.getKey() + ": " + 
                String.format("%,d", entry.getValue()) + "円");
        }
        
        // 最も支出の多いカテゴリを見つける
        String maxCategory = "";
        int maxAmount = 0;
        for (Map.Entry<String, Integer> entry : categoryTotal.entrySet()) {
            if (entry.getValue() > maxAmount) {
                maxAmount = entry.getValue();
                maxCategory = entry.getKey();
            }
        }
        
        System.out.println("\\n📊 最も支出の多いカテゴリ: " + maxCategory + 
            " (" + String.format("%,d", maxAmount) + "円)");
    }
}`,
    testCases: [
      {
        input: "収入 50000 給与",
        expectedOutput: "収入: 50000円が記録される",
        description: "収入の記録が正しく動作する"
      },
      {
        input: "支出 500 食費 昼食代",
        expectedOutput: "支出: 500円（食費）が記録される",
        description: "支出の記録が正しく動作する"
      },
      {
        input: "月次レポート表示",
        expectedOutput: "収入・支出・収支が正しく計算される",
        description: "集計機能が正しく動作する"
      }
    ],
    puzzleMode: true,
    codeBlocks: [
      // Phase 1: クラス設計のブロック
      {
        id: "class-definition",
        type: "class",
        category: "基本構造",
        label: "Transactionクラス定義",
        code: "class Transaction {\n    // フィールドと機能をここに追加\n}",
        description: "取引データを管理するクラス",
        phase: 1,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "fields-declaration",
        type: "variable",
        category: "フィールド",
        label: "フィールド宣言",
        code: "    private String date;\n    private String type;\n    private int amount;\n    private String category;\n    private String memo;",
        description: "取引に必要なデータを保存する変数",
        phase: 1,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "constructor",
        type: "method",
        category: "コンストラクタ",
        label: "コンストラクタ",
        code: "    public Transaction(String date, String type, int amount, String category, String memo) {\n        this.date = date;\n        this.type = type;\n        this.amount = amount;\n        this.category = category;\n        this.memo = memo;\n    }",
        description: "オブジェクト作成時にデータを設定",
        phase: 1,
        isRequired: true,
        dependencies: ["fields-declaration"],
        difficulty: "medium"
      },
      {
        id: "getters",
        type: "method",
        category: "ゲッター",
        label: "ゲッターメソッド",
        code: "    public String getDate() { return date; }\n    public String getType() { return type; }\n    public int getAmount() { return amount; }\n    public String getCategory() { return category; }\n    public String getMemo() { return memo; }",
        description: "フィールドの値を取得するメソッド",
        phase: 1,
        isRequired: true,
        dependencies: ["fields-declaration"],
        difficulty: "easy"
      },

      // Phase 2: メイン処理のブロック
      {
        id: "main-class",
        type: "class",
        category: "メインクラス",
        label: "HouseholdBudgetクラス",
        code: "public class HouseholdBudget {\n    // メイン処理をここに追加\n}",
        description: "家計簿アプリのメインクラス",
        phase: 2,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "static-variables",
        type: "variable",
        category: "静的変数",
        label: "静的変数宣言",
        code: "    private static ArrayList<Transaction> transactions = new ArrayList<>();\n    private static Scanner scanner = new Scanner(System.in);",
        description: "全体で使用するデータとツール",
        phase: 2,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "main-method",
        type: "method",
        category: "メインメソッド",
        label: "mainメソッド",
        code: "    public static void main(String[] args) {\n        System.out.println(\"=== 家計簿アプリ ===\");\n        // ここにメニューループを追加\n    }",
        description: "プログラムの開始点",
        phase: 2,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "menu-loop",
        type: "loop",
        category: "制御構造",
        label: "メニューループ",
        code: "        int choice;\n        do {\n            showMenu();\n            choice = scanner.nextInt();\n            scanner.nextLine();\n            \n            switch(choice) {\n                case 1: addTransaction(); break;\n                case 2: showTransactions(); break;\n                case 3: showMonthlyReport(); break;\n                case 4: showCategoryReport(); break;\n                case 5: System.out.println(\"終了します\"); break;\n                default: System.out.println(\"1-5を選択してください\");\n            }\n        } while(choice != 5);",
        description: "ユーザーの選択を繰り返し処理",
        phase: 2,
        isRequired: true,
        dependencies: ["main-method"],
        difficulty: "hard"
      },

      // Phase 3: データ入力のブロック
      {
        id: "add-transaction-method",
        type: "method",
        category: "データ入力",
        label: "取引記録メソッド",
        code: "    private static void addTransaction() {\n        System.out.println(\"\\n--- 取引記録 ---\");\n        // ここに入力処理を追加\n    }",
        description: "新しい取引を記録する",
        phase: 3,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "input-type",
        type: "statement",
        category: "入力処理",
        label: "種類入力",
        code: "        System.out.print(\"種類を選択 (1:収入 2:支出): \");\n        int typeChoice = scanner.nextInt();\n        String type = (typeChoice == 1) ? \"収入\" : \"支出\";",
        description: "収入か支出かを選択",
        phase: 3,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "input-amount",
        type: "statement",
        category: "入力処理",
        label: "金額入力",
        code: "        System.out.print(\"金額を入力: \");\n        int amount = scanner.nextInt();\n        scanner.nextLine();",
        description: "金額を数値で入力",
        phase: 3,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "save-transaction",
        type: "statement",
        category: "データ保存",
        label: "取引保存",
        code: "        String date = LocalDate.now().format(DateTimeFormatter.ofPattern(\"yyyy-MM-dd\"));\n        transactions.add(new Transaction(date, type, amount, category, memo));\n        System.out.println(\"記録しました！\");",
        description: "入力された取引をリストに保存",
        phase: 3,
        isRequired: true,
        dependencies: ["input-type", "input-amount"],
        difficulty: "medium"
      },

      // Phase 4: データ表示のブロック
      {
        id: "show-transactions-method",
        type: "method",
        category: "データ表示",
        label: "一覧表示メソッド",
        code: "    private static void showTransactions() {\n        System.out.println(\"\\n--- 取引一覧 ---\");\n        if (transactions.isEmpty()) {\n            System.out.println(\"まだ取引がありません\");\n            return;\n        }\n        \n        for (Transaction t : transactions) {\n            System.out.println(t.getDate() + \" | \" + t.getType() + \" | \" + t.getAmount() + \"円 | \" + t.getCategory());\n        }\n    }",
        description: "保存された取引を一覧表示",
        phase: 4,
        isRequired: true,
        difficulty: "medium"
      },

      // Phase 5: 集計のブロック
      {
        id: "monthly-report-method",
        type: "method",
        category: "レポート",
        label: "月次レポートメソッド",
        code: "    private static void showMonthlyReport() {\n        System.out.println(\"\\n--- 月次レポート ---\");\n        // ここに集計処理を追加\n    }",
        description: "月の収支を集計表示",
        phase: 5,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "calculate-totals",
        type: "statement",
        category: "集計処理",
        label: "合計計算",
        code: "        int totalIncome = 0;\n        int totalExpense = 0;\n        \n        for (Transaction t : transactions) {\n            if (t.getType().equals(\"収入\")) {\n                totalIncome += t.getAmount();\n            } else {\n                totalExpense += t.getAmount();\n            }\n        }\n        \n        int balance = totalIncome - totalExpense;",
        description: "収入と支出の合計を計算",
        phase: 5,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "display-results",
        type: "statement",
        category: "結果表示",
        label: "結果表示",
        code: "        System.out.println(\"収入合計: \" + totalIncome + \"円\");\n        System.out.println(\"支出合計: \" + totalExpense + \"円\");\n        System.out.println(\"収支: \" + balance + \"円\");\n        \n        if (balance > 0) {\n            System.out.println(\"✅ 黒字です！\");\n        } else if (balance < 0) {\n            System.out.println(\"⚠️ 赤字です\");\n        }",
        description: "計算結果を分かりやすく表示",
        phase: 5,
        isRequired: true,
        dependencies: ["calculate-totals"],
        difficulty: "easy"
      }
    ],
    codeSlots: [
      // Phase 1のスロット
      {
        id: "slot-class-def",
        phaseId: 1,
        label: "クラス定義",
        acceptedTypes: ["class"],
        acceptedCategories: ["基本構造"],
        position: 1,
        isRequired: true,
        hint: "Transactionクラスを定義しましょう"
      },
      {
        id: "slot-fields",
        phaseId: 1,
        label: "フィールド宣言",
        acceptedTypes: ["variable"],
        acceptedCategories: ["フィールド"],
        position: 2,
        isRequired: true,
        hint: "取引に必要なデータを保存する変数を宣言"
      },
      {
        id: "slot-constructor",
        phaseId: 1,
        label: "コンストラクタ",
        acceptedTypes: ["method"],
        acceptedCategories: ["コンストラクタ"],
        position: 3,
        isRequired: true,
        hint: "オブジェクト作成時にデータを設定するコンストラクタ"
      },
      {
        id: "slot-getters",
        phaseId: 1,
        label: "ゲッターメソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["ゲッター"],
        position: 4,
        isRequired: true,
        hint: "フィールドの値を取得するメソッド"
      },

      // Phase 2のスロット
      {
        id: "slot-main-class",
        phaseId: 2,
        label: "メインクラス",
        acceptedTypes: ["class"],
        acceptedCategories: ["メインクラス"],
        position: 1,
        isRequired: true,
        hint: "アプリケーションのメインクラス"
      },
      {
        id: "slot-static-vars",
        phaseId: 2,
        label: "静的変数",
        acceptedTypes: ["variable"],
        acceptedCategories: ["静的変数"],
        position: 2,
        isRequired: true,
        hint: "全体で使用するArrayListとScanner"
      },
      {
        id: "slot-main-method",
        phaseId: 2,
        label: "mainメソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["メインメソッド"],
        position: 3,
        isRequired: true,
        hint: "プログラムの開始点"
      },
      {
        id: "slot-menu-loop",
        phaseId: 2,
        label: "メニューループ",
        acceptedTypes: ["loop"],
        acceptedCategories: ["制御構造"],
        position: 4,
        isRequired: true,
        hint: "ユーザーの選択を繰り返し処理するループ"
      },

      // Phase 3のスロット
      {
        id: "slot-add-method",
        phaseId: 3,
        label: "取引記録メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["データ入力"],
        position: 1,
        isRequired: true,
        hint: "新しい取引を記録するメソッド"
      },
      {
        id: "slot-input-type",
        phaseId: 3,
        label: "種類入力",
        acceptedTypes: ["statement"],
        acceptedCategories: ["入力処理"],
        position: 2,
        isRequired: true,
        hint: "収入か支出かを選択する処理"
      },
      {
        id: "slot-input-amount",
        phaseId: 3,
        label: "金額入力",
        acceptedTypes: ["statement"],
        acceptedCategories: ["入力処理"],
        position: 3,
        isRequired: true,
        hint: "金額を数値で入力する処理"
      },
      {
        id: "slot-save",
        phaseId: 3,
        label: "取引保存",
        acceptedTypes: ["statement"],
        acceptedCategories: ["データ保存"],
        position: 4,
        isRequired: true,
        hint: "入力された取引をリストに保存"
      },

      // Phase 4のスロット
      {
        id: "slot-show-method",
        phaseId: 4,
        label: "一覧表示メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["データ表示"],
        position: 1,
        isRequired: true,
        hint: "保存された取引を一覧表示するメソッド"
      },

      // Phase 5のスロット
      {
        id: "slot-report-method",
        phaseId: 5,
        label: "月次レポートメソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["レポート"],
        position: 1,
        isRequired: true,
        hint: "月の収支を集計表示するメソッド"
      },
      {
        id: "slot-calculate",
        phaseId: 5,
        label: "合計計算",
        acceptedTypes: ["statement"],
        acceptedCategories: ["集計処理"],
        position: 2,
        isRequired: true,
        hint: "収入と支出の合計を計算する処理"
      },
      {
        id: "slot-display",
        phaseId: 5,
        label: "結果表示",
        acceptedTypes: ["statement"],
        acceptedCategories: ["結果表示"],
        position: 3,
        isRequired: true,
        hint: "計算結果を分かりやすく表示"
      }
    ]
  },
  {
    id: 2,
    title: "電卓アプリ",
    client: "システム開発部 佐藤さん",
    deadline: "明日まで",
    difficulty: "beginner",
    estimatedTime: "20-35分",
    description: "新人研修で使用する電卓アプリを作成してほしいです。基本的な四則演算ができて、計算履歴も表示できるシンプルなものをお願いします。",
    requirements: [
      "四則演算（加算、減算、乗算、除算）ができること",
      "連続計算ができること",
      "計算履歴を確認できること",
      "エラー処理（0での除算など）があること",
      "計算結果をクリアできること"
    ],
    constraints: [
      "Java初心者でも理解できるコードで",
      "複雑なライブラリは使わない",
      "コンソールアプリでOK",
      "小数点以下は2桁まで表示"
    ],
    learningPoints: [
      "基本的な数値計算と演算子の使用",
      "ArrayListでの履歴管理",
      "Scannerでのユーザー入力",
      "例外処理の基礎",
      "メニュー制御とループ処理"
    ],
    hints: [
      {
        level: 1,
        title: "計算クラスを考えよう",
        content: "Calculatorクラスを作成しましょう。現在の値、演算子、履歴を管理するクラスです。",
        codeExample: `class Calculator {
    private double currentValue;
    private ArrayList<String> history;
    
    // コンストラクタとメソッドを追加
}`
      },
      {
        level: 2,
        title: "四則演算メソッド",
        content: "加算、減算、乗算、除算のメソッドを作成しましょう。引数で値を受け取り、計算結果を返します。",
        codeExample: `public double add(double value) {
    currentValue += value;
    return currentValue;
}

public double subtract(double value) {
    currentValue -= value;
    return currentValue;
}`
      },
      {
        level: 3,
        title: "履歴管理",
        content: "ArrayListを使って計算履歴を保存しましょう。計算するたびに履歴に追加します。",
        codeExample: `private void addToHistory(String operation) {
    String historyEntry = String.format("%.2f %s", currentValue, operation);
    history.add(historyEntry);
}`
      },
      {
        level: 4,
        title: "例外処理",
        content: "0での除算などのエラーケースを処理しましょう。try-catchを使用します。",
        codeExample: `public double divide(double value) {
    try {
        if (value == 0) {
            throw new ArithmeticException("0で割ることはできません");
        }
        currentValue /= value;
        return currentValue;
    } catch (ArithmeticException e) {
        System.out.println("エラー: " + e.getMessage());
        return currentValue;
    }
}`
      },
      {
        level: 5,
        title: "メニューシステム",
        content: "ユーザーが操作を選択できるメニューシステムを作成しましょう。",
        codeExample: `Scanner scanner = new Scanner(System.in);
int choice;
do {
    showMenu();
    choice = scanner.nextInt();
    
    switch(choice) {
        case 1: // 計算処理
            break;
        case 2: // 履歴表示
            break;
    }
} while(choice != 5);`
      }
    ],
    phases: [
      {
        id: 1,
        title: "Phase 1: 電卓クラス設計",
        description: "Calculatorクラスを作成し、基本的なデータ構造を定義します",
        objectives: [
          "Calculatorクラスの作成",
          "必要なフィールドの定義",
          "コンストラクタの実装",
          "基本メソッドの枠組み作成"
        ],
        completed: false
      },
      {
        id: 2,
        title: "Phase 2: 四則演算実装",
        description: "加算、減算、乗算、除算の機能を実装します",
        objectives: [
          "addメソッドの実装",
          "subtractメソッドの実装",
          "multiplyメソッドの実装",
          "divideメソッドの実装（例外処理含む）"
        ],
        completed: false
      },
      {
        id: 3,
        title: "Phase 3: 履歴管理機能",
        description: "計算履歴の保存と表示機能を実装します",
        objectives: [
          "履歴保存機能の実装",
          "履歴表示機能の実装",
          "履歴クリア機能の実装",
          "履歴フォーマットの調整"
        ],
        completed: false
      },
      {
        id: 4,
        title: "Phase 4: メニューシステム",
        description: "ユーザーインターフェースとメニュー制御を実装します",
        objectives: [
          "メニュー表示機能",
          "ユーザー入力処理",
          "メニュー選択に応じた処理分岐",
          "ループ制御の実装"
        ],
        completed: false
      },
      {
        id: 5,
        title: "Phase 5: エラー処理と仕上げ",
        description: "エラー処理を強化し、アプリケーションを完成させます",
        objectives: [
          "入力値バリデーション",
          "エラーメッセージの改善",
          "ユーザビリティの向上",
          "最終テストと調整"
        ],
        completed: false
      }
    ],
    starterCode: `import java.util.*;

// ここにCalculatorクラスを作成してください
class Calculator {
    // フィールドを定義
    
    // コンストラクタを実装
    
    // 計算メソッドを実装
}

public class CalculatorApp {
    private static Calculator calculator = new Calculator();
    private static Scanner scanner = new Scanner(System.in);
    
    public static void main(String[] args) {
        System.out.println("=== 電卓アプリ ===");
        
        // ここにメニューシステムを実装してください
        int choice;
        do {
            showMenu();
            choice = scanner.nextInt();
            
            switch(choice) {
                case 1:
                    // 計算機能を実装
                    break;
                case 2:
                    // 履歴表示機能を実装
                    break;
                case 3:
                    // 履歴クリア機能を実装
                    break;
                case 4:
                    System.out.println("アプリを終了します。");
                    break;
                default:
                    System.out.println("1-4の数字を入力してください。");
            }
        } while(choice != 4);
    }
    
    private static void showMenu() {
        System.out.println("\\n1. 計算する");
        System.out.println("2. 履歴を見る");
        System.out.println("3. 履歴をクリア");
        System.out.println("4. 終了");
        System.out.print("選択してください (1-4): ");
    }
    
    // ここに各機能のメソッドを実装してください
}`,
    solutionCode: `import java.util.*;

class Calculator {
    private double currentValue;
    private ArrayList<String> history;
    
    public Calculator() {
        this.currentValue = 0.0;
        this.history = new ArrayList<>();
    }
    
    public double add(double value) {
        double oldValue = currentValue;
        currentValue += value;
        addToHistory(String.format("%.2f + %.2f = %.2f", oldValue, value, currentValue));
        return currentValue;
    }
    
    public double subtract(double value) {
        double oldValue = currentValue;
        currentValue -= value;
        addToHistory(String.format("%.2f - %.2f = %.2f", oldValue, value, currentValue));
        return currentValue;
    }
    
    public double multiply(double value) {
        double oldValue = currentValue;
        currentValue *= value;
        addToHistory(String.format("%.2f × %.2f = %.2f", oldValue, value, currentValue));
        return currentValue;
    }
    
    public double divide(double value) {
        try {
            if (value == 0) {
                throw new ArithmeticException("0で割ることはできません");
            }
            double oldValue = currentValue;
            currentValue /= value;
            addToHistory(String.format("%.2f ÷ %.2f = %.2f", oldValue, value, currentValue));
            return currentValue;
        } catch (ArithmeticException e) {
            System.out.println("エラー: " + e.getMessage());
            return currentValue;
        }
    }
    
    public void setValue(double value) {
        this.currentValue = value;
        addToHistory(String.format("値を %.2f に設定", value));
    }
    
    public double getCurrentValue() {
        return currentValue;
    }
    
    public void clear() {
        currentValue = 0.0;
        addToHistory("計算をクリア");
    }
    
    public void clearHistory() {
        history.clear();
        System.out.println("履歴をクリアしました。");
    }
    
    public void showHistory() {
        if (history.isEmpty()) {
            System.out.println("履歴はありません。");
            return;
        }
        
        System.out.println("\\n--- 計算履歴 ---");
        for (int i = 0; i < history.size(); i++) {
            System.out.println((i + 1) + ". " + history.get(i));
        }
    }
    
    private void addToHistory(String operation) {
        history.add(operation);
    }
}

public class CalculatorApp {
    private static Calculator calculator = new Calculator();
    private static Scanner scanner = new Scanner(System.in);
    
    public static void main(String[] args) {
        System.out.println("=== 電卓アプリ ===");
        
        int choice;
        do {
            showMenu();
            choice = scanner.nextInt();
            
            switch(choice) {
                case 1:
                    performCalculation();
                    break;
                case 2:
                    calculator.showHistory();
                    break;
                case 3:
                    calculator.clearHistory();
                    break;
                case 4:
                    System.out.println("アプリを終了します。");
                    break;
                default:
                    System.out.println("1-4の数字を入力してください。");
            }
        } while(choice != 4);
    }
    
    private static void showMenu() {
        System.out.println("\\n現在の値: " + String.format("%.2f", calculator.getCurrentValue()));
        System.out.println("1. 計算する");
        System.out.println("2. 履歴を見る");
        System.out.println("3. 履歴をクリア");
        System.out.println("4. 終了");
        System.out.print("選択してください (1-4): ");
    }
    
    private static void performCalculation() {
        System.out.println("\\n--- 計算 ---");
        System.out.println("1. 値を設定");
        System.out.println("2. 加算 (+)");
        System.out.println("3. 減算 (-)");
        System.out.println("4. 乗算 (×)");
        System.out.println("5. 除算 (÷)");
        System.out.println("6. クリア");
        System.out.print("操作を選択してください (1-6): ");
        
        int operation = scanner.nextInt();
        double value;
        double result;
        
        switch(operation) {
            case 1:
                System.out.print("値を入力してください: ");
                value = scanner.nextDouble();
                calculator.setValue(value);
                System.out.println("値を " + String.format("%.2f", value) + " に設定しました。");
                break;
            case 2:
                System.out.print("加算する値を入力してください: ");
                value = scanner.nextDouble();
                result = calculator.add(value);
                System.out.println("結果: " + String.format("%.2f", result));
                break;
            case 3:
                System.out.print("減算する値を入力してください: ");
                value = scanner.nextDouble();
                result = calculator.subtract(value);
                System.out.println("結果: " + String.format("%.2f", result));
                break;
            case 4:
                System.out.print("乗算する値を入力してください: ");
                value = scanner.nextDouble();
                result = calculator.multiply(value);
                System.out.println("結果: " + String.format("%.2f", result));
                break;
            case 5:
                System.out.print("除算する値を入力してください: ");
                value = scanner.nextDouble();
                result = calculator.divide(value);
                System.out.println("結果: " + String.format("%.2f", result));
                break;
            case 6:
                calculator.clear();
                System.out.println("計算をクリアしました。");
                break;
            default:
                System.out.println("1-6の数字を入力してください。");
        }
    }
}`,
    testCases: [
      {
        input: "値設定 10, 加算 5",
        expectedOutput: "10.00 + 5.00 = 15.00",
        description: "基本的な加算が正しく動作する"
      },
      {
        input: "乗算 3",
        expectedOutput: "15.00 × 3.00 = 45.00",
        description: "連続計算が正しく動作する"
      },
      {
        input: "除算 0",
        expectedOutput: "エラー: 0で割ることはできません",
        description: "0除算エラーが正しく処理される"
      },
      {
        input: "履歴表示",
        expectedOutput: "計算履歴が時系列で表示される",
        description: "履歴機能が正しく動作する"
      }
    ],
    puzzleMode: true,
    codeBlocks: [
      // Phase 1: クラス設計のブロック
      {
        id: "calc-class-definition",
        type: "class",
        category: "基本構造",
        label: "Calculatorクラス定義",
        code: "class Calculator {\n    // フィールドと機能をここに追加\n}",
        description: "計算機能を管理するクラス",
        phase: 1,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "calc-fields-declaration",
        type: "variable",
        category: "フィールド",
        label: "フィールド宣言",
        code: "    private double currentValue;\n    private ArrayList<String> history;",
        description: "現在の値と履歴を保存する変数",
        phase: 1,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "calc-constructor",
        type: "method",
        category: "コンストラクタ",
        label: "コンストラクタ",
        code: "    public Calculator() {\n        this.currentValue = 0.0;\n        this.history = new ArrayList<>();\n    }",
        description: "オブジェクト作成時に初期化",
        phase: 1,
        isRequired: true,
        dependencies: ["calc-fields-declaration"],
        difficulty: "medium"
      },
      {
        id: "calc-getter",
        type: "method",
        category: "ゲッター",
        label: "値取得メソッド",
        code: "    public double getCurrentValue() {\n        return currentValue;\n    }",
        description: "現在の計算値を取得",
        phase: 1,
        isRequired: true,
        dependencies: ["calc-fields-declaration"],
        difficulty: "easy"
      },

      // Phase 2: 四則演算のブロック
      {
        id: "add-method",
        type: "method",
        category: "四則演算",
        label: "加算メソッド",
        code: "    public double add(double value) {\n        double oldValue = currentValue;\n        currentValue += value;\n        addToHistory(String.format(\"%.2f + %.2f = %.2f\", oldValue, value, currentValue));\n        return currentValue;\n    }",
        description: "数値を加算する",
        phase: 2,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "subtract-method",
        type: "method",
        category: "四則演算",
        label: "減算メソッド",
        code: "    public double subtract(double value) {\n        double oldValue = currentValue;\n        currentValue -= value;\n        addToHistory(String.format(\"%.2f - %.2f = %.2f\", oldValue, value, currentValue));\n        return currentValue;\n    }",
        description: "数値を減算する",
        phase: 2,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "multiply-method",
        type: "method",
        category: "四則演算",
        label: "乗算メソッド",
        code: "    public double multiply(double value) {\n        double oldValue = currentValue;\n        currentValue *= value;\n        addToHistory(String.format(\"%.2f × %.2f = %.2f\", oldValue, value, currentValue));\n        return currentValue;\n    }",
        description: "数値を乗算する",
        phase: 2,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "divide-method",
        type: "method",
        category: "四則演算",
        label: "除算メソッド",
        code: "    public double divide(double value) {\n        try {\n            if (value == 0) {\n                throw new ArithmeticException(\"0で割ることはできません\");\n            }\n            double oldValue = currentValue;\n            currentValue /= value;\n            addToHistory(String.format(\"%.2f ÷ %.2f = %.2f\", oldValue, value, currentValue));\n            return currentValue;\n        } catch (ArithmeticException e) {\n            System.out.println(\"エラー: \" + e.getMessage());\n            return currentValue;\n        }\n    }",
        description: "数値を除算する（例外処理付き）",
        phase: 2,
        isRequired: true,
        difficulty: "hard"
      },

      // Phase 3: 履歴管理のブロック
      {
        id: "add-to-history",
        type: "method",
        category: "履歴管理",
        label: "履歴追加メソッド",
        code: "    private void addToHistory(String operation) {\n        history.add(operation);\n    }",
        description: "計算履歴に追加",
        phase: 3,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "show-history",
        type: "method",
        category: "履歴管理",
        label: "履歴表示メソッド",
        code: "    public void showHistory() {\n        if (history.isEmpty()) {\n            System.out.println(\"履歴はありません。\");\n            return;\n        }\n        \n        System.out.println(\"\\n--- 計算履歴 ---\");\n        for (int i = 0; i < history.size(); i++) {\n            System.out.println((i + 1) + \". \" + history.get(i));\n        }\n    }",
        description: "保存された履歴を表示",
        phase: 3,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "clear-history",
        type: "method",
        category: "履歴管理",
        label: "履歴クリアメソッド",
        code: "    public void clearHistory() {\n        history.clear();\n        System.out.println(\"履歴をクリアしました。\");\n    }",
        description: "履歴をすべて削除",
        phase: 3,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "clear-value",
        type: "method",
        category: "履歴管理",
        label: "値クリアメソッド",
        code: "    public void clear() {\n        currentValue = 0.0;\n        addToHistory(\"計算をクリア\");\n    }",
        description: "現在の値をリセット",
        phase: 3,
        isRequired: true,
        difficulty: "easy"
      },

      // Phase 4: メニューシステムのブロック
      {
        id: "calc-main-class",
        type: "class",
        category: "メインクラス",
        label: "CalculatorAppクラス",
        code: "public class CalculatorApp {\n    // メイン処理をここに追加\n}",
        description: "電卓アプリのメインクラス",
        phase: 4,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "calc-static-variables",
        type: "variable",
        category: "静的変数",
        label: "静的変数宣言",
        code: "    private static Calculator calculator = new Calculator();\n    private static Scanner scanner = new Scanner(System.in);",
        description: "全体で使用する電卓とスキャナー",
        phase: 4,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "calc-main-method",
        type: "method",
        category: "メインメソッド",
        label: "mainメソッド",
        code: "    public static void main(String[] args) {\n        System.out.println(\"=== 電卓アプリ ===\");\n        // ここにメニューループを追加\n    }",
        description: "プログラムの開始点",
        phase: 4,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "calc-menu-loop",
        type: "loop",
        category: "制御構造",
        label: "メニューループ",
        code: "        int choice;\n        do {\n            showMenu();\n            choice = scanner.nextInt();\n            \n            switch(choice) {\n                case 1: performCalculation(); break;\n                case 2: calculator.showHistory(); break;\n                case 3: calculator.clearHistory(); break;\n                case 4: System.out.println(\"終了します\"); break;\n                default: System.out.println(\"1-4を選択してください\");\n            }\n        } while(choice != 4);",
        description: "ユーザーの選択を繰り返し処理",
        phase: 4,
        isRequired: true,
        dependencies: ["calc-main-method"],
        difficulty: "hard"
      },

      // Phase 5: エラー処理と仕上げのブロック
      {
        id: "show-menu-method",
        type: "method",
        category: "ユーザーインターフェース",
        label: "メニュー表示メソッド",
        code: "    private static void showMenu() {\n        System.out.println(\"\\n現在の値: \" + String.format(\"%.2f\", calculator.getCurrentValue()));\n        System.out.println(\"1. 計算する\");\n        System.out.println(\"2. 履歴を見る\");\n        System.out.println(\"3. 履歴をクリア\");\n        System.out.println(\"4. 終了\");\n        System.out.print(\"選択してください (1-4): \");\n    }",
        description: "メニューを表示",
        phase: 5,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "perform-calculation",
        type: "method",
        category: "ユーザーインターフェース",
        label: "計算実行メソッド",
        code: "    private static void performCalculation() {\n        System.out.println(\"\\n--- 計算 ---\");\n        System.out.println(\"1. 値を設定 2. 加算 3. 減算 4. 乗算 5. 除算 6. クリア\");\n        System.out.print(\"操作を選択 (1-6): \");\n        \n        int operation = scanner.nextInt();\n        double value, result;\n        \n        switch(operation) {\n            case 1:\n                System.out.print(\"値を入力: \");\n                value = scanner.nextDouble();\n                calculator.setValue(value);\n                break;\n            case 2:\n                System.out.print(\"加算する値: \");\n                value = scanner.nextDouble();\n                result = calculator.add(value);\n                System.out.println(\"結果: \" + String.format(\"%.2f\", result));\n                break;\n            // ... 他の操作も同様\n        }\n    }",
        description: "計算操作の詳細処理",
        phase: 5,
        isRequired: true,
        difficulty: "hard"
      }
    ],
    codeSlots: [
      // Phase 1のスロット
      {
        id: "calc-slot-class-def",
        phaseId: 1,
        label: "クラス定義",
        acceptedTypes: ["class"],
        acceptedCategories: ["基本構造"],
        position: 1,
        isRequired: true,
        hint: "Calculatorクラスを定義しましょう"
      },
      {
        id: "calc-slot-fields",
        phaseId: 1,
        label: "フィールド宣言",
        acceptedTypes: ["variable"],
        acceptedCategories: ["フィールド"],
        position: 2,
        isRequired: true,
        hint: "現在の値と履歴を保存する変数を宣言"
      },
      {
        id: "calc-slot-constructor",
        phaseId: 1,
        label: "コンストラクタ",
        acceptedTypes: ["method"],
        acceptedCategories: ["コンストラクタ"],
        position: 3,
        isRequired: true,
        hint: "オブジェクト作成時に初期化するコンストラクタ"
      },
      {
        id: "calc-slot-getter",
        phaseId: 1,
        label: "値取得メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["ゲッター"],
        position: 4,
        isRequired: true,
        hint: "現在の計算値を取得するメソッド"
      },

      // Phase 2のスロット
      {
        id: "calc-slot-add",
        phaseId: 2,
        label: "加算メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["四則演算"],
        position: 1,
        isRequired: true,
        hint: "数値を加算するメソッド"
      },
      {
        id: "calc-slot-subtract",
        phaseId: 2,
        label: "減算メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["四則演算"],
        position: 2,
        isRequired: true,
        hint: "数値を減算するメソッド"
      },
      {
        id: "calc-slot-multiply",
        phaseId: 2,
        label: "乗算メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["四則演算"],
        position: 3,
        isRequired: true,
        hint: "数値を乗算するメソッド"
      },
      {
        id: "calc-slot-divide",
        phaseId: 2,
        label: "除算メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["四則演算"],
        position: 4,
        isRequired: true,
        hint: "数値を除算するメソッド（例外処理付き）"
      },

      // Phase 3のスロット
      {
        id: "calc-slot-add-history",
        phaseId: 3,
        label: "履歴追加メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["履歴管理"],
        position: 1,
        isRequired: true,
        hint: "計算履歴に追加するメソッド"
      },
      {
        id: "calc-slot-show-history",
        phaseId: 3,
        label: "履歴表示メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["履歴管理"],
        position: 2,
        isRequired: true,
        hint: "保存された履歴を表示するメソッド"
      },
      {
        id: "calc-slot-clear-history",
        phaseId: 3,
        label: "履歴クリアメソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["履歴管理"],
        position: 3,
        isRequired: true,
        hint: "履歴をすべて削除するメソッド"
      },
      {
        id: "calc-slot-clear-value",
        phaseId: 3,
        label: "値クリアメソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["履歴管理"],
        position: 4,
        isRequired: true,
        hint: "現在の値をリセットするメソッド"
      },

      // Phase 4のスロット
      {
        id: "calc-slot-main-class",
        phaseId: 4,
        label: "メインクラス",
        acceptedTypes: ["class"],
        acceptedCategories: ["メインクラス"],
        position: 1,
        isRequired: true,
        hint: "アプリケーションのメインクラス"
      },
      {
        id: "calc-slot-static-vars",
        phaseId: 4,
        label: "静的変数",
        acceptedTypes: ["variable"],
        acceptedCategories: ["静的変数"],
        position: 2,
        isRequired: true,
        hint: "全体で使用する電卓とスキャナー"
      },
      {
        id: "calc-slot-main-method",
        phaseId: 4,
        label: "mainメソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["メインメソッド"],
        position: 3,
        isRequired: true,
        hint: "プログラムの開始点"
      },
      {
        id: "calc-slot-menu-loop",
        phaseId: 4,
        label: "メニューループ",
        acceptedTypes: ["loop"],
        acceptedCategories: ["制御構造"],
        position: 4,
        isRequired: true,
        hint: "ユーザーの選択を繰り返し処理するループ"
      },

      // Phase 5のスロット
      {
        id: "calc-slot-show-menu",
        phaseId: 5,
        label: "メニュー表示メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["ユーザーインターフェース"],
        position: 1,
        isRequired: true,
        hint: "メニューを表示するメソッド"
      },
      {
        id: "calc-slot-perform-calc",
        phaseId: 5,
        label: "計算実行メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["ユーザーインターフェース"],
        position: 2,
        isRequired: true,
        hint: "計算操作の詳細処理を行うメソッド"
      }
    ]
  },
  {
    id: 3,
    title: "ToDoリスト管理",
    client: "プロジェクト管理部 山田さん",
    deadline: "今週中",
    difficulty: "beginner",
    estimatedTime: "25-40分",
    description: "チーム内で使用するシンプルなToDoリスト管理アプリを作成してほしいです。タスクの追加・完了・削除ができて、優先度も設定できるようにしてください。",
    requirements: [
      "タスクの追加・編集・削除ができること",
      "タスクの完了/未完了を管理できること",
      "優先度（高・中・低）を設定できること",
      "期限を設定できること",
      "タスクの一覧表示と絞り込みができること"
    ],
    constraints: [
      "Java初心者でも理解できるコードで",
      "複雑なライブラリは使わない",
      "コンソールアプリでOK",
      "データはメモリ上で管理（永続化不要）"
    ],
    learningPoints: [
      "オブジェクト指向設計の基礎",
      "ArrayListでのデータ管理",
      "日付の扱い方（LocalDate）",
      "列挙型（enum）の使用",
      "条件分岐とループ処理の応用"
    ],
    hints: [
      {
        level: 1,
        title: "Taskクラスを考えよう",
        content: "Taskクラスを作成しましょう。タスクに必要な情報（ID、タイトル、説明、優先度、期限、完了状態）を持つクラスです。",
        codeExample: `class Task {
    private int id;
    private String title;
    private String description;
    private Priority priority;
    private LocalDate dueDate;
    private boolean isCompleted;
    
    // コンストラクタとゲッター・セッターを追加
}`
      },
      {
        level: 2,
        title: "優先度をenumで定義",
        content: "優先度をenum（列挙型）で定義しましょう。HIGH、MEDIUM、LOWの3つの値を持ちます。",
        codeExample: `enum Priority {
    HIGH("高"),
    MEDIUM("中"),
    LOW("低");
    
    private String label;
    
    Priority(String label) {
        this.label = label;
    }
    
    public String getLabel() {
        return label;
    }
}`
      },
      {
        level: 3,
        title: "タスク管理クラス",
        content: "TaskManagerクラスを作成して、タスクの追加・削除・更新・検索機能を実装しましょう。",
        codeExample: `class TaskManager {
    private ArrayList<Task> tasks;
    private int nextId;
    
    public TaskManager() {
        this.tasks = new ArrayList<>();
        this.nextId = 1;
    }
    
    public void addTask(Task task) {
        task.setId(nextId++);
        tasks.add(task);
    }
}`
      },
      {
        level: 4,
        title: "絞り込み機能",
        content: "完了状態や優先度でタスクを絞り込む機能を実装しましょう。Stream APIを使うと簡潔に書けます。",
        codeExample: `public ArrayList<Task> getTasksByStatus(boolean completed) {
    ArrayList<Task> filtered = new ArrayList<>();
    for(Task task : tasks) {
        if(task.isCompleted() == completed) {
            filtered.add(task);
        }
    }
    return filtered;
}`
      },
      {
        level: 5,
        title: "期限チェック",
        content: "期限が近いタスクや期限切れのタスクを確認する機能を実装しましょう。",
        codeExample: `public ArrayList<Task> getOverdueTasks() {
    ArrayList<Task> overdue = new ArrayList<>();
    LocalDate today = LocalDate.now();
    
    for(Task task : tasks) {
        if(!task.isCompleted() && 
           task.getDueDate() != null && 
           task.getDueDate().isBefore(today)) {
            overdue.add(task);
        }
    }
    return overdue;
}`
      }
    ],
    phases: [
      {
        id: 1,
        title: "Phase 1: データモデル設計",
        description: "TaskクラスとPriority enumを作成し、基本的なデータ構造を定義します",
        objectives: [
          "Priority enumの作成",
          "Taskクラスの作成",
          "必要なフィールドの定義",
          "コンストラクタとゲッター・セッターの実装"
        ],
        completed: false
      },
      {
        id: 2,
        title: "Phase 2: タスク管理機能",
        description: "TaskManagerクラスを作成し、基本的なCRUD操作を実装します",
        objectives: [
          "TaskManagerクラスの作成",
          "タスク追加機能の実装",
          "タスク削除機能の実装",
          "タスク更新機能の実装"
        ],
        completed: false
      },
      {
        id: 3,
        title: "Phase 3: 表示機能",
        description: "タスクの一覧表示と詳細表示機能を実装します",
        objectives: [
          "全タスク一覧表示",
          "未完了タスクのみ表示",
          "完了タスクのみ表示",
          "優先度別の表示"
        ],
        completed: false
      },
      {
        id: 4,
        title: "Phase 4: 絞り込み・検索機能",
        description: "タスクの絞り込みと検索機能を実装します",
        objectives: [
          "優先度での絞り込み",
          "期限での絞り込み",
          "キーワード検索機能",
          "複合条件での検索"
        ],
        completed: false
      },
      {
        id: 5,
        title: "Phase 5: ユーザーインターフェース",
        description: "メニューシステムと入力処理を実装し、アプリを完成させます",
        objectives: [
          "メインメニューの実装",
          "ユーザー入力の処理",
          "エラーハンドリング",
          "期限切れタスクの警告表示"
        ],
        completed: false
      }
    ],
    starterCode: `import java.util.*;
import java.time.*;
import java.time.format.*;

// Priority enumを作成してください
enum Priority {
    // ここに優先度を定義
}

// Taskクラスを作成してください
class Task {
    // フィールドを定義
    
    // コンストラクタを実装
    
    // ゲッター・セッターを実装
}

// TaskManagerクラスを作成してください
class TaskManager {
    // タスクを管理する機能を実装
}

public class TodoListApp {
    private static TaskManager taskManager = new TaskManager();
    private static Scanner scanner = new Scanner(System.in);
    
    public static void main(String[] args) {
        System.out.println("=== ToDoリスト管理アプリ ===");
        
        // ここにメニューシステムを実装してください
        int choice;
        do {
            showMenu();
            choice = scanner.nextInt();
            scanner.nextLine(); // 改行消費
            
            switch(choice) {
                case 1:
                    // タスク追加機能を実装
                    break;
                case 2:
                    // タスク一覧表示機能を実装
                    break;
                case 3:
                    // タスク完了機能を実装
                    break;
                case 4:
                    // タスク削除機能を実装
                    break;
                case 5:
                    System.out.println("アプリを終了します。");
                    break;
                default:
                    System.out.println("1-5の数字を入力してください。");
            }
        } while(choice != 5);
    }
    
    private static void showMenu() {
        System.out.println("\\n1. タスクを追加");
        System.out.println("2. タスク一覧を表示");
        System.out.println("3. タスクを完了");
        System.out.println("4. タスクを削除");
        System.out.println("5. 終了");
        System.out.print("選択してください (1-5): ");
    }
    
    // ここに各機能のメソッドを実装してください
}`,
    solutionCode: `import java.util.*;
import java.time.*;
import java.time.format.*;

enum Priority {
    HIGH("高"),
    MEDIUM("中"),
    LOW("低");
    
    private String label;
    
    Priority(String label) {
        this.label = label;
    }
    
    public String getLabel() {
        return label;
    }
}

class Task {
    private int id;
    private String title;
    private String description;
    private Priority priority;
    private LocalDate dueDate;
    private boolean isCompleted;
    
    public Task(String title, String description, Priority priority, LocalDate dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.isCompleted = false;
    }
    
    // ゲッター・セッター
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public Priority getPriority() { return priority; }
    public void setPriority(Priority priority) { this.priority = priority; }
    public LocalDate getDueDate() { return dueDate; }
    public void setDueDate(LocalDate dueDate) { this.dueDate = dueDate; }
    public boolean isCompleted() { return isCompleted; }
    public void setCompleted(boolean completed) { isCompleted = completed; }
    
    @Override
    public String toString() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
        String dueDateStr = dueDate != null ? dueDate.format(formatter) : "期限なし";
        String status = isCompleted ? "✓" : "○";
        return String.format("[%s] #%d %s | 優先度: %s | 期限: %s | %s",
            status, id, title, priority.getLabel(), dueDateStr,
            isCompleted ? "完了" : "未完了");
    }
}

class TaskManager {
    private ArrayList<Task> tasks;
    private int nextId;
    
    public TaskManager() {
        this.tasks = new ArrayList<>();
        this.nextId = 1;
    }
    
    public void addTask(Task task) {
        task.setId(nextId++);
        tasks.add(task);
        System.out.println("タスクを追加しました: " + task.getTitle());
    }
    
    public void deleteTask(int id) {
        Task task = findTaskById(id);
        if (task != null) {
            tasks.remove(task);
            System.out.println("タスクを削除しました: " + task.getTitle());
        } else {
            System.out.println("指定されたIDのタスクが見つかりません。");
        }
    }
    
    public void completeTask(int id) {
        Task task = findTaskById(id);
        if (task != null) {
            task.setCompleted(true);
            System.out.println("タスクを完了しました: " + task.getTitle());
        } else {
            System.out.println("指定されたIDのタスクが見つかりません。");
        }
    }
    
    public Task findTaskById(int id) {
        for (Task task : tasks) {
            if (task.getId() == id) {
                return task;
            }
        }
        return null;
    }
    
    public ArrayList<Task> getAllTasks() {
        return new ArrayList<>(tasks);
    }
    
    public ArrayList<Task> getIncompleteTasks() {
        ArrayList<Task> incomplete = new ArrayList<>();
        for (Task task : tasks) {
            if (!task.isCompleted()) {
                incomplete.add(task);
            }
        }
        return incomplete;
    }
    
    public ArrayList<Task> getCompletedTasks() {
        ArrayList<Task> completed = new ArrayList<>();
        for (Task task : tasks) {
            if (task.isCompleted()) {
                completed.add(task);
            }
        }
        return completed;
    }
    
    public ArrayList<Task> getTasksByPriority(Priority priority) {
        ArrayList<Task> filtered = new ArrayList<>();
        for (Task task : tasks) {
            if (task.getPriority() == priority) {
                filtered.add(task);
            }
        }
        return filtered;
    }
    
    public ArrayList<Task> getOverdueTasks() {
        ArrayList<Task> overdue = new ArrayList<>();
        LocalDate today = LocalDate.now();
        
        for (Task task : tasks) {
            if (!task.isCompleted() && 
                task.getDueDate() != null && 
                task.getDueDate().isBefore(today)) {
                overdue.add(task);
            }
        }
        return overdue;
    }
}

public class TodoListApp {
    private static TaskManager taskManager = new TaskManager();
    private static Scanner scanner = new Scanner(System.in);
    private static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
    
    public static void main(String[] args) {
        System.out.println("=== ToDoリスト管理アプリ ===");
        
        // サンプルデータの追加
        addSampleData();
        
        int choice;
        do {
            showMenu();
            choice = scanner.nextInt();
            scanner.nextLine(); // 改行消費
            
            switch(choice) {
                case 1:
                    addTask();
                    break;
                case 2:
                    showTasks();
                    break;
                case 3:
                    completeTask();
                    break;
                case 4:
                    deleteTask();
                    break;
                case 5:
                    showOverdueTasks();
                    break;
                case 6:
                    showTasksByPriority();
                    break;
                case 7:
                    System.out.println("アプリを終了します。");
                    break;
                default:
                    System.out.println("1-7の数字を入力してください。");
            }
        } while(choice != 7);
    }
    
    private static void showMenu() {
        System.out.println("\\n========== メインメニュー ==========");
        
        // 期限切れタスクの確認
        ArrayList<Task> overdue = taskManager.getOverdueTasks();
        if (!overdue.isEmpty()) {
            System.out.println("⚠️ 期限切れのタスクが" + overdue.size() + "件あります！");
        }
        
        System.out.println("1. タスクを追加");
        System.out.println("2. タスク一覧を表示");
        System.out.println("3. タスクを完了");
        System.out.println("4. タスクを削除");
        System.out.println("5. 期限切れタスクを表示");
        System.out.println("6. 優先度別に表示");
        System.out.println("7. 終了");
        System.out.print("選択してください (1-7): ");
    }
    
    private static void addTask() {
        System.out.println("\\n--- タスク追加 ---");
        
        System.out.print("タイトルを入力: ");
        String title = scanner.nextLine();
        
        System.out.print("説明を入力: ");
        String description = scanner.nextLine();
        
        System.out.println("優先度を選択:");
        System.out.println("1. 高");
        System.out.println("2. 中");
        System.out.println("3. 低");
        System.out.print("選択 (1-3): ");
        int priorityChoice = scanner.nextInt();
        scanner.nextLine(); // 改行消費
        
        Priority priority;
        switch(priorityChoice) {
            case 1: priority = Priority.HIGH; break;
            case 2: priority = Priority.MEDIUM; break;
            case 3: priority = Priority.LOW; break;
            default: priority = Priority.MEDIUM; break;
        }
        
        System.out.print("期限を設定しますか？ (y/n): ");
        String setDueDate = scanner.nextLine();
        LocalDate dueDate = null;
        
        if (setDueDate.equalsIgnoreCase("y")) {
            System.out.print("期限を入力 (yyyy/MM/dd): ");
            String dueDateStr = scanner.nextLine();
            try {
                dueDate = LocalDate.parse(dueDateStr, formatter);
            } catch (DateTimeParseException e) {
                System.out.println("日付の形式が正しくありません。期限なしで登録します。");
            }
        }
        
        Task task = new Task(title, description, priority, dueDate);
        taskManager.addTask(task);
    }
    
    private static void showTasks() {
        System.out.println("\\n--- タスク一覧 ---");
        System.out.println("1. すべてのタスク");
        System.out.println("2. 未完了のタスク");
        System.out.println("3. 完了済みのタスク");
        System.out.print("選択 (1-3): ");
        int choice = scanner.nextInt();
        scanner.nextLine(); // 改行消費
        
        ArrayList<Task> tasks;
        switch(choice) {
            case 1:
                tasks = taskManager.getAllTasks();
                System.out.println("\\n=== すべてのタスク ===");
                break;
            case 2:
                tasks = taskManager.getIncompleteTasks();
                System.out.println("\\n=== 未完了のタスク ===");
                break;
            case 3:
                tasks = taskManager.getCompletedTasks();
                System.out.println("\\n=== 完了済みのタスク ===");
                break;
            default:
                tasks = taskManager.getAllTasks();
                System.out.println("\\n=== すべてのタスク ===");
        }
        
        if (tasks.isEmpty()) {
            System.out.println("タスクがありません。");
        } else {
            for (Task task : tasks) {
                System.out.println(task);
                if (!task.getDescription().isEmpty()) {
                    System.out.println("  説明: " + task.getDescription());
                }
            }
        }
    }
    
    private static void completeTask() {
        System.out.println("\\n--- タスク完了 ---");
        
        ArrayList<Task> incompleteTasks = taskManager.getIncompleteTasks();
        if (incompleteTasks.isEmpty()) {
            System.out.println("未完了のタスクがありません。");
            return;
        }
        
        System.out.println("未完了のタスク:");
        for (Task task : incompleteTasks) {
            System.out.println(task);
        }
        
        System.out.print("完了するタスクのIDを入力: ");
        int id = scanner.nextInt();
        scanner.nextLine(); // 改行消費
        
        taskManager.completeTask(id);
    }
    
    private static void deleteTask() {
        System.out.println("\\n--- タスク削除 ---");
        
        ArrayList<Task> allTasks = taskManager.getAllTasks();
        if (allTasks.isEmpty()) {
            System.out.println("タスクがありません。");
            return;
        }
        
        System.out.println("すべてのタスク:");
        for (Task task : allTasks) {
            System.out.println(task);
        }
        
        System.out.print("削除するタスクのIDを入力: ");
        int id = scanner.nextInt();
        scanner.nextLine(); // 改行消費
        
        taskManager.deleteTask(id);
    }
    
    private static void showOverdueTasks() {
        System.out.println("\\n--- 期限切れタスク ---");
        
        ArrayList<Task> overdueTasks = taskManager.getOverdueTasks();
        if (overdueTasks.isEmpty()) {
            System.out.println("期限切れのタスクはありません。");
        } else {
            System.out.println("⚠️ 以下のタスクが期限切れです:");
            for (Task task : overdueTasks) {
                System.out.println(task);
            }
        }
    }
    
    private static void showTasksByPriority() {
        System.out.println("\\n--- 優先度別表示 ---");
        
        System.out.println("=== 優先度: 高 ===");
        ArrayList<Task> highPriority = taskManager.getTasksByPriority(Priority.HIGH);
        if (highPriority.isEmpty()) {
            System.out.println("タスクなし");
        } else {
            for (Task task : highPriority) {
                System.out.println(task);
            }
        }
        
        System.out.println("\\n=== 優先度: 中 ===");
        ArrayList<Task> mediumPriority = taskManager.getTasksByPriority(Priority.MEDIUM);
        if (mediumPriority.isEmpty()) {
            System.out.println("タスクなし");
        } else {
            for (Task task : mediumPriority) {
                System.out.println(task);
            }
        }
        
        System.out.println("\\n=== 優先度: 低 ===");
        ArrayList<Task> lowPriority = taskManager.getTasksByPriority(Priority.LOW);
        if (lowPriority.isEmpty()) {
            System.out.println("タスクなし");
        } else {
            for (Task task : lowPriority) {
                System.out.println(task);
            }
        }
    }
    
    private static void addSampleData() {
        LocalDate today = LocalDate.now();
        taskManager.addTask(new Task("レポート作成", "月次レポートを作成する", Priority.HIGH, today.plusDays(2)));
        taskManager.addTask(new Task("会議準備", "明日の会議の資料を準備", Priority.HIGH, today.plusDays(1)));
        taskManager.addTask(new Task("メール返信", "クライアントへの返信", Priority.MEDIUM, today));
        taskManager.addTask(new Task("書類整理", "デスクの書類を整理", Priority.LOW, null));
        taskManager.addTask(new Task("勉強会参加", "Java勉強会に参加", Priority.MEDIUM, today.minusDays(1)));
    }
}`,
    testCases: [
      {
        input: "タスク追加「レポート作成」優先度:高",
        expectedOutput: "タスクID #1 として追加される",
        description: "タスクの追加が正しく動作する"
      },
      {
        input: "タスク完了 ID:1",
        expectedOutput: "タスク「レポート作成」が完了済みになる",
        description: "タスクの完了機能が正しく動作する"
      },
      {
        input: "期限切れタスク表示",
        expectedOutput: "期限が過ぎた未完了タスクが表示される",
        description: "期限切れタスクの検出が正しく動作する"
      },
      {
        input: "優先度別表示",
        expectedOutput: "高・中・低の優先度別にタスクが表示される",
        description: "優先度での絞り込みが正しく動作する"
      }
    ],
    puzzleMode: true,
    codeBlocks: [
      // Phase 1: データモデル設計のブロック
      {
        id: "todo-enum-priority",
        type: "class",
        category: "列挙型",
        label: "Priority enum定義",
        code: "enum Priority {\n    HIGH(\"高\"),\n    MEDIUM(\"中\"),\n    LOW(\"低\");\n    \n    private String label;\n    \n    Priority(String label) {\n        this.label = label;\n    }\n    \n    public String getLabel() {\n        return label;\n    }\n}",
        description: "優先度を定義する列挙型",
        phase: 1,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "todo-class-task",
        type: "class",
        category: "基本構造",
        label: "Taskクラス定義",
        code: "class Task {\n    // フィールドと機能をここに追加\n}",
        description: "タスクデータを管理するクラス",
        phase: 1,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "todo-task-fields",
        type: "variable",
        category: "フィールド",
        label: "Taskフィールド宣言",
        code: "    private int id;\n    private String title;\n    private String description;\n    private Priority priority;\n    private LocalDate dueDate;\n    private boolean isCompleted;",
        description: "タスクに必要なデータを保存する変数",
        phase: 1,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "todo-task-constructor",
        type: "method",
        category: "コンストラクタ",
        label: "Taskコンストラクタ",
        code: "    public Task(String title, String description, Priority priority, LocalDate dueDate) {\n        this.title = title;\n        this.description = description;\n        this.priority = priority;\n        this.dueDate = dueDate;\n        this.isCompleted = false;\n    }",
        description: "タスクオブジェクト作成時の初期化",
        phase: 1,
        isRequired: true,
        dependencies: ["todo-task-fields"],
        difficulty: "medium"
      },

      // Phase 2: タスク管理機能のブロック
      {
        id: "todo-class-manager",
        type: "class",
        category: "管理クラス",
        label: "TaskManagerクラス定義",
        code: "class TaskManager {\n    // タスク管理機能をここに追加\n}",
        description: "タスクを管理するクラス",
        phase: 2,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "todo-manager-fields",
        type: "variable",
        category: "フィールド",
        label: "TaskManagerフィールド",
        code: "    private ArrayList<Task> tasks;\n    private int nextId;",
        description: "タスクリストとID管理用の変数",
        phase: 2,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "todo-manager-constructor",
        type: "method",
        category: "コンストラクタ",
        label: "TaskManagerコンストラクタ",
        code: "    public TaskManager() {\n        this.tasks = new ArrayList<>();\n        this.nextId = 1;\n    }",
        description: "TaskManager初期化",
        phase: 2,
        isRequired: true,
        dependencies: ["todo-manager-fields"],
        difficulty: "easy"
      },
      {
        id: "todo-add-task",
        type: "method",
        category: "CRUD操作",
        label: "タスク追加メソッド",
        code: "    public void addTask(Task task) {\n        task.setId(nextId++);\n        tasks.add(task);\n        System.out.println(\"タスクを追加しました: \" + task.getTitle());\n    }",
        description: "新しいタスクを追加",
        phase: 2,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "todo-delete-task",
        type: "method",
        category: "CRUD操作",
        label: "タスク削除メソッド",
        code: "    public void deleteTask(int id) {\n        Task task = findTaskById(id);\n        if (task != null) {\n            tasks.remove(task);\n            System.out.println(\"タスクを削除しました: \" + task.getTitle());\n        } else {\n            System.out.println(\"指定されたIDのタスクが見つかりません。\");\n        }\n    }",
        description: "指定IDのタスクを削除",
        phase: 2,
        isRequired: true,
        difficulty: "medium"
      },

      // Phase 3: 表示機能のブロック
      {
        id: "todo-get-all",
        type: "method",
        category: "取得メソッド",
        label: "全タスク取得",
        code: "    public ArrayList<Task> getAllTasks() {\n        return new ArrayList<>(tasks);\n    }",
        description: "すべてのタスクを取得",
        phase: 3,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "todo-get-incomplete",
        type: "method",
        category: "取得メソッド",
        label: "未完了タスク取得",
        code: "    public ArrayList<Task> getIncompleteTasks() {\n        ArrayList<Task> incomplete = new ArrayList<>();\n        for (Task task : tasks) {\n            if (!task.isCompleted()) {\n                incomplete.add(task);\n            }\n        }\n        return incomplete;\n    }",
        description: "未完了のタスクのみ取得",
        phase: 3,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "todo-complete-task",
        type: "method",
        category: "更新メソッド",
        label: "タスク完了メソッド",
        code: "    public void completeTask(int id) {\n        Task task = findTaskById(id);\n        if (task != null) {\n            task.setCompleted(true);\n            System.out.println(\"タスクを完了しました: \" + task.getTitle());\n        } else {\n            System.out.println(\"指定されたIDのタスクが見つかりません。\");\n        }\n    }",
        description: "タスクを完了状態にする",
        phase: 3,
        isRequired: true,
        difficulty: "medium"
      },

      // Phase 4: 絞り込み・検索機能のブロック
      {
        id: "todo-find-by-id",
        type: "method",
        category: "検索メソッド",
        label: "ID検索メソッド",
        code: "    public Task findTaskById(int id) {\n        for (Task task : tasks) {\n            if (task.getId() == id) {\n                return task;\n            }\n        }\n        return null;\n    }",
        description: "IDでタスクを検索",
        phase: 4,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "todo-get-by-priority",
        type: "method",
        category: "絞り込みメソッド",
        label: "優先度別取得",
        code: "    public ArrayList<Task> getTasksByPriority(Priority priority) {\n        ArrayList<Task> filtered = new ArrayList<>();\n        for (Task task : tasks) {\n            if (task.getPriority() == priority) {\n                filtered.add(task);\n            }\n        }\n        return filtered;\n    }",
        description: "指定優先度のタスクを取得",
        phase: 4,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "todo-get-overdue",
        type: "method",
        category: "絞り込みメソッド",
        label: "期限切れタスク取得",
        code: "    public ArrayList<Task> getOverdueTasks() {\n        ArrayList<Task> overdue = new ArrayList<>();\n        LocalDate today = LocalDate.now();\n        \n        for (Task task : tasks) {\n            if (!task.isCompleted() && \n                task.getDueDate() != null && \n                task.getDueDate().isBefore(today)) {\n                overdue.add(task);\n            }\n        }\n        return overdue;\n    }",
        description: "期限切れの未完了タスクを取得",
        phase: 4,
        isRequired: true,
        difficulty: "hard"
      },

      // Phase 5: ユーザーインターフェースのブロック
      {
        id: "todo-main-class",
        type: "class",
        category: "メインクラス",
        label: "TodoListAppクラス",
        code: "public class TodoListApp {\n    // メイン処理をここに追加\n}",
        description: "ToDoリストアプリのメインクラス",
        phase: 5,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "todo-static-vars",
        type: "variable",
        category: "静的変数",
        label: "静的変数宣言",
        code: "    private static TaskManager taskManager = new TaskManager();\n    private static Scanner scanner = new Scanner(System.in);\n    private static DateTimeFormatter formatter = DateTimeFormatter.ofPattern(\"yyyy/MM/dd\");",
        description: "全体で使用する変数",
        phase: 5,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "todo-main-method",
        type: "method",
        category: "メインメソッド",
        label: "mainメソッド",
        code: "    public static void main(String[] args) {\n        System.out.println(\"=== ToDoリスト管理アプリ ===\");\n        // ここにメニューループを追加\n    }",
        description: "プログラムの開始点",
        phase: 5,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "todo-menu-loop",
        type: "loop",
        category: "制御構造",
        label: "メニューループ",
        code: "        int choice;\n        do {\n            showMenu();\n            choice = scanner.nextInt();\n            scanner.nextLine();\n            \n            switch(choice) {\n                case 1: addTask(); break;\n                case 2: showTasks(); break;\n                case 3: completeTask(); break;\n                case 4: deleteTask(); break;\n                case 5: showOverdueTasks(); break;\n                case 6: showTasksByPriority(); break;\n                case 7: System.out.println(\"終了します\"); break;\n                default: System.out.println(\"1-7を選択してください\");\n            }\n        } while(choice != 7);",
        description: "メインメニューのループ処理",
        phase: 5,
        isRequired: true,
        dependencies: ["todo-main-method"],
        difficulty: "hard"
      }
    ],
    codeSlots: [
      // Phase 1のスロット
      {
        id: "todo-slot-enum",
        phaseId: 1,
        label: "Priority enum定義",
        acceptedTypes: ["class"],
        acceptedCategories: ["列挙型"],
        position: 1,
        isRequired: true,
        hint: "優先度を定義する列挙型を配置"
      },
      {
        id: "todo-slot-task-class",
        phaseId: 1,
        label: "Taskクラス定義",
        acceptedTypes: ["class"],
        acceptedCategories: ["基本構造"],
        position: 2,
        isRequired: true,
        hint: "タスクデータを管理するクラスを配置"
      },
      {
        id: "todo-slot-task-fields",
        phaseId: 1,
        label: "Taskフィールド",
        acceptedTypes: ["variable"],
        acceptedCategories: ["フィールド"],
        position: 3,
        isRequired: true,
        hint: "タスクに必要なフィールドを宣言"
      },
      {
        id: "todo-slot-task-constructor",
        phaseId: 1,
        label: "Taskコンストラクタ",
        acceptedTypes: ["method"],
        acceptedCategories: ["コンストラクタ"],
        position: 4,
        isRequired: true,
        hint: "タスクオブジェクトを初期化するコンストラクタ"
      },

      // Phase 2のスロット
      {
        id: "todo-slot-manager-class",
        phaseId: 2,
        label: "TaskManagerクラス",
        acceptedTypes: ["class"],
        acceptedCategories: ["管理クラス"],
        position: 1,
        isRequired: true,
        hint: "タスクを管理するクラスを配置"
      },
      {
        id: "todo-slot-manager-fields",
        phaseId: 2,
        label: "TaskManagerフィールド",
        acceptedTypes: ["variable"],
        acceptedCategories: ["フィールド"],
        position: 2,
        isRequired: true,
        hint: "タスクリストとID管理用の変数"
      },
      {
        id: "todo-slot-manager-constructor",
        phaseId: 2,
        label: "TaskManagerコンストラクタ",
        acceptedTypes: ["method"],
        acceptedCategories: ["コンストラクタ"],
        position: 3,
        isRequired: true,
        hint: "TaskManagerを初期化するコンストラクタ"
      },
      {
        id: "todo-slot-add",
        phaseId: 2,
        label: "タスク追加メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["CRUD操作"],
        position: 4,
        isRequired: true,
        hint: "新しいタスクを追加するメソッド"
      },
      {
        id: "todo-slot-delete",
        phaseId: 2,
        label: "タスク削除メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["CRUD操作"],
        position: 5,
        isRequired: true,
        hint: "指定IDのタスクを削除するメソッド"
      },

      // Phase 3のスロット
      {
        id: "todo-slot-get-all",
        phaseId: 3,
        label: "全タスク取得",
        acceptedTypes: ["method"],
        acceptedCategories: ["取得メソッド"],
        position: 1,
        isRequired: true,
        hint: "すべてのタスクを取得するメソッド"
      },
      {
        id: "todo-slot-get-incomplete",
        phaseId: 3,
        label: "未完了タスク取得",
        acceptedTypes: ["method"],
        acceptedCategories: ["取得メソッド"],
        position: 2,
        isRequired: true,
        hint: "未完了のタスクのみ取得するメソッド"
      },
      {
        id: "todo-slot-complete",
        phaseId: 3,
        label: "タスク完了メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["更新メソッド"],
        position: 3,
        isRequired: true,
        hint: "タスクを完了状態にするメソッド"
      },

      // Phase 4のスロット
      {
        id: "todo-slot-find-id",
        phaseId: 4,
        label: "ID検索メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["検索メソッド"],
        position: 1,
        isRequired: true,
        hint: "IDでタスクを検索するメソッド"
      },
      {
        id: "todo-slot-by-priority",
        phaseId: 4,
        label: "優先度別取得",
        acceptedTypes: ["method"],
        acceptedCategories: ["絞り込みメソッド"],
        position: 2,
        isRequired: true,
        hint: "指定優先度のタスクを取得するメソッド"
      },
      {
        id: "todo-slot-overdue",
        phaseId: 4,
        label: "期限切れタスク取得",
        acceptedTypes: ["method"],
        acceptedCategories: ["絞り込みメソッド"],
        position: 3,
        isRequired: true,
        hint: "期限切れの未完了タスクを取得するメソッド"
      },

      // Phase 5のスロット
      {
        id: "todo-slot-main-class",
        phaseId: 5,
        label: "メインクラス",
        acceptedTypes: ["class"],
        acceptedCategories: ["メインクラス"],
        position: 1,
        isRequired: true,
        hint: "アプリケーションのメインクラス"
      },
      {
        id: "todo-slot-static-vars",
        phaseId: 5,
        label: "静的変数",
        acceptedTypes: ["variable"],
        acceptedCategories: ["静的変数"],
        position: 2,
        isRequired: true,
        hint: "全体で使用する変数の宣言"
      },
      {
        id: "todo-slot-main-method",
        phaseId: 5,
        label: "mainメソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["メインメソッド"],
        position: 3,
        isRequired: true,
        hint: "プログラムの開始点"
      },
      {
        id: "todo-slot-menu-loop",
        phaseId: 5,
        label: "メニューループ",
        acceptedTypes: ["loop"],
        acceptedCategories: ["制御構造"],
        position: 4,
        isRequired: true,
        hint: "メインメニューのループ処理"
      }
    ]
  },
  {
    id: 4,
    title: "図書管理システム",
    client: "学校図書室 鈴木さん",
    deadline: "2週間以内",
    difficulty: "beginner",
    estimatedTime: "30-45分",
    description: "小規模な図書室で使用する図書管理システムを作成してほしいです。本の登録・貸出・返却の管理ができるシンプルなシステムをお願いします。",
    requirements: [
      "本の登録（タイトル、著者、ISBN）ができること",
      "本の貸出・返却処理ができること",
      "貸出中の本の一覧が確認できること",
      "本の検索（タイトル、著者）ができること",
      "延滞している本の確認ができること"
    ],
    constraints: [
      "Java初心者でも理解できるコードで",
      "複雑なライブラリは使わない",
      "コンソールアプリでOK",
      "ユーザー管理は簡易的でOK"
    ],
    learningPoints: [
      "複数クラスの連携",
      "継承や多態性の基礎",
      "日付計算の実装",
      "検索アルゴリズムの基礎",
      "データの関連付けと管理"
    ],
    hints: [
      {
        level: 1,
        title: "Bookクラスを考えよう",
        content: "Bookクラスを作成しましょう。本の情報（ID、タイトル、著者、ISBN、貸出状態）を持つクラスです。",
        codeExample: `class Book {
    private int id;
    private String title;
    private String author;
    private String isbn;
    private boolean isAvailable;
    private String borrower;
    private LocalDate borrowDate;
    
    // コンストラクタとゲッター・セッターを追加
}`
      },
      {
        level: 2,
        title: "貸出記録クラス",
        content: "LoanRecordクラスを作成して、貸出履歴を管理しましょう。誰がいつ借りて、いつ返却したかを記録します。",
        codeExample: `class LoanRecord {
    private int bookId;
    private String borrowerName;
    private LocalDate borrowDate;
    private LocalDate dueDate;
    private LocalDate returnDate;
    
    public boolean isOverdue() {
        if (returnDate != null) return false;
        return LocalDate.now().isAfter(dueDate);
    }
}`
      },
      {
        level: 3,
        title: "図書管理クラス",
        content: "LibraryManagerクラスを作成して、本の登録・貸出・返却・検索機能を実装しましょう。",
        codeExample: `class LibraryManager {
    private ArrayList<Book> books;
    private ArrayList<LoanRecord> loanRecords;
    
    public void addBook(Book book) {
        book.setId(books.size() + 1);
        books.add(book);
    }
    
    public boolean lendBook(int bookId, String borrower) {
        Book book = findBookById(bookId);
        if (book != null && book.isAvailable()) {
            // 貸出処理
            return true;
        }
        return false;
    }
}`
      },
      {
        level: 4,
        title: "検索機能",
        content: "タイトルや著者名で本を検索する機能を実装しましょう。部分一致検索も実装すると便利です。",
        codeExample: `public ArrayList<Book> searchByTitle(String keyword) {
    ArrayList<Book> results = new ArrayList<>();
    for (Book book : books) {
        if (book.getTitle().toLowerCase()
            .contains(keyword.toLowerCase())) {
            results.add(book);
        }
    }
    return results;
}`
      },
      {
        level: 5,
        title: "延滞チェック",
        content: "返却期限を過ぎた本をチェックする機能を実装しましょう。通常、貸出期間は2週間とします。",
        codeExample: `public ArrayList<LoanRecord> getOverdueLoans() {
    ArrayList<LoanRecord> overdue = new ArrayList<>();
    for (LoanRecord record : loanRecords) {
        if (record.isOverdue()) {
            overdue.add(record);
        }
    }
    return overdue;
}`
      }
    ],
    phases: [
      {
        id: 1,
        title: "Phase 1: データモデル設計",
        description: "BookクラスとLoanRecordクラスを作成し、基本的なデータ構造を定義します",
        objectives: [
          "Bookクラスの作成",
          "LoanRecordクラスの作成",
          "必要なフィールドの定義",
          "基本的なメソッドの実装"
        ],
        completed: false
      },
      {
        id: 2,
        title: "Phase 2: 図書管理機能",
        description: "LibraryManagerクラスを作成し、本の管理機能を実装します",
        objectives: [
          "LibraryManagerクラスの作成",
          "本の登録機能",
          "本の一覧表示機能",
          "IDによる本の検索"
        ],
        completed: false
      },
      {
        id: 3,
        title: "Phase 3: 貸出・返却機能",
        description: "本の貸出と返却処理を実装します",
        objectives: [
          "貸出処理の実装",
          "返却処理の実装",
          "貸出状態の管理",
          "貸出履歴の記録"
        ],
        completed: false
      },
      {
        id: 4,
        title: "Phase 4: 検索・絞り込み機能",
        description: "様々な条件での検索機能を実装します",
        objectives: [
          "タイトル検索機能",
          "著者名検索機能",
          "貸出可能な本の表示",
          "貸出中の本の表示"
        ],
        completed: false
      },
      {
        id: 5,
        title: "Phase 5: 延滞管理とUI",
        description: "延滞チェック機能とユーザーインターフェースを完成させます",
        objectives: [
          "延滞チェック機能",
          "延滞者への警告表示",
          "メニューシステムの実装",
          "エラーハンドリング"
        ],
        completed: false
      }
    ],
    starterCode: `import java.util.*;
import java.time.*;
import java.time.format.*;

// Bookクラスを作成してください
class Book {
    // フィールドを定義
    
    // コンストラクタを実装
    
    // ゲッター・セッターを実装
}

// LoanRecordクラスを作成してください
class LoanRecord {
    // 貸出記録を管理
}

// LibraryManagerクラスを作成してください
class LibraryManager {
    // 図書管理機能を実装
}

public class LibrarySystem {
    private static LibraryManager library = new LibraryManager();
    private static Scanner scanner = new Scanner(System.in);
    
    public static void main(String[] args) {
        System.out.println("=== 図書管理システム ===");
        
        // ここにメニューシステムを実装してください
        int choice;
        do {
            showMenu();
            choice = scanner.nextInt();
            scanner.nextLine(); // 改行消費
            
            switch(choice) {
                case 1:
                    // 本の登録
                    break;
                case 2:
                    // 本の貸出
                    break;
                case 3:
                    // 本の返却
                    break;
                case 4:
                    // 本の検索
                    break;
                case 5:
                    // 貸出状況確認
                    break;
                case 6:
                    System.out.println("システムを終了します。");
                    break;
                default:
                    System.out.println("1-6の数字を入力してください。");
            }
        } while(choice != 6);
    }
    
    private static void showMenu() {
        System.out.println("\\n1. 本を登録");
        System.out.println("2. 本を貸出");
        System.out.println("3. 本を返却");
        System.out.println("4. 本を検索");
        System.out.println("5. 貸出状況確認");
        System.out.println("6. 終了");
        System.out.print("選択してください (1-6): ");
    }
    
    // ここに各機能のメソッドを実装してください
}`,
    solutionCode: `import java.util.*;
import java.time.*;
import java.time.format.*;

class Book {
    private int id;
    private String title;
    private String author;
    private String isbn;
    private boolean isAvailable;
    private String borrower;
    private LocalDate borrowDate;
    private LocalDate dueDate;
    
    public Book(String title, String author, String isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
        this.borrower = null;
        this.borrowDate = null;
        this.dueDate = null;
    }
    
    // ゲッター・セッター
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    public String getIsbn() { return isbn; }
    public void setIsbn(String isbn) { this.isbn = isbn; }
    public boolean isAvailable() { return isAvailable; }
    public void setAvailable(boolean available) { isAvailable = available; }
    public String getBorrower() { return borrower; }
    public void setBorrower(String borrower) { this.borrower = borrower; }
    public LocalDate getBorrowDate() { return borrowDate; }
    public void setBorrowDate(LocalDate borrowDate) { this.borrowDate = borrowDate; }
    public LocalDate getDueDate() { return dueDate; }
    public void setDueDate(LocalDate dueDate) { this.dueDate = dueDate; }
    
    public boolean isOverdue() {
        if (!isAvailable && dueDate != null) {
            return LocalDate.now().isAfter(dueDate);
        }
        return false;
    }
    
    @Override
    public String toString() {
        String status = isAvailable ? "貸出可能" : 
            String.format("貸出中 (借主: %s, 返却期限: %s%s)", 
                borrower, 
                dueDate.format(DateTimeFormatter.ofPattern("yyyy/MM/dd")),
                isOverdue() ? " ⚠️延滞中" : "");
        return String.format("#%d | %s | 著者: %s | ISBN: %s | %s",
            id, title, author, isbn, status);
    }
}

class LoanRecord {
    private int bookId;
    private String bookTitle;
    private String borrowerName;
    private LocalDate borrowDate;
    private LocalDate dueDate;
    private LocalDate returnDate;
    
    public LoanRecord(int bookId, String bookTitle, String borrowerName, 
                     LocalDate borrowDate, LocalDate dueDate) {
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.borrowerName = borrowerName;
        this.borrowDate = borrowDate;
        this.dueDate = dueDate;
        this.returnDate = null;
    }
    
    public boolean isOverdue() {
        if (returnDate != null) return false;
        return LocalDate.now().isAfter(dueDate);
    }
    
    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
    }
    
    public int getBookId() { return bookId; }
    public String getBookTitle() { return bookTitle; }
    public String getBorrowerName() { return borrowerName; }
    public LocalDate getBorrowDate() { return borrowDate; }
    public LocalDate getDueDate() { return dueDate; }
    public LocalDate getReturnDate() { return returnDate; }
    
    @Override
    public String toString() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
        String status = returnDate != null ? 
            "返却済 (" + returnDate.format(formatter) + ")" :
            isOverdue() ? "⚠️延滞中" : "貸出中";
        
        return String.format("本: %s | 借主: %s | 貸出日: %s | 期限: %s | %s",
            bookTitle, borrowerName, 
            borrowDate.format(formatter),
            dueDate.format(formatter),
            status);
    }
}

class LibraryManager {
    private ArrayList<Book> books;
    private ArrayList<LoanRecord> loanRecords;
    private int nextBookId;
    private static final int LOAN_PERIOD_DAYS = 14; // 貸出期間は2週間
    
    public LibraryManager() {
        this.books = new ArrayList<>();
        this.loanRecords = new ArrayList<>();
        this.nextBookId = 1;
    }
    
    public void addBook(Book book) {
        book.setId(nextBookId++);
        books.add(book);
        System.out.println("本を登録しました: " + book.getTitle());
    }
    
    public boolean lendBook(int bookId, String borrowerName) {
        Book book = findBookById(bookId);
        if (book == null) {
            System.out.println("指定されたIDの本が見つかりません。");
            return false;
        }
        
        if (!book.isAvailable()) {
            System.out.println("この本は現在貸出中です。");
            return false;
        }
        
        LocalDate borrowDate = LocalDate.now();
        LocalDate dueDate = borrowDate.plusDays(LOAN_PERIOD_DAYS);
        
        book.setAvailable(false);
        book.setBorrower(borrowerName);
        book.setBorrowDate(borrowDate);
        book.setDueDate(dueDate);
        
        LoanRecord record = new LoanRecord(bookId, book.getTitle(), 
                                          borrowerName, borrowDate, dueDate);
        loanRecords.add(record);
        
        System.out.println("貸出処理が完了しました。");
        System.out.println("返却期限: " + dueDate.format(DateTimeFormatter.ofPattern("yyyy/MM/dd")));
        return true;
    }
    
    public boolean returnBook(int bookId) {
        Book book = findBookById(bookId);
        if (book == null) {
            System.out.println("指定されたIDの本が見つかりません。");
            return false;
        }
        
        if (book.isAvailable()) {
            System.out.println("この本は貸出されていません。");
            return false;
        }
        
        LocalDate returnDate = LocalDate.now();
        
        // 貸出記録を更新
        for (LoanRecord record : loanRecords) {
            if (record.getBookId() == bookId && record.getReturnDate() == null) {
                record.setReturnDate(returnDate);
                
                if (record.isOverdue()) {
                    long overdueDays = ChronoUnit.DAYS.between(record.getDueDate(), returnDate);
                    System.out.println("⚠️ この本は" + overdueDays + "日延滞していました。");
                }
                break;
            }
        }
        
        book.setAvailable(true);
        book.setBorrower(null);
        book.setBorrowDate(null);
        book.setDueDate(null);
        
        System.out.println("返却処理が完了しました: " + book.getTitle());
        return true;
    }
    
    public Book findBookById(int id) {
        for (Book book : books) {
            if (book.getId() == id) {
                return book;
            }
        }
        return null;
    }
    
    public ArrayList<Book> searchByTitle(String keyword) {
        ArrayList<Book> results = new ArrayList<>();
        for (Book book : books) {
            if (book.getTitle().toLowerCase().contains(keyword.toLowerCase())) {
                results.add(book);
            }
        }
        return results;
    }
    
    public ArrayList<Book> searchByAuthor(String keyword) {
        ArrayList<Book> results = new ArrayList<>();
        for (Book book : books) {
            if (book.getAuthor().toLowerCase().contains(keyword.toLowerCase())) {
                results.add(book);
            }
        }
        return results;
    }
    
    public ArrayList<Book> getAvailableBooks() {
        ArrayList<Book> available = new ArrayList<>();
        for (Book book : books) {
            if (book.isAvailable()) {
                available.add(book);
            }
        }
        return available;
    }
    
    public ArrayList<Book> getLentBooks() {
        ArrayList<Book> lent = new ArrayList<>();
        for (Book book : books) {
            if (!book.isAvailable()) {
                lent.add(book);
            }
        }
        return lent;
    }
    
    public ArrayList<Book> getOverdueBooks() {
        ArrayList<Book> overdue = new ArrayList<>();
        for (Book book : books) {
            if (book.isOverdue()) {
                overdue.add(book);
            }
        }
        return overdue;
    }
    
    public ArrayList<Book> getAllBooks() {
        return new ArrayList<>(books);
    }
    
    public ArrayList<LoanRecord> getActiveLoanRecords() {
        ArrayList<LoanRecord> active = new ArrayList<>();
        for (LoanRecord record : loanRecords) {
            if (record.getReturnDate() == null) {
                active.add(record);
            }
        }
        return active;
    }
}

public class LibrarySystem {
    private static LibraryManager library = new LibraryManager();
    private static Scanner scanner = new Scanner(System.in);
    private static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
    
    public static void main(String[] args) {
        System.out.println("=== 図書管理システム ===");
        
        // サンプルデータの追加
        addSampleData();
        
        int choice;
        do {
            showMenu();
            choice = scanner.nextInt();
            scanner.nextLine(); // 改行消費
            
            switch(choice) {
                case 1:
                    registerBook();
                    break;
                case 2:
                    lendBook();
                    break;
                case 3:
                    returnBook();
                    break;
                case 4:
                    searchBooks();
                    break;
                case 5:
                    showLoanStatus();
                    break;
                case 6:
                    showOverdueBooks();
                    break;
                case 7:
                    System.out.println("システムを終了します。");
                    break;
                default:
                    System.out.println("1-7の数字を入力してください。");
            }
        } while(choice != 7);
    }
    
    private static void showMenu() {
        System.out.println("\\n========== メインメニュー ==========");
        
        // 延滞本の確認
        ArrayList<Book> overdueBooks = library.getOverdueBooks();
        if (!overdueBooks.isEmpty()) {
            System.out.println("⚠️ 延滞中の本が" + overdueBooks.size() + "冊あります！");
        }
        
        System.out.println("1. 本を登録");
        System.out.println("2. 本を貸出");
        System.out.println("3. 本を返却");
        System.out.println("4. 本を検索");
        System.out.println("5. 貸出状況確認");
        System.out.println("6. 延滞確認");
        System.out.println("7. 終了");
        System.out.print("選択してください (1-7): ");
    }
    
    private static void registerBook() {
        System.out.println("\\n--- 本の登録 ---");
        
        System.out.print("タイトル: ");
        String title = scanner.nextLine();
        
        System.out.print("著者: ");
        String author = scanner.nextLine();
        
        System.out.print("ISBN: ");
        String isbn = scanner.nextLine();
        
        Book book = new Book(title, author, isbn);
        library.addBook(book);
    }
    
    private static void lendBook() {
        System.out.println("\\n--- 本の貸出 ---");
        
        // 貸出可能な本を表示
        ArrayList<Book> available = library.getAvailableBooks();
        if (available.isEmpty()) {
            System.out.println("現在貸出可能な本がありません。");
            return;
        }
        
        System.out.println("貸出可能な本:");
        for (Book book : available) {
            System.out.println(book);
        }
        
        System.out.print("貸出する本のID: ");
        int bookId = scanner.nextInt();
        scanner.nextLine(); // 改行消費
        
        System.out.print("借主の名前: ");
        String borrower = scanner.nextLine();
        
        library.lendBook(bookId, borrower);
    }
    
    private static void returnBook() {
        System.out.println("\\n--- 本の返却 ---");
        
        // 貸出中の本を表示
        ArrayList<Book> lentBooks = library.getLentBooks();
        if (lentBooks.isEmpty()) {
            System.out.println("現在貸出中の本はありません。");
            return;
        }
        
        System.out.println("貸出中の本:");
        for (Book book : lentBooks) {
            System.out.println(book);
        }
        
        System.out.print("返却する本のID: ");
        int bookId = scanner.nextInt();
        scanner.nextLine(); // 改行消費
        
        library.returnBook(bookId);
    }
    
    private static void searchBooks() {
        System.out.println("\\n--- 本の検索 ---");
        System.out.println("1. タイトルで検索");
        System.out.println("2. 著者で検索");
        System.out.println("3. すべての本を表示");
        System.out.print("選択 (1-3): ");
        int searchChoice = scanner.nextInt();
        scanner.nextLine(); // 改行消費
        
        ArrayList<Book> results = new ArrayList<>();
        
        switch(searchChoice) {
            case 1:
                System.out.print("タイトル（部分一致）: ");
                String titleKeyword = scanner.nextLine();
                results = library.searchByTitle(titleKeyword);
                break;
            case 2:
                System.out.print("著者名（部分一致）: ");
                String authorKeyword = scanner.nextLine();
                results = library.searchByAuthor(authorKeyword);
                break;
            case 3:
                results = library.getAllBooks();
                break;
            default:
                System.out.println("無効な選択です。");
                return;
        }
        
        if (results.isEmpty()) {
            System.out.println("該当する本が見つかりませんでした。");
        } else {
            System.out.println("\\n検索結果:");
            for (Book book : results) {
                System.out.println(book);
            }
        }
    }
    
    private static void showLoanStatus() {
        System.out.println("\\n--- 貸出状況 ---");
        
        ArrayList<Book> lentBooks = library.getLentBooks();
        ArrayList<Book> availableBooks = library.getAvailableBooks();
        
        System.out.println("貸出中: " + lentBooks.size() + "冊");
        System.out.println("貸出可能: " + availableBooks.size() + "冊");
        System.out.println("合計: " + (lentBooks.size() + availableBooks.size()) + "冊");
        
        if (!lentBooks.isEmpty()) {
            System.out.println("\\n=== 貸出中の本 ===");
            for (Book book : lentBooks) {
                System.out.println(book);
            }
        }
        
        ArrayList<LoanRecord> activeLoans = library.getActiveLoanRecords();
        if (!activeLoans.isEmpty()) {
            System.out.println("\\n=== 現在の貸出記録 ===");
            for (LoanRecord record : activeLoans) {
                System.out.println(record);
            }
        }
    }
    
    private static void showOverdueBooks() {
        System.out.println("\\n--- 延滞確認 ---");
        
        ArrayList<Book> overdueBooks = library.getOverdueBooks();
        if (overdueBooks.isEmpty()) {
            System.out.println("延滞している本はありません。");
        } else {
            System.out.println("⚠️ 以下の本が延滞しています:");
            for (Book book : overdueBooks) {
                long overdueDays = ChronoUnit.DAYS.between(book.getDueDate(), LocalDate.now());
                System.out.println(book + " | 延滞日数: " + overdueDays + "日");
            }
        }
    }
    
    private static void addSampleData() {
        library.addBook(new Book("Java入門", "山田太郎", "978-4-123456-78-9"));
        library.addBook(new Book("プログラミングの基礎", "鈴木花子", "978-4-234567-89-0"));
        library.addBook(new Book("データ構造とアルゴリズム", "田中一郎", "978-4-345678-90-1"));
        library.addBook(new Book("オブジェクト指向設計", "佐藤次郎", "978-4-456789-01-2"));
        library.addBook(new Book("デザインパターン", "高橋三郎", "978-4-567890-12-3"));
        
        // サンプル貸出データ（延滞テスト用）
        library.lendBook(1, "学生A");
        Book book1 = library.findBookById(1);
        if (book1 != null) {
            book1.setBorrowDate(LocalDate.now().minusDays(20));
            book1.setDueDate(LocalDate.now().minusDays(6));
        }
        
        library.lendBook(2, "学生B");
    }
}`,
    testCases: [
      {
        input: "本の登録「Java入門」著者:山田太郎",
        expectedOutput: "本ID #1 として登録される",
        description: "本の登録が正しく動作する"
      },
      {
        input: "本の貸出 ID:1 借主:学生A",
        expectedOutput: "貸出処理完了、返却期限が2週間後に設定",
        description: "貸出処理が正しく動作する"
      },
      {
        input: "本の返却 ID:1",
        expectedOutput: "返却処理完了、本が貸出可能状態に",
        description: "返却処理が正しく動作する"
      },
      {
        input: "延滞確認",
        expectedOutput: "延滞している本と延滞日数が表示される",
        description: "延滞チェックが正しく動作する"
      }
    ],
    puzzleMode: true,
    codeBlocks: [
      // Phase 1: データモデル設計
      {
        id: "lib-class-book",
        type: "class",
        category: "基本構造",
        label: "Bookクラス定義",
        code: "class Book {\n    // フィールドと機能をここに追加\n}",
        description: "本の情報を管理するクラス",
        phase: 1,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "lib-book-fields",
        type: "variable",
        category: "フィールド",
        label: "Bookフィールド宣言",
        code: "    private int id;\n    private String title;\n    private String author;\n    private String isbn;\n    private boolean isAvailable;\n    private String borrower;\n    private LocalDate borrowDate;\n    private LocalDate dueDate;",
        description: "本に必要なデータを保存する変数",
        phase: 1,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "lib-book-constructor",
        type: "method",
        category: "コンストラクタ",
        label: "Bookコンストラクタ",
        code: "    public Book(String title, String author, String isbn) {\n        this.title = title;\n        this.author = author;\n        this.isbn = isbn;\n        this.isAvailable = true;\n        this.borrower = null;\n        this.borrowDate = null;\n        this.dueDate = null;\n    }",
        description: "本オブジェクトの初期化",
        phase: 1,
        isRequired: true,
        dependencies: ["lib-book-fields"],
        difficulty: "medium"
      },
      {
        id: "lib-class-loanrecord",
        type: "class",
        category: "基本構造",
        label: "LoanRecordクラス定義",
        code: "class LoanRecord {\n    // 貸出記録を管理\n}",
        description: "貸出履歴を記録するクラス",
        phase: 1,
        isRequired: true,
        difficulty: "easy"
      },

      // Phase 2: 図書管理機能
      {
        id: "lib-class-manager",
        type: "class",
        category: "管理クラス",
        label: "LibraryManagerクラス定義",
        code: "class LibraryManager {\n    // 図書管理機能をここに追加\n}",
        description: "図書館の管理機能を提供",
        phase: 2,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "lib-manager-fields",
        type: "variable",
        category: "フィールド",
        label: "LibraryManagerフィールド",
        code: "    private ArrayList<Book> books;\n    private ArrayList<LoanRecord> loanRecords;\n    private int nextBookId;\n    private static final int LOAN_PERIOD_DAYS = 14;",
        description: "本のリストと貸出記録の管理",
        phase: 2,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "lib-manager-constructor",
        type: "method",
        category: "コンストラクタ",
        label: "LibraryManagerコンストラクタ",
        code: "    public LibraryManager() {\n        this.books = new ArrayList<>();\n        this.loanRecords = new ArrayList<>();\n        this.nextBookId = 1;\n    }",
        description: "LibraryManager初期化",
        phase: 2,
        isRequired: true,
        dependencies: ["lib-manager-fields"],
        difficulty: "easy"
      },
      {
        id: "lib-add-book",
        type: "method",
        category: "CRUD操作",
        label: "本登録メソッド",
        code: "    public void addBook(Book book) {\n        book.setId(nextBookId++);\n        books.add(book);\n        System.out.println(\"本を登録しました: \" + book.getTitle());\n    }",
        description: "新しい本を登録",
        phase: 2,
        isRequired: true,
        difficulty: "medium"
      },

      // Phase 3: 貸出・返却機能
      {
        id: "lib-lend-book",
        type: "method",
        category: "貸出管理",
        label: "貸出メソッド",
        code: "    public boolean lendBook(int bookId, String borrowerName) {\n        Book book = findBookById(bookId);\n        if (book == null) {\n            System.out.println(\"指定されたIDの本が見つかりません。\");\n            return false;\n        }\n        \n        if (!book.isAvailable()) {\n            System.out.println(\"この本は現在貸出中です。\");\n            return false;\n        }\n        \n        LocalDate borrowDate = LocalDate.now();\n        LocalDate dueDate = borrowDate.plusDays(LOAN_PERIOD_DAYS);\n        \n        book.setAvailable(false);\n        book.setBorrower(borrowerName);\n        book.setBorrowDate(borrowDate);\n        book.setDueDate(dueDate);\n        \n        LoanRecord record = new LoanRecord(bookId, book.getTitle(), \n                                          borrowerName, borrowDate, dueDate);\n        loanRecords.add(record);\n        \n        System.out.println(\"貸出処理が完了しました。\");\n        System.out.println(\"返却期限: \" + dueDate.format(DateTimeFormatter.ofPattern(\"yyyy/MM/dd\")));\n        return true;\n    }",
        description: "本の貸出処理",
        phase: 3,
        isRequired: true,
        difficulty: "hard"
      },
      {
        id: "lib-return-book",
        type: "method",
        category: "貸出管理",
        label: "返却メソッド",
        code: "    public boolean returnBook(int bookId) {\n        Book book = findBookById(bookId);\n        if (book == null || book.isAvailable()) {\n            System.out.println(\"返却できません。\");\n            return false;\n        }\n        \n        book.setAvailable(true);\n        book.setBorrower(null);\n        book.setBorrowDate(null);\n        book.setDueDate(null);\n        \n        System.out.println(\"返却処理が完了しました: \" + book.getTitle());\n        return true;\n    }",
        description: "本の返却処理",
        phase: 3,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "lib-find-by-id",
        type: "method",
        category: "検索メソッド",
        label: "ID検索メソッド",
        code: "    public Book findBookById(int id) {\n        for (Book book : books) {\n            if (book.getId() == id) {\n                return book;\n            }\n        }\n        return null;\n    }",
        description: "IDで本を検索",
        phase: 3,
        isRequired: true,
        difficulty: "easy"
      },

      // Phase 4: 検索・絞り込み機能
      {
        id: "lib-search-title",
        type: "method",
        category: "検索メソッド",
        label: "タイトル検索",
        code: "    public ArrayList<Book> searchByTitle(String keyword) {\n        ArrayList<Book> results = new ArrayList<>();\n        for (Book book : books) {\n            if (book.getTitle().toLowerCase().contains(keyword.toLowerCase())) {\n                results.add(book);\n            }\n        }\n        return results;\n    }",
        description: "タイトルで本を検索",
        phase: 4,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "lib-search-author",
        type: "method",
        category: "検索メソッド",
        label: "著者検索",
        code: "    public ArrayList<Book> searchByAuthor(String keyword) {\n        ArrayList<Book> results = new ArrayList<>();\n        for (Book book : books) {\n            if (book.getAuthor().toLowerCase().contains(keyword.toLowerCase())) {\n                results.add(book);\n            }\n        }\n        return results;\n    }",
        description: "著者名で本を検索",
        phase: 4,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "lib-get-available",
        type: "method",
        category: "取得メソッド",
        label: "貸出可能本取得",
        code: "    public ArrayList<Book> getAvailableBooks() {\n        ArrayList<Book> available = new ArrayList<>();\n        for (Book book : books) {\n            if (book.isAvailable()) {\n                available.add(book);\n            }\n        }\n        return available;\n    }",
        description: "貸出可能な本のリストを取得",
        phase: 4,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "lib-get-lent",
        type: "method",
        category: "取得メソッド",
        label: "貸出中本取得",
        code: "    public ArrayList<Book> getLentBooks() {\n        ArrayList<Book> lent = new ArrayList<>();\n        for (Book book : books) {\n            if (!book.isAvailable()) {\n                lent.add(book);\n            }\n        }\n        return lent;\n    }",
        description: "貸出中の本のリストを取得",
        phase: 4,
        isRequired: true,
        difficulty: "easy"
      },

      // Phase 5: 延滞管理とUI
      {
        id: "lib-is-overdue",
        type: "method",
        category: "延滞チェック",
        label: "延滞チェックメソッド",
        code: "    public boolean isOverdue() {\n        if (!isAvailable && dueDate != null) {\n            return LocalDate.now().isAfter(dueDate);\n        }\n        return false;\n    }",
        description: "本が延滞しているかチェック",
        phase: 5,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "lib-get-overdue",
        type: "method",
        category: "延滞チェック",
        label: "延滞本取得",
        code: "    public ArrayList<Book> getOverdueBooks() {\n        ArrayList<Book> overdue = new ArrayList<>();\n        for (Book book : books) {\n            if (book.isOverdue()) {\n                overdue.add(book);\n            }\n        }\n        return overdue;\n    }",
        description: "延滞している本のリストを取得",
        phase: 5,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "lib-main-class",
        type: "class",
        category: "メインクラス",
        label: "LibrarySystemクラス",
        code: "public class LibrarySystem {\n    // メイン処理をここに追加\n}",
        description: "図書管理システムのメインクラス",
        phase: 5,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "lib-menu-loop",
        type: "loop",
        category: "制御構造",
        label: "メニューループ",
        code: "        int choice;\n        do {\n            showMenu();\n            choice = scanner.nextInt();\n            scanner.nextLine();\n            \n            switch(choice) {\n                case 1: registerBook(); break;\n                case 2: lendBook(); break;\n                case 3: returnBook(); break;\n                case 4: searchBooks(); break;\n                case 5: showLoanStatus(); break;\n                case 6: showOverdueBooks(); break;\n                case 7: System.out.println(\"終了します\"); break;\n                default: System.out.println(\"1-7を選択してください\");\n            }\n        } while(choice != 7);",
        description: "メインメニューのループ処理",
        phase: 5,
        isRequired: true,
        difficulty: "hard"
      }
    ],
    codeSlots: [
      // Phase 1のスロット
      {
        id: "lib-slot-book-class",
        phaseId: 1,
        label: "Bookクラス定義",
        acceptedTypes: ["class"],
        acceptedCategories: ["基本構造"],
        position: 1,
        isRequired: true,
        hint: "本の情報を管理するクラスを配置"
      },
      {
        id: "lib-slot-book-fields",
        phaseId: 1,
        label: "Bookフィールド",
        acceptedTypes: ["variable"],
        acceptedCategories: ["フィールド"],
        position: 2,
        isRequired: true,
        hint: "本に必要なフィールドを宣言"
      },
      {
        id: "lib-slot-book-constructor",
        phaseId: 1,
        label: "Bookコンストラクタ",
        acceptedTypes: ["method"],
        acceptedCategories: ["コンストラクタ"],
        position: 3,
        isRequired: true,
        hint: "本オブジェクトを初期化するコンストラクタ"
      },
      {
        id: "lib-slot-loanrecord-class",
        phaseId: 1,
        label: "LoanRecordクラス",
        acceptedTypes: ["class"],
        acceptedCategories: ["基本構造"],
        position: 4,
        isRequired: true,
        hint: "貸出記録を管理するクラスを配置"
      },

      // Phase 2のスロット
      {
        id: "lib-slot-manager-class",
        phaseId: 2,
        label: "LibraryManagerクラス",
        acceptedTypes: ["class"],
        acceptedCategories: ["管理クラス"],
        position: 1,
        isRequired: true,
        hint: "図書館を管理するクラスを配置"
      },
      {
        id: "lib-slot-manager-fields",
        phaseId: 2,
        label: "LibraryManagerフィールド",
        acceptedTypes: ["variable"],
        acceptedCategories: ["フィールド"],
        position: 2,
        isRequired: true,
        hint: "本のリストと貸出記録を管理する変数"
      },
      {
        id: "lib-slot-manager-constructor",
        phaseId: 2,
        label: "LibraryManagerコンストラクタ",
        acceptedTypes: ["method"],
        acceptedCategories: ["コンストラクタ"],
        position: 3,
        isRequired: true,
        hint: "LibraryManagerを初期化するコンストラクタ"
      },
      {
        id: "lib-slot-add-book",
        phaseId: 2,
        label: "本登録メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["CRUD操作"],
        position: 4,
        isRequired: true,
        hint: "新しい本を登録するメソッド"
      },

      // Phase 3のスロット
      {
        id: "lib-slot-lend",
        phaseId: 3,
        label: "貸出メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["貸出管理"],
        position: 1,
        isRequired: true,
        hint: "本を貸出する処理"
      },
      {
        id: "lib-slot-return",
        phaseId: 3,
        label: "返却メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["貸出管理"],
        position: 2,
        isRequired: true,
        hint: "本を返却する処理"
      },
      {
        id: "lib-slot-find-id",
        phaseId: 3,
        label: "ID検索メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["検索メソッド"],
        position: 3,
        isRequired: true,
        hint: "IDで本を検索するメソッド"
      },

      // Phase 4のスロット
      {
        id: "lib-slot-search-title",
        phaseId: 4,
        label: "タイトル検索",
        acceptedTypes: ["method"],
        acceptedCategories: ["検索メソッド"],
        position: 1,
        isRequired: true,
        hint: "タイトルで本を検索するメソッド"
      },
      {
        id: "lib-slot-search-author",
        phaseId: 4,
        label: "著者検索",
        acceptedTypes: ["method"],
        acceptedCategories: ["検索メソッド"],
        position: 2,
        isRequired: true,
        hint: "著者名で本を検索するメソッド"
      },
      {
        id: "lib-slot-get-available",
        phaseId: 4,
        label: "貸出可能本取得",
        acceptedTypes: ["method"],
        acceptedCategories: ["取得メソッド"],
        position: 3,
        isRequired: true,
        hint: "貸出可能な本のリストを取得"
      },
      {
        id: "lib-slot-get-lent",
        phaseId: 4,
        label: "貸出中本取得",
        acceptedTypes: ["method"],
        acceptedCategories: ["取得メソッド"],
        position: 4,
        isRequired: true,
        hint: "貸出中の本のリストを取得"
      },

      // Phase 5のスロット
      {
        id: "lib-slot-overdue-check",
        phaseId: 5,
        label: "延滞チェック",
        acceptedTypes: ["method"],
        acceptedCategories: ["延滞チェック"],
        position: 1,
        isRequired: true,
        hint: "本が延滞しているかチェック"
      },
      {
        id: "lib-slot-get-overdue",
        phaseId: 5,
        label: "延滞本取得",
        acceptedTypes: ["method"],
        acceptedCategories: ["延滞チェック"],
        position: 2,
        isRequired: true,
        hint: "延滞している本のリストを取得"
      },
      {
        id: "lib-slot-main-class",
        phaseId: 5,
        label: "メインクラス",
        acceptedTypes: ["class"],
        acceptedCategories: ["メインクラス"],
        position: 3,
        isRequired: true,
        hint: "アプリケーションのメインクラス"
      },
      {
        id: "lib-slot-menu-loop",
        phaseId: 5,
        label: "メニューループ",
        acceptedTypes: ["loop"],
        acceptedCategories: ["制御構造"],
        position: 4,
        isRequired: true,
        hint: "メインメニューのループ処理"
      }
    ]
  },
  {
    id: 5,
    title: "成績管理システム",
    client: "学習塾 渡辺先生",
    deadline: "今週末まで",
    difficulty: "beginner",
    estimatedTime: "35-50分",
    description: "学習塾で使用する生徒の成績管理システムを作成してほしいです。生徒の点数管理、平均点計算、成績統計などができるシステムをお願いします。",
    requirements: [
      "生徒情報（名前、学年）の登録ができること",
      "教科別の点数登録・更新ができること",
      "生徒ごとの平均点計算ができること",
      "教科別・学年別の統計が確認できること",
      "成績優秀者の表示ができること"
    ],
    constraints: [
      "Java初心者でも理解できるコードで",
      "複雑なライブラリは使わない",
      "コンソールアプリでOK",
      "教科は5教科（国語、数学、英語、理科、社会）固定"
    ],
    learningPoints: [
      "配列とArrayListの使い分け",
      "統計計算の実装",
      "ソート処理の基礎",
      "平均値・最高値・最低値の計算",
      "データの集計とグループ化"
    ],
    hints: [
      {
        level: 1,
        title: "Studentクラスを考えよう",
        content: "Studentクラスを作成しましょう。生徒の情報（ID、名前、学年、各教科の点数）を持つクラスです。",
        codeExample: `class Student {
    private int id;
    private String name;
    private int grade;
    private int[] scores; // 5教科の点数
    
    public Student(int id, String name, int grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.scores = new int[5]; // 初期値は0
    }
}`
      },
      {
        level: 2,
        title: "教科管理",
        content: "教科を管理するためにenumを使うか、配列でインデックスを管理しましょう。今回は簡単に配列のインデックスで管理します。",
        codeExample: `// 教科の定数定義
public static final String[] SUBJECTS = {"国語", "数学", "英語", "理科", "社会"};
public static final int JAPANESE = 0;
public static final int MATH = 1;
public static final int ENGLISH = 2;
public static final int SCIENCE = 3;
public static final int SOCIAL = 4;`
      },
      {
        level: 3,
        title: "成績管理クラス",
        content: "GradeManagerクラスを作成して、生徒の登録・点数入力・統計計算機能を実装しましょう。",
        codeExample: `class GradeManager {
    private ArrayList<Student> students;
    
    public void addStudent(Student student) {
        students.add(student);
    }
    
    public void setScore(int studentId, int subject, int score) {
        Student student = findStudentById(studentId);
        if (student != null && score >= 0 && score <= 100) {
            student.setScore(subject, score);
        }
    }
}`
      },
      {
        level: 4,
        title: "統計計算",
        content: "平均点、最高点、最低点などの統計を計算する機能を実装しましょう。",
        codeExample: `public double calculateAverage(int studentId) {
    Student student = findStudentById(studentId);
    if (student == null) return 0;
    
    int total = 0;
    int count = 0;
    for (int score : student.getScores()) {
        if (score > 0) { // 未入力（0）は除く
            total += score;
            count++;
        }
    }
    return count > 0 ? (double)total / count : 0;
}`
      },
      {
        level: 5,
        title: "ソート処理",
        content: "成績順にソートする機能を実装しましょう。平均点でソートして成績優秀者を表示します。",
        codeExample: `public ArrayList<Student> getTopStudents(int count) {
    ArrayList<Student> sortedStudents = new ArrayList<>(students);
    
    // 平均点でソート（降順）
    sortedStudents.sort((s1, s2) -> {
        double avg1 = calculateAverage(s1.getId());
        double avg2 = calculateAverage(s2.getId());
        return Double.compare(avg2, avg1);
    });
    
    return sortedStudents.subList(0, Math.min(count, sortedStudents.size()));
}`
      }
    ],
    phases: [
      {
        id: 1,
        title: "Phase 1: データモデル設計",
        description: "Studentクラスを作成し、基本的なデータ構造を定義します",
        objectives: [
          "Studentクラスの作成",
          "教科定数の定義",
          "必要なフィールドの定義",
          "基本的なゲッター・セッターの実装"
        ],
        completed: false
      },
      {
        id: 2,
        title: "Phase 2: 成績管理機能",
        description: "GradeManagerクラスを作成し、生徒と成績の管理機能を実装します",
        objectives: [
          "GradeManagerクラスの作成",
          "生徒登録機能",
          "点数入力・更新機能",
          "生徒検索機能"
        ],
        completed: false
      },
      {
        id: 3,
        title: "Phase 3: 統計計算機能",
        description: "各種統計計算機能を実装します",
        objectives: [
          "生徒別平均点計算",
          "教科別平均点計算",
          "最高点・最低点の取得",
          "合格判定機能"
        ],
        completed: false
      },
      {
        id: 4,
        title: "Phase 4: 成績分析機能",
        description: "成績の分析と表示機能を実装します",
        objectives: [
          "学年別統計",
          "教科別ランキング",
          "成績優秀者表示",
          "成績分布の計算"
        ],
        completed: false
      },
      {
        id: 5,
        title: "Phase 5: ユーザーインターフェース",
        description: "メニューシステムと表示機能を完成させます",
        objectives: [
          "メインメニューの実装",
          "データ表示の整形",
          "エラーハンドリング",
          "レポート出力機能"
        ],
        completed: false
      }
    ],
    starterCode: `import java.util.*;

// Studentクラスを作成してください
class Student {
    // フィールドを定義
    
    // コンストラクタを実装
    
    // ゲッター・セッターを実装
}

// GradeManagerクラスを作成してください  
class GradeManager {
    // 成績管理機能を実装
}

public class GradeManagementSystem {
    private static GradeManager gradeManager = new GradeManager();
    private static Scanner scanner = new Scanner(System.in);
    
    // 教科定数
    public static final String[] SUBJECTS = {"国語", "数学", "英語", "理科", "社会"};
    public static final int JAPANESE = 0;
    public static final int MATH = 1;
    public static final int ENGLISH = 2;
    public static final int SCIENCE = 3;
    public static final int SOCIAL = 4;
    
    public static void main(String[] args) {
        System.out.println("=== 成績管理システム ===");
        
        // ここにメニューシステムを実装してください
        int choice;
        do {
            showMenu();
            choice = scanner.nextInt();
            scanner.nextLine(); // 改行消費
            
            switch(choice) {
                case 1:
                    // 生徒登録
                    break;
                case 2:
                    // 点数入力
                    break;
                case 3:
                    // 成績表示
                    break;
                case 4:
                    // 統計表示
                    break;
                case 5:
                    // 成績優秀者表示
                    break;
                case 6:
                    System.out.println("システムを終了します。");
                    break;
                default:
                    System.out.println("1-6の数字を入力してください。");
            }
        } while(choice != 6);
    }
    
    private static void showMenu() {
        System.out.println("\\n1. 生徒を登録");
        System.out.println("2. 点数を入力");
        System.out.println("3. 成績を表示");
        System.out.println("4. 統計を表示");
        System.out.println("5. 成績優秀者表示");
        System.out.println("6. 終了");
        System.out.print("選択してください (1-6): ");
    }
    
    // ここに各機能のメソッドを実装してください
}`,
    solutionCode: `import java.util.*;

class Student {
    private int id;
    private String name;
    private int grade;
    private int[] scores;
    
    public Student(int id, String name, int grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.scores = new int[5]; // 5教科分
    }
    
    // ゲッター・セッター
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getGrade() { return grade; }
    public void setGrade(int grade) { this.grade = grade; }
    public int[] getScores() { return scores.clone(); }
    
    public void setScore(int subject, int score) {
        if (subject >= 0 && subject < scores.length && score >= 0 && score <= 100) {
            scores[subject] = score;
        }
    }
    
    public int getScore(int subject) {
        if (subject >= 0 && subject < scores.length) {
            return scores[subject];
        }
        return 0;
    }
    
    public double getAverage() {
        int total = 0;
        int count = 0;
        for (int score : scores) {
            if (score > 0) {
                total += score;
                count++;
            }
        }
        return count > 0 ? (double)total / count : 0;
    }
    
    public int getTotal() {
        int total = 0;
        for (int score : scores) {
            total += score;
        }
        return total;
    }
    
    @Override
    public String toString() {
        return String.format("ID: %d | %s (%d年生) | 平均: %.1f点", 
            id, name, grade, getAverage());
    }
}

class GradeManager {
    private ArrayList<Student> students;
    private int nextId;
    
    public GradeManager() {
        this.students = new ArrayList<>();
        this.nextId = 1;
    }
    
    public void addStudent(String name, int grade) {
        Student student = new Student(nextId++, name, grade);
        students.add(student);
        System.out.println("生徒を登録しました: " + student.getName() + " (ID: " + student.getId() + ")");
    }
    
    public Student findStudentById(int id) {
        for (Student student : students) {
            if (student.getId() == id) {
                return student;
            }
        }
        return null;
    }
    
    public void setScore(int studentId, int subject, int score) {
        Student student = findStudentById(studentId);
        if (student == null) {
            System.out.println("指定されたIDの生徒が見つかりません。");
            return;
        }
        
        if (score < 0 || score > 100) {
            System.out.println("点数は0-100の範囲で入力してください。");
            return;
        }
        
        student.setScore(subject, score);
        System.out.println("点数を入力しました: " + student.getName() + " - " + 
            GradeManagementSystem.SUBJECTS[subject] + ": " + score + "点");
    }
    
    public ArrayList<Student> getAllStudents() {
        return new ArrayList<>(students);
    }
    
    public ArrayList<Student> getStudentsByGrade(int grade) {
        ArrayList<Student> result = new ArrayList<>();
        for (Student student : students) {
            if (student.getGrade() == grade) {
                result.add(student);
            }
        }
        return result;
    }
    
    public double getClassAverage(int subject) {
        if (students.isEmpty()) return 0;
        
        int total = 0;
        int count = 0;
        for (Student student : students) {
            int score = student.getScore(subject);
            if (score > 0) {
                total += score;
                count++;
            }
        }
        return count > 0 ? (double)total / count : 0;
    }
    
    public double getGradeAverage(int grade, int subject) {
        ArrayList<Student> gradeStudents = getStudentsByGrade(grade);
        if (gradeStudents.isEmpty()) return 0;
        
        int total = 0;
        int count = 0;
        for (Student student : gradeStudents) {
            int score = student.getScore(subject);
            if (score > 0) {
                total += score;
                count++;
            }
        }
        return count > 0 ? (double)total / count : 0;
    }
    
    public Student getHighestScorer(int subject) {
        if (students.isEmpty()) return null;
        
        Student highest = null;
        int maxScore = -1;
        for (Student student : students) {
            int score = student.getScore(subject);
            if (score > maxScore) {
                maxScore = score;
                highest = student;
            }
        }
        return highest;
    }
    
    public Student getLowestScorer(int subject) {
        if (students.isEmpty()) return null;
        
        Student lowest = null;
        int minScore = 101;
        for (Student student : students) {
            int score = student.getScore(subject);
            if (score > 0 && score < minScore) {
                minScore = score;
                lowest = student;
            }
        }
        return lowest;
    }
    
    public ArrayList<Student> getTopStudents(int count) {
        ArrayList<Student> sortedStudents = new ArrayList<>(students);
        
        // 平均点でソート（降順）
        sortedStudents.sort((s1, s2) -> {
            double avg1 = s1.getAverage();
            double avg2 = s2.getAverage();
            if (avg1 == avg2) {
                // 平均点が同じ場合は合計点で比較
                return Integer.compare(s2.getTotal(), s1.getTotal());
            }
            return Double.compare(avg2, avg1);
        });
        
        // 平均点が0より大きい生徒のみを対象
        ArrayList<Student> validStudents = new ArrayList<>();
        for (Student student : sortedStudents) {
            if (student.getAverage() > 0) {
                validStudents.add(student);
            }
        }
        
        int resultCount = Math.min(count, validStudents.size());
        return new ArrayList<>(validStudents.subList(0, resultCount));
    }
    
    public int[] getScoreDistribution(int subject) {
        int[] distribution = new int[11]; // 0-10, 11-20, ..., 91-100 の11区間
        
        for (Student student : students) {
            int score = student.getScore(subject);
            if (score > 0) {
                int index = Math.min(score / 10, 10);
                distribution[index]++;
            }
        }
        return distribution;
    }
}

public class GradeManagementSystem {
    private static GradeManager gradeManager = new GradeManager();
    private static Scanner scanner = new Scanner(System.in);
    
    // 教科定数
    public static final String[] SUBJECTS = {"国語", "数学", "英語", "理科", "社会"};
    public static final int JAPANESE = 0;
    public static final int MATH = 1;
    public static final int ENGLISH = 2;
    public static final int SCIENCE = 3;
    public static final int SOCIAL = 4;
    
    public static void main(String[] args) {
        System.out.println("=== 成績管理システム ===");
        
        // サンプルデータの追加
        addSampleData();
        
        int choice;
        do {
            showMenu();
            choice = scanner.nextInt();
            scanner.nextLine(); // 改行消費
            
            switch(choice) {
                case 1:
                    addStudent();
                    break;
                case 2:
                    inputScore();
                    break;
                case 3:
                    showGrades();
                    break;
                case 4:
                    showStatistics();
                    break;
                case 5:
                    showTopStudents();
                    break;
                case 6:
                    showSubjectAnalysis();
                    break;
                case 7:
                    System.out.println("システムを終了します。");
                    break;
                default:
                    System.out.println("1-7の数字を入力してください。");
            }
        } while(choice != 7);
    }
    
    private static void showMenu() {
        System.out.println("\\n========== メインメニュー ==========");
        System.out.println("1. 生徒を登録");
        System.out.println("2. 点数を入力");
        System.out.println("3. 成績を表示");
        System.out.println("4. 統計を表示");
        System.out.println("5. 成績優秀者表示");
        System.out.println("6. 教科別分析");
        System.out.println("7. 終了");
        System.out.print("選択してください (1-7): ");
    }
    
    private static void addStudent() {
        System.out.println("\\n--- 生徒登録 ---");
        
        System.out.print("生徒名: ");
        String name = scanner.nextLine();
        
        System.out.print("学年 (1-6): ");
        int grade = scanner.nextInt();
        scanner.nextLine(); // 改行消費
        
        if (grade < 1 || grade > 6) {
            System.out.println("学年は1-6で入力してください。");
            return;
        }
        
        gradeManager.addStudent(name, grade);
    }
    
    private static void inputScore() {
        System.out.println("\\n--- 点数入力 ---");
        
        ArrayList<Student> students = gradeManager.getAllStudents();
        if (students.isEmpty()) {
            System.out.println("登録された生徒がいません。");
            return;
        }
        
        System.out.println("生徒一覧:");
        for (Student student : students) {
            System.out.println(student);
        }
        
        System.out.print("生徒ID: ");
        int studentId = scanner.nextInt();
        scanner.nextLine(); // 改行消費
        
        System.out.println("教科を選択:");
        for (int i = 0; i < SUBJECTS.length; i++) {
            System.out.println((i + 1) + ". " + SUBJECTS[i]);
        }
        System.out.print("選択 (1-5): ");
        int subjectChoice = scanner.nextInt();
        scanner.nextLine(); // 改行消費
        
        if (subjectChoice < 1 || subjectChoice > 5) {
            System.out.println("1-5で選択してください。");
            return;
        }
        
        System.out.print("点数 (0-100): ");
        int score = scanner.nextInt();
        scanner.nextLine(); // 改行消費
        
        gradeManager.setScore(studentId, subjectChoice - 1, score);
    }
    
    private static void showGrades() {
        System.out.println("\\n--- 成績表示 ---");
        
        ArrayList<Student> students = gradeManager.getAllStudents();
        if (students.isEmpty()) {
            System.out.println("登録された生徒がいません。");
            return;
        }
        
        System.out.println("1. 全生徒の成績");
        System.out.println("2. 学年別成績");
        System.out.print("選択 (1-2): ");
        int choice = scanner.nextInt();
        scanner.nextLine(); // 改行消費
        
        switch(choice) {
            case 1:
                showAllGrades();
                break;
            case 2:
                System.out.print("学年を入力 (1-6): ");
                int grade = scanner.nextInt();
                scanner.nextLine(); // 改行消費
                showGradesByYear(grade);
                break;
            default:
                System.out.println("無効な選択です。");
        }
    }
    
    private static void showAllGrades() {
        System.out.println("\\n=== 全生徒成績一覧 ===");
        System.out.println("ID | 名前      | 学年 | 国語 | 数学 | 英語 | 理科 | 社会 | 平均");
        System.out.println("-----------------------------------------------------------");
        
        ArrayList<Student> students = gradeManager.getAllStudents();
        for (Student student : students) {
            System.out.printf("%2d | %-8s | %d年 |", 
                student.getId(), student.getName(), student.getGrade());
            
            for (int i = 0; i < SUBJECTS.length; i++) {
                int score = student.getScore(i);
                if (score > 0) {
                    System.out.printf(" %3d |", score);
                } else {
                    System.out.print("  - |");
                }
            }
            
            System.out.printf(" %5.1f\\n", student.getAverage());
        }
    }
    
    private static void showGradesByYear(int grade) {
        System.out.println("\\n=== " + grade + "年生成績一覧 ===");
        
        ArrayList<Student> students = gradeManager.getStudentsByGrade(grade);
        if (students.isEmpty()) {
            System.out.println(grade + "年生は登録されていません。");
            return;
        }
        
        System.out.println("ID | 名前      | 国語 | 数学 | 英語 | 理科 | 社会 | 平均");
        System.out.println("-----------------------------------------------------");
        
        for (Student student : students) {
            System.out.printf("%2d | %-8s |", student.getId(), student.getName());
            
            for (int i = 0; i < SUBJECTS.length; i++) {
                int score = student.getScore(i);
                if (score > 0) {
                    System.out.printf(" %3d |", score);
                } else {
                    System.out.print("  - |");
                }
            }
            
            System.out.printf(" %5.1f\\n", student.getAverage());
        }
    }
    
    private static void showStatistics() {
        System.out.println("\\n--- 統計情報 ---");
        
        System.out.println("\\n=== 教科別クラス平均 ===");
        for (int i = 0; i < SUBJECTS.length; i++) {
            double average = gradeManager.getClassAverage(i);
            System.out.printf("%s: %.1f点\\n", SUBJECTS[i], average);
        }
        
        System.out.println("\\n=== 学年別平均（数学） ===");
        for (int grade = 1; grade <= 6; grade++) {
            double average = gradeManager.getGradeAverage(grade, MATH);
            if (average > 0) {
                System.out.printf("%d年生: %.1f点\\n", grade, average);
            }
        }
    }
    
    private static void showTopStudents() {
        System.out.println("\\n--- 成績優秀者 ---");
        
        ArrayList<Student> topStudents = gradeManager.getTopStudents(5);
        if (topStudents.isEmpty()) {
            System.out.println("成績データがありません。");
            return;
        }
        
        System.out.println("=== トップ5 ===");
        for (int i = 0; i < topStudents.size(); i++) {
            Student student = topStudents.get(i);
            System.out.printf("%d位: %s (%d年生) - 平均: %.1f点 (合計: %d点)\\n",
                i + 1, student.getName(), student.getGrade(), 
                student.getAverage(), student.getTotal());
        }
    }
    
    private static void showSubjectAnalysis() {
        System.out.println("\\n--- 教科別分析 ---");
        
        System.out.println("教科を選択:");
        for (int i = 0; i < SUBJECTS.length; i++) {
            System.out.println((i + 1) + ". " + SUBJECTS[i]);
        }
        System.out.print("選択 (1-5): ");
        int subjectChoice = scanner.nextInt();
        scanner.nextLine(); // 改行消費
        
        if (subjectChoice < 1 || subjectChoice > 5) {
            System.out.println("1-5で選択してください。");
            return;
        }
        
        int subject = subjectChoice - 1;
        String subjectName = SUBJECTS[subject];
        
        System.out.println("\\n=== " + subjectName + " 分析結果 ===");
        
        double average = gradeManager.getClassAverage(subject);
        System.out.printf("クラス平均: %.1f点\\n", average);
        
        Student highest = gradeManager.getHighestScorer(subject);
        if (highest != null) {
            System.out.printf("最高点: %s - %d点\\n", 
                highest.getName(), highest.getScore(subject));
        }
        
        Student lowest = gradeManager.getLowestScorer(subject);
        if (lowest != null) {
            System.out.printf("最低点: %s - %d点\\n", 
                lowest.getName(), lowest.getScore(subject));
        }
        
        // 点数分布
        System.out.println("\\n点数分布:");
        int[] distribution = gradeManager.getScoreDistribution(subject);
        for (int i = 0; i < distribution.length; i++) {
            if (distribution[i] > 0) {
                if (i == 10) {
                    System.out.printf("91-100点: %d人\\n", distribution[i]);
                } else {
                    System.out.printf("%d-%d点: %d人\\n", 
                        i * 10, i * 10 + 9, distribution[i]);
                }
            }
        }
    }
    
    private static void addSampleData() {
        gradeManager.addStudent("田中太郎", 3);
        gradeManager.addStudent("鈴木花子", 3);
        gradeManager.addStudent("佐藤次郎", 2);
        gradeManager.addStudent("高橋美里", 4);
        gradeManager.addStudent("山田一郎", 3);
        
        // サンプル点数データ
        gradeManager.setScore(1, JAPANESE, 85);
        gradeManager.setScore(1, MATH, 90);
        gradeManager.setScore(1, ENGLISH, 78);
        gradeManager.setScore(1, SCIENCE, 92);
        gradeManager.setScore(1, SOCIAL, 88);
        
        gradeManager.setScore(2, JAPANESE, 92);
        gradeManager.setScore(2, MATH, 85);
        gradeManager.setScore(2, ENGLISH, 95);
        gradeManager.setScore(2, SCIENCE, 88);
        gradeManager.setScore(2, SOCIAL, 90);
        
        gradeManager.setScore(3, JAPANESE, 76);
        gradeManager.setScore(3, MATH, 82);
        gradeManager.setScore(3, ENGLISH, 70);
        gradeManager.setScore(3, SCIENCE, 85);
        gradeManager.setScore(3, SOCIAL, 79);
        
        gradeManager.setScore(4, JAPANESE, 88);
        gradeManager.setScore(4, MATH, 94);
        gradeManager.setScore(4, ENGLISH, 89);
        gradeManager.setScore(4, SCIENCE, 91);
        gradeManager.setScore(4, SOCIAL, 87);
        
        gradeManager.setScore(5, JAPANESE, 82);
        gradeManager.setScore(5, MATH, 88);
        gradeManager.setScore(5, ENGLISH, 84);
        gradeManager.setScore(5, SCIENCE, 86);
        gradeManager.setScore(5, SOCIAL, 85);
    }
}`,
    testCases: [
      {
        input: "生徒登録「田中太郎」3年生",
        expectedOutput: "生徒ID #1 として登録される",
        description: "生徒の登録が正しく動作する"
      },
      {
        input: "点数入力 ID:1 数学:90点",
        expectedOutput: "点数が正しく登録され表示される",
        description: "点数入力が正しく動作する"
      },
      {
        input: "平均点計算",
        expectedOutput: "生徒の平均点が正しく計算される",
        description: "平均点計算が正しく動作する"
      },
      {
        input: "成績優秀者表示",
        expectedOutput: "平均点順でトップ5が表示される",
        description: "ソート機能が正しく動作する"
      }
    ],
    puzzleMode: true,
    codeBlocks: [
      // Phase 1: データモデル設計
      {
        id: "grade-class-student",
        type: "class",
        category: "基本構造",
        label: "Studentクラス定義",
        code: "class Student {\n    // フィールドと機能をここに追加\n}",
        description: "生徒の情報を管理するクラス",
        phase: 1,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "grade-student-fields",
        type: "variable",
        category: "フィールド",
        label: "Studentフィールド宣言",
        code: "    private int id;\n    private String name;\n    private int grade;\n    private int[] scores;",
        description: "生徒に必要なデータを保存する変数",
        phase: 1,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "grade-student-constructor",
        type: "method",
        category: "コンストラクタ",
        label: "Studentコンストラクタ",
        code: "    public Student(int id, String name, int grade) {\n        this.id = id;\n        this.name = name;\n        this.grade = grade;\n        this.scores = new int[5]; // 5教科分\n    }",
        description: "生徒オブジェクトの初期化",
        phase: 1,
        isRequired: true,
        dependencies: ["grade-student-fields"],
        difficulty: "medium"
      },
      {
        id: "grade-subject-constants",
        type: "variable",
        category: "定数",
        label: "教科定数定義",
        code: "    public static final String[] SUBJECTS = {\"国語\", \"数学\", \"英語\", \"理科\", \"社会\"};\n    public static final int JAPANESE = 0;\n    public static final int MATH = 1;\n    public static final int ENGLISH = 2;\n    public static final int SCIENCE = 3;\n    public static final int SOCIAL = 4;",
        description: "教科を管理する定数",
        phase: 1,
        isRequired: true,
        difficulty: "medium"
      },

      // Phase 2: 成績管理機能
      {
        id: "grade-class-manager",
        type: "class",
        category: "管理クラス",
        label: "GradeManagerクラス定義",
        code: "class GradeManager {\n    // 成績管理機能をここに追加\n}",
        description: "成績を管理するクラス",
        phase: 2,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "grade-manager-fields",
        type: "variable",
        category: "フィールド",
        label: "GradeManagerフィールド",
        code: "    private ArrayList<Student> students;\n    private int nextId;",
        description: "生徒リストとID管理用の変数",
        phase: 2,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "grade-add-student",
        type: "method",
        category: "CRUD操作",
        label: "生徒登録メソッド",
        code: "    public void addStudent(String name, int grade) {\n        Student student = new Student(nextId++, name, grade);\n        students.add(student);\n        System.out.println(\"生徒を登録しました: \" + student.getName() + \" (ID: \" + student.getId() + \")\");\n    }",
        description: "新しい生徒を登録",
        phase: 2,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "grade-set-score",
        type: "method",
        category: "CRUD操作",
        label: "点数入力メソッド",
        code: "    public void setScore(int studentId, int subject, int score) {\n        Student student = findStudentById(studentId);\n        if (student == null) {\n            System.out.println(\"指定されたIDの生徒が見つかりません。\");\n            return;\n        }\n        \n        if (score < 0 || score > 100) {\n            System.out.println(\"点数は0-100の範囲で入力してください。\");\n            return;\n        }\n        \n        student.setScore(subject, score);\n        System.out.println(\"点数を入力しました: \" + student.getName() + \" - \" + \n            GradeManagementSystem.SUBJECTS[subject] + \": \" + score + \"点\");\n    }",
        description: "生徒の点数を入力・更新",
        phase: 2,
        isRequired: true,
        difficulty: "hard"
      },

      // Phase 3: 統計計算機能
      {
        id: "grade-student-average",
        type: "method",
        category: "統計計算",
        label: "生徒平均点メソッド",
        code: "    public double getAverage() {\n        int total = 0;\n        int count = 0;\n        for (int score : scores) {\n            if (score > 0) {\n                total += score;\n                count++;\n            }\n        }\n        return count > 0 ? (double)total / count : 0;\n    }",
        description: "生徒の平均点を計算",
        phase: 3,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "grade-class-average",
        type: "method",
        category: "統計計算",
        label: "教科別平均点メソッド",
        code: "    public double getClassAverage(int subject) {\n        if (students.isEmpty()) return 0;\n        \n        int total = 0;\n        int count = 0;\n        for (Student student : students) {\n            int score = student.getScore(subject);\n            if (score > 0) {\n                total += score;\n                count++;\n            }\n        }\n        return count > 0 ? (double)total / count : 0;\n    }",
        description: "教科別のクラス平均を計算",
        phase: 3,
        isRequired: true,
        difficulty: "medium"
      },
      {
        id: "grade-find-student",
        type: "method",
        category: "検索メソッド",
        label: "生徒検索メソッド",
        code: "    public Student findStudentById(int id) {\n        for (Student student : students) {\n            if (student.getId() == id) {\n                return student;\n            }\n        }\n        return null;\n    }",
        description: "IDで生徒を検索",
        phase: 3,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "grade-highest-lowest",
        type: "method",
        category: "統計計算",
        label: "最高・最低点取得",
        code: "    public Student getHighestScorer(int subject) {\n        if (students.isEmpty()) return null;\n        \n        Student highest = null;\n        int maxScore = -1;\n        for (Student student : students) {\n            int score = student.getScore(subject);\n            if (score > maxScore) {\n                maxScore = score;\n                highest = student;\n            }\n        }\n        return highest;\n    }",
        description: "教科別最高点取得者を取得",
        phase: 3,
        isRequired: true,
        difficulty: "medium"
      },

      // Phase 4: 成績分析機能
      {
        id: "grade-by-grade",
        type: "method",
        category: "絞り込みメソッド",
        label: "学年別取得メソッド",
        code: "    public ArrayList<Student> getStudentsByGrade(int grade) {\n        ArrayList<Student> result = new ArrayList<>();\n        for (Student student : students) {\n            if (student.getGrade() == grade) {\n                result.add(student);\n            }\n        }\n        return result;\n    }",
        description: "指定学年の生徒リストを取得",
        phase: 4,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "grade-top-students",
        type: "method",
        category: "ソート処理",
        label: "成績優秀者取得",
        code: "    public ArrayList<Student> getTopStudents(int count) {\n        ArrayList<Student> sortedStudents = new ArrayList<>(students);\n        \n        // 平均点でソート（降順）\n        sortedStudents.sort((s1, s2) -> {\n            double avg1 = s1.getAverage();\n            double avg2 = s2.getAverage();\n            if (avg1 == avg2) {\n                // 平均点が同じ場合は合計点で比較\n                return Integer.compare(s2.getTotal(), s1.getTotal());\n            }\n            return Double.compare(avg2, avg1);\n        });\n        \n        // 平均点が0より大きい生徒のみを対象\n        ArrayList<Student> validStudents = new ArrayList<>();\n        for (Student student : sortedStudents) {\n            if (student.getAverage() > 0) {\n                validStudents.add(student);\n            }\n        }\n        \n        int resultCount = Math.min(count, validStudents.size());\n        return new ArrayList<>(validStudents.subList(0, resultCount));\n    }",
        description: "成績上位者をソートして取得",
        phase: 4,
        isRequired: true,
        difficulty: "hard"
      },
      {
        id: "grade-distribution",
        type: "method",
        category: "分析メソッド",
        label: "点数分布取得",
        code: "    public int[] getScoreDistribution(int subject) {\n        int[] distribution = new int[11]; // 0-10, 11-20, ..., 91-100 の11区間\n        \n        for (Student student : students) {\n            int score = student.getScore(subject);\n            if (score > 0) {\n                int index = Math.min(score / 10, 10);\n                distribution[index]++;\n            }\n        }\n        return distribution;\n    }",
        description: "教科の点数分布を計算",
        phase: 4,
        isRequired: true,
        difficulty: "medium"
      },

      // Phase 5: ユーザーインターフェース
      {
        id: "grade-main-class",
        type: "class",
        category: "メインクラス",
        label: "GradeManagementSystemクラス",
        code: "public class GradeManagementSystem {\n    // メイン処理をここに追加\n}",
        description: "成績管理システムのメインクラス",
        phase: 5,
        isRequired: true,
        difficulty: "easy"
      },
      {
        id: "grade-display-grades",
        type: "method",
        category: "表示機能",
        label: "成績表示メソッド",
        code: "    private static void showAllGrades() {\n        System.out.println(\"\\n=== 全生徒成績一覧 ===\");\n        System.out.println(\"ID | 名前      | 学年 | 国語 | 数学 | 英語 | 理科 | 社会 | 平均\");\n        System.out.println(\"-----------------------------------------------------------\");\n        \n        ArrayList<Student> students = gradeManager.getAllStudents();\n        for (Student student : students) {\n            System.out.printf(\"%2d | %-8s | %d年 |\", \n                student.getId(), student.getName(), student.getGrade());\n            \n            for (int i = 0; i < SUBJECTS.length; i++) {\n                int score = student.getScore(i);\n                if (score > 0) {\n                    System.out.printf(\" %3d |\", score);\n                } else {\n                    System.out.print(\"  - |\");\n                }\n            }\n            \n            System.out.printf(\" %5.1f\\n\", student.getAverage());\n        }\n    }",
        description: "成績を表形式で表示",
        phase: 5,
        isRequired: true,
        difficulty: "hard"
      },
      {
        id: "grade-menu-loop",
        type: "loop",
        category: "制御構造",
        label: "メニューループ",
        code: "        int choice;\n        do {\n            showMenu();\n            choice = scanner.nextInt();\n            scanner.nextLine();\n            \n            switch(choice) {\n                case 1: addStudent(); break;\n                case 2: inputScore(); break;\n                case 3: showGrades(); break;\n                case 4: showStatistics(); break;\n                case 5: showTopStudents(); break;\n                case 6: showSubjectAnalysis(); break;\n                case 7: System.out.println(\"終了します\"); break;\n                default: System.out.println(\"1-7を選択してください\");\n            }\n        } while(choice != 7);",
        description: "メインメニューのループ処理",
        phase: 5,
        isRequired: true,
        difficulty: "hard"
      }
    ],
    codeSlots: [
      // Phase 1のスロット
      {
        id: "grade-slot-student-class",
        phaseId: 1,
        label: "Studentクラス定義",
        acceptedTypes: ["class"],
        acceptedCategories: ["基本構造"],
        position: 1,
        isRequired: true,
        hint: "生徒の情報を管理するクラスを配置"
      },
      {
        id: "grade-slot-student-fields",
        phaseId: 1,
        label: "Studentフィールド",
        acceptedTypes: ["variable"],
        acceptedCategories: ["フィールド"],
        position: 2,
        isRequired: true,
        hint: "生徒に必要なフィールドを宣言"
      },
      {
        id: "grade-slot-student-constructor",
        phaseId: 1,
        label: "Studentコンストラクタ",
        acceptedTypes: ["method"],
        acceptedCategories: ["コンストラクタ"],
        position: 3,
        isRequired: true,
        hint: "生徒オブジェクトを初期化するコンストラクタ"
      },
      {
        id: "grade-slot-subjects",
        phaseId: 1,
        label: "教科定数",
        acceptedTypes: ["variable"],
        acceptedCategories: ["定数"],
        position: 4,
        isRequired: true,
        hint: "教科を管理する定数を配置"
      },

      // Phase 2のスロット
      {
        id: "grade-slot-manager-class",
        phaseId: 2,
        label: "GradeManagerクラス",
        acceptedTypes: ["class"],
        acceptedCategories: ["管理クラス"],
        position: 1,
        isRequired: true,
        hint: "成績を管理するクラスを配置"
      },
      {
        id: "grade-slot-manager-fields",
        phaseId: 2,
        label: "GradeManagerフィールド",
        acceptedTypes: ["variable"],
        acceptedCategories: ["フィールド"],
        position: 2,
        isRequired: true,
        hint: "生徒リストとID管理用の変数"
      },
      {
        id: "grade-slot-add-student",
        phaseId: 2,
        label: "生徒登録メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["CRUD操作"],
        position: 3,
        isRequired: true,
        hint: "新しい生徒を登録するメソッド"
      },
      {
        id: "grade-slot-set-score",
        phaseId: 2,
        label: "点数入力メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["CRUD操作"],
        position: 4,
        isRequired: true,
        hint: "生徒の点数を入力・更新するメソッド"
      },

      // Phase 3のスロット
      {
        id: "grade-slot-student-average",
        phaseId: 3,
        label: "生徒平均点メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["統計計算"],
        position: 1,
        isRequired: true,
        hint: "生徒の平均点を計算するメソッド"
      },
      {
        id: "grade-slot-class-average",
        phaseId: 3,
        label: "教科別平均点メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["統計計算"],
        position: 2,
        isRequired: true,
        hint: "教科別のクラス平均を計算するメソッド"
      },
      {
        id: "grade-slot-find-student",
        phaseId: 3,
        label: "生徒検索メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["検索メソッド"],
        position: 3,
        isRequired: true,
        hint: "IDで生徒を検索するメソッド"
      },
      {
        id: "grade-slot-highest-lowest",
        phaseId: 3,
        label: "最高・最低点取得",
        acceptedTypes: ["method"],
        acceptedCategories: ["統計計算"],
        position: 4,
        isRequired: true,
        hint: "教科別最高点取得者を取得するメソッド"
      },

      // Phase 4のスロット
      {
        id: "grade-slot-by-grade",
        phaseId: 4,
        label: "学年別取得メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["絞り込みメソッド"],
        position: 1,
        isRequired: true,
        hint: "指定学年の生徒リストを取得するメソッド"
      },
      {
        id: "grade-slot-top-students",
        phaseId: 4,
        label: "成績優秀者取得",
        acceptedTypes: ["method"],
        acceptedCategories: ["ソート処理"],
        position: 2,
        isRequired: true,
        hint: "成績上位者をソートして取得するメソッド"
      },
      {
        id: "grade-slot-distribution",
        phaseId: 4,
        label: "点数分布取得",
        acceptedTypes: ["method"],
        acceptedCategories: ["分析メソッド"],
        position: 3,
        isRequired: true,
        hint: "教科の点数分布を計算するメソッド"
      },

      // Phase 5のスロット
      {
        id: "grade-slot-main-class",
        phaseId: 5,
        label: "メインクラス",
        acceptedTypes: ["class"],
        acceptedCategories: ["メインクラス"],
        position: 1,
        isRequired: true,
        hint: "アプリケーションのメインクラス"
      },
      {
        id: "grade-slot-display",
        phaseId: 5,
        label: "成績表示メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["表示機能"],
        position: 2,
        isRequired: true,
        hint: "成績を表形式で表示するメソッド"
      },
      {
        id: "grade-slot-menu-loop",
        phaseId: 5,
        label: "メニューループ",
        acceptedTypes: ["loop"],
        acceptedCategories: ["制御構造"],
        position: 3,
        isRequired: true,
        hint: "メインメニューのループ処理"
      }
    ]
  },

  // 6つ目のチャレンジ: 在庫管理システム
  {
    id: 6,
    title: "在庫管理システム",
    difficulty: "beginner" as const,
    estimatedTime: "25-30分",
    client: "EC事業部",
    deadline: "2週間後",
    description: "オンラインショップの在庫を効率的に管理するシステムを開発してください。商品の在庫数管理、入荷・出荷処理、在庫不足アラートなどの基本機能を実装し、商品ごとの在庫状況を正確に把握できるようにしてください。",
    requirements: [
      "商品クラス（商品ID、名前、価格、在庫数）を作成",
      "在庫管理クラス（商品リスト管理）を作成",
      "商品の追加・削除機能を実装",
      "在庫の入荷・出荷処理機能を実装",
      "在庫検索・一覧表示機能を実装",
      "在庫不足商品の検出機能を実装",
      "在庫状況のレポート生成機能を実装"
    ],
    constraints: [
      "在庫数は負の値になってはいけない",
      "商品IDは重複不可",
      "価格は0以上でなければならない",
      "在庫不足の基準は10個未満とする"
    ],
    learningPoints: [
      "クラス設計とオブジェクト指向の基本概念",
      "ArrayListを使った動的なデータ管理",
      "条件分岐を使った在庫数チェック",
      "メソッドの適切な分割と役割分担",
      "例外処理と入力値検証"
    ],
    puzzleMode: true,
    phases: [
      {
        id: 1,
        title: "商品クラスの設計",
        description: "在庫管理の基本となる商品クラスを作成します。商品ID、名前、価格、在庫数をフィールドに持ち、基本的なゲッター・セッターを実装します。",
        objectives: [
          "Productクラスを定義する",
          "商品の基本情報をフィールドとして定義",
          "コンストラクタとゲッター・セッターを実装",
          "商品情報の表示メソッドを作成"
        ]
      },
      {
        id: 2,
        title: "在庫管理クラスの基本機能",
        description: "商品リストを管理するInventoryManagerクラスを作成し、商品の追加・削除機能を実装します。ArrayListを使って動的に商品を管理します。",
        objectives: [
          "InventoryManagerクラスを定義する",
          "ArrayListを使った商品リストの管理",
          "商品追加メソッドの実装",
          "商品削除メソッドの実装"
        ]
      },
      {
        id: 3,
        title: "入荷・出荷処理機能",
        description: "商品の入荷（在庫追加）と出荷（在庫減少）の処理を実装します。在庫数の整合性チェックも含みます。",
        objectives: [
          "入荷処理メソッドの実装",
          "出荷処理メソッドの実装",
          "在庫数チェック機能",
          "在庫不足エラーの処理"
        ]
      },
      {
        id: 4,
        title: "検索・表示機能",
        description: "商品の検索機能と在庫一覧の表示機能を実装します。商品IDでの検索や在庫不足商品の検出を行います。",
        objectives: [
          "商品検索メソッドの実装",
          "在庫一覧表示機能",
          "在庫不足商品の検出",
          "条件別商品フィルタリング"
        ]
      },
      {
        id: 5,
        title: "メインアプリケーション",
        description: "ユーザーインターフェースを持つメインクラスを作成し、システム全体を統合します。メニュー形式でユーザーが操作できるようにします。",
        objectives: [
          "メインクラスの作成",
          "ユーザーメニューの実装",
          "各機能の統合",
          "エラーハンドリングの実装"
        ]
      }
    ],
    codeBlocks: [
      // Phase 1のブロック
      {
        id: "inventory-block-product-class",
        phase: 1,
        type: "class",
        category: "基本クラス",
        difficulty: "easy",
        label: "Product クラス",
        description: "商品情報を管理するクラス",
        code: `class Product {
    private String productId;
    private String name;
    private double price;
    private int stock;
    
    public Product(String productId, String name, double price, int stock) {
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }`
      },
      {
        id: "inventory-block-product-getters",
        phase: 1,
        type: "method",
        category: "アクセサメソッド",
        difficulty: "easy",
        label: "ゲッターメソッド",
        description: "商品情報を取得するメソッド群",
        code: `    public String getProductId() { return productId; }
    public String getName() { return name; }
    public double getPrice() { return price; }
    public int getStock() { return stock; }`
      },
      {
        id: "inventory-block-product-setters",
        phase: 1,
        type: "method",
        category: "アクセサメソッド",
        difficulty: "easy",
        label: "セッターメソッド",
        description: "商品情報を設定するメソッド群",
        code: `    public void setName(String name) { this.name = name; }
    public void setPrice(double price) { this.price = price; }
    public void setStock(int stock) { this.stock = stock; }`
      },
      {
        id: "inventory-block-product-display",
        phase: 1,
        type: "method",
        category: "表示メソッド",
        difficulty: "easy",
        label: "商品情報表示",
        description: "商品情報をフォーマットして表示",
        code: `    public String toString() {
        return String.format("ID: %s | %s | 価格: %.2f円 | 在庫: %d個",
                productId, name, price, stock);
    }
    
    public String getStockStatus() {
        if (stock < 10) return "在庫不足";
        if (stock < 50) return "要注意";
        return "在庫充分";
    }`
      },

      // Phase 2のブロック
      {
        id: "inventory-block-manager-class",
        phase: 2,
        type: "class",
        category: "管理クラス",
        difficulty: "medium",
        label: "InventoryManager クラス",
        description: "在庫を管理するメインクラス",
        code: `class InventoryManager {
    private ArrayList<Product> products;
    
    public InventoryManager() {
        this.products = new ArrayList<>();
    }`
      },
      {
        id: "inventory-block-add-product",
        phase: 2,
        type: "method",
        category: "データ操作",
        difficulty: "medium",
        label: "商品追加メソッド",
        description: "新しい商品を在庫に追加する",
        code: `    public boolean addProduct(Product product) {
        for (Product p : products) {
            if (p.getProductId().equals(product.getProductId())) {
                System.out.println("エラー: 商品ID " + product.getProductId() + " は既に存在します");
                return false;
            }
        }
        products.add(product);
        System.out.println("商品を追加しました: " + product.getName());
        return true;
    }`
      },
      {
        id: "inventory-block-remove-product",
        phase: 2,
        type: "method",
        category: "データ操作",
        difficulty: "medium",
        label: "商品削除メソッド",
        description: "指定した商品IDの商品を削除",
        code: `    public boolean removeProduct(String productId) {
        Product product = findProductById(productId);
        if (product != null) {
            products.remove(product);
            System.out.println("商品を削除しました: " + product.getName());
            return true;
        }
        System.out.println("エラー: 商品ID " + productId + " が見つかりません");
        return false;
    }`
      },
      {
        id: "inventory-block-validate-product",
        phase: 2,
        type: "method",
        category: "検証メソッド",
        difficulty: "easy",
        label: "商品検証メソッド",
        description: "商品データの妥当性をチェック",
        code: `    public boolean validateProduct(Product product) {
        if (product.getPrice() < 0) {
            System.out.println("エラー: 価格は0以上である必要があります");
            return false;
        }
        if (product.getStock() < 0) {
            System.out.println("エラー: 在庫数は0以上である必要があります");
            return false;
        }
        return true;
    }`
      },

      // Phase 3のブロック
      {
        id: "inventory-block-restock",
        phase: 3,
        type: "method",
        category: "在庫操作",
        difficulty: "medium",
        label: "入荷処理メソッド",
        description: "商品の在庫を増加させる",
        code: `    public boolean restockProduct(String productId, int quantity) {
        if (quantity <= 0) {
            System.out.println("エラー: 入荷数は1以上である必要があります");
            return false;
        }
        
        Product product = findProductById(productId);
        if (product != null) {
            product.setStock(product.getStock() + quantity);
            System.out.println(product.getName() + " を " + quantity + " 個入荷しました");
            System.out.println("現在の在庫数: " + product.getStock() + " 個");
            return true;
        }
        System.out.println("エラー: 商品ID " + productId + " が見つかりません");
        return false;
    }`
      },
      {
        id: "inventory-block-sell",
        phase: 3,
        type: "method",
        category: "在庫操作",
        difficulty: "medium",
        label: "出荷処理メソッド",
        description: "商品の在庫を減少させる",
        code: `    public boolean sellProduct(String productId, int quantity) {
        if (quantity <= 0) {
            System.out.println("エラー: 出荷数は1以上である必要があります");
            return false;
        }
        
        Product product = findProductById(productId);
        if (product != null) {
            if (product.getStock() >= quantity) {
                product.setStock(product.getStock() - quantity);
                System.out.println(product.getName() + " を " + quantity + " 個出荷しました");
                System.out.println("残り在庫数: " + product.getStock() + " 個");
                return true;
            } else {
                System.out.println("エラー: 在庫不足です (要求: " + quantity + " 個, 在庫: " + product.getStock() + " 個)");
                return false;
            }
        }
        System.out.println("エラー: 商品ID " + productId + " が見つかりません");
        return false;
    }`
      },
      {
        id: "inventory-block-check-stock",
        phase: 3,
        type: "method",
        category: "チェック機能",
        difficulty: "easy",
        label: "在庫確認メソッド",
        description: "指定商品の在庫状況を確認",
        code: `    public void checkStock(String productId) {
        Product product = findProductById(productId);
        if (product != null) {
            System.out.println("=== 在庫状況 ===");
            System.out.println(product);
            System.out.println("ステータス: " + product.getStockStatus());
            
            if (product.getStock() < 10) {
                System.out.println("⚠️ 在庫不足警告: 早急な補充が必要です");
            }
        } else {
            System.out.println("エラー: 商品ID " + productId + " が見つかりません");
        }
    }`
      },
      {
        id: "inventory-block-bulk-update",
        phase: 3,
        type: "method",
        category: "一括処理",
        difficulty: "hard",
        label: "一括在庫更新",
        description: "複数商品の在庫を一括で更新",
        code: `    public void bulkUpdateStock(Map<String, Integer> updates) {
        System.out.println("=== 一括在庫更新開始 ===");
        int successCount = 0;
        int failCount = 0;
        
        for (Map.Entry<String, Integer> entry : updates.entrySet()) {
            String productId = entry.getKey();
            int newStock = entry.getValue();
            Product product = findProductById(productId);
            
            if (product != null && newStock >= 0) {
                product.setStock(newStock);
                System.out.println(product.getName() + " の在庫を " + newStock + " 個に更新");
                successCount++;
            } else {
                System.out.println("更新失敗: " + productId);
                failCount++;
            }
        }
        System.out.println("更新完了 - 成功: " + successCount + "件, 失敗: " + failCount + "件");
    }`
      },

      // Phase 4のブロック
      {
        id: "inventory-block-find-product",
        phase: 4,
        type: "method",
        category: "検索メソッド",
        difficulty: "easy",
        label: "商品検索メソッド",
        description: "IDで商品を検索する",
        code: `    public Product findProductById(String productId) {
        for (Product product : products) {
            if (product.getProductId().equals(productId)) {
                return product;
            }
        }
        return null;
    }`
      },
      {
        id: "inventory-block-display-all",
        phase: 4,
        type: "method",
        category: "表示機能",
        difficulty: "medium",
        label: "全商品表示",
        description: "全ての商品を一覧表示",
        code: `    public void displayAllProducts() {
        if (products.isEmpty()) {
            System.out.println("商品が登録されていません");
            return;
        }
        
        System.out.println("\\n=== 全商品一覧 ===");
        System.out.println("商品数: " + products.size() + " 点");
        System.out.println("─".repeat(80));
        
        for (Product product : products) {
            System.out.printf("%-10s | %-20s | %8.2f円 | %5d個 | %s%n",
                product.getProductId(),
                product.getName(),
                product.getPrice(),
                product.getStock(),
                product.getStockStatus()
            );
        }
        System.out.println("─".repeat(80));
    }`
      },
      {
        id: "inventory-block-low-stock",
        phase: 4,
        type: "method",
        category: "分析メソッド",
        difficulty: "medium",
        label: "在庫不足検出",
        description: "在庫不足の商品を検出する",
        code: `    public void displayLowStockProducts() {
        ArrayList<Product> lowStockProducts = new ArrayList<>();
        
        for (Product product : products) {
            if (product.getStock() < 10) {
                lowStockProducts.add(product);
            }
        }
        
        if (lowStockProducts.isEmpty()) {
            System.out.println("在庫不足の商品はありません");
        } else {
            System.out.println("\\n=== 在庫不足商品 ===");
            System.out.println("対象商品数: " + lowStockProducts.size() + " 点");
            System.out.println("─".repeat(60));
            
            for (Product product : lowStockProducts) {
                System.out.printf("%-10s | %-20s | 残り%3d個%n",
                    product.getProductId(),
                    product.getName(),
                    product.getStock()
                );
            }
            System.out.println("─".repeat(60));
        }
    }`
      },
      {
        id: "inventory-block-search-by-name",
        phase: 4,
        type: "method",
        category: "検索メソッド",
        difficulty: "medium",
        label: "名前検索メソッド",
        description: "商品名で部分一致検索",
        code: `    public void searchByName(String keyword) {
        ArrayList<Product> results = new ArrayList<>();
        
        for (Product product : products) {
            if (product.getName().toLowerCase().contains(keyword.toLowerCase())) {
                results.add(product);
            }
        }
        
        if (results.isEmpty()) {
            System.out.println("\"" + keyword + "\" に一致する商品が見つかりませんでした");
        } else {
            System.out.println("\\n=== 検索結果: \"" + keyword + "\" ===");
            System.out.println("該当商品数: " + results.size() + " 点");
            System.out.println("─".repeat(60));
            
            for (Product product : results) {
                System.out.println(product);
            }
            System.out.println("─".repeat(60));
        }
    }`
      },

      // Phase 5のブロック
      {
        id: "inventory-block-main-class",
        phase: 5,
        type: "class",
        category: "メインクラス",
        difficulty: "medium",
        label: "メインクラス",
        description: "アプリケーションのメインクラス",
        code: `public class InventoryManagementSystem {
    private static InventoryManager manager = new InventoryManager();
    private static Scanner scanner = new Scanner(System.in);`
      },
      {
        id: "inventory-block-main-method",
        phase: 5,
        type: "method",
        category: "メインメソッド",
        difficulty: "easy",
        label: "メインメソッド",
        description: "アプリケーションのエントリーポイント",
        code: `    public static void main(String[] args) {
        System.out.println("=== 在庫管理システム ===");
        
        // 初期データの追加
        initializeSampleData();
        
        // メインループ
        mainMenu();
        
        scanner.close();
        System.out.println("システムを終了します");
    }`
      },
      {
        id: "inventory-block-menu-loop",
        phase: 5,
        type: "loop",
        category: "制御構造",
        difficulty: "medium",
        label: "メニューループ",
        description: "ユーザーメニューを表示し続ける",
        code: `    public static void mainMenu() {
        while (true) {
            System.out.println("\\n=== メインメニュー ===");
            System.out.println("1. 全商品表示");
            System.out.println("2. 商品検索");
            System.out.println("3. 商品追加");
            System.out.println("4. 入荷処理");
            System.out.println("5. 出荷処理");
            System.out.println("6. 在庫不足商品確認");
            System.out.println("7. 在庫状況確認");
            System.out.println("0. 終了");
            System.out.print("選択してください: ");
            
            int choice = scanner.nextInt();
            scanner.nextLine(); // バッファクリア
            
            switch (choice) {
                case 1: manager.displayAllProducts(); break;
                case 2: searchProduct(); break;
                case 3: addNewProduct(); break;
                case 4: restockProduct(); break;
                case 5: sellProduct(); break;
                case 6: manager.displayLowStockProducts(); break;
                case 7: checkProductStock(); break;
                case 0: return;
                default: System.out.println("無効な選択です");
            }
        }
    }`
      },
      {
        id: "inventory-block-input-methods",
        phase: 5,
        type: "method",
        category: "入力処理",
        difficulty: "hard",
        label: "入力処理メソッド",
        description: "ユーザー入力を処理するメソッド群",
        code: `    public static void addNewProduct() {
        System.out.println("\\n=== 商品追加 ===");
        System.out.print("商品ID: ");
        String id = scanner.nextLine();
        System.out.print("商品名: ");
        String name = scanner.nextLine();
        System.out.print("価格: ");
        double price = scanner.nextDouble();
        System.out.print("初期在庫数: ");
        int stock = scanner.nextInt();
        scanner.nextLine();
        
        Product product = new Product(id, name, price, stock);
        if (manager.validateProduct(product)) {
            manager.addProduct(product);
        }
    }
    
    public static void searchProduct() {
        System.out.print("検索キーワードを入力: ");
        String keyword = scanner.nextLine();
        manager.searchByName(keyword);
    }
    
    public static void restockProduct() {
        System.out.print("商品ID: ");
        String id = scanner.nextLine();
        System.out.print("入荷数: ");
        int quantity = scanner.nextInt();
        scanner.nextLine();
        manager.restockProduct(id, quantity);
    }
    
    public static void sellProduct() {
        System.out.print("商品ID: ");
        String id = scanner.nextLine();
        System.out.print("出荷数: ");
        int quantity = scanner.nextInt();
        scanner.nextLine();
        manager.sellProduct(id, quantity);
    }
    
    public static void checkProductStock() {
        System.out.print("商品ID: ");
        String id = scanner.nextLine();
        manager.checkStock(id);
    }`
      },
      {
        id: "inventory-block-init-data",
        phase: 5,
        type: "method",
        category: "初期化処理",
        difficulty: "easy",
        label: "サンプルデータ初期化",
        description: "テスト用のサンプルデータを追加",
        code: `    public static void initializeSampleData() {
        System.out.println("サンプルデータを初期化中...");
        
        manager.addProduct(new Product("P001", "ワイヤレスマウス", 2980.0, 25));
        manager.addProduct(new Product("P002", "USB充電器", 1500.0, 8));
        manager.addProduct(new Product("P003", "ノートパソコン", 89800.0, 3));
        manager.addProduct(new Product("P004", "スマートフォンケース", 980.0, 15));
        manager.addProduct(new Product("P005", "ワイヤレスイヤホン", 12800.0, 2));
        
        System.out.println("サンプルデータの初期化が完了しました");
    }`
      }
    ],
    codeSlots: [
      // Phase 1のスロット
      {
        id: "inventory-slot-product-class",
        phaseId: 1,
        label: "商品クラス定義",
        acceptedTypes: ["class"],
        acceptedCategories: ["基本クラス"],
        position: 1,
        isRequired: true,
        hint: "商品の基本情報を管理するクラス"
      },
      {
        id: "inventory-slot-getters",
        phaseId: 1,
        label: "ゲッターメソッド群",
        acceptedTypes: ["method"],
        acceptedCategories: ["アクセサメソッド"],
        position: 2,
        isRequired: true,
        hint: "商品情報を取得するメソッド"
      },
      {
        id: "inventory-slot-setters",
        phaseId: 1,
        label: "セッターメソッド群",
        acceptedTypes: ["method"],
        acceptedCategories: ["アクセサメソッド"],
        position: 3,
        isRequired: true,
        hint: "商品情報を変更するメソッド"
      },
      {
        id: "inventory-slot-display",
        phaseId: 1,
        label: "表示メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["表示メソッド"],
        position: 4,
        isRequired: true,
        hint: "商品情報を表示するメソッド"
      },

      // Phase 2のスロット
      {
        id: "inventory-slot-manager-class",
        phaseId: 2,
        label: "管理クラス定義",
        acceptedTypes: ["class"],
        acceptedCategories: ["管理クラス"],
        position: 1,
        isRequired: true,
        hint: "在庫を管理するメインクラス"
      },
      {
        id: "inventory-slot-add-product",
        phaseId: 2,
        label: "商品追加機能",
        acceptedTypes: ["method"],
        acceptedCategories: ["データ操作"],
        position: 2,
        isRequired: true,
        hint: "新しい商品を追加するメソッド"
      },
      {
        id: "inventory-slot-remove-product",
        phaseId: 2,
        label: "商品削除機能",
        acceptedTypes: ["method"],
        acceptedCategories: ["データ操作"],
        position: 3,
        isRequired: true,
        hint: "指定した商品を削除するメソッド"
      },
      {
        id: "inventory-slot-validate",
        phaseId: 2,
        label: "データ検証機能",
        acceptedTypes: ["method"],
        acceptedCategories: ["検証メソッド"],
        position: 4,
        isRequired: true,
        hint: "商品データの妥当性をチェック"
      },

      // Phase 3のスロット
      {
        id: "inventory-slot-restock",
        phaseId: 3,
        label: "入荷処理",
        acceptedTypes: ["method"],
        acceptedCategories: ["在庫操作"],
        position: 1,
        isRequired: true,
        hint: "商品の在庫を増やすメソッド"
      },
      {
        id: "inventory-slot-sell",
        phaseId: 3,
        label: "出荷処理",
        acceptedTypes: ["method"],
        acceptedCategories: ["在庫操作"],
        position: 2,
        isRequired: true,
        hint: "商品の在庫を減らすメソッド"
      },
      {
        id: "inventory-slot-check",
        phaseId: 3,
        label: "在庫確認",
        acceptedTypes: ["method"],
        acceptedCategories: ["チェック機能"],
        position: 3,
        isRequired: true,
        hint: "商品の在庫状況を確認するメソッド"
      },
      {
        id: "inventory-slot-bulk",
        phaseId: 3,
        label: "一括更新処理",
        acceptedTypes: ["method"],
        acceptedCategories: ["一括処理"],
        position: 4,
        isRequired: false,
        hint: "複数商品を一括で更新する高度な機能"
      },

      // Phase 4のスロット
      {
        id: "inventory-slot-find",
        phaseId: 4,
        label: "商品検索",
        acceptedTypes: ["method"],
        acceptedCategories: ["検索メソッド"],
        position: 1,
        isRequired: true,
        hint: "IDで商品を検索するメソッド"
      },
      {
        id: "inventory-slot-display-all",
        phaseId: 4,
        label: "全商品表示",
        acceptedTypes: ["method"],
        acceptedCategories: ["表示機能"],
        position: 2,
        isRequired: true,
        hint: "全ての商品を一覧表示するメソッド"
      },
      {
        id: "inventory-slot-low-stock",
        phaseId: 4,
        label: "在庫不足検出",
        acceptedTypes: ["method"],
        acceptedCategories: ["分析メソッド"],
        position: 3,
        isRequired: true,
        hint: "在庫不足の商品を検出するメソッド"
      },
      {
        id: "inventory-slot-name-search",
        phaseId: 4,
        label: "名前検索",
        acceptedTypes: ["method"],
        acceptedCategories: ["検索メソッド"],
        position: 4,
        isRequired: true,
        hint: "商品名で検索するメソッド"
      },

      // Phase 5のスロット
      {
        id: "inventory-slot-main-class",
        phaseId: 5,
        label: "メインクラス",
        acceptedTypes: ["class"],
        acceptedCategories: ["メインクラス"],
        position: 1,
        isRequired: true,
        hint: "アプリケーションのメインクラス"
      },
      {
        id: "inventory-slot-main-method",
        phaseId: 5,
        label: "メインメソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["メインメソッド"],
        position: 2,
        isRequired: true,
        hint: "プログラムの開始点"
      },
      {
        id: "inventory-slot-menu",
        phaseId: 5,
        label: "メニューシステム",
        acceptedTypes: ["loop"],
        acceptedCategories: ["制御構造"],
        position: 3,
        isRequired: true,
        hint: "ユーザーメニューのループ処理"
      },
      {
        id: "inventory-slot-input-methods",
        phaseId: 5,
        label: "入力処理メソッド",
        acceptedTypes: ["method"],
        acceptedCategories: ["入力処理"],
        position: 4,
        isRequired: true,
        hint: "ユーザー入力を処理するメソッド群"
      },
      {
        id: "inventory-slot-init-data",
        phaseId: 5,
        label: "初期データ設定",
        acceptedTypes: ["method"],
        acceptedCategories: ["初期化処理"],
        position: 5,
        isRequired: true,
        hint: "サンプルデータを初期化するメソッド"
      }
    ],
    hints: [
      {
        id: 1,
        title: "クラス設計のポイント",
        content: "商品クラスは商品ID、名前、価格、在庫数の4つの基本フィールドを持ちます。在庫管理の基本となる重要なクラスです。",
        codeExample: `class Product {
    private String productId;
    private String name;
    private double price;
    private int stock;
}`
      },
      {
        id: 2,
        title: "ArrayListの活用",
        content: "在庫管理クラスではArrayListを使って動的に商品を管理します。商品の追加・削除が簡単に行えます。",
        codeExample: `private ArrayList<Product> products = new ArrayList<>();`
      },
      {
        id: 3,
        title: "在庫数の管理",
        content: "在庫の増減処理では、必ず現在の在庫数をチェックして、マイナスにならないようにしましょう。",
        codeExample: `if (product.getStock() >= quantity) {
    product.setStock(product.getStock() - quantity);
} else {
    System.out.println("在庫不足です");
}`
      }
    ],
    testCases: [
      {
        id: 1,
        description: "商品の追加と表示",
        input: "P001, ワイヤレスマウス, 2980.0, 25",
        expectedOutput: "商品を追加しました: ワイヤレスマウス"
      },
      {
        id: 2,
        description: "在庫の入荷処理",
        input: "P001, 10",
        expectedOutput: "ワイヤレスマウス を 10 個入荷しました"
      },
      {
        id: 3,
        description: "在庫不足での出荷エラー",
        input: "P001, 100",
        expectedOutput: "エラー: 在庫不足です"
      }
    ],
    starterCode: `import java.util.*;

// ここに商品クラスと在庫管理システムを実装してください
`,
    solutionCode: `import java.util.*;

class Product {
    private String productId;
    private String name;
    private double price;
    private int stock;
    
    public Product(String productId, String name, double price, int stock) {
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    
    public String getProductId() { return productId; }
    public String getName() { return name; }
    public double getPrice() { return price; }
    public int getStock() { return stock; }
    
    public void setName(String name) { this.name = name; }
    public void setPrice(double price) { this.price = price; }
    public void setStock(int stock) { this.stock = stock; }
    
    public String toString() {
        return String.format("ID: %s | %s | 価格: %.2f円 | 在庫: %d個",
                productId, name, price, stock);
    }
    
    public String getStockStatus() {
        if (stock < 10) return "在庫不足";
        if (stock < 50) return "要注意";
        return "在庫充分";
    }
}

class InventoryManager {
    private ArrayList<Product> products;
    
    public InventoryManager() {
        this.products = new ArrayList<>();
    }
    
    public boolean addProduct(Product product) {
        for (Product p : products) {
            if (p.getProductId().equals(product.getProductId())) {
                System.out.println("エラー: 商品ID " + product.getProductId() + " は既に存在します");
                return false;
            }
        }
        products.add(product);
        System.out.println("商品を追加しました: " + product.getName());
        return true;
    }
    
    public boolean removeProduct(String productId) {
        Product product = findProductById(productId);
        if (product != null) {
            products.remove(product);
            System.out.println("商品を削除しました: " + product.getName());
            return true;
        }
        System.out.println("エラー: 商品ID " + productId + " が見つかりません");
        return false;
    }
    
    public boolean validateProduct(Product product) {
        if (product.getPrice() < 0) {
            System.out.println("エラー: 価格は0以上である必要があります");
            return false;
        }
        if (product.getStock() < 0) {
            System.out.println("エラー: 在庫数は0以上である必要があります");
            return false;
        }
        return true;
    }
    
    public boolean restockProduct(String productId, int quantity) {
        if (quantity <= 0) {
            System.out.println("エラー: 入荷数は1以上である必要があります");
            return false;
        }
        
        Product product = findProductById(productId);
        if (product != null) {
            product.setStock(product.getStock() + quantity);
            System.out.println(product.getName() + " を " + quantity + " 個入荷しました");
            System.out.println("現在の在庫数: " + product.getStock() + " 個");
            return true;
        }
        System.out.println("エラー: 商品ID " + productId + " が見つかりません");
        return false;
    }
    
    public boolean sellProduct(String productId, int quantity) {
        if (quantity <= 0) {
            System.out.println("エラー: 出荷数は1以上である必要があります");
            return false;
        }
        
        Product product = findProductById(productId);
        if (product != null) {
            if (product.getStock() >= quantity) {
                product.setStock(product.getStock() - quantity);
                System.out.println(product.getName() + " を " + quantity + " 個出荷しました");
                System.out.println("残り在庫数: " + product.getStock() + " 個");
                return true;
            } else {
                System.out.println("エラー: 在庫不足です (要求: " + quantity + " 個, 在庫: " + product.getStock() + " 個)");
                return false;
            }
        }
        System.out.println("エラー: 商品ID " + productId + " が見つかりません");
        return false;
    }
    
    public void checkStock(String productId) {
        Product product = findProductById(productId);
        if (product != null) {
            System.out.println("=== 在庫状況 ===");
            System.out.println(product);
            System.out.println("ステータス: " + product.getStockStatus());
            
            if (product.getStock() < 10) {
                System.out.println("⚠️ 在庫不足警告: 早急な補充が必要です");
            }
        } else {
            System.out.println("エラー: 商品ID " + productId + " が見つかりません");
        }
    }
    
    public Product findProductById(String productId) {
        for (Product product : products) {
            if (product.getProductId().equals(productId)) {
                return product;
            }
        }
        return null;
    }
    
    public void displayAllProducts() {
        if (products.isEmpty()) {
            System.out.println("商品が登録されていません");
            return;
        }
        
        System.out.println("\\n=== 全商品一覧 ===");
        System.out.println("商品数: " + products.size() + " 点");
        System.out.println("─".repeat(80));
        
        for (Product product : products) {
            System.out.printf("%-10s | %-20s | %8.2f円 | %5d個 | %s%n",
                product.getProductId(),
                product.getName(),
                product.getPrice(),
                product.getStock(),
                product.getStockStatus()
            );
        }
        System.out.println("─".repeat(80));
    }
    
    public void displayLowStockProducts() {
        ArrayList<Product> lowStockProducts = new ArrayList<>();
        
        for (Product product : products) {
            if (product.getStock() < 10) {
                lowStockProducts.add(product);
            }
        }
        
        if (lowStockProducts.isEmpty()) {
            System.out.println("在庫不足の商品はありません");
        } else {
            System.out.println("\\n=== 在庫不足商品 ===");
            System.out.println("対象商品数: " + lowStockProducts.size() + " 点");
            System.out.println("─".repeat(60));
            
            for (Product product : lowStockProducts) {
                System.out.printf("%-10s | %-20s | 残り%3d個%n",
                    product.getProductId(),
                    product.getName(),
                    product.getStock()
                );
            }
            System.out.println("─".repeat(60));
        }
    }
    
    public void searchByName(String keyword) {
        ArrayList<Product> results = new ArrayList<>();
        
        for (Product product : products) {
            if (product.getName().toLowerCase().contains(keyword.toLowerCase())) {
                results.add(product);
            }
        }
        
        if (results.isEmpty()) {
            System.out.println("\"" + keyword + "\" に一致する商品が見つかりませんでした");
        } else {
            System.out.println("\\n=== 検索結果: \"" + keyword + "\" ===");
            System.out.println("該当商品数: " + results.size() + " 点");
            System.out.println("─".repeat(60));
            
            for (Product product : results) {
                System.out.println(product);
            }
            System.out.println("─".repeat(60));
        }
    }
}

public class InventoryManagementSystem {
    private static InventoryManager manager = new InventoryManager();
    private static Scanner scanner = new Scanner(System.in);
    
    public static void main(String[] args) {
        System.out.println("=== 在庫管理システム ===");
        
        // 初期データの追加
        initializeSampleData();
        
        // メインループ
        mainMenu();
        
        scanner.close();
        System.out.println("システムを終了します");
    }
    
    public static void mainMenu() {
        while (true) {
            System.out.println("\\n=== メインメニュー ===");
            System.out.println("1. 全商品表示");
            System.out.println("2. 商品検索");
            System.out.println("3. 商品追加");
            System.out.println("4. 入荷処理");
            System.out.println("5. 出荷処理");
            System.out.println("6. 在庫不足商品確認");
            System.out.println("7. 在庫状況確認");
            System.out.println("0. 終了");
            System.out.print("選択してください: ");
            
            int choice = scanner.nextInt();
            scanner.nextLine(); // バッファクリア
            
            switch (choice) {
                case 1: manager.displayAllProducts(); break;
                case 2: searchProduct(); break;
                case 3: addNewProduct(); break;
                case 4: restockProduct(); break;
                case 5: sellProduct(); break;
                case 6: manager.displayLowStockProducts(); break;
                case 7: checkProductStock(); break;
                case 0: return;
                default: System.out.println("無効な選択です");
            }
        }
    }
    
    public static void addNewProduct() {
        System.out.println("\\n=== 商品追加 ===");
        System.out.print("商品ID: ");
        String id = scanner.nextLine();
        System.out.print("商品名: ");
        String name = scanner.nextLine();
        System.out.print("価格: ");
        double price = scanner.nextDouble();
        System.out.print("初期在庫数: ");
        int stock = scanner.nextInt();
        scanner.nextLine();
        
        Product product = new Product(id, name, price, stock);
        if (manager.validateProduct(product)) {
            manager.addProduct(product);
        }
    }
    
    public static void searchProduct() {
        System.out.print("検索キーワードを入力: ");
        String keyword = scanner.nextLine();
        manager.searchByName(keyword);
    }
    
    public static void restockProduct() {
        System.out.print("商品ID: ");
        String id = scanner.nextLine();
        System.out.print("入荷数: ");
        int quantity = scanner.nextInt();
        scanner.nextLine();
        manager.restockProduct(id, quantity);
    }
    
    public static void sellProduct() {
        System.out.print("商品ID: ");
        String id = scanner.nextLine();
        System.out.print("出荷数: ");
        int quantity = scanner.nextInt();
        scanner.nextLine();
        manager.sellProduct(id, quantity);
    }
    
    public static void checkProductStock() {
        System.out.print("商品ID: ");
        String id = scanner.nextLine();
        manager.checkStock(id);
    }
    
    public static void initializeSampleData() {
        System.out.println("サンプルデータを初期化中...");
        
        manager.addProduct(new Product("P001", "ワイヤレスマウス", 2980.0, 25));
        manager.addProduct(new Product("P002", "USB充電器", 1500.0, 8));
        manager.addProduct(new Product("P003", "ノートパソコン", 89800.0, 3));
        manager.addProduct(new Product("P004", "スマートフォンケース", 980.0, 15));
        manager.addProduct(new Product("P005", "ワイヤレスイヤホン", 12800.0, 2));
        
        System.out.println("サンプルデータの初期化が完了しました");
    }
}`
  },
  {
    id: 7,
    title: "図書館管理システム",
    client: "市立図書館",
    deadline: "2週間以内",
    difficulty: 'beginner',
    estimatedTime: "3-4時間",
    description: "市立図書館では、図書の貸出・返却管理をデジタル化したいと考えています。現在は紙ベースで管理していますが、効率化のためにシステム化が必要です。基本的な図書管理機能を持つアプリケーションを作成してください。",
    requirements: [
      "図書の登録・検索・表示機能",
      "利用者の登録・管理機能", 
      "図書の貸出・返却処理",
      "貸出状況の確認機能",
      "簡単な統計情報の表示"
    ],
    constraints: [
      "Java言語で実装すること",
      "コンソールベースのアプリケーションとする",
      "図書は最大100冊まで管理可能とする",
      "利用者は最大50人まで登録可能とする",
      "1人あたりの貸出上限は3冊とする"
    ],
    learningPoints: [
      "クラス設計とオブジェクト指向プログラミング",
      "ArrayListを使ったデータ管理",
      "メソッドの分割と責任の分離",
      "条件分岐とループの活用",
      "例外処理の実装"
    ],
    hints: [
      {
        level: 1,
        title: "クラス設計のヒント",
        content: "図書館システムに必要なクラスを考えてみましょう。Book（図書）、Member（利用者）、Library（図書館）の3つのクラスが基本となります。",
        codeExample: `public class Book {
    private String isbn;
    private String title;
    private String author;
    private boolean isAvailable;
    
    // コンストラクタとgetter/setterメソッド
}`
      },
      {
        level: 2,
        title: "データ管理のヒント",
        content: "ArrayListを使って図書と利用者の情報を管理しましょう。検索や更新が簡単になります。",
        codeExample: `private ArrayList<Book> books = new ArrayList<>();
private ArrayList<Member> members = new ArrayList<>();`
      },
      {
        level: 3,
        title: "貸出処理のヒント",
        content: "貸出処理では、図書の在庫確認、利用者の貸出上限チェック、貸出記録の更新が必要です。",
        codeExample: `public boolean lendBook(String isbn, String memberId) {
    Book book = findBookByIsbn(isbn);
    Member member = findMemberById(memberId);
    
    if (book != null && book.isAvailable() && member.canBorrow()) {
        // 貸出処理
        return true;
    }
    return false;
}`
      }
    ],
    phases: [
      {
        id: 1,
        title: "基本クラスの設計",
        description: "Book、Member、Libraryクラスの基本構造を作成します",
        objectives: [
          "Bookクラスの作成（ISBN、タイトル、著者、貸出状況）",
          "Memberクラスの作成（会員ID、名前、貸出中図書リスト）", 
          "Libraryクラスの作成（図書・会員管理用のArrayList）"
        ],
        completed: false
      },
      {
        id: 2,
        title: "データ登録機能",
        description: "図書と会員の登録機能を実装します",
        objectives: [
          "図書登録機能の実装",
          "会員登録機能の実装",
          "重複チェック機能の追加"
        ],
        completed: false
      },
      {
        id: 3,
        title: "検索・表示機能",
        description: "図書と会員の検索・一覧表示機能を実装します",
        objectives: [
          "ISBN による図書検索",
          "タイトルによる図書検索",
          "会員ID による会員検索",
          "全図書・全会員の一覧表示"
        ],
        completed: false
      },
      {
        id: 4,
        title: "貸出・返却機能",
        description: "図書の貸出と返却の処理を実装します",
        objectives: [
          "貸出処理の実装（在庫確認、上限チェック）",
          "返却処理の実装",
          "貸出記録の管理"
        ],
        completed: false
      },
      {
        id: 5,
        title: "統計情報とメニュー",
        description: "統計情報表示とメインメニューを実装して完成させます",
        objectives: [
          "貸出中図書数の表示",
          "利用者別貸出状況の表示",
          "メインメニューの実装",
          "例外処理の追加"
        ],
        completed: false
      }
    ],
    starterCode: `import java.util.*;

public class LibrarySystem {
    public static void main(String[] args) {
        Library library = new Library();
        Scanner scanner = new Scanner(System.in);
        
        // サンプルデータの初期化
        library.initializeSampleData();
        
        System.out.println("=== 図書館管理システム ===");
        // メニュー処理をここに実装
        
        scanner.close();
    }
}

class Book {
    // Book クラスの実装をここに追加
}

class Member {
    // Member クラスの実装をここに追加  
}

class Library {
    // Library クラスの実装をここに追加
}`,
    solutionCode: `import java.util.*;

public class LibrarySystem {
    public static void main(String[] args) {
        Library library = new Library();
        Scanner scanner = new Scanner(System.in);
        
        // サンプルデータの初期化
        library.initializeSampleData();
        
        System.out.println("=== 図書館管理システム ===");
        
        while (true) {
            System.out.println("\\n1. 図書登録  2. 会員登録  3. 図書検索  4. 貸出  5. 返却  6. 統計  0. 終了");
            System.out.print("選択してください: ");
            
            int choice = scanner.nextInt();
            scanner.nextLine(); // 改行文字の消費
            
            switch (choice) {
                case 1:
                    System.out.print("ISBN: ");
                    String isbn = scanner.nextLine();
                    System.out.print("タイトル: ");
                    String title = scanner.nextLine();
                    System.out.print("著者: ");
                    String author = scanner.nextLine();
                    library.addBook(new Book(isbn, title, author));
                    break;
                case 2:
                    System.out.print("会員ID: ");
                    String memberId = scanner.nextLine();
                    System.out.print("名前: ");
                    String name = scanner.nextLine();
                    library.addMember(new Member(memberId, name));
                    break;
                case 3:
                    System.out.print("検索するタイトル: ");
                    String searchTitle = scanner.nextLine();
                    library.searchBooks(searchTitle);
                    break;
                case 4:
                    System.out.print("貸出ISBN: ");
                    String lendIsbn = scanner.nextLine();
                    System.out.print("会員ID: ");
                    String lendMemberId = scanner.nextLine();
                    library.lendBook(lendIsbn, lendMemberId);
                    break;
                case 5:
                    System.out.print("返却ISBN: ");
                    String returnIsbn = scanner.nextLine();
                    System.out.print("会員ID: ");
                    String returnMemberId = scanner.nextLine();
                    library.returnBook(returnIsbn, returnMemberId);
                    break;
                case 6:
                    library.showStatistics();
                    break;
                case 0:
                    System.out.println("システムを終了します");
                    scanner.close();
                    return;
                default:
                    System.out.println("無効な選択です");
            }
        }
    }
}

class Book {
    private String isbn;
    private String title;
    private String author;
    private boolean isAvailable;
    private String borrowerId;
    
    public Book(String isbn, String title, String author) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.isAvailable = true;
        this.borrowerId = null;
    }
    
    // Getter メソッド
    public String getIsbn() { return isbn; }
    public String getTitle() { return title; }
    public String getAuthor() { return author; }
    public boolean isAvailable() { return isAvailable; }
    public String getBorrowerId() { return borrowerId; }
    
    // 貸出・返却処理
    public void lend(String memberId) {
        this.isAvailable = false;
        this.borrowerId = memberId;
    }
    
    public void returnBook() {
        this.isAvailable = true;
        this.borrowerId = null;
    }
    
    @Override
    public String toString() {
        return String.format("ISBN: %s, タイトル: %s, 著者: %s, 状態: %s", 
                           isbn, title, author, isAvailable ? "貸出可能" : "貸出中");
    }
}

class Member {
    private String memberId;
    private String name;
    private ArrayList<String> borrowedBooks;
    private final int MAX_BORROW = 3;
    
    public Member(String memberId, String name) {
        this.memberId = memberId;
        this.name = name;
        this.borrowedBooks = new ArrayList<>();
    }
    
    // Getter メソッド
    public String getMemberId() { return memberId; }
    public String getName() { return name; }
    public ArrayList<String> getBorrowedBooks() { return borrowedBooks; }
    
    public boolean canBorrow() {
        return borrowedBooks.size() < MAX_BORROW;
    }
    
    public void borrowBook(String isbn) {
        if (canBorrow()) {
            borrowedBooks.add(isbn);
        }
    }
    
    public void returnBook(String isbn) {
        borrowedBooks.remove(isbn);
    }
    
    @Override
    public String toString() {
        return String.format("ID: %s, 名前: %s, 貸出中: %d冊", 
                           memberId, name, borrowedBooks.size());
    }
}

class Library {
    private ArrayList<Book> books;
    private ArrayList<Member> members;
    
    public Library() {
        this.books = new ArrayList<>();
        this.members = new ArrayList<>();
    }
    
    public void addBook(Book book) {
        // 重複チェック
        for (Book existingBook : books) {
            if (existingBook.getIsbn().equals(book.getIsbn())) {
                System.out.println("既に登録済みのISBNです");
                return;
            }
        }
        books.add(book);
        System.out.println("図書を登録しました: " + book.getTitle());
    }
    
    public void addMember(Member member) {
        // 重複チェック
        for (Member existingMember : members) {
            if (existingMember.getMemberId().equals(member.getMemberId())) {
                System.out.println("既に登録済みの会員IDです");
                return;
            }
        }
        members.add(member);
        System.out.println("会員を登録しました: " + member.getName());
    }
    
    public void searchBooks(String searchTitle) {
        System.out.println("\\n=== 検索結果 ===");
        boolean found = false;
        for (Book book : books) {
            if (book.getTitle().toLowerCase().contains(searchTitle.toLowerCase())) {
                System.out.println(book);
                found = true;
            }
        }
        if (!found) {
            System.out.println("該当する図書が見つかりませんでした");
        }
    }
    
    public void lendBook(String isbn, String memberId) {
        Book book = findBookByIsbn(isbn);
        Member member = findMemberById(memberId);
        
        if (book == null) {
            System.out.println("図書が見つかりません");
            return;
        }
        
        if (member == null) {
            System.out.println("会員が見つかりません");
            return;
        }
        
        if (!book.isAvailable()) {
            System.out.println("この図書は既に貸出中です");
            return;
        }
        
        if (!member.canBorrow()) {
            System.out.println("貸出上限に達しています（上限: 3冊）");
            return;
        }
        
        book.lend(memberId);
        member.borrowBook(isbn);
        System.out.println("貸出処理が完了しました: " + book.getTitle());
    }
    
    public void returnBook(String isbn, String memberId) {
        Book book = findBookByIsbn(isbn);
        Member member = findMemberById(memberId);
        
        if (book == null || member == null) {
            System.out.println("図書または会員が見つかりません");
            return;
        }
        
        if (book.isAvailable()) {
            System.out.println("この図書は貸出されていません");
            return;
        }
        
        if (!book.getBorrowerId().equals(memberId)) {
            System.out.println("この図書は別の会員が借りています");
            return;
        }
        
        book.returnBook();
        member.returnBook(isbn);
        System.out.println("返却処理が完了しました: " + book.getTitle());
    }
    
    private Book findBookByIsbn(String isbn) {
        for (Book book : books) {
            if (book.getIsbn().equals(isbn)) {
                return book;
            }
        }
        return null;
    }
    
    private Member findMemberById(String memberId) {
        for (Member member : members) {
            if (member.getMemberId().equals(memberId)) {
                return member;
            }
        }
        return null;
    }
    
    public void showStatistics() {
        System.out.println("\\n=== 統計情報 ===");
        System.out.println("総図書数: " + books.size());
        System.out.println("総会員数: " + members.size());
        
        int availableBooks = 0;
        int borrowedBooks = 0;
        
        for (Book book : books) {
            if (book.isAvailable()) {
                availableBooks++;
            } else {
                borrowedBooks++;
            }
        }
        
        System.out.println("貸出可能図書数: " + availableBooks);
        System.out.println("貸出中図書数: " + borrowedBooks);
        
        System.out.println("\\n=== 会員別貸出状況 ===");
        for (Member member : members) {
            if (member.getBorrowedBooks().size() > 0) {
                System.out.println(member);
            }
        }
    }
    
    public void initializeSampleData() {
        // サンプル図書データ
        addBook(new Book("978-4-7741-8411-1", "Java入門", "田中太郎"));
        addBook(new Book("978-4-7981-5757-3", "プログラミング基礎", "佐藤花子"));
        addBook(new Book("978-4-8156-0123-4", "データ構造とアルゴリズム", "鈴木一郎"));
        addBook(new Book("978-4-7741-9876-5", "Webアプリケーション開発", "山田次郎"));
        addBook(new Book("978-4-7981-6543-2", "データベース設計", "田村美咲"));
        
        // サンプル会員データ
        addMember(new Member("M001", "高橋学"));
        addMember(new Member("M002", "中村優子"));
        addMember(new Member("M003", "小林健太"));
        
        System.out.println("サンプルデータの初期化が完了しました");
    }
}`,
    testCases: [
      {
        input: "図書登録: ISBN=978-4-1234-5678-9, タイトル=テスト図書, 著者=テスト著者",
        expectedOutput: "図書を登録しました: テスト図書",
        description: "図書登録機能のテスト"
      },
      {
        input: "会員登録: ID=M999, 名前=テスト利用者",
        expectedOutput: "会員を登録しました: テスト利用者", 
        description: "会員登録機能のテスト"
      },
      {
        input: "貸出処理: ISBN=978-4-7741-8411-1, 会員ID=M001",
        expectedOutput: "貸出処理が完了しました: Java入門",
        description: "貸出機能のテスト"
      }
    ],
    codeBlocks: [
      // Phase 1: 基本クラス設計
      {
        id: "book-class",
        type: "class",
        category: "クラス定義",
        label: "Bookクラスの基本構造",
        code: "class Book {\n    private String isbn;\n    private String title;\n    private String author;\n    private boolean isAvailable;",
        description: "図書情報を管理するBookクラス",
        phase: 1
      },
      {
        id: "book-constructor",
        type: "method", 
        category: "コンストラクタ",
        label: "Bookコンストラクタ",
        code: "    public Book(String isbn, String title, String author) {\n        this.isbn = isbn;\n        this.title = title;\n        this.author = author;\n        this.isAvailable = true;\n    }",
        description: "Bookオブジェクトを初期化するコンストラクタ",
        phase: 1
      },
      {
        id: "book-getters",
        type: "method",
        category: "Getterメソッド", 
        label: "Book Getterメソッド",
        code: "    public String getIsbn() { return isbn; }\n    public String getTitle() { return title; }\n    public String getAuthor() { return author; }\n    public boolean isAvailable() { return isAvailable; }",
        description: "Bookクラスのフィールドにアクセスするメソッド",
        phase: 1
      },
      {
        id: "member-class",
        type: "class",
        category: "クラス定義",
        label: "Memberクラスの基本構造", 
        code: "class Member {\n    private String memberId;\n    private String name;\n    private ArrayList<String> borrowedBooks;\n    private final int MAX_BORROW = 3;",
        description: "図書館利用者を管理するMemberクラス",
        phase: 1
      },
      {
        id: "member-constructor",
        type: "method",
        category: "コンストラクタ",
        label: "Memberコンストラクタ",
        code: "    public Member(String memberId, String name) {\n        this.memberId = memberId;\n        this.name = name;\n        this.borrowedBooks = new ArrayList<>();\n    }",
        description: "Memberオブジェクトを初期化するコンストラクタ", 
        phase: 1
      },
      {
        id: "library-class",
        type: "class",
        category: "クラス定義",
        label: "Libraryクラスの基本構造",
        code: "class Library {\n    private ArrayList<Book> books;\n    private ArrayList<Member> members;",
        description: "図書館システム全体を管理するLibraryクラス",
        phase: 1
      },
      {
        id: "library-constructor",
        type: "method",
        category: "コンストラクタ", 
        label: "Libraryコンストラクタ",
        code: "    public Library() {\n        this.books = new ArrayList<>();\n        this.members = new ArrayList<>();\n    }",
        description: "LibraryオブジェクトのArrayListを初期化",
        phase: 1
      },
      
      // Phase 2: データ登録機能
      {
        id: "add-book-method",
        type: "method",
        category: "登録機能",
        label: "図書登録メソッド",
        code: "    public void addBook(Book book) {\n        for (Book existingBook : books) {\n            if (existingBook.getIsbn().equals(book.getIsbn())) {\n                System.out.println(\"既に登録済みのISBNです\");\n                return;\n            }\n        }",
        description: "重複チェック付きの図書登録メソッド", 
        phase: 2
      },
      {
        id: "add-book-success",
        type: "statement",
        category: "処理完了",
        label: "図書登録成功処理", 
        code: "        books.add(book);\n        System.out.println(\"図書を登録しました: \" + book.getTitle());",
        description: "図書をリストに追加して成功メッセージを表示",
        phase: 2
      },
      {
        id: "add-member-method",
        type: "method",
        category: "登録機能",
        label: "会員登録メソッド",
        code: "    public void addMember(Member member) {\n        for (Member existingMember : members) {\n            if (existingMember.getMemberId().equals(member.getMemberId())) {\n                System.out.println(\"既に登録済みの会員IDです\");\n                return;\n            }\n        }",
        description: "重複チェック付きの会員登録メソッド",
        phase: 2
      },
      {
        id: "add-member-success", 
        type: "statement",
        category: "処理完了",
        label: "会員登録成功処理",
        code: "        members.add(member);\n        System.out.println(\"会員を登録しました: \" + member.getName());",
        description: "会員をリストに追加して成功メッセージを表示",
        phase: 2
      },
      {
        id: "method-closing",
        type: "statement", 
        category: "メソッド終了",
        label: "メソッド終了",
        code: "    }",
        description: "メソッドの終了括弧",
        phase: 2
      },
      
      // Phase 3: 検索・表示機能  
      {
        id: "search-books-method",
        type: "method",
        category: "検索機能", 
        label: "図書検索メソッド",
        code: "    public void searchBooks(String searchTitle) {\n        System.out.println(\"\\n=== 検索結果 ===\");\n        boolean found = false;",
        description: "タイトルによる図書検索メソッド",
        phase: 3
      },
      {
        id: "search-loop",
        type: "loop",
        category: "検索処理", 
        label: "検索ループ処理",
        code: "        for (Book book : books) {\n            if (book.getTitle().toLowerCase().contains(searchTitle.toLowerCase())) {\n                System.out.println(book);\n                found = true;\n            }\n        }",
        description: "図書リストから該当する図書を検索",
        phase: 3
      },
      {
        id: "search-not-found",
        type: "condition",
        category: "結果判定",
        label: "検索結果なし処理",
        code: "        if (!found) {\n            System.out.println(\"該当する図書が見つかりませんでした\");\n        }",
        description: "検索結果が見つからない場合の処理", 
        phase: 3
      },
      {
        id: "find-book-method", 
        type: "method",
        category: "検索補助",
        label: "ISBN検索メソッド",
        code: "    private Book findBookByIsbn(String isbn) {\n        for (Book book : books) {\n            if (book.getIsbn().equals(isbn)) {\n                return book;\n            }\n        }\n        return null;\n    }",
        description: "ISBNによる図書検索の補助メソッド",
        phase: 3
      },
      {
        id: "find-member-method",
        type: "method", 
        category: "検索補助",
        label: "会員ID検索メソッド",
        code: "    private Member findMemberById(String memberId) {\n        for (Member member : members) {\n            if (member.getMemberId().equals(memberId)) {\n                return member;\n            }\n        }\n        return null;\n    }",
        description: "会員IDによる会員検索の補助メソッド",
        phase: 3
      },
      
      // Phase 4: 貸出・返却機能
      {
        id: "lend-book-method",
        type: "method",
        category: "貸出機能",
        label: "図書貸出メソッド",
        code: "    public void lendBook(String isbn, String memberId) {\n        Book book = findBookByIsbn(isbn);\n        Member member = findMemberById(memberId);",
        description: "図書貸出処理のメインメソッド",
        phase: 4
      },
      {
        id: "lend-validation",
        type: "condition", 
        category: "入力検証",
        label: "貸出前チェック",
        code: "        if (book == null) {\n            System.out.println(\"図書が見つかりません\");\n            return;\n        }\n        if (member == null) {\n            System.out.println(\"会員が見つかりません\");\n            return;\n        }",
        description: "図書と会員の存在確認", 
        phase: 4
      },
      {
        id: "availability-check",
        type: "condition",
        category: "在庫確認",
        label: "貸出可能性チェック",
        code: "        if (!book.isAvailable()) {\n            System.out.println(\"この図書は既に貸出中です\");\n            return;\n        }\n        if (!member.canBorrow()) {\n            System.out.println(\"貸出上限に達しています（上限: 3冊）\");\n            return;\n        }",
        description: "図書の在庫確認と会員の貸出上限チェック",
        phase: 4
      },
      {
        id: "lend-process",
        type: "statement", 
        category: "貸出処理",
        label: "貸出実行処理", 
        code: "        book.lend(memberId);\n        member.borrowBook(isbn);\n        System.out.println(\"貸出処理が完了しました: \" + book.getTitle());",
        description: "実際の貸出処理とメッセージ表示",
        phase: 4
      },
      {
        id: "book-lend-method",
        type: "method",
        category: "Book補助機能", 
        label: "Book貸出メソッド",
        code: "    public void lend(String memberId) {\n        this.isAvailable = false;\n        this.borrowerId = memberId;\n    }",
        description: "Bookクラスの貸出状態更新メソッド",
        phase: 4
      },
      {
        id: "member-can-borrow",
        type: "method",
        category: "Member補助機能",
        label: "貸出可能判定メソッド",
        code: "    public boolean canBorrow() {\n        return borrowedBooks.size() < MAX_BORROW;\n    }",
        description: "会員の貸出可能判定メソッド",
        phase: 4 
      },
      
      // Phase 5: 統計情報とメニュー
      {
        id: "show-statistics-method",
        type: "method", 
        category: "統計機能",
        label: "統計情報表示メソッド", 
        code: "    public void showStatistics() {\n        System.out.println(\"\\n=== 統計情報 ===\");\n        System.out.println(\"総図書数: \" + books.size());\n        System.out.println(\"総会員数: \" + members.size());",
        description: "基本統計情報の表示メソッド",
        phase: 5
      },
      {
        id: "book-count-stats", 
        type: "statement",
        category: "統計計算",
        label: "図書状況集計",
        code: "        int availableBooks = 0;\n        int borrowedBooks = 0;\n        for (Book book : books) {\n            if (book.isAvailable()) {\n                availableBooks++;\n            } else {\n                borrowedBooks++;\n            }\n        }",
        description: "貸出可能・貸出中図書数の集計",
        phase: 5
      },
      {
        id: "stats-display",
        type: "statement",
        category: "統計表示",
        label: "統計結果表示", 
        code: "        System.out.println(\"貸出可能図書数: \" + availableBooks);\n        System.out.println(\"貸出中図書数: \" + borrowedBooks);",
        description: "集計結果の表示",
        phase: 5
      },
      {
        id: "main-menu", 
        type: "loop",
        category: "メニュー制御",
        label: "メインメニューループ",
        code: "        while (true) {\n            System.out.println(\"\\n1. 図書登録  2. 会員登録  3. 図書検索  4. 貸出  5. 返却  6. 統計  0. 終了\");\n            System.out.print(\"選択してください: \");\n            int choice = scanner.nextInt();\n            scanner.nextLine();",
        description: "メインメニューの表示と選択受付",
        phase: 5
      },
      {
        id: "menu-switch",
        type: "condition", 
        category: "メニュー処理",
        label: "メニュー分岐処理",
        code: "            switch (choice) {\n                case 1:\n                    // 図書登録処理\n                    break;\n                case 0:\n                    System.out.println(\"システムを終了します\");\n                    return;",
        description: "選択された機能への分岐処理", 
        phase: 5
      }
    ],
    codeSlots: [
      // Phase 1 slots
      { id: "slot-1-1", phase: 1, expectedBlockId: "book-class", hint: "図書情報を管理するBookクラスを定義" },
      { id: "slot-1-2", phase: 1, expectedBlockId: "book-constructor", hint: "Bookオブジェクトを初期化するコンストラクタ" },
      { id: "slot-1-3", phase: 1, expectedBlockId: "book-getters", hint: "Bookクラスのフィールドにアクセスするgetterメソッド" },
      { id: "slot-1-4", phase: 1, expectedBlockId: "method-closing", hint: "Bookクラスの終了" },
      { id: "slot-1-5", phase: 1, expectedBlockId: "member-class", hint: "利用者を管理するMemberクラスを定義" },
      { id: "slot-1-6", phase: 1, expectedBlockId: "member-constructor", hint: "Memberオブジェクトを初期化するコンストラクタ" },
      { id: "slot-1-7", phase: 1, expectedBlockId: "method-closing", hint: "Memberクラスの終了" },
      { id: "slot-1-8", phase: 1, expectedBlockId: "library-class", hint: "図書館システム全体を管理するLibraryクラス" },
      { id: "slot-1-9", phase: 1, expectedBlockId: "library-constructor", hint: "LibraryオブジェクトのArrayListを初期化" },
      
      // Phase 2 slots  
      { id: "slot-2-1", phase: 2, expectedBlockId: "add-book-method", hint: "重複チェック付きの図書登録メソッド" },
      { id: "slot-2-2", phase: 2, expectedBlockId: "add-book-success", hint: "図書をリストに追加して成功メッセージ" },
      { id: "slot-2-3", phase: 2, expectedBlockId: "method-closing", hint: "addBookメソッドの終了" },
      { id: "slot-2-4", phase: 2, expectedBlockId: "add-member-method", hint: "重複チェック付きの会員登録メソッド" },
      { id: "slot-2-5", phase: 2, expectedBlockId: "add-member-success", hint: "会員をリストに追加して成功メッセージ" },
      { id: "slot-2-6", phase: 2, expectedBlockId: "method-closing", hint: "addMemberメソッドの終了" },
      
      // Phase 3 slots
      { id: "slot-3-1", phase: 3, expectedBlockId: "search-books-method", hint: "タイトルによる図書検索メソッドの開始" },
      { id: "slot-3-2", phase: 3, expectedBlockId: "search-loop", hint: "図書リストから該当する図書を検索するループ" },
      { id: "slot-3-3", phase: 3, expectedBlockId: "search-not-found", hint: "検索結果が見つからない場合の処理" },
      { id: "slot-3-4", phase: 3, expectedBlockId: "method-closing", hint: "searchBooksメソッドの終了" },
      { id: "slot-3-5", phase: 3, expectedBlockId: "find-book-method", hint: "ISBNによる図書検索の補助メソッド" },
      { id: "slot-3-6", phase: 3, expectedBlockId: "find-member-method", hint: "会員IDによる会員検索の補助メソッド" },
      
      // Phase 4 slots
      { id: "slot-4-1", phase: 4, expectedBlockId: "lend-book-method", hint: "図書貸出処理のメインメソッドの開始" },
      { id: "slot-4-2", phase: 4, expectedBlockId: "lend-validation", hint: "図書と会員の存在確認" },
      { id: "slot-4-3", phase: 4, expectedBlockId: "availability-check", hint: "図書の在庫確認と会員の貸出上限チェック" },
      { id: "slot-4-4", phase: 4, expectedBlockId: "lend-process", hint: "実際の貸出処理とメッセージ表示" },
      { id: "slot-4-5", phase: 4, expectedBlockId: "method-closing", hint: "lendBookメソッドの終了" },
      { id: "slot-4-6", phase: 4, expectedBlockId: "book-lend-method", hint: "Bookクラスの貸出状態更新メソッド" },
      { id: "slot-4-7", phase: 4, expectedBlockId: "member-can-borrow", hint: "会員の貸出可能判定メソッド" },
      
      // Phase 5 slots
      { id: "slot-5-1", phase: 5, expectedBlockId: "show-statistics-method", hint: "基本統計情報の表示メソッドの開始" },
      { id: "slot-5-2", phase: 5, expectedBlockId: "book-count-stats", hint: "貸出可能・貸出中図書数の集計" },
      { id: "slot-5-3", phase: 5, expectedBlockId: "stats-display", hint: "集計結果の表示" },
      { id: "slot-5-4", phase: 5, expectedBlockId: "method-closing", hint: "showStatisticsメソッドの終了" },
      { id: "slot-5-5", phase: 5, expectedBlockId: "main-menu", hint: "メインメニューの表示と選択受付のループ" },
      { id: "slot-5-6", phase: 5, expectedBlockId: "menu-switch", hint: "選択された機能への分岐処理" }
    ],
    puzzleMode: true
  }
]