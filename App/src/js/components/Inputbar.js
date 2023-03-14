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
    const dateGroupHTML = dateGroup.view();

    const amountGroup = new AmountGroup();
    const amountGroupHTML = amountGroup.view();

    const detailGroup = new DetailGroup();
    const detailGroupHTML = detailGroup.view();

    const paymentGroup = new PaymentGroup();
    const paymentGroupHTML = paymentGroup.view();

    const divisionGroup = new DivisionGroup();
    const divisionGroupHTML = divisionGroup.view();

    const submitGroup = new SubmitGroup();
    const submitGroupHTML = submitGroup.view();

    this.domNode.innerHTML = `
      ${dateGroupHTML}
      ${amountGroupHTML}
      ${detailGroupHTML}
      ${paymentGroupHTML}
      ${divisionGroupHTML}
      ${submitGroupHTML}
    `;
  }
}
