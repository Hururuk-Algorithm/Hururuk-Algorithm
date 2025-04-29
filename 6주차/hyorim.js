//
function solution(hp) {
  var 장군 = Math.floor(hp / 5);
  hp %= 5;
  var 병정 = Math.floor(hp / 3);
  hp %= 3;

  const worker = hp;

  return 장군 + 병정 + worker;
}

// 모스부호
function solution(letter) {
  const morse = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
  };

  var answer = letter
    .split(' ')
    .map((code) => morse[code])
    .join('');
  return answer;
}

// 가위바위보
function solution(rsp) {
  const win = { 2: '0', 0: '5', 5: '2' };
  var answer = rsp
    .split('')
    .map((s) => win[s])
    .join('');
  return answer;
}
