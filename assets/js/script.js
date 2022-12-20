const headerBox = document.getElementById("header-box");
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const navLinks = [...document.querySelectorAll(".nav_a")];
const darkOn = document.getElementById("ri-moon-line");
const hiddenMenuFours = document.getElementById("hidden-menu-fours");
const riMenuLine = document.getElementById("ri-menu-line")
const hiddenMenu = document.getElementById("hidden-menu");
const closeMenuImg = document.getElementById("close-menu-img");

/* ============ OPEN HIDDEN MENU ============= */

hiddenMenuFours.addEventListener("click", (evt)=> {
    hiddenMenu.classList.add("active-hidden-menu");
});
closeMenuImg.addEventListener("click", (evt)=> {
    hiddenMenu.classList.remove("active-hidden-menu");
});

/* ============= SCroll Reveal Animation =============== */

const sr = ScrollReveal({
    distance: "60px",
    duration: 2800,
});

sr.reveal(`.left-content-description, .socials-box, .places_to_visit`, {
    origin: "top",
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
