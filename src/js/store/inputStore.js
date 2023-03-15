export const inputStore = {
  listArray: [],

  getClickedTime() {
    this.clickedTime = new Date()
  },
  generateList(list) {
    this.listArray.push(list)
  },
};
