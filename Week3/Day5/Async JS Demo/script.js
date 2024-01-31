btn.addEventListener("click", () => {
    const msg = sayHi("Aaron");
    msg.then((msg) => {
        para_text_container.textContent = msg;
    });

    const x = 5

    console.log(x);
})

function sayHi(name) {

    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve( `hello, ${name}`);
        }, 3000)
    });
}