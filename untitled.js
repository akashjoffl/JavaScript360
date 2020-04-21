let example1 = 1.11;

console.log(Number.isSafeInteger(1));
console.log(Number.isSafeInteger(Infinity));
console.log(Number.isSafeInteger(Math.pow(2, 25)));
console.log(Number.isSafeInteger(example1));

// check if it's a integer