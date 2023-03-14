import { Element } from "../Element.js";
import { CALENDER, DOCUMENT, STATISTICS } from "./SVG.js";

const SVG = {
  document: DOCUMENT,
  calender: CALENDER,
  statistics: STATISTICS,
};

function TabView(attrs, icon) {
  return `
    <button
      id="${attrs["id"]}"
      type="button"
      role="tab"
      aria-label="${attrs["aria-label"]}"
      aria-selected="${attrs["aria-selected"]}"
      aria-controls="${attrs["aria-controls"]}"
      tabindex="-1"
    >
    ${SVG[icon]}
    </button>
  `;
}

export class Tabs extends Element {
  constructor(className) {
    super();
    this.domNode.className = className;
  }

  init() {
    this.domNode = document.createElement("DIV");
    const tabs = [
      [
        {
          id: "tab-1",
          "aria-label": "문서",
          "aria-selected": "true",
          "aria-controls": "tabpanel-1",
        },
        "document",
      ],
      [
        {
          id: "tab-2",
          "aria-label": "캘린더",
          "aria-selected": "false",
          "aria-controls": "tabpanel-2",
        },
        "calender",
      ],
      [
        {
          id: "tab-1",
          "aria-label": "통계",
          "aria-selected": "false",
          "aria-controls": "tabpanel-3",
        },
        "statistics",
      ],
    ];
    this.domNode.innerHTML = `
      <h2 id="tablist-1" class="blind">날짜 캐러셀</h2>
      <div role="tablist" aria-labelledby="tablist-1" class="manual">
        ${tabs.map(([attrs, icon]) => TabView(attrs, icon)).join("")}
      </div>
    `;
  }
}
