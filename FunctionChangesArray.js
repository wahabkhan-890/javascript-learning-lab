const numbers = [10, 20, 30, 40, 50];

function changeLength(arr) {
    arr.length = 2;
}

changeLength(numbers);

console.log(numbers);