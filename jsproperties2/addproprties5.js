function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    return "Hello, " + this.name;
  };
  
  // Adding new property using prototype
  Person.prototype.age = 25;
  
  const person1 = new Person("Alice");
  console.log(person1.greet()); // Outputs: Hello, Alice
  console.log(person1.age);     // Outputs: 25
  