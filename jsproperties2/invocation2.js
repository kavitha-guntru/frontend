function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
  }
  
  const person = { name: "John" };
  
  // Using call()
  greet.call(person, "Hello", "!");
  
  // Using apply()
  greet.apply(person, ["Hi", "?"]);
  