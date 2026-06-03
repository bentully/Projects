const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const navClose = document.getElementById("navClose");
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
}

const navLinks = document.querySelectorAll("#navMenu .navSelect");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Parallax scroll with requestAnimationFrame for optimized performance
let ticking = false;
const parallaxSections = [
  { element: document.querySelector("#barbers") },
  { element: document.querySelector("#about") },
  { element: document.querySelector("#gallery") },
  { element: document.querySelector("#contact") },
];

function updateParallax() {
  parallaxSections.forEach((section) => {
    if (!section.element) return;

    const scrollPosition = window.scrollY;
    const sectionTop = section.element.offsetTop;
    const distance = scrollPosition - sectionTop;

    section.element.style.backgroundPosition = `center ${distance * 0.4}px`;
  });
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
});

// Service info overlays (data-target -> corresponding info div)
const infoButtons = document.querySelectorAll(".info-Btn");
const infoBoxes = ["info1", "info2", "info3", "info4", "info5"].map((id) =>
  document.getElementById(id),
);

function hideAllInfoBoxes() {
  infoBoxes.forEach((box) => {
    if (!box) return;
    box.classList.remove("show");
  });
}

function showInfoBox(targetId, button) {
  const box = document.getElementById(targetId);
  if (!box) return;

  hideAllInfoBoxes();

  // Temporarily show to measure dimensions
  box.style.display = "block";
  box.style.top = "0px";
  box.style.left = "0px";

  const rect = button.getBoundingClientRect();
  const boxRect = box.getBoundingClientRect();

  let top = rect.top + rect.height / 2 - boxRect.height / 2;
  let left = rect.right + 10;

  if (left + boxRect.width > window.innerWidth - 12) {
    left = rect.left - boxRect.width - 10;
  }

  if (left < 12) {
    left = 12;
  }

  if (top < 12) {
    top = 12;
  }

  if (top + boxRect.height > window.innerHeight - 12) {
    top = window.innerHeight - boxRect.height - 12;
  }

  box.style.top = `${top}px`;
  box.style.left = `${left}px`;
  box.classList.add("show");
}

infoButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const targetId = button.getAttribute("data-target");
    if (!targetId) return;

    const targetBox = document.getElementById(targetId);
    if (!targetBox) return;

    if (targetBox.classList.contains("show")) {
      hideAllInfoBoxes();
      return;
    }

    showInfoBox(targetId, button);
  });
});

// close when clicking outside the active tooltip
document.addEventListener("click", (event) => {
  const clickedInInfo = event.target.closest(
    "#info1, #info2, #info3, #info4, #info5",
  );
  const clickedButton = event.target.closest(".info-Btn");
  if (!clickedInInfo && !clickedButton) {
    hideAllInfoBoxes();
  }
});

window.addEventListener("resize", hideAllInfoBoxes);
