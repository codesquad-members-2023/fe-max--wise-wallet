"use strict";

function Inputbar(domNode) {
  this.domNode = domNode;
  this.firstItem = null;
  this.lastItem = null;

  this.inputbarItems = [];
  this.alignItems = [];
  this.textarea = null;

  this.copyButton = null;
  this.cutButton = null;

  this.start = null;
  this.end = null;
  this.ourClipboard = "";
  this.selected = null;

  this.nightModeCheck = null;
}

Inputbar.prototype.init = function () {
  var i, items, inputbarItem, menuButton;

  this.textarea = document.getElementById(
    this.domNode.getAttribute("aria-controls")
  );
  this.textarea.style.width =
    this.domNode.getBoundingClientRect().width - 12 + "px";
  this.textarea.addEventListener("mouseup", this.selectTextContent.bind(this));
  this.textarea.addEventListener("keyup", this.selectTextContent.bind(this));
  this.domNode.addEventListener("click", this.handleContainerClick.bind(this));

  this.selected = this.textarea.selectText;

  this.copyButton = this.domNode.querySelector(".copy");
  this.cutButton = this.domNode.querySelector(".cut");
  this.pasteButton = this.domNode.querySelector(".paste");

  this.nightModeCheck = this.domNode.querySelector(".nightmode");
  items = this.domNode.querySelectorAll(".item");

  for (i = 0; i < items.length; i++) {
    inputbarItem = new InputbarItem(items[i], this);
    inputbarItem.init();

    if (items[i].hasAttribute("aria-haspopup")) {
      menuButton = new MenuButton(items[i], this, inputbarItem);
      menuButton.init();
    }

    if (i === 0) {
      this.firstItem = inputbarItem;
    }
    this.lastItem = inputbarItem;
    this.inputbarItems.push(inputbarItem);
  }

  var spinButtons = this.domNode.querySelectorAll("[role=spinbutton]");

  for (i = 0; i < spinButtons.length; i++) {
    var s = new SpinButton(spinButtons[i], this);
    s.init();
  }
};

Inputbar.prototype.handleContainerClick = function () {
  if (event.target !== this.domNode) return;
  this.setFocusCurrentItem();
};

Inputbar.prototype.setFocusCurrentItem = function () {
  var item = this.domNode.querySelector('[tabindex="0"]');
  item.focus();
};

Inputbar.prototype.selectTextContent = function () {
  this.start = this.textarea.selectionStart;
  this.end = this.textarea.selectionEnd;
  this.selected = this.textarea.value.substring(this.start, this.end);
  this.updateDisable(
    this.copyButton,
    this.cutButton,
    this.pasteButton,
    this.selected
  );
};
Inputbar.prototype.updateDisable = function (
  copyButton,
  cutButton,
  pasteButton
) {
  var start = this.textarea.selectionStart;
  var end = this.textarea.selectionEnd;
  if (start !== end) {
    copyButton.setAttribute("aria-disabled", false);
    cutButton.setAttribute("aria-disabled", false);
  } else {
    cutButton.setAttribute("aria-disabled", true);
  }
  if (this.ourClipboard.length > 0) {
    pasteButton.setAttribute("aria-disabled", false);
  }
};

Inputbar.prototype.selectText = function (start, end, textarea) {
  if (typeof textarea.selectionStart !== "undefined") {
    textarea.focus();
    textarea.selectionStart = start;
    textarea.selectionEnd = end;
    return true;
  }
};
Inputbar.prototype.copyTextContent = function () {
  if (this.copyButton.getAttribute("aria-disabled") === "true") {
    return;
  }
  this.selectText(this.start, this.end, this.textarea);
  this.ourClipboard = this.selected;
  this.updateDisable(
    this.copyButton,
    this.cutButton,
    this.pasteButton,
    this.selected
  );
};

Inputbar.prototype.cutTextContent = function (inputbarItem) {
  if (this.cutButton.getAttribute("aria-disabled") === "true") {
    return;
  }
  this.copyTextContent(inputbarItem);
  var str = this.textarea.value;
  this.textarea.value = str.replace(str.substring(this.start, this.end), "");
  this.selected = "";
  this.updateDisable(
    this.copyButton,
    this.cutButton,
    this.pasteButton,
    this.selected
  );
};

Inputbar.prototype.pasteTextContent = function () {
  if (this.pasteButton.getAttribute("aria-disabled") === "true") {
    return;
  }
  var str = this.textarea.value;
  this.textarea.value =
    str.slice(0, this.textarea.selectionStart) +
    this.ourClipboard +
    str.slice(this.textarea.selectionEnd);
  this.textarea.focus();
  this.updateDisable(
    this.copyButton,
    this.cutButton,
    this.pasteButton,
    this.selected
  );
};

Inputbar.prototype.toggleBold = function (inputbarItem) {
  if (inputbarItem.isPressed()) {
    this.textarea.style.fontWeight = "normal";
    inputbarItem.resetPressed();
  } else {
    this.textarea.style.fontWeight = "bold";
    inputbarItem.setPressed();
  }
};

Inputbar.prototype.toggleUnderline = function (inputbarItem) {
  if (inputbarItem.isPressed()) {
    this.textarea.style.textDecoration = "none";
    inputbarItem.resetPressed();
  } else {
    this.textarea.style.textDecoration = "underline";
    inputbarItem.setPressed();
  }
};

Inputbar.prototype.toggleItalic = function (inputbarItem) {
  if (inputbarItem.isPressed()) {
    this.textarea.style.fontStyle = "normal";
    inputbarItem.resetPressed();
  } else {
    this.textarea.style.fontStyle = "italic";
    inputbarItem.setPressed();
  }
};

Inputbar.prototype.changeFontSize = function (value) {
  this.textarea.style.fontSize = value + "pt";
};

Inputbar.prototype.toggleNightMode = function () {
  if (this.nightModeCheck.checked) {
    this.textarea.style.color = "#eee";
    this.textarea.style.background = "black";
  } else {
    this.textarea.style.color = "black";
    this.textarea.style.background = "white";
  }
};

Inputbar.prototype.redirectLink = function (inputbarItem) {
  window.open(inputbarItem.domNode.href, "_blank");
};

Inputbar.prototype.setAlignment = function (inputbarItem) {
  for (var i = 0; i < this.alignItems.length; i++) {
    this.alignItems[i].resetChecked();
  }
  switch (inputbarItem.value) {
    case "left":
      this.textarea.style.textAlign = "left";
      inputbarItem.setChecked();
      break;
    case "center":
      this.textarea.style.textAlign = "center";
      inputbarItem.setChecked();
      break;
    case "right":
      this.textarea.style.textAlign = "right";
      inputbarItem.setChecked();
      break;

    default:
      break;
  }
};

Inputbar.prototype.setFocusToFirstAlignItem = function () {
  this.setFocusItem(this.alignItems[0]);
};

Inputbar.prototype.setFocusToLastAlignItem = function () {
  this.setFocusItem(this.alignItems[2]);
};

Inputbar.prototype.setFontFamily = function (font) {
  this.textarea.style.fontFamily = font;
};

Inputbar.prototype.activateItem = function (inputbarItem) {
  switch (inputbarItem.buttonAction) {
    case "bold":
      this.toggleBold(inputbarItem);
      break;
    case "underline":
      this.toggleUnderline(inputbarItem);
      break;
    case "italic":
      this.toggleItalic(inputbarItem);
      break;
    case "align":
      this.setAlignment(inputbarItem);
      break;
    case "copy":
      this.copyTextContent(inputbarItem);
      break;
    case "cut":
      this.cutTextContent(inputbarItem);
      break;
    case "paste":
      this.pasteTextContent(inputbarItem);
      break;
    case "font-family":
      this.setFontFamily(inputbarItem.value);
      break;
    case "nightmode":
      this.toggleNightMode(inputbarItem);
      break;
    case "link":
      this.redirectLink(inputbarItem);
      break;
    default:
      break;
  }
};

/**
 * @description
 *  Focus on the specified item
 * @param item
 *  The item to focus on
 */
Inputbar.prototype.setFocusItem = function (item) {
  for (var i = 0; i < this.inputbarItems.length; i++) {
    this.inputbarItems[i].domNode.setAttribute("tabindex", "-1");
  }

  item.domNode.setAttribute("tabindex", "0");
  item.domNode.focus();
};

Inputbar.prototype.setFocusToNext = function (currentItem) {
  var index, newItem;

  if (currentItem === this.lastItem) {
    newItem = this.firstItem;
  } else {
    index = this.inputbarItems.indexOf(currentItem);
    newItem = this.inputbarItems[index + 1];
  }
  this.setFocusItem(newItem);
};

Inputbar.prototype.setFocusToPrevious = function (currentItem) {
  var index, newItem;

  if (currentItem === this.firstItem) {
    newItem = this.lastItem;
  } else {
    index = this.inputbarItems.indexOf(currentItem);
    newItem = this.inputbarItems[index - 1];
  }
  this.setFocusItem(newItem);
};

Inputbar.prototype.setFocusToFirst = function () {
  this.setFocusItem(this.firstItem);
};

Inputbar.prototype.setFocusToLast = function () {
  this.setFocusItem(this.lastItem);
};

Inputbar.prototype.hidePopupLabels = function () {
  var tps = this.domNode.querySelectorAll("button .popup-label");
  tps.forEach(function (tp) {
    tp.classList.remove("show");
  });
};

// Initialize inputbars

/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 * ARIA Inputbar Examples
 * @function onload
 * @desc Initialize the inputbar example once the page has loaded
 */

window.addEventListener("load", function () {
  var inputbars = document.querySelectorAll('[role="inputbar"].format');

  for (var i = 0; i < inputbars.length; i++) {
    var inputbar = new Inputbar(inputbars[i]);

    inputbar.init();
  }
});
/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:   FontInputbarItem.js
 */

("use strict");

function InputbarItem(domNode, inputbar) {
  this.domNode = domNode;
  this.inputbar = inputbar;
  this.buttonAction = "";
  this.value = "";
  this.popupLabelNode = null;
  this.hasHover = false;
  this.popupLabelDelay = 800;

  this.keyCode = Object.freeze({
    TAB: 9,
    ENTER: 13,
    ESC: 27,
    SPACE: 32,
    PAGEUP: 33,
    PAGEDOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  });
}

InputbarItem.prototype.init = function () {
  this.domNode.addEventListener("keydown", this.handleKeyDown.bind(this));
  this.domNode.addEventListener("click", this.handleClick.bind(this));
  this.domNode.addEventListener("focus", this.handleFocus.bind(this));
  this.domNode.addEventListener("blur", this.handleBlur.bind(this));
  this.domNode.addEventListener("mouseover", this.handleMouseOver.bind(this));
  this.domNode.addEventListener("mouseleave", this.handleMouseLeave.bind(this));

  document.body.addEventListener(
    "keydown",
    this.handleHideAllPopupLabels.bind(this)
  );

  if (this.domNode.classList.contains("bold")) {
    this.buttonAction = "bold";
  }

  if (this.domNode.classList.contains("italic")) {
    this.buttonAction = "italic";
  }

  if (this.domNode.classList.contains("underline")) {
    this.buttonAction = "underline";
  }

  if (this.domNode.classList.contains("align-left")) {
    this.buttonAction = "align";
    this.value = "left";
    this.inputbar.alignItems.push(this);
  }

  if (this.domNode.classList.contains("align-center")) {
    this.buttonAction = "align";
    this.value = "center";
    this.inputbar.alignItems.push(this);
  }

  if (this.domNode.classList.contains("align-right")) {
    this.buttonAction = "align";
    this.value = "right";
    this.inputbar.alignItems.push(this);
  }
  if (this.domNode.classList.contains("nightmode")) {
    this.buttonAction = "nightmode";
  }
  if (this.domNode.classList.contains("link")) {
    this.buttonAction = "link";
  }
  if (this.domNode.classList.contains("copy")) {
    this.buttonAction = "copy";
  }
  if (this.domNode.classList.contains("paste")) {
    this.buttonAction = "paste";
  }
  if (this.domNode.classList.contains("cut")) {
    this.buttonAction = "cut";
  }
  if (this.domNode.classList.contains("spinbutton")) {
    this.buttonAction = "changeFontSize";
  }
  // Initialize any popup label

  this.popupLabelNode = this.domNode.querySelector(".popup-label");
  if (this.popupLabelNode) {
    var width = 8 * this.popupLabelNode.textContent.length;
    this.popupLabelNode.style.width = width + "px";
    this.popupLabelNode.style.left =
      -1 * ((width - this.domNode.offsetWidth) / 2) - 5 + "px";
  }
};

InputbarItem.prototype.isPressed = function () {
  return this.domNode.getAttribute("aria-pressed") === "true";
};

InputbarItem.prototype.setPressed = function () {
  this.domNode.setAttribute("aria-pressed", "true");
};

InputbarItem.prototype.resetPressed = function () {
  this.domNode.setAttribute("aria-pressed", "false");
};

InputbarItem.prototype.setChecked = function () {
  this.domNode.setAttribute("aria-checked", "true");
  this.domNode.checked = true;
};

InputbarItem.prototype.resetChecked = function () {
  this.domNode.setAttribute("aria-checked", "false");
  this.domNode.checked = false;
};

InputbarItem.prototype.disable = function () {
  this.domNode.setAttribute("aria-disabled", "true");
};

InputbarItem.prototype.enable = function () {
  this.domNode.removeAttribute("aria-disabled");
};

InputbarItem.prototype.showPopupLabel = function () {
  if (this.popupLabelNode) {
    this.inputbar.hidePopupLabels();
    this.popupLabelNode.classList.add("show");
  }
};

InputbarItem.prototype.hidePopupLabel = function () {
  if (this.popupLabelNode && !this.hasHover) {
    this.popupLabelNode.classList.remove("show");
  }
};

// Events

InputbarItem.prototype.handleHideAllPopupLabels = function (event) {
  switch (event.keyCode) {
    case this.keyCode.ESC:
      this.inputbar.hidePopupLabels();
      break;

    default:
      break;
  }
};

InputbarItem.prototype.handleBlur = function () {
  this.inputbar.domNode.classList.remove("focus");

  if (this.domNode.classList.contains("nightmode")) {
    this.domNode.parentNode.classList.remove("focus");
  }
  this.hidePopupLabel();
};

InputbarItem.prototype.handleFocus = function () {
  this.inputbar.domNode.classList.add("focus");

  if (this.domNode.classList.contains("nightmode")) {
    this.domNode.parentNode.classList.add("focus");
  }
  this.showPopupLabel();
};

InputbarItem.prototype.handleMouseLeave = function () {
  this.hasHover = false;
  setTimeout(this.hidePopupLabel.bind(this), this.popupLabelDelay);
};

InputbarItem.prototype.handleMouseOver = function () {
  this.showPopupLabel();
  this.hasHover = true;
};

InputbarItem.prototype.handleKeyDown = function (event) {
  var flag = false;

  switch (event.keyCode) {
    case this.keyCode.ENTER:
    case this.keyCode.SPACE:
      if (
        this.buttonAction !== "" &&
        this.buttonAction !== "bold" &&
        this.buttonAction !== "italic" &&
        this.buttonAction !== "underline"
      ) {
        this.inputbar.activateItem(this);
        if (this.buttonAction !== "nightmode") {
          flag = true;
        }
      }
      break;

    case this.keyCode.RIGHT:
      this.inputbar.setFocusToNext(this);
      flag = true;
      break;

    case this.keyCode.LEFT:
      this.inputbar.setFocusToPrevious(this);
      flag = true;
      break;

    case this.keyCode.HOME:
      this.inputbar.setFocusToFirst(this);
      flag = true;
      break;

    case this.keyCode.END:
      this.inputbar.setFocusToLast(this);
      flag = true;
      break;

    case this.keyCode.UP:
      if (this.buttonAction === "align") {
        if (this.domNode.classList.contains("align-left")) {
          this.inputbar.setFocusToLastAlignItem();
        } else {
          this.inputbar.setFocusToPrevious(this);
        }
        flag = true;
      }
      break;
    case this.keyCode.DOWN:
      if (this.buttonAction === "align") {
        if (this.domNode.classList.contains("align-right")) {
          this.inputbar.setFocusToFirstAlignItem();
        } else {
          this.inputbar.setFocusToNext(this);
        }
        flag = true;
      }
      break;
    default:
      break;
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
};

InputbarItem.prototype.handleClick = function () {
  if (this.buttonAction == "link") {
    return;
  }

  this.inputbar.setFocusItem(this);
  this.inputbar.activateItem(this);
};
/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:   MenuButton.js
 */

/* global Menu */

("use strict");

function MenuButton(node, inputbar, inputbarItem) {
  this.domNode = node;
  this.fontMenu = false;
  this.inputbar = inputbar;
  this.inputbarItem = inputbarItem;

  this.buttonAction = "font-family";
  this.value = "";

  this.keyCode = Object.freeze({
    TAB: 9,
    ENTER: 13,
    ESC: 27,
    SPACE: 32,
    UP: 38,
    DOWN: 40,
  });
}

MenuButton.prototype.init = function () {
  var id = this.domNode.getAttribute("aria-controls");

  if (id) {
    var node = document.getElementById(id);

    if (node) {
      this.fontMenu = new Menu(node, this);
      this.fontMenu.init();
    }
  }

  this.domNode.addEventListener("keydown", this.handleKeyDown.bind(this));
  this.domNode.addEventListener("click", this.handleClick.bind(this));
};

MenuButton.prototype.handleKeyDown = function (event) {
  var flag = false;

  switch (event.keyCode) {
    case this.keyCode.SPACE:
    case this.keyCode.ENTER:
    case this.keyCode.DOWN:
    case this.keyCode.UP:
      this.fontMenu.open();
      this.fontMenu.setFocusToCheckedItem();
      flag = true;
      break;

    default:
      break;
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
};

MenuButton.prototype.handleClick = function () {
  if (this.fontMenu.isOpen()) {
    this.fontMenu.close();
  } else {
    this.fontMenu.open();
  }
};

MenuButton.prototype.setFontFamily = function (font) {
  this.value = font;
  this.domNode.innerHTML = font.toUpperCase() + "<span></span>";
  this.domNode.style.fontFamily = font;
  this.domNode.setAttribute("aria-label", "Font: " + font);
  this.inputbar.activateItem(this);
};
/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:   Menu.js
 */

/* global MenuItem */

("use strict");

var Menu = function (domNode, controllerObj) {
  var msgPrefix = "Menu constructor argument domNode ";

  // Check whether domNode is a DOM element
  if (!(domNode instanceof Element)) {
    throw new TypeError(msgPrefix + "is not a DOM Element.");
  }

  // Check whether domNode has child elements
  if (domNode.childElementCount === 0) {
    throw new Error(msgPrefix + "has no element children.");
  }

  // Check whether domNode child elements are A elements
  var childElement = domNode.firstElementChild;

  while (childElement) {
    var menuitem = childElement.firstElementChild;

    if (menuitem && menuitem === "A") {
      throw new Error(
        msgPrefix + "Cannot have descendant elements are A elements."
      );
    }
    childElement = childElement.nextElementSibling;
  }

  this.domNode = domNode;
  this.controller = controllerObj;

  this.menuitems = []; // See PopupMenu init method
  this.firstChars = []; // See PopupMenu init method

  this.firstItem = null; // See PopupMenu init method
  this.lastItem = null; // See PopupMenu init method

  this.hasFocus = false; // See MenuItem handleFocus, handleBlur
  this.hasHover = false; // See PopupMenu handleMouseover, handleMouseout
};

/*
 *   @method Menu.prototype.init
 *
 *   @desc
 *       Add domNode event listeners for mouseover and mouseout. Traverse
 *       domNode children to configure each menuitem and populate menuitems
 *       array. Initialize firstItem and lastItem properties.
 */
Menu.prototype.init = function () {
  var menuitemElements, menuitemElement, menuItem, textContent, numItems;

  // Configure the domNode itself
  this.domNode.setAttribute("tabindex", "-1");

  this.domNode.addEventListener("mouseover", this.handleMouseover.bind(this));
  this.domNode.addEventListener("mouseout", this.handleMouseout.bind(this));

  // Traverse the element children of domNode: configure each with
  // menuitem role behavior and store reference in menuitems array.
  menuitemElements = this.domNode.querySelectorAll('[role="menuitemradio"]');

  for (var i = 0; i < menuitemElements.length; i++) {
    menuitemElement = menuitemElements[i];
    menuItem = new MenuItem(menuitemElement, this);
    menuItem.init();
    this.menuitems.push(menuItem);
    textContent = menuitemElement.textContent.trim();
    this.firstChars.push(textContent.substring(0, 1).toLowerCase());
  }

  // Use populated menuitems array to initialize firstItem and lastItem.
  numItems = this.menuitems.length;
  if (numItems > 0) {
    this.firstItem = this.menuitems[0];
    this.lastItem = this.menuitems[numItems - 1];
  }
};

/* EVENT HANDLERS */

Menu.prototype.handleMouseover = function () {
  this.hasHover = true;
};

Menu.prototype.handleMouseout = function () {
  this.hasHover = false;
  setTimeout(this.close.bind(this, false), 300);
};

/* FOCUS MANAGEMENT METHODS */

Menu.prototype.setFocusToController = function (command) {
  if (typeof command !== "string") {
    command = "";
  }

  if (command === "previous") {
    this.controller.inputbar.setFocusToPrevious(this.controller.inputbarItem);
  } else {
    if (command === "next") {
      this.controller.inputbar.setFocusToNext(this.controller.inputbarItem);
    } else {
      this.controller.domNode.focus();
    }
  }
};

Menu.prototype.setFontFamily = function (menuitem, font) {
  for (var i = 0; i < this.menuitems.length; i++) {
    var mi = this.menuitems[i];
    mi.domNode.setAttribute("aria-checked", mi === menuitem);
  }
  this.controller.setFontFamily(font);
};

Menu.prototype.setFocusToFirstItem = function () {
  this.firstItem.domNode.focus();
};

Menu.prototype.setFocusToLastItem = function () {
  this.lastItem.domNode.focus();
};

Menu.prototype.setFocusToPreviousItem = function (currentItem) {
  var index;

  if (currentItem === this.firstItem) {
    this.lastItem.domNode.focus();
  } else {
    index = this.menuitems.indexOf(currentItem);
    this.menuitems[index - 1].domNode.focus();
  }
};

Menu.prototype.setFocusToNextItem = function (currentItem) {
  var index;

  if (currentItem === this.lastItem) {
    this.firstItem.domNode.focus();
  } else {
    index = this.menuitems.indexOf(currentItem);
    this.menuitems[index + 1].domNode.focus();
  }
};

Menu.prototype.setFocusToCheckedItem = function () {
  for (var index = 0; index < this.menuitems.length; index++) {
    if (this.menuitems[index].domNode.getAttribute("aria-checked") === "true") {
      this.menuitems[index].domNode.focus();
    }
  }
};

Menu.prototype.setFocusByFirstCharacter = function (currentItem, char) {
  var start, index;

  char = char.toLowerCase();

  // Get start index for search based on position of currentItem
  start = this.menuitems.indexOf(currentItem) + 1;
  if (start === this.menuitems.length) {
    start = 0;
  }

  // Check remaining slots in the menu
  index = this.getIndexFirstChars(start, char);

  // If not found in remaining slots, check from beginning
  if (index === -1) {
    index = this.getIndexFirstChars(0, char);
  }

  // If match was found...
  if (index > -1) {
    this.menuitems[index].domNode.focus();
  }
};

Menu.prototype.getIndexFirstChars = function (startIndex, char) {
  for (var i = startIndex; i < this.firstChars.length; i++) {
    if (char === this.firstChars[i]) {
      return i;
    }
  }
  return -1;
};

/* Focus methods */

Menu.prototype.setFocus = function () {
  this.hasFocus = true;
  this.domNode.classList.add("focus");
  this.controller.inputbar.domNode.classList.add("focus");
};

Menu.prototype.removeFocus = function () {
  this.hasFocus = false;
  this.domNode.classList.remove("focus");
  this.controller.inputbar.domNode.classList.remove("focus");
  setTimeout(this.close.bind(this, false), 300);
};

/* MENU DISPLAY METHODS */

Menu.prototype.isOpen = function () {
  return this.controller.domNode.getAttribute("aria-expanded") === "true";
};

Menu.prototype.open = function () {
  // Set CSS properties
  this.domNode.style.display = "block";
  this.domNode.style.position = "absolute";
  this.domNode.style.top = "100%";
  this.domNode.style.left = "0px";
  this.domNode.style.zIndex = 100;

  // Set aria-expanded attribute
  this.controller.domNode.setAttribute("aria-expanded", "true");
};

Menu.prototype.close = function (force) {
  if (typeof force !== "boolean") {
    force = false;
  }

  if (
    force ||
    (!this.hasFocus && !this.hasHover && !this.controller.hasHover)
  ) {
    this.domNode.style.display = "none";
    this.controller.domNode.removeAttribute("aria-expanded");
  }
};
/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:   MenuItem.js
 */

("use strict");

/*
 *   @constructor MenuItem
 *
 *   @desc
 *       Wrapper object for a simple menu item in a popup menu
 *
 *   @param domNode
 *       The DOM element node that serves as the menu item container.
 *       The menuObj PopupMenu is responsible for checking that it has
 *       requisite metadata, e.g. role="menuitem".
 *
 *   @param menuObj
 *       The object that is a wrapper for the PopupMenu DOM element that
 *       contains the menu item DOM element. See PopupMenuAction.js
 */
var MenuItem = function (domNode, fontMenu) {
  this.domNode = domNode;
  this.fontMenu = fontMenu;
  this.font = "";

  this.keyCode = Object.freeze({
    TAB: 9,
    ENTER: 13,
    ESC: 27,
    SPACE: 32,
    PAGEUP: 33,
    PAGEDOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    D: 68,
  });
};

MenuItem.prototype.init = function () {
  this.domNode.setAttribute("tabindex", "-1");

  if (!this.domNode.getAttribute("role")) {
    this.domNode.setAttribute("role", "menuitemradio");
  }

  this.font = this.domNode.textContent.trim().toLowerCase();

  this.domNode.addEventListener("keydown", this.handleKeydown.bind(this));
  this.domNode.addEventListener("click", this.handleClick.bind(this));
  this.domNode.addEventListener("focus", this.handleFocus.bind(this));
  this.domNode.addEventListener("blur", this.handleBlur.bind(this));
  this.domNode.addEventListener("mouseover", this.handleMouseover.bind(this));
  this.domNode.addEventListener("mouseout", this.handleMouseout.bind(this));
};

/* EVENT HANDLERS */

MenuItem.prototype.handleKeydown = function (event) {
  var flag = false,
    char = event.key;

  function isPrintableCharacter(str) {
    return str.length === 1 && str.match(/\S/);
  }

  if (event.ctrlKey || event.altKey || event.metaKey) {
    return;
  }

  if (event.shiftKey) {
    if (isPrintableCharacter(char)) {
      this.fontMenu.setFocusByFirstCharacter(this, char);
    }
  } else {
    switch (event.keyCode) {
      case this.keyCode.D:
        // 딜리트 추
        break;
      case this.keyCode.SPACE:
      case this.keyCode.ENTER:
        this.handleClick(event);
        flag = true;
        break;

      case this.keyCode.ESC:
        this.fontMenu.setFocusToController();
        this.fontMenu.close(true);
        flag = true;
        break;

      case this.keyCode.UP:
        this.fontMenu.setFocusToPreviousItem(this);
        flag = true;
        break;

      case this.keyCode.DOWN:
        this.fontMenu.setFocusToNextItem(this);
        flag = true;
        break;

      case this.keyCode.RIGHT:
        flag = true;
        break;

      case this.keyCode.LEFT:
        flag = true;
        break;

      case this.keyCode.HOME:
      case this.keyCode.PAGEUP:
        this.fontMenu.setFocusToFirstItem();
        flag = true;
        break;

      case this.keyCode.END:
      case this.keyCode.PAGEDOWN:
        this.fontMenu.setFocusToLastItem();
        flag = true;
        break;

      case this.keyCode.TAB:
        this.fontMenu.setFocusToController();
        this.fontMenu.close(true);
        break;

      default:
        if (isPrintableCharacter(char)) {
          this.fontMenu.setFocusByFirstCharacter(this, char);
        }
        break;
    }
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
};

MenuItem.prototype.handleClick = function () {
  this.fontMenu.setFontFamily(this, this.font);
  this.fontMenu.setFocusToController();
  this.fontMenu.close(true);
};

MenuItem.prototype.handleFocus = function () {
  this.fontMenu.setFocus();
};

MenuItem.prototype.handleBlur = function () {
  this.fontMenu.removeFocus();
};

MenuItem.prototype.handleMouseover = function () {
  this.fontMenu.hasHover = true;
  this.fontMenu.open();
};

MenuItem.prototype.handleMouseout = function () {
  this.fontMenu.hasHover = false;
  setTimeout(this.fontMenu.close.bind(this.fontMenu, false), 300);
};
