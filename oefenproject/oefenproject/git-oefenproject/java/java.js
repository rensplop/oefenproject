document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });

    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Image click reveal text animation
    const images = document.querySelectorAll('.image-container img');
    images.forEach(image => {
        image.addEventListener('click', function() {
            const container = this.parentElement;
            container.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cart = [];
    
    const shopItems = document.querySelectorAll('.shop-item button');
    const cartContainer = document.querySelector('.cart-items');
    
    shopItems.forEach(button => {
        button.addEventListener('click', function() {
            const item = this.closest('.shop-item');
            const itemName = item.querySelector('h3').textContent;
            const itemPrice = item.querySelector('p').textContent;
            
            addItemToCart(itemName, itemPrice);
        });
    });
    
    function addItemToCart(name, price) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${name} - ${price}</p>
            <button>Remove</button>
        `;
        
        cartItem.querySelector('button').addEventListener('click', function() {
            cartItem.remove();
            updateCart();
        });
        
        cartContainer.appendChild(cartItem);
        updateCart();
    }
    
    function updateCart() {
        const cartItems = document.querySelectorAll('.cart-item');
        const cartCount = document.querySelector('.cart-count');
        cartCount.textContent = cartItems.length;
    }
});
