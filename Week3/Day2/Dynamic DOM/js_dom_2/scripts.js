/*
document.getElementsByTagName(tagName) returns a list (array-like structure) of HTML elements that match the tagName.

E.g document.getElementsByTagName("p") returns a list of all <p> elements
*/

// Use document.getElementsByTagName to get all the <h1> elements on the page and store them in a h1Elements variable

// YOUR CODE GOES HERE

// h1Elements is an array-like structure. Change the content of the 2nd h1 to "It was dynamically created with JS"

// YOUR CODE GOES HERE
const h1Elements = document.getElementsByTagName("h1");
h1Elements[1].innerText = 'It was dynamically created with JS';

/*****************************************************************
DO THIS BEFORE YOU MOVE ON TO THE NEXT ACTIVITY:
Look up the methods/properties above and make sure you understand what they do
*****************************************************************/

/*
BONUS:
- Can you find another way to return a list of HTML elements by a tagName other than using the getElementsByTagName() method?
*/
// namespace?

