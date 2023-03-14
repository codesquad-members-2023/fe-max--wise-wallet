import { TRANSACTION_TYPE } from "../constants/TRANSACTION_TYPE.js";
import { getCurrentDate } from "../utils/getCurrentDate.js";

export const inputBarStore = {
  date: getCurrentDate(),
  transactionType: TRANSACTION_TYPE.EXPENDITURE,
  price: "",
  memo: null,
  payment: null,
  category: null,

  initStore() {
    this.date = getCurrentDate();
    this.transactionType = TRANSACTION_TYPE.EXPENDITURE;
    this.price = "";
    this.memo = null;
    this.payment = null;
    this.category = null;
  },

  setDate(date) {
    this.date = date;
  },

  getDate() {
    return this.date;
  },

  setPrice(price) {
    this.price = price;
  },

  getPrice() {
    return this.price;
  },

  setMemo(memo) {
    this.memo = memo;
  },

  getMemo(memo) {
    return this.memo;
  },

  setPayment(payment) {
    this.payment = payment;
  },

  getPayment() {
    return this.payment;
  },

  setCategory(category) {
    this.category = category;
  },

  getCategory() {
    return this.category;
  },

  toggleTransactionType() {
    if (this.transactionType === TRANSACTION_TYPE.EXPENDITURE) {
      this.transactionType = TRANSACTION_TYPE.INCOME;

      return;
    }

    if (this.transactionType === TRANSACTION_TYPE.INCOME) {
      this.transactionType = TRANSACTION_TYPE.EXPENDITURE;

      return;
    }
  },

  isTransactionExpenditure() {
    return this.transactionType === TRANSACTION_TYPE.EXPENDITURE;
  },

  isAllFill() {
    return Boolean(this.date && this.price && this.memo && this.payment && this.category);
  },

  getAllProperty() {
    return {
      date: this.date,
      transactionType: this.transactionType,
      price: this.price,
      memo: this.memo,
      payment: this.payment,
      category: this.category,
    };
  },
};
