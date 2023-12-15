const userInput = prompt("How old are you?")

if (userInput == null){
    alert("Please enter your age")
} else if (isNaN(parseFloat(userInput)) === true) {
    alert("Enter a number for your age")
} else{ 
    const age = parseFloat(userInput);

    if(age == 0 || age == 1){
        alert("baby");
    } else if (age == 2){
        alert("toddler");
    } else if (age == 3 || age == 4){
        alert("preschooler")
    } else if (age < 12){
        alert("gradeschooler");
    } else if (age < 18){
        alert("teen");
    } else if (age < 21){
        alert("young adult");
    } else {
        alert("adult");
    } 
}