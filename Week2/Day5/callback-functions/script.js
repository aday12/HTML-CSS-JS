function greet(recipient, sayHello) {
    console.log(`Mr/miss ${recipient}, ${sayHello()}`);
}

greet("Titus", () =>{
    return "Veni, Vidi, Vici";
})

greet("Oshay", () => {
    return "Bon apres-midi";
})