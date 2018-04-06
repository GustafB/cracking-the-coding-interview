const StackWithMin = function() {
  this._storage = [];
  this._size = 0;
  this._minStack = [];
}

StackWithMin.prototype.push = function(data) {
  this._storage.push(data);
  this._size ? 
  this._minStack.push(Math.min(this._minStack[this._size - 1], data.value)) : 
  this._minStack.push(data.value);
  this._size++;
}

StackWithMin.prototype.pop = function() {
  let data;
  if (this._size) {
    data = this._storage.pop();
    this._minStack.pop();
    this._size--;
  }
  return data;
}

StackWithMin.prototype.min = function() {
  return this._minStack[this._size - 1];
}