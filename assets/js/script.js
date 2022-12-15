/* ============ OPEN HIDDEN MENU ============= */

const hiddenMenuFours = document.getElementById("hidden-menu-fours");
const hiddenMenu = document.getElementById("hidden-menu");
const closeMenuImg = document.getElementById("close-menu-img");

hiddenMenuFours.addEventListener("click", ()=> {
    hiddenMenu.classList.add("active-hidden-menu");
});
closeMenuImg.addEventListener("click", (evt)=> {
    hiddenMenu.classList.remove("active-hidden-menu");
});

/* ========== Bottom Border Change on Nav Links ============= */

const btns = document.getElementsByClassName("nav_a");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    })
};

/* ========== Bottom Border Change on HIDDEN Nav Links ============= */

const btns_hidden = document.getElementsByClassName("nav_hidden");

/* ============= SCroll Reveal Animation =============== */

const sr = ScrollReveal({
    distance: "60px",
    duration: 2800,
});

sr.reveal(`.left-content-description, .socials-box`, {
    origin: "top",
    interval: 100,
});