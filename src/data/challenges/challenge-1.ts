import { PracticalChallenge } from '../practicalChallenges';

export const challenge1: PracticalChallenge = {
  id: 1,
  title: "家計簿アプリ",
  client: "一般家庭の田中さん",
  deadline: "1週間以内",
  difficulty: 'beginner',
  estimatedTime: "2-3時間",
  description: "毎月の収支を管理したいが、手書きの家計簿では計算ミスが多く困っています。簡単に収入・支出を入力できて、月末に合計が自動計算される家計簿アプリを作ってください。",
  requirements: [
    "収入と支出を入力できる機能",
    "各項目にカテゴリを設定できる機能",
    "月別の収支合計を表示する機能",
    "残高を自動計算する機能"
  ],
  constraints: [
    "Java言語で実装すること",
    "コンソールベースのアプリケーションとする",
    "入力データの妥当性チェックを含める"
  ],
  learningPoints: [
    "基本的な入出力処理",
    "配列やArrayListの使い方",
    "条件分岐とループ処理",
    "簡単なデータ管理"
  ],
  hints: [
    {
      level: 1,
      title: "基本構造のヒント",
      content: "家計簿の項目を表現するクラスを作ることから始めましょう。収入か支出かを区別するフィールドも必要です。",
      codeExample: "class BudgetItem {\n    String category;\n    int amount;\n    boolean isIncome;\n}"
    }
  ],
  phases: [
    {
      id: 1,
      title: "基本データ構造の作成",
      description: "家計簿項目を管理するクラスと基本機能を作成",
      objectives: [
        "BudgetItemクラスの作成",
        "収入・支出の入力機能",
        "データを保存するArrayListの設定"
      ],
      completed: false
    }
  ],
  starterCode: `import java.util.*;

public class HouseholdBudget {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<BudgetItem> items = new ArrayList<>();
        
        System.out.println("=== 家計簿アプリ ===");
        // ここに機能を実装
        
        scanner.close();
    }
}`,
  solutionCode: `// 解決コードは省略（実際の実装では含む）`,
  testCases: [],
  codeBlocks: [],
  codeSlots: [],
  puzzleMode: false
};