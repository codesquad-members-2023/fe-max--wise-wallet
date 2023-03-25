import { createNode } from "../../utils/createNode.js";

export const setBarChartBoard = () => {
  const $chart = document.getElementById("chart");
  const nodeList = createNode(getHtml());
  nodeList.forEach((e) => {
    $chart.appendChild(e);
  });
};

const getHtml = () => {
  const html = `
    <div id="barChart">
      난 그래프
    </div>`;
  return html;
};
