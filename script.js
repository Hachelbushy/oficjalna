const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const navBar = document.querySelector(".navbar")
const navItems = document.querySelectorAll('.nav-item');
const navLink = menuNav.getElementsByClassName('nav-link');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menuNav.classList.add('show');
        navBar.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menuNav.classList.remove('show');
        navBar.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}

menuNav.addEventListener('click', toggleOff);

function toggleOff(){
    if (!showMenu) {
        menuBtn.classList.add('close');
        navItems.forEach(item => item.classList.add('show'));
    } else {
        menuNav.classList.remove('show');
        menuBtn.classList.remove('close');
        navItems.forEach(item => item.classList.remove('show'));
    }
}

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function() {
        const current = document.getElementsByClassName("active");

        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

$('.navbar a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body')
            .animate({
                scrollTop: $(hash).offset().top
            }, 800);
    }
});

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}

//ScrollReveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1300,
    distance: '25rem',
    delay: 600
})

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1300,
    distance: '25rem',
    delay: 600
})

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 250
})

sr.reveal('.animate-left-1',{
    origin: 'left',
    duration: 1300,
    distance: '25rem',
    delay: 600
})

sr.reveal('.animate-left-2',{
    origin: 'left',
    duration: 1300,
    distance: '25rem',
    delay: 900
})

sr.reveal('.animate-left-3',{
    origin: 'left',
    duration: 1300,
    distance: '25rem',
    delay: 1200
})

sr.reveal('.animate-left-4',{
    origin: 'left',
    duration: 1300,
    distance: '25rem',
    delay: 1500
})

sr.reveal('.animate-left-5',{
    origin: 'left',
    duration: 1300,
    distance: '25rem',
    delay: 1800
})

sr.reveal('.animate-bottom',{
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 400
})

const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(".text", {y: '0%', duration: 2, stagger: 0.25})
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5})
tl.to(".intro", {y: "-100%", duration: 1}, "-=1")
tl.fromTo(".navbar", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".animation", {opacity: 0}, {opacity: 1, duration: 1});