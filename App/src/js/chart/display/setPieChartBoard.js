import { getLocalStorage } from "../../localStorage/getLocalStorage.js";
import { addComma } from "../../utils/addComma.js";
import { createNode } from "../../utils/createNode.js";

export const setPieChartBoard = () => {
  const $chart = document.getElementById("chart");
  const expenditureData = getLocalStorage().filter(
    (e) => e.isPositive === false
  );
  const chartData = getChartData(expenditureData);

  const $pieChart = setPieChart(chartData);
  $chart.appendChild($pieChart);

  const $chartList = setChartList(chartData);
  $chart.appendChild($chartList);
};

const setPieChart = (chartData) => {
  const html = `
    <div class="chart-wrapper">
      <div class="chart" style="background : ${setChartStyle(chartData)}">
        <div class="chart-bar"></div>
      </div>
    </div>`;
  return createNode(html)[0];
};

const setChartList = (chartData) => {
  let totalPrice = 0;
  let categoryList = "";
  chartData.forEach((e) => {
    totalPrice += e.price;
    categoryList += `
    <div class="smallListItem">
      <div class="listCategory" data-category="${e.category}">${
      e.category
    }</div>
      <div class="percent">${e.percent}%</div>
      <div class="amount">${addComma(e.price)}원</div>
    </div>`;
  });

  const html = `
  <div class="list-wrapper">
    <div id="chart-title">
      <div>이번달 지출 금액</div>
      <div>${addComma(totalPrice)}원</div>
    </div>
    <div id="chart-categorys">
      ${categoryList}
    </div>
  </div>
  `;

  return createNode(html)[0];
};

const setChartStyle = (chartData) => {
  let styleString = "conic-gradient(";
  let startPercent = 0;

  for (let i = 0; i < chartData.length; i++) {
    let segmentPercent = startPercent + chartData[i].percent;
    styleString += `${chartData[i].categoryColor} ${startPercent}% ${segmentPercent}%`;
    if (i !== chartData.length - 1) {
      styleString += ", ";
    } else {
      styleString += ")";
    }
    startPercent = segmentPercent;
  }

  return styleString;
};

const getChartData = (expenditureData) => {
  const priceSum = expenditureData.reduce((a, b) => a + b.price, 0);
  let group = {};
  expenditureData.forEach((e) => {
    if (group.hasOwnProperty(e.category_select)) {
      group[e.category_select] += e.price;
    } else {
      group[e.category_select] = e.price;
    }
  });

  const groupKeys = Object.keys(group);
  const chartData = groupKeys
    .map((e) => {
      return {
        category: e,
        percent: Math.round((group[e] / priceSum) * 100),
        categoryColor: bgColor[e],
        price: group[e],
      };
    })
    .sort((a, b) => b.percent - a.percent);

  return chartData;
};

const bgColor = {
  생활: "#4a6cc3",
  "의료/건강": "#6ed5eb",
  "쇼핑/뷰티": "#4eaaba",
  교통: "#94d3cc",
  식비: "#4ca1de",
  "문화/여가": "#d092e2",
  미분류: "#817dce",
};
