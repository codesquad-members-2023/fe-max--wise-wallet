let classElement = {};

export const $ = document.querySelector.bind(document);

export function $classElement(className, all) {
  if (!className) return classElement;
  if (!(className in classElement)) {
    classElement[className] = [];
  }

  if (!all && classElement[className].length === 1) return classElement[className][0];
  return classElement[className];
}

export function $clearclassElement() {
  classElement = {};
}
