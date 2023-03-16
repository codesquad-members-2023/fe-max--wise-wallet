DOM API를 사용하여 예시를 만들어 보겠습니다.

3. DOM 선택자 학습 예시

```html
<!-- HTML 코드 -->
<div id="myDiv">
  <p class="myPara">Hello World!</p>
  <p class="myPara">This is a paragraph.</p>
</div>
```

```javascript
// JavaScript 코드
// id가 'myDiv'인 요소를 선택하여 변수에 할당
const myDiv = document.getElementById("myDiv");
// class가 'myPara'인 요소들을 선택하여 변수에 할당
const myParas = document.getElementsByClassName("myPara");
// 첫 번째 p 요소를 선택하여 변수에 할당
const firstPara = document.querySelector("p");
// 모든 p 요소를 선택하여 변수에 할당
const allParas = document.querySelectorAll("p");
```


4. DOM 조작 및 스타일 변경 학습 예시

```html
<!-- HTML 코드 -->
<div id="myDiv">
  <p class="myPara">Hello World!</p>
</div>
```

```javascript
// JavaScript 코드
// 새로운 p 요소를 생성하여 변수에 할당
const newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph."; // 텍스트 콘텐츠 추가
// id가 'myDiv'인 요소에 새로운 p 요소를 추가
const myDiv = document.getElementById("myDiv");
myDiv.appendChild(newPara);
// p 요소의 스타일 변경
newPara.style.fontSize = "18px";
newPara.style.color = "blue";
```

5. 이벤트 처리 학습 예시

```html
<!-- HTML 코드 -->
<button id="myButton">Click me!</button>
```

```javascript
// JavaScript 코드
// id가 'myButton'인 버튼 요소를 선택하여 변수에 할당
const myButton = document.getElementById("myButton");
// 버튼 클릭 시 메시지를 출력하는 이벤트 핸들러 함수
function handleClick() {
  alert("Button clicked!");
}
// 이벤트 핸들러 함수를 버튼에 등록
myButton.addEventListener("click", handleClick);
// 이벤트 핸들러 함수 등록 해제
myButton.removeEventListener("click", handleClick);
```

이러한 예시를 통해 DOM API를 학습할 수 있습니다. 예시를 따라 실습해보면서 익혀보세요!
