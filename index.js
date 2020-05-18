let exampleJSON = JSON.stringify({example: true, name: "Akash", id: 123});
// Object to String

console.log(typeof exampleJSON);
console.log(exampleJSON);

exampleJSON = JSON.parse(exampleJSON); // String to Object
console.log(typeof exampleJSON);
console.log(exampleJSON);