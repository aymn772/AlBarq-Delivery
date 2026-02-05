/**
 * ==========================================
 * نظام إدارة البرق للتوصيل ⚡ - المحرك الرئيسي
 * مبرمج لأيمن المرادي - 2026
 * ==========================================
 */

// 1. الإعدادات العامة
const COMMISSION_RATE = 0.10; // نسبة العمولة 10%
let currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || { name: 'ضيف', role: 'guest' };

// 2. تشغيل النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
    loadRestaurantsToSelect(); // لتحميل المطاعم في قائمة إضافة الوجبات
});

// 3. تهيئة لوحة التحكم
function initDashboard() {
    updateStatistics();
    renderOrdersTable();
    loadCaptainsList();
    loadUsersList();
}

// 4. محرك الإحصائيات (تحديث الأرقام في الكروت)
function updateStatistics() {
    const orders = JSON.parse(localStorage.getItem('barq_orders_log')) || [];
    
    let totalSales = 0;
    let completedOrders = orders.length;

    orders.forEach(order => {
        totalSales += parseFloat(order.total) || 0;
    });

    const totalComm = totalSales * COMMISSION_RATE;

    // تحديث الأرقام في HTML (تأكد من مطابقة الـ IDs)
    setElementText('totalSales', totalSales.toLocaleString() + " ر.ي");
    setElementText('stat-sales', totalSales.toLocaleString() + " ر.ي");
    setElementText('stat-comm', totalComm.toLocaleString() + " ر.ي");
    setElementText('stat-count', completedOrders);
    setElementText('ordersCount', completedOrders);
}

function setElementText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
}

/**
 * ==========================================
 * إدارة المحتوى (مطاعم ووجبات)
 * ==========================================
 */

// حفظ مطعم جديد
function saveRestaurant() {
    const name = document.getElementById('resName').value;
    const badge = document.getElementById('resBadge').value;
    const address = document.getElementById('resAddress').value;
    const img = document.getElementById('resImg').value;

    if (!name || !badge) return alert("يرجى إدخال اسم المطعم وتخصصه");

    let restaurants = JSON.parse(localStorage.getItem('barq_restaurants')) || [];
    
    const newRes = {
        id: "RES-" + Date.now(),
        name: name,
        badge: badge,
        address: address,
        img: img || 'images/default-res.jpg',
        menu: []
    };

    restaurants.push(newRes);
    localStorage.setItem('barq_restaurants', JSON.stringify(restaurants));
    
    alert("✅ تم حفظ المطعم بنجاح");
    location.reload(); // لإعادة تحديث القوائم
}

// تحميل المطاعم داخل قائمة "السيليكت" لإضافة وجبات
function loadRestaurantsToSelect() {
    const restaurants = JSON.parse(localStorage.getItem('barq_restaurants')) || [];
    const select = document.getElementById('selectRes');
    if (!select) return;

    if (restaurants.length === 0) {
        select.innerHTML = '<option value="">لا يوجد مطاعم مضافة</option>';
        return;
    }

    select.innerHTML = restaurants.map(res => 
        `<option value="${res.id}">${res.name}</option>`
    ).join('');
}

// إضافة وجبة لمطعم
function addItemToMenu() {
    const resId = document.getElementById('selectRes').value;
    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemImg = document.getElementById('itemImg').value;

    if (!resId || !itemName || !itemPrice) return alert("أكمل بيانات الوجبة");

    let restaurants = JSON.parse(localStorage.getItem('barq_restaurants')) || [];
    const resIndex = restaurants.findIndex(r => r.id === resId);

    if (resIndex !== -1) {
        restaurants[resIndex].menu.push({
            id: Date.now(),
            name: itemName,
            price: parseInt(itemPrice),
            img: itemImg || 'images/food-default.jpg'
        });

        localStorage.setItem('barq_restaurants', JSON.stringify(restaurants));
        alert(`✅ تمت إضافة ${itemName} إلى منيو ${restaurants[resIndex].name}`);
        
        // مسح الحقول بعد الإضافة
        document.getElementById('itemName').value = "";
        document.getElementById('itemPrice').value = "";
    }
}

/**
 * ==========================================
 * إدارة الطلبات والمناديب
 * ==========================================
 */

function renderOrdersTable(data = null) {
    const orders = data || JSON.parse(localStorage.getItem('barq_orders_log')) || [];
    const captains = JSON.parse(localStorage.getItem('barq_captains')) || [];
    const tableBody = document.getElementById('admin-orders-table');

    if (!tableBody) return;

    tableBody.innerHTML = orders.reverse().map((order, index) => `
        <tr class="hover:bg-gray-50 border-b">
            <td class="p-3 text-center font-bold text-gray-400">${index + 1}</td>
            <td class="p-3 text-[10px] font-bold">${order.time || 'صباحاً'}</td>
            <td class="p-3 font-black text-barq-blue">${order.phone}</td>
            <td class="p-3 font-bold text-green-600">${parseFloat(order.total).toLocaleString()}</td>
            <td class="p-3">
                <select onchange="updateOrderCaptain('${order.orderId}', this.value)" 
                        class="text-[10px] border rounded-lg p-1 w-full bg-white font-bold">
                    <option value="">إسناد لمندوب...</option>
                    ${captains.map(cap => `
                        <option value="${cap.name}" ${order.captain === cap.name ? 'selected' : ''}>
                            ${cap.name}
                        </option>
                    `).join('')}
                </select>
            </td>
            <td class="p-3 text-center">
                <button onclick="openEditModal('${order.orderId}')" class="text-blue-500 hover:underline font-bold text-xs">تعديل</button>
            </td>
        </tr>
    `).join('');
}

// بحث الطلبات
function searchOrders() {
    const term = document.getElementById('admin-search').value.toLowerCase();
    const allOrders = JSON.parse(localStorage.getItem('barq_orders_log')) || [];

    const filtered = allOrders.filter(o => 
        (o.phone || "").includes(term) || 
        (o.captain || "").toLowerCase().includes(term)
    );

    renderOrdersTable(filtered);
    updateSummaryForFiltered(filtered);
}

function updateSummaryForFiltered(data) {
    const total = data.reduce((s, o) => s + (parseFloat(o.total) || 0), 0);
    const box = document.getElementById('search-summary');
    if (box) {
        box.innerHTML = `<div class="bg-blue-50 p-2 text-[10px] font-bold text-blue-700 rounded-lg mt-2">نتائج البحث: ${data.length} | المبلغ: ${total.toLocaleString()} ر.ي</div>`;
    }
}

// إدارة المناديب
function addCaptain() {
    const name = document.getElementById('new-cap-name').value;
    const phone = document.getElementById('new-cap-phone').value;
    
    if(!name || !phone) return alert("أدخل بيانات الكابتن");

    let captains = JSON.parse(localStorage.getItem('barq_captains')) || [];
    captains.push({ id: Date.now(), name, phone });
    localStorage.setItem('barq_captains', JSON.stringify(captains));
    
    document.getElementById('new-cap-name').value = "";
    document.getElementById('new-cap-phone').value = "";
    loadCaptainsList();
    renderOrdersTable();
}

function loadCaptainsList() {
    const captains = JSON.parse(localStorage.getItem('barq_captains')) || [];
    const list = document.getElementById('captains-manager-list');
    if(!list) return;

    list.innerHTML = captains.map(cap => `
        <div class="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
            <span class="font-bold text-xs">${cap.name} - ${cap.phone}</span>
            <button onclick="deleteCaptain(${cap.id})" class="text-red-500 text-xs font-black">حذف</button>
        </div>
    `).join('');
}

function deleteCaptain(id) {
    if(!confirm("حذف المندوب؟")) return;
    let captains = JSON.parse(localStorage.getItem('barq_captains')) || [];
    captains = captains.filter(c => c.id !== id);
    localStorage.setItem('barq_captains', JSON.stringify(captains));
    loadCaptainsList();
    renderOrdersTable();
}

/**
 * ==========================================
 * إدارة المستخدمين (صلاحيات أيمن)
 * ==========================================
 */

function addNewUser() {
    if (currentUser.role !== 'admin') return alert("صلاحية مدير فقط");

    const name = document.getElementById('newUserName').value;
    const pass = document.getElementById('newUserPass').value;
    const role = document.getElementById('newUserRole').value;

    if(!name || !pass) return alert("أكمل البيانات");

    let users = JSON.parse(localStorage.getItem('barq_users')) || [];
    users.push({ id: Date.now(), name, pass, role });
    localStorage.setItem('barq_users', JSON.stringify(users));
    
    alert("تم إنشاء الحساب");
    loadUsersList();
}

function loadUsersList() {
    const users = JSON.parse(localStorage.getItem('barq_users')) || [];
    const list = document.getElementById('usersTableBody');
    if(!list) return;

    list.innerHTML = users.map(u => `
        <tr>
            <td class="p-3 font-bold">${u.name}</td>
            <td class="p-3 text-xs">${u.role === 'admin' ? 'مدير عام' : 'محرر'}</td>
            <td class="p-3"><span class="bg-green-100 text-green-700 p-1 rounded text-[10px]">نشط</span></td>
            <td class="p-3 text-center">
                ${u.name !== 'ايمن' ? `<button onclick="deleteUser(${u.id})" class="text-red-500">حذف</button>` : '--'}
            </td>
        </tr>
    `).join('');
}

function deleteUser(id) {
    let users = JSON.parse(localStorage.getItem('barq_users')) || [];
    users = users.filter(u => u.id !== id);
    localStorage.setItem('barq_users', JSON.stringify(users));
    loadUsersList();
}

function updateOrderCaptain(orderId, capName) {
    let orders = JSON.parse(localStorage.getItem('barq_orders_log')) || [];
    const idx = orders.findIndex(o => o.orderId === orderId);
    if(idx !== -1) {
        orders[idx].captain = capName;
        localStorage.setItem('barq_orders_log', JSON.stringify(orders));
    }
}