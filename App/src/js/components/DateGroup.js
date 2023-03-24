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

    const label = document.createElement("LABEL");
    label.setAttribute("for", "id-textbox-1");
    label.setAttribute("aria-hidden", "true");
    label.textContent = "일자";
    this.domNode.appendChild(label);

    const field = document.createElement("DIV");
    field.className = "field field-date";
    field.appendChild(datePicker.domNode);
    this.domNode.appendChild(field);
  }
}
