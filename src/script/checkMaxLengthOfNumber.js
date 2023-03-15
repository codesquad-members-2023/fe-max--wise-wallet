const dateInput = document.querySelector("#date-input");

const checkMaxLengthOfNumber = (inputElement) => {
    if(inputElement.value.length > inputElement.maxLength) {
        inputElement.value = inputElement.value.slice(0, inputElement.maxLength);
    }
};

dateInput.addEventListener("input", () => {
    checkMaxLengthOfNumber(dateInput);
});