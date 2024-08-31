document.addEventListener('DOMContentLoaded', () => {
    // Function to toggle menu visibility
    function toggleMenu() {
        const menu = document.querySelector('.navbar');
        menu.classList.toggle('active');
    }

    // Function to toggle search form visibility
    function toggleSearch() {
        const searchForm = document.querySelector('.search-form');
        searchForm.classList.toggle('active');
    }

    // Function to toggle shopping cart visibility
    function toggleCart() {
        const cart = document.querySelector('.shopping-cart');
        cart.classList.toggle('active');
    }

    // Function to toggle login form visibility
    function toggleLogin() {
        const loginForm = document.querySelector('.login-form');
        loginForm.classList.toggle('active');
    }

    // Add event listeners for the icons
    document.getElementById('menu-btn').addEventListener('click', toggleMenu);
    document.getElementById('search-btn').addEventListener('click', toggleSearch);
    document.getElementById('cart-btn').addEventListener('click', toggleCart);
    document.getElementById('login-btn').addEventListener('click', toggleLogin);

    // Hide forms when clicking outside of them
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.icons') && !event.target.closest('.search-form')) {
            document.querySelector('.search-form').classList.remove('active');
        }
        if (!event.target.closest('.icons') && !event.target.closest('.shopping-cart')) {
            document.querySelector('.shopping-cart').classList.remove('active');
        }
        if (!event.target.closest('.icons') && !event.target.closest('.login-form')) {
            document.querySelector('.login-form').classList.remove('active');
        }
        if (!event.target.closest('.icons') && !event.target.closest('.navbar') && !event.target.closest('#menu-btn')) {
            document.querySelector('.navbar').classList.remove('active');
        }
    });

    // Close forms when clicking the escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            document.querySelector('.search-form').classList.remove('active');
            document.querySelector('.shopping-cart').classList.remove('active');
            document.querySelector('.login-form').classList.remove('active');
            document.querySelector('.navbar').classList.remove('active');
        }
    });

    function toggleSearch() {
        const searchForm = document.querySelector('.search-form');
        searchForm.classList.toggle('active');
    }

    // Add event listener for the search icon
    document.getElementById('search-btn').addEventListener('click', toggleSearch);

    // Hide the search form when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.icons') && !event.target.closest('.search-form')) {
            document.querySelector('.search-form').classList.remove('active');
        }
    });

    // Optional: Handle form submission
    document.querySelector('.search-form').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        const query = document.getElementById('search-box').value.trim();
        if (query) {
            alert(`Searching for: ${query}`); // Replace with your search logic
            // You can redirect to a search results page or perform an AJAX request here
        }
    });

    // Close the search form when clicking the escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            document.querySelector('.search-form').classList.remove('active');
        }
    });


    const cart = document.querySelector('.shopping-cart');
    const cartBtn = document.getElementById('cart-btn');

    // Function to toggle shopping cart visibility
    function toggleCart() {
        cart.classList.toggle('active');
    }

    // Event listener for the cart button
    cartBtn.addEventListener('click', toggleCart);

    // Function to update the total price of the cart
    function updateCartTotal() {
        const boxes = document.querySelectorAll('.shopping-cart .box');
        let total = 0;
        
        boxes.forEach(box => {
            const priceText = box.querySelector('.price').textContent.trim();
            const price = parseFloat(priceText.replace('₹', '').replace('/-', ''));
            const quantityText = box.querySelector('.quantity').textContent.trim();
            const quantity = parseInt(quantityText.replace('Qty : ', ''));
            
            total += price * quantity;
        });
        
        document.querySelector('.shopping-cart .total').textContent = `total : $${total.toFixed(2)}/-`;
    }

    // Function to handle item removal
    function handleRemoveItem(event) {
        const box = event.target.closest('.box');
        if (box) {
            box.remove();
            updateCartTotal();
        }
    }

    // Event listener for the remove button (trash icon)
    document.querySelectorAll('.shopping-cart .fa-trash').forEach(trashIcon => {
        trashIcon.addEventListener('click', handleRemoveItem);
    });

    // Optional: Close the cart when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.icons') && !event.target.closest('.shopping-cart')) {
            cart.classList.remove('active');
        }
    });
    
    // Initialize cart total
    updateCartTotal();

    // const loginForm = document.querySelector('.login-form');
    // const loginBtn = document.getElementById('login-btn');
    
    // // Function to toggle the visibility of the login form
    // function toggleLoginForm() {
    //     loginForm.classList.toggle('active');
    // }

    // // Event listener for the login button
    // loginBtn.addEventListener('click', toggleLoginForm);

    // Function to validate the form
    function validateForm() {
        const email = document.querySelector('.login-form input[type="email"]').value.trim();
        const password = document.querySelector('.login-form input[type="password"]').value.trim();
        
        if (email === '' || password === '') {
            alert('Please fill out both email and password fields.');
            return false;
        }

        // Here you can add further validation if needed (e.g., email format check)
        // For now, we assume that the input is valid if both fields are non-empty
        return true;
    }

    // Handle form submission
    document.querySelector('.login-form').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        if (validateForm()) {
            // Form is valid, you can handle the submission here
            // For example, send data to the server or display a success message
            alert('Login successful!'); // Replace this with actual form handling logic
        }
    });

    // Optional: Close the login form when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.login-form') && !event.target.closest('#login-btn')) {
            loginForm.classList.remove('active');
        }
    });

    const shopNowButton = document.querySelector('.home .btn');

    // Function to handle the button click
    function handleShopNowClick() {
        // For example, scroll to another section or navigate to a new page
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Optionally, you could navigate to another page
        // window.location.href = 'shop.html'; // Redirects to a shop page
    }

    // Add click event listener to the "shop Now" button
    shopNowButton.addEventListener('click', handleShopNowClick);

    // Optional: Add animation or effect when the section is in view
    const homeSection = document.getElementById('home');

    function onScroll() {
        const sectionPosition = homeSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Add a class when the section is in view
        if (sectionPosition.top < windowHeight && sectionPosition.bottom >= 0) {
            homeSection.classList.add('in-view');
        } else {
            homeSection.classList.remove('in-view');
        }
    }

    // Check if the section is in view on scroll
    window.addEventListener('scroll', onScroll);

    // Optionally, trigger the scroll function on page load to handle initial view
    onScroll();


    const readMoreButtons = document.querySelectorAll('.features .btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Optionally, redirect to a detailed page
            // You can get the href from the button or set it dynamically
            const url = this.getAttribute('href');
            if (url) {
                window.location.href = url;
            }

            // Alternatively, show a popup or expand more content
            // For example, you might want to show more details
            // Implement your logic here if needed
            alert('Read more functionality is  implemented.');
        });
    });

    // Optional: Add animation or effect when the section is in view
    const featuresSection = document.getElementById('features');

    function onScroll() {
        const sectionPosition = featuresSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Add a class when the section is in view
        if (sectionPosition.top < windowHeight && sectionPosition.bottom >= 0) {
            featuresSection.classList.add('in-view');
        } else {
            featuresSection.classList.remove('in-view');
        }
    }

    // Check if the section is in view on scroll
    window.addEventListener('scroll', onScroll);

    // Optionally, trigger the scroll function on page load to handle initial view
    onScroll();

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.box');
    
    let index = 0;

    function showSlide(i) {
        const slideCount = slides.length;
        if (i >= slideCount) {
            index = 0;
        } else if (i < 0) {
            index = slideCount - 1;
        } else {
            index = i;
        }
        const offset = -index * 100;
        sliderWrapper.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', function () {
        showSlide(index - 1);
    });

    nextBtn.addEventListener('click', function () {
        showSlide(index + 1);
    });

    // Optional: Auto slide
    setInterval(function () {
        showSlide(index + 1);
    }, 5000); 


});

   
    
    
    