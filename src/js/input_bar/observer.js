const $inputs = document.querySelectorAll(".input_bar input");
const $checkBtn = document.getElementById("check_btn");
const $divs = document.getElementById("category_list")

$inputs.forEach(ele => ele.addEventListener("input", () => {
  let len = 0;
  $inputs.forEach(v => {
    v.value.length > 0 ? len += 1 : len;
  });
  if (len === 5) {
    $checkBtn.setAttribute("src", "./src/svg/activate_check.svg");
    $checkBtn.setAttribute("condition", "activate");
    len = 0;
  } else {
    $checkBtn.setAttribute("src", "./src/svg/disabled_check.svg");
    $checkBtn.setAttribute("condition", "disabled");
    len = 0;
  }
}))

// $divs.addEventListener("click", () => {
//   let len = 0;
//   $inputs.forEach(v => {
//     v.value.length > 0 ? len += 1 : len;
//   });
//   if (len === 5) {
//     $checkBtn.setAttribute("src", "./src/svg/activate_check.svg");
//     $checkBtn.setAttribute("condition", "activate");
//     len = 0;
//   } else {
//     $checkBtn.setAttribute("src", "./src/svg/disabled_check.svg");
//     $checkBtn.setAttribute("condition", "disabled");
//     len = 0;
//   }
// })

// $checkBtn.addEventListener("click", (e) => {
//   document.querySelectorAll(".input_bar input").forEach((v) => {
//     console.log(v.value);
//   });
// });
