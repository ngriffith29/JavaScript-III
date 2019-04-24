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
var hi = {
    name: 'Nahtan',
    age: 22,
        sayName(){
            console.log(this.name)
        }
};

hi.sayName()


// code example for Implicit Binding



// Principle 3
const sayWhatsUp = obj => {
    obj.sayName = function() {
      console.log(`hey whats up ${this.name}`);
      console.log(this);
    };
  };
  const me = { name: 'Nathan' };
  const you = { name: 'Freddy' };
  sayWhatsUp(me);
  sayWhatsUp(you);
  
  // Invoke Methods on our objects
  


// code example for New Binding

// Principle 4


function weirdPerson(weirdo) {
    this.greeting = 'Hello I am weird ';
    this.greeter = weirdo;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new weirdPerson('Newman');
  const newman = new weirdPerson('Jerry');
  
  Bob.speak();
  Andy.speak();
