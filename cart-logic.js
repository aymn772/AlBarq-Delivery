/**
 * ==========================================
 * محرك البرق للتوصيل ⚡ - النسخة الشاملة
 * تطوير: أيمن المرادي
 * ==========================================
 */

// --- [1] إعدادات الحالة والبيانات ---
let cart = JSON.parse(localStorage.getItem('barq_cart')) || [];
let discountPercent = 0;
let appliedCoupon = "";
const MIN_ORDER_VAL = 1000; // الحد الأدنى للطلب 1000 ريال

// إعداد الأصوات
const successSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
const errorSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2573/2573-preview.mp3');

document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
});

// --- [2] إدارة السلة الذكية ---
function addToCart(id, name, price, restaurantName) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ 
            id, name, 
            price: parseFloat(price), 
            quantity: 1, 
            restaurant: restaurantName 
        });
    }
    
    // إضافات احترافية: صوت + اهتزاز بسيط للهاتف
    successSound.play();
    if (navigator.vibrate) navigator.vibrate(50); 
    
    saveAndRefresh();
    openCartDrawer();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveAndRefresh();
}

function clearCart() {
    cart = [];
    discountPercent = 0;
    appliedCoupon = "";
    saveAndRefresh();
}

function saveAndRefresh() {
    localStorage.setItem('barq_cart', JSON.stringify(cart));
    updateCartUI();
}

// --- [3] محرك الخصومات المتقدم ---
function applyDiscount() {
    const input = document.getElementById('coupon-code');
    if (!input) return;
    
    const code = input.value.trim().toUpperCase();
    if (!code) return alert("يرجى إدخال رمز الكوبون");

    // جلب الكوبونات الديناميكية من لوحة الإدارة (app_coupons)
    const dynamicCoupons = JSON.parse(localStorage.getItem('app_coupons')) || [];
    let foundCoupon = dynamicCoupons.find(c => c.code.toUpperCase() === code);

    if (foundCoupon) {
        discountPercent = parseFloat(foundCoupon.discount);
        appliedCoupon = foundCoupon.code;
        successSound.play();
        alert(`🎉 تهانينا! تم تطبيق خصم ${discountPercent}%`);
    } else {
        errorSound.play();
        alert("⚠️ عذراً، هذا الكوبون غير فعال حالياً");
        discountPercent = 0;
        appliedCoupon = "";
    }
    updateCartUI();
}

// --- [4] معالج الحسابات والواجهة ---
function updateCartUI() {
    const cartItemsWrapper = document.getElementById('cart-items');
    const cartTotalDisplay = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    if(cartCount) cartCount.innerText = totalQty;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = (subtotal * discountPercent) / 100;
    const finalTotal = subtotal - discountAmount;

    if (cartItemsWrapper) {
        if (cart.length === 0) {
            cartItemsWrapper.innerHTML = `
                <div class="text-center py-20">
                    <div class="text-5xl mb-4">🛒</div>
                    <p class="text-gray-400 font-bold italic">السلة فارغة حالياً</p>
                </div>`;
        } else {
            cartItemsWrapper.innerHTML = cart.map(item => `
                <div class="flex justify-between items-center bg-white p-3 rounded-2xl border border-gray-100 mb-3 shadow-sm hover:border-orange-200 transition">
                    <div class="flex flex-col text-right">
                        <span class="font-black text-[13px] text-gray-800">${item.name}</span>
                        <span class="text-[10px] text-gray-400 font-bold">${item.restaurant}</span>
                        <div class="flex gap-2 items-center mt-1">
                            <span class="text-[11px] text-orange-600 font-black">${item.price.toLocaleString()} ريال</span>
                            <span class="text-[10px] bg-gray-100 px-2 rounded-full">العدد: ${item.quantity}</span>
                        </div>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-red-400 hover:text-red-600 p-2">
                        <i class="fas fa-trash-alt"></i> ✕
                    </button>
                </div>
            `).join('');
        }
    }

    if (cartTotalDisplay) {
        cartTotalDisplay.innerHTML = `
            <div class="w-full space-y-1 text-right">
                <div class="flex justify-between text-sm text-gray-500">
                    <span>الإجمالي الفرعي:</span>
                    <span>${subtotal.toLocaleString()} ريال</span>
                </div>
                ${discountPercent > 0 ? `
                <div class="flex justify-between text-sm text-green-600 font-bold">
                    <span>خصم (${appliedCoupon}):</span>
                    <span>-${discountAmount.toLocaleString()} ريال</span>
                </div>` : ''}
                <hr class="my-2">
                <div class="flex justify-between items-center">
                    <span class="font-bold text-gray-800">الصافي النهائي:</span>
                    <span class="text-2xl font-black text-orange-600">${finalTotal.toLocaleString()} ريال</span>
                </div>
            </div>
        `;
    }
}

// --- [5] نظام معالجة الطلبات وإرسالها ---
function sendToWhatsApp() {
    if (cart.length === 0) return alert("سلتك فارغة، أضف بعض الوجبات أولاً!");

    const phoneInput = document.getElementById('customer-phone');
    const addressInput = document.getElementById('manual-address');
    
    if (!phoneInput.value || phoneInput.value.length < 9) {
        errorSound.play();
        return alert("يرجى إدخال رقم هاتف صحيح");
    }
    if (!addressInput.value) {
        errorSound.play();
        return alert("يرجى تحديد عنوان التوصيل");
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (subtotal < MIN_ORDER_VAL) {
        return alert(`عذراً، أقل قيمة للطلب هي ${MIN_ORDER_VAL} ريال`);
    }

    const finalPrice = subtotal - (subtotal * discountPercent / 100);

    // تسجيل الطلب في سجل الإدارة المحلي
    const orderRecord = {
        orderId: "#BRQ-" + Date.now().toString().slice(-4),
        phone: phoneInput.value,
        address: addressInput.value,
        items: cart.map(i => `${i.name} (${i.quantity})`),
        total: finalPrice,
        time: new Date().toLocaleString('ar-EG')
    };

    const logs = JSON.parse(localStorage.getItem('barq_orders_log')) || [];
    logs.unshift(orderRecord); // إضافة في البداية
    localStorage.setItem('barq_orders_log', JSON.stringify(logs));

    // بناء رسالة الواتساب الاحترافية
    let msg = `*⚡ طلب جديد - محرك البرق ⚡*%0A`;
    msg += `--------------------------%0A`;
    msg += `*🔢 رقم الطلب:* ${orderRecord.orderId}%0A`;
    msg += `*👤 هاتف العميل:* ${orderRecord.phone}%0A`;
    msg += `*📍 العنوان:* ${orderRecord.address}%0A%0A`;
    
    msg += `*📦 قائمة الطلبات:*%0A`;
    cart.forEach(item => {
        msg += `• ${item.name} [${item.quantity}] ← ${item.price * item.quantity} ريال%0A`;
    });

    if (discountPercent > 0) {
        msg += `%0A🎁 *كوبون الخصم:* ${appliedCoupon} (${discountPercent}%)`;
    }
    msg += `%0A💰 *الإجمالي النهائي: ${finalPrice.toLocaleString()} ريال*%0A`;
    msg += `--------------------------%0A`;
    msg += `*الموقع:* ${window.location.hostname}%0A`;
    msg += `⚡ شكراً لثقتكم بالبرق للتوصيل ⚡`;

    // فتح واتساب وتفريغ السلة بعد 2 ثانية
    window.open(`https://wa.me/967775185889?text=${msg}`, '_blank');
    
    setTimeout(() => {
        if(confirm("هل تريد تفريغ السلة لبدء طلب جديد؟")) {
            clearCart();
            closeCartDrawer();
        }
    }, 2000);
}

// --- [6] وظائف الواجهة (Drawer) ---
function openCartDrawer() { 
    document.getElementById('cart-drawer').style.transform = 'translateX(0)'; 
    document.getElementById('cart-overlay').classList.remove('hidden'); 
}

function closeCartDrawer() { 
    document.getElementById('cart-drawer').style.transform = 'translateX(-100%)'; 
    document.getElementById('cart-overlay').classList.add('hidden'); 
}