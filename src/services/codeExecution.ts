interface CodeExecutionResult {
  output: string
  error?: string
  status: 'success' | 'error' | 'timeout'
  executionTime?: number
}

interface Judge0Response {
  stdout: string
  stderr: string
  compile_output: string
  status: {
    id: number
    description: string
  }
  time: string
  memory: number
}

// Judge0 API の代替として、ローカルシミュレーションを使用
export async function executeJavaCode(code: string): Promise<CodeExecutionResult> {
  // 実際の実装では Judge0 API を使用
  // const JUDGE0_API_URL = 'https://judge0-ce.p.rapidapi.com'
  
  try {
    // コード実行のシミュレーション
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))
    
    // 基本的なJavaコードの解析とシミュレーション
    return simulateJavaExecution(code)
    
  } catch (error) {
    return {
      output: '',
      error: 'コードの実行中にエラーが発生しました',
      status: 'error'
    }
  }
}

function simulateJavaExecution(code: string): CodeExecutionResult {
  const startTime = Date.now()
  
  try {
    // 基本的な構文チェック
    if (!code.includes('public class')) {
      throw new Error('コンパイルエラー: public classが見つかりません')
    }
    
    if (!code.includes('public static void main')) {
      throw new Error('コンパイルエラー: mainメソッドが見つかりません')
    }
    
    // セミコロンチェック
    const statements = code.match(/System\.out\.println\([^)]*\)[^;]/g)
    if (statements && statements.length > 0) {
      throw new Error('コンパイルエラー: セミコロン(;)が不足しています')
    }
    
    // System.out.println の出力をシミュレート
    const outputs: string[] = []
    const printlnMatches = code.match(/System\.out\.println\(([^)]+)\)/g)
    
    if (printlnMatches) {
      printlnMatches.forEach(match => {
        const contentMatch = match.match(/System\.out\.println\((.+)\)/)
        if (contentMatch) {
          const content = contentMatch[1].trim()
          
          // 文字列リテラルの場合
          if (content.startsWith('"') && content.endsWith('"')) {
            outputs.push(content.slice(1, -1))
          }
          // 変数の場合（簡単なシミュレーション）
          else if (content.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/)) {
            outputs.push(simulateVariable(code, content))
          }
          // 文字列連結の場合
          else if (content.includes('+')) {
            outputs.push(simulateStringConcatenation(code, content))
          }
          else {
            outputs.push(content)
          }
        }
      })
    }
    
    const executionTime = Date.now() - startTime
    
    return {
      output: outputs.join('\n'),
      status: 'success',
      executionTime
    }
    
  } catch (error) {
    return {
      output: '',
      error: error instanceof Error ? error.message : 'エラーが発生しました',
      status: 'error',
      executionTime: Date.now() - startTime
    }
  }
}

function simulateVariable(code: string, varName: string): string {
  // 変数宣言を探す
  const varDeclarations = [
    { regex: new RegExp(`int\\s+${varName}\\s*=\\s*(\\d+)`), type: 'int' },
    { regex: new RegExp(`String\\s+${varName}\\s*=\\s*"([^"]*)"`), type: 'String' },
    { regex: new RegExp(`boolean\\s+${varName}\\s*=\\s*(true|false)`), type: 'boolean' },
    { regex: new RegExp(`double\\s+${varName}\\s*=\\s*([\\d.]+)`), type: 'double' }
  ]
  
  for (const decl of varDeclarations) {
    const match = code.match(decl.regex)
    if (match) {
      return match[1]
    }
  }
  
  return `${varName} (未定義変数)`
}

function simulateStringConcatenation(code: string, expression: string): string {
  // 簡単な文字列連結のシミュレーション
  let result = ''
  const parts = expression.split('+').map(part => part.trim())
  
  for (const part of parts) {
    if (part.startsWith('"') && part.endsWith('"')) {
      result += part.slice(1, -1)
    } else if (part.match(/^\d+$/)) {
      result += part
    } else if (part.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/)) {
      result += simulateVariable(code, part)
    } else {
      result += part
    }
  }
  
  return result
}

// テストケースの検証
export function validateTestCases(code: string, testCases: Array<{input: string, expectedOutput: string, description: string}>): Array<{passed: boolean, expected: string, actual: string, description: string}> {
  return testCases.map(testCase => {
    try {
      const result = simulateJavaExecution(code)
      const passed = result.output.trim() === testCase.expectedOutput.trim()
      
      return {
        passed,
        expected: testCase.expectedOutput,
        actual: result.output || result.error || '',
        description: testCase.description
      }
    } catch (error) {
      return {
        passed: false,
        expected: testCase.expectedOutput,
        actual: error instanceof Error ? error.message : 'エラーが発生しました',
        description: testCase.description
      }
    }
  })
}