let classNode = {};

export const $ = document.querySelector.bind(document);

export function $classNode(className) {
  if (!className) return classNode;
  if (!(className in classNode)) {
    classNode[className] = [];
  }
  if (classNode[className].length === 1) return classNode[className][0];
  return classNode[className];
}

export function $clearClassNode() {
  classNode = {};
}
