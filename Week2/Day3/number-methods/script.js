console.log(parseFloat("3.14159").toFixed(2));
// expected: 3.14, float allows decimals and fixed tells it which position to round at

console.log(3.14159.toPrecision(4));
// expected 3.142, rounds at specified position

console.log(typeof((27).toString()))
// converts number into a string

console.log(Math.floor(3.14159));
// expected 3, rounding down

console.log(Math.ceil(3.14159));
// expected 4, rounding up

console.log(Math.random());
// expected random num >= 0 and < 1