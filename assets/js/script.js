/* ========== Bottom Border Change on Nav Links ============= */

const btns = document.getElementsByClassName("nav_a");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  })
}

/* ============= SCroll Reveal Animation =============== */

const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
});

sr.reveal(`.left-content-description, .socials-box`, {
  origin: "top",
  interval: 100,
});