import { setChart } from "./display/setChart.js";

export const chartInit = () => {
  const $main = document.getElementById("main");
  const $chart = document.createElement("div");
  $chart.id = "chart";
  $main.appendChild($chart);
  setChart();
};
