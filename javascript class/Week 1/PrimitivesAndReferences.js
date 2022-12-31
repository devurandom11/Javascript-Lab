/* 

- Primitive Values are Strings, Bools, Numbers, Undefined, Null, "ES6 Symbol"
- Primitive values are passed by value, not reference. IE, a copy is pasted when a variable refers to a primitive value instead of a pointer to a memroy location. This is because primitives sit on the Stack and oobjects and arrays create a pointer on the stack that points to the relevent info in the heap.
- Referenced values when- Non primitives (objects, arrays) are passed by value, like a pointer. See example 2 below.
*/

// Reference Variables with primitive values

var name = "Mike";
var name2 = name;
console.log(name2); // Mike

name = "Janet";
console.log(name2); // Mike too....

// Reference Variables with objects/arrays are reference types.
var person = {
  name: "Mike",
  age: 34,
  ethnicity: "white",
};

var person2 = person;
console.log(person2); // Mike object

person.name = "Janet";
person.age = 40;
console.log(person2); // Janet object because passed by reference like a pointer.

// How to do a shallow copy of the contents of an object into a distinct object.
var person3 = Object.assign({}, person); // This won't work if the object contains other objects/arrays... It's a shallow copy.
console.log(person3);

// How to do a deep copy of the contents of an object easily without libraries
var person4 = {
  name: "Mike",
  age: 34,
  ethnicity: "white",
}; // ROFL
