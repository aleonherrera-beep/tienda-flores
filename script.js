// =========================
// CONFIGURACIÓN PRINCIPAL
// =========================

// WhatsApp del emprendimiento: indicativo de país + número, sin +, espacios ni guiones.
// Ejemplo Colombia: 573001234567
const WHATSAPP_NUMBER = "573001234567";

// Pega aquí la URL de tu Google Apps Script desplegado como "Aplicación web".
// Ejemplo: https://script.google.com/macros/s/AKfycb.../exec
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbywjZvIXFVC0bGX5sKRc0BKI4fLYgRwXzS2MvL58G9wCY0-44vdVxwu3knpVzHFiU6PxQ/exec";

// =========================
// CATÁLOGO
// =========================
const products = [
  {
    id: 1,
    name: "Ramo Romance",
    category: "ramos",
    price: 65000,
    image: "🌹",
    description: "Ramo de rosas con follaje y envoltura elegante."
  },
  {
    id: 2,
    name: "Ramo Primavera",
    category: "ramos",
    price: 55000,
    image: "🌷",
    description: "Combinación alegre de flores en tonos suaves."
  },
  {
    id: 3,
    name: "Girasoles de Alegría",
    category: "ramos",
    price: 60000,
    image: "🌻",
    description: "Arreglo protagonista con girasoles y detalles verdes."
  },
  {
    id: 4,
    name: "Caja de Rosas",
    category: "cajas",
    price: 85000,
    image: "🎁",
    description: "Caja floral elegante, ideal para aniversarios y cumpleaños."
  },
  {
    id: 5,
    name: "Detalle Dulce",
    category: "especiales",
    price: 75000,
    image: "🍫",
    description: "Flores acompañadas de chocolates y tarjeta personalizada."
  },
  {
    id: 6,
    name: "Arreglo Premium",
    category: "especiales",
    price: 120000,
    image: "💐",
    description: "Diseño floral especial con presentación premium."
  }
];

let cart = [];

const money = value =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value);

const grid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const drawer = document.getElementById("cartDrawer");
const backdrop = document.getElementById("drawerBackdrop");
const sendButton = document.getElementById("sendWhatsapp");

function renderProducts(category = "all") {
  const filtered = category === "all"
    ? products
    : products.filter(p => p.category === category);

  grid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image">${product.image}</div>
      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-footer">
          <span class="price">${money(product.price)}</span>
          <button class="add-button" onclick="addToCart(${product.id})">Agregar</button>
        </div>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  const found = cart.find(item => item.id === id);
  if (found) found.qty += 1;
  else cart.push({ ...products.find(p => p.id === id), qty: 1 });
  renderCart();
  openCart();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  renderCart();
}

function renderCart() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);

  if (!cart.length) {
    cartItems.innerHTML = `<p class="empty">Todavía no has agregado productos.</p>`;
    cartTotal.textContent = money(0);
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div>
        <h4>${item.name}</h4>
        <small>${money(item.price)} c/u</small>
        <div class="cart-controls">
          <button onclick="changeQty(${item.id}, -1)">−</button>
          <strong>${item.qty}</strong>
          <button onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <strong>${money(item.price * item.qty)}</strong>
    </div>
  `).join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotal.textContent = money(total);
}

function openCart() {
  drawer.classList.add("open");
  backdrop.classList.add("show");
  drawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  drawer.classList.remove("open");
  backdrop.classList.remove("show");
  drawer.setAttribute("aria-hidden", "true");
}

function generateOrderId() {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replaceAll("-", "");
  const time = `${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}${String(now.getSeconds()).padStart(2, "0")}`;
  const random = Math.floor(100 + Math.random() * 900);
  return `FL-${date}-${time}-${random}`;
}

function collectOrderData() {
  if (!cart.length) {
    alert("Agrega al menos un producto al carrito.");
    return null;
  }

  const buyerName = document.getElementById("buyerName").value.trim();
  const recipientName = document.getElementById("recipientName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const date = document.getElementById("deliveryDate").value;
  const time = document.getElementById("deliveryTime").value;
  const note = document.getElementById("note").value.trim();
  const observations = document.getElementById("observations").value.trim();

  if (!buyerName || !recipientName || !phone || !address || !date) {
    alert("Completa nombre, destinatario, teléfono, dirección y fecha de entrega.");
    return null;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const orderId = generateOrderId();

  return {
    orderId,
    createdAt: new Date().toISOString(),
    buyerName,
    recipientName,
    phone,
    address,
    deliveryDate: date,
    deliveryTime: time,
    note: note || "Sin dedicatoria",
    observations: observations || "Sin observaciones",
    status: "Pendiente",
    products: cart.map(item => ({
      id: item.id,
      name: item.name,
      qty: item.qty,
      unitPrice: item.price,
      subtotal: item.price * item.qty
    })),
    productsText: cart.map(item => `${item.qty} x ${item.name}`).join(" | "),
    subtotalProducts: total,
    deliveryFee: 0,
    finalTotal: total,
    paymentMethod: "Por confirmar"
  };
}

async function saveOrderToGoogleSheets(order) {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes("PEGA_AQUI")) {
    throw new Error("Falta configurar la URL de Google Apps Script en script.js");
  }

  const body = new URLSearchParams();
  body.append("payload", JSON.stringify(order));

  // Petición simple compatible con GitHub Pages -> Google Apps Script.
  // no-cors evita bloqueos del navegador; el pedido se envía al endpoint.
  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body: body.toString()
  });
}

function buildWhatsappMessage(order) {
  const detail = order.products
    .map(item => `• ${item.qty} x ${item.name} — ${money(item.subtotal)}`)
    .join("\n");

  return `Hola 👋 Quiero realizar un pedido desde la tienda.

*NÚMERO DE PEDIDO:* ${order.orderId}

*PRODUCTOS*
${detail}

*TOTAL PRODUCTOS:* ${money(order.subtotalProducts)}

*DATOS DEL PEDIDO*
Comprador: ${order.buyerName}
Recibe: ${order.recipientName}
Teléfono: ${order.phone}
Dirección: ${order.address}
Fecha de entrega: ${order.deliveryDate}
Franja horaria: ${order.deliveryTime}
Dedicatoria: ${order.note}
Observaciones: ${order.observations}

El pedido ya fue registrado. Quedo atento(a) a la confirmación de disponibilidad, domicilio y datos de pago.`;
}

sendButton.addEventListener("click", async () => {
  const order = collectOrderData();
  if (!order) return;

  const originalText = sendButton.textContent;
  sendButton.disabled = true;
  sendButton.textContent = "Registrando pedido...";

  try {
    await saveOrderToGoogleSheets(order);
    const message = buildWhatsappMessage(order);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Abrimos WhatsApp tras enviar el registro a Sheets.
    window.open(url, "_blank");

    alert(`Pedido ${order.orderId} registrado. Ahora puedes continuar por WhatsApp.`);
  } catch (error) {
    console.error(error);
    alert(`No se pudo registrar el pedido en Google Sheets.\n\n${error.message}`);
  } finally {
    sendButton.disabled = false;
    sendButton.textContent = originalText;
  }
});

document.getElementById("footerWhatsapp").href = `https://wa.me/${WHATSAPP_NUMBER}`;
document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
backdrop.addEventListener("click", closeCart);
categoryFilter.addEventListener("change", e => renderProducts(e.target.value));

const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
document.getElementById("deliveryDate").min = `${yyyy}-${mm}-${dd}`;

renderProducts();
renderCart();
