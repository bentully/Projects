const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  const barbersSection = this.document.querySelector(".barbers");

  if (!barbersSection) return;

  const scrollPosition = window.scrollY;
  const sectionTop = barbersSection.offsetTop;

  const distance = scrollPosition - sectionTop;

  barbersSection.style.backgroundPosition = `center ${distance * 0.4}px`;
});

window.addEventListener("scroll", function () {
  const aboutSection = this.document.querySelector(".about");

  if (!aboutSection) return;

  const scrollPosition = window.scrollY;
  const sectionTop = aboutSection.offsetTop;

  const distance = scrollPosition - sectionTop;

  aboutSection.style.backgroundPosition = `center ${distance * 0.4}px`;
});

window.addEventListener("scroll", function () {
  const gallerySection = this.document.querySelector(".gallery");

  if (!gallerySection) return;

  const scrollPosition = window.scrollY;
  const sectionTop = gallerySection.offsetTop;

  const distance = scrollPosition - sectionTop;

  gallerySection.style.backgroundPosition = `center ${distance * 0.4}px`;
});

window.addEventListener("scroll", function () {
  const contactSection = this.document.querySelector(".contact");

  if (!contactSection) return;

  const scrollPosition = window.scrollY;
  const sectionTop = contactSection.offsetTop;

  const distance = scrollPosition - sectionTop;

  contactSection.style.backgroundPosition = `center ${distance * 0.4}px`;
});
