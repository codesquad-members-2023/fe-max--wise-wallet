import { inputBarStore } from "../../store/inputBarStore.js";

export const handlePriceInputFocus = ({ currentTarget }) => {
  currentTarget.value = inputBarStore.getPrice();
};
