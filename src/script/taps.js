const tapList = document.getElementById('tap-list_icon');
const tapCalendar = document.querySelector('#tap-calendar_icon');
const tapChart = document.querySelector('#tap-chart_icon');


const switchToListTap = () => {
    const list = document.getElementById('tap-list');
    list.className = 'unactive';
}

tapList.addEventListener('click', switchToListTap);