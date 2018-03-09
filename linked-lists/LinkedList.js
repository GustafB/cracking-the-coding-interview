class LinkedList {
  constructor() {
    this.head = null;
  }

  addToTail(value) {
    let node = new Node(value);
    let next = this.head;
    if (!this.head) {
      this.head = node;
    } else {
      // Find end
      while (next.next) {
       next = next.next;
      }
      // Add new node
      next.next = node;
    }
    return node;
  }

  deleteNode(value) {
    let node = this.head;
    if (node.value == value) {
      this.head = node.next;
      return
    }
    while (node.next) {
      if (node.next.value == value) {
        node.next = node.next.next;
        return;
      }
      node = node.next;
    }
  }

  traverseList(cb) {
    let node = this.head;
    while (node.next) {
      cb(node);
      if (node.next) {
        node = node.next
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = LinkedList;