//  # 문제 09: 10진수를 2진수를 변환하기

// ## 문제 설명
// 10진수를 입력받아 2진수로 변환해 반환하는 solution()함수를 구현하세요.

// ## 제약 조건
// * decimal은 1이상 10억 미만의 자연수

// ## 입출력 예시

// | decimal | 반환값 |
// |---|---|
// | 10 | 1010 |
// | 27 | 11011 |
// | 12345 | 11000000111001 |

const sample = 10;

function solution(decimal) {
  let number = decimal;
  let rest = "";
  while (number > 0) {
    rest = (number % 2) + rest;
    number = Math.floor(number / 2);
  }
  return Number(rest);
}
console.log(solution(sample));
