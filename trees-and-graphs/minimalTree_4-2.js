// Minimal Tree: Given a sorted array with unique integers elements,
// write an algorithm to create a binary search tree with minimal height

const TreeNode = require('./binarySearchTree.js');


// Insert array into an existing tree
const minimalHeightInsertion = (values, tree, left = 0, right = values.length) => {
  if (left > right) return tree;
  let mid = Math.floor((left + right) / 2);
  if (!tree.val) {
    tree.val = values[mid];
  } else {
    tree.insert(values[mid]);
  }
  minimalHeightInsertion(values, tree, left, mid - 1);
  minimalHeightInsertion(values, tree, mid + 1, right);
};


// Create a minimal BST from scratch
const createMinimalBST = (values, left = 0, right = values.length) => {
  if (left >= right) return;
  let mid = Math.floor((left + right - 1) / 2);
  let node = new TreeNode(values[mid]);
  node.left = createMinimalBST(values, left, mid);
  node.right = createMinimalBST(values, mid + 1, right);
  return node;
};
