const allowKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight"];

export const handlePriceInputKeydown = (event) => {
  if (isNaN(event.key) && !allowKeys.includes(event.key)) {
    event.preventDefault();
  }
};
