/*
element.setAttribute(attribute, value) changes the attribute value of an HTML element

In <p id="myPara" class="centered">, id and class are attributes
In <img src="..." alt="...">, src and alt are attributes

E.g
let myImage = document.getElementById("profile_photo");
myImage.setAttribute("src", "https://placehold.it/200/200");

The above lines of code will set the src attribute on the <img> with the id profile_photo to https://placehold.it/200/200

myElement.src = "https://placehold.it/200/200"; would also do the same as myElement.setAttribute("src", "https://placehold.it/200/200");

*/

// Prompt the user to tell you their name and put their name with a greeting in the <h1>.
// YOUR CODE GOES HERE
let userName = prompt('Enter your name');
let greetingName = document.getElementById("greeting_name");
greetingName.innerText = (userName);

// Make the src attribute of your <img> be https://media.giphy.com/media/26xBwdIuRJiAIqHwA/giphy.gif
// YOUR CODE GOES HERE
let myImage = document.getElementById("greeting_gif");
myImage.setAttribute("src", "https://media.giphy.com/media/26xBwdIuRJiAIqHwA/giphy.gif");

// In the styles.css, a class named "container" has been defined.
// Add a class attribute of "container" to the #greeting div to style
// YOUR CODE GOES HERE
let box = document.querySelector("#greeting");
box.classList.add("container");

/*****************************************************************
DO THIS BEFORE YOU MOVE ON TO THE NEXT ACTIVITY:
Look up the methods/properties above and make sure you understand what they do
*****************************************************************/
