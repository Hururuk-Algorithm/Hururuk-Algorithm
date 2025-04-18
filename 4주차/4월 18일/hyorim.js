// 뒤집힌 문자열
function solution(my_string) {
  var answer = [...my_string].reverse().join('');
  return answer;
}

// 직각 삼각형
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  const n = Number(input[0]);
  for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
  }
});

// 짝수 홀수 개수
function solution(num_list) {
  var 홀 = 0;
  var 짝 = 0;
  for (num of num_list) {
    if (num % 2 === 0) {
      짝++;
    } else {
      홀++;
    }
  }
  var answer = [짝, 홀];
  return answer;
}

//문자 반복 출력
function solution(my_string, n) {
  let answer = '';
  for (let i = 0; i < my_string.length; i++) {
    answer += my_string[i].repeat(n);
  }
  return answer;
}
