// 문제 11: 짝지어 제거하기

// 문제 설명

/*초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.*/

// 제약 조건
// prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
// prices의 길이는 2 이상 100,000 이하입니다.

// 입출력 예시
// | prices | return |
// |----------|--------|
// | [1, 2, 3, 2, 3] | [4, 3, 1, 1, 0] |

function solution(prices) {
  let result = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        result.push(j - i);
        break;
      }
    }
    if (result.length === i) {
      result.push(prices.length - 1 - i);
    }
  }
  return result;
}

// 모범 답안

function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0); // ① 가격이 떨어지지 않은 기간을 저장할 배열

  // 스택(stack)을 사용해 이전 가격과 현재 가격을 비교
  const stack = [0]; // ② 스택 초기화

  for (let i = 1; i < n; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      // ③ 가격이 떨어졌으므로 이전 가격의 기간을 계산
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  // ④ 스택에 남아 있는 가격들은 가격이 떨어지지 않은 경우
  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = n - 1 - j;
  }

  return answer;
}
