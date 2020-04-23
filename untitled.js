let example1 = [true, false, 1, 2, 3, 4, 5];
let iterator = example1.entries();
//console.log(iterator)

for(let i = 0; i < example1.length; i++){
    let result = iterator.next().value;
    console.log(result);
}


// making an array into objects
// 38. entries()