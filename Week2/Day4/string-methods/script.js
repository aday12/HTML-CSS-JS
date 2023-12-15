// string concat
let firstName = "Aaron";
let lastName = "Day";
let fullName = ` ${firstName} ${lastName}`;
// adds one string to another

// includes
const name = "Aaron";
console.log(name.toUpperCase().includes("N"));
//checks if string contains a string given by dev, toUpperCase() sets entire string toUpperCase, toLowerCase does the opposite

//index of
const story = "One fish two fish red fish blue fish";
const term = 'fish';
const indexOfFirst = story.indexOf(term);

console.log(`The index of the first "${term}" is ${indexOfFirst}`);
// expected: 4, tells you at which char the index first appears, can add a number to indexOfFirst to select the second/third+ occurrence
console.log(`Index of the last ${term} is ${story.lastIndexOf(term)}`);
// expected: 32, tell you where the last occurrence of a specified substring is
console.log(story.replace("One", "three"))
// expected "Three fish...", replaces a specified value with a specified value after a ","
console.log(story.slice(1));
// expected: "ne fish..." removed specified char from string

