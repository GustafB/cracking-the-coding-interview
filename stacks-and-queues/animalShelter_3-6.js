const AnimalShelter = function() {
  this._dogs = new Queue();
  this._cats = new Queue();
  this._animalIndex = 0;
}

AnimalShelter.prototype.dequeueAny = function() {
  const cat = this._cats.peek();
  const dog = this._dogs.peek();
  if (cat && dog && cat.age < dog.age) return this.dequeueCat();
  else if (dog && cat && dog.age < cat.age) return this.dequeueDog();
  else if (!cat && dog) return this.dequeueDog();
  else if (!dog && cat) return this.dequeueCat();
  else return null;
}

AnimalShelter.prototype.dequeueCat = function() {
  return this._cats.dequeue();
}

AnimalShelter.prototype.dequeueDog = function() {
  return this._dogs.dequeue();
}

AnimalShelter.prototype.enqueue = function(animal) {
  const type = '_' + animal._type + 's';
  animal.age = this._animalIndex++;
  this[type].enqueue(animal);
}


const Queue = function() {
  this._storage = [];
}

Queue.prototype.enqueue = function(value) {
  this._storage.push(value);
}

Queue.prototype.dequeue = function() {
  return this._storage.shift();
}

Queue.prototype.peek = function() {
  return this._storage[0];
}

const Animal = function(type, name) {
  this._type = type;
  this._name = name;
}
