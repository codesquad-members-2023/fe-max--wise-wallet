import { Element } from "../Element.js";

export class DetailGroup extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("DIV");
    this.domNode.className = "group group-detail";
    this.domNode.insertAdjacentHTML(
      "afterbegin",
      `
        <label for="detail" aria-hidden="true">내용</label>
        <div class="field">
          <input
            class="item"
            type="text"
            name="detail"
            id="detail"
            tabindex="-1"
            placeholder="입력하세요"
            aria-label="내용 입력창" />
        </div>
      `
    );
  }
}
