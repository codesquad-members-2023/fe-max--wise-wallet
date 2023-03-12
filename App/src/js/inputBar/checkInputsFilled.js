export const checkInputsFilled = () => {
  const $inputs = document.querySelectorAll("#input_bar input");
  for (let i = 0; i < $inputs.length; i++) {
    if ($inputs[i].value == "") {
      return false;
    }
  }

  return true;
};
