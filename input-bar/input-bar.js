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

const paymentLabel = document.querySelector(".payment__label");
const paymentDropdown = document.querySelectorAll(".payment__dropdown");

const handleSelect = (item) => {
    paymentLabel.parentNode.classList.remove("active");
    paymentLabel.innerHTML = item.textContent;
};

paymentDropdown.addEventListener("click", () => handleSelect(option));

paymentLabel.addEventListener("click", function () {
    if (paymentLabel.parentNode.classList.contains("active")) {
        paymentLabel.parentNode.classList.remove("active");
    } else {
        paymentLabel.parentNode.classList.add("active");
    }
});
