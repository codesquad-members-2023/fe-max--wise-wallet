import { Element } from "../Element.js";

const SVG = {
  document: `
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 12H16C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V30C14 30.5304 14.2107 31.0391 14.5858 31.4142C14.9609 31.7893 15.4696 32 16 32H28C28.5304 32 29.0391 31.7893 29.4142 31.4142C29.7893 31.0391 30 30.5304 30 30V18L24 12Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M24 12V18H30"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M26 23H18"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M26 27H18"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M20 19H19H18"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  `,
  calender: `
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M29 14H15C13.8954 14 13 14.8954 13 16V30C13 31.1046 13.8954 32 15 32H29C30.1046 32 31 31.1046 31 30V16C31 14.8954 30.1046 14 29 14Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M26 12V16"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M18 12V16"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M13 20H31"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  `,
  statistics: `
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M28 30V20"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M22 30V14"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M16 30V24"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  `,
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
