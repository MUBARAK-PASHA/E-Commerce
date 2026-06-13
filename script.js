const products = [{
        id: 1,
        name: "Headphones",
        price: 1500,
        image: "https://picsum.photos/300?1"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 2500,
        image: "https://picsum.photos/300?2"
    },
    {
        id: 3,
        name: "Shoes",
        price: 1800,
        image: "https://picsum.photos/300?3"
    },
    {
        id: 4,
        name: "Backpack",
        price: 1200,
        image: "https://picsum.photos/300?4"
    }
];

let cart = [];

const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const totalElement = document.getElementById("total");

function displayProducts() {
    productList.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>
        `;

        productList.appendChild(card);
    });
}

function addToCart(id) {

    const product = products.find(item => item.id === id);

    cart.push(product);

    updateCart();
}

function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const div = document.createElement("div");

        div.classList.add("cart-item");

        div.innerHTML = `
            <span>${item.name} - ₹${item.price}</span>

            <button
                class="remove-btn"
                onclick="removeItem(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(div);
    });

    totalElement.textContent = total;
}

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}

displayProducts();
