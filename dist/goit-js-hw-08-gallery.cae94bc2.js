import"./goit-js-hw-08-gallery.f87a7997.js";var e=globalThis,r={},t={},a=e.parcelRequired535;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var a=t[e];delete t[e];var l={id:e,exports:{}};return r[e]=l,a.call(l.exports,l,l.exports),l.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequired535=a),a.register;var l=a("7fMCl");let i=document.querySelector(".js-gallery"),o=document.querySelector(".js-gallery"),n=document.querySelector(".js-lightbox"),s=document.querySelector(".lightbox__image"),c=document.querySelector('[data-action="close-lightbox"]'),d=document.querySelector(".lightbox__overlay");lightboxImage.src=largeImageURL,lightboxImage.alt=description;let g=l.galleryItems.map(({preview:e,original:r,description:t})=>`
      <li class="gallery__item">
        <a class="gallery__link" href="${r}">
          <img
            class="gallery__image"
            src="${e}"
            data-source="${r}"
            alt="${t}"
          />
        </a>
      </li>`).join("");function u(e){var r,t;if(e.preventDefault(),e.target.classList.contains("gallery__image"))r=e.target.dataset.source,t=e.target.alt,n.classList.add("is-open"),s.src=r,s.alt=t,window.addEventListener("keydown",onArrowKeyPress)}function m(){n.classList.remove("is-open"),s.src="",s.alt="",window.removeEventListener("keydown",onArrowKeyPress)}o.insertAdjacentHTML("beforeend",g),o.addEventListener("click",u),i.addEventListener("click",u),c.addEventListener("click",m),d.addEventListener("click",m),window.addEventListener("keydown",function(e){"Escape"===e.code&&m()});
//# sourceMappingURL=goit-js-hw-08-gallery.cae94bc2.js.map
