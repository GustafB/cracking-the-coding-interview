const LinkedList = require('./LinkedList.js');

const deleteFromMiddle = (node) => {
  const next = node.next;
  node.value = next.value;
  node.next = next.next;
}


