const headerBox = document.getElementById("header-box");
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const navLinks = [...document.querySelectorAll(".nav_a")];
const darkOn = document.getElementById("ri-moon-line");
const hiddenMenuHamburger = document.getElementById("hidden-menu-hamburger");
const closeHiddenMenu = document.getElementById("ri-close-line");
const riMenuLine = document.getElementById("ri-menu-line")
const hiddenMenu = document.getElementById("hidden-menu");
const closeMenuImg = document.getElementById("close-menu-img");

/* ============ OPEN HIDDEN MENU ============= */

hiddenMenuHamburger.addEventListener("click", (evt)=> {
    hiddenMenu.classList.add("active-hidden-menu");
});
closeHiddenMenu.addEventListener("click", (evt)=> {
    hiddenMenu.classList.remove("active-hidden-menu");
});

/* ============= SCroll Reveal Animation =============== */

const sr = ScrollReveal({
    distance: "60px",
    duration: 2800,
});

sr.reveal(`.left-content-description, .socials-box, .places_to_visit, .swiper-box`, {
    origin: "top",
    interval: 100,
});

sr.reveal(`.about-left`, {
    origin: "left",
    interval: 100,
});

sr.reveal(`.about-right`, {
    origin: "right",
    interval: 100,
});

/* ======== SCROLLY CHANGE NAV BACKGROUND-COLOR ======== */

window.addEventListener("scroll", (evt)=> {
    if (window.scrollY > 0) {
        header.classList.add("header-scrolled");
        logo.classList.add("scrolled-logo");
        darkOn.classList.add("scrolled-ri-moon-line");
        riMenuLine.style.color = "#0F373F";
        navLinks.map((c)=> {
            c.classList.add("scrolled-nav_a");
        });
    } else {
        header.classList.remove("header-scrolled");
        logo.classList.remove("scrolled-logo");
        darkOn.classList.remove("scrolled-ri-moon-line");
        riMenuLine.style.color = "white";
        navLinks.map((c)=> {
            c.classList.remove("scrolled-nav_a");
        });
    }

    /* ======== GO TO TOP BUTTON REVEALL ========= */

    const goToTopButton = document.getElementById("go-to-top-button");

    if(window.scrollY > 300) {
        goToTopButton.classList.add("scrolled-go-to-top");
    } else {
        goToTopButton.classList.remove("scrolled-go-to-top");
    }
});

// window.addEventListener("scroll", (evt)=> {
//     if((window.scrollY > 0) && (screen.width < 768)) {
//         hiddenMenuFours.style.display = "none";
//         scrolledMenuFours.style.display = "block";
//     } else {
//         hiddenMenuFours.style.display = "block";
//         scrolledMenuFours.style.display = "none";
//     }
// })

/* ======== GO TO TOP BUTTON REVEALL ========= */

const goToTopButton = document.getElementById("go-to-top-button");

/* ============== Sweeper Discover ================ */

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    effect: "coverflow",
    slidesPerView: "auto",
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },

});