"use strict";

function Toolbar(domNode) {
  this.domNode = domNode;
  this.firstItem = null;
  this.lastItem = null;

  this.toolbarItems = [];
  this.alignItems = [];

  this.copyButton = null;
  this.cutButton = null;

  this.start = null;
  this.end = null;
  this.ourClipboard = "";
  this.selected = null;

  this.nightModeCheck = null;
}

Toolbar.prototype.init = function () {
  var i, items, toolbarItem, menuButton;

  this.domNode.addEventListener("click", this.handleContainerClick.bind(this));

  this.copyButton = this.domNode.querySelector(".copy");
  this.cutButton = this.domNode.querySelector(".cut");
  this.pasteButton = this.domNode.querySelector(".paste");

  this.nightModeCheck = this.domNode.querySelector(".nightmode");
  items = this.domNode.querySelectorAll(".item");

  for (i = 0; i < items.length; i++) {
    toolbarItem = new ToolbarItem(items[i], this);
    toolbarItem.init();

    if (items[i].hasAttribute("aria-haspopup")) {
      menuButton = new MenuButton(items[i], this, toolbarItem);
      menuButton.init();
    }

    if (i === 0) {
      this.firstItem = toolbarItem;
    }
    this.lastItem = toolbarItem;
    this.toolbarItems.push(toolbarItem);
  }

  var spinButtons = this.domNode.querySelectorAll("[role=spinbutton]");

  for (i = 0; i < spinButtons.length; i++) {
    var s = new SpinButton(spinButtons[i], this);
    s.init();
  }
};

Toolbar.prototype.handleAmount = function () {};

Toolbar.prototype.handleContainerClick = function () {
  if (event.target !== this.domNode) return;
  this.setFocusCurrentItem();
};

Toolbar.prototype.setFocusCurrentItem = function () {
  var item = this.domNode.querySelector('[tabindex="0"]');
  item.focus();
};

Toolbar.prototype.setFocusToFirstAlignItem = function () {
  this.setFocusItem(this.alignItems[0]);
};

Toolbar.prototype.setFocusToLastAlignItem = function () {
  this.setFocusItem(this.alignItems[2]);
};

Toolbar.prototype.setFocusItem = function (item) {
  for (var i = 0; i < this.toolbarItems.length; i++) {
    this.toolbarItems[i].domNode.setAttribute("tabindex", "-1");
  }

  item.domNode.setAttribute("tabindex", "0");
  item.domNode.focus();
};

Toolbar.prototype.setFocusToNext = function (currentItem) {
  var index, newItem;

  if (currentItem === this.lastItem) {
    newItem = this.firstItem;
  } else {
    index = this.toolbarItems.indexOf(currentItem);
    newItem = this.toolbarItems[index + 1];
  }
  this.setFocusItem(newItem);
};

Toolbar.prototype.setFocusToPrevious = function (currentItem) {
  var index, newItem;

  if (currentItem === this.firstItem) {
    newItem = this.lastItem;
  } else {
    index = this.toolbarItems.indexOf(currentItem);
    newItem = this.toolbarItems[index - 1];
  }
  this.setFocusItem(newItem);
};

Toolbar.prototype.setFocusToFirst = function () {
  this.setFocusItem(this.firstItem);
};

Toolbar.prototype.setFocusToLast = function () {
  this.setFocusItem(this.lastItem);
};

Toolbar.prototype.hidePopupLabels = function () {
  var tps = this.domNode.querySelectorAll("button .popup-label");
  tps.forEach(function (tp) {
    tp.classList.remove("show");
  });
};


window.addEventListener("load", function () {
  var toolbars = document.querySelectorAll('[role="toolbar"].format');

  for (var i = 0; i < toolbars.length; i++) {
    var toolbar = new Toolbar(toolbars[i]);

    toolbar.init();
  }
});
/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:   FontToolbarItem.js
 */

("use strict");

function ToolbarItem(domNode, toolbar) {
  this.domNode = domNode;
  this.toolbar = toolbar;
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

ToolbarItem.prototype.init = function () {
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
    this.toolbar.alignItems.push(this);
  }

  if (this.domNode.classList.contains("align-center")) {
    this.buttonAction = "align";
    this.value = "center";
    this.toolbar.alignItems.push(this);
  }

  if (this.domNode.classList.contains("align-right")) {
    this.buttonAction = "align";
    this.value = "right";
    this.toolbar.alignItems.push(this);
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
};

ToolbarItem.prototype.isPressed = function () {
  return this.domNode.getAttribute("aria-pressed") === "true";
};

ToolbarItem.prototype.setPressed = function () {
  this.domNode.setAttribute("aria-pressed", "true");
};

ToolbarItem.prototype.resetPressed = function () {
  this.domNode.setAttribute("aria-pressed", "false");
};

ToolbarItem.prototype.setChecked = function () {
  this.domNode.setAttribute("aria-checked", "true");
  this.domNode.checked = true;
};

ToolbarItem.prototype.resetChecked = function () {
  this.domNode.setAttribute("aria-checked", "false");
  this.domNode.checked = false;
};

ToolbarItem.prototype.disable = function () {
  this.domNode.setAttribute("aria-disabled", "true");
};

ToolbarItem.prototype.enable = function () {
  this.domNode.removeAttribute("aria-disabled");
};

ToolbarItem.prototype.showPopupLabel = function () {
  if (this.popupLabelNode) {
    this.toolbar.hidePopupLabels();
    this.popupLabelNode.classList.add("show");
  }
};

ToolbarItem.prototype.hidePopupLabel = function () {
  if (this.popupLabelNode && !this.hasHover) {
    this.popupLabelNode.classList.remove("show");
  }
};

// Events

ToolbarItem.prototype.handleHideAllPopupLabels = function (event) {
  switch (event.keyCode) {
    case this.keyCode.ESC:
      this.toolbar.hidePopupLabels();
      break;

    default:
      break;
  }
};

ToolbarItem.prototype.handleBlur = function () {
  this.toolbar.domNode.classList.remove("focus");

  if (this.domNode.classList.contains("nightmode")) {
    this.domNode.parentNode.classList.remove("focus");
  }
  this.hidePopupLabel();
};

ToolbarItem.prototype.handleFocus = function () {
  this.toolbar.domNode.classList.add("focus");

  if (this.domNode.classList.contains("nightmode")) {
    this.domNode.parentNode.classList.add("focus");
  }
  this.showPopupLabel();
};

ToolbarItem.prototype.handleMouseLeave = function () {
  this.hasHover = false;
  setTimeout(this.hidePopupLabel.bind(this), this.popupLabelDelay);
};

ToolbarItem.prototype.handleMouseOver = function () {
  this.showPopupLabel();
  this.hasHover = true;
};

ToolbarItem.prototype.handleKeyDown = function (event) {
  var flag = false;

  switch (event.keyCode) {
    case this.keyCode.ENTER:
    case this.keyCode.SPACE:
      this.toolbar.setFocusToNext(this);
      break;

    case this.keyCode.RIGHT:
      this.toolbar.setFocusToNext(this);
      flag = true;
      break;

    case this.keyCode.LEFT:
      this.toolbar.setFocusToPrevious(this);
      flag = true;
      break;

    case this.keyCode.HOME:
      this.toolbar.setFocusToFirst(this);
      flag = true;
      break;

    case this.keyCode.END:
      this.toolbar.setFocusToLast(this);
      flag = true;
      break;

    case this.keyCode.UP:
      if (this.buttonAction === "align") {
        if (this.domNode.classList.contains("align-left")) {
          this.toolbar.setFocusToLastAlignItem();
        } else {
          this.toolbar.setFocusToPrevious(this);
        }
        flag = true;
      }
      break;
    case this.keyCode.DOWN:
      if (this.buttonAction === "align") {
        if (this.domNode.classList.contains("align-right")) {
          this.toolbar.setFocusToFirstAlignItem();
        } else {
          this.toolbar.setFocusToNext(this);
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

ToolbarItem.prototype.handleClick = function () {
  if (this.buttonAction == "link") {
    return;
  }

  this.toolbar.setFocusItem(this);
};
/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:   MenuButton.js
 */

/* global Menu */

("use strict");

function MenuButton(node, toolbar, toolbarItem) {
  this.domNode = node;
  this.menu = false;
  this.toolbar = toolbar;
  this.toolbarItem = toolbarItem;

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
      this.menu = new Menu(node, this);
      this.menu.init();
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
      this.menu.open();
      this.menu.setFocusToCheckedItem();
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
  if (this.menu.isOpen()) {
    this.menu.close();
  } else {
    this.menu.open();
  }
};

MenuButton.prototype.setContext = function (context) {
  this.value = context;
  this.domNode.innerHTML = context;
  this.domNode.setAttribute("aria-label", context);
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
  var menuitemElements, menuitemElement, menuItem, numItems;

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
    this.controller.toolbar.setFocusToPrevious(this.controller.toolbarItem);
  } else {
    if (command === "next") {
      this.controller.toolbar.setFocusToNext(this.controller.toolbarItem);
    } else {
      this.controller.domNode.focus();
    }
  }
};

Menu.prototype.setContext = function (menuitem, font) {
  for (var i = 0; i < this.menuitems.length; i++) {
    var mi = this.menuitems[i];
    mi.domNode.setAttribute("aria-checked", mi === menuitem);
  }
  this.controller.setContext(font);
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
  this.controller.toolbar.domNode.classList.add("focus");
};

Menu.prototype.removeFocus = function () {
  this.hasFocus = false;
  this.domNode.classList.remove("focus");
  this.controller.toolbar.domNode.classList.remove("focus");
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
var MenuItem = function (domNode, menu) {
  this.domNode = domNode;
  this.menu = menu;
  this.context = "";

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

  this.context = this.domNode.textContent.trim().toLowerCase();

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
      this.menu.setFocusByFirstCharacter(this, char);
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
        this.menu.setFocusToController();
        this.menu.close(true);
        flag = true;
        break;

      case this.keyCode.UP:
        this.menu.setFocusToPreviousItem(this);
        flag = true;
        break;

      case this.keyCode.DOWN:
        this.menu.setFocusToNextItem(this);
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
        this.menu.setFocusToFirstItem();
        flag = true;
        break;

      case this.keyCode.END:
      case this.keyCode.PAGEDOWN:
        this.menu.setFocusToLastItem();
        flag = true;
        break;

      case this.keyCode.TAB:
        this.menu.setFocusToController();
        this.menu.close(true);
        break;

      default:
        if (isPrintableCharacter(char)) {
          this.menu.setFocusByFirstCharacter(this, char);
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
  this.menu.setContext(this, this.context);
  this.menu.setFocusToController();
  this.menu.close(true);
};

MenuItem.prototype.handleFocus = function () {
  this.menu.setFocus();
};

MenuItem.prototype.handleBlur = function () {
  this.menu.removeFocus();
};

MenuItem.prototype.handleMouseover = function () {
  this.menu.hasHover = true;
  this.menu.open();
};

MenuItem.prototype.handleMouseout = function () {
  this.menu.hasHover = false;
  setTimeout(this.menu.close.bind(this.menu, false), 300);
};
