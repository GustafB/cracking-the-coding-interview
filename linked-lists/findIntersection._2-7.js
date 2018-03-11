const LinkedList = require('./LinkedList.js');

//#### BUFFER (object) ####

const findIntersection = (headA, headB) => {
  if (!headA || !headB) return null;
  if (headA === headB) return headA;

  let nodes = {};
  let c = 0;
  let found = null;

  traverseList(headA, (node) => {
    nodes[node.value] = node;
    c++;
  });

  traverseList(headB, (node) => {
    if (nodes[node.value] === node && !found) found = node; 
  });

  return found
}

// #### EXTENDED EDITION...####
const findIntersection = (listA, listB) => {
  if (!headA || !headB) return null;
  if (headA === headB) return headA;
  
  const l1 = getLength(listA);
  const l2 = getLength(listB);
  let quick, slow;
  let diff = Math.abs(l1 - l2)

  if (diff === 0) {
    quick = listA;
    slow = listB
  } else {
    quick = l1 > l2 ? listA : listB;
    slow = l1 < l2 ? listA : listB;
  }

  while (quick && slow) {
    --diff
    if (quick === slow) return quick;
    else {
      if (diff <= -1) slow = slow.next;
      quick = quick.next;
    }
  }
  return false;
}

const getLength = (head) => {
  let l = 0;
  traverseList(head, () => {
    l++
  });
  return l;
}

const traverseList = (head, cb) => {
  let node = head;
  while (node) {
    cb(node);
    node = node.next;
  }
}
