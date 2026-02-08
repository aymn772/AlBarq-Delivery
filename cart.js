<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>تأكيد الطلب | البرق ⚡</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

    <style>
        :root { 
            --main-blue: #0057FF; 
            --main-orange: #FF6B00; 
        }
        
        body { 
            font-family: 'Cairo', sans-serif; 
            background: #f8faff; 
            color: #1e293b; 
        }
        
        .card { 
            background: white; 
            border-radius: 28px; 
            border: 1px solid rgba(0,0,0,0.04); 
            box-shadow: 0 10px 30px rgba(0,0,0,0.02); 
        }
        
        #map { 
            height: 250px; 
            border-radius: 24px; 
            border: 2px solid #f1f5f9; 
            z-index: 10; 
            width: 100%; 
        }
        
        .input-field { 
            background: #f8fafc; 
            border: 2px solid #f1f5f9; 
            border-radius: 18px; 
            padding: 16px; 
            font-weight: 700; 
            width: 100%; 
            transition: 0.3s; 
            outline: none; 
            text-align: right; 
        }
        
        .input-field:focus { 
            border-color: var(--main-blue); 
            background: white; 
            box-shadow: 0 0 0 4px rgba(0,87,255,0.1); 
        }
    </style>
</head>
<body class="pb-10">

    <nav class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-[1000] py-4 px-[6%] border-b border-gray-100 flex justify-between items-center">
        <button onclick="history.back()" class="w-11 h-11 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
            <i class="fas fa-arrow-right"></i>
        </button>
        <span class="text-xl font-black text-gray-900 italic underline decoration-blue-500 underline-offset-8">مراجعة <span class="text-blue-600">الطلب</span> ⚡</span>
        <div class="w-11"></div>
    </nav>

    <main class="max-w-6xl mx-auto px-4 mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div class="lg:col-span-7 space-y-6">
            <div class="card p-6">
                <h3 class="text-lg font-black mb-6 flex items-center gap-3 text-gray-800">
                    <i class="fas fa-shopping-bag text-blue-600"></i> محتويات السلة
                </h3>
                <div id="cart-list" class="space-y-4">
                    <!-- سيتم ملؤها بواسطة JavaScript -->
                </div>
            </div>

            <div class="card p-6">
                <h3 class="text-lg font-black mb-4 flex items-center gap-3 text-gray-800">
                    <i class="fas fa-map-marked-alt text-blue-600"></i> عنوان التوصيل
                </h3>
                <div class="space-y-4">
                    <input type="tel" id="user-phone" placeholder="رقم الهاتف (7xxxxxxxx)" class="input-field">
                    <input type="text" id="user-address" placeholder="وصف العنوان (الحي، المعلم القريب)" class="input-field">
                    
                    <div class="pt-2">
                        <div class="flex justify-between items-center mb-3">
                            <span class="text-xs font-black text-gray-400 italic">موقعك على الخريطة 📍</span>
                            <button onclick="detectLocation()" class="text-[10px] font-black bg-blue-50 text-blue-600 px-4 py-2 rounded-xl border border-blue-100">
                                <i class="fas fa-location-arrow ml-1"></i> تحديد تلقائي GPS
                            </button>
                        </div>
                        <div id="map"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:col-span-5 space-y-6">
            <div class="card p-6 border-2 border-dashed border-blue-100 bg-blue-50/30">
                <h3 class="text-sm font-black mb-3">هل لديك كوبون خصم؟</h3>
                <div class="flex gap-2">
                    <input type="text" id="coupon-code" placeholder="أدخل الكود" class="input-field py-3 text-center uppercase">
                    <button onclick="applyCoupon()" class="bg-gray-900 text-white px-6 rounded-2xl font-black text-sm transition-transform active:scale-90">تفعيل</button>
                </div>
            </div>

            <div class="card p-8 bg-gray-900 text-white shadow-2xl shadow-blue-200">
                <h3 class="text-xl font-black mb-6 italic border-b border-gray-800 pb-4">ملخص الفاتورة</h3>
                <div class="space-y-4 mb-8 text-gray-400 font-bold">
                    <div class="flex justify-between items-center">
                        <span>مجموع الوجبات:</span>
                        <span id="subtotal" class="text-white">0 ر.ي</span>
                    </div>
                    <div class="flex justify-between items-center text-green-400">
                        <span>خصم الكوبون:</span>
                        <span id="discount">0 ر.ي</span>
                    </div>
                    <div class="flex justify-between items-center text-sm">
                        <span>رسوم التوصيل:</span>
                        <span class="text-white">حسب المنطقة</span>
                    </div>
                </div>

                <div class="flex justify-between items-center text-3xl font-black pt-6 border-t border-gray-800 mb-8">
                    <span class="text-lg">الإجمالي:</span>
                    <span id="total-price" class="text-blue-400">0 ر.ي</span>
                </div>

                <button onclick="sendFinalOrder()" class="w-full bg-[#25D366] text-white py-5 rounded-[22px] font-black text-xl flex items-center justify-center gap-3 shadow-xl hover:bg-[#1fb355] transition-all active:scale-95">
                    <i class="fab fa-whatsapp text-3xl"></i>
                    تأكيد وإرسال الطلب
                </button>
            </div>
        </div>
    </main>

    <script>
        // البيانات والمتغيرات العامة
        const ADMIN_PHONE = "967775185889"; 
        let map = null;
        let marker = null;
        let discountVal = 0;
        let couponName = "لا يوجد";

        // تهيئة التطبيق بعد تحميل الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            loadCart();
            setTimeout(initMap, 100);
        });

        // إعداد الخريطة
        function initMap() {
            const mapElement = document.getElementById('map');
            
            if (!mapElement) {
                console.error('عنصر الخريطة غير موجود');
                return;
            }
            
            try {
                // إنشاء الخريطة
                map = L.map('map').setView([15.3502, 44.2075], 13);
                
                // إضافة طبقة الخريطة
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors'
                }).addTo(map);
                
                // إنشاء علامة قابلة للسحب
                marker = L.marker([15.3502, 44.2075], {
                    draggable: true
                }).addTo(map);
                
                // تحديث حجم الخريطة
                setTimeout(function() {
                    map.invalidateSize();
                }, 100);
                
                console.log('تم تحميل الخريطة بنجاح');
                
            } catch (error) {
                console.error('خطأ في تحميل الخريطة:', error);
            }
        }

        // تحديد الموقع الحالي
        function detectLocation() {
            if (!navigator.geolocation) {
                alert('متصفحك لا يدعم تحديد الموقع');
                return;
            }
            
            if (!map || !marker) {
                alert('الخريطة لم يتم تحميلها بعد');
                return;
            }
            
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    
                    map.setView([lat, lng], 17);
                    marker.setLatLng([lat, lng]);
                    
                    alert('تم تحديث موقعك على الخريطة');
                },
                function(error) {
                    let message = 'فشل في تحديد الموقع: ';
                    if (error.code === 1) {
                        message += 'تم رفض الإذن';
                    } else if (error.code === 2) {
                        message += 'الموقع غير متاح';
                    } else if (error.code === 3) {
                        message += 'انتهت المهلة';
                    }
                    alert(message);
                }
            );
        }

        // تحميل محتويات السلة
        function loadCart() {
            const cart = JSON.parse(localStorage.getItem('barq_cart')) || [];
            const list = document.getElementById('cart-list');
            let subtotal = 0;

            if (cart.length === 0) {
                list.innerHTML = `
                    <div class="text-center py-10">
                        <i class="fas fa-shopping-basket text-5xl text-gray-100 mb-4 block"></i>
                        <p class="font-bold text-gray-400">سلتك فارغة حالياً..</p>
                        <a href="index.html" class="text-blue-600 font-black text-sm underline mt-2 block">اذهب للتسوق</a>
                    </div>`;
                
                updateTotals(0, 0, 0);
                return;
            }

            list.innerHTML = cart.map((item, index) => {
                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;
                
                return `
                <div class="flex justify-between items-center bg-gray-50 p-4 rounded-2xl border border-gray-100 shadow-sm transition-all hover:bg-white">
                    <div class="flex gap-4 items-center">
                        <img src="${item.img || 'https://via.placeholder.com/50'}" class="w-12 h-12 rounded-xl object-cover border">
                        <div>
                            <p class="font-black text-gray-800 text-sm">${item.name}</p>
                            <p class="text-[10px] text-blue-600 font-bold mt-1">
                                <span class="bg-blue-100 px-2 py-0.5 rounded-md ml-1">الكمية: ${item.quantity}</span>
                                <span class="text-gray-400">${item.restaurantName || ''}</span>
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="font-black text-sm text-gray-900">${itemTotal.toLocaleString()} ر.ي</span>
                        <button onclick="removeItem(${index})" class="w-8 h-8 rounded-full bg-red-50 text-red-400 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all">
                            <i class="fas fa-trash-alt text-xs"></i>
                        </button>
                    </div>
                </div>`;
            }).join('');

            const finalTotal = Math.max(0, subtotal - discountVal);
            updateTotals(subtotal, discountVal, finalTotal);
        }

        // تحديث المبالغ
        function updateTotals(subtotal, discount, total) {
            document.getElementById('subtotal').textContent = subtotal.toLocaleString() + ' ر.ي';
            document.getElementById('discount').textContent = discount.toLocaleString() + ' ر.ي';
            document.getElementById('total-price').textContent = total.toLocaleString() + ' ر.ي';
        }

        // حذف عنصر من السلة
        function removeItem(index) {
            const cart = JSON.parse(localStorage.getItem('barq_cart')) || [];
            if (index >= 0 && index < cart.length) {
                cart.splice(index, 1);
                localStorage.setItem('barq_cart', JSON.stringify(cart));
                loadCart();
            }
        }

        // تطبيق كوبون الخصم
        function applyCoupon() {
            const code = document.getElementById('coupon-code').value.trim().toUpperCase();
            
            if (code === 'BARQ26') {
                discountVal = 1000;
                couponName = 'BARQ26 (1,000 ر.ي)';
                alert('تم تفعيل خصم 1000 ريال بنجاح ✅');
            } else if (code === '') {
                alert('يرجى إدخال كود الخصم');
                return;
            } else {
                discountVal = 0;
                couponName = 'لا يوجد';
                alert('الكود غير صحيح ❌');
            }
            
            loadCart();
        }

        // إرسال الطلب النهائي
        function sendFinalOrder() {
            const cart = JSON.parse(localStorage.getItem('barq_cart')) || [];
            const phone = document.getElementById('user-phone').value.trim();
            const address = document.getElementById('user-address').value.trim();
            const totalText = document.getElementById('total-price').textContent;

            // التحقق من البيانات
            if (cart.length === 0) {
                alert('سلتك فارغة!');
                return;
            }
            
            if (!phone) {
                alert('يرجى إدخال رقم الهاتف');
                return;
            }
            
            if (!address) {
                alert('يرجى إدخال وصف العنوان');
                return;
            }
            
            if (!marker) {
                alert('يرجى الانتظار حتى تحميل الخريطة');
                return;
            }

            // الحصول على الإحداثيات
            const pos = marker.getLatLng();
            const mapLink = `https://www.google.com/maps?q=${pos.lat},${pos.lng}`;

            // بناء رسالة الطلب
            let message = `*⚡ طلب توصيل جديد - البرق ⚡*\n`;
            message += `━━━━━━━━━━━━━━━━━━\n`;
            message += `📞 *رقم العميل:* ${phone}\n`;
            message += `🏠 *العنوان:* ${address}\n`;
            message += `━━━━━━━━━━━━━━━━━━\n`;
            message += `🛒 *الطلبات:*\n\n`;

            cart.forEach((item, index) => {
                message += `${index + 1}. *${item.name}* (الكمية: ${item.quantity})\n`;
                message += `   💰 السعر: ${item.price.toLocaleString()} ر.ي\n`;
                if (item.restaurantName) {
                    message += `   🏢 من: ${item.restaurantName}\n`;
                }
                message += `\n`;
            });

            message += `🎁 *الكوبون:* ${couponName}\n`;
            message += `✅ *الإجمالي النهائي:* ${totalText}\n`;
            message += `━━━━━━━━━━━━━━━━━━\n`;
            message += `📍 *موقع التوصيل:* \n${mapLink}`;

            // إنشاء رابط واتساب
            const waLink = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(message)}`;
            
            // فتح الرابط في نافذة جديدة
            window.open(waLink, '_blank');
            
            // تفريغ السلة بعد الإرسال (اختياري)
            // localStorage.removeItem('barq_cart');
            // setTimeout(function() {
            //     window.location.href = 'index.html';
            // }, 1000);
        }
    </script>
</body>
</html>