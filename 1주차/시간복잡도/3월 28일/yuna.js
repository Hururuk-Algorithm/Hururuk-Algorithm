/*문제: 두 수의 합 찾기

설명:
정수 배열 numbers가 주어집니다. 
numbers에서 서로 다른 인덱스에 있는 2개의 수를 뽑아 더해 
만들 수 있는 모든 수를 배열에 오름차순으로 담아 반환하는 함수를 구현하세요.
같은 값이 여러 번 나오는 경우 한 번만 포함시켜야 합니다.

제약 조건:
- numbers의 길이는 2 이상 100 이하입니다.
- numbers의 모든 수는 0 이상 100 이하입니다.
- 결과 배열은 오름차순으로 정렬되어야 합니다.

입출력 예시:
- 입력: [2, 1, 3, 4, 1]
  출력: [2, 3, 4, 5, 6, 7]

- 입력: [5, 0, 2, 7]
  출력: [2, 5, 7, 9, 12]

- 입력: [1, 1, 1, 1]
  출력: [2]
*/

// 함수를 구현해 주세요
const arr = [2, 1, 3, 4, 1];
function solution(numbers) {
  const newArr = [];
  for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
      newArr.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(newArr)].sort((a, b) => a - b);
}
console.log(solution(arr));

// 배열에서 두 수를 선택하는 방법

// - 이중 반복문 사용하기(이중 for문)
// - 조합 알고리즘

// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/68644
