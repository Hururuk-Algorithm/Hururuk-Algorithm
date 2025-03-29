/*
# 모의고사 문제 04: 수포자의 답안 패턴

## 문제 설명

수포자는 수학을 포기한 사람을 울긋불긋한 표현이다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 한다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍는다.

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

function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }

  const maxScore = Math.max(...scores);

  const highestScores = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      highestScores.push(i + 1);
    }
  }
  return highestScores;
}

// 첫 번째 테스트 케이스 실행
const result1 = solution([1, 2, 3, 4, 5]);
console.log('첫 번째 테스트 케이스 결과 확인:', result1);

// 두 번째 테스트 케이스 실행
const result2 = solution([1, 3, 2, 4, 2]);
console.log('두 번째 테스트 케이스 결과 확인:', result2);

/*
function solution(answers) {
  // 수포자들의 패턴
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];

  // 각 수포자별로 맞힌 문제 수 계산
  const scores = patterns.map((pattern, index) => {
    return answers.filter((answer, i) => answer === pattern[i % pattern.length]).length;
  });

  // 최대 점수 구하기
  const maxScore = Math.max(...scores);
  
  // 최대 점수를 받은 수포자 찾기
  return scores.map((score, index) => score === maxScore ? index + 1 : null)
               .filter(index => index !== null);
} */
