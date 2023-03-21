# 가계부 미션

## ⭐️ 1주차 학습키워드: `#html5 layout` `#HTML,CSS 디버깅` `#html` `#css` `#css layout` `#SPA`

## ⭐️ 2주차 학습키워드: `#DOM APIs` `#Event` `#Event delegation`
## ⭐️ 3주차 학습키워드: `#canvas` `#svg` `#데이터 시각화` `#애니메이션`

## 미리보기
![wise-wallet](https://user-images.githubusercontent.com/76121068/226588110-3b4075f0-dc4a-4a5e-b0f9-26eeda71274b.gif)
## 🎯 학습 목표
1주차
- HTML 태그 활용
- CSS 기반 동작원리 이해
- CSS 레이아웃 구성 원리 이해
- HTML,CSS 지식을 활용한 웹 단일 페이지 개발
- HTML,CSS 기본 디버깅 방법

2주차
- DOM APIs를 다양하게 다뤄본다.
- Event delegation(이벤트 위임)을 이해한다.
- Event 객체를 잘 활용한다.

3주차
- 데이터 시각화를 이해하고 이를 표현할 수 있다.
- 애니메이션 원리를 이해하고 이를 구현할 수 있다.
- JavaScript 특징을 이해한다 (Scope, Closure)

## ⏰ 학습 계획
1주차
- 루카스에 올라온 학습 자료들은 차근차근 살펴보며 학습한다.
  - HTML 구조화 설계 ✅
  - CSS로 스타일 입히기(CSS 기초 & CSS Layout) ✅
  - HTML, CSS 실습 영상 시청 ✅
  - DOM, Event란? ✅
- 깃허브에 학습 계획을 정리해서 PR을 보낸다. ✅
- 1주차에 만들어야하는 기능들 하나씩 구현해본다.
  - HTML, CSS로 메인 페이지 UI 만들기
    - HTML ✅
    - CSS ✅
  - '월' 이동 기능 구현 ✅
  - 새로운 내역 입력 기능 구현
- HTML 시맨틱(semantic) 태그에 대해서 공부한다. ✅
- 웹 접근성(Web Accessibility)에 대해서 알아본다. ✅
- SPA에 대해서 조사해본다. ✅
- 깔끔한 코드 작성을 위해서 ESLint, Prettier에 대해서 알아보고 설정한다. ✅
- Figma로 만들어진 기획서를 읽어보고 이해해본다. ✅

2주차
- 영상으로 HTML, CSS, JS 디버깅 방법에 대해서 학습한다. → [https://www.youtube.com/watch?v=ErMvjDMskFA&list=PLBQiFVHp3AalqVNN6N7yG81e3MBhHMShA&index=1](https://www.youtube.com/watch?v=ErMvjDMskFA&list=PLBQiFVHp3AalqVNN6N7yG81e3MBhHMShA&index=1) ✅
- DOM Event와 APIs에 대해서 학습한다. ✅
- Event bubbling, capturing, delegation에 대해서 알아보고 이해해본다. ✅
    
    → [https://ko.javascript.info/events](https://ko.javascript.info/events)
    
- 폼과 폼 조작에 대해서 학습한다. ✅
- 새로운 내역입력 기능을 어떤 방식으로 구현할지 고민해본다.
    - 일자는 현재 날짜가 디폴트로 들어가게 한다. ✅
    - 금액은 3자리 수마다 ‘ , ’가 찍히게 한다. ✅
    - 금액에 +,-로 수입/지출 분류가 바뀐다. ✅ 
    - 모든 항목이 입력되었을 때 버튼 활성화
        - 버튼 아이콘 색상은 어떻게 변하게 할까? ✅ 
- 메인 리스트에 항목을 어떻게 추가할지 고민한다.
    - 최근에 등록한 내역이 위에 오도록
    - 수입/지출에 따라 필터링이 될 수 있게
    - 후에 수정/삭제가 가능하도록
- 인풋바 결제수단 추가/삭제 기능 (선택사항)
- 캘린더 영역 구현
    - 탭으로 아이콘 이동가능하게
    - html, css로 UI 만들기

3주차
이번 가계부 미션은 크게 메인, 캘린더, 차트 영역으로 나뉘어져 있지만, 지금 진행 속도로 캘린더와 차트까지 구현하기에는 쉽지 않을 듯 하다. 메인 영역이라도 제대로 작동하도록 이번주까지 구현하는 것이 목표이다. 여유가 있다면 나머지 영역까지 구현해 보고싶다.

- 입력한 내역을 데이터로 저장하는 방식에 대해서 생각한다.
- 로컬스토리지에 들어가 있는 객체를 꺼내올 때 어떻게 구분할 수 있을지 생각한다.
- 로컬스토리지에 저장된 내역 데이터를 메인 화면에 렌더링 하는 기능을 구현한다.
- 수입/지출 필터링 할 수 있는 기능을 구현한다.
- 각 내역을 수정/삭제 할 수 있는 기능을 구현한다.

## 📚 1주차 학습 정리

### 1) Draft Pull Request

- Draft PR
  깃허브에서 프로젝트를 협업으로 진행하는 경우 Contribution을 PR(Pull Request)를 통해서 하게 된다. PR을 한 번 보내면 리뷰어는 수정사항이나 기능을 확인하고 승인을 하면 머지가 되면서 수정사항이 반영되는데,

  draft(초안) 모드로 PR 이슈를 오픈해두면 작업중인 코드가 아직 리뷰 받을 준비가 되어있지 않고 작업이 계속 이뤄지고 있는 상태임을 뜻하게 되며 머지가 활성화되지 않는다.

  이러한 draft PR은 개발이 완료되지는 않았지만 현재 진행 상황을 리뷰어와 공유하며 서로 의견을 조율하거나 소통하는데 사용할 수 있다.

  후에 개발이 완료되어 리뷰받을 준비가 되면 'Ready for review' 버튼을 눌러 일반 PR 이슈로 전환되어 코드를 머지할 수 있게된다.

- 바뀐 PR 운영방식에 맞추어 다음과 같은 흐름으로 작업을 진행하였다.
  - feature/mainUI 브랜치를 만들어 리드미에 학습 계획을 작성하고 커밋 후에 origin에 푸시한다.
  - feature/mainUI 브랜치를 upstream의 fuse 브랜치에 draft PR을 보낸다.
  - 열려있는 feature/mainUI 브랜치에 기능개발을 이어서 하되, html, css 작업 등 큰 기능들은 feature 브랜치를 따로 만들어 작업을 진행하고 커밋 후에 feature/mainUI 브랜치로 fast forward merge를 한다.
  - feature/mainUI에 작업을 완료한 브랜치를 머지한 이후에는 origin에 다시 푸시한다.
  - 추가할 기능마다 위와 같은 과정으로 반복한다.

![image](https://user-images.githubusercontent.com/76121068/223161913-985d80d7-85aa-4dfb-8f34-f893126da87e.png)

### 2) HTML

- HTML Attributes
  - data: 특정 요소들을 DOM요소에 저장해두기 위해서 사용한다. 브라우저는 이러한 데이터 속성에는 일체 관여하지 않는다.
- class와 id
- Semantic MarkUp
  HTML은 웹페이지의 뼈대를 이루고 레이아웃을 구성한다. 하지만 뼈대역할 말고도 요소들의 의미를 나타내는 역할도 담당하고 있기 때문에, 의미있는 요소들을 적절한 Layout 태그들(header, nav, main, section, footer...)을 사용해서 semantice하게 나타나는 작업 또한 중요하다.
  이렇게 semantic하게 html을 작성하면 다음과 같은 장점들이 있다.
  - 구글같은 검색엔진의 크롤러 시스템이 코드를 더 잘 이해할 수 있게 만들어준다.
  - 접근성 측면에서 좋다. ex) 시각장애인을 위한 스크린리더
  - 개발자들 입장에서 관리, 유지, 보수가 편해진다.

### 3) CSS

- html 태그로 이미지로 svg파일을 사용하는 이유?
  내비게이션있는 내역, 달력, 리스트 아이콘을 svg 태그로 추가하였다.
  다른 홈페이지들을 참고해보니 svg를 아이콘이나 로고로 사용하는 곳이 많았다.
  조사해보니 svg는 크기가 작을뿐만 아니라 사이트가 로딩될때 html 인라인에
  포함되기 때문에 추가적인 http 요청을 제거할 수 있어 속도가 빨라진다고 한다.
- CSS 스타일 적용방법과 우선순위
  - inline: 적용 우선순위가 가장 높지만, 각 html 요소마다 일일이 스타일을 지정해야 하기 때문에 권장되지 않는 방식
  - internal: html의 style 태그로 스타일을 지정하는 방식이다. 안에 들어갈 코드가 길어지면 html이 지저분해지고 여러 문서나 페이지에 적용하지 못하므로 역시 권장되지 않는다.
  - external: 외부 css를 따로 만들고 link 태그로 html과 연결하는 방식이다. 가장 권장되는 방식
- flex-box로 요소 배치 및 정렬하기
- position absolute인 요소 가운데 정렬하기 (일반적인 margin: auto 로는 불가능!)

### 4) DOM Event

### 5) ESLint

- ESLint는 코드를 깔끔하게 작성하고 오류를 방지하기 위해서 사용하는 툴의 일종이다.
- ES는 ECMAScript 즉 JS언어를 의미하고, Lint는 '보푸라기' 라는 의미로 에러가 있는 코드에 표시해두는 것을 의미하고 이러한 Lint를 수정해주는 것이 Linter이다.
- ESLint는 코드를 정적으로 분석해 프로그램을 실행하기 전에 코딩 컨벤션에 위배되는 코드나 안티패턴을 자동으로 검출해준다.
- `npx eslint --init` 으로 `.eslintrc`설정 파일을 만들 수도 있다.
- 최종적으로 packge.json 파일에 다음과 같이 직접 config 설정을 했다.
  ```json
  {
  	"devDependencies": {
  		"eslint": "^8.35.0",
  		"eslint-config-airbnb-base": "^15.0.0",
  		"eslint-config-prettier": "^8.7.0",
  		"eslint-plugin-import": "^2.27.5",
  		"eslint-plugin-prettier": "^4.2.1",
  		"prettier": "2.8.4"
  	},
  	"eslintConfig": {
  		"extends": ["airbnb-base", "plugin:prettier/recommended"],
  		"parserOptions": {
  			"ecmaVersion": "latest",
  			"sourceType": "module"
  		},
  		"rules": {
  			"object-curly-newline": 0
  		},
  		"env": {
  			"browser": true,
  			"node": true,
  			"commonjs": true,
  			"es2021": true
  		}
  	},
  	"prettier": {
  		"singleQuote": true,
  		"semi": true,
  		"useTabs": true,
  		"tabWidth": 2,
  		"trailingComma": "all",
  		"printWidth": 80,
  		"arrowParens": "avoid"
  	}
  }
  ```
## 📚 2주차 학습 정리

### 1) 디버깅 (Debugging)

브라우저의 개발자 도구를 제대로 활용해보자!

- HTML
    - html은 브라우저에서 DOM으로 해석된다.
    - element탭의 inspect 버튼으로 즉각적으로 요소 수정, 삭제 가능
    - 레이아웃 배지 활용하기 (flex 등)
    - 우클릭을 활용하자 → 노드 삭제, 가상 클래스 변경, break on
    - 노드의 properties → JS로 접근하려면 필요하다!
    - ruler(눈금자) 설정
- CSS
    - CSS 렌더링의 주요 3가지: CSS Priority, Cascading, Inheritance(상속)
    - 하나의 요소에도 여러 스타일이 있는데 그 중 하나만 적용된다. → 위에 있을 수록 우선순위가 높음
    - .cls 버튼으로 클래스 추가도 가능하다.
    - Computed나 레이아웃으로 box-model 확인 가능
- Javascript
    - Source탭(혹은 디버거) 활용하기: break point, scope, step over, step into, call stack
    - 비동기 코드의 동작도 순차적으로 보여줌
    - element에서 동작을 보고싶은 곳에 break on 걸어주기
    - 네트워크 통신 과정에서의 디버깅도 가능하다 (XHR/fetch Breakpoints)
    - 특정 이벤트도 디버깅 가능
    -`debugger` 활용하기
### 2) Form Validation

(1) 날짜

- [https://jsikim1.tistory.com/104](https://jsikim1.tistory.com/104) 날짜 정규식
- [https://blog.openreplay.com/regular-expressions-and-input-validations/](https://blog.openreplay.com/regular-expressions-and-input-validations/) 정규식 validation
- [https://regexr.com/](https://regexr.com/) 정규식 테스트 사이트
- [https://usang0810.tistory.com/32](https://usang0810.tistory.com/32) 8자리로 현재 날짜 출력하기

(2) 금액

- 자동으로 세 자리마 콤마(,) 입력되도록 하기 → change 이벤트가 아닌 input 이벤트? 입력이 일어날때마다 적용되도록 → 그런데 그러면 ,가 중복돼서 찍힘
- 세자리마다 , 찍혀져 있는지 밸리데이션 → [https://stackoverflow.com/questions/5917082/regular-expression-to-match-numbers-with-or-without-commas-and-decimals-in-text](https://stackoverflow.com/questions/5917082/regular-expression-to-match-numbers-with-or-without-commas-and-decimals-in-text)
- +,- 체크박스로 수입/지출 분류 전환되도록 하기
    - [https://blogpack.tistory.com/811](https://blogpack.tistory.com/811) (체크박스 이미지 설정)
    - [https://velog.io/@ywoosang/addEventListener-콜백함수-제대로-이해하기](https://velog.io/@ywoosang/addEventListener-%EC%BD%9C%EB%B0%B1%ED%95%A8%EC%88%98-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0) (이벤트 핸들러 콜백으로 이벤트 객체(e) 이외 인자 전달하기)

### 3) 새로운 내역 입력

- input, select, textarea, button 요소들은 스타일 상속(inherit)이 일어나지 않는다!!!
    
    따라서 `font: inherit`으로 설정해주거나 직접 지정해주어야 한다! 
    
    → [https://stackoverflow.com/questions/11250259/why-are-css-styles-not-inherited-by-html-form-fields](https://stackoverflow.com/questions/11250259/why-are-css-styles-not-inherited-by-html-form-fields)
    
- form 에 있는 input들 중 커스텀 드롭박스에 readonly로 넣어놓은 input은 ‘change’ 이벤트를 인식 못하는 문제점이 발생
    - readonly를 끄니 드롭다운 인풋창에 커서랑 자동완성창이 뜬다.
        - input 속성에 `onkeydown= “return false;” style=”caret-color: transparent !important;”`을 적용하면 키보드를 통한 값의 입력을 막고 커서를 안 보이게 할 수 있다.
        - input 속성에 `autocomplete: off`을 사용하면 자동완성창을 안 뜨게 만들 수 있다.
    - 폼에서 필수로 입력받고 싶은 값들에는 `required` 속성을 줄 수 있다.
- 그러나 모든 폼이 채워졌을 때 버튼색상을 변경해주는 함수를 만들때 새로운 문제가 발생했다.
    - 이렇게 만든 드롭다운 부분의 input들도 change나 input 이벤트를 제대로 인식하지 못했다.
        
        → click 이벤트를 추가로 걸어서 드롭다운 메뉴부분이 클릭될 때마다 검사하도록 했다. 
        
- formData로 데이터를 객체로 만들어 로컬스토리지에 저장했다.

![가계부 데이터 저장](https://user-images.githubusercontent.com/76121068/225642972-db33b125-6230-4030-be89-35685a43e24f.png)

### 4) 웹 스토리지

- 로컬 스토리지: 브라우저를 껐다켜도 남아있음, 같은 url이면 탭, 창이 달라도 모두 공유됨
- 세션 스토리지: 새로고침해도 남아있지만 탭이나, 브라우저 종료시 사라짐
- [https://ko.javascript.info/localstorage](https://ko.javascript.info/localstorage)
- 로컬스토리지를 이용한 방식의 문제점
    - 용량이 5MB 정도로 제한적이고 문자열로만 데이터를 저장 가능하다.
    - JSON 형식으로 객체 데이터도 저장 가능하지만 데이터 구조가 복잡해지면 후에 원하는 값만 가져와서 수정/삭제 하는 과정이 복잡해진다…
    - DB와 비슷한 indexedDB 라는 웹 브라우저 저장방식도 존재한다. 다만 transaction 등의 과정이 추가적으로 필요해 다루기가 어려워보인다. 과연 이번 기획에 적합한 방법일까?

### 그 외 수정들

- css의 :root 파일에서 font 한줄 선언 → [https://stackoverflow.com/questions/4218549/one-css-declaration-for-all-css-font-properties](https://stackoverflow.com/questions/4218549/one-css-declaration-for-all-css-font-properties)

## 📚 3주차 학습 정리
## ✨ 요구사항

### 1주차 주요 개발 feature

- ~~메인 페이지 전체 UI (HTML,CSS)~~
- ~~'월' 이동 기능~~
  - [x]  처음에 오늘 날짜를 기준으로 연월 표시
      - [x]  기존 getToday 함수 활용해서 현재 날짜 구하기
      - [x]  연월 표시
      - [x]  월에 맞는 이름 표시
  - [x]  왼쪽 버튼 클릭시 이전달로 이동
      - [x]  현재달 -1
      - [x]  1월 일때 작년으로 바뀌면서 12월로
  - [x]  오른쪽 버튼 클릭시 다음달로 이동
      - [x]  현재달 +1
      - [x]  12월 일때 내년으로 바뀌면서 1월로
- 새로운 내역 입력
  - [ ]  인풋바 모든 정보 입력시 확인 버튼 활성화
    - [x]  각 칸에 정보가 입력되어 있는지 확인
    - [ ]  정보가 올바른 형식인지 검사
    - [x]  확인버튼이 클릭 가능해지면서 색상변화
  - [x]  확인버튼 클릭시 입력된 정보들 저장
    - [x]  인풋바에서 입력받은 데이터를 어떤 방식으로 저장할지 고민해보기 → 객체? 로컬스토리지? 메모리?
    - [x]  나중에 데이터를 불러와서 새로운 요소로 추가해서 렌더링하는 것도 고려해야한다
    - [x]  후에 각 내역별로 다시 불러와 수정/삭제가 가능해야 한다
    - [x]  FormData와 Localstorage 활용 월별, 일자별 구분 가능하게 저장

### 2 & 3주차 주요 개발 feature

### 3주차 주요 개발 feature

- [ ]  메인 영역
    - [ ]  로컬스토리지에 입력한 내역 데이터 저장하기
        - [x]  데이터 저장 형식 정하기
        - [x]  각 데이터 구분방식 생각하기
    - [ ]  입력한 날짜별 내역 화면에 렌더링하기
        - [x]  새로운 submit 이벤트 발생할 때마다 새로운 항목을 추가하고 렌더링한다.
        - [ ]  기존에 저장된 날짜가 아닌 새로운 날짜의 내역이 입력되면 새로운 daily-list 생성
            - [ ]  기존에 있던 날짜인지 확인하기
            - [x]  새로운 daily-list 생성하기
        - [ ]  해당하는 날짜의 daily-list에 daily-detail-list를 추가
            - [x]  새로운 리스트를 만들고 클래스를 추가한다.
            - [x]  카테고리, 메모, 결제수단, 가격 데이터를 template literal을 사용해서 insertAdjacentHTML로 삽입한다.
            - [x]  해당 날짜의 daily-list에 새로 만든 daily-detail-list를 insertAdjacentElement로 삽입한다.
            - [ ]  daily-info 내용을 업데이트 한다.
        - [ ]  전체내역 info-filter 내용 업데이트
    - [ ]  선택한 내역 수정 / 삭제 기능
    - [ ]  전체내역 수입/지출 필터링 기능
    - [ ]  결제수단 추가/삭제 (선택기능. 필수 아님)
- 캘린더 영역
- 차트 영역

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

### DOM & Event

- DOM 조작과정에서 template literal 문법을 반드시 사용한다.
- DOM 조작과정에서 createElement, appendChild , insertBefore 등의 메서드를 활용해본다.
- Event 객체를 이해하고 이를 활용해본다.
    - ex) event.target, event.preventDefault() 등
- Event delegation 으로 중복된 이벤트 등록을 줄여본다.
    - 우선 이벤트 버블링과 캡쳐링을 공부한다.

## ⚡️ 추가 요구사항

### CSS

- Flexbox에 사용법에 대해서 더 알아보고 정리한다.

### Git, GitHub

- commit 단위를 작게 나눈다.
- commit 로그를 작성하는 좋은 사례를 찾아본다.
- 매일매일 git push를 통해 원격 저장소에 코드를 올린다.

### Javascript

- native 객체(Array, Function, Number, String)에서 prototype을 어떻게 활용하고 있는지 찾아보고 정리한다.
- 정리한 내용을 자유로운 형식으로 PR 보낼때 함께 보낸다.
- 함수가 실행될때 scope가 어떻게 형성되고, 변수를 찾는 과정인 scope chain이 무엇인지 공부한다.
- 그 과정에서 일어나는 Closure 라는 개념도 학습한다.
- 정리한 내용은 PR 보낼때 같이 보낸다(정리링크, 직접입력 등 자유롭게)

### Debugging

- HTML, CSS, JS 디버깅 방법을 익히고 활용하면서 개발한다.
- `console.log()`쓰지말기!

## 🤔 생각할 거리
1주차
- ARIA
- BEM
- SPA
- 아이콘이나 로고는 어떤 태그를 사용해야 할까? → i 태그를 사용하는 웹사이트들이 꽤 있었다.

2주차
- html내 script 태그의 위치관련 → [https://medium.com/geekculture/where-to-put-a-script-tag-into-head-or-body-end-b5b063058e0b](https://medium.com/geekculture/where-to-put-a-script-tag-into-head-or-body-end-b5b063058e0b)
- attribute vs property → [https://medium.com/hexlant/attribute-와-property-의-차이-c6f1c91ba91](https://medium.com/hexlant/attribute-%EC%99%80-property-%EC%9D%98-%EC%B0%A8%EC%9D%B4-c6f1c91ba91)
- 웹 컴포넌트 shadow DOM → [https://ui.toast.com/posts/ko_20170721](https://ui.toast.com/posts/ko_20170721)

## 😵‍💫 삽질 기록
1주차
- position absolute 시 요소의 가운데 정렬 → [https://velog.io/@sklove96/css-absolute-일-때-가운데-정렬-방법](https://velog.io/@sklove96/css-absolute-%EC%9D%BC-%EB%95%8C-%EA%B0%80%EC%9A%B4%EB%8D%B0-%EC%A0%95%EB%A0%AC-%EB%B0%A9%EB%B2%95)
- 인풋바 금액 입력창에서 ‘-’버튼, 숫자 입력칸, ‘원’ 알맞게 배열하기 → flex 안에 감싸서 다시 flex
- input [type=”date”]에서 기본 브라우저가 제공하는 달력 타입을 초기화 하니까 인풋창이 작게사라져버림 → 우선 type=number로 바꿔서 작업 계속
  - [https://stackoverflow.com/questions/50052571/html-date-input-without-the-date-picker](https://stackoverflow.com/questions/50052571/html-date-input-without-the-date-picker)
- input, select의 브라우저 기본 제공 스타일 초기화하고 기획서처럼 만들기
  - number type에서 숫자 조절하는 화살표 버튼 없애기 [https://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box](https://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box)
  - select 디폴트 스타일 없애기 [https://stackoverflow.com/questions/12297600/how-to-remove-default-chrome-style-for-select-input](https://stackoverflow.com/questions/12297600/how-to-remove-default-chrome-style-for-select-input)
  - select 스타일 초기화 후 아래방향 화살표 아이콘은 어떻게 넣을지 고민 → [https://stackoverflow.com/questions/14218307/select-arrow-style-change](https://stackoverflow.com/questions/14218307/select-arrow-style-change) (background-image로 svg파일을 url로 변환해서 넣고 위치 조정해서 해결) → [https://yoksel.github.io/url-encoder/](https://yoksel.github.io/url-encoder/) (svg를 url로 인코딩해주는 사이트)
  - 날짜로 디폴트 value 나오게 하기 → 새로고침 해서 해결
  - select에서 ‘선택하세요’ 기본메세지 나오되 선택은 못하게 하는법? → [https://stackoverflow.com/questions/3518002/how-can-i-set-the-default-value-for-an-html-select-element](https://stackoverflow.com/questions/3518002/how-can-i-set-the-default-value-for-an-html-select-element) → 근데 적용이 안됨, 속성하나씩 지워가면서 직접 선택해서 해결
- form내 input, select 요소 기획안 대로 깔끔하게 배치하기
  - 우선 각 요소마다 div로 감싸서 width 직접 지정후 배치
  - 수직 구분선은 어떻게? → border-left로 만들고 첫 요소랑 마지막 요소만 안 보이도록
  - 자꾸 끝부분이 삐져나가는 문제 → form에서 지정한 최대너비를 넘어가서 넘쳐버린듯 → box-sizing을 border-box로 해서 안넘치게 딱 맞추니까 해결

2주차
- 인풋바 드롭다운 메뉴를 이벤트 위임을 이용해서 다시 짜보기
    - e.target과 e.currentTarget에서 tagName, className, id, parentNode, nextElementSibling 등 다양하게 활용해보기
    - tagName은 값이 대문자로 리턴된다!
    - 원하는 영역 외 다른 영역을 클릭했을 경우는 어떻게 할까?
    
- **`cannot use import statement outside a module`** 에러
    - package.json에 “type”: “module” 추가하기 → 실패
    - script 태그에 type: “module” 추가하기 → 브라우저 에서는 이걸로 근데 그래도 index.js에서 import 해온 js 파일이 404 not found 에러 발생
    - 경로 설정에 문제였음 `import { initInputDate } from './initInputDate';` 여기서 ./initInputDate.js 로 확장자명 까지 경로를 확실히 명시해야 읽어올 수 있었다.
    - eslint에서 .js 붙이면 빨간줄이 그어져서 헷갈렸다.
    - [https://velog.io/@gabdol/자바스크립트-netERRABORTED-404-Not-Found-에러-해결-방법](https://velog.io/@gabdol/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-netERRABORTED-404-Not-Found-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95)

3주차
- 한번에 너무 많은 것을 고민하려 하지 말자.
    - 월요일 하루를 쓸데없는 주말과 똑같은 고민만 하다가 시간을 날린 것 같다. 아직 메인화면 렌더링 하는 것도 못한 상태에서 후에 항목들을 수정/삭제 할 것 까지 생각하다보니 코드로 구현은 한 줄도 못하고 멈춰있었다.
    - 큰 문제를 작은 문제로 쪼개고 후에 수정하거나 하면 될 문제를 가지고 너무 어렵게 생각한 것 같다. 일단 입력받은 데이터를 로컬 스토리지에 저장하는 것은 성공했으니 그걸 메인 화면에 렌더링하고 난 후에 수정/삭제를 고민해보려 한다.
## 참고자료
1주차
- [https://velog.io/@\_jouz_ryul/ESLint-Prettier-Airbnb-Style-Guide로-설정하기](https://velog.io/@_jouz_ryul/ESLint-Prettier-Airbnb-Style-Guide%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
- [https://poiemaweb.com/eslint](https://poiemaweb.com/eslint)
- [https://github.com/prettier/eslint-config-prettier](https://github.com/prettier/eslint-config-prettier/)
- [https://github.com/prettier/eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [https://brunch.co.kr/@ggk234/11](https://brunch.co.kr/@ggk234/11)
- [https://sumini.dev/guide/008-how-to-export-svg-from-figma/](https://sumini.dev/guide/008-how-to-export-svg-from-figma/)
- [https://velog.io/@selswlg/CSS-root](https://velog.io/@selswlg/CSS-root)
- [https://www.daleseo.com/css-position-absolute/](https://www.daleseo.com/css-position-absolute/)
- [https://velog.io/@sklove96/css-absolute-일-때-가운데-정렬-방법](https://velog.io/@sklove96/css-absolute-%EC%9D%BC-%EB%95%8C-%EA%B0%80%EC%9A%B4%EB%8D%B0-%EC%A0%95%EB%A0%AC-%EB%B0%A9%EB%B2%95)

2주차
- [https://ko.javascript.info/events](https://ko.javascript.info/events)
- [https://dom.spec.whatwg.org/](https://dom.spec.whatwg.org/)
- [https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName)