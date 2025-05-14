// 문제 : 프로그래머스 - 전화번호 목록

// 문제 설명

/*
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
*/

// 제약 조건
// n은 0 이상 3000이하인 정수입니다.

// 입출력 예시
// | n | return |
// |----------|--------|
// | 12	 | 28 |
// | 5 | 6 |

function solution(n) {
  let result = n;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    n % i === 0 && (result += i);
  }
  return result;
}
