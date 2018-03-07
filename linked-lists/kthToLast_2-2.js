const LinkedList = require('./LinkedList.js');

const returnKthToLast = (head, k) => {
  let slow = head;
  let fast = head;
  while (fast.next) {
    if (k > 0) {
      fast = fast.next;
      k--;
    } else {
      fast = fast.next;
      slow = slow.next;
    }
  }
  return slow.value;
}