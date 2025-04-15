//배열 두 배 만들기
function solution(numbers) {
  var answer = numbers.map((num) => num * 2);
  return answer;
}
function solution(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  return result;
}
function solution(numbers) {
  const result = [];
  for (num of numbers) {
    result.push(num * 2);
  }
  return result;
}

function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}

// 나머지 구하기
function solution(num1, num2) {
  var answer = num1 % num2;
  return answer;
}

// 중앙값 구하기
function solution(array) {
  var sorted = array.sort((a, b) => a - b);
  var middle = Math.floor(sorted.length / 2);

  return sorted[middle];
}

// 최빈값 구하기
function solution(array) {
  let count = new Map();
  for (let num of array) count.set(num, (count.get(num) || 0) + 1);
  count = [...count].sort((a, b) => b[1] - a[1]);
  return count.length === 1 || num[0][1] > num[1][1] ? num[0][0] : -1;
}

// 입력 배열: [ 1, 2, 3, 3, 3, 4 ]
// 빈 Map 생성: Map(0) {}

// 현재 처리 중인 숫자: 1
// 처리 전 Map 상태: Map(0) {}
// 숫자 1의 현재 등장 횟수: 0
// 숫자 1의 등장 횟수를 1로 업데이트
// 처리 후 Map 상태: Map(1) { 1 => 1 }

// 현재 처리 중인 숫자: 2
// 처리 전 Map 상태: Map(1) { 1 => 1 }
// 숫자 2의 현재 등장 횟수: 0
// 숫자 2의 등장 횟수를 1로 업데이트
// 처리 후 Map 상태: Map(2) { 1 => 1, 2 => 1 }

// 현재 처리 중인 숫자: 3
// 처리 전 Map 상태: Map(2) { 1 => 1, 2 => 1 }
// 숫자 3의 현재 등장 횟수: 0
// 숫자 3의 등장 횟수를 1로 업데이트
// 처리 후 Map 상태: Map(3) { 1 => 1, 2 => 1, 3 => 1 }

// 현재 처리 중인 숫자: 3
// 처리 전 Map 상태: Map(3) { 1 => 1, 2 => 1, 3 => 1 }
// 숫자 3의 현재 등장 횟수: 1
// 숫자 3의 등장 횟수를 2로 업데이트
// 처리 후 Map 상태: Map(3) { 1 => 1, 2 => 1, 3 => 2 }

// 현재 처리 중인 숫자: 3
// 처리 전 Map 상태: Map(3) { 1 => 1, 2 => 1, 3 => 2 }
// 숫자 3의 현재 등장 횟수: 2
// 숫자 3의 등장 횟수를 3로 업데이트
// 처리 후 Map 상태: Map(3) { 1 => 1, 2 => 1, 3 => 3 }

// 현재 처리 중인 숫자: 4
// 처리 전 Map 상태: Map(3) { 1 => 1, 2 => 1, 3 => 3 }
// 숫자 4의 현재 등장 횟수: 0
// 숫자 4의 등장 횟수를 1로 업데이트
// 처리 후 Map 상태: Map(4) { 1 => 1, 2 => 1, 3 => 3, 4 => 1 }

// 모든 숫자 처리 완료 후 Map 상태: Map(4) { 1 => 1, 2 => 1, 3 => 3, 4 => 1 }
// Map을 배열로 변환: [ [ 1, 1 ], [ 2, 1 ], [ 3, 3 ], [ 4, 1 ] ]
// 등장 횟수 기준 내림차순 정렬: [ [ 3, 3 ], [ 1, 1 ], [ 2, 1 ], [ 4, 1 ] ]

// 최빈값 결정 과정:
// 서로 다른 숫자가 하나뿐인가? false
// 가장 많이 등장한 숫자: 3 등장 횟수: 3
// 두 번째로 많이 등장한 숫자: 1 등장 횟수: 1
// 가장 많이 등장한 숫자의 등장 횟수가 두 번째보다 많은가? true

// 최종 결과 (최빈값): 3

// 짝수는 싫어요
function solution(n) {
  const array = [];
  for (let i = 1; i <= n; i += 2) {
    array.push(i);
  }
  return array;
}
