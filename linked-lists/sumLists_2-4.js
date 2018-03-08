const LinkedList = require('./LinkedList.js');

const sumLists = (listA, listB) => {
  const sumA = getNumber(listA.head);
  const sumB = getNumber(listB.head);
  const result = new LinkedList();
  let newSum = sumA + sumB;
  while (newSum > 0) {
    result.addToTail(Math.floor(newSum % 10))
    newSum = Math.floor(newSum / 10);
  }
  return result
}

const getNumber = (head) => {
  let node = head;
  let decimal = 1;
  let sum = 0;
  while (node) {
    sum += (decimal * node.value);
    decimal *= 10;
    node = node.next;
  }
  return sum
}