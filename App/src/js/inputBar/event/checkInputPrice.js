export const checkInputPrice = (event) => {
  const $input_price = document.getElementById("input_price");
  var input = event.target.value;
  var regex = /^\d+$/;

  if (!regex.test(input)) {
    $input_price.value = input.replace(/[^\d]/g, "");
  }
};
