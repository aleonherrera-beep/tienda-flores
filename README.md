# Tienda de flores + GitHub Pages + Google Sheets

Versión 2 de la tienda. Es gratuita y funciona con:

- **GitHub Pages**: catálogo y carrito.
- **Google Sheets**: registro central de pedidos.
- **Google Apps Script**: puente entre la tienda y la hoja.
- **WhatsApp**: confirmación, domicilio y pago.

## Flujo

Cliente -> catálogo -> carrito -> completa datos -> pulsa "Enviar pedido por WhatsApp" -> el pedido se registra en Google Sheets -> se abre WhatsApp con el mismo número de pedido.

---

## 1. Crear la hoja de pedidos

1. En la cuenta de Google que usará la dueña del emprendimiento, crea una hoja de cálculo nueva.
2. Ponle un nombre, por ejemplo: **Pedidos Floristería**.
3. Ve a **Extensiones > Apps Script**.
4. Borra el código existente de `Code.gs`.
5. Copia y pega el contenido del archivo `Code.gs` incluido en esta carpeta.
6. Guarda el proyecto.
7. En la lista de funciones selecciona `setupSheet` y pulsa **Ejecutar**.
8. Google pedirá autorización. Concédela.
9. Vuelve a la hoja. Debe aparecer la pestaña **Pedidos** con sus columnas y listas desplegables.

## 2. Publicar Apps Script como aplicación web

1. Dentro de Apps Script pulsa **Implementar > Nueva implementación**.
2. Tipo: **Aplicación web**.
3. Ejecutar como: **Yo**.
4. Quién tiene acceso: **Cualquier usuario**.
5. Pulsa **Implementar**.
6. Copia la URL que termina en `/exec`.

Importante: si después cambias `Code.gs`, debes crear una nueva versión de la implementación o editar la implementación existente para publicar los cambios.

## 3. Conectar la tienda con Google Sheets

Abre `script.js` y cambia:

```js
const GOOGLE_SCRIPT_URL = "PEGA_AQUI_LA_URL_DE_APPS_SCRIPT";
```

por la URL `/exec` del paso anterior.

También cambia el WhatsApp:

```js
const WHATSAPP_NUMBER = "573001234567";
```

Ejemplo Colombia: `57` + número celular, sin `+`, espacios ni guiones.

## 4. Publicar la tienda en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `tienda-flores`.
2. Sube:
   - `index.html`
   - `styles.css`
   - `script.js`
3. En el repositorio entra en **Settings > Pages**.
4. Selecciona **Deploy from a branch**.
5. Rama: `main`.
6. Carpeta: `/ (root)`.
7. Guarda.
8. GitHub mostrará la URL pública de la tienda.

`Code.gs` NO se sube a GitHub Pages. Ese archivo se pega dentro de Google Apps Script.

## 5. Qué registra cada pedido

La hoja guarda:

- N.º de pedido
- Fecha y hora del pedido
- Estado
- Comprador
- Teléfono
- Persona que recibe
- Productos y cantidades
- Subtotal de productos
- Valor del domicilio
- Total final
- Método de pago
- Dirección
- Fecha de entrega
- Franja horaria
- Dedicatoria
- Observaciones

El estado tiene opciones:

- Pendiente
- Confirmado
- Pagado
- Entregado
- Cancelado

## 6. Generar un Excel cuando ella quiera

Al abrir la hoja aparecerá el menú:

**🌸 Floristería > Generar Excel de pedidos**

Al seleccionarlo, Apps Script crea automáticamente un archivo `.xlsx` actualizado en Google Drive, por ejemplo:

`Pedidos_Floreria_2026-09-14_2315.xlsx`

La hoja principal sigue intacta y continúa recibiendo pedidos.

También se puede usar el método normal de Google Sheets:

**Archivo > Descargar > Microsoft Excel (.xlsx)**

## 7. Productos y precios

Los productos siguen estando en `script.js`, dentro de:

```js
const products = [ ... ];
```

Ahí puedes cambiar nombres, precios, categorías, descripciones e imágenes.

## Nota de seguridad

No guardes datos de tarjetas ni contraseñas en la hoja. Esta versión está pensada para registrar el pedido y continuar el pago por WhatsApp, Nequi, Daviplata, transferencia u otro medio acordado directamente con el negocio.
