/*======================= navbar =====================*/ 

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

/*====================== Scroll Reveal =======================*/

ScrollReveal ({
    distance:'80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img , .services-container , .portfolio-box , .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-content h1, .abou-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*============================ typed ====================================*/

const typed = new Typed('.multiple-text',{
    strings: ['front-end Devoloper','web designer','Youuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})

/*============================== email js =====================================*/

