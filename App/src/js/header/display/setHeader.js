import { setTodayDateInput } from "../../date/setTodayDateInput.js";
import { createNode } from "../../utils/createNode.js";

export const setHeader = () => {
  const htmlString = getHtml();
  const $wrap = document.getElementById("wrap");
  const nodeList = createNode(htmlString);

  nodeList.forEach((e) => {
    $wrap.prepend(e);
  });
};

const getHtml = () => {
  const date = new Date();
  const yearText = date.getFullYear();
  const monthText = date.getMonth() + 1;
  const monthText_EN = date.toLocaleString("en-US", { month: "long" });

  const htmlString = `
  <header id="header">
    <div id="header-wrapper">
      <div id="logo">
        <a href="#" class="display-small">Wise Wallet</a>
      </div>

      <div id="monthYear">
        <button id="left-Arrow" class="arrowBtn reset-btn">
          <img alt="우측 화살표" src="./src/icon/chevron-left.svg" />
        </button>
        <div id="date">
          <div id="year" class="bold-small">${yearText}</div>
          <div id="month" class="display-large">${monthText}</div>
          <div id="month_en" class="bold-small">${monthText_EN}</div>
        </div>
        <button id="right-Arrow" class="arrowBtn reset-btn">
          <img alt="우측 화살표" src="./src/icon/chevron-right.svg" />
        </button>
      </div>

      <nav id="tab">
        <!-- 아이콘 색 변경 필요 -->
        <button id="tab_doc">
          <img alt="내역 아이콘" src="./src/icon/doc.svg" />
        </button>
        <button id="tab_calendar">
          <img alt="달력 아이콘" src="./src/icon/calendar.svg" />
        </button>
        <button id="tab_chart">
          <img alt="차트 아이콘" src="./src/icon/chart.svg" />
        </button>
      </nav>
    </div>
  </header>`;
  return htmlString;
};
