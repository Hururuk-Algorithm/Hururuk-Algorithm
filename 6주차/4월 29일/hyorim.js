// 점 위치 구하기
function solution(dot) {
  var [x, y] = dot;
  var answer = x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3;
  return answer;
}

// 2차원으로 만들기
function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list.slice(i, i + n));
  }
  return answer;
}

function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}

// 공던지기
function solution(numbers, k) {
  return numbers[((k - 1) * 2) % numbers.length];
}

// 배열 회전시키기
function solution(numbers, direction) {
  if (direction === 'right') {
    return [
      numbers[numbers.length - 1],
      ...numbers.slice(0, numbers.length - 1),
    ];
  } else {
    return [...numbers.slice(1), numbers[0]];
  }
}
