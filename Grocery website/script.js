let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}    

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}    

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}    

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');

}
    


window.onscroll = () =>
    {
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
        

    }



      // script.js

// Initialize cart
let cart = [];

// Function to add product to cart
function addToCart(product) {
    // Check if product already exists in cart
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }
    updateCartUI();
}

// Function to update cart UI
function updateCartUI() {
    const cartContainer = document.querySelector('.shopping-cart');
    cartContainer.innerHTML = ''; // Clear existing cart items

    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('box');
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <i class="fa fa-trash" onclick="removeFromCart(${item.id})"></i>
            <div class="content">
                <h3>${item.name}</h3>
                <span class="price"> ₹${item.price}/-</span>
                <span class="quantity">Qty : ${item.quantity}</span>
            </div>
        `;
        
        cartContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    const totalElement = document.createElement('div');
    totalElement.classList.add('total');
    totalElement.textContent = `Total : ₹${total} /-`;
    
    cartContainer.appendChild(totalElement);

    const checkoutButton = document.createElement('a');
    checkoutButton.href = '#';
    checkoutButton.classList.add('btn');
    checkoutButton.textContent = 'Checkout';

    cartContainer.appendChild(checkoutButton);
}

// Function to remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.product-slider .box').forEach((box) => {
    const addToCartButton = box.querySelector('.btn');
    const productId = box.getAttribute('data-id');
    
    addToCartButton.addEventListener('click', () => {
        const product = {
            id: productId,
            name: box.querySelector('h1').textContent,
            image: box.querySelector('img').src,
            price: parseFloat(box.querySelector('.price').textContent.replace('₹', '').replace('/-', '')),
            quantity: 1
        };
        addToCart(product);
    });
});


