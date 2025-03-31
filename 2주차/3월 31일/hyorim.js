/**
 * 문제: 배열 합치기
 *
 * 두 개의 2차원 배열이 주어졌을 때, 두 배열을 합치는 함수를 구현하세요.

 * 제약 조건:
 * - 각 배열의 행과 열의 길이는 2 이상 100 이하입니다.
 * - 배열의 요소는 -10 이상 20 이하의 정수입니다.
 * - 결과 배열은 같은 크기의 행과 열을 가집니다.
 *
 * 입출력 예:
 * 입력:
 * arr1 = [[1, 4], [3, 2], [4, 1]]
 * arr2 = [[3, 3], [3, 3]]
 * 출력: [[15, 15], [15, 15], [15, 15]]
 *
 * 입력:
 * arr1 = [[2, 3, 2], [4, 2, 4], [3, 1, 4]]
 * arr2 = [[5, 4, 3], [2, 4, 1], [3, 1, 1]]
 * 출력: [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
 */

function solution(arr1, arr2) {
  const arr1row = arr1.length; // 행의 개수 (가로)
  const arr1col = arr1[0].length; // 열의 개수 (세로)
  const arr2col = arr2[0].length;

  console.log(arr1row, arr1col, arr2col);
  const result = [];

  //결과 행렬 초기화 (arr1row x arr2col)
  for (let i = 0; i < arr1row; i++) {
    result.push(new Array(arr2col).fill(0));
  }

  for (let i = 0; i < arr1row; i++) {
    for (let j = 0; j < arr2col; j++) {
      for (let k = 0; k < arr1col; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return result;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
