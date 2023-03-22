export const createNode = (htmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const nodes = doc.body.children;

  return Array.from(nodes);
};
