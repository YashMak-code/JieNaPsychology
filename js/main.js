console.log("Website loaded successfully.");
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(
    ".section, .card, .service-card, .team-profile, .contact-main-card, .contact-side-card, .timeline-item, .issue-item"
  );

  revealElements.forEach((element, index) => {
    element.classList.add("reveal");

    if (index % 3 === 1) {
      element.classList.add("reveal-delay-1");
    }

    if (index % 3 === 2) {
      element.classList.add("reveal-delay-2");
    }
  });

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });

  const floatingContact = document.getElementById("floatingContact");

  if (floatingContact) {
    const toggleButton = floatingContact.querySelector(".floating-contact-toggle");

    toggleButton.addEventListener("click", () => {
      const isOpen = floatingContact.classList.toggle("is-open");

      toggleButton.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("has-floating-contact-open", isOpen);
    });
  }
});