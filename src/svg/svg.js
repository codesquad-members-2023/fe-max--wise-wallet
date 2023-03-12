// 거래내역 페이지 아이콘 svg 코드
const doc = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 2V8H20" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 13H8" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 17H8" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 9H9H8" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const svgDoc = document.getElementById("nav_doc");
svgDoc.innerHTML = doc;

// 달력 페이지 아이콘 svg 코드
const calendar = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 2V6" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 2V6" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 10H21" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const svgCalendar = document.getElementById("nav_calendar");
svgCalendar.innerHTML = calendar;

// 통계 페이지 아이콘 svg 코드
const chart = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 20V10" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20V4" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 20V14" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const svgChart = document.getElementById("nav_chart");
svgChart.innerHTML = chart;

// '<' svg 코드
const chevronLeft = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6L9 12L15 18" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const svgChevLeft = document.getElementById("chevron_left");
svgChevLeft.innerHTML = chevronLeft;

// '<' svg 코드
const chevronRight = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6L15 12L9 18" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const svgChevRight = document.getElementById("chevron_right");
svgChevRight.innerHTML = chevronRight;

// check버튼 비활성화 svg 코드
const disabledCheck = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="8" fill="#A79FCB" fill-opacity="0.4"/>
<path d="M29 14L16.625 26L11 20.5455" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const svgCheck = document.getElementById("input_bar_check");
svgCheck.innerHTML = disabledCheck;

// check버튼 활성화 svg 코드
const activeCheck = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="8" fill="#F5B853"/>
<path d="M29 14L16.625 26L11 20.5455" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

// '-' svg 코드
const minus = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12H18" stroke="#524D90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const svgMinus = document.getElementById("change_btn");
svgMinus.innerHTML = minus;

// '+' svg 코드
const plus = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12H18" stroke="#524D90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18V6" stroke="#524D90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

// 'x' svg 코드
const closed = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.75732 7.75735L16.2426 16.2426" stroke="#524D90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.75732 16.2426L16.2426 7.75736" stroke="#524D90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

// checked 버튼 svg 코드
const checked = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="20" height="20" rx="5" fill="#524D90"/>
<path d="M17 9L10.125 15.6667L7 12.6364" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const svgIncomeCheck = document.getElementById("income_checkbox");
svgIncomeCheck.innerHTML = checked;
const svgExpensesCheck = document.getElementById("expenses_checkbox");
svgExpensesCheck.innerHTML = checked;

// unchecked 버튼 svg 코드
const unchecked = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2.75" y="2.75" width="18.5" height="18.5" rx="4.25" stroke="#524D90" stroke-width="1.5"/>
</svg>
`;