const dateInput = document.getElementById("date-input");

function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const date = String(currentDate.getDate()).padStart(2, "0");
    return `${year}${month}${date}`;
}

const formattedDate = getCurrentDate();
dateInput.value = formattedDate;

dateInput.addEventListener("input", function () {
    const inputValue = this.value;
    if (inputValue && !/^[0-9]*$/.test(inputValue)) {
        this.value = inputValue.replace(/[^0-9]/g, "");
    }
    if (this.value.length > 8) {
        this.value = this.value.slice(0, 8);
    }
});

// const categoryPriceInput = document.getElementById("category-price");

// categoryPriceInput.addEventListener("input", function () {
//     const inputValue = this.value;
//     if (inputValue && !/^[0-9]*$/.test(inputValue)) {
//         this.value = inputValue.replace(/[^0-9]/g, "");
//     }
//     if (this.value.length > 8) {
//         this.value = this.value.slice(0, 8);
//     }

//     // 수정된 부분 시작
//     const parsedValue = parseInt(this.value.replace(/,/g, ""));
//     this.value = isNaN(parsedValue) ? 0 : parsedValue.toLocaleString();
//     // 수정된 부분 끝
// });

const categoryPriceInput = document.getElementById("category-price");

categoryPriceInput.addEventListener("input", function () {
    const inputValue = this.value;
    if (inputValue && !/^[0-9]*$/.test(inputValue)) {
        this.value = inputValue.replace(/[^0-9]/g, "");
    }
    if (this.value.length > 8) {
        this.value = this.value.slice(0, 8);
    }

    const parsedValue = parseInt(this.value.replace(/,/g, ""));
    this.value = isNaN(parsedValue) ? 0 : parsedValue.toLocaleString();
});

// 수정된 부분 시작
const categoryPricePlaceholder = categoryPriceInput.getAttribute("placeholder");
categoryPriceInput.addEventListener("blur", function () {
    if (!this.value) {
        this.value = categoryPricePlaceholder;
    }
});
