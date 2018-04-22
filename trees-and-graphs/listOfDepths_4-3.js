// List of Depths: given a binary tree, design an algorithm which creates
// a linked list of all the nodes at each depth (e.g., a tree of depth D
// will return D linked lists)

const TreeNode = require('./binarySearchTree');
const LinkedList = require('../linked-lists/LinkedList.js');

TreeNode.prototype.listDepths = function(lists = {}, depth = 0) {
  if (!this) return null;
  let list = lists[depth] || new LinkedList();
  list.addToTail(this.val);
  lists[depth] = list;
  if (this.left) this.left.listDepths(lists, depth + 1);
  if (this.right) this.right.listDepths(lists, depth + 1);
  return lists;
}
