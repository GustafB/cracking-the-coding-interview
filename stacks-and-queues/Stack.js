const Stack = function() {
  this._storage = [];
  this._size = 0;
}

Stack.prototype.push = function(data) {
  this._storage[this._size++] = data;
};

Stack.prototype.pop = function() {
  let data = null;
  if (this._size > 0) {
    data = this._storage[--this._size];
    this._storage[this._size] = null
  }
  return data;
};

Stack.prototype.peek = function() {
  return this._storage[this._size] || null;
}

Stack.prototype.isEmpty = function() {
  return this._size === 0;
}

module.exports = Stack;

