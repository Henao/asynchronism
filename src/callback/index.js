function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
}

// console.log(calc(2, 3, sum));

console.log(calc(16, 3, sum));


// Ejemplo 2

function date(callback) {
    console.log(new Date);
    setTimeout(function (){
        let date = new Date;
        callback(date)
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow)
}

date(printDate);