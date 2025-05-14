// 가장 많이 등장한 문자, 가장 적게 등장한 문자
function solution(str) {
  const count = {};
  for (let char of str) {
    // 실제값
    count[char] = (count[char] || 0) + 1;
  }

  let maxChar = '';
  let maxCount = 0;

  for (let char in count) {
    // 인덱스
    if (count[char] > maxCount) {
      maxChar = char;
      maxCount = count[char];
    }
  }

  return maxChar;
}

function solution(str) {
  const count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  let minChar = '';
  let minCount = Infinity;

  for (let char in count) {
    if (count[char] < minCount) {
      minChar = char;
      minCount = count[char];
    }
  }

  return minChar;
}

solution('banana'); // → "a"
solution('apple'); // → "p"
solution('hello'); // → "l"

// 배열 변형 (배열에서 가장 많이 등장한 문자)

function solution(arr) {
  const count = {};
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }
  let maxNum = null;
  let maxCount = 0;

  for (let num in count) {
    if (count[num] > maxCount) {
      maxNum = num;
      maxCount = count[num];
    }
  }
  return Number(maxNum);
}
