let example1 = [1, 2, 3, 4, 5];

/* for (let i = 0; i < example1.length; i++) {
    console.log(example1[i]) 
} */

example1.forEach((element, index, array) => {
    console.log(element);
    console.log(index); // this is optional 
    console.log(array); // this is optional 
})

// callback function iterate through entire array
// 44. forEach()
