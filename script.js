console.log("Script loaded!");

// 1. Loading Screen Animation
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1200);
    }
});

// 2. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    }
});

// 3. Form Validation
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(bookingForm);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            window.location.href = "/thank-you.html";
        } else {
            alert("Something went wrong. Please try again.");
        }
    });
}

// 4. Smooth Scrolling for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 5. Trending Locations Carousel Logic
const scrollContainer = document.getElementById('scrollContainer');

function scrollLeftBtn() {
    if (scrollContainer) scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRightBtn() {
    if (scrollContainer) scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
}

// Auto-scroll functionality
setInterval(() => {
    if (scrollContainer) {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
            scrollContainer.scrollLeft = 0;
        } else {
            scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
        }
    }
}, 3000);
function toggleMoreDestinations() {
    const hiddenCards = document.querySelectorAll('.hidden-card');
    const btn = document.getElementById('explore-more-btn');

    if (hiddenCards[0].style.display === 'none' || hiddenCards[0].style.display === '') {
        hiddenCards.forEach(card => {
            card.style.display = 'flex';
        });
        btn.innerHTML = 'Show Less <span>⬆</span>';
    } else {
        hiddenCards.forEach(card => {
            card.style.display = 'none';
        });
        btn.innerHTML = 'Explore more <span style="font-size: 18px;">➔</span>';
        document.querySelector('.destinations-section').scrollIntoView({ behavior: 'smooth' });
    }
}