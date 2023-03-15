import "./dropdown.js";
import "./amount-input.js";

//- Date Input
const dateInput = document.querySelector(".input-bar__item-input#date-input");

//- New Entry
export const newEntryForm = document.querySelector(".input-bar form");
const allInputs = newEntryForm.querySelectorAll(".input-bar__item-input");
const submitBtn = newEntryForm.querySelector(".entry-submit-btn");

//- Date Default
dateInput.valueAsDate = new Date();

//- Check if all inputs are filled.
newEntryForm.addEventListener("change", () => {
  if ([...allInputs].every((x) => x.value && x.value !== "선택하세요")) {
    console.log("ready to submit!");
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

//- Submit New Entry
newEntryForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log("submitted new entry!");

  //- Reset values
  allInputs.forEach((input) => {
    if (input.name === "date") input.valueAsDate = new Date();
    else input.value = "";
  });
  submitBtn.disabled = true;
});
