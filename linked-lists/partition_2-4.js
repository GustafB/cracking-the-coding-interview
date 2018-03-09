const LinkedList = require('./LinkedList.js')

//#### SWAP VALUES ####
const partitionList = (head, pivot) => {
  if (!head) return head;
  let node = head;
  let tmp;
  let minorHead = head;
  while (node) {
    if (node.value < pivot) {
      tmp = node.value;
      node.value = minorHead.value;
      minorHead.value = tmp;
      minorHead = minorHead.next;
    }
    node = node.next
  }
  return head;
}