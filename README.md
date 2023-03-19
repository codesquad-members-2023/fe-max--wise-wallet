# 🍀 CodeSquad_Masters-FE_max

## **📝 가계부_Wise_Wallet**

키워드 : `html5 layout` `HTML,CSS 디버깅` `html` `css` `css layout`  
`Flexbox` `시멘틱 태그` `웹접근성` `draft PR` `DOM API` `Event Listener`  

### **✅ 체크 리스트**

- [ ] 1주차
  - [ ] 메인 페이지 전체 UI
  - [X] '월' 이동 기능
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

- git stash
```text
* 아직 마무리하지 않은 작업을 스택에 잠시 저장할 수 있도록 하는 명령어
  - 아직 완료하지 않은 일을 commit하지 않고 나중에 다시 꺼내와 마무리 할 수 있다
  - 수정한 파일들만 스택에 저장한다

* 순서 => 저장 - (목록 확인) - 적용 - 제거 - (되돌리기)
  1. git stash / git stash save 
    => stack에 새로운 stash를 만들어 임시로 저장한다
  2. git stash list 
    => stash를 여러 번 했다면 이 명령어를 통해 stash목록을 확인할 수 있다
  3. git stash apply / git stash apply [stash 이름]
    => 현재 branch에 stash를 적용한다
      3-1. git stash apply --index 
        => staged 상태까지 복원한다
      3-2. git stash pop 
        => stash를 적용과 동시에 제거한다
  4. git stash drop / git stash drop [stash 이름] 
    => stack에 남아있는 stash 제거한다
  5. git stash show -p ([stash 이름]) | git apply -R
    => 실수로 적용한 stash를 되돌린다
```

- 경로

```text
1. 절대경로
  - 어떠한 웹페이지나 피일이 가지고 있는 고유한 경로

2. 상대경로
  - 현재 위치를 기준으로 한 상대적 위치
  - / : 루트
  - ./ : 현재 위치
  - ../ : 현재 위치의 상단 폴더
```

- DOM 조작

```text
* nodeType
  - 1 -> p나 div같은 element 노드
  - 3 -> element나 속성의 text (공백도 포함함)

* innerHTML / innerTEext / textContent
  - innerHTML : 
    1. text/html으로 파싱한 결과를 값으로 가져온다
    2. 성능이 느리고 보안상 취약점이 있다 (XSS 공격)
    3. 되도록이면 쓰지 않는 것이 좋다
  - innerText : 
    1. text/plain으로 파싱한 결과를 값으로 가져온다
    2. 해당 요소와 자손의 렌더링 된 텍스트 콘텐츠를 나타낸다
    3. textContent보다 성능이 좋지 않다
  - textContent : 
    1. 식별자 내부 전체 콘텐츠를 text/plain으로 파싱한 결과(원시 텍스트)를 값으로 가져온다
    2. 원시 텍스트를 파싱하기 때문에 성능이 가장 좋다
    3. 보안에서 큰 강점을 보인다

* insertAdjacentHTML / createElement / createTextNode / appendChild
  - html의 요소나 텍스트, 자손을 추가 하고 싶을 떄는 innerHTML을 사용하기 보다는 위 4가지를 사용하는 것이 좋다
```

- event

```text
* event bubbling
  - 한 요소에 이벤트가 발생하면 부모를 올라가며 각각의 요소에 할당된 핸들러가 동작한다
  - createElement 등으로 생성한 요소에 이벤트를 넣을 때 사용하면 좋다

* event observer pattern
  - input 창을 구현할 때 활용해본다
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

- 자료형

```
* 연 / 월 이동 기능을 구현하다가 오류가 발생했다
  - 숫자로 이루어진 string을 -= 1 을 했을 때 는 자바스크립트 엔진이 number로 판단함
  - 반대로 += 1 을 했을 때 는 string으로 판단함
  => 타입 스크립트의 자료형 선언의 필요성에 대해 한번 더 생각해본다
```
