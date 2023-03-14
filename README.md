# 🍀CodeSquad_Masters-FE_max

## **📝가계부_Wise_Wallet**

키워드 : `html5 layout` `HTML,CSS 디버깅` `html` `css` `css layout`  
`Flexbox` `시멘틱 태그` `웹접근성` `draft PR` `DOM API` `Event Listener`  

### **✅ 체크 리스트**

- [ ] 1주차
  - [ ] 메인 페이지 전체 UI
  - [ ] '월' 이동 기능
  - [ ] 새로운 내역 입력
- [ ] 2주차
  - [ ] 메인 영역
    - [ ] 항목 수정 / 삭제
    - [ ] 수입/지출 필터링에 따른 목록 랜더링
    - [ ] 결제수단 추가/삭제 (선택)
  - [ ] 캘린더 영역

### **➡️ Plan**

- 루카스 자료 -> 공식문서 -> 구글링 -> 외부 영상 순으로 참고한다
- git - commit, PR의 단위에 대해 고민해본다
- 바닐라로 작업한다
- 여유가 있을 시

  1. 리액트를 학습한다
  2. Figma로 계획을 구조화 및 시각화 한다

### **➡️ Details**

1. HTML 시멘틱 태그로 박스를 나눈다
2. 간단히 CSS를 작업한다 (대강의 위치와 임시 경계선 표시)
3. JS 작업
4. 중복 및 반복되는 부분을 통합 및 제거한다
5. 세부적인 CSS 작업을 진행한다 (정확한 위치와 여러 속성들 추가)

### **📰 구현 사항 정리**

#### 📰 Week1

- git에 대해 학습했다 -> 동료들의 도움을 많이 받았다

```text
* 나만의 브랜치 네이밍 규칙
  PR 날리는 브랜치 : week1_pr1, week1_pr2...
  작업 브랜치 : week1_pr1_feat1, week1_pr1_feat2, week1_pr1_feat3...

* PR흐름
  pr브랜치 생성 -> draft PR -> 
  작업브랜치 생성, 작업, 커밋 -> pr브랜치로 switch ->
  merge 작업 브랜치 -> push origin pr브랜치 -> 작업브랜치 삭제 ->
  pr브랜치 merge 확인 -> head 브랜치 변경 -> pr브랜치 삭제->
  upstream 저장소에서 내 브랜치 fetch, rebase -> origin에 push
```

- HTML

> 큰 단위부터 작은 단위까지 박스로 나눴다  
> 의도와 목적에 맞는 태그를 최대한 사용했다  

- CSS

> 브라우저 내장 css를 reset시켰다  
> css 파일들을 나누어 관리했다  
> 메인 페이지에서 input bar를 제외한 부분의 css를 완성시켰다

- JS

> svg 이미지를 코드로 써서 innerHTML을 활용해 추가하였다

#### 📰 Week2

### **🔥 새롭게 배운 점 - 키워드 및 요약**

#### 🔥 Week1

- git

``` text
* 겁 먹지 않고 해보기 -> 이전 단계로 돌릴 방법은 많다
* branch merge 과정
```

- html

```text
* symentic tag
  - 의미를 담은 태그
  - 사람에게도 중요하지만 컴퓨터에게도 중요하다 -> 검색 엔진 최적화
* input type date
* select < option
* table < thead, tbody < tr < td
* svg - vector image
* list < legend < label, li

* br, input과 같이 혼자 별도의 의미를 가지는 태그는 닫아 주는게 좋음
```

- css

```text
* position
  - static(default) -> 순서대로 위치함
  - absolute
    1. 기준점에 따라 위치함
    2. 상위 엘리먼트를 따라 올라가며 static이 아닌 position이 기준점이 됨
    3. 보통 relative를 기준점으로 잡음
  - relative -> 원래 자신이 위치해야 할 곳을 기준으로 이동함
  - fixed -> viewport를 기준으로 고정되어 동작함

* float
  - 원래 flow에서 벗어나 둥둥 떠다니게 할 수 있다
  - 다음 block 엘리먼트가 float된 엘리먼트를 인식하지 못하고 중첩되어 배치된다
  - 두 엘리먼트에 float left를 50% 준다면 두 요소가 좌우로 배치된다

* flex 
  - 최근에 많이 쓰이는 기술
  - 컨테이너속의 아이템의 위치, 크기 및 배열 순서 등을 지정할 수 있다
```

- namse class

```text
* namse's 구현 과정
  1. 가장 바깥의 것을 만든다
  2. 가장 쉬워보이는 것을 만들지만 완벽하게 구현하지는 않는다
  3. 그 다음 레벨의 것을 만든다
  4. 반복 하면서 구현한다
-> 쉬운 것을 먼저 해서 업무의 흐름을 파악한다 => divide and conquer

* 나무위키 학습법
  - 어떤 개념을 찾고 거기에 있는 모르는 내용까지 학습

* 적정기술
* 중간언어
* export 할때 default 비추
```

#### 🔥 Week2

- DOM 조작

```text
* nodeType
  - 1 -> p나 div같은 element 노드
  - 3 -> element나 속성의 text (공백도 포함함)
```

- event

```text
* event bubbling
```

- prototype

```text
```

### **🤔 생각해볼 거리**

#### 🤔 Week1

- 체크리스트(작업 단위)를 세분화하여 쪼개본다
- html

``` text
* 시멘틱 태그와 일반 태그를 어떻게 구분하여 사용할지 생각해본다 
  -> 시멘틱 태그의 의미에 대해 고민한다

* class와 id명은 어떻게 지을지 고민한다
  -> BEM방식에 대해 공부해본다
```

#### 🤔 Week2
