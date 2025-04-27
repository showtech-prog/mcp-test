/**
 * FizzBuzz問題を解く関数
 * @param {number} limit - 上限値（デフォルト: 100）
 * @returns {Array} - FizzBuzz結果の配列
 */
function fizzBuzz(limit = 100) {
  const result = [];
  
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  
  return result;
}

// テストケース
function runTests() {
  // テスト1: limit=15でのテスト
  const test1 = fizzBuzz(15);
  console.log("Test 1 - FizzBuzz(15):", test1);
  console.log("Contains Fizz:", test1.includes("Fizz"));
  console.log("Contains Buzz:", test1.includes("Buzz"));
  console.log("Contains FizzBuzz:", test1.includes("FizzBuzz"));
  
  // テスト2: 通常の数字の出力テスト
  const test2 = fizzBuzz(5);
  console.log("\nTest 2 - FizzBuzz(5):", test2);
  
  // テスト3: デフォルト値（100）でのテスト
  const test3 = fizzBuzz();
  console.log("\nTest 3 - Default limit (100):");
  console.log("Array length:", test3.length);
  console.log("Last few items:", test3.slice(-5));
}

// テストを実行
runTests();