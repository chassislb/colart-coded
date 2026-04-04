document.addEventListener("DOMContentLoaded", () => {
  /* ================= SHARED MODAL HELPERS ================= */
  const updateBodyModalState = () => {
    const hasActiveModal = document.querySelector(
      ".terms-modal.active, .collab-modal.active, .logo-modal.active, .gallery-modal.active"
    );
    document.body.classList.toggle("modal-open", !!hasActiveModal);
  };

  const openModal = (modal) => {
    if (!modal) return;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    updateBodyModalState();
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    updateBodyModalState();
  };

  const closeAllModals = () => {
    document
      .querySelectorAll(".terms-modal.active, .collab-modal.active, .logo-modal.active, .gallery-modal.active")
      .forEach((modal) => {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
      });

    updateBodyModalState();
  };

  /* ================= MENU TOGGLE ================= */
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("show");
      menuToggle.classList.toggle("active");
    });

    const navLinks = mainNav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("show");
        menuToggle.classList.remove("active");
      });
    });
  }

  /* ================= TERMS MODAL ================= */
  const termsModal = document.getElementById("termsModal");
  const termsOpenButtons = document.querySelectorAll("[data-terms-open]");
  const termsCloseButtons = document.querySelectorAll("[data-terms-close]");

  if (termsModal) {
    termsOpenButtons.forEach((button) => {
      button.addEventListener("click", () => openModal(termsModal));
    });

    termsCloseButtons.forEach((button) => {
      button.addEventListener("click", () => closeModal(termsModal));
    });

    termsModal.addEventListener("click", (event) => {
      if (
        event.target === termsModal ||
        event.target.matches("[data-terms-close]")
      ) {
        closeModal(termsModal);
      }
    });
  }

  /* ================= CONTACT FORM TO EMAIL + WHATSAPP ================= */
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", () => {
      const fullName = document.getElementById("fullName")?.value.trim() || "";
      const emailAddress = document.getElementById("emailAddress")?.value.trim() || "";
      const phoneNumber = document.getElementById("phoneNumber")?.value.trim() || "";
      const serviceNeeded = document.getElementById("serviceNeeded")?.value.trim() || "";
      const projectDetails = document.getElementById("projectDetails")?.value.trim() || "";

      const whatsappMessage = `New inquiry from the Colart website

Full Name: ${fullName}
Email Address: ${emailAddress}
Phone Number: ${phoneNumber}
Service Needed: ${serviceNeeded}

Project Details:
${projectDetails}`;

      const whatsappUrl = `https://wa.me/96170649423?text=${encodeURIComponent(whatsappMessage)}`;

      setTimeout(() => {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }, 250);
    });
  }

  /* ================= COLLABORATION MODAL ================= */
  const collabModal = document.getElementById("collabModal");
  const collabModalContent = document.getElementById("collabModalContent");
  const collabOpenButtons = document.querySelectorAll("[data-collab-open]");
  const collabCloseButtons = document.querySelectorAll("[data-collab-close]");

  const collabData = {
    chassis: `
      <div class="collab-modal-header">
        <p class="collab-modal-kicker">Collaboration Overview</p>

        <div class="collab-modal-brand">
          <img src="assets/branding/chassis.png" alt="Chassis logo" class="collab-modal-brand-logo" />
          <div>
            <h2>Chassis × Colart</h2>
            <p class="collab-modal-lead">
              Strategy, structure, design, and execution working together in one collaboration.
            </p>
          </div>
        </div>
      </div>

      <div class="collab-modal-body">
        <p>
          This collaboration brings together Colart’s creative direction with Chassis’s strategic and execution-focused approach.
          The result is a more complete service model that supports not just how a brand looks, but also how its projects are built,
          delivered, and implemented.
        </p>

        <p>
          Through this partnership, Colart handles the creative side of web design and UI/UX, while Chassis supports the technical
          and operational side through execution, front-end development, back-end development, structure, and delivery.
        </p>

        <p>
          It is a collaboration built for brands and businesses that need more than surface-level visuals.
          They need websites, systems, and digital experiences that are both well-designed and properly executed.
        </p>

        <div class="collab-modal-grid">
          <div class="collab-modal-block">
            <h3>What Colart Brings</h3>
            <ul>
              <li>Creative direction and brand-focused thinking</li>
              <li>Website design and UI/UX design</li>
              <li>Visual identity alignment across digital touchpoints</li>
              <li>Stronger presentation and user-facing experience</li>
            </ul>
          </div>

          <div class="collab-modal-block">
            <h3>What Chassis Brings</h3>
            <ul>
              <li>Execution and project structuring</li>
              <li>Front-end development</li>
              <li>Back-end development</li>
              <li>Business structure, systems thinking, and delivery support</li>
            </ul>
          </div>
        </div>

        <div class="collab-modal-note">
          <strong>Why it works:</strong>
          design and UI/UX are stronger when they are built with real execution in mind,
          and development is stronger when it starts from a clear creative vision.
        </div>

        <div class="collab-modal-actions">
          <a href="https://www.chassislb.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            Learn More About Chassis
          </a>
        </div>
      </div>
    `
  };

  if (collabModal && collabModalContent) {
    const openCollabModal = (key) => {
      if (!collabData[key]) return;
      collabModalContent.innerHTML = collabData[key];
      openModal(collabModal);
    };

    collabOpenButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const key = button.getAttribute("data-collab-open");
        openCollabModal(key);
      });
    });

    collabCloseButtons.forEach((button) => {
      button.addEventListener("click", () => closeModal(collabModal));
    });

    collabModal.addEventListener("click", (event) => {
      if (
        event.target === collabModal ||
        event.target.matches("[data-collab-close]")
      ) {
        closeModal(collabModal);
      }
    });
  }

  /* ================= LOGO MODAL ================= */
  const logoModal = document.getElementById("logoModal");
  const logoOpenButtons = document.querySelectorAll("[data-logo-open]");
  const logoCloseButtons = document.querySelectorAll("[data-logo-close]");

  if (logoModal) {
    logoOpenButtons.forEach((button) => {
      button.addEventListener("click", () => openModal(logoModal));
    });

    logoCloseButtons.forEach((button) => {
      button.addEventListener("click", () => closeModal(logoModal));
    });

    logoModal.addEventListener("click", (event) => {
      if (
        event.target === logoModal ||
        event.target.matches("[data-logo-close]")
      ) {
        closeModal(logoModal);
      }
    });
  }

  /* ================= GALLERY MODALS ================= */
  const galleryButtons = document.querySelectorAll("[data-gallery-open]");
  const galleryCloseButtons = document.querySelectorAll("[data-gallery-close]");
  const galleryModals = document.querySelectorAll(".gallery-modal");

  galleryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-gallery-open");
      const modal = document.getElementById(modalId);
      openModal(modal);
    });
  });

  galleryCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".gallery-modal");
      closeModal(modal);
    });
  });

  galleryModals.forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (
        event.target === modal ||
        event.target.matches(".gallery-modal-overlay") ||
        event.target.matches("[data-gallery-close]")
      ) {
        closeModal(modal);
      }
    });
  });

  /* ================= GLOBAL ESC CLOSE ================= */
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });
});