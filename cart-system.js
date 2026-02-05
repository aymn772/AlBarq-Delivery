// نظام سلة البرق الاحترافي الموحد ⚡
const ADMIN_PHONE = "967775185889";
let discountAmount = 0;
let userLocationLink = "لم يتم تحديد الموقع الرقمي";

// 1. نظام الكوبون مع الأصوات
function applyCoupon() {
    const code = document.getElementById('coupon-code').value.trim();
    const successSound = document.getElementById('sound-success');
    const errorSound = document.getElementById('sound-error');

    if (code === "BARQ2026") {
        discountAmount = 500;
        if(successSound) successSound.play();
        alert("🎉 مبروك! تم تفعيل خصم 500 ر.ي");
        updateTotalDisplay();
    } else {
        if(errorSound) errorSound.play();
        alert("❌ الكوبون غير صحيح");
    }
}

// 2. تحديث الحسابات في الواجهة
function updateTotalDisplay() {
    const cart = JSON.parse(localStorage.getItem('barq_cart')) || [];
    let subtotal = 0;
    
    cart.forEach(item => {
        subtotal += (item.price * item.qty);
    });

    const finalTotal = subtotal - discountAmount;

    if(document.getElementById('subtotal')) document.getElementById('subtotal').innerText = subtotal + " ر.ي";
    if(document.getElementById('discount')) document.getElementById('discount').innerText = discountAmount + " ر.ي";
    if(document.getElementById('total-price')) document.getElementById('total-price').innerText = finalTotal + " ر.ي";
}

// 3. منطق جلب الموقع (GPS)
function detectLocation() {
    if (navigator.geolocation) {
        document.getElementById('location-status').innerText = "⏳ جاري تحديد موقعك...";
        navigator.geolocation.getCurrentPosition((pos) => {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            userLocationLink = `https://www.google.com/maps?q=${lat},${lng}`;
            document.getElementById('location-status').innerText = "✅ تم تحديد الموقع بنجاح";
            
            // إذا كانت الخريطة موجودة (Leaflet)
            if(typeof map !== 'undefined') {
                map.setView([lat, lng], 16);
                marker.setLatLng([lat, lng]);
            }
        }, () => {
            alert("يرجى السماح بالوصول إلى الموقع (GPS)");
            document.getElementById('location-status').innerText = "❌ فشل تحديد الموقع";
        });
    }
}

// 4. بناء وإرسال رسالة الواتساب الاحترافية
function sendFinalOrder() {
    const cart = JSON.parse(localStorage.getItem('barq_cart')) || [];
    const phone = document.getElementById('user-phone').value;
    const address = document.getElementById('user-address').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value || "نقداً عند الاستلام";

    if (!phone || phone.length < 9) return alert("يرجى إدخال رقم هاتف صحيح");
    if (!address) return alert("يرجى كتابة العنوان يدوياً لضمان الدقة");
    if (cart.length === 0) return alert("السلة فارغة!");

    // حفظ البيانات لمرة أخرى
    localStorage.setItem('saved_phone', phone);
    localStorage.setItem('saved_address', address);

    // تجميع الوجبات حسب المطعم (دعم تعدد المطاعم)
    let itemsText = "";
    let lastRes = "";
    let totalItemsPrice = 0;

    cart.forEach(item => {
        if (item.restaurantName !== lastRes) {
            itemsText += `\n*🏪 المطعم: ${item.restaurantName || "البرق"}*\n`;
            lastRes = item.restaurantName;
        }
        itemsText += `   - ${item.name} [${item.qty} × ${item.price}]\n`;
        totalItemsPrice += (item.price * item.qty);
    });

    const finalTotal = totalItemsPrice - discountAmount;

    // تنسيق الرسالة النهائية
    const message = 
        `*طلب جديد - تطبيق البرق ⚡*\n` +
        `--------------------------\n` +
        `👤 *رقم العميل:* ${phone}\n` +
        `🏠 *العنوان اليدوي:* ${address}\n` +
        `--------------------------\n` +
        `📦 *تفاصيل الطلب:* \n${itemsText}\n` +
        `--------------------------\n` +
        `💰 *المجموع:* ${totalItemsPrice} ر.ي\n` +
        `🎁 *الخصم:* ${discountAmount} ر.ي\n` +
        `💵 *الإجمالي النهائي:* ${finalTotal} ر.ي\n` +
        `💳 *طريقة الدفع:* ${paymentMethod}\n` +
        `--------------------------\n` +
        `📍 *رابط الموقع (GPS):* \n${userLocationLink}`;

    // فتح الواتساب
    const waUrl = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
}

// 5. إضافة وجبة للسلة (تُستخدم في صفحة المنيو)
function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem('barq_cart')) || [];
    const resName = localStorage.getItem('selectedRestaurantName') || "مطعم غير محدد";
    
    const existing = cart.find(i => i.id === id);
    if(existing) {
        existing.qty++;
    } else {
        cart.push({ id, name, price, qty: 1, restaurantName: resName });
    }
    
    localStorage.setItem('barq_cart', JSON.stringify(cart));
    updateBadge(); // دالة لتحديث الرقم فوق أيقونة السلة
}

// 6. تحديث عداد السلة
function updateBadge() {
    const cart = JSON.parse(localStorage.getItem('barq_cart')) || [];
    const badge = document.getElementById('cart-badge');
    if(badge) {
        badge.innerText = cart.reduce((total, item) => total + item.qty, 0);
    }
}

// تشغيل الوظائف عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    updateBadge();
    if(document.getElementById('subtotal')) updateTotalDisplay();
});