// 주사위 상자 채우기
function solution(box, n) {
  const widthCount = Math.floor(box[0] / n);
  const heightCount = Math.floor(box[1] / n);
  const depthCount = Math.floor(box[2] / n);
  var answer = widthCount * heightCount * depthCount;
  return answer;
}

// 합성수 찾기
function solution(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let divisor = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisor++;
      }
    }

    if (divisor >= 3) {
      count++;
    }
  }

  return count;
}

// 최댓값 만들기
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  const len = numbers.length;
  return Math.max(numbers[0] * numbers[1], numbers[len - 1] * numbers[len - 2]);
}

// 팩토리얼
function solution(n) {
  let i = 1;
  let fact = 1;

  while (fact * (i + 1) <= n) {
    i++;
    fact *= i;
  }

  return i;
}
