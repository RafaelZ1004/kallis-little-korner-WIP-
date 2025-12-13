// PRODUCTS SECTION
const set = document.getElementById("setproducts");
const pajama = document.getElementById("pajamasproducts");
const dress = document.getElementById("dressproducts");
const paint = document.getElementById("paintproducts");

// Product arrays
const set_products = [
    {
        image: "clothesimages/Sets/S1.jpg",
        category: "Sets",
        name: "Pink Lofi Headset",
        price: "&#8369;100"

    },
    {
        image: "clothesimages/Sets/S3.jpg",
        category: "Sets",
        name: "Little Binc",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Sets/S4.jpg",
        category: "Sets",
        name: "Summer Snail",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Sets/S8.jpg",
        category: "Sets",
        name: "Banana",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Sets/S9.jpg",
        category: "Sets",
        name: "Bunny",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Sets/S10.jpg",
        category: "Sets",
        name: "Whale",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Sets/S22.jpg",
        category: "Sets",
        name: "Boat",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Sets/S24.jpg",
        category: "Sets",
        name: "UFO",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Sets/T5.jpg",
        category: "Sets",
        name: "Jett",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Sets/T9.jpg",
        category: "Sets",
        name: "Batman",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Sets/T16.jpg",
        category: "Sets",
        name: "Sweet Dreams",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Sets/T23.jpg",
        category: "Sets",
        name: "Pink Cat",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Sets/T26.jpg",
        category: "Sets",
        name: "Super Bear",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Sets/T32.jpg",
        category: "Sets",
        name: "Rabbit",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Sets/T48.jpg",
        category: "Sets",
        name: "Little Gentleman",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Sets/T55.jpg",
        category: "Sets",
        name: "Carrot",
        price: "&#8369;100"
    }
]
const pajamas_products = [
    {
        image: "clothesimages/pajamas/P3a.jpg",
        category: "Pajamas",
        name: "Baby City",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/P4a.jpg",
        category: "Pajamas",
        name: "Pink Bunny",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/P6a.jpg",
        category: "Pajamas",
        name: "Excavator Blue",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/P8a.jpg",
        category: "Pajamas",
        name: "Giraffe",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/P9a.jpg",
        category: "Dinosaur",
        name: "Bunny",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/P10a.jpg",
        category: "Pajamas",
        name: "Sailor Bear",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/P12a.jpg",
        category: "Pajamas",
        name: "Cool Cat Gray",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/P14a.jpg",
        category: "Pajamas",
        name: "Mian Tu Teng",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/mickey pink.jpg",
        category: "Pajamas",
        name: "Mickey Mouse Pink",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/winnieh.jpg",
        category: "Pajamas",
        name: "Winnie the Pooh",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/winking cat.jpg",
        category: "Pajamas",
        name: "Winking Cat",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/shark blue.jpg",
        category: "Pajamas",
        name: "Shark Blue",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/rocket blue.jpg",
        category: "Pajamas",
        name: "Rocket Blue",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/rabbit pink.jpg",
        category: "Pajamas",
        name: "Rabbit Pink",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/pikachu .jpg",
        category: "Pajamas",
        name: "Pikachu",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/abc.jpg",
        category: "Pajamas",
        name: "ABC",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/baby triceratops green.jpg",
        category: "Pajamas",
        name: "Baby Triceratops",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/batman.jpg",
        category: "Pajamas",
        name: "Batman",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/blue stripes sun.jpg",
        category: "Pajamas",
        name: "Sun Blue Stripes",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/cat love yellow.jpg",
        category: "Pajamas",
        name: "Cat Love",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/cat pink.jpg",
        category: "Pajamas",
        name: "Cat Pink",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/christmas.jpg",
        category: "Pajamas",
        name: "Christmas",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/excavator yellow.jpg",
        category: "Pajamas",
        name: "Excavator Yellow",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/pajamas/giraffe.jpg",
        category: "Pajamas",
        name: "Giraffe",
        price: "&#8369;100"
    },
]
const dress_products = [
    {
        image: "clothesimages/Dress/247442372_959400074646001_320232824235129551_n.jpg",
        category: "Dress",
        name: "Blue Dress",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Dress/248031946_959400434645965_5597667419812363124_n.jpg",
        category: "Dress",
        name: "Pink Unicorn",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Dress/248283045_959400337979308_8527427399933227393_n.jpg",
        category: "Dress",
        name: "Daisy Purple",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Dress/248369514_959399871312688_3305788070377391183_n.jpg",
        category: "Dress",
        name: "Butterfly Pink",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Dress/250693589_959399597979382_5515159113131535025_n.jpg",
        category: "Dress",
        name: "Heart and Star Parade",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Dress/250751582_959400157979326_8226563271154040914_n.jpg",
        category: "Dress",
        name: "Rainbow",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Dress/250887603_959401204645888_5286339473384652711_n.jpg",
        category: "Dress",
        name: "Hearts Pink",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/Dress/251150637_959400514645957_1510661254488373752_n.jpg",
        category: "Dress",
        name: "Hearts Pastel",
        price: "&#8369;100"
    }
]
const paint_products = [
    {
        image: "clothesimages/paint/673f0fff-5c6f-43bd-9743-8f593c3b6ab1.png",
        category: "Paint by Numbers",
        name: "Hello Kitty",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/paint/deer.png",
        category: "Paint by Numbers",
        name: "Deer",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/paint/honeybear.png",
        category: "Paint by Numbers",
        name: "Bear",
        price: "&#8369;100"
    },
    {
        image: "clothesimages/paint/pig.png",
        category: "Paint by Numbers",
        name: "Pig",
        price: "&#8369;100"
    }
]

// code for search function
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;

    searchInput.addEventListener("input", e => {
        const query = e.target.value.toLowerCase();

        const filteredSet = set_products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );

        const filteredPajama = pajamas_products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );

        const filteredDress = dress_products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );

        const filteredPaint = paint_products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );

        displayProducts(filteredSet, set);
        displayProducts(filteredPajama, pajama);
        displayProducts(filteredDress, dress);
        displayProducts(filteredPaint, paint);
    });
});

// code for wishlist toggle
const wishlistPanel = document.getElementById("wishlist");
const wishlistToggle = document.getElementById("wishlist-btn");

wishlistToggle.addEventListener("click", () => {
    wishlistPanel.classList.toggle("active");
});
document.getElementById("close-wishlist").addEventListener("click", () => {
    wishlistPanel.classList.remove("active");
});

// Function to display product cards
function displayProducts(products_array, sectionID) {
    if (!sectionID) return;
    sectionID.innerHTML = "";

    products_array.forEach(product => {
        sectionID.innerHTML += `
      <div class="product-card">
        <button class="favorite-btn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B7B7B7"><path d="M480-147q-14 0-28.5-5T426-168l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5Z"/></svg>
        </button>
        <div class="img-wrapper">
          <img src="${product.image}" alt="">
        </div>
        <button id="add_cart">Add to Cart</button>
        <div id="below-img">
          <p class="product-choice">${product.category}</p>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">${product.price}</p>
        </div>
      </div>
    `;
    });
}

displayProducts(set_products, set);
displayProducts(pajamas_products, pajama);
displayProducts(dress_products, dress);
displayProducts(paint_products, paint);

function getWishlist() {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function saveWishlist(list) {
    localStorage.setItem("wishlist", JSON.stringify(list));
}
const wishlistContainer = document.getElementById("item-container");

// Add item to wishlist
document.addEventListener("click", e => {
    const favBtn = e.target.closest(".favorite-btn");
    if (!favBtn) return;

    const isActive = favBtn.classList.toggle("active");

    const product = {
        name: favBtn.dataset.name,
        price: favBtn.dataset.price,
        image: favBtn.dataset.image,
        category: favBtn.closest(".product-card").querySelector(".product-choice").textContent
    };

    let list = getWishlist();

    if (isActive) {
        // avoid duplicates
        if (!list.some(item => item.name === product.name)) {
            list.push(product);
        }
    } else {
        list = list.filter(item => item.name !== product.name);
    }

    saveWishlist(list);
    updateWishlistUI();
});

function updateWishlistUI() {
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

updateWishlistUI();

// Remove item from wishlist
document.addEventListener("click", e => {
    const removeBtn = e.target.closest(".remove-item");
    if (!removeBtn) return;

    const name = removeBtn.dataset.name;

    let list = getWishlist();
    list = list.filter(item => item.name !== name);
    saveWishlist(list);

    updateWishlistUI();

    // unmark the heart
    const favButtons = document.querySelectorAll('.favorite-btn');
    favButtons.forEach(btn => {
        if (btn.dataset.name === name) {
            btn.classList.remove('active');
        }
    });
});


// NAVBAR HIGHLIGHT
const links = document.querySelectorAll(".choices_link");
const highlight = document.getElementById("highlight");

if (links.length > 0 && highlight) {
    const active = document.querySelector(".choices_link.active");
    if (active) moveHighlight(active);

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();

            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            const sections = document.querySelectorAll(".product-list");
            sections.forEach(sec => sec.classList.add("hidden"));

            const target = document.getElementById(link.dataset.section);
            if (target) target.classList.remove("hidden");

            moveHighlight(link);
        });
    });
}

function moveHighlight(element) {
    if (!element || !highlight) return;

    const rect = element.getBoundingClientRect();
    const parentRect = element.parentElement.getBoundingClientRect();

    highlight.style.width = rect.width + "px";
    highlight.style.left = (rect.left - parentRect.left) + "px";
}


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

// Code for automatically going to the desired product category based on the category pressed from main page
const params = new URLSearchParams(window.location.search);
const cat = params.get('category');

if (cat) {
    document.querySelectorAll('.choices_link').forEach(link => {
        link.classList.remove('active');
    });

    document.querySelectorAll('.product-list').forEach(sec => {
        sec.classList.add('hidden');
    });

    const activeLink = document.querySelector(`.choices_link[data-category="${cat}"]`);

    if (activeLink) {
        activeLink.classList.add('active');

        const secId = activeLink.dataset.section;
        const section = document.getElementById(secId);

        if (section) section.classList.remove("hidden");

        moveHighlight(activeLink);

        if (typeof loadProducts === "function") {
            loadProducts(cat, section);
        }
    }
}
