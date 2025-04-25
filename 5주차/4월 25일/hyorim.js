// 배열 자르기
function solution(numbers, num1, num2) {
  var answer = numbers.slice(num1, num2 + 1);
  return answer;
}

// 외계행성의 나이
function solution(age) {
  return [...String(age)]
    .map((a) => String.fromCharCode(97 + Number(a)))
    .join('');
}
// fromCharCode: 숫자를 문자로 바꿔주는 함수(아스키 코드 → 문자)

// 진료 순서 정하기
function solution(emergency) {
  var sorted = [...emergency].sort((a, b) => b - a);
  return emergency.map((e) => sorted.indexOf(e) + 1);
}
// 👉 indexOf: 배열이나 문자열에서 원하는 값이 몇 번째(인덱스)에 있는지 찾아줌

// 순서쌍의 개수
function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}
