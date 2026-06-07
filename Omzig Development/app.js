const logoImage = document.getElementById("logo");
const navbarCollapse = document.getElementById("navbarSupportedContent");
const fullLogo = logoImage?.dataset.fullLogo;
const mobileLogo = logoImage?.dataset.mobileLogo;
const mobileQuery = window.matchMedia("(max-width: 991.98px)");

function setLogoSource(src) {
  if (!logoImage || !src) return;
  logoImage.src = src;
}

function restoreLogo() {
  setLogoSource(fullLogo);
  logoImage.classList.remove("mobile-logo");
}

function applyMobileLogo() {
  if (!mobileQuery.matches) return;
  setLogoSource(mobileLogo);
  logoImage.classList.add("mobile-logo");
}

if (navbarCollapse && logoImage) {
  navbarCollapse.addEventListener("show.bs.collapse", applyMobileLogo);
  navbarCollapse.addEventListener("hide.bs.collapse", restoreLogo);

  mobileQuery.addEventListener("change", (event) => {
    if (!event.matches) {
      restoreLogo();
    }
  });
}

function initScrollFadeIns() {
  const animationTargets = document.querySelectorAll(
    [
      "#services .card",
      "#showcase .story > p",
      "#showcase .story ul",
      "#showcase .story ul *",
      "#showcase .visual",
      "#showcase .visual *",
      "#pricing > p",
      "#pricing .card",
      "#contact > p",
      "#contact .optionA",
      "#contact .optionA *",
      "#contact .optionB",
      "#contact .optionB *",
    ].join(", "),
  );

  if (!animationTargets.length) return;

  animationTargets.forEach((element) => {
    element.classList.add("fade-in");
  });

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observerInstance.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  animationTargets.forEach((element) => observer.observe(element));
}

document.addEventListener("DOMContentLoaded", () => {
  initScrollFadeIns();
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("main-nav");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
