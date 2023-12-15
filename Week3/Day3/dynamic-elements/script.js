// grab user input, create a button that has that text inside and clear the input field

document.getElementById("user_input_form").addEventListener("submit", function (e) {
    // prevents default behavior of the eventListener
    e.preventDefault();
  
    // gets userInput from the dom
    const text = document.getElementById("userInput").value;
    // set user input to ""
    user_input_form.reset();

    // create a div element in the dom referred to here as the card var
    const card = document.createElement("div");
    // set background color to an rgb value using a random num generator resulting in a value of 0 thru max
    card.style.backgroundColor = `rgb(${getRandomColor(255
        )}, ${getRandomColor(255)}, ${getRandomColor(255)})`;

    const para = document.createElement("p");
    para.textContent = text;
    card.appendChild(para);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete_btn");
    card.appendChild(deleteBtn);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit_btn");
    card.appendChild(editBtn);
    
    cards_container.appendChild(card);
});

cards_container.addEventListener("click", (e) =>{
    const clicked = e.target;

    if(clicked.classList.contains("delete_btn")){
            e.target.style.backgroundColor = `rgb(${getRandomColor(255
        )}, ${getRandomColor(255)}, ${getRandomColor(255)}`;
        clicked.parentElement.remove();
    } 
    
    if(clicked.classList.contains("edit_btn")){
        // prompt user to set new p inside of the parentElement
        const paraElt = clicked.previousSibling.previousSibling;
        let newUserInput = prompt("Enter new text", paraElt.textContent);

        if (newUserInput && newUserInput !== paraElt.textContent){
            newUserInput = newUserInput.trim();
            console.log(newUserInput);
            clicked.previousSibling.previousSibling.textContent = newUserInput;
        }
    }
});

function getRandomColor(max) {
  return Math.floor(Math.random() * max);
}