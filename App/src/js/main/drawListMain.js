export const drawListMain = () => {
  const $main = document.getElementById("main");

  const listMain = `<div id="main_wrapper">
    <table id="main_history_list"></table>
  </div>`;

  $main.innerHTML += listMain;
};
