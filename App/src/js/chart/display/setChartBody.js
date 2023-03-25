import { createNode } from "../../utils/createNode.js";

export const setChartBody = () => {
  const $chart = document.getElementById("chart");
  const nodeList = createNode(getHtml());
  nodeList.forEach((e) => {
    $chart.appendChild(e);
  });
};

const getHtml = () => {
  const html = `
    <div id="chartBody">
      난 바디
    </div>`;
  return html;
};
