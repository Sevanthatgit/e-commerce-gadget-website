const products = [
    { name: 'Canon EOS R5', price: 3799, category: 'camera', image: 'https://via.placeholder.com/250x200?text=Canon+EOS+R5' },
    { name: 'Nikon Z7 II', price: 2999, category: 'camera', image: 'https://via.placeholder.com/250x200?text=Nikon+Z7+II' },
    { name: 'iPhone 13 Pro', price: 999, category: 'phone', image: 'https://via.placeholder.com/250x200?text=iPhone+13+Pro' },
    { name: 'Samsung Galaxy S21', price: 799, category: 'phone', image: 'https://via.placeholder.com/250x200?text=Samsung+Galaxy+S21' },
    { name: 'MacBook Pro 16"', price: 2399, category: 'laptop', image: 'https://via.placeholder.com/250x200?text=MacBook+Pro+16' },
    { name: 'ASUS ROG Zephyrus G14', price: 1499, category: 'laptop', image: 'https://via.placeholder.com/250x200?text=ASUS+ROG+Zephyrus+G14' },
    { name: 'HP Spectre x360', price: 1299, category: 'laptop', image: 'https://via.placeholder.com/250x200?text=HP+Spectre+x360' },
    { name: 'PlayStation 5', price: 499, category: 'console', image: 'https://via.placeholder.com/250x200?text=PlayStation+5' },
    { name: 'Xbox Series X', price: 499, category: 'console', image: 'https://via.placeholder.com/250x200?text=Xbox+Series+X' },
    { name: 'Nintendo Switch OLED', price: 349, category: 'console', image: 'https://via.placeholder.com/250x200?text=Nintendo+Switch+OLED' },
    { name: 'Sony A7 III', price: 1999, category: 'camera', image: 'https://via.placeholder.com/250x200?text=Sony+A7+III' },
    { name: 'Google Pixel 6 Pro', price: 899, category: 'phone', image: 'https://via.placeholder.com/250x200?text=Google+Pixel+6+Pro' },
    { name: 'Dell XPS 15', price: 1799, category: 'laptop', image: 'https://via.placeholder.com/250x200?text=Dell+XPS+15' },
    { name: 'Steam Deck', price: 399, category: 'console', image: 'https://via.placeholder.com/250x200?text=Steam+Deck' },
];

const cart = [];
const exchangeRate = 75;

function displayProducts(products) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    products.forEach(product => {
        const priceInINR = (product.price * exchangeRate).toFixed(2);
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${priceInINR}</p>
                <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

function filterProducts(category) {
    showPage('home');
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
    alert(`${productName} added to cart!`);
}

function updateCart() {
    const cartTable = document.getElementById('cartTable');
    const cartTotal = document.getElementById('cartTotal');
    let total = 0;

    while (cartTable.rows.length > 1) {
        cartTable.deleteRow(1);
    }

    cart.forEach((item, index) => {
        const row = cartTable.insertRow();
        const priceInINR = (item.price * exchangeRate).toFixed(2);
        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${priceInINR}</td>
            <td><button onclick="removeFromCart(${index})">Remove</button></td>
        `;
        total += item.price * exchangeRate;
    });

    cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function showPage(pageId) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
    document.getElementById(pageId).style.display = 'block';
}

function handleLogin() {
    alert('Login functionality would be implemented here.');
    showPage('home');
}

function handleSignup() {
    alert('Signup functionality would be implemented here.');
    showPage('home');
}

function buyNow(button) {
    // Get the product details
    const productElement = button.parentElement;
    const productName = productElement.querySelector('h3').innerText;
    const productPrice = productElement.querySelector('.product-price').innerText;

    // Simulate purchase process
    alert(`Order Successful! You have purchased ${productName} for ₹${productPrice}.`);
}

displayProducts(products);


const header = document.querySelector('header');
header.addEventListener('click', function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
});


const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
