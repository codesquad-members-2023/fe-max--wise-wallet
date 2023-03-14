import { Element } from "../Element.js";
import { DatePicker } from "./DatePicker.js";

export class DateGroup extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("DIV");
    this.domNode.className = "group";

    const datePicker = new DatePicker();
    const datePickerHTML = datePicker.view();

    this.domNode.innerHTML = ` 
      <label for="id-textbox-1" aria-hidden="true">일자</label>
      <div class="field field-date">
        ${datePickerHTML}
      </div>
    `;
  }
}
