// on load get cats from fakestoreapi
//create button for each category and put in cat_container

function createBtn(categories) {
    fetch('https://fakestoreapi.com/products/categories')
    .then((response) => {
            return response.json();
    })
    .then((categories) => {
       categories.forEach(category => {
        const btn = document.createElement("button");
        btn.textContent = category;
        btn.classList.add("category_btn");
        categories_container.appendChild(btn);
       });
    })
    .catch((err) => {
            console.log(err);
    });
};

categories_container.addEventListener("click", (e) => {

    products_container.innerHTML = ``;

    if(e.target.classList.contains("category_btn")) {
        const API_URL = `https://fakestoreapi.com/products/category/${e.target.textContent}`;
        fetch(API_URL)
            .then((response) => response.json());
            .then((products) => createProductCards(products));
            .catch((error) => {
                console.log(error);
        });
    }
});

createBtn();

// when button is clicked go to categorie's url and get its products
// create a card for each product and put them in the products_container
// update the h1 to reflect the current category


