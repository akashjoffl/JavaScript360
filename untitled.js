let example1 = [1, 2, 3, 4, 5, 5, 6, 5];

 let example2 = example1.map((element) => {
     if (element < 3){
         return element * 5;
     }
     return element + 2; 
})

// let example2 = [];
// example1.forEach((element) => {
//     example2.push(element + 2);
// })

console.log(example2);

// helps to create new array based off an existing old array    
// 49. map()



