const LinkedList = require('./LinkedList.js');

//#### BUFFER STORAGE ####

const detectLoop = (node) => {
  if (!node) return null;

  const visitedNodes = {};

  while (node) {
    const key = node.value;

    if (visitedNodes[key]) return node;
    
    visitedNodes[key] = node;
    node = node.next;
  }
  return null;
}
