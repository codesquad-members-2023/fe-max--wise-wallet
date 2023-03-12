export const checkInputPrice = (event) => {
  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "Tab",
  ];
  if (!allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
};
