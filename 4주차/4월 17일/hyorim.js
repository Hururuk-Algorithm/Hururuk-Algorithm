//옷가게 할인받기
function solution(price) {
  if (price >= 500000) {
    return Math.floor(price * 0.8);
  }
  if (price >= 300000) {
    return Math.floor(price * 0.9);
  }
  if (price >= 100000) {
    return Math.floor(price * 0.95);
  }
}

// 아이스 아메리카노
function solution(money) {
  const a = Math.floor(money / 5500);
  const b = money % 5500;
  const answer = [a, b];
  return answer;
}

// 나이 출력
function solution(age) {
  var answer = 2022 - age + 1;

  return answer;
}

// 배열 뒤집기
function solution(num_list) {
  var answer = num_list.reverse();
  return answer;
}
