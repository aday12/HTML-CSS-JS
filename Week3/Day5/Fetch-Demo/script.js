get_products_btn.addEventListener("click", (e) => {

    fetch("https://fakestoreapi.com/products")
    .then((response) => {
        return response.json();
    })
    .then((products) => {
    createCards(products);
    })
    .catch((err) =>{
        console.log(err);
    });
});

function createCards(products) {
    products.forEach(({title, image, description}) => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.setAttribute("style", "width: 18rem")

        card.innerHTML = `
        <img src=${image} class="card-img-top"  alt=${title}>
        <div class="card-body">
          <h5 class="card-title">${title}></h5>
          <p class="card-text">${description}>.</p>
        </div>`

        products_container.appendChild(card);
    });
}