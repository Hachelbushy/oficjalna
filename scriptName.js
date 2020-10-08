const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const navBar = document.querySelector(".navbar")
const navItems = document.querySelectorAll('.nav-item');
const navLink = document.querySelectorAll('.nav-link');
const langWrap = document.querySelector('.langWrap');


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

function toggleOff() {
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
    navLink[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active");

        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

langWrap.addEventListener('click', removeActive);

function removeActive() {
    if (!showMenu) {
        navLink.forEach(item => item.classList.remove('active'));
    }
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

sr.reveal('.animate-left-1', {
    origin: 'left',
    duration: 1300,
    distance: '25rem',
    delay: 600
})

sr.reveal('.animate-left-2', {
    origin: 'left',
    duration: 1300,
    distance: '25rem',
    delay: 900
})

sr.reveal('.animate-left-3', {
    origin: 'left',
    duration: 1300,
    distance: '25rem',
    delay: 1200
})

sr.reveal('.animate-left-4', {
    origin: 'left',
    duration: 1300,
    distance: '25rem',
    delay: 1500
})

sr.reveal('.animate-left-5', {
    origin: 'left',
    duration: 1300,
    distance: '25rem',
    delay: 1800
})

sr.reveal('.animate-bottom', {
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


// Multilanguage
const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.langWrap>a');
const smHeadingEl = document.querySelector('.smHeading');
const navLinkHomeEl = document.getElementById('navLinkHome');
const navLinkAboutEl = document.getElementById('navLinkAbout');
const navLinkServEl = document.getElementById('navLinkServ');
const navLinkConEl = document.getElementById('navLinkCont');
const aboutHeadingEl = document.getElementById('aboutHeading');
const aboutTxtEl = document.getElementById('aboutTxt');
const nameLineEl = document.getElementById('nameLine');
const aboutMainTxtEl = document.getElementById('aboutMainTxt');
const aboutMainTxtEl2 = document.getElementById('aboutMainTxt2');
const usedTechTxtEl = document.getElementById('usedTechTxt');
const myServTxtEl = document.getElementById('serviceHeading');
const servDescWDsEl = document.getElementById('servDescWDs');
const servDescWDtEl = document.getElementById('servDescWDt');
const servDescRdEl = document.getElementById('servDescRD');
const servDescSeEL = document.getElementById('servDescSE');
const servDescLdEl = document.getElementById('servDescLD');
const contactHeadingEl = document.getElementById('contactHeading');
const contactDescEl = document.getElementById('contactDesc');
const contactInfoEl = document.getElementById('contactInfo');
const contactPhoneEl = document.getElementById('contactPhone');
const contactMailEl = document.getElementById('contactMail');
const contactSendMsgEl = document.getElementById('contactSendMsg');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.on').classList.remove('on');
        el.classList.add('on');


        const attr = el.getAttribute('lang');
        smHeadingEl.textContent = data[attr].smHeading;
        navLinkHomeEl.textContent = data[attr].navLinkHome;
        navLinkAboutEl.textContent = data[attr].navLinkAbout;
        navLinkServEl.textContent = data[attr].navLinkServ;
        navLinkConEl.textContent = data[attr].navLinkCont;
        aboutHeadingEl.textContent = data[attr].aboutHeading;
        aboutTxtEl.textContent = data[attr].aboutTxt;
        nameLineEl.textContent = data[attr].nameLine;
        aboutMainTxtEl.textContent = data[attr].aboutMainTxt;
        aboutMainTxtEl2.textContent = data[attr].aboutMainTxt2;
        usedTechTxtEl.textContent = data[attr].usedTechTxt;
        myServTxtEl.textContent = data[attr].serviceHeading;
        servDescWDsEl.textContent = data[attr].servDescWDs;
        servDescWDtEl.textContent = data[attr].servDescWDt;
        servDescRdEl.textContent = data[attr].servDescRD;
        servDescSeEL.textContent = data[attr].servDescSe;
        servDescLdEl.textContent = data[attr].servDescLD;
        contactHeadingEl.textContent = data[attr].contactHeading;
        contactDescEl.textContent = data[attr].contactDesc;
        contactInfoEl.textContent = data[attr].contactInfo;
        contactPhoneEl.textContent = data[attr].contactPhone;
        contactMailEl.textContent = data[attr].contactMail;
        contactSendMsgEl.textContent = data[attr].contactSendMsg;

    });
});
const data = {
    'english': {
        'smHeading': 'Welcome To My Website',
        'navLinkHome': 'Home',
        'navLinkAbout': 'About',
        'navLinkServ': 'Services',
        'navLinkCont': 'Contact',
        'aboutHeading': 'About Me',
        'aboutTxt': 'Let me introduce you a few things about me...',
        'nameLine': 'My name is Mateusz Zakrzewski.',
        'aboutMainTxt': 'For over a year, I have been studying in the field of programming. ' +
            'I improve my competences in: JavaScript, HTML, CSS and Java. ' +
            'My goal is a permanent job that would allow me to develop ' +
            'and utilize the knowledge I have acquired. ',

        'aboutMainTxt2': 'I was employed as a project manager by the company that' +
            ' has been providing a full spectrum of telecommunications services in Norway since May 2014. ' +
            'I have five years of work experience as a team leader in companies that reach out to the international market. ' +
            'I possess a broad knowledge on the construction of fiber-optic broadband networks – FTTx. ' +
            'I am a graduate of a Norwegian school with education programme for electrical subjects. ' +
            'Norway has been my residence for over ten years.',

        'usedTechTxt': 'Technologies I use',
        'serviceHeading': 'My Services',
        'servDescWDs': 'Web design based on the client\'s vision.',
        'servDescWDt': 'Website & Email maintance.',
        'servDescRD': 'RWD is a web development approach that creates dynamic changes to the appearance of a website, depending on the screen size.',
        'servDescSe': 'Section editing based on the client\'s needs',
        'servDescLD': 'Your logo stands in for your business’s brand, whenever your customers come into contact with your business or website.',
        'contactHeading': 'Contact',
        'contactDesc': 'What can I do for you, dont know where to start? Go ahead and send me a message.',
        'contactInfo': 'Contact Info',
        'contactPhone': 'Phone',
        'contactMail': 'Email',
        'contactSendMsg': 'Message Me',
    },
    'polish': {
        'smHeading': 'Witaj Na Mojej Stronie',
        'navLinkHome': 'Strona główna',
        'navLinkAbout': 'O Mnie',
        'navLinkServ': 'Usługi',
        'navLinkCont': 'Kontakt',
        'aboutHeading': 'O Mnie',
        'aboutTxt': 'Pozwól, że przedstawię Ci kilka rzeczy o mnie...',
        'nameLine': 'Nazywam się Mateusz Zakrzewski.',
        'aboutMainTxt': 'Od przeszło roku, kształcę się w dziedzinie' +
            'programowania. Podnoszę swoje kompetencje w: JavaScript, HTML, CSS oraz Java.' +
            'Moim celem jest stała praca, która pozwoli mi wykorzystać nabytą wiedzę i rozwijać umiejętności.',

        'aboutMainTxt2': 'Obejmowałem stanowisko project managera w Norwegii, w firmie ' +
            'dostarczającej pełne spektrum usług telekomunikacyjnych. Mam pięcioletnie ' +
            'doświadczenie jako Team Leader firma wchodzących na rynek międzynarodowy. Posiadam ' +
            'szeroką wiedzę o budowie światłowodowych sieci transmisji danych – FTTx. Ukończyłem norweską ' +
            'szkołę o profilu elektrycznym. Norwegia była moim miejscem zamieszkania przez jedenaście lat.',
        'usedTechTxt': 'Wykorzystywane technologie',
        'serviceHeading': 'Moje Usługi',
        'servDescWDs': 'Projektowanie stron internetowych według wizji klienta.',
        'servDescWDt': 'Utrzymanie strony i poczty email.',
        'servDescRD': 'Tworzenie stron internetowych, których rozmiar dostosowuje się do wielkości ekranu, na' +
            'których jest wyświetlany.',
        'servDescSe': 'Edycja sekcji w opraciu o nową treść.',
        'servDescLD': 'Opracowanie logo które jest podstawowy element identyfikacji wizualnej.',
        'contactHeading': 'Kontakt',
        'contactDesc': 'Co mogę dla Ciebie zrobić, chcesz zacząć współpracę? Śmiało, daj mi znać.',
        'contactInfo': 'Informacje Kontaktowe',
        'contactPhone': 'Telefon',
        'contactMail': 'Adres mailowy',
        'contactSendMsg': 'Wyślij Wiadomość',
    }
}