// レッスン2の検証テスト
const code = `public class SelfIntroduction {
    public static void main(String[] args) {
        System.out.println("こんにちは");
        System.out.println("私の名前は太郎です");
        System.out.println("よろしくお願いします");
    }
}`;

// シミュレーション関数（codeExecution.tsから抜粋）
function simulateJavaExecution(code) {
  const outputs = [];
  const printlnMatches = code.match(/System\.out\.println\(([^)]+)\)/g);
  
  console.log('Found matches:', printlnMatches);
  
  if (printlnMatches) {
    printlnMatches.forEach(match => {
      console.log('Processing match:', match);
      const contentMatch = match.match(/System\.out\.println\((.+)\)/);
      if (contentMatch) {
        const content = contentMatch[1].trim();
        console.log('Content:', content);
        
        // 文字列リテラルの場合
        if (content.startsWith('"') && content.endsWith('"')) {
          const output = content.slice(1, -1);
          console.log('Adding output:', output);
          outputs.push(output);
        }
      }
    });
  }
  
  const result = outputs.join('\n');
  console.log('Final result:', JSON.stringify(result));
  return result;
}

const expectedOutput = "こんにちは\n私の名前は太郎です\nよろしくお願いします";
const actualOutput = simulateJavaExecution(code);

console.log('Expected:', JSON.stringify(expectedOutput));
console.log('Actual:', JSON.stringify(actualOutput));
console.log('Match:', actualOutput.trim() === expectedOutput.trim());