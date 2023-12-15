function range(start, end, step = 1) {
    let result = [];

    for (let i = start; i <= end; i ++) {
      result.push(i);
    } 
    return result;
  }
  
  function sum(numbers) {
    return numbers.reduce((total, current) => total + current, 0);
  }
  
  console.log(range(1, 10)); // expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(sum(range(1, 10))); // expected: 55