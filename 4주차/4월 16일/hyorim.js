// 피자 나눠 먹기(1)
function solution(n) {
  const answer = Math.ceil(n / 7);
  return answer;
}
// 피자 한 판 7조각, n명이 나눠먹으려면 최소 몇 판?
// 사람 수 / 7

// 피자 나눠 먹기(2)
function solution(n) {
  let x = 1;
  while ((x * 6) % n !== 0) {
    x++;
  }
  return x;
}
// 피자 한 판 6조각, n명이 정확하게 피자를 나눠먹을 때 최소 몇 판?
// x * 6 조각을 n명에게 나눠줬을 때 나머지가 0이 되는 x

// 피자 나눠 먹기(3)
function solution(slice, n) {
  let answer = Math.ceil(n / slice);
  return answer;
}
// 피자 조각 수가 매번 다를 때 n명이 나눠먹을 때 최소 몇 판?
// 사람 수 / 피자 한 판 조각의 수

// 배열의 평균값
function solution(numbers) {
  const a = numbers.reduce((acc, curr) => acc + curr, 0);
  const answer = a / numbers.length;

  return answer;
}
