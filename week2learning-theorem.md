# 2주차 학습 정리

## DOM

브라우저에서는 HTML 코드를 DOM(Document Object Model)이라는 객체 형태의 모델로 저장한다.

그렇게 저장된 정보를 DOM Tree라고 함. 결국 HTML element는 Tree 형태로 저장된다.

## DOM Tree

![Untitled](https://user-images.githubusercontent.com/57666791/224620926-8753a7d8-2160-41bb-816e-2af70b2ccb96.png)

## DOM APIs

브라우저에서는 DOM 트리 구조를 쉽게 탐색하기 위해 구현되어 있는 메서드를 제공하고 있다.

### node 탐색 API

- `getElementById`: ID 정보를 통해서 찾을 수 있다.
- `querySelector`: css selecter 문법을 활용해 DOM에 접근할 수 있다. DOM 요소를 찾을 때 querySelector만 사용해도 충분하고 빠르다.
  - `querySelectorAll`: 셀렉터에 일치하는 요소를 모두 찾아 Nodelist로 반환하는 메서드

### node 속성정보 얻기

- `tagName`: 지정된 요소의 태그 명을 가져온다.
- `textContent`: 지정된 노드와 그 자손의 텍스트 콘텐츠를 표현한다. 읽고 쓰기도 가능하다.
- `nodeType`: `<div>, <li>` 등 요소는 1이다. #text 노드는 3이다.

### node 이동

- `childNodes`: 지정된 요소의 자식 노드 모음(collection)을 반환한다.
- `firstChild`: 노드의 첫 번째 자식을 반환한다. 없다면 null을 반환한다. #text 노드까지 찾기 때문에 요소만 찾을 경우 firstElementChild를 활용해야 한다.
- `firstElementChild`: firstChild와 같이 노드의 첫 번째 자식을 반환한다. 없다면 null을 반환한다. firstElementChild는 텍스트 및 주석 노드와 같은 비요소 노드를 포함하지 않는다.
- `parentElement`: 노드의 부모를 반환하거나 부모가 없거나 부모가 DOM이 아닌경우 null을 반환한다.
- `nextSibling`: 부모의 childNodes 목록에서 지정된 노드 바로 다음에 있는 노드를 반환한다. 지정된 노드가 마지막 노드이면 null을 반환한다.
- `nextElementSibling`: 부모의 자식 목록에서 지정된 요소 바로 뒤에 오는 요소를 반환하거나 지정된 노드가 마지막 요소인 경우 null을 반환한다.

### node 생성과 추가

- `createElement()`: 지정한 태그이름의 HTML 요소를 만들어 반환한다.
- `remove()`: 지정한 요소를 제거한다.

### DOM 조작

- `removeChild()`: DOM Node에서 자식 노드를 제거하고 제거된 노드를 반환한다.
- `appendChild()`: 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙인다.
- `insertBefore()`: 부모 노드의 기준점 노드 앞에 삽입할 노드를 삽입한다. ex)
  ```jsx
  부모노드.insertBefore(삽입할 노드, 기준 점 노드);
  ```
- `cloneNode()`: 이 메서드를 호출한 Node의 복제된 Node를 반환한다.
  ```jsx
  var dupNode = node.cloneNode(deep);
  ```
  - node: 복제할 대상
  - dupNode: 복제된 새로운 node
  - deep(optional): 해당 node의 children까지 복제하려면 true, 해당 node만 복제하려면 false
- `replaceChild()`: 특정 부모 노드의 한 자식 노드를 다른 노드로 교체한다.
  ```jsx
  replacedNode = parentNode.replaceChild(newChild, oldChild);
  ```
- `closest()`: 상위로 올라가면서 근접 엘리먼트 찾기
- `insertAdjacentHTML()`: 특정 위치에 DOM tree 안에 원하는 node들을 추가한다. 기존의 Element를 다시 파싱하지 않아 기존 요소의 이벤트 리스너나 스타일 등의 변경이 일어나지 않는다. 다시 파싱하지 않기 때문에 innerHTML보다 작업이 덜 드므로 빠르다.

## 이벤트 버블링

한 요소에 이벤트가 발생하면, 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의 핸들러가 동작합니다. 가장 최상단의 조상 요소를 만날 때까지 이 과정이 반복되면서 요소 각각에 할당된 핸들러가 동작합니다.

버블링 예시

```html
<form onclick="alert('form')">
  FORM
  <div onclick="alert('div')">
    DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

p 태그를 클릭하면 순서대로 다음과 같은 일이 벌어진다.

1. `<p>`에 할당된 `onclick` 핸들러가 동작합니다.
2. 바깥의 `<div>`에 할당된 핸들러가 동작합니다.
3. 그 바깥의 `<form>`에 할당된 핸들러가 동작합니다.
4. `document` 객체를 만날 때까지, 각 요소에 할당된 `onclick` 핸들러가 동작합니다.

![Untitled](https://user-images.githubusercontent.com/57666791/224636790-ad723685-0b19-4c3e-a61f-4d401beacfba.png)

`event.target`: 클릭한 태그, 이벤트가 발생한 요소

`event.currentTarget`: 클릭한 태그가 아닌 이벤트 핸들러가 등록된 태그를 가리킨다.

`event.stopPropagation`: 핸들러에게 이벤트를 완전히 처리하고 난 후 버블링을 중단하도록 명령할 수 있다.([꼭 필요한 경우를 제외하고 버블링을 막지마세요!](https://ko.javascript.info/bubbling-and-capturing#ref-2729))

## 이벤트 캡쳐링

잘 사용되지는 않는다.

addEventListener 인자의 세번자 값을 true로 바꿔넣으면 캡쳐링을 구현할 수 있다.

버블링 코드 예시에서 반대로 동작하는 것을 볼 수 있다.

## REF

[MDN Web Docs](https://developer.mozilla.org/)

[Node.nodeType - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)

[버블링과 캡처링](https://ko.javascript.info/bubbling-and-capturing)
