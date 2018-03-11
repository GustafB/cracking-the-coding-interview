const LinkedList = require('./LinkedList.js');

const deleteFromMiddle = (node) => {
  const next = node.next;
  // override current node with next
  node.value = next.value;
  node.next = next.next;
}


