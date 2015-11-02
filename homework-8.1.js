// JavaScript File
/*
var MYAPP = MYAPP || {};
MYAPP.event = {};
*/
/*
MYAPP.commonMethod = {
  
  regExForName: ""
  
  regExForPhone: ""
    validateName: function(name){
        
validatePhoneNo: function(phoneNo){

  }
}

MYAPP.event = {
    addListener: function(el, type, fn) {
    }
     removeListener: function(el, type, fn) {
     }
     
     getEvent: function(e) {
     }

MYAPP.event.addListener("yourel", "type", callback);
*/

/*
console.log(Math.random());
*/

/*
var Person = function () {};

var person1 = new Person();
var person2 = new Person();
*/

/*
var Person = function () {
  console.log('instance created');
};

var person1 = new Person();
var person2 = new Person();
*/

/*
var Person = function (firstName) {
  this.firstName = firstName;
  console.log('Person instantiated');
};

var person1 = new Person('Giang');
var person2 = new Person('James');

console.log('person1 is ' + person1.firstName);
console.log('person2 is ' + person2.firstName); 
*/

/*
var Person = function (firstName) {
  this.firstName = firstName;
};

Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.firstName);
};

var person1 = new Person("Giang");
var person2 = new Person("Dillion");

person1.sayHello();
person2.sayHello();
*/

/*
var Person = function (firstName) {
  this.firstName = firstName;
};

Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.firstName);
};

var person1 = new Person("Giang");
var person2 = new Person("Bob");
var helloFunction = person1.sayHello;

person1.sayHello()

person2.sayHello();

helloFunction(); 

console.log(helloFunction === person1.sayHello);

console.log(helloFunction === Person.prototype.sayHello);

helloFunction.call(person1);
*/

/*
var Person = function(firstName) {
  this.firstName = firstName;
};

Person.prototype.walk = function(){
  console.log("I am walking!");
};

Person.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName);
};


function Student(Giang, math) {
  Person.call(this, Giang);
  
    this.subject = math;
};

Student.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName + ". I'm studying "
              + this.subject + ".");
};

Student.prototype.sayGoodBye = function(){
  console.log("Goodbye!");
};

var student1 = new Student("Janet", "Applied Physics");
student1.sayHello();
student1.walk();
student1.sayGoodBye();

console.log(student1 instanceof Person)
console.log(student1 instanceof Student);
*/ 
/*
function createObject(proto) {
    function ctor() { }
    ctor.prototype = proto;
    return new ctor();
}
Student.prototype = createObject(Person.prototype);
*/

/*
var Person = function(firstName) {
  if (this instanceof Person) {
    this.firstName = firstName;
  } else {
    return new Person(firstName);
  }
}
*/



/*
var foo = function () {};

console.log('foo is a Function: ' + (foo instanceof Function));

console.log('foo.prototype is an Object: ' + (foo.prototype instanceof Object));
*/
