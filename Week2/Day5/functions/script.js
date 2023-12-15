// Function declarations
debugger;
function func1(n1, n2){
    return n1+n2
}

console.log(func1(10, 20));


//function expressions
const func2 = function(n1, n2){
    return n1 + n2
}

console.log(func2(10, 20));

// arrow functions

const func3 = (n1, n2) => {
    return n1 + n2;
};

const func4 = (n1, n2) => n1 + n2;

const squared = n => n * n;