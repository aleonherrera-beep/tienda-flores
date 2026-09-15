// ========= CONFIGURACIÓN =========
const WHATSAPP_NUMBER = "573042624249";
// Pega aquí la URL /exec de tu Apps Script (la misma que ya usaste en la página de prueba).
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx1VPjNCBouCqw1XWm731Z46SwG63yBh-cPrqncZOf7ue8pjzt0KT7OpN1_6DTfdZlb/exec";

const products = [
  // Ramos tradicionales
  {id:'rosa1',cat:'Ramos tradicionales',name:'Ramo x1 rosa',price:15000,desc:'Incluye envoltura y mariposa.',emoji:'🌹',lead:1},
  {id:'rosa3',cat:'Ramos tradicionales',name:'Ramo x3 rosas',price:30000,desc:'Incluye envoltura y mariposa.',emoji:'🌹',lead:1},
  {id:'rosa6',cat:'Ramos tradicionales',name:'Ramo x6 rosas',price:45000,desc:'Incluye envoltura y mariposa.',emoji:'🌹',lead:1},
  {id:'rosa7',cat:'Ramos tradicionales',name:'Ramo x7 rosas',price:50000,desc:'Incluye envoltura y mariposa.',emoji:'🌹',lead:1},
  {id:'rosa10',cat:'Ramos tradicionales',name:'Ramo x10 rosas',price:65000,desc:'Incluye envoltura y mariposa.',emoji:'🌹',lead:1},
  {id:'rosa20',cat:'Ramos tradicionales',name:'Ramo x20 rosas',price:100000,desc:'Incluye envoltura y mariposa.',emoji:'🌹',lead:1},
  {id:'rosa30',cat:'Ramos tradicionales',name:'Ramo x30 rosas',price:145000,desc:'Incluye envoltura y mariposa.',emoji:'🌹',lead:1},
  {id:'rosa50',cat:'Ramos tradicionales',name:'Ramo x50 rosas',price:185000,desc:'Incluye envoltura y mariposa.',emoji:'🌹',lead:1},
  {id:'rosa100',cat:'Ramos tradicionales',name:'Ramo x100 rosas',price:300000,desc:'Incluye envoltura y mariposa.',emoji:'🌹',lead:2},

  // Tulipanes
  {id:'tul1',cat:'Tulipanes',name:'Ramo x1 tulipán',price:15000,desc:'Tulipán elaborado en limpiapipas. Incluye envoltura y mariposa.',emoji:'🌷',lead:1},
  {id:'tul3',cat:'Tulipanes',name:'Ramo x3 tulipanes',price:30000,desc:'Tulipanes elaborados en limpiapipas. Incluye envoltura y mariposa.',emoji:'🌷',lead:1},
  {id:'tul5',cat:'Tulipanes',name:'Ramo x5 tulipanes',price:45000,desc:'Tulipanes elaborados en limpiapipas. Incluye envoltura y mariposa.',emoji:'🌷',lead:1},
  {id:'tul7',cat:'Tulipanes',name:'Ramo x7 tulipanes',price:60000,desc:'Tulipanes elaborados en limpiapipas. Incluye envoltura y mariposa.',emoji:'🌷',lead:1},
  {id:'tul10',cat:'Tulipanes',name:'Ramo x10 tulipanes',price:85000,desc:'Tulipanes elaborados en limpiapipas. Incluye envoltura y mariposa.',emoji:'🌷',lead:2},
  {id:'tul15',cat:'Tulipanes',name:'Ramo x15 tulipanes',price:100000,desc:'Tulipanes elaborados en limpiapipas. Incluye envoltura y mariposa.',emoji:'🌷',lead:2},
  {id:'tul20',cat:'Tulipanes',name:'Ramo x20 tulipanes',price:135000,desc:'Tulipanes elaborados en limpiapipas. Incluye envoltura y mariposa.',emoji:'🌷',lead:2},

  // Otros ramos
  {id:'gira1',cat:'Otros ramos',name:'Ramo x1 girasol',price:25000,desc:'Incluye envoltura y mariposa.',emoji:'🌻',lead:1},
  {id:'gira2',cat:'Otros ramos',name:'Ramo x2 girasoles',price:35000,desc:'Incluye envoltura y mariposa.',emoji:'🌻',lead:1},
  {id:'gira3rosa',cat:'Otros ramos',name:'Ramo x1 girasol + 3 rosas',price:60000,desc:'Incluye envoltura y mariposa.',emoji:'💐',lead:1},
  {id:'vangogh',cat:'Otros ramos',name:'Ramo Van Gogh',price:100000,desc:'Ramo especial. Incluye envoltura y mariposa.',emoji:'🌻',lead:2},
  {id:'ger3',cat:'Otros ramos',name:'Ramo x3 gerberas',price:30000,desc:'Gerberas elaboradas en limpiapipas. Incluye envoltura y mariposa.',emoji:'🌼',lead:1},
  {id:'ger5',cat:'Otros ramos',name:'Ramo x5 gerberas',price:50000,desc:'Gerberas elaboradas en limpiapipas. Incluye envoltura y mariposa.',emoji:'🌼',lead:1},

  // Boxes y anchetas
  {id:'goloso',cat:'Boxes y anchetas',name:'Box Goloso',price:60000,desc:'6 rosas + dulces.',emoji:'🎁',lead:1},
  {id:'chocolate',cat:'Boxes y anchetas',name:'Box Chocolate',price:75000,desc:'8 rosas + 12 chocolates.',emoji:'🍫',lead:1},
  {id:'unica',cat:'Boxes y anchetas',name:'Box Única',price:55000,desc:'3 tulipanes + manilla + Chocoramo.',emoji:'🎁',lead:2},
  {id:'ancheta-p',cat:'Boxes y anchetas',name:'Ancheta pequeña',price:45000,desc:'Personalizada a tu gusto según presupuesto. Acompañamiento dulce o salado.',emoji:'🧺',lead:2},
  {id:'ancheta-m',cat:'Boxes y anchetas',name:'Ancheta mediana',price:60000,priceMax:80000,desc:'Personalizada a tu gusto según presupuesto. Acompañamiento dulce o salado.',emoji:'🧺',lead:2},
  {id:'ancheta-g',cat:'Boxes y anchetas',name:'Ancheta grande',price:90000,priceMax:170000,desc:'Personalizada a tu gusto según presupuesto. Incluye peluche.',emoji:'🧺',lead:2},

  // Especial para ellos
  {id:'personaje',cat:'Especial para ellos',name:'Box Personaje',price:55000,desc:'Dulces variados + tarjeta personalizada + decoración. Personaje de tu elección.',img:'assets/box-personaje.jpg',lead:3},
  {id:'spiderman',cat:'Especial para ellos',name:'Box Spiderman',price:65000,desc:'Decoración + dulces variados (sin llavero).',img:'assets/box-spiderman.jpg',lead:3},
  {id:'box-hotwheels',cat:'Especial para ellos',name:'Box Hotwheels',price:55000,desc:'1 Hot Wheels + dulces variados + decoración personalizada.',img:'assets/box-hotwheels.jpg',lead:3},
  {id:'ramo-hot2',cat:'Especial para ellos',name:'Ramo Hotwheels x2',price:65000,desc:'2 Hot Wheels + 3 rosas.',img:'assets/ramo-hotwheels-2.jpg',lead:3},
  {id:'ramo-hot1',cat:'Especial para ellos',name:'Ramo x1 Hotwheels',price:35000,desc:'1 Hot Wheels + 1 rosa.',img:'assets/ramo-hotwheels-1.png',lead:3},
  {id:'cajita-llavero',cat:'Especial para ellos',name:'Cajita + llavero',price:55000,desc:'Dulces variados + llavero personalizado + tarjeta personalizada.',img:'assets/cajita-llavero.jpg',lead:3},

  // Grados
  {id:'shine',cat:'Grados',name:'Ramo Shine',price:55000,desc:'7 rosas + mariposa + imagen de graduada. Colores de tu elección.',img:'assets/grado-shine.jpg',lead:3},
  {id:'levelup',cat:'Grados',name:'Ramo Level Up',price:55000,desc:'7 rosas + birrete. Colores de tu elección.',img:'assets/grado-level-up.jpg',lead:3},
  {id:'forever',cat:'Grados',name:'Ramo Forever Bloom',price:65000,desc:'7 tulipanes + birrete + mariposa. Colores de tu elección.',img:'assets/grado-forever-bloom.jpg',lead:3},
  {id:'limitless',cat:'Grados',name:'Ramo Limitless',price:105000,desc:'20 rosas + mariposa + birrete. Colores de tu elección.',img:'assets/grado-limitless.jpg',lead:3},
  {id:'pearl',cat:'Grados',name:'Ramo Pearl',price:115000,desc:'20 rosas + corona grande + birrete. Colores de tu elección.',img:'assets/grado-pearl.jpg',lead:3},
  {id:'rosey',cat:'Grados',name:'Ramo Rosey',price:100000,desc:'15 rosas + corona grande. Colores de tu elección.',img:'assets/grado-rosey.jpg',lead:3},
  {id:'valiente',cat:'Grados',name:'Box Valiente',price:65000,desc:'7 rosas + imagen. Colores de tu elección.',img:'assets/grado-valiente.png',lead:3},
  {id:'aurea',cat:'Grados',name:'Box Aurea',price:70000,desc:'7 rosas + lazo + tarjeta. Colores de tu elección.',img:'assets/grado-aurea.png',lead:3},
  {id:'eterno',cat:'Grados',name:'Box Eterno',price:65000,desc:'8 rosas + follaje + birrete. Colores de tu elección.',img:'assets/grado-eterno.jpg',lead:3},
  {id:'titan',cat:'Grados',name:'Ramo Titan',price:70000,desc:'7 rosas + birrete + envoltura especial. Colores de tu elección.',img:'assets/grado-titan.png',lead:3},
  {id:'goldl',cat:'Grados',name:'Ramo Goldl',price:45000,desc:'1 rosa + 1 Hot Wheels + chocolates Ferrero Rocher.',img:'assets/grado-goldl.jpg',lead:3},
  {id:'fire',cat:'Grados',name:'Box Fire',price:85000,desc:'3 rosas + 3 Hot Wheels + 6 chocolates Ferrero Rocher + tarjeta.',img:'assets/grado-fire.jpg',lead:3},

  // Accesorios
  {id:'ch-lili',cat:'Accesorios',name:'Chocker Lili',price:22000,desc:'Mostacillas. Elige tus colores favoritos.',img:'assets/chocker-lili.jpg',lead:1},
  {id:'ch-pearl',cat:'Accesorios',name:'Chocker Pearl Bloom',price:20000,desc:'Mostacillas y perlas. Elige tus colores favoritos.',img:'assets/chocker-pearl-bloom.jpg',lead:1},
  {id:'ch-aurora',cat:'Accesorios',name:'Chocker Aurora',price:17000,desc:'Perlas y mostacillas doradas.',img:'assets/chocker-aurora.jpg',lead:1},
  {id:'combo-cherry',cat:'Accesorios',name:'Combo Cherry',price:28000,desc:'Cadena de acero inoxidable + minicandongas en acero.',img:'assets/combo-cherry.jpg',lead:1},
  {id:'combo-florella',cat:'Accesorios',name:'Combo Florella',price:40000,desc:'Chocker en mostacillas + argollas en goldfilled recamadas. Elige tus colores.',img:'assets/combo-florella.jpg',lead:1},
  {id:'ch-blossom',cat:'Accesorios',name:'Chocker Blossom',price:20000,desc:'Mostacillas y muranos. Elige tus colores favoritos.',img:'assets/chocker-blossom.png',lead:1},
  {id:'ch-cherry',cat:'Accesorios',name:'Chocker Cherry',price:12000,desc:'Mostacillas + cerezas.',img:'assets/chocker-cherry.png',lead:1},
  {id:'cad-inicial',cat:'Accesorios',name:'Cadena Inicial',price:18000,desc:'Acero inoxidable. Disponible para chicas y chicos.',img:'assets/cadena-inicial.jpg',lead:1},
  {id:'cad-florecer',cat:'Accesorios',name:'Cadena Florecer',price:22000,desc:'Mostacillas + argollas en goldfilled recamadas. Elige tus colores.',img:'assets/cadena-florecer.png',lead:1},
  {id:'ch-nacar',cat:'Accesorios',name:'Chocker Nácar',price:25000,desc:'Estrellas de nácar, balines e hilo. Ajustable.',img:'assets/chocker-nacar.png',lead:1},
  {id:'ch-strawberry',cat:'Accesorios',name:'Chocker Strawberry',price:14000,desc:'Mostacillas + fresitas elaboradas.',img:'assets/chocker-strawberry.jpg',lead:1},
  {id:'ch-ocean',cat:'Accesorios',name:'Chocker Ocean Turtle',price:25000,desc:'Conchas, estrellas y tortugas de nácar + balines.',img:'assets/chocker-ocean-turtle.jpg',lead:1},
  {id:'br-girasol',cat:'Accesorios',name:'Brazalete Girasol',price:12000,desc:'Mostacillas y muranos. Ajustable.',img:'assets/brazalete-girasol.png',lead:1},
  {id:'br-florecer',cat:'Accesorios',name:'Brazalete Florecer',price:20000,desc:'Cadenita, mostacillas y balines en acero inoxidable. Ajustable.',img:'assets/brazalete-florecer.png',lead:1},
  {id:'br-pearl',cat:'Accesorios',name:'Brazalete Pearl Bloom',price:12000,desc:'Mostacillas y perlas. Ajustable.',img:'assets/brazalete-pearl-bloom.png',lead:1},
  {id:'br-flowers',cat:'Accesorios',name:'Brazalete Flowers',price:12000,desc:'Mostacillas. Ajustable.',img:'assets/brazalete-flowers.png',lead:1},
  {id:'br-turco',cat:'Accesorios',name:'Brazalete Turco',price:15000,desc:'Mostacillas y ojitos turcos azules o rojos. Ajustable.',img:'assets/brazalete-turco.png',lead:1},
  {id:'br-lili',cat:'Accesorios',name:'Brazalete Lili',price:13000,desc:'Mostacillas, chaquiras y balines de acero. Ajustable.',img:'assets/brazalete-lili.png',lead:1},
  {id:'br-barbie',cat:'Accesorios',name:'Brazalete Barbie',price:12000,desc:'Mostacillas. Ajustable.',img:'assets/brazalete-barbie.jpg',lead:1},
  {id:'br-mistica',cat:'Accesorios',name:'Brazalete Mística',price:18000,desc:'Mostacillas, muranos y balines. Ajustable.',img:'assets/brazalete-mistica.png',lead:1},
  {id:'man-flowers',cat:'Accesorios',name:'Manilla Flowers',price:8000,desc:'Tejida en hilo, balines y mostacillas. Elige tus colores.',img:'assets/manilla-flowers.jpg',lead:1},
  {id:'man-love',cat:'Accesorios',name:'Manilla Loveline',price:14000,desc:'Tejida en hilo, balines y un centro. Elige tus colores.',img:'assets/manilla-loveline.png',lead:1},
  {id:'man-cruz',cat:'Accesorios',name:'Manilla Cruz',price:10000,desc:'Tejida en hilo y balines. Elige tus colores.',img:'assets/manilla-cruz.jpg',lead:1},
  {id:'man-adn',cat:'Accesorios',name:'Manilla ADN',price:6000,desc:'Tejida en hilo y balines. Elige tus colores.',img:'assets/manilla-adn.png',lead:1},
  {id:'man-luxury',cat:'Accesorios',name:'Manilla Luxury',price:9000,desc:'Tejida en hilo y balines. Elige tus colores.',img:'assets/manilla-luxury.jpg',lead:1},
  {id:'man-flore',cat:'Accesorios',name:'Manilla Floré',price:6000,desc:'Hilo y centro de flor en mostacilla y balín. Elige tus colores.',img:'assets/manilla-flore.jpg',lead:1},
  {id:'man-jardin',cat:'Accesorios',name:'Manilla Jardín',price:20000,desc:'Hilo, flores en mostacillas y balines. Elige tus colores.',img:'assets/manilla-jardin.jpg',lead:1},
  {id:'man-divine',cat:'Accesorios',name:'Manilla Divine',price:6000,desc:'Tejida en hilo y balines. Elige tus colores.',img:'assets/manilla-divine.png',lead:1},
  {id:'can-soph',cat:'Accesorios',name:'Candongas Sophistique',price:20000,desc:'Argollas medianas en goldfilled recamadas en mostacillas. Incluye bolsita de fique. Elige colores.',img:'assets/candongas-sophistique.jpg',lead:1},
  {id:'mini-mar',cat:'Accesorios',name:'Minicandongas Mar',price:10000,desc:'Mostacillas y balines de acero inoxidable. Elige tus colores.',img:'assets/minicandongas-mar.jpg',lead:1},
  {id:'mini-cherry',cat:'Accesorios',name:'Minicandongas Cherry',price:10000,desc:'Muranos y perlas rojas.',img:'assets/minicandongas-cherry.jpg',lead:1},
  {id:'mini-girasol',cat:'Accesorios',name:'Minicandongas Girasol',price:10000,desc:'Mostacillas y muranos.',img:'assets/minicandongas-girasol.jpg',lead:1},
];

const money = n => new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(n);
let cart=[]; let activeCategory='Todos';
const productGrid=document.getElementById('productGrid');
const categoryTabs=document.getElementById('categoryTabs');
const searchInput=document.getElementById('searchInput');
const emptyState=document.getElementById('emptyState');

const categories=['Todos',...new Set(products.map(p=>p.cat))];
function renderTabs(){categoryTabs.innerHTML=categories.map(c=>`<button class="${c===activeCategory?'active':''}" data-cat="${c}">${c}</button>`).join('');categoryTabs.querySelectorAll('button').forEach(b=>b.onclick=()=>{activeCategory=b.dataset.cat;renderTabs();renderProducts();});}
function productPrice(p){return p.priceMax?`${money(p.price)} – ${money(p.priceMax)}`:money(p.price)}
function media(p){return p.img?`<img src="${p.img}" alt="${p.name}" loading="lazy">`:`<div class="placeholder">${p.emoji||'🎁'}</div>`}
function renderProducts(){const q=searchInput.value.trim().toLowerCase();const list=products.filter(p=>(activeCategory==='Todos'||p.cat===activeCategory)&&(!q||`${p.name} ${p.desc} ${p.cat}`.toLowerCase().includes(q)));productGrid.innerHTML=list.map(p=>`<article class="product-card"><div class="product-media" data-view="${p.id}">${media(p)}${p.lead>=3?'<span class="badge">Agenda 3–4 días</span>':''}</div><div class="product-body"><span class="product-category">${p.cat}</span><h3>${p.name}</h3><p class="product-desc">${p.desc}</p>${p.lead===1&&p.cat==='Accesorios'?'<div class="product-note">Personalizado: agenda idealmente con 1 día.</div>':''}<div class="product-footer"><span class="price ${p.priceMax?'range':''}">${productPrice(p)}</span><button class="add-btn" data-add="${p.id}">Agregar</button></div></div></article>`).join('');emptyState.hidden=!!list.length;document.querySelectorAll('[data-add]').forEach(b=>b.onclick=e=>{e.stopPropagation();addToCart(b.dataset.add)});document.querySelectorAll('[data-view]').forEach(el=>el.onclick=()=>openProduct(el.dataset.view));}
searchInput.addEventListener('input',renderProducts);

const dialog=document.getElementById('productDialog');
function openProduct(id){const p=products.find(x=>x.id===id);document.getElementById('dialogContent').innerHTML=`<div class="dialog-grid"><div class="dialog-media">${media(p)}</div><div class="dialog-body"><span class="product-category">${p.cat}</span><h2>${p.name}</h2><div class="dialog-price">${productPrice(p)}</div><p>${p.desc}</p>${p.lead>=3?'<div class="dialog-note">Este producto debe agendarse con 3 a 4 días de anticipación.</div>':p.cat==='Accesorios'?'<div class="dialog-note">Al ser personalizado, se recomienda agendar con al menos 1 día de anticipación.</div>':''}<button class="dialog-add" onclick="addToCart('${p.id}');dialog.close()">Agregar al carrito</button></div></div>`;dialog.showModal();}
document.getElementById('closeDialog').onclick=()=>dialog.close();

function addToCart(id){const p=products.find(x=>x.id===id);const found=cart.find(x=>x.id===id);if(found)found.qty++;else cart.push({...p,qty:1});renderCart();openCart();}
function changeQty(id,d){const x=cart.find(i=>i.id===id);if(!x)return;x.qty+=d;if(x.qty<=0)cart=cart.filter(i=>i.id!==id);renderCart();}
function renderCart(){document.getElementById('cartCount').textContent=cart.reduce((a,b)=>a+b.qty,0);const box=document.getElementById('cartItems');if(!cart.length){box.innerHTML='<p style="color:#716577">Tu carrito está vacío.</p>';document.getElementById('subtotal').textContent=money(0);setMinDate();return;}box.innerHTML=cart.map(x=>`<div class="cart-row"><div><h4>${x.name}</h4><small>${productPrice(x)}</small><div class="qty"><button onclick="changeQty('${x.id}',-1)">−</button><strong>${x.qty}</strong><button onclick="changeQty('${x.id}',1)">+</button></div></div><strong>${money(x.price*x.qty)}</strong></div>`).join('');document.getElementById('subtotal').textContent=money(cart.reduce((s,x)=>s+x.price*x.qty,0));setMinDate();}
const drawer=document.getElementById('cartDrawer'),backdrop=document.getElementById('backdrop');function openCart(){drawer.classList.add('open');backdrop.classList.add('show');drawer.setAttribute('aria-hidden','false')}function closeCart(){drawer.classList.remove('open');backdrop.classList.remove('show');drawer.setAttribute('aria-hidden','true')}document.getElementById('openCart').onclick=openCart;document.getElementById('closeCart').onclick=closeCart;backdrop.onclick=closeCart;

function setMinDate(){const lead=cart.length?Math.max(...cart.map(x=>x.lead||1)):1;const d=new Date();d.setDate(d.getDate()+lead);const value=d.toISOString().slice(0,10);const inp=document.getElementById('deliveryDate');inp.min=value;if(inp.value&&inp.value<value)inp.value='';}
function orderCode(){const d=new Date();return `MB-${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}-${String(d.getHours()).padStart(2,'0')}${String(d.getMinutes()).padStart(2,'0')}${String(d.getSeconds()).padStart(2,'0')}-${Math.floor(100+Math.random()*900)}`;}
async function registerOrder(payload){if(!GOOGLE_SCRIPT_URL||GOOGLE_SCRIPT_URL.includes('PEGA_AQUI'))return {skipped:true};try{await fetch(GOOGLE_SCRIPT_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(payload)});return {ok:true};}catch(e){console.error(e);return {ok:false};}}
function buildMessage(o){const lines=o.items.map(i=>`• ${i.qty} x ${i.name} — ${money(i.price*i.qty)}`).join('\n');return `Hola 👋 Quiero confirmar el pedido *${o.orderId}* de Minibisu.\n\n*PRODUCTOS*\n${lines}\n\n*SUBTOTAL:* ${money(o.subtotal)}\n\n*DATOS DE ENTREGA*\nCompra: ${o.buyerName}\nCelular: ${o.buyerPhone}\nRecibe: ${o.recipientName}\nFecha: ${o.deliveryDate}\nDirección: ${o.address}\nPersonalización: ${o.customization||'Sin indicaciones'}\nDedicatoria: ${o.dedication||'Sin dedicatoria'}\nObservaciones: ${o.observations||'Ninguna'}\n\nQuedo pendiente de confirmar disponibilidad, domicilio y el abono del 50 %.`}
document.getElementById('checkoutBtn').onclick=async()=>{if(!cart.length)return alert('Agrega al menos un producto.');const fields=['buyerName','buyerPhone','recipientName','deliveryDate','address'];for(const id of fields){if(!document.getElementById(id).value.trim())return alert('Completa los datos obligatorios del pedido.');}const subtotal=cart.reduce((s,x)=>s+x.price*x.qty,0);const payload={orderId:orderCode(),createdAt:new Date().toISOString(),buyerName:document.getElementById('buyerName').value.trim(),buyerPhone:document.getElementById('buyerPhone').value.trim(),recipientName:document.getElementById('recipientName').value.trim(),deliveryDate:document.getElementById('deliveryDate').value,address:document.getElementById('address').value.trim(),customization:document.getElementById('customization').value.trim(),dedication:document.getElementById('dedication').value.trim(),observations:document.getElementById('observations').value.trim(),subtotal,items:cart.map(x=>({id:x.id,name:x.name,qty:x.qty,price:x.price,category:x.cat})),status:'Pendiente'};const btn=document.getElementById('checkoutBtn');btn.disabled=true;btn.textContent='Registrando…';await registerOrder(payload);const url=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage(payload))}`;window.open(url,'_blank');btn.disabled=false;btn.textContent='Registrar y continuar por WhatsApp';};

renderTabs();renderProducts();renderCart();
