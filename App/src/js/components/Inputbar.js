import { Element } from "../Element.js";
import { AmountGroup } from "./AmountGroup.js";
import { DateGroup } from "./DateGroup.js";
import { DetailGroup } from "./DetailGroup.js";
import { DivisionGroup } from "./DivisionGroup.js";
import { PaymentGroup } from "./PaymentGroup.js";
import { SubmitGroup } from "./SubmitGroup.js";

export class Inputbar extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("DIV");
    this.domNode.className = "format";
    const attr = {
      role: "toolbar",
      "aria-label": "입력공간",
      "aria-controls": "textarea1",
    };
    Object.entries(attr).forEach(([name, value]) => {
      this.domNode.setAttribute(name, value);
    });

    const dateGroup = new DateGroup();
    const amountGroup = new AmountGroup();
    const detailGroup = new DetailGroup();
    const paymentGroup = new PaymentGroup();
    const divisionGroup = new DivisionGroup();
    const submitGroup = new SubmitGroup();
    
    this.domNode.appendChild(dateGroup.domNode)
    this.domNode.appendChild(amountGroup.domNode)
    this.domNode.appendChild(detailGroup.domNode)
    this.domNode.appendChild(paymentGroup.domNode)
    this.domNode.appendChild(divisionGroup.domNode)
    this.domNode.appendChild(submitGroup.domNode)
  }
}
