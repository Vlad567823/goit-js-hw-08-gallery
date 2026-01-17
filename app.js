import { galleryItems } from "./gallery-items.js";

// refs
const gallery = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImg = document.querySelector(".lightbox__image");
const closeBtn = document.querySelector('[data-action="close-lightbox"]');
const overlay = document.querySelector(".lightbox__overlay");

// 1. Створення розмітки
const markup = galleryItems
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
      </li>
    `
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

// 2. Слухачі
gallery.addEventListener("click", onGalleryClick);
closeBtn.addEventListener("click", closeLightbox);
overlay.addEventListener("click", closeLightbox);
window.addEventListener("keydown", onEscPress);

// 3. Відкриття
function onGalleryClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) return;

  openLightbox(evt.target.dataset.source, evt.target.alt);
}

function openLightbox(src, alt) {
  lightbox.classList.add("is-open");
  lightboxImg.src = src;
  lightboxImg.alt = alt;

  window.addEventListener("keydown", onArrowPress);
}

// 4. Закриття
function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightboxImg.src = "";
  lightboxImg.alt = "";

  window.removeEventListener("keydown", onArrowPress);
}

function onEscPress(evt) {
  if (evt.code === "Escape") {
    closeLightbox();
  }
}

// 5. Навігація стрілками
function onArrowPress(evt) {
  const index = galleryItems.findIndex(
    (item) => item.original === lightboxImg.src
  );

  if (evt.code === "ArrowRight" && index < galleryItems.length - 1) {
    const next = galleryItems[index + 1];
    openLightbox(next.original, next.description);
  }

  if (evt.code === "ArrowLeft" && index > 0) {
    const prev = galleryItems[index - 1];
    openLightbox(prev.original, prev.description);
  }
}