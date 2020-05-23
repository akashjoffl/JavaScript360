function add() {
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        array.push(arguments[i]);
    }
    console.log(array);
}

add(3, 555, 69); 