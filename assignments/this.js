/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window /Global Object Binding  the value of this will be the window/console
* 2. Implicit Binding this is whatever is to the left of the dot
* 3. New Binding used in constructors this refers to the instance of that object
* 4. Explicit Binding this is when you use the call or apply method to explicitly define this
*
* write out a code example of each explanation above
*/

// Principle 1
function sayHi(hi) {
    console.log(this);
    return hi;
  }
  sayHi("Hello");
// code example for Window Binding

// Principle 2

const Obj = {
    
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Nathan');

// code example for Implicit Binding



// Principle 3
const sayNameFunc = obj => {
    obj.sayName = function() {
      console.log(`Hello my name is ${this.name}`);
      console.log(this);
    };
  };
  const me = { name: 'Ryan' };
  const you = { name: 'Freddy' };
  sayNameFunc(me);
  sayNameFunc(you);
  
  // Invoke Methods on our objects
  me.sayName();
  you.sayName();


// code example for New Binding

// Principle 4


function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();
// code example for Explicit Binding