const Stack = function() {
  this._storage = [];
}

Stack.prototype.push = function(value) {
  this._storage.push(value);
}

Stack.prototype.pop = function() {
  return this._storage.pop();
}

Stack.prototype.peek = function() {
  return this._storage[this._storage.length - 1];
}


const StackQueue = function() {
  this._queue = new Stack();
  this._temp = new Stack();
  this._size = 0;
}

StackQueue.prototype.enqueue = function(value) {
  this._queue.push(value);
}

StackQueue.prototype.dequeue = function() {
  let item;
  while(this._queue.peek()){
    this._temp.push(this._queue.pop());
  }
  item = this._temp.pop();
  while(this._temp.peek()) {
    this._queue.push(this._temp.pop());
  }
  return item;
}
