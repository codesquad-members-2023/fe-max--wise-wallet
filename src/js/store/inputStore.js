export const inputStore = {
  listArray: [],

  getClickedTime() {
    this.clickedTime = new Date()
  },
  generateList(list) {
    this.listArray.push(list)
  },
  collectByMonth(){
    return this.listArray.filter((el) => el.date.slice(2,4) === $(".header-month").textContent)
  }

};
