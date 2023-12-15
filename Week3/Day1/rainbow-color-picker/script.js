// let rainbowColor = prompt("Input a rainbow color (roygbiv)");
let randHex = Math.floor(Math.random() * 16).toString(16);
let randHex2 = Math.floor(Math.random() * 16).toString(16);
let randHex3 = Math.floor(Math.random() * 16).toString(16);

function displayColor() {
const userInput = userInput.trim().toLowerCase();

    if(userInput !== null){
        if (rainbowColor == 'red'){
            alert('#FF0000');
        } else if (rainbowColor == 'orange'){
            alert('#FFA500');
        } else if (rainbowColor == 'yellow'){
            alert('#FFFF00');
        } else if (rainbowColor == 'green'){
            alert('#00FF00');
        } else if (rainbowColor == 'blue'){
            alert('#0000FF');
        } else if (rainbowColor == 'indigo'){
            alert('#4B0082');
        } else if (rainbowColor == 'violet'){
            alert('#9400D3');
        } else if (rainbowColor == 'random'){
            alert('#' + randHex + randHex2 + randHex3);
        } else{
            alert('invalid input please enter: "roygbiv" or "random"')
        }
    }

}

