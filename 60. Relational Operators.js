function booleanOperator(a, b) {
    return 'name' in a;
}

let result = booleanOperator({name: 'Akash'}, 4);
console.log(result);