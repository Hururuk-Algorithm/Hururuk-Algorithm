<div align="center">
  
<<<<<<< HEAD
# 🌊 HuruRuk Algorithm 🌊

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)

### 자바스크립트 코딩테스트 스터디

#### 2025년 3월 24일 ~ 진행 중

##### _유르르(홍유나) × 효르르(한효림) = 후루룩!_
=======
# 🌊 Hururuk Algorithm 🌊

<img src="https://github.com/user-attachments/assets/a5b54724-969a-4d4e-9b54-d7736bd2eaab" width="20px;" alt="효림"> <img src="https://github.com/user-attachments/assets/f26ce8fa-8382-4ccd-a2cd-0658fda0003d" width="20px;" alt="유나">

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Algorithm](https://img.shields.io/badge/Algorithm-FF6B6B?style=flat-square&logo=theAlgorithms&logoColor=white)](https://github.com/)

### 자바스크립트 코딩테스트 스터디
#### 2025년 3월 24일 ~ 진행 중
##### *유르르(홍유나) × 효르르(한효림) = 후루룩!*
>>>>>>> dccf4237fce8948322022820d0e18ee5f144a8bf

</div>

## 📚 소개

**HuruRuk Algorithm**은 자바스크립트를 활용한 코딩테스트 준비 스터디입니다. 알고리즘의 기본 개념부터 복잡한 문제 해결 전략까지, 함께 배우고 성장하는 공간입니다.

<<<<<<< HEAD
> _"후루룩 마시듯 알고리즘도 빠르게 흡수하자!"_

## 🎯 목표

- 자바스크립트/타입스크립트를 활용한 알고리즘 문제 해결 능력 향상
- 코딩테스트 대비 실전 연습
- 효율적인 코드 작성 및 최적화 기법 학습
- 서로의 코드를 리뷰하며 다양한 접근 방식 이해

## 📖 학습 교재

<img src="https://image.aladin.co.kr/product/34193/50/letslook/K102931316_fl.jpg?RS=629&" alt="코딩 테스트 합격자 되기 자바스크립트 편" align="right" width="120"/>

**「코딩 테스트 합격자 되기: 자바스크립트 편」**

이 책을 바탕으로 주요 알고리즘 개념과 문제 해결 기법을 학습합니다. 책의 예제를 직접 구현하고, 추가 문제를 통해 응용력을 키웁니다.

<br clear="right"/>

## 🗓️ 스터디 일정

| 주차  |      주제       | 내용                            |
| :---: | :-------------: | :------------------------------ |
| 1주차 |  자료구조 기초  | 배열, 링크드 리스트, 스택, 큐   |
| 2주차 |  정렬 알고리즘  | 버블, 선택, 삽입, 퀵, 병합 정렬 |
| 3주차 |  탐색 알고리즘  | 이진 탐색, DFS, BFS             |
| 4주차 | 그리디 알고리즘 | 그리디 전략과 문제 풀이         |
| 5주차 | 동적 프로그래밍 | DP 개념과 접근 방법             |
|  ...  |       ...       | ...                             |

## 👥 참여 멤버

- [한효림](https://github.com/hyorimhan)
- [홍유나](https://github.com/yuna-hh)

## 📂 레포지토리 구조

```
hururu-algorithm/
├── README.md                 # 스터디 소개
├── week1/                    # 1주차 학습 자료
│   ├── README.md             # 1주차 개념 정리
│   ├── problems/             # 1주차 문제
│   │   ├── problem1.md       # 문제 설명
│   │   ├── solution1.js      # 문제 해답
│   │   └── ...
│   └── notes/                # 추가 학습 노트
├── week2/                    # 2주차 학습 자료
│   └── ...
├── resources/                # 공통 참고 자료
│   └── ...
└── playground/               # 자유 코딩 공간
    └── ...
```

## 🛠️ 사용 기술

- **주 언어**: JavaScript (ES6+)
- **보조 언어**: TypeScript
- **개발 환경**: Node.js
- **협업 도구**: GitHub, Discord

## 💻 코드 예시

```javascript
// 퀵 정렬 알고리즘 구현 예시
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const middle = [];
  const right = [];

  for (const el of arr) {
    if (el < pivot) left.push(el);
    else if (el > pivot) right.push(el);
    else middle.push(el);
  }

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// 사용 예시
const unsortedArray = [7, 2, 9, 1, 5, 4, 8, 3, 6];
console.log(quickSort(unsortedArray)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 🔗 유용한 링크

- [JavaScript MDN 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript)
- [백준 온라인 저지](https://www.acmicpc.net/)
- [프로그래머스](https://programmers.co.kr/)
- [LeetCode](https://leetcode.com/)

## 📊 진행 상황

진행 중인 스터디의 현황과 성과를 지속적으로 업데이트할 예정입니다.

## 📝 참여 방법

관심 있는 분들은 이슈를 통해 참여 의사를 밝혀주세요!
=======
> *"후루룩 마시듯 알고리즘도 빠르게 흡수하자!"* 🍜

## 🎯 목표

<table>
  <tr>
    <td>
      <ul>
        <li>자바스크립트/타입스크립트를 활용한 알고리즘 문제 해결 능력 향상</li>
        <li>코딩테스트 대비 실전 연습</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>효율적인 코드 작성 및 최적화 기법 학습</li>
        <li>서로의 코드를 리뷰하며 다양한 접근 방식 이해</li>
      </ul>
    </td>
  </tr>
</table>

## 📖 학습 교재

<div align="center">
  <img src="https://image.aladin.co.kr/product/34193/50/letslook/K102931316_fl.jpg?RS=629&" alt="코딩 테스트 합격자 되기 자바스크립트 편" width="200"/>
  
  **「코딩 테스트 합격자 되기: 자바스크립트 편」**
  
  *이 책을 바탕으로 주요 알고리즘 개념과 문제 해결 기법을 학습합니다.  
  책의 예제를 직접 구현하고, 추가 문제를 통해 응용력을 키웁니다.*
</div>

## 🗓️ 스터디 일정

<div align="center">
  
| 주차 | 주제 | 내용 | 상태 |
|:---:|:---:|:---|:---:|
| 1주차 | 자료구조 기초 | 배열, 링크드 리스트, 스택, 큐 | 🔄 |
| 2주차 | 정렬 알고리즘 | 버블, 선택, 삽입, 퀵, 병합 정렬 | 📅 |
| 3주차 | 탐색 알고리즘 | 이진 탐색, DFS, BFS | 📅 |
| 4주차 | 그리디 알고리즘 | 그리디 전략과 문제 풀이 | 📅 |
| 5주차 | 동적 프로그래밍 | DP 개념과 접근 방법 | 📅 |
| ... | ... | ... | 📅 |

</div>

## 👥 참여 멤버

<div align="center">
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/hyorimhan">
        <img src="https://github.com/user-attachments/assets/a5b54724-969a-4d4e-9b54-d7736bd2eaab" width="100px;" alt="한효림 프로필 이미지" style="border-radius: 50%;"/>
        <br />
        <sub><b>한효림</b></sub>
      </a>
      <br />
      <sub><i>효르르</i> 🌊</sub>
    </td>
    <td align="center">
      <a href="https://github.com/yuna-hh">
        <img src="https://github.com/user-attachments/assets/f26ce8fa-8382-4ccd-a2cd-0658fda0003d" width="100px;" alt="홍유나 프로필 이미지" style="border-radius: 50%;"/>
        <br />
        <sub><b>홍유나</b></sub>
      </a>
      <br />
      <sub><i>유르르</i> 🌊</sub>
    </td>
  </tr>
</table>
</div>

## 🔗 유용한 링크

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript" target="_blank">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="40" height="40"/>
          <br>JavaScript MDN
        </a>
      </td>
      <td align="center">
        <a href="https://www.acmicpc.net/" target="_blank">
          <img src="https://d2gd6pc034wcta.cloudfront.net/images/logo@2x.png" height="40"/>
          <br>백준
        </a>
      </td>
      <td align="center">
        <a href="https://programmers.co.kr/" target="_blank">
          <br>프로그래머스
        </a>
      </td>
      <td align="center">
        <a href="https://leetcode.com/" target="_blank">
          <img src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" height="40"/>
          <br>LeetCode
        </a>
      </td>
    </tr>
  </table>
</div>

## 📊 진행 상황

<div align="center">
  <details>
    <summary><b>진행 상황 확인하기</b></summary>
    <p>진행 중인 스터디의 현황과 성과를 지속적으로 업데이트할 예정입니다.</p>
    <ul align="left">
      <li>✅ 스터디 그룹 결성 완료</li>
      <li>✅ 학습 계획 수립 완료</li>
      <li>🔄 1주차 스터디 진행 중</li>
    </ul>
  </details>
</div>
>>>>>>> dccf4237fce8948322022820d0e18ee5f144a8bf

---

<div align="center">
  
<<<<<<< HEAD
### 함께 성장하는 즐거움, HuruRuk Algorithm과 함께하세요! 🚀

=======
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:87CEEB,100:4682B4&height=100&section=footer&text=Happy%20Coding!&fontSize=16&fontColor=FFFFFF" width="100%"/>
  
  <sub>Copyright © 2025 HuruRuk Algorithm. All rights reserved.</sub>
  
>>>>>>> dccf4237fce8948322022820d0e18ee5f144a8bf
</div>
