console.log("Script loaded!");
// 1. Loading Screen Animation
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    // Fade out effect
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1200); // 1.2 seconds wait time for premium feel
});

// 2. Navbar Scroll Effect (Adds a subtle shadow when scrolling)
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// 3. Form Validation/Alert (Basic placeholder for functionality)
document.getElementById('bookingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Our representative will contact you shortly.');
});

// 4. Smooth Scrolling for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
            // 5. Trending Locations Carousel
const container = document.getElementById('scrollContainer');

function scrollLeftBtn() {
    container.scrollBy({left: -300, behavior: 'smooth'});
}

function scrollRightBtn() {
    container.scrollBy({left: 300, behavior: 'smooth'});
}

// Auto-scroll ka logic
setInterval(() => {
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
    } else {
        container.scrollBy({left: 300, behavior: 'smooth'});
    }
}, 3000);
// Trending Locations Carousel Logic
const scrollContainer = document.getElementById('scrollContainer');

function scrollLeftBtn() {
    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRightBtn() {
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
}

// Auto-scroll functionality
setInterval(() => {
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0; // Reset to start
    } else {
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    }
}, 3000); // 3 seconds interval
        });
    });
});