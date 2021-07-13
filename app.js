
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')
const body = document.querySelector('body')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero', {
    duration: 1.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
});

gsap.from('.animate-services', {
    scrollTrigger: '.animate-services',
    duration: 1.6,
    opacity: 0,
    x: -150,
    stagger: 0.3
});

gsap.from('.animate-img', {
    scrollTrigger: '.animate-services',
    duration: 1.6,
    opacity: 0,
    x: -200,
    stagger: 0.12
});
