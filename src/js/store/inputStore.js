export const inputStore = {
  listArray: [],

  getClickedTime() {
    this.clickedTime = new Date()
  },
  generateList(list) {
    //노드를 만들고
    //노드를 담는 식으로
    this.listArray.push(list)
  },
};
