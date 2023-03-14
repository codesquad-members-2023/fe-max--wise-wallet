import { inputBarStore } from "../../store/inputBarStore.js";

export const handlePriceInputBlur = ({ target }) => {
  inputBarStore.setPrice(target.value);
  renderFormatNumber(target);
};

const renderFormatNumber = (target) => {
  target.value = Number(target.value).toLocaleString("ko-KR");
};
