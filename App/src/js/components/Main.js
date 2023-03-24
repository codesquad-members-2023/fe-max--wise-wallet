import { Element } from "../Element.js";
import { Calender } from "./Calender.js";
import { Detail } from "./Detail.js";
import { Graph } from "./Graph.js";
import { History } from "./History.js";
import { Inputbar } from "./Inputbar.js";
import { Board } from "./Board.js";

export class Main extends Element {
  constructor() {
    super();
  }

  init() {
    this.domNode = document.createElement("MAIN");
    const inputbar = new Inputbar();

    const history = new History();

    const calender = new Calender();
    const calenderHTML = calender.view();

    const board = new Board();
    const boardHTML = board.view();

    const graph = new Graph();
    const graphHTML = graph.view();

    const detail = new Detail();
    const detailHTML = detail.view();

    this.domNode.insertAdjacentHTML(
      "afterbegin",
      `
        <div class="inner">
          <div id="tabpanel-1" role="tabpanel" aria-labelledby="tab-1">
            <!-- 입출금 내역 -->
          </div>
          <div
            id="tabpanel-2"
            role="tabpanel"
            aria-labelledby="tab-2"
            class="is-hidden">
            <h1 class="blind">캘린더</h1>
            ${calenderHTML}
          </div>
          <div
            id="tabpanel-3"
            role="tabpanel"
            class="is-hidden"
            aria-labelledby="tab-3"
            >
            <h1 class="blind">통계</h1>
            ${boardHTML}
            ${graphHTML}
            ${detailHTML}
          </div>
        </div>
      `
    );
    const tabpanel1 = this.domNode.querySelector("#tabpanel-1");
    tabpanel1.appendChild(inputbar.domNode)
    tabpanel1.appendChild(history.domNode)
  }
}
