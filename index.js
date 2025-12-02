 // code for switching between sections using the navbar for the products
 const links = document.querySelectorAll(".choices_link");
  const sections = document.querySelectorAll(".product-list");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    links.forEach(l => l.classList.remove("active"));
    
    link.classList.add("active");

    sections.forEach(sec => sec.classList.add("hidden"));

    document.getElementById(link.dataset.section).classList.remove("hidden");
  });
});
//code for animation on the navbar for products
const highlight = document.getElementById("highlight");

// initialize highlight position on page load
window.addEventListener("load", () => {
  const active = document.querySelector(".choices_link.active");
  moveHighlight(active);
});

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // remove active from all
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    moveHighlight(link);
  });
});

function moveHighlight(element) {
  const rect = element.getBoundingClientRect();
  const parentRect = element.parentElement.getBoundingClientRect();

  highlight.style.width = rect.width + "px";
  highlight.style.left = rect.left - parentRect.left + "px";
}

// array for the products
const set_products = [
  {
    image:"clothesimages/Sets/S1.jpg",
    choice:"Sets",
    name:"Pink Lofi Headset",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/Sets/S3.jpg",
    choice:"Sets",
    name:"Little Binc",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/Sets/S4.jpg",
    choice:"Sets",
    name:"Summer Snail",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/Sets/S8.jpg",
    choice:"Sets",
    name:"Banana",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/Sets/S9.jpg",
    choice:"Sets",
    name:"Bunny",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/Sets/S10.jpg",
    choice:"Sets",
    name:"Whale",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/Sets/S22.jpg",
    choice:"Sets",
    name:"Boat",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/Sets/S24.jpg",
    choice:"Sets",
    name:"UFO",
    price:"&#8369;100"
  }
]
const pajamas_products = [
  {
    image:"clothesimages/pajamas/P3a.jpg",
    choice:"Pajamas",
    name:"Baby City",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/pajamas/P4a.jpg",
    choice:"Pajamas",
    name:"Pink Bunny",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/pajamas/P6a.jpg",
    choice:"Pajamas",
    name:"Excavator",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/pajamas/P8a.jpg",
    choice:"Pajamas",
    name:"Giraffe",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/pajamas/P9a.jpg",
    choice:"Dinosaur",
    name:"Bunny",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/pajamas/P10a.jpg",
    choice:"Pajamas",
    name:"Sailor Bear",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/pajamas/P12a.jpg",
    choice:"Pajamas",
    name:"Cool Cat Blue",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/pajamas/P14a.jpg",
    choice:"Pajamas",
    name:"Rabbit Pink",
    price:"&#8369;100"
  }
]
const dress_products = [
  {
    image:"clothesimages/Dress/247442372_959400074646001_320232824235129551_n.jpg",
    choice:"Dress",
    name:"Blue Dress",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/Dress/248031946_959400434645965_5597667419812363124_n.jpg",
    choice:"Dress",
    name:"Pink Unicorn",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/Dress/248283045_959400337979308_8527427399933227393_n.jpg",
    choice:"Dress",
    name:"Daisy Purple",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/Dress/248369514_959399871312688_3305788070377391183_n.jpg",
    choice:"Dress",
    name:"Butterfly Pink",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/Dress/250693589_959399597979382_5515159113131535025_n.jpg",
    choice:"Dress",
    name:"Heart and Star Parade",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/Dress/250751582_959400157979326_8226563271154040914_n.jpg",
    choice:"Dress",
    name:"Rainbow",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/Dress/250887603_959401204645888_5286339473384652711_n.jpg",
    choice:"Dress",
    name:"Hearts Pink",
    price:"&#8369;100"
  },
  {
    image:"clothesimages/Dress/251150637_959400514645957_1510661254488373752_n.jpg",
    choice:"Dress",
    name:"Hearts Pastel",
    price:"&#8369;100"
  }
]
const paint_products = [
  {
    image:"images/673f0fff-5c6f-43bd-9743-8f593c3b6ab1.png",
    choice:"Paint by Numbers",
    name:"Hello Kitty",
    price:"&#8369;100"
  },
  {
    image:"images/deer.png",
    choice:"Paint by Numbers",
    name:"Deer",
    price:"&#8369;100"
  },
  {
    image:"images/honeybear.png",
    choice:"Paint by Numbers",
    name:"Bear",
    price:"&#8369;100"
  },
  {
    image:"images/pig.png",
    choice:"Paint by Numbers",
    name:"Pig",
    price:"&#8369;100"
  }
]

const set = document.getElementById("setproducts");
const pajama = document.getElementById("pajamasproducts");
const dress = document.getElementById("dressproducts");
const paint = document.getElementById("paintproducts");

//function to add the product cards and inserting the data from the arrays
function displayProducts(products_array, sectionID){
  products_array.forEach(product => {
  sectionID.innerHTML += `
    <div class="product-card">
      <button id="favorite"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#46152F"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></button>
      <div class="img-wrapper">
        <img src="${product.image}" alt="">
      </div>
      <button id="add_cart">Add to Cart</button>
      <div id="below-img">
        <p class="product-choice">${product.choice}</p>
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

// clay section
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;

function updateCarousel() {
  track.style.transform = 'translateX(-' + currentIndex * 100 + '%)';
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});
// automatic slide
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }, 5000);

//code for pop-up form
const openBtn = document.getElementById("send-request");
const popup = document.getElementById("popupForm");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == popup) {
    popup.style.display = "none";
  }
});