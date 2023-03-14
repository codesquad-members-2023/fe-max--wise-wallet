export const checkInputsFilled = () => {
  const $inputs = document.querySelectorAll("#input_bar input");
  const $input_checkbox = document.querySelector("#input_bar #input_checkbox");
  let isFilled = true;

  for (let i = 0; i < $inputs.length; i++) {
    if ($inputs[i].value == "") {
      isFilled = false;
      break;
    }
  }

  if (isFilled) {
    $input_checkbox.disabled = false;
    $input_checkbox.classList.add("active_Btn");
  } else {
    $input_checkbox.disabled = true;
    $input_checkbox.classList.remove("active_Btn");
  }
};
