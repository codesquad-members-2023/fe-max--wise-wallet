export const removeList = () => {
  const $main_history_list = document.querySelector("#main_history_list");
  while ($main_history_list.firstChild) {
    $main_history_list.removeChild($main_history_list.firstChild);
  }
};
