import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".js-gallery");
const galleryRef = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox"); 
const lightboxImg = document.querySelector(".lightbox__image");
const closeBtn = document.querySelector('[data-action="close-lightbox"]');
const overlay = document.querySelector(".lightbox__overlay");

// 1. Створюємо розмітку галереї
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
  )
  .join("");

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

// 2. Делегування кліку
galleryRef.addEventListener("click", onGalleryClick);

// 3. Додатково — ESC та стрілки
function onKeyPress(evt) {
  if (evt.code === "Escape") {
    closeModal();
  }

  // перегортання вліво/вправо
  if (lightboxRef.classList.contains("is-open")) {
    const currentIndex = galleryItems.findIndex(
      (item) => item.original === lightboxImgRef.src
    );

    if (evt.code === "ArrowRight" && currentIndex < galleryItems.length - 1) {
      const next = galleryItems[currentIndex + 1];
      openModal(next.original, next.description);
    }

    if (evt.code === "ArrowLeft" && currentIndex > 0) {
      const prev = galleryItems[currentIndex - 1];
      openModal(prev.original, prev.description);
    }
  }
}
galleryContainer.addEventListener("click", onGalleryClick);
closeBtn.addEventListener("click", onCloseModal);
overlay.addEventListener("click", onCloseModal);
window.addEventListener("keydown", onEscClose);

function onGalleryClick(evt) {
  evt.preventDefault();

  const isImageEl = evt.target.classList.contains("gallery__image");
  if (!isImageEl) return;

  const largeImageURL = evt.target.dataset.source;
  const alt = evt.target.alt;

  openModal(largeImageURL, alt);
}

function openModal(src, alt) {
  lightbox.classList.add("is-open");
  lightboxImg.src = src;
  lightboxImg.alt = alt;

  window.addEventListener("keydown", onArrowKeyPress);
}

function onCloseModal() {
  lightbox.classList.remove("is-open");
  lightboxImg.src = "";
  lightboxImg.alt = "";

  window.removeEventListener("keydown", onArrowKeyPress);
}

function onEscClose(evt) {
  if (evt.code === "Escape") {
    onCloseModal();
  }
}
