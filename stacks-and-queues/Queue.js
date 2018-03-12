const Queue = function() {
  this._storage = [];
  this._size = 0;
  this._first = 0;
};

Queue.prototype.enqueue = function(data) {
  this._storage[this._size++] = data;
}

Queue.prototype.dequeue = function() {
  let data = null;
  if (this._size) {
    data = this._storage[this._first];
    this._storage[this._first++] = null;
    this._size--;
  }
  return data;
}

Queue.prototype.peek = function() {
  return this._storage[this._first];
}

Queue.prototype.isEmpty = function() {
  return this._size === 0;
}

module.exports = Queue;
