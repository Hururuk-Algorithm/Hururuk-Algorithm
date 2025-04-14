function solution(num1, num2) {
  var answer = num1 + num2;
  return answer;
}

function solution(num1, num2) {
  var answer = num1 - num2;
  return answer;
}

function solution(num1, num2) {
  var answer = num1 * num2;
  return answer;
}

function solution(num1, num2) {
  var answer = Math.floor(num1 / num2);
  return answer;
}

function solution(num1, num2) {
  var answer = Math.floor((num1 / num2) * 1000);
  return answer;
}

function solution(num1, num2) {
  const answer = num1 === num2 ? 1 : -1;
  return answer;
}

function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}
function solution(numer1, denom1, numer2, denom2) {
  var newNumber = numer1 * denom2 + numer2 * denom1;
  var newDenom = denom1 * denom2;
  var 최대공약수 = gcd(newNumber, newDenom);
  var answer = [newNumber / 최대공약수, newDenom / 최대공약수];
  return answer;
}
