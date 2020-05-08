function ternaryOperator(a, b) {
    let example = a > b ? 'a' : (2 > 10) ? 'Yes' : 'No';
    return example;
}

let result = ternaryOperator(3, 10);
console.log(result);