const menuToggle = document.querySelector(".menu-toggle");
const body = document.body;

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".nav-panel a").forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const revealItems = document.querySelectorAll(
  ".section-heading, .service-card, .split-copy, .info-stack article, .process-card, .project-card, .coverage-card, .hiring-card, .review-card, .contact-copy, .contact-panel, .emergency-panel, .quick-contact-bar"
);

revealItems.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => observer.observe(item));
