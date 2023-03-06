# <1주차> HTML, CSS, DOM, Event 기초

## ⭐️ 학습키워드: `#html5 layout` `#HTML,CSS 디버깅` `#html` `#css` `#css layout` `#SPA`

## 🎯 학습 목표

- HTML 태그 활용
- CSS 기반 동작원리 이해
- CSS 레이아웃 구성 원리 이해
- HTML,CSS 지식을 활용한 웹 단일 페이지 개발
- HTML,CSS 기본 디버깅 방법

## ⏰ 학습 계획

- 루카스에 올라온 학습 자료들은 차근차근 살펴보며 학습한다.
  - HTML 구조화 설계
  - CSS로 스타일 입히기(CSS 기초 & CSS Layout)
  - HTML, CSS 실습 영상 시청
  - DOM, Event란?
- 깃허브에 학습 계획을 정리해서 PR을 보낸다.
- 1주차에 만들어야하는 기능들 하나씩 구현해본다.
  - HTML, CSS로 메인 페이지 UI 만들기
  - '월' 이동 기능 구현
  - 새로운 내역 입력 기능 구현
- SPA에 대해서 조사해본다.
- HTML 시맨틱(semantic) 태그에 대해서 공부한다.
- 웹 접근성(Web Accessibility)에 대해서 알아본다.
- 깔끔한 코드 작성을 위해서 ESLint, Prettier에 대해서 알아본다.
- Figma로 만들어진 기획서를 읽어보고 이해해본다.

## 📚 학습 정리

## ✨ 요구사항

### 1주차 주요 개발 feature

<메인화면 UI>

- 헤더
  - 로고
    - 클릭 시 메인페이지로 이동
  - 연월 표시 및 이동창
    - 헤더 중앙에 연월 표시
    - 좌우 화살표 아이콘 클릭시 ‘월’ 이동 기능
  - 내비게이션 아이콘
    - 내역/달력/통계 탭 표시
    - 각 탭 클릭시 화면 이동
- 새로운 내역 입력 창
  - 날짜 인풋 박스
    - 디폴트값 현재 날짜
    - 클릭해서 직접 수정 가능
  - 금액칸
    - 플러스/마이너스 버튼으로 수입/지출 전환 기능
    - 자동으로 세 자리마다 쉼표 입력
  - 내용칸
  - 결제수단 셀렉트 박스
    - 기존 결제수단 삭제 기능
    - 새로운 결제수단 추가 기능
  - 분류 셀렉트 박스
    - 수입 카테고리
    - 지출 카테고리
  - 확인 버튼
    - 입력창에 모든 내용이 입력되었을 때만 활성화
- 수입지출 내역 목록
  - 상단 부분 전체내역
    - 전체내역 건수 표시
    - 해당월의 수입액과 지출액 총합 표시
    - 수입액/지출액 필터링 기능
  - 수입지출 리스트
    - 일별 리스트는 최신순으로 정렬
    - 일별리스트에 각 날짜와 날짜별 수입/지출액 표시
    - 호버시 나타나는 삭제버튼으로 각 내역을 삭제할 수 있는 기능
    - 호버시 삭제 버튼 외 다른 곳 클릭시 내역 수정을 할 수 있는 기능

### HTML

- HTML을 사용할 때 용도에 맞는 태그를 사용해서 작성한다.
- HTML5 Layout 태그를 활용한다.

### CSS

- 모든 요소(element)들을 가지런히 배치하고, 일정한 간격을 유지하도록 한다.
- 배치 시에는 flex 속성(property)을 사용한다.
- CSS 속성은 모두 자유롭게 사용가능하다.

### JavaScript

- UI 조작을 위해서 기본적인 DOM API를 사용해본다.
- 이벤트 등록은 addEventListener 메소드만 사용한다.

## ⚡️ 추가 요구사항

### CSS

- Flexbox에 사용법에 대해서 더 알아보고 정리한다.

### Git, GitHub

- commit 단위를 작게 나눈다.
- commit 로그를 작성하는 좋은 사례를 찾아본다.
- 매일매일 git push를 통해 원격 저장소에 코드를 올린다.
