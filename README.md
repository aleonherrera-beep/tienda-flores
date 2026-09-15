# Minibisu Accesorios — tienda final

Tienda web estática lista para GitHub Pages.

## Incluye
- Identidad visual basada en los catálogos de Minibisu.
- WhatsApp configurado: 311 754 6272.
- Catálogo sin referencias al año 2025.
- Ramos tradicionales, tulipanes, otros ramos, boxes y anchetas, especial para ellos, grados y accesorios.
- Fotos reales disponibles en los catálogos.
- Buscador y filtros por categoría.
- Carrito y programación de entrega.
- Reglas de anticipación (accesorios y productos especiales).
- Registro en Google Sheets + apertura de WhatsApp.
- Apps Script para la hoja de pedidos y exportación a Excel.

## PASO IMPORTANTE: conectar Google Sheets

1. Usa la misma hoja de Google Sheets que ya probaste o crea una nueva.
2. En Extensiones > Apps Script, reemplaza el código por `Code.gs` de esta carpeta.
3. Guarda y ejecuta `setupSheet` una vez.
4. Implementa como Aplicación web: ejecutar como tú, acceso para cualquiera.
5. Copia la URL que termina en `/exec`.
6. Abre `script.js` y reemplaza:

```js
const GOOGLE_SCRIPT_URL = "PEGA_AQUI_TU_URL_DE_APPS_SCRIPT";
```

por tu URL real.
7. Guarda y sube a GitHub Pages todos los archivos y la carpeta `assets`.

## Actualizar una página ya publicada

Sube/reemplaza `index.html`, `styles.css`, `script.js` y la carpeta `assets`. No es necesario subir `Code.gs` a GitHub.

## Observación

El domicilio se confirma por WhatsApp. Los precios de productos con rango (anchetas mediana y grande) muestran el rango del catálogo y el subtotal usa el valor mínimo como referencia; el precio final se confirma por WhatsApp según personalización/presupuesto.
