const dateInput = document.getElementById("dateInput");

function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const date = String(currentDate.getDate()).padStart(2, "0");
    return `${year}${month}${date}`;
}

const formattedDate = getCurrentDate();
dateInput.value = formattedDate;
