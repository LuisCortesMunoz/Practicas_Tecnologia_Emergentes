# Practicas_Tecnologia_Emergentes

Portafolio web para documentar y organizar las prácticas de **Luis Cortés Muñoz**.

Sitio estático (HTML + CSS + JS, sin dependencias externas), listo para publicarse con GitHub Pages.

## Estructura

```
index.html            Portada: perfil e índice de prácticas
practica-1.html       Práctica 1 — Equipo de cómputo con presupuesto
assets/css/styles.css Estilos (paleta verde, modo claro y oscuro, responsive)
assets/js/main.js     Menú móvil y botón "volver arriba"
assets/img/practica-1 Imágenes de la Práctica 1
```

## Agregar una nueva práctica

1. Copia `practica-1.html` como `practica-2.html` y actualiza el contenido.
2. Guarda sus imágenes en `assets/img/practica-2/`.
3. En `index.html`, dentro de `<div class="practices">`, reemplaza la tarjeta
   `practice--soon` correspondiente por una `practice--ready` que apunte al nuevo archivo.

## Publicar

En GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `root`**.
