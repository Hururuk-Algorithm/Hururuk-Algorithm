// 특정 문자 제거하기
function solution(my_string, letter) {
  var answer = my_string.replace(new RegExp(letter, 'g'), '');
  return answer;
}
function solution(my_string, letter) {
  return my_string.replaceAll(letter, '');
}

// 각도기
function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

// 양꼬치
function solution(n, k) {
  var 분 = Math.floor(n / 10);
  var 양꼬치 = 12000 * n;
  var 음료수 = 2000 * k - 분 * 2000;
  var answer = 양꼬치 + 음료수;

  return answer;
}

// 짝수의 합
function solution(n) {
  var answer = 0;
  for (let i = 2; i <= n; i += 2) {
    answer += i;
  }
  return answer;
}
