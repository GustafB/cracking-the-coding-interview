const Queue = function() {
  this.storage = [];
  this.size = 0;
  this.first = 0;
};

Queue.prototype.enqueue = function(data) {
  this.storage[this.size++] = data;
  console.log(this.storage)
}

Queue.prototype.dequeue = function() {
  let data = null;
  if (this.size) {
    data = this.storage[this.first];
    this.storage[this.first++] = null;
    this.size--;
  }
  return data;
}

Queue.prototype.peek = function() {
  return this.storage[this.first];
}

Queue.prototype.isEmpty = function() {
  return this.size === 0;
}

