import { TRANSACTION_TYPE } from "../constants/TRANSACTION_TYPE.js";
import { displayDateStore } from "../store/displayDateStore.js";
import { createNode } from "../utils/createElement.js";
import { getTransactionLocalStorage } from "../utils/transactionLocalStorage.js";
import { WEEKDAY } from "../constants/WEEKDAY.js";
import { getContentDetailList } from "../views/main/contentDetailList.js";
import { getContentInfo } from "../views/main/contentInfo.js";
import { getContentHeader } from "../views/main/contentHeader.js";

export const initMainPage = () => {
  const transactionObj = getTransactionsByDisplayDate();

  renderContentHeader(transactionObj);
  renderContent();
  renderContentList(transactionObj);
};

const getTransactionsByDisplayDate = () => {
  const transactionObj = {};
  const transactions = getTransactionLocalStorage();

  transactions
    .filter((transaction) => transaction.date.month === displayDateStore.month)
    .forEach((transaction) => {
      if (!transactionObj[transaction.date.date]) {
        transactionObj[transaction.date.date] = [transaction];
      } else {
        transactionObj[transaction.date.date] = [...transactionObj[transaction.date.date], transaction];
      }
    });

  return transactionObj;
};

const renderContentHeader = (transactionObj) => {
  const $mainInner = document.querySelector(".main__inner");

  const transactions = Object.values(transactionObj);

  const totalCount = transactions.reduce((acc, cur) => acc + cur.length, 0);
  const incomeValue = transactions.reduce(
    (acc, cur) => acc + cur.reduce((acc, cur) => (cur.transactionType === TRANSACTION_TYPE.INCOME ? acc + Number(cur.price) : acc), 0),
    0
  );
  const expenditureValue = transactions.reduce(
    (acc, cur) => acc + cur.reduce((acc, cur) => (cur.transactionType === TRANSACTION_TYPE.EXPENDITURE ? acc + Number(cur.price) : acc), 0),
    0
  );

  const headerObj = getContentHeader({ count: totalCount, incomeValue, expenditureValue });
  const node = createNode(headerObj);

  $mainInner.appendChild(node);
};

const renderContent = () => {
  const $mainInner = document.querySelector(".main__inner");
  const div = document.createElement("div");
  div.id = "content";

  $mainInner.appendChild(div);
};

const renderContentList = (transactionObj) => {
  const $content = document.querySelector("#content");

  Object.keys(transactionObj).forEach((date) => {
    const month = displayDateStore.month;
    const day = WEEKDAY[transactionObj[date][0].date.day];
    const incomeValue = transactionObj[date].reduce(
      (acc, cur) => (cur.transactionType === TRANSACTION_TYPE.INCOME ? acc + Number(cur.price) : acc),
      0
    );
    const expenditureValue = transactionObj[date].reduce(
      (acc, cur) => (cur.transactionType === TRANSACTION_TYPE.EXPENDITURE ? acc + Number(cur.price) : acc),
      0
    );

    const contentInfo = getContentInfo({ month, date, day, incomeValue, expenditureValue });
    const contentInfoNode = createNode(contentInfo);

    $content.appendChild(contentInfoNode);

    transactionObj[date].forEach((element) => {
      const listObj = getContentDetailList(element);
      const node = createNode(listObj);

      contentInfoNode.appendChild(node);
    });
  });
};
