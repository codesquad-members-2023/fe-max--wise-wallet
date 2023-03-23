export const getDayOfWeek = (listDate) => {
    const year = listDate.slice(0, 4);
    const month = listDate.slice(4, 6);
    const day = listDate.slice(-2);
    const formatedDate = new Date(`${year}-${month}-${day}`);
    const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][
      formatedDate.getDay()
    ];
    return dayOfWeek;
};
