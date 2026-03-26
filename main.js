document.addEventListener("DOMContentLoaded", () => {
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
          <img src="branding/chassis.png" alt="Chassis logo" class="collab-modal-brand-logo" />
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
    `,

    production: `
      <div class="collab-modal-header">
        <p class="collab-modal-kicker">Collaboration Overview</p>
        <h2>Saad Ramadan Production</h2>
        <p class="collab-modal-lead">
          Media production and visual storytelling that elevate campaigns and brand presence.
        </p>
      </div>

      <div class="collab-modal-body">
        <p>
          This collaboration focuses on strengthening Colart’s visual output through professional photography
          and media production. It helps transform brand ideas into stronger campaign visuals and content assets.
        </p>

        <p>
          Through this partnership, Colart is able to support clients with higher-quality visual production
          that works across social media, campaigns, launches, and branded content.
        </p>

        <div class="collab-modal-grid">
          <div class="collab-modal-block">
            <h3>What This Collaboration Supports</h3>
            <ul>
              <li>Photography for products, spaces, and campaigns</li>
              <li>Visual storytelling with stronger production quality</li>
              <li>Content creation that feels more refined</li>
              <li>Brand visuals built for marketing impact</li>
            </ul>
          </div>

          <div class="collab-modal-block">
            <h3>Why it matters</h3>
            <ul>
              <li>Stronger content quality</li>
              <li>Better storytelling</li>
              <li>More polished campaigns</li>
              <li>Higher visual standards</li>
            </ul>
          </div>
        </div>

        <div class="collab-modal-note">
          <strong>Why it works:</strong>
          strong branding needs strong visuals, and production quality directly impacts perception.
        </div>
      </div>
    `
  };

  if (collabModal) {
    const openCollabModal = (key) => {
      collabModalContent.innerHTML = collabData[key];
      collabModal.classList.add("active");
      collabModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    };

    const closeCollabModal = () => {
      collabModal.classList.remove("active");
      collabModal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    };

    collabOpenButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const key = button.getAttribute("data-collab-open");
        openCollabModal(key);
      });
    });

    collabCloseButtons.forEach((button) => {
      button.addEventListener("click", closeCollabModal);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && collabModal.classList.contains("active")) {
        closeCollabModal();
      }
    });
  }
});