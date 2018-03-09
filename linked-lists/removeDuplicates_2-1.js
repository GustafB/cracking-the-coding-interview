const LinkedList = require('./LinkedList.js');
const Node = require(./Lis)

// #### Remove duplicates in an unordered list (with buffer) ####
const removeDuplicates = (head) => {
  const seen = {};
  let node = head;
  while (node.next) {
    const val = node.next.value;
    if (seen[val]) {
      node.next = node.next.next;
    }
    seen[val] = true;
    node = node.next;
  }
  return head;
}


// #### Remove duplicates in a sorted list ####
const removeDuplicates = (head) => {
  let node = head;
  let runner = head;
  let i = 0;
  while (node) {
    if (node.value === node.next.value) {
      runner = node.next;
      // locate next unique value
      while (runner) {
        if (runner.value !== node.value) {
          break;
        }
        runner = runner.next;
      }
      // reassign node and skip forward
      node.next = runner;
    }
    node = node.next;
  }
  return head;
}