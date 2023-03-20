const date = document.getElementById("input_date");
date.value = new Date()
  .toISOString()
  .substring(0, 10)
  .replace(/[^0-9]/g, '');