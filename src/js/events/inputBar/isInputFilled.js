export const isInputFilled = (value) => {
  if (value === "" || value === 0 || value === "선택하세요") {
    return false;
  }
  return true;
};
