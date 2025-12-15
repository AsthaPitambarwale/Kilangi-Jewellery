/*STICKY HEADER */
window.addEventListener("scroll", () => {
  document.body.classList.toggle("sticky", window.scrollY > 60);
});

/*FOOTER ACCORDION (MOBILE)*/
const footerHeaders = document.querySelectorAll(".footer-col h4");

footerHeaders.forEach(header => {
  header.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      header.parentElement.classList.toggle("active");
    }
  });
});

/* TESTIMONIAL SLIDER (MOBILE)*/
let testimonialIndex = 0;
const testimonialCards = document.querySelectorAll(".testimonial-card");

function showTestimonial() {
  testimonialCards.forEach(card => card.style.display = "none");

  testimonialCards[testimonialIndex].style.display = "block";

  testimonialIndex++;
  if (testimonialIndex >= testimonialCards.length) {
    testimonialIndex = 0;
  }
}

if (window.innerWidth <= 768 && testimonialCards.length) {
  showTestimonial();
  setInterval(showTestimonial, 4000);
}

/* SEARCH ICON CLICK */
const searchIcon = document.querySelector(".search i");
const searchInput = document.querySelector(".search input");

if (searchIcon) {
  searchIcon.addEventListener("click", () => {
    searchInput.focus();
  });
}
