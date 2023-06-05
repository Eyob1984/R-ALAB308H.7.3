// Hamster Class

class Hamster {
  constructor(owner = '', name, price){
    this.owner = owner;
    this.name = name;
    this.price = price;
  }

  wheelRun() {
    console.log('squeak squeak')
  }

  eatFood() {
    console.log('nibble nibble')
  }

  getPrice() {
    return this.price;
  }
}


// Person Class

class Person {
  constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.mood = mood;
    this.hamsters = hamster;
    this.bankAccount = bankAccount;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getWeight() {
    return this.weight
  }

  greet() {
    console.log(`My name is ${this.name}.`)
  }

  eat() {
    this.weight++;
    this.mood++;
  }

  exercise() {
    this.weight--;
  }

  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount + 10;
  }

  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood + 10;
    this.bankAccount - hamster; 

  }
}