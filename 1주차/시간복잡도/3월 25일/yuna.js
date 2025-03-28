/**
정렬 알고리즘 문제
문제 설명:
주어진 정수 배열을 오름차순으로 정렬하는 함수를 구현하세요.
제약 조건:
배열의 길이는 2 이상 10^5 이하입니다.
배열의 각 원소는 -100,000부터 100,000 사이의 정수입니다.
*/

function solution(numbers) {
  return numbers.sort((a, b) => a - b);
}

console.log(solution(numbers));

// 예시:
// 입력: [1, -5, 2, 4, 3]
// 출력: [-5, 1, 2, 3, 4]
//
// 입력: [2, 1, 1, 3, 2, 5, 4]
// 출력: [1, 1, 2, 2, 3, 4, 5]
//
// 입력: [6, 1, 7]
// 출력: [1, 6, 7]

// 📌 정리
// sort에서 a-b는 오름차순 / b-a는 내림차순으로 정렬이 된다
// toSorted
// sort 메서드는 원본 배열의 순서를 변경하기 때문에, 원본 배열을 그대로 유지하고 싶다면 toSorted 메서드를 사용하면 된다.
