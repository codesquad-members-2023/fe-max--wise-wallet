export const getCurrentTime = () => {
  const today = new Date();
  const hours = today.getHours().toString().padStart(2, "0");
  const minutes = today.getMinutes().toString().padStart(2, "0");
  const seconds = today.getSeconds().toString().padStart(2, "0");

  const timeString = hours + ":" + minutes + ":" + seconds;

  return timeString
};
  // const hours = ("0" + today.getHours()).slice(-2);
  // const minutes = ("0" + today.getMinutes()).slice(-2);
  // const seconds = ("0" + today.getSeconds()).slice(-2);