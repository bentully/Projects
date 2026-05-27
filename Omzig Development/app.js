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
