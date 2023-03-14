import { inputBarStore } from "../../store/inputBarStore.js";

export const handleMemoKeyup = ({ target }) => {
  inputBarStore.setMemo(target.value);
};
