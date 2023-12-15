const arr = [1, 3, 2, 4];

const found = arr.find((num) => num < 2);
console.log('find: ' + found);

const isLarger = (num) => num > 3;
console.log('findIndex: ' + arr.findIndex(isLarger));

const even = (num) => num % 2 === 0;
console.log('some: ' + arr.some(even));

arr.forEach((num) => console.log('forEach: ' + num));

const map = arr.map((i) => i * 2); // without the => you must write return
console.log('Map: ' + map);

arr.sort();
console.log('Sort: ' + arr);

const result = arr.filter((num) => num % 2 !== 0);
console.log('Filter: ' + result);