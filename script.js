window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 3000);
});

const hero = document.querySelector(".hero");

const images = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg",
    "images/hero4.jpg",
    "images/hero5.jpg",
    "images/hero6.jpg"
];

let current = 0;

function changeBackground() {
    hero.style.backgroundImage = `url('${images[current]}')`;
    current++;

    if (current >= images.length) {
        current = 0;
    }
}

changeBackground();

setInterval(changeBackground, 5000);

const buttons = document.querySelectorAll(".trip-type button");

buttons.forEach(button => {

button.addEventListener("click",function(){

buttons.forEach(btn=>btn.classList.remove("active"));

this.classList.add("active");

});

});