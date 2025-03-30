/*
# 모의고사 문제 04: 수포자의 답안 패턴

## 문제 설명

수포자는 수학을 포기한 사람을 줄인 표현이다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 한다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍는다.

* 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
* 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
* 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 저장된 배열 answers가 주어졌을 때 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 반환하도록 solution() 함수를 작성하시오.

## 제약 조건

* 시험은 최대 10,000 문제로 구성되어 있다.
* 문제의 정답은 1, 2, 3, 4, 5 중 하나이다.
* 가장 높은 점수를 받은 사람이 여럿이라면 반환하는 값을 오름차순으로 정렬하시오.

## 입출력의 예

- answers:  [1, 2, 3, 4, 5]
- return:  [1]

- answers: [1, 3, 2, 4, 2]
- return : [1, 2, 3]


*/
<<<<<<< HEAD
const arr = [1, 2, 3, 4, 5];
function solution(answers) {
  // 객체 형태로 점수와 패턴 저장
  // for문을 돌면서
  const first = {
    id: 1,
    score: 0,
    pattern: [1, 2, 3, 4, 5],
  };
  const second = {
    id: 2,
    score: 0,
    pattern: [2, 1, 2, 3, 2, 4, 2, 5],
  };
  const third = {
    id: 3,
    score: 0,
    pattern: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };
  for (let i = 0; i < arr.length; i++) {
    arr[i] == first.pattern[i] && first.score++;
    arr[i] == second.pattern[i] && second.score++;
    arr[i] == third.pattern[i] && third.score++;
  }
  const maxScore = Math.max(first.score, second.score, third.score);

  const result = [];
  if (first.score === maxScore) result.push(first.id);
  if (second.score === maxScore) result.push(second.id);
  if (third.score === maxScore) result.push(third.id);
  return result;
}

console.log(solution(arr));