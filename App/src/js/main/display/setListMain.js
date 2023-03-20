import { createNode } from "../../utils/createNode.js";

export const setListMain = ({ th, list }) => {
  const $main = document.getElementById("main");
  const $main_wrapper = document.getElementById("main_wrapper");
  const htmlString = `<div id="main_wrapper">
  <table id="main_history_list">${th}${list}</table>
  </div>`;
  const nodeList = createNode(htmlString);

  if ($main_wrapper) {
    $main_wrapper.remove();
  }

  nodeList.forEach((e) => {
    $main.appendChild(e);
  });
};
