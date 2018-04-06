const Stack = function() {
  this._storage = [];
}

Stack.prototype.push = function(value) {
  this._storage[this._storage.length] = value;
}

Stack.prototype.pop = function() {
  this._storage.pop();
}

Stack.prototype.isEmpty = function() {
  return !this._storage.length;
}

const StackOfPlates = function(limit) {
  this._stacks = [];
  this._size = 0;
  this._limit = limit;
}

StackOfPlates.prototype.push = function(value) {
  const index = this._size < this._limit ? 0 : Math.floor(this._size / this._limit);
  const stack = this._stacks[index] || new Stack();
  stack.push(value);
  this._stacks[index] = stack;
  this._size++;
}

StackOfPlates.prototype.pop = function() {
  const index = this._size < this._limit ? 0 : Math.floor((this._size - 1) / this._limit);
  const stack = this._stacks[index];
  if (stack.isEmpty()) return null;
  this._size--;
  return stack.pop();
}
