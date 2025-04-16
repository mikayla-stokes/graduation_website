const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = Array.from(document.querySelectorAll(".photo-tile img"));

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  lightboxImg.src = images[currentIndex].src;
  lightboxImg.alt = images[currentIndex].alt;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
  lightboxImg.alt = images[currentIndex].alt;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
  lightboxImg.alt = images[currentIndex].alt;
}

// Attach event listeners
images.forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});

closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

// Close with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});
