document.addEventListener("DOMContentLoaded", () => {
  const productCard = document.getElementById("productCard");
  const productModal = document.getElementById("productModal");
  const closeModal = document.getElementById("closeModal");
  const modalPanel = productModal?.querySelector(".modal-panel");

  // Open modal
  if (productCard && productModal && modalPanel) {
    productCard.addEventListener("click", () => {
      productModal.classList.remove("hidden");
      // animate scale
      setTimeout(() => {
        modalPanel.classList.remove("scale-95");
        modalPanel.classList.add("scale-100");
      }, 10);
    });
  }

  // Close modal
  if (closeModal && productModal && modalPanel) {
    closeModal.addEventListener("click", () => {
      modalPanel.classList.remove("scale-100");
      modalPanel.classList.add("scale-95");
      setTimeout(() => productModal.classList.add("hidden"), 200);
    });
  }

  // Close modal when clicking outside
  if (productModal) {
    productModal.addEventListener("click", (e) => {
      if (e.target === productModal) {
        modalPanel.classList.remove("scale-100");
        modalPanel.classList.add("scale-95");
        setTimeout(() => productModal.classList.add("hidden"), 200);
      }
    });
  }

  // Mobile menu
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");

  if (menuBtn && closeBtn && mobileMenu && overlay) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-full");
      overlay.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
      overlay.classList.add("hidden");
    });

    overlay.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
      overlay.classList.add("hidden");
    });
  }

  const modal = document.getElementById("productModal");
  const closeModal1 = document.getElementById("closeModal1");

  // Modal content elements
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalCategory = document.getElementById("modalCategory");
  const modalDescription = document.getElementById("modalDescription");
  const modalPrice = document.getElementById("modalPrice");
  const modalOldPrice = document.getElementById("modalOldPrice");

  // All product cards
  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
      modalImage.src = card.dataset.image;
      modalTitle.textContent = card.dataset.title;
      modalCategory.textContent = card.dataset.category;
      modalDescription.textContent = card.dataset.description;
      modalPrice.textContent = card.dataset.price;
      modalOldPrice.textContent = card.dataset.oldprice || "";

      modal.classList.remove("hidden");
      setTimeout(() => {
        modal.querySelector(".modal-panel").classList.remove("scale-95");
        modal.querySelector(".modal-panel").classList.add("scale-100");
      }, 10);
    });
  });

  // Close modal
  closeModal1.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Close when clicking outside modal content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});

