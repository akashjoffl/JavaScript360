let addEx = (function() {
    let total = 0;

    return function (param1) {
        return total += param1;
    }
})();

console.log(addEx(5));
console.log(addEx(10));
console.log(addEx(5));