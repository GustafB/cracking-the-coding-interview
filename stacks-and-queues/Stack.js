const Stack = function() {
  this.storage = [];
  this.size = 0;
}

Stack.prototype.push = function(data) {
  this.storage.unshift(data);
  this.size++;
};

Stack.prototype.pop = function() {
  let data = null;
  if (this.size) {
    data = this.storage.shift();
    this.size--;
  }
  return data;
};

Stack.prototype.peek = function() {
  return this.storage[0] || null;
}

Stack.prototype.isEmpty = function() {
  return this.size === 0;
}

module.exports = Stack;