export const createOption = (value) => {
  const element = `<span class="option">${value}</span>
      <button
        class="remove_option_btn reset-btn"
        type="button"
      ></button>`;
  const $new_li = document.createElement("li");

  $new_li.innerHTML = element;
  $new_li.classList.add("option", "body-regular");

  return $new_li;
};
