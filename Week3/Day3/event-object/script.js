function getRandomColor() {
    let hexChars = "0123456789ABCDEF";
  
    let randomColor = "#";
  
    for (let index = 0; index < 6; index++) {
      let randomHexCharIdx = Math.floor(Math.random() * hexChars.length);
  
      let randomHexChar = hexChars[randomHexCharIdx];
  
      randomColor += randomHexChar;
    }
  
    return randomColor;
  }
  
para_container.addEventListener("click", (evt) => {
    const clicked = evt.target;
    // if click came from elt with a my_para class change bg color else ignore
    if(clicked.classList.contains("my_para")){
        clicked.style.backgroundColor = getRandomColor();  
    } 
    
    if(clicked.tagName === "P"){
       alert(clicked.getAttribute("secret")); 
    }
});

// const paragraphs = document.querySelectorAll(".my_para");
//     paragraphs.forEach((para) => {
//         para.addEventListener("click", function (){
//         para.  
//     })
// });

// para.addEventListener("click", () => {
//     console.log("the para heard a click");
// });