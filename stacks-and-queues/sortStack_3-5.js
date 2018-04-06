const Stack = require('./Stack.js');

const SortedStack = function(){
  this._storage = [];
  this._temp = [];
}

SortedStack.prototype.push = function(value) {
  if (this.peek() > value || this.isEmpty()) {
    this._storage.push(value);
  } else {
    // move all elements smaller than insert value to temp
    while (this.peek() && this.peek() < value) {
      this._temp.push(this._storage.pop());
    }
    // add new value to storage
    this._storage.push(value);
    // move temp values back to storage
    while (this._temp.length) {
      this._storage.push(this._temp.pop());
    }
  }
  console.log(this._storage);
}

SortedStack.prototype.pop = function() {
  return this._storage.pop();
}

SortedStack.prototype.peek = function() {
  return this._storage[this._storage.length - 1]
}

SortedStack.prototype.isEmpty = function() {
  return this._storage.length === 0;
}

