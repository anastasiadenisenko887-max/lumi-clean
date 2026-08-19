const header = document.getElementById("header");
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");


/* HEADER ON SCROLL */

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* MOBILE MENU */

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});


document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


/* SCROLL ANIMATIONS */

const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


elements.forEach(element => {
    observer.observe(element);
});


/* HERO ANIMATION */

window.addEventListener("load", () => {

    document.querySelectorAll(".hero .reveal").forEach(element => {
        element.classList.add("visible");
    });

});
