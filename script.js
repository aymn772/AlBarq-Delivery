// ==========================================
// 1. قاعدة بيانات المطاعم (صنعاء - القائمة الشاملة والمحدثة)
// ==========================================
const defaultRestaurants = [
    {
        id: 1, 
        name: "فايف ستار برجر - Five Star",
        address: "صنعاء - شارع المقالح - حي الأصبحي",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
        badge: "الأكثر طلباً 🔥",
        menu: {
            "قسم البرجر والزنجر": [
                { id: 101, name: "برجر لحم كلاسيك", price: 2200, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=150" },
                { id: 102, name: "برجر دجاج ستار", price: 1900, img: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=150" },
                { id: 103, name: "زنجر سوبريم (4×4)", price: 3200, img: "https://images.unsplash.com/photo-1610614819513-58e34989848b?w=150" },
                { id: 104, name: "برجر دبل تشيز", price: 2800, img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=150" },
                { id: 105, name: "تورتيلا دجاج حراق", price: 1800, img: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=150" },
                { id: 106, name: "صاروخ زنجر عائلي", price: 4500, img: "https://images.unsplash.com/photo-1610614819513-58e34989848b?w=150" }
            ],
            "قسم البيتزا": [
                { id: 107, name: "بيتزا فايف ستار (مشكل)", price: 4200, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150" },
                { id: 108, name: "بيتزا رانش دجاج (وسط)", price: 3400, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150" },
                { id: 109, name: "بيتزا ببروني", price: 3600, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=150" },
                { id: 110, name: "بيتزا خضار", price: 2900, img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=150" }
            ],
            "المقبلات والطلبات الجانبية": [
                { id: 111, name: "بطاطس فايف ستار (بالجبن)", price: 1500, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=150" },
                { id: 112, name: "ناجتس دجاج (6 قطع)", price: 1200, img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=150" },
                { id: 113, name: "سلطة كول سلو (صغير)", price: 600, img: "https://images.unsplash.com/photo-1546793665-c74683c3f38d?w=150" },
                { id: 114, name: "صوص باربيكيو / ثومية", price: 300, img: "https://images.unsplash.com/photo-1585325701166-38169137b7c7?w=150" }
            ],
            "العصائر والبارد": [
                { id: 115, name: "ستار شيك أوريو", price: 1600, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=150" },
                { id: 116, name: "كوكتيل فواكه طازج", price: 1400, img: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?w=150" },
                { id: 117, name: "بيبسي عائلي", price: 1800, img: "https://images.unsplash.com/photo-1629203851020-7dd22b075703?w=150" }
            ]
        }
    },
    {
        id: 2, 
        name: "مطاعم الشيباني سوبر دي لوكس",
        address: "صنعاء - شارع حدة - أمام مركز الكميم التجاري",
        image: "https://images.unsplash.com/photo-1541518763669-279f00ed01aa?w=400",
        badge: "الأصل في الأكلات الشعبية 🇾🇪",
        menu: {
            "المدار والفخاريات (حرضات)": [
                { id: 201, name: "فحسة لحم بلدي مخصوص", price: 5800, img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=150" },
                { id: 202, name: "سلتة صنعانية بالخضار", price: 2800, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150" },
                { id: 203, name: "عقدة لحم بلدي (ناشف)", price: 4800, img: "https://images.unsplash.com/photo-1603360946369-dc9bb025810f?w=150" },
                { id: 204, name: "عقدة دجاج (مرق)", price: 3200, img: "https://images.unsplash.com/photo-1603360946369-dc9bb025810f?w=150" },
                { id: 205, name: "كبدة غنم طازجة (صاج)", price: 4000, img: "https://images.unsplash.com/photo-1603360946369-dc9bb025810f?w=150" }
            ],
            "قسم المندي والمشاوي": [
                { id: 206, name: "نفر لحم مندي بلدي", price: 9500, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" },
                { id: 207, name: "نفر لحم حنيذ (بالقصدير)", price: 9800, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" },
                { id: 208, name: "حبة دجاج مندي مع الأرز", price: 4800, img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=150" },
                { id: 209, name: "نفر كباب لحم (بلدي)", price: 4500, img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=150" }
            ],
            "السلطات والمقبلات اليمنية": [
                { id: 210, name: "صحن شفوت صنعاني بالروب", price: 1200, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=150" },
                { id: 211, name: "سحاوق بالجبن البلدي", price: 800, img: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=150" },
                { id: 212, name: "سلطة خضراء مشكلة", price: 1000, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150" },
                { id: 213, name: "حمص بالزيت", price: 1200, img: "https://images.unsplash.com/photo-1577906030551-5b9164f43b01?w=150" }
            ],
            "الحلويات والمخبوزات": [
                { id: 214, name: "ملوج حار (حبة كبيرة)", price: 500, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150" },
                { id: 215, name: "فتة تمر بالسمن والعسل", price: 2800, img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=150" },
                { id: 216, name: "بنت الصحن (صغير)", price: 3500, img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=150" }
            ]
        }
    },
    {
        id: 3, 
        name: "رويال بروستر - Royal Broaster",
        // العنوان الصحيح: شارع الستين الجنوبي - حي فج عطان
        address: "صنعاء - شارع الستين الجنوبي - حي فج عطان - بجوار محطة عطان",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400",
        badge: "خبير الدجاج المقرمش 🍗",
        menu: {
            "وجبات البروستد": [
                { id: 301, name: "وجبة بروستد (4 قطع) عادي", price: 3800, img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=150" },
                { id: 302, name: "وجبة بروستد (4 قطع) حراق", price: 4000, img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=150" },
                { id: 303, name: "وجبة دجاج مسحب رويال (7 قطع)", price: 3500, img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=150" },
                { id: 304, name: "وجبة رويال العائلية (10 قطع)", price: 9500, img: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=150" },
                { id: 305, name: "وجبة جامبو (15 قطعة دجاج)", price: 14500, img: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=150" }
            ],
            "السندوتشات والزنجر": [
                { id: 306, name: "زنجر سوبريم رويال", price: 2800, img: "https://images.unsplash.com/photo-1610614819513-58e34989848b?w=150" },
                { id: 307, name: "سندوتش تورتيلا دجاج", price: 1800, img: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=150" },
                { id: 308, name: "كلوب ساندوتش ملكي", price: 2500, img: "https://images.unsplash.com/photo-1567234665766-49ad37666205?w=150" },
                { id: 309, name: "برجر رويال دبل تشيز", price: 2800, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=150" }
            ],
            "المقبلات والجانبيات": [
                { id: 310, name: "سلطة كول سلو رويال", price: 800, img: "https://images.unsplash.com/photo-1546793665-c74683c3f38d?w=150" },
                { id: 311, name: "صحن بطاطس مقلية كبير", price: 1200, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=150" },
                { id: 312, name: "حلقات بصل مقرمشة", price: 1000, img: "https://images.unsplash.com/photo-1639024471283-03518883511d?w=150" },
                { id: 313, name: "ثومية رويال إضافية", price: 300, img: "https://images.unsplash.com/photo-1585325701166-38169137b7c7?w=150" }
            ],
            "المشروبات والعصائر": [
                { id: 314, name: "كوكتيل رويال طازج", price: 1500, img: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?w=150" },
                { id: 315, name: "ليمون بالنعناع فريش", price: 1200, img: "https://images.unsplash.com/photo-1506252374453-ef5237291d83?w=150" },
                { id: 316, name: "بيبسي عائلي 1.5 لتر", price: 1800, img: "https://images.unsplash.com/photo-1629203851020-7dd22b075703?w=150" }
            ]
        }
    },
    {
        id: 4, 
        name: "مطاعم القلعة - Al Qalaa",
        // العنوان الصحيح: شارع الخمسين - بجوار سما مول
        address: "صنعاء - شارع الخمسين - بجوار سما مول - تقاطع بيت بوس",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
        badge: "ملك المشاوي والحلويات 🍢",
        menu: {
            "المطبخ والولائم": [
                { id: 401, name: "دجاج قوزي مع الأرز والمكرونة", price: 4500, img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=150" },
                { id: 402, name: "نفر لحم مندي بلدي", price: 9500, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" },
                { id: 403, name: "نفر لحم عقدة (مدرة)", price: 4800, img: "https://images.unsplash.com/photo-1603360946369-dc9bb025810f?w=150" },
                { id: 404, name: "دجاج محمر بالفرن", price: 4000, img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=150" },
                { id: 405, name: "زجني مع اللحوح الحبشي", price: 2500, img: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=150" }
            ],
            "المشاوي والبيتزا": [
                { id: 406, name: "مشكل مشاوي القلعة مخصوص", price: 6800, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=150" },
                { id: 407, name: "نفر كباب لحم بلدي", price: 4500, img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=150" },
                { id: 408, name: "بيتزا القلعة سبيشال", price: 3500, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150" },
                { id: 409, name: "بيتزا زنجر حراق", price: 3000, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150" }
            ],
            "المقبلات والشاورما": [
                { id: 410, name: "شاورما كرانش القلعة", price: 2200, img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=150" },
                { id: 411, name: "سلطة القلعة (ذرة وشمندر وجبن)", price: 1800, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150" },
                { id: 412, name: "حمص باللحم المفروم", price: 2500, img: "https://images.unsplash.com/photo-1577906030551-5b9164f43b01?w=150" },
                { id: 413, name: "فتوش ملكي", price: 1200, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150" }
            ],
            "الحلويات والعصائر": [
                { id: 414, name: "كنافة كندر (الأكثر طلباً)", price: 2800, img: "https://images.unsplash.com/photo-1519676867240-f031ee04a703?w=150" },
                { id: 415, name: "كنافة نوتيلا وقشطة", price: 2500, img: "https://images.unsplash.com/photo-1519676867240-f031ee04a703?w=150" },
                { id: 416, name: "كوكتيل طبقات القلعة", price: 1600, img: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?w=150" },
                { id: 417, name: "عصير عوار قلب", price: 1500, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=150" }
            ]
        }
    },
    {
        id: 5, 
        name: "مطعم بيت المندي - Bait Al Mandi",
        address: "صنعاء - شارع الستين الجنوبي - حي فج عطان - بجوار محطة عطان",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400",
        badge: "ملك المندي والولائم 🍗",
        menu: {
            "قسم اللحوم البلدي والولائم": [
                { id: 501, name: "نفر لحم مندي بلدي مخصوص", price: 9500, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" },
                { id: 502, name: "نفر لحم حنيذ مرخ (فرن)", price: 9800, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" },
                { id: 503, name: "نفر لحم مضبي عالحجر", price: 9500, img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=150" },
                { id: 504, name: "نفر لحم مدفون رويال", price: 9500, img: "https://images.unsplash.com/photo-1603360946369-dc9bb025810f?w=150" },
                { id: 505, name: "نفر لحم برمة (مرق بلدي)", price: 9000, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=150" },
                { id: 506, name: "تيس مندي بلدي كامل", price: 85000, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" },
                { id: 507, name: "ضلع لحم مندي عائلي", price: 18000, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" }
            ],
            "المطعم الشعبي (المدرات)": [
                { id: 508, name: "فحسة لحم بلدي (مدرة ساخنة)", price: 4500, img: "https://images.unsplash.com/photo-1603360946369-dc9bb025810f?w=150" },
                { id: 509, name: "سلتة بيت المندي مخصوص", price: 2500, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150" },
                { id: 510, name: "عقدة لحم بلدي صاص", price: 4800, img: "https://images.unsplash.com/photo-1603360946369-dc9bb025810f?w=150" },
                { id: 511, name: "مشكل خضار فرن", price: 1500, img: "https://images.unsplash.com/photo-1540420753464-3f044a37f26c?w=150" }
            ],
            "قسم الدجاج": [
                { id: 512, name: "حبة دجاج مندي مع الأرز", price: 4800, img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=150" },
                { id: 513, name: "حبة دجاج مضبي عالحجر", price: 4800, img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=150" },
                { id: 514, name: "حبة دجاج شواية مخصوص", price: 4400, img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=150" },
                { id: 515, name: "نصف حبة دجاج (مندي/مضبي)", price: 2400, img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=150" }
            ],
            "المقبلات والجانبيات": [
                { id: 516, name: "شفوت صنعاني ملكي بالروعة", price: 1500, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=150" },
                { id: 517, name: "سحاوق بالجبن البلدي", price: 1000, img: "https://images.unsplash.com/photo-1546793665-c74683c3f38d?w=150" },
                { id: 518, name: "فتوش / سلطة خضراء", price: 1200, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150" },
                { id: 519, name: "صحن أرز مندي سادة", price: 1200, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" }
            ],
            "الحلويات والفتات": [
                { id: 520, name: "بنت الصحن بالسمن والعسل", price: 3500, img: "https://images.unsplash.com/photo-1519676867240-f031ee04a703?w=150" },
                { id: 521, name: "معصوب ملكي بالقشطة والعسل", price: 2800, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=150" },
                { id: 522, name: "فتة تمر بالسمن والسمسم", price: 2200, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=150" },
                { id: 523, name: "عصير زبيب صنعاني قديد", price: 1300, img: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?w=150" }
            ]
        }
    },
    {
        id: 6, 
        name: "مطعم عشش تهامة - Ashash Tihama",
        address: "صنعاء - حي حدة - شارع صفر - خلف مركز الكميم التجاري",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
        badge: "ملك المندي والحنيذ والمخبازة 🍖🐟",
        menu: {
            "قسم المندي والحنيذ (اللحوم)": [
                { id: 601, name: "نفر لحم مندي تهامي مخصوص", price: 9500, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" },
                { id: 602, name: "نفر لحم حنيذ مرخ أصيل", price: 9800, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" },
                { id: 603, name: "نفر لحم مضبي عالحجر", price: 9500, img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=150" },
                { id: 604, name: "نفر لحم برمة (مرق تهامي)", price: 9000, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=150" },
                { id: 605, name: "نفر لحم وصلة بلدي", price: 9000, img: "https://images.unsplash.com/photo-1603360946369-dc9bb025810f?w=150" },
                { id: 606, name: "تيس مندي كامل للطلبات", price: 85000, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" }
            ],
            "قسم المخبازة والأسماك": [
                { id: 607, name: "سمك ديرك مخبازة (نفر)", price: 6000, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=150" },
                { id: 608, name: "سمك جحش تهامي فرن", price: 5500, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=150" },
                { id: 609, name: "سمك عربي مقلي مقرمش", price: 4500, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=150" },
                { id: 610, name: "سمك تونة وفاء مقلي", price: 3500, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=150" },
                { id: 611, name: "روبيان (جمبري) مشوي سبيشال", price: 8500, img: "https://images.unsplash.com/photo-1559740038-1914a1705e41?w=150" },
                { id: 612, name: "فتة سمك بالبصل والليمون", price: 3000, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=150" }
            ],
            "الوجبات التهامية والشعبية": [
                { id: 613, name: "مكموز دجاج تهامي", price: 4000, img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=150" },
                { id: 614, name: "صحن خمير تهامي (حالي)", price: 1200, img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=150" },
                { id: 615, name: "كبان تهامي بالفرن", price: 1800, img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=150" },
                { id: 616, name: "إيدام ملوخية تهامية مخصوص", price: 1500, img: "https://images.unsplash.com/photo-1540420753464-3f044a37f26c?w=150" },
                { id: 617, name: "شفوت عشش تهامة بالخضار", price: 1500, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=150" },
                { id: 618, name: "سحاوق بالجبن البلدي", price: 1000, img: "https://images.unsplash.com/photo-1546793665-c74683c3f38d?w=150" }
            ],
            "التحلية والمشروبات": [
                { id: 619, name: "حقين تهامي بلدي (روبة)", price: 1000, img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=150" },
                { id: 620, name: "عصير زبيب أسود (قديد)", price: 1300, img: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?w=150" },
                { id: 621, name: "بنت الصحن بالسمن والعسل", price: 3500, img: "https://images.unsplash.com/photo-1519676867240-f031ee04a703?w=150" },
                { id: 622, name: "شاهي أحمر بالنعناع والزنجبيل", price: 400, img: "https://images.unsplash.com/photo-1544787210-2211d74fc596?w=150" }
            ]
        }
    },
    {
        id: 7, 
        name: "مطعم رز وبسباس - Pilipili & Rice",
        address: "صنعاء - حدة - جولة الرويشان - بجوار سما مول",
        image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=400",
        badge: "خبير الزربيان والبسباس 🔥",
        menu: {
            "قسم الزربيان والمندي (لحم/دجاج)": [
                { id: 701, name: "نفر زربيان لحم غنمي بلدي", price: 4300, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" },
                { id: 702, name: "نفر زربيان لحم بقري", price: 3500, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" },
                { id: 703, name: "نفر مندي لحم غنمي", price: 4300, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" },
                { id: 704, name: "نفر مندي لحم بقري", price: 3500, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" },
                { id: 705, name: "نصف دجاج زربيان مع الرز", price: 1700, img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=150" },
                { id: 706, name: "نصف دجاج مندي مع الرز", price: 1700, img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=150" },
                { id: 707, name: "دجاج صافي (بدون رز)", price: 1000, img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=150" },
                { id: 708, name: "رز زربيان/مندي سادة", price: 700, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" }
            ],
            "ركن البسباس والمقبلات (بيلي بيلي)": [
                { id: 709, name: "بسباس بالتفاح الحار", price: 200, img: "https://images.unsplash.com/photo-1588276552401-30058a0fe57b?w=150" },
                { id: 710, name: "بسباس بالمنجا الحار", price: 200, img: "https://images.unsplash.com/photo-1588276552401-30058a0fe57b?w=150" },
                { id: 711, name: "بسباس فلنتاين (حار جداً)", price: 200, img: "https://images.unsplash.com/photo-1588276552401-30058a0fe57b?w=150" },
                { id: 712, name: "عشار عدني أصلي", price: 100, img: "https://images.unsplash.com/photo-1588276552401-30058a0fe57b?w=150" },
                { id: 713, name: "سلطة كشمبر", price: 500, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150" }
            ],
            "المدرات والوجبات الشعبية": [
                { id: 714, name: "سلتة رز وبسباس مخصوص", price: 1600, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150" },
                { id: 715, name: "فحسة لحم مخصوص", price: 2500, img: "https://images.unsplash.com/photo-1603360946369-dc9bb025810f?w=150" },
                { id: 716, name: "دقة لحم بلدي", price: 1600, img: "https://images.unsplash.com/photo-1603360946369-dc9bb025810f?w=150" },
                { id: 717, name: "عقدة دجاج مخصوص", price: 1700, img: "https://images.unsplash.com/photo-1603360946369-dc9bb025810f?w=150" },
                { id: 718, name: "مقلقل لحم", price: 2000, img: "https://images.unsplash.com/photo-1603360946369-dc9bb025810f?w=150" }
            ]
        }
    },
    {
        id: 8, 
        name: "مطاعم الحمراء - Al Hamra",
        address: "صنعاء - شارع حدة - أمام مركز الرويشان",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
        badge: "عالم المشاوي والدجاج 🍕🍗",
        menu: {
            "قسم الدجاج والرز": [
                { id: 801, name: "نصف حبة دجاج (شواية/فحم/مظبي) مع الرز", price: 1900, img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=150" },
                { id: 802, name: "حبة دجاج كاملة (شواية/فحم/مظبي) مع الرز", price: 3800, img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=150" },
                { id: 803, name: "نصف حبة دجاج (بدون رز)", price: 1300, img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=150" },
                { id: 804, name: "حبة دجاج (بدون رز)", price: 2600, img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=150" },
                { id: 805, name: "صحن رز بخاري/مندي سادة", price: 800, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" }
            ],
            "قسم المشاوي (بالسعر الفعلي)": [
                { id: 806, name: "مشكل مشاوي الحمراء (كباب، اوصال، شيش، جوانح)", price: 3950, img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=150" },
                { id: 807, name: "مشكل مشاوي إكسترا (مع عرايس وكبة)", price: 7000, img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=150" },
                { id: 808, name: "ساندوتش كباب لحم", price: 700, img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=150" },
                { id: 809, name: "عرايس لحم شامية", price: 1500, img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=150" }
            ],
            "ركن الولائم واللحوم": [
                { id: 810, name: "نفر لحم مندي بلدي", price: 4500, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" },
                { id: 811, name: "ثمن ذبيحة (وليمة)", price: 6300, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" },
                { id: 812, name: "ربع ذبيحة", price: 12500, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" },
                { id: 813, name: "نصف ذبيحة", price: 24500, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=150" }
            ],
            "البيتزا والمعجنات": [
                { id: 814, name: "بيتزا زهرة الحمراء مخصوص", price: 3500, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150" },
                { id: 815, name: "بيتزا سوبر سبريم", price: 2500, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150" },
                { id: 816, name: "فطيرة مشكل أجبان", price: 2700, img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=150" },
                { id: 817, name: "بروست حراق الحمراء", price: 1300, img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=150" }
            ]
        }
    },
    {
        id: 9, 
        name: "فلافل المعلم - Al Moalem",
        address: "صنعاء - شارع حدة - بجوار عمارة لا إله إلا الله",
        image: "https://images.unsplash.com/photo-1593001874117-c99c4edb47b8?w=400",
        badge: "مطعم متكامل (فلافل، بروست، مضغوط) 🍗🌯",
        menu: {
            "قسم الفلافل والشاورما": [
                { id: 901, name: "سندوتش فلافل عادي", price: 300, img: "https://images.unsplash.com/photo-1593001874117-c99c4edb47b8?w=150" },
                { id: 902, name: "سندوتش فلافل سوبر", price: 500, img: "https://images.unsplash.com/photo-1593001874117-c99c4edb47b8?w=150" },
                { id: 903, name: "سندوتش شاورما دجاج", price: 1000, img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=150" },
                { id: 904, name: "صاروخ شاورما عائلي", price: 1500, img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=150" }
            ],
            "قسم البروست والمضغوط": [
                { id: 905, name: "وجبة بروست دجاج (4 قطع)", price: 2800, img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=150" },
                { id: 906, name: "نفر رز مضغوط دجاج", price: 1800, img: "https://images.unsplash.com/photo-1603360946369-dc9bb025810f?w=150" },
                { id: 907, name: "حبة دجاج مضغوط مع الرز", price: 3600, img: "https://images.unsplash.com/photo-1603360946369-dc9bb025810f?w=150" },
                { id: 908, name: "شوربة حب (رمضانية مخصوص)", price: 500, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=150" }
            ],
            "قسم الإفطار والقدور": [
                { id: 909, name: "صحن فول بالزيت", price: 800, img: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=150" },
                { id: 910, name: "بيض عيون / شكشوكة", price: 700, img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=150" },
                { id: 911, name: "صحن فاصوليا ناشف", price: 800, img: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=150" }
            ],
            "العصائر الطبيعية": [
                { id: 912, name: "عصير إمبراطور (مخصوص)", price: 1000, img: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?w=150" },
                { id: 913, name: "عصير جوافة بالحليب", price: 800, img: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?w=150" },
                { id: 914, name: "عصير برتقال فرش", price: 800, img: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?w=150" }
            ]
        }
    },
    {
        id: 10, 
        name: "فلافل فلسطين - Falafel Palestine",
        address: "صنعاء - تقاطع شارع حدة مع الزبيري - جولة فلسطين",
        image: "https://images.unsplash.com/photo-1547058881-80bbec2b04f1?w=400",
        badge: "متخصص فلافل وشيبس 🧆🍟",
        menu: {
            "سندوتشات (فلافل وشيبس فقط)": [
                { id: 1001, name: "سندوتش فلافل عادي", price: 300, img: "https://images.unsplash.com/photo-1547058881-80bbec2b04f1?w=150" },
                { id: 1002, name: "سندوتش فلافل سوبر", price: 400, img: "https://images.unsplash.com/photo-1547058881-80bbec2b04f1?w=150" },
                { id: 1003, name: "سندوتش شيبس (بطاطس) سادة", price: 300, img: "https://images.unsplash.com/photo-1573481078935-b9605167e06b?w=150" },
                { id: 1004, name: "سندوتش مشكل (فلافل مع شيبس)", price: 400, img: "https://images.unsplash.com/photo-1547058881-80bbec2b04f1?w=150" }
            ],
            "المشروبات": [
                { id: 1005, name: "مشروب غازي (بيبسي/شاني)", price: 400, img: "https://images.unsplash.com/photo-1629203851020-7dd22b075703?w=150" },
                { id: 1006, name: "شاهي أحمر (كوب)", price: 200, img: "https://images.unsplash.com/photo-1544787210-2211d74fc596?w=150" },
                { id: 1007, name: "ماء معدني (صغير)", price: 200, img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=150" }
            ]
        }
    },
];
// ==========================================
// ==========================================
// 2. المحرك التشغيلي (Logic)
// ==========================================

// تحديث عداد السلة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
});

// دالة الانتقال لصفحة المنيو
function openMenu(id, name) {
    localStorage.setItem('selectedRestaurantId', id);
    localStorage.setItem('selectedRestaurantName', name);
    window.location.href = 'menu.html';
}

// دالة إضافة منتج للسلة (تُستدعى من صفحة المنيو)
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('barq_cart')) || [];
    
    // التحقق إذا كان المنتج موجود مسبقاً
    const existingIndex = cart.findIndex(i => i.id === item.id);
    
    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    
    localStorage.setItem('barq_cart', JSON.stringify(cart));
    updateCartBadge();
    
    // إشعار بسيط للمستخدم (اختياري)
    alert(`تم إضافة ${item.name} إلى السلة`);
}

// تحديث أيقونة العدد على السلة
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('barq_cart')) || [];
    const badge = document.getElementById('cart-badge');
    if (badge) {
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        badge.innerText = totalItems;
    }
}

// دالة البحث (تعمل مع المدخل في صفحة المطاعم)
function searchFun() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const adminData = JSON.parse(localStorage.getItem('barq_restaurants')) || [];
    const all = [...adminData, ...defaultRestaurants];
    
    const filtered = all.filter(res => 
        res.name.toLowerCase().includes(term) || 
        res.address.toLowerCase().includes(term)
    );
    
    // هذه الدالة render تكون موجودة داخل كود HTML صفحة المطاعم
    if (typeof render === "function") {
        render(filtered);
    }
}

// دالة جلب بيانات مطعم معين لعرضها في صفحة المنيو
function getRestaurantById(id) {
    const adminData = JSON.parse(localStorage.getItem('barq_restaurants')) || [];
    const all = [...adminData, ...defaultRestaurants];
    return all.find(res => res.id == id);
}