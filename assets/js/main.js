/* Navegación móvil, botón "volver arriba" y lightbox de imágenes */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav__toggle");
  var links = document.getElementById("nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Lightbox: abre cualquier [data-lightbox] en un modal ---- */
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lightboxImg = lightbox.querySelector(".lightbox__img");
    var lightboxClose = lightbox.querySelector(".lightbox__close");
    var lastFocused = null;

    var openLightbox = function (src, alt) {
      lightboxImg.src = src;
      if (alt) { lightboxImg.alt = alt; }
      lightbox.hidden = false;
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
      lightbox.focus();
    };

    var closeLightbox = function () {
      lightbox.classList.remove("is-open");
      lightbox.hidden = true;
      document.body.style.overflow = "";
      if (lastFocused) { lastFocused.focus(); }
    };

    document.addEventListener("click", function (e) {
      var trigger = e.target.closest ? e.target.closest("[data-lightbox]") : null;
      if (!trigger) { return; }
      e.preventDefault();
      lastFocused = trigger;
      var img = trigger.querySelector("img");
      openLightbox(trigger.getAttribute("data-lightbox"), img ? img.alt : "");
    });

    // Cerrar con la "X" o haciendo clic fuera de la imagen
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox || lightboxClose.contains(e.target)) {
        closeLightbox();
      }
    });

    // Cerrar con Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  }

  var toTop = document.querySelector(".to-top");
  if (toTop) {
    window.addEventListener("scroll", function () {
      toTop.classList.toggle("is-visible", window.scrollY > 500);
    }, { passive: true });

    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
