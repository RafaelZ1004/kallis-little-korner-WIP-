// code for responsive navbar
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});
document.querySelectorAll(".mobile-nav a, .mobile-icons button").forEach(item => {
  item.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});

// CLAY CAROUSEL
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');
  if (carousels.length > 0) {
    carousels.forEach(carousel => {
      const track = carousel.querySelector('.carousel-track');
      const slides = Array.from(track.children);
      const nextButton = carousel.querySelector('.next');
      const prevButton = carousel.querySelector('.prev');
      let currentIndex = 0;

      function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
      }

      if (nextButton) nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
      });

      if (prevButton) prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
      });

      setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
      }, 5000);
    });
  }
});

// POP-UP FORM 
const openBtn = document.getElementById("send-request");
const popup = document.getElementById("popupForm");
const closeBtn = document.querySelector(".close-btn");

if (openBtn && popup && closeBtn) {
    openBtn.addEventListener("click", () => popup.style.display = "flex");
    closeBtn.addEventListener("click", () => popup.style.display = "none");

    window.addEventListener("click", e => {
        if (e.target === popup) popup.style.display = "none";
    });
}
// Code for going to the products.html based on what category is pressed
document.querySelectorAll('.img-container').forEach(card => {
    card.addEventListener('click', () => {
        const cat = card.dataset.category;
        window.location.href = `products.html?category=${cat}`;
    });
});

const wishlistBtn = document.getElementById("wishlist-btn");
const wishlistPanel = document.getElementById("wishlist");
const closeWishlist = document.getElementById("close-wishlist");

if (wishlistBtn) {
    wishlistBtn.addEventListener("click", () => {
        wishlistPanel.classList.add("active");
        updateWishlistUI();
    });
}

closeWishlist.addEventListener("click", () => {
    wishlistPanel.classList.remove("active");
});

function goToCategory(cat) {
  window.location.href = `products.html?category=${encodeURIComponent(cat)}`;
}

function getWishlist() {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function saveWishlist(list) {
    localStorage.setItem("wishlist", JSON.stringify(list));
}

function updateWishlistUI() {
    const wishlistContainer = document.getElementById("item-container");
    if (!wishlistContainer) return;

    const wishlistItems = getWishlist();

    wishlistContainer.innerHTML = "";

    if (wishlistItems.length === 0) {
        wishlistContainer.innerHTML = `
            <p class="empty-message">Your wishlist is empty</p>
        `;
        return;
    }

    wishlistItems.forEach(item => {
        wishlistContainer.innerHTML += `
            <div class="item-card">
                <div class="item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-card-text">
                        <p class="product-choice">${item.category || ""}</p>
                        <h3 class="product-name">${item.name}</h3>
                        <p class="product-price">${item.price}</p>
                    </div>
                </div>
                <div class="item-card-buttons">
                    <button>Add to Cart</button>
                    <button class="remove-item" data-name="${item.name}">Remove</button>
                </div>
            </div>
        `;
    });
}

// Remove item from wishlist directly inside the panel
document.addEventListener("click", e => {
    const removeBtn = e.target.closest(".remove-item");
    if (!removeBtn) return;

    const name = removeBtn.dataset.name;

    let list = getWishlist();
    list = list.filter(item => item.name !== name);
    saveWishlist(list);

    updateWishlistUI();

    // If this page has heart buttons, update them too
    document.querySelectorAll(".favorite-btn").forEach(btn => {
        if (btn.dataset.name === name) {
            btn.classList.remove("active");
        }
    });
});