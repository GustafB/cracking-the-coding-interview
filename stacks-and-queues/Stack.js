const Stack = function() {
  this.storage = [];
  this.size = 0;
}

Stack.prototype.push = function(data) {
  this.storage[this.size++] = data;
};

Stack.prototype.pop = function() {
  let data = null;
  if (this.size > 0) {
    data = this.storage[--this.size];
    this.storage[this.size] = null
  }
  return data;
};

Stack.prototype.peek = function() {
  return this.storage[this.size] || null;
}

Stack.prototype.isEmpty = function() {
  return this.size === 0;
}

module.exports = Stack;

