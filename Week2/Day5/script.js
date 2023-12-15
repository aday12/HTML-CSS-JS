const hobbiesArr = ["gaming", "hiking", "coding"];
console.log(hobbiesArr.includes("gaming"));
// expected: true, can you use split to reduce "" in your array?
console.log(hobbiesArr.indexOf('hiking'));
// expected: 1 finds first appearance of the specified string
console.log(hobbiesArr.indexOf('reading'));
// expected: -1, this string is not in the array
console.log(hobbiesArr.join("-"));
// expected: hobbiesArr with a "-" between elements
console.log(hobbiesArr.lastIndexOf('hiking'));
// expected: 1, if there was another instance of the hiking string at the end of the arr output would be 3 as that would be the last occurrence of hiking
console.log(hobbiesArr.pop());
// expected: coding. pops the last value of the arr off, can be an output if you use console.lot
hobbiesArr.push('reading', 'hiking', 'golf');
console.log(hobbiesArr);
// expected: hobbies arr w/ push values added to the end
console.log(hobbiesArr.shift());
//expected: gaming, this method removes the first value from the arr, that is what's being logged here
console.log(hobbiesArr);
//expected: hobbiesArr - gaming
hobbiesArr.unshift(4, 5);
console.log(hobbiesArr);
// expected: hobbiesArr w/ 4, 5 at the front
console.log(hobbiesArr.slice(2));
//expected: hobbiesArr - x values, removes # of specified indexes or given indexes if more than 1 number
hobbiesArr.splice(1, 1, "music");
console.log(hobbiesArr);
// puts new value at arr[x], removes arr[y] in relation to arr[x] (0 removes nothing, 1 removes arr[x]), adds new value "z" to arr[x]
console.log(hobbiesArr.reverse());
// expected: reversed list of hobbies