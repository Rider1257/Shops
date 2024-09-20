// Dark Mode Toggle
const toggleDarkMode = document.getElementById('toggle-dark-mode');
toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Load dark mode preference
window.onload = function() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
};

// Buy Now on WhatsApp
function buyNow(productName, price) {
    const message = `Hi, I want to buy the product ${productName}. Price: ₹${price}. Please confirm the order.`;
    const whatsappURL = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Add to Cart (localStorage)
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart.`);
}
