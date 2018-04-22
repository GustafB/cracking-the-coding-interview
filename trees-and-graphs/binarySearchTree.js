function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

TreeNode.prototype.insert = function(val) {
  if (val < this.val && !this.left) return this.left = new TreeNode(val);
  if (val > this.val && !this.right) return this.right = new TreeNode(val);
  val > this.val ?
    this.right.insert(val) :
    this.left.insert(val);
};

TreeNode.prototype.contains = function(val) {
  if (this.val === val) return true;
  if (val < this.val && this.left) return this.left.contains(val);
  if (val > this.val && this.right) return this.right.contains(val);
  else return false;
};

// #### Depth-first traversal ####

TreeNode.prototype.inOrderTraverse = function(cb) {
  if (this.left) this.left.inOrderTraverse(cb);
  cb(this.val);
  if (this.right) this.right.inOrderTraverse(cb);
};

TreeNode.prototype.preOrderTraverse = function(cb) {
  cb(this.val);
  if (this.left) this.left.preOrderTraverse(cb);
  if (this.right) this.right.preOrderTraverse(cb);
};

TreeNode.prototype.postOrderTraverse = function(cb) {
  if (this.left) this.left.postOrderTraverse(cb);
  if (this.right) this.right.postOrderTraverse(cb);
  cb(this.val);
};

// Iterative DFS
TreeNode.prototype.iterativeTraverse = function(cb) {
  let stack = [];
  stack.push(this);
  while (stack.length) {
    let node = stack.pop();
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
    cb(node);
  }
}

// #### Breadth-first traversal ####

TreeNode.prototype.breadthFirstTraverse = function(cb) {
  let queue = [];
  queue.push(this);
  while (queue.length) {
    let node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    cb(node);
  }
}






let tree = new TreeNode(2);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(4);

tree.iterativeTraverse(a => console.log(a.val));
