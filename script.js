// ==========================================
// 1. قاعدة بيانات المطاعم والوجبات الشاملة (المحدثة)
// ==========================================
const restaurants = [
    {
        id: 1, 
        name: "مطعم فايف ستار - Five Star",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
        badge: "الأكثر طلباً 🔥",
        menu: [
            { id: 101, name: "برجر كلاسيك لحم", price: 1900 }, { id: 102, name: "برجر جبنة مضاعفة", price: 2300 },
            { id: 103, name: "برجر دجاج مقرمش", price: 1800 }, { id: 104, name: "مشروم برجر سويسري", price: 2500 },
            { id: 105, name: "تاور برجر (3 طبقات)", price: 3500 }, { id: 106, name: "برجر دايت", price: 2000 },
            { id: 107, name: "بيتزا مارجريتا", price: 2800 }, { id: 110, name: "بيتزا رانش دجاج", price: 3400 },
            { id: 111, name: "بيتزا خضار مشكل", price: 2900 }, { id: 112, name: "بيتزا ببروني بقري", price: 3600 },
            { id: 113, name: "بروستد (4 قطع)", price: 2600 }, { id: 114, name: "بروستد حراق", price: 2700 },
            { id: 115, name: "زنجر حار جامبو", price: 1800 }, { id: 116, name: "فيليه دجاج", price: 1700 },
            { id: 117, name: "بطاطس مقلية", price: 700 }, { id: 118, name: "حلقات بصل", price: 850 },
            { id: 119, name: "أصابع موزاريلا", price: 1200 }, { id: 120, name: "ناجتس دجاج", price: 1300 },
            { id: 121, name: "سلطة كول سلو", price: 500 }, { id: 122, name: "سلطة ذرة", price: 600 },
            { id: 123, name: "كوكا كولا", price: 400 }, { id: 124, name: "فانتا", price: 400 },
            { id: 125, name: "سبرايت", price: 400 }, { id: 126, name: "ماء معدني", price: 300 },
            { id: 127, name: "صوص باربيكيو", price: 200 }
        ]
    },
    {
        id: 2, 
        name: "شواية الخليج",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400",
        badge: "مميز ⭐",
        menu: [
            { id: 201, name: "نصف شواية مع الأرز", price: 1800 }, { id: 202, name: "حبة شواية مع الأرز", price: 3500 },
            { id: 203, name: "مضغوط دجاج", price: 1900 }, { id: 204, name: "مندي دجاج", price: 2000 },
            { id: 205, name: "مظبي دجاج", price: 2100 }, { id: 206, name: "كفتة دجاج", price: 1700 },
            { id: 207, name: "نفر لحم مندي", price: 5500 }, { id: 208, name: "نفر لحم حنيذ", price: 5800 },
            { id: 209, name: "صحن مشاوي مشكل", price: 4000 }, { id: 210, name: "سمك كنعد مع الأرز", price: 4500 },
            { id: 211, name: "إيدام بامية", price: 1100 }, { id: 212, name: "إيدام ملوخية", price: 1000 },
            { id: 213, name: "إيدام مشكل", price: 1200 }, { id: 214, name: "حمص", price: 1200 },
            { id: 215, name: "متبل", price: 1200 }, { id: 216, name: "بابا غنوج", price: 1300 },
            { id: 217, name: "سلطة حارة", price: 300 }, { id: 218, name: "سلطة خضراء", price: 800 },
            { id: 219, name: "كنافة قشطة", price: 1500 }, { id: 220, name: "أم علي", price: 1800 },
            { id: 221, name: "لبن القرية", price: 500 }, { id: 222, name: "بيبسي عائلي", price: 1500 },
            { id: 223, name: "عصير برتقال طازج", price: 1200 }, { id: 224, name: "أرز بخاري سادة", price: 1000 },
            { id: 225, name: "برياني دجاج", price: 2200 }
        ]
    },
    {
        id: 3, 
        name: "مطاعم الشيباني الحديثة",
        image: "https://images.unsplash.com/photo-1541518763669-279f00ed01aa?w=400",
        badge: "يمني أصيل ✨",
        menu: [
            { id: 301, name: "فحسة لحم بلدي", price: 4500 }, { id: 302, name: "سلتة صنعانية", price: 2500 },
            { id: 303, name: "عقدة لحم", price: 3800 }, { id: 304, name: "عقدة دجاج", price: 2800 },
            { id: 305, name: "كبدة غنم طازجة", price: 3500 }, { id: 306, name: "مقلقل لحم", price: 3600 },
            { id: 307, name: "فاصوليا ناشف", price: 1200 }, { id: 308, name: "فاصوليا بيض", price: 1300 },
            { id: 309, name: "قلابة تونة", price: 1500 }, { id: 310, name: "شكشوكة عدني", price: 1100 },
            { id: 311, name: "مدرة فاصوليا", price: 1200 }, { id: 312, name: "لحم صغار", price: 3500 },
            { id: 313, name: "فتة تمر سمن وعسل", price: 2200 }, { id: 314, name: "فتة موز بالكريمة", price: 2000 },
            { id: 315, name: "معصوب ملكي", price: 2500 }, { id: 316, name: "عريكة قشطة", price: 2600 },
            { id: 317, name: "خبز ملوج كبير", price: 500 }, { id: 318, name: "خبز رطب", price: 600 },
            { id: 319, name: "مطبق مالح", price: 1200 }, { id: 320, name: "مطبق حلو", price: 1300 },
            { id: 321, name: "شاهي أحمر عدني", price: 200 }, { id: 322, name: "شاهي حليب", price: 300 },
            { id: 323, name: "عصير فيمتو", price: 800 }, { id: 324, name: "شفوت يمني", price: 1000 },
            { id: 325, name: "مرق بلدي", price: 0 }
        ]
    },
    {
        id: 4, 
        name: "بيتزا هت - Pizza Hut",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
        badge: "عالمي 🌍",
        menu: [
            { id: 401, name: "بيتزا ببروني وسط", price: 3800 }, { id: 402, name: "بيتزا سوبر سوبريم", price: 4200 },
            { id: 403, name: "بيتزا عشاق اللحم", price: 4400 }, { id: 404, name: "بيتزا دجاج رانش", price: 4100 },
            { id: 405, name: "بيتزا خضار", price: 3400 }, { id: 406, name: "بيتزا مارجريتا", price: 3200 },
            { id: 407, name: "بيتزا هاوايان", price: 3900 }, { id: 408, name: "بيتزا تشيزي بايتس", price: 4800 },
            { id: 409, name: "لازانيا لحم", price: 3500 }, { id: 410, name: "فيتوتشيني الفريدو", price: 3200 },
            { id: 411, name: "أجنحة دجاج بوفالو", price: 1500 }, { id: 412, name: "أجنحة باربيكيو", price: 1500 },
            { id: 413, name: "بطاطس ودجز", price: 900 }, { id: 414, name: "بطاطس مقلية", price: 800 },
            { id: 415, name: "خبز بالثوم", price: 1000 }, { id: 416, name: "خبز بالثوم وجبن", price: 1300 },
            { id: 417, name: "سلطة خضراء", price: 1200 }, { id: 418, name: "سلطة يونانية", price: 1500 },
            { id: 419, name: "سيزر دجاج", price: 1800 }, { id: 420, name: "تورتيلا دجاج", price: 1400 },
            { id: 421, name: "هيرشي كوكيز", price: 1800 }, { id: 422, name: "بيبسي", price: 400 },
            { id: 423, name: "ميرندا برتقال", price: 400 }, { id: 424, name: "سفن اب", price: 400 },
            { id: 425, name: "آيس تي ليمون", price: 600 }
        ]
    },
    {
        id: 5, 
        name: "هاجن داز - الحلويات",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400",
        badge: "حلى 🍦",
        menu: [
            { id: 501, name: "كريب نوتيلا فواكه", price: 2500 }, { id: 502, name: "وافل شوكولاتة", price: 2800 },
            { id: 503, name: "بان كيك عسل", price: 2200 }, { id: 504, name: "مولتن كيك", price: 3200 },
            { id: 505, name: "آيسكريم فانيلا", price: 1200 }, { id: 506, name: "آيسكريم شوكولاتة", price: 1200 },
            { id: 507, name: "آيسكريم فراولة", price: 1200 }, { id: 508, name: "تشيز كيك فواكه", price: 2500 },
            { id: 509, name: "كيكة العسل", price: 2800 }, { id: 510, name: "تيراميسو", price: 3000 },
            { id: 511, name: "براونيز كيك", price: 2200 }, { id: 512, name: "سلطة فواكه", price: 1800 },
            { id: 513, name: "ميلك شيك أوريو", price: 1800 }, { id: 514, name: "ميلك شيك فراولة", price: 1600 },
            { id: 515, name: "ميلك شيك لوتس", price: 1900 }, { id: 516, name: "سموذي مانجو", price: 1500 },
            { id: 517, name: "عصير كوكتيل", price: 1500 }, { id: 518, name: "عصير جوافة", price: 1200 },
            { id: 519, name: "عصير فراولة", price: 1300 }, { id: 520, name: "موهيتو فراولة", price: 1400 },
            { id: 521, name: "موهيتو بلو", price: 1400 }, { id: 522, name: "قهوة عربية (دلة)", price: 2500 },
            { id: 523, name: "كابتشينو", price: 1200 }, { id: 524, name: "لاتيه بارد", price: 1500 },
            { id: 525, name: "اسبريسو", price: 800 }
        ]
    },
    {
        id: 6, 
        name: "بوفية السبعين النموذجية",
        image: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?w=400",
        badge: "سريع ⚡",
        menu: [
            { id: 601, name: "ساندوتش كبدة", price: 600 }, { id: 602, name: "ساندوتش شكشوكة", price: 400 },
            { id: 603, name: "ساندوتش فاصوليا", price: 400 }, { id: 604, name: "ساندوتش تونة", price: 600 },
            { id: 605, name: "ساندوتش دجاج مفروم", price: 700 }, { id: 606, name: "ساندوتش بيض جبن", price: 500 },
            { id: 607, name: "ساندوتش بطاطس باذنجان", price: 400 }, { id: 608, name: "صاروخ كبدة جبن", price: 1000 },
            { id: 609, name: "صاروخ مشكل", price: 1200 }, { id: 610, name: "صحن كبدة طازجة", price: 2500 },
            { id: 611, name: "صحن بيض مشكل", price: 1200 }, { id: 612, name: "صحن فاصوليا تونة", price: 1500 },
            { id: 613, name: "فلافل (حبة)", price: 50 }, { id: 614, name: "ساندوتش فلافل مشكل", price: 500 },
            { id: 615, name: "برجر بوفية لحم", price: 800 }, { id: 616, name: "برجر بوفية دجاج", price: 800 },
            { id: 617, name: "شاهي أحمر", price: 100 }, { id: 618, name: "شاهي حليب عدني", price: 200 },
            { id: 619, name: "نسكافيه حليب", price: 300 }, { id: 620, name: "عصير ليمون نعناع", price: 800 },
            { id: 621, name: "عصير جوافة حليب", price: 1000 }, { id: 622, name: "مشروب غازي علبة", price: 400 },
            { id: 623, name: "ماء صغير", price: 150 }, { id: 624, name: "ساندوتش جبنة فيتا", price: 300 },
            { id: 625, name: "ساندوتش حلاوة طحينية", price: 300 }
        ]
    }
];
// ==========================================
// // 2. الثوابت وإعدادات النظام (تحديث شامل لكافة المحافظ)
// ==========================================

// أرقام خدمة العملاء (الرقم الأول 775185889 هو المستلم الرئيسي للطلبات)
const supportNumbers = ["775185889", "781110052", "774245506", "772111598"];

// إدارة بيانات السلة (تحميل البيانات المحفوظة من متصفح العميل)
let cart = JSON.parse(localStorage.getItem('barqCart')) || []; 

// مصفوفة شاملة لكافة المحافظ الإلكترونية والبنوك في اليمن
const yemenWallets = [
    "كريمي (ام فلوس)", 
    "محفظة جوالي (YKB)", 
    "محفظة بيس (Pace)", 
    "محفظة جيب (Pocket)", 
    "موبايل موني (CAC)", 
    "محفظة يمن موني", 
    "محفظة قطاف (Saba)", 
    "محفظة فلوسك", 
    "محفظة سبأ موني",
    "محفظة واي كاش (Y-Cash)",
    "محفظة النجم (بلاس)",
    "محفظة ريال موبايل"
];

// متغيرات الخريطة والمؤشر (Leaflet Map)
let map, marker;

// --- إعدادات نظام الكوبونات والعروض ---
let isCouponApplied = false; 

const activeCoupons = {
    "FIVE20": 0.20, // خصم 20%
    "BARQ10": 0.10  // خصم 10%
};

// إعدادات رسوم التوصيل
const deliveryFee = 0; 

// نص التنبيه الموحد لعمليات التحويل
const transferAlertText = "⚠️ يرجى إرسال صورة إشعار التحويل عبر الواتساب فور إرسال الطلب لضمان التأكيد.";
// ==========================================
// ==========================================
// 3. وظائف واجهة المستخدم والعدادات
// ==========================================
function updateVisitCounter() {
    let visits = localStorage.getItem('visitCount') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('visitCount', visits);
}

const customerReviews = []; 
window.displayReviews = function() {
    const container = document.getElementById('reviews-container');
    if (!container) return;
    container.innerHTML = customerReviews.length === 0 ? 
        '<p class="text-center text-gray-400 font-bold py-10 italic">لا توجد آراء حالياً.. ✨</p>' : 
        customerReviews.map(rev => `
            <div class="bg-white p-6 rounded-3xl shadow-sm border-b-4 border-barq-blue text-right">
                <p class="text-yellow-400 mb-2">${rev.stars}</p>
                <p class="text-gray-600 italic mb-4">"${rev.comment}"</p>
                <p class="font-black text-barq-orange text-sm">- ${rev.name}</p>
            </div>`).join('');
};

window.addNewReview = function() {
    const name = prompt("أدخل اسمك:");
    const comment = prompt("ما هو رأيك في خدمة البرق؟");
    if (name && comment) {
        customerReviews.unshift({ name, comment, stars: "⭐⭐⭐⭐⭐" });
        displayReviews();
    }
};

window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
};

// ==========================================// ==========================================
// 4. عرض المطاعم والمنيو (النسخة النهائية لحل مشكلة "غير محدد")
// ==========================================
window.displayRestaurantsGrid = function(searchTerm = "") {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;

    const filtered = restaurants.filter(res => res.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    grid.innerHTML = filtered.map(res => `
        <div class="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 text-center relative cursor-pointer hover:shadow-lg transition transform hover:-translate-y-1" 
             onclick="openRestaurantMenu(${res.id})">
            ${res.badge ? `<span class="absolute top-3 right-3 bg-yellow-400 text-[10px] px-2 py-1 rounded-full font-black z-10">${res.badge}</span>` : ''}
            <img src="${res.image}" class="w-full h-32 md:h-40 object-cover rounded-2xl mb-4">
            <h3 class="font-black text-sm md:text-lg mb-1">${res.name}</h3>
            <p class="text-barq-blue font-bold italic text-xs">عرض القائمة 🍴</p>
        </div>`).join('');
};

window.openRestaurantMenu = function(resId) {
    const res = restaurants.find(r => r.id === resId);
    const grid = document.getElementById('menu-grid');
    const titleContainer = document.getElementById('page-title-container');

    // --- التعديل الجوهري: تحديث قيمة الحقل المخفي فوراً ---
    const hiddenInput = document.getElementById('selected-restaurant-name');
    if (hiddenInput) {
        hiddenInput.value = res.name; // سيتم تخزين الاسم (مثلاً: شواية الخليج)
    }
    // -------------------------------------------------

    if (titleContainer) {
        titleContainer.innerHTML = `
            <div class="flex flex-col mb-6">
                <button onclick="displayRestaurantsGrid()" class="text-right text-barq-blue font-bold text-sm mb-2">← العودة للمطاعم</button>
                <h1 class="text-2xl font-black text-gray-800 italic">${res.name}</h1>
            </div>`;
    }

    grid.innerHTML = res.menu.map(item => `
        <div class="bg-white p-3 rounded-3xl shadow-sm border border-gray-100 text-center animate-fade-in">
            <h3 class="font-black text-xs mb-1">${item.name}</h3>
            <p class="text-barq-blue font-bold mb-3 text-sm">${item.price} ريال</p>
            <button onclick="addMenuItemToCart(${res.id}, ${item.id})" 
                    class="bg-barq-orange text-white px-4 py-2 rounded-xl font-black w-full text-xs shadow-md active:scale-95 transition">
                إضافة للسلة 🛒
            </button>
        </div>`).join('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
/// ==========================================
// 5. إدارة السلة وإضافة العروض (النسخة الشاملة لدعم المطاعم المتعددة)
// ==========================================

// وظيفة إضافة العروض الخاصة للسلة
window.addOfferToCart = function(offerName, restaurantName, price) {
    const offerId = "offer-" + offerName.replace(/\s+/g, '-');
    const existing = cart.find(item => item.id === offerId);
    if (existing) { 
        existing.quantity += 1; 
    } else { 
        cart.push({ 
            id: offerId, 
            name: offerName, 
            restaurantName: restaurantName, // حفظ اسم المطعم للعرض
            price: price, 
            quantity: 1 
        }); 
    }
    updateCartUI();
    openCartDrawer();
};

// وظيفة إضافة الوجبات العادية للسلة
window.addMenuItemToCart = function(resId, itemId) {
    const res = restaurants.find(r => r.id === resId);
    const product = res.menu.find(m => m.id === itemId);
    
    // البحث عن المنتج مع التأكد من معرف المطعم (لعدم خلط الوجبات المتشابهة)
    const existing = cart.find(item => item.id === itemId && item.restaurantName === res.name);
    
    if (existing) { 
        existing.quantity += 1; 
    } else { 
        cart.push({ 
            id: product.id, 
            name: product.name, 
            restaurantName: res.name, // حفظ اسم المطعم لرسالة الواتساب
            price: product.price, 
            quantity: 1 
        }); 
    }
    updateCartUI();
    openCartDrawer();
};

// وظيفة تحديث واجهة السلة وحساب الإجمالي مع الخصم
function updateCartUI() {
    localStorage.setItem('barqCart', JSON.stringify(cart));
    const container = document.getElementById('cart-items');
    
    let totalAfterDiscount = 0;
    cart.forEach(item => {
        let priceToCalculate = item.price;
        // تطبيق الخصم إذا كان الكوبون مفعل ومطعم فايف ستار
        if (typeof isCouponApplied !== 'undefined' && isCouponApplied && item.restaurantName.includes("فايف ستار")) {
            priceToCalculate = item.price * 0.8;
        }
        totalAfterDiscount += (priceToCalculate * item.quantity);
    });

    if (container) {
        if (cart.length === 0) {
            container.innerHTML = '<p class="text-center py-10 opacity-40 font-bold">السلة فارغة 🛒</p>';
        } else {
            container.innerHTML = cart.map(item => {
                let currentItemPrice = item.price;
                let discountLabel = "";
                
                if (typeof isCouponApplied !== 'undefined' && isCouponApplied && item.restaurantName.includes("فايف ستار")) {
                    currentItemPrice = item.price * 0.8;
                    discountLabel = `<span class="text-green-500 text-[9px] block font-black">خصم 20% مفعّل ✅</span>`;
                }

                return `
                <div class="flex justify-between items-center bg-white p-3 rounded-2xl mb-2 border border-gray-100 shadow-sm animate-fade-in">
                    <div class="text-right">
                        <p class="font-black text-xs">${item.name}</p>
                        <p class="text-gray-400 text-[9px] font-bold">${item.restaurantName}</p> <p class="text-barq-blue text-[10px] font-bold">${Math.round(currentItemPrice)} ريال × ${item.quantity}</p>
                        ${discountLabel}
                    </div>
                    <button onclick="removeFromCart('${item.id}')" class="text-red-500 font-black px-2 hover:scale-110 transition">✕</button>
                </div>`;
            }).join('');
        }
    }
    
    const totalElement = document.getElementById('cart-total');
    if (totalElement) {
        totalElement.innerText = Math.round(totalAfterDiscount) + " ريال";
    }

    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.innerText = cart.length;
        cart.length > 0 ? badge.classList.remove('hidden') : badge.classList.add('hidden');
    }
}

// وظيفة حذف عنصر من السلة
window.removeFromCart = function(id) {
    cart = cart.filter(item => item.id != id);
    updateCartUI();
};

// وظيفة تفعيل الكوبون
window.applyCoupon = function() {
    const input = document.getElementById('coupon-input');
    const msg = document.getElementById('coupon-msg');
    const code = input.value.trim().toUpperCase();
    
    if (code === "FIVE20") {
        isCouponApplied = true;
        new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3').play().catch(() => {});
        alert("🎉 مبروك! تم تفعيل خصم 20% لمطعم فايف ستار.");
        msg.innerText = "تم تفعيل الخصم بنجاح! ✅";
        msg.className = "text-[9px] mt-1 text-right font-bold text-green-600 animate-bounce";
        input.style.borderColor = "#22c55e";
        input.disabled = true;
        updateCartUI();
    } else {
        isCouponApplied = false;
        new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3').play().catch(() => {});
        alert("❌ الكود غير صحيح");
        msg.innerText = "الكود غير صحيح ❌";
        msg.className = "text-[9px] mt-1 text-right font-bold text-red-600";
        input.style.borderColor = "#ef4444";
        updateCartUI();
    }
};
// ==========================================
// 6. الخريطة وإعدادات الموقع (تم حذف الحقن اليدوي لمنع التعارض)
// ==========================================
function initBarqMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer || map) return;
    
    // إحداثيات صنعاء الافتراضية
    const defaultLat = 15.3502;
    const defaultLng = 44.2085;

    map = L.map('map').setView([defaultLat, defaultLng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    
    marker = L.marker([defaultLat, defaultLng], { draggable: true }).addTo(map);
    
    // تحديث الإحداثيات فوراً عند التحميل
    const coordsInput = document.getElementById('location-coords');
    if (coordsInput) coordsInput.value = `${defaultLat},${defaultLng}`;

    marker.on('dragend', () => {
        const pos = marker.getLatLng();
        if (coordsInput) coordsInput.value = `${pos.lat},${pos.lng}`;
    });
}

window.getCurrentLocation = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            
            if (map && marker) {
                map.setView([lat, lng], 17);
                marker.setLatLng([lat, lng]);
                document.getElementById('location-coords').value = `${lat},${lng}`;
            }
        }, () => {
            alert("يرجى تفعيل الـ GPS في هاتفك لتحديد موقعك تلقائياً 🎯");
        });
    } else {
        alert("متصفحك لا يدعم خاصية تحديد الموقع.");
    }
};
// ==========================================
// 7. إرسال الطلب عبر واتساب (النسخة الشاملة والكاملة - بدون نقص)
// ==========================================
function setupWhatsAppAction() {
    const btn = document.getElementById('whatsapp-checkout');
    if (!btn) return;

    btn.onclick = function() {
        // 1. التحقق من وجود أصناف في السلة
        if (typeof cart === 'undefined' || cart.length === 0) {
            return alert("سلتك فارغة، فضلاً أضف وجباتك المفضلة أولاً! 🛒");
        }
        
        // 2. جلب تفاصيل العنوان والموقع وطريقة الدفع
        const manualAddr = document.getElementById('manual-address')?.value.trim() || "غير محدد";
        const coords = document.getElementById('location-coords')?.value;
        const payment = document.getElementById('payment-method')?.value || "نقد عند الاستلام (كاش)";

        // 3. تجهيز رابط الخريطة الاحترافي
        const mapLink = coords ? `https://www.google.com/maps?q=${coords}` : "لم يتم تحديد موقع GPS";

        // 4. بناء نص الرسالة
        let msg = "🍱 *طلب جديد - البرق للتوصيل* ⚡\n";
        msg += "------------------------------\n";
        
        let finalTotal = 0;
        
        // حلقة تمر على كل وجبة في السلة
        cart.forEach((item, i) => {
            let currentPrice = item.price;
            let itemNote = "";

            // تطبيق الخصم إذا كان الكوبون مفعل ومطعم فايف ستار
            if (typeof isCouponApplied !== 'undefined' && isCouponApplied && item.restaurantName && item.restaurantName.includes("فايف ستار")) {
                currentPrice = item.price * 0.8;
                itemNote = " (خصم 20% ✅)";
            }

            const itemLineTotal = currentPrice * item.quantity;
            finalTotal += itemLineTotal;

            // تفاصيل الصنف
            msg += `${i + 1}. *${item.name}*${itemNote}\n`;
            msg += `   🏢 *المطعم:* ${item.restaurantName || "غير محدد"}\n`;
            msg += `   💰 السعر: ${Math.round(currentPrice)} ريال [العدد: ${item.quantity}]\n`;
            msg += "   - - -\n";
        });

        msg += "------------------------------\n";
        
        // عرض الكوبون في الإجمالي إذا كان مفعلاً
        if (typeof isCouponApplied !== 'undefined' && isCouponApplied) {
            msg += `🎁 *الكوبون:* FIVE20 (مفعّل)\n`;
        }

        msg += `💰 *الإجمالي النهائي:* ${Math.round(finalTotal)} ريال\n\n`;
        msg += `💳 *طريقة الدفع:* ${payment}\n`;
        msg += `🏠 *العنوان الوصفي:* ${manualAddr}\n`;
        msg += `📍 *موقع العميل (GPS):* \n${mapLink}\n\n`;
        
        // أرقام الإدارة والدعم الفني
        msg += "🟢 مسئول الطلبات: 775185889\n";
        msg += "🏢 الإدارة العامة: 772111598\n";
        msg += "🛠️ الدعم الفني: 774245506\n";
        msg += "☎️ استفسارات: 781110052\n\n";
        msg += "شكراً لاختياركم البرق للتوصيل ⚡";

        // رقم مسئول الطلبات الرئيسي
        const orderManager = "775185889"; 
        
        // فتح الواتساب
        window.open(`https://wa.me/967${orderManager}?text=${encodeURIComponent(msg)}`, '_blank');
    };
}
// ==========================================
// 8. التحكم في السلة والتشغيل
// ==========================================
window.openCartDrawer = function() { 
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    
    if (drawer && overlay) {
        drawer.style.transform = "translateX(0)"; 
        overlay.classList.remove('hidden');
        setupWhatsAppAction(); 

        if(typeof map !== 'undefined' && map) {
            setTimeout(() => { map.invalidateSize(); }, 400);
        }
    }
};

window.closeCartDrawer = function() { 
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.style.transform = "translateX(-100%)"; 
        overlay.classList.add('hidden');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (typeof updateVisitCounter === 'function') updateVisitCounter();
    if (typeof displayReviews === 'function') displayReviews();
    if (typeof updateCartUI === 'function') updateCartUI();
    
    setupWhatsAppAction();
    initBarqMap();
    if (typeof displayRestaurantsGrid === 'function') displayRestaurantsGrid();

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            if (typeof displayRestaurantsGrid === 'function') {
                displayRestaurantsGrid(e.target.value);
            }
        });
    }
});
// ==========================================
// 9. وظائف إضافية (التحقق من الدفع وتنسيق الواجهة)
// ==========================================

// دالة التحقق من طريقة الدفع لإظهار التنبيه
window.checkPaymentMethod = function() {
    const paymentSelect = document.getElementById('payment-method');
    const transferNote = document.getElementById('transfer-note');
    
    if (paymentSelect && transferNote) {
        // إذا اختار العميل أي وسيلة دفع غير الكاش، يظهر تنبيه إرسال الإشعار
        if (paymentSelect.value !== "نقد عند الاستلام (كاش)") {
            transferNote.classList.remove('hidden');
        } else {
            transferNote.classList.add('hidden');
        }
    }
};

// دالة لتحديث عداد الزيارات (في حال أردت تفعيلها)
window.updateVisitCounter = function() {
    let visits = localStorage.getItem('barq_visits') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('barq_visits', visits);
};

// تأكيد إغلاق كافة الأقواس البرمجية لضمان عمل الملف
console.log("البرق للتوصيل: تم تحميل نظام التشغيل بنجاح ⚡");