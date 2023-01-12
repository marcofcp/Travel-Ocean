const headerBox = document.getElementById("header-box");
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const navLinks = [...document.querySelectorAll(".nav_a")];
const darkOn = document.getElementById("ri-moon-line");
const hiddenMenuHamburger = document.getElementById("hidden-menu-hamburger");
const closeHiddenMenu = document.getElementById("ri-close-line");
const riMenuLine = document.getElementById("ri-menu-line");
const riSunLine = document.getElementById("ri-sun-line");
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

sr.reveal(`.left-content-description, .socials-box, .places_to_visit, .swiper-box, .data-box, .two-photos-experience-container, .cards-container`, {
    origin: "top",
    interval: 100,
});

sr.reveal(`.about-left, .description-video, .subscribe-description`, {
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
        riSunLine.style.color = "#0F373F";
        navLinks.map((c)=> {
            c.classList.add("scrolled-nav_a");
        });
    } else {
        header.classList.remove("header-scrolled");
        logo.classList.remove("scrolled-logo");
        darkOn.classList.remove("scrolled-ri-moon-line");
        riMenuLine.style.color = "white";
        riSunLine.style.color = "white";
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

/* =========== SECTION VÍDEO ============ */

const videoFile = document.getElementById("video-file");
const videoButton = document.getElementById("video-button");
const videoIcon = document.getElementById("video-icon");

videoButton.addEventListener("click", (evt)=> {
    if(videoFile.paused) {
        // Play video
        videoFile.play();
        // We change the icon
        videoIcon.classList.add("ri-pause-line");
        videoIcon.classList.remove("ri-play-line");
    } else {
        // Pause video
        videoFile.pause();
        // We change the icon
        videoIcon.classList.remove("ri-pause-line");
        videoIcon.classList.add("ri-play-line");
    }
});

/* ============= DARK MODE =============== */

const riMoonLine = document.getElementById("ri-moon-line");
const body = document.getElementById("body");
const about = document.getElementById("about");
const discover = document.getElementById("discover");
const titulosH2 = [...document.getElementsByTagName("h2")];
const titulosH3 = [...document.getElementsByTagName("h3")];
const changeGray = [...document.querySelectorAll(".change-gray")];
const changeFormInputBox = document.getElementById("change-back-input");
const changeWhite = document.getElementById("change-white");
const riMoonLineHiddenMenu = document.getElementById("ri-moon-line-hidden-menu");
const riSunLineHiddenMenu = document.getElementById("ri-sun-line-hidden-menu");

riMoonLine.addEventListener("click", (evt)=> {
    riMoonLine.style.display = "none";
    riSunLine.style.display = "block";
    body.style.backgroundColor = "#162528";
    about.style.backgroundColor = "#162528";
    discover.style.backgroundColor = "#162528";
    changeFormInputBox.style.backgroundColor = "#162528";
    changeWhite.style.color = "white";
    titulosH2.forEach((c)=> {
        c.style.color = "white";
    });
    titulosH3.forEach((c)=> {
        c.style.color = "white";
    });
    changeGray.forEach((c)=> {
        c.style.color = "gray";
    });
    riMoonLineHiddenMenu.style.display = "none";
    riSunLineHiddenMenu.style.display = "block";
    hiddenMenu.style.backgroundColor = "#2A2C36";
});

riSunLine.addEventListener("click", (evt)=> {
    riSunLine.style.display = "none";
    riMoonLine.style.display = "block";
    body.style.backgroundColor = "transparent";
    about.style.backgroundColor = "transparent";
    discover.style.backgroundColor = "transparent";
    changeFormInputBox.style.backgroundColor = "white";
    changeWhite.style.color = "#104146";
    titulosH2.forEach((c)=> {
        c.style.color = "#104146";
    });
    titulosH3.forEach((c)=> {
        c.style.color = "#104146";
    });
    riSunLineHiddenMenu.style.display = "none";
    riMoonLineHiddenMenu.style.display = "block";
    hiddenMenu.style.backgroundColor = "white";
});

/* ============= DARK MODE (HIDDEN MENU) =============== */

