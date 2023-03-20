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

const categoryPriceInput = document.getElementById("category-price");

categoryPriceInput.addEventListener("input", function () {
    const inputValue = this.value;
    if (inputValue && !/^[0-9]*$/.test(inputValue)) {
        this.value = inputValue.replace(/[^0-9]/g, "");
    } else if (this.value.length > 7) {
        this.value = this.value.slice(0, 7);
    } else {
        this.value = Number(inputValue.replace(/[^0-9]/g, "")).toLocaleString();
    }
});

categoryPriceInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 9 || event.keyCode === 13) {
        event.preventDefault();
    }
});

categoryPriceInput.addEventListener("focus", function () {
    this.placeholder = "";
});

categoryPriceInput.addEventListener("blur", function () {
    if (this.value === "") {
        this.placeholder = "0";
    }
});

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const memoInput = document.getElementById("memo-input");

// input 영역 클릭 시 placeholder 내용 숨기기
memoInput.addEventListener("focus", function () {
    this.placeholder = "";
});

// 다른 영역 클릭 시 placeholder 내용 보이기
memoInput.addEventListener("blur", function () {
    if (this.value === "") {
        this.placeholder = "입력하세요";
    }
});

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const paymentSelect = document.querySelector(".select-box");
const paymentDropdown = document.querySelector(".payment__dropdown");

// paymentSelect.addEventListener("click", function () {
//     paymentDropdown.classList.toggle("display-none");
// });

const input = document.getElementById("input");

input.addEventListener("click", function (e) {
    console.log(e.target.closest(".select-box"));
    const _this = e.target;
    const selectBox = _this.closest(".select-box");
    if (selectBox) {
        const dropdown = _this
            .closest(".payment")
            .querySelector(".payment__dropdown");

        console.log(dropdown);
        dropdown.classList.toggle("display-none");
    }
});
