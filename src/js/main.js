import { moveMonth } from './header.js';
import { inputbarInit } from './inputbar.js';
function init() {
  moveMonth();
  inputbarInit();
}

window.addEventListener('DOMContentLoaded', init);
