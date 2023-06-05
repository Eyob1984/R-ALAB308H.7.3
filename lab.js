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
    this.hamsters = hamsters;
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

  ageUp(newAge) {
    this.age = this.age + newAge;
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
// 1. Instantiate a new Person named Timmy.
const person1 = new Person('Timmy')
// 2. Age Timmy five years.
person1.age = 5;
// 3. At this point, Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times to improve his mood.
for(let i = 0; i <= 5; i++){
  person1.eat(i)
}
// 4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times.
for(let i = 0; i <= 5; i++){
  person1.exercise(i)
}
// 5. Age Timmy 9 more years.
person1.ageUp(8)


// 6.Create a Hamster named "Gus."
const hamster1 = new Hamster('', 'Gus')
// 7. Set Gus's owner to the string "Timmy."
hamster1.owner = 'Timmy'

// 8. Have Timmy "buy" Gus.

// 9. Age Timmy more 15 years.

person1.ageUp(14)
// 10. Have Timmy eat twice.
for(let i = 0; i <= 2; i++){
  person1.eat(i)
}

// 11. Have Timmy exercise twice.

for(let i = 0; i <= 2; i++){
  person1.exercise(i)
}
console.log(person1)
console.log(hamster1)