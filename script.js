// Menu data array with Arabic items
const menuData = [
    // Food items - فراخ مشوية
    {
        name: "نصف فرخة مشوية",
        price: "20 ج.م",
        category: "food",
        subCategory: "grilled",
        description: "نصف فرخة مشوية مع بهارات سرية",
        image: "https://images.unsplash.com/photo-1562967914-6c03b4d9a530?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "وجبة شيش طاووق",
        price: "85 ج.م",
        category: "food",
        subCategory: "grilled",
        description: "قطع دجاج مشوية على الفحم",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "دجاج مشوي كامل",
        price: "220 ج.م",
        category: "food",
        subCategory: "grilled",
        description: "فرخة كاملة مشوية مع خضروات",
        image: "https://images.unsplash.com/photo-1598103442097-8b1a9162f2d0?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "ربع فرخة مشوية",
        price: "120 ج.م",
        category: "food",
        subCategory: "grilled",
        description: "ربع فرخة مشوية مع أرز",
        image: "https://images.unsplash.com/photo-1562967914-6c03b4d9a530?auto=format&fit=crop&w=500&q=80"
    },
    // Food items - وجبات
    {
        name: "وجبة ميكس جريل",
        price: "95 ج.م",
        category: "food",
        subCategory: "meals",
        description: "ميكس جريل مع دجاج وخضروات",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "وجبة دجاج كريسبي",
        price: "120 ج.م",
        category: "food",
        subCategory: "meals",
        description: "دجاج كريسبي مع صلصة خاصة",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "بطاطس فارم فريت",
        price: "25 ج.م",
        category: "food",
        description: "بطاطس مقطعة ومقلية ذهبية",
        image: "https://images.unsplash.com/photo-1576107232686-3c6080a6b2c8?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "بطاطس بالجبنة",
        price: "35 ج.م",
        category: "food",
        description: "بطاطس بالجبنة المذابة",
        image: "https://images.unsplash.com/photo-1630384078756-0d7c9b7a5b0f?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "بطاطس بالبهارات",
        price: "30 ج.م",
        category: "food",
        description: "بطاطس مقلية بالبهارات الخاصة",
        image: "https://images.unsplash.com/photo-1576107232686-3c6080a6b2c8?auto=format&fit=crop&w=500&q=80"
    },
    
    // Food items - صواني
    {
        name: "صينية عائلية",
        price: "180 ج.م",
        category: "food",
        subCategory: "appetizers",
        description: "صينية عائلية باللحم والخضروات",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "صينية أرز باللحم",
        price: "150 ج.م",
        category: "food",
        subCategory: "appetizers",
        description: "صينية أرز مع قطع لحم",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "فتة شاورما",
        price: "75 ج.م",
        category: "food",
        description: "فتة شاورما بالخبز المحمر",
        image: "https://images.unsplash.com/photo-1565557613242-7d9907221ee9?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "ساندوتش شاورما مصري",
        price: "45 ج.م",
        category: "food",
        description: "شاورما بالطحينة والخضروات",
        image: "https://images.unsplash.com/photo-1590555403677-b4c2c8a3f3a3?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "صينية شاورما",
        price: "95 ج.م",
        category: "food",
        description: "شاورما بالأرز والمكسرات",
        image: "https://images.unsplash.com/photo-1565557613242-7d9907221ee9?auto=format&fit=crop&w=500&q=80"
    },
    
    // Food items - سندوتشات
    {
        name: "ساندوتش شاورما",
        price: "45 ج.م",
        category: "food",
        subCategory: "sandwiches",
        description: "شاورما بالطحينة والخضروات",
        image: "https://images.unsplash.com/photo-1565557613242-7d9907221ee9?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "ساندوتش برجر",
        price: "65 ج.م",
        category: "food",
        subCategory: "sandwiches",
        description: "برجر لحم مع صلصة خاصة",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "ساندوتش كبدة إسكندراني",
        price: "55 ج.م",
        category: "food",
        description: "كبدة إسكندراني أصيلة",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "طبق كبدة مشوية",
        price: "85 ج.م",
        category: "food",
        description: "كبدة مشوية مع البصل والفلفل",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "كبدة بالخلطة",
        price: "65 ج.م",
        category: "food",
        description: "كبدة بالخلطة الإسكندرانية",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80"
    },
    
    // Food items - أقسام أخرى
    {
        name: "كرواسون سادة",
        price: "35 ج.م",
        category: "food",
        description: "كرواسون فرنسي هش",
        image: "https://images.unsplash.com/photo-1555507036-b1fe38816577?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "ساندوتش تونة",
        price: "65 ج.م",
        category: "food",
        description: "تونة بقطع الخضروات الطازجة",
        image: "https://images.unsplash.com/photo-1568901347373-25e344df47e0?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "مولتن كيك",
        price: "55 ج.م",
        category: "food",
        description: "كيك الشوكولاتة الذائبة الساخنة",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "بيتزا مارجريتا صغيرة",
        price: "80 ج.م",
        category: "food",
        description: "عجينة إيطالية بصلصة الطماطم والموتزاريلا",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "كلوب ساندوتش",
        price: "95 ج.م",
        category: "food",
        description: "طبقات من الدجاج والبيض والخضروات",
        image: "https://images.unsplash.com/photo-1568901347373-25e344df47e0?auto=format&fit=crop&w=500&q=80"
    },
    
    // Hot drinks
    {
        name: "إسبريسو",
        price: "12 ج.م",
        category: "drinks",
        subCategory: "hot",
        description: "إسبريسو قوي ومركز مع رغوة ذهبية",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "كابتشينو",
        price: "18 ج.م",
        category: "drinks",
        subCategory: "hot",
        description: "إسبريسو مع حليب بخاري ورغوة كريمية",
        image: "https://images.unsplash.com/photo-1559056196-1a5a1b0c6d3e?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "شاي أخضر",
        price: "15 ج.م",
        category: "drinks",
        subCategory: "hot",
        description: "شاي أخضر عضوي بالنعناع",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "هوت شوكليت",
        price: "18 ج.م",
        category: "drinks",
        subCategory: "hot",
        description: "شوكولاتة ساخنة غنية وكريمية",
        image: "https://images.unsplash.com/photo-1571875253064-6e5fbe556a9b?auto=format&fit=crop&w=500&q=80"
    },
    
    // Cold drinks
    {
        name: "آيس كوفي",
        price: "25 ج.م",
        category: "drinks",
        subCategory: "cold",
        description: "قهوة باردة مع ثلج وحليب",
        image: "https://images.unsplash.com/photo-1514708525000-d30a4bb0c0a0?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "عصير برتقال طازج",
        price: "20 ج.م",
        category: "drinks",
        subCategory: "cold",
        description: "عصير برتقال طازج 100%",
        image: "https://images.unsplash.com/photo-1613478433761-6e88503b2d1b?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "ليمونادة منعشة",
        price: "18 ج.م",
        category: "drinks",
        subCategory: "cold",
        description: "ليمونادة منعشة مع نعناع طازج",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "سموثي فراولة",
        price: "22 ج.م",
        category: "drinks",
        subCategory: "cold",
        description: "سموثي فراولة طبيعي مع حليب",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=500&q=80"
    },
    
    // Carbonated drinks
    {
        name: "بيبسي",
        price: "15 ج.م",
        category: "drinks",
        subCategory: "carbonated",
        description: "بيبسي كلاسيك بارد",
        image: "https://images.unsplash.com/photo-1544145913-0cb3a523d95c?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "سفن أب",
        price: "15 ج.م",
        category: "drinks",
        subCategory: "carbonated",
        description: "سفن أب ليمون منعش",
        image: "https://images.unsplash.com/photo-1544145913-0cb3a523d95c?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "مياه غازية",
        price: "10 ج.م",
        category: "drinks",
        subCategory: "carbonated",
        description: "مياه غازية بالليمون",
        image: "https://images.unsplash.com/photo-1544145913-0cb3a523d95c?auto=format&fit=crop&w=500&q=80"
    },
    
    // Extras
    {
        name: "حليب إضافي",
        price: "8 ج.م",
        category: "drinks",
        subCategory: "extras",
        description: "حليب طازج إضافي لأي مشروب",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "شراب الكراميل",
        price: "12 ج.م",
        category: "drinks",
        subCategory: "extras",
        description: "شراب كراميل غني للقهوة",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "شراب الفانيليا",
        price: "10 ج.م",
        category: "drinks",
        subCategory: "extras",
        description: "شراب فانيليا طبيعي",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80"
    },
    
    // Desserts
    {
        name: "تشيز كيك",
        price: "28 ج.م",
        category: "dessert",
        description: "تشيز كيك كريمي مع صلصة الفراولة",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829baeed?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "تيراميسو",
        price: "32 ج.م",
        category: "dessert",
        description: "تيراميسو إيطالي أصيل مع قهوة",
        image: "https://images.unsplash.com/photo-1571875253064-6e5fbe556a9b?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "كرواسان",
        price: "8 ج.م",
        category: "dessert",
        description: "كرواسان فرنسي طازج ومقرمش",
        image: "https://images.unsplash.com/photo-1555507036-b1fe38816577?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "مافن شوكولاتة",
        price: "12 ج.م",
        category: "dessert",
        description: "مافن شوكولاتة رطب ولذيذ",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e976c97?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "بقلاوة",
        price: "18 ج.م",
        category: "dessert",
        description: "بقلاوة شرقية مع قطر خفيف",
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "كنافة",
        price: "25 ج.م",
        category: "dessert",
        description: "كنافة بالجبنة أو القشطة",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "كوكيز",
        price: "10 ج.م",
        category: "dessert",
        description: "كوكيز بالشوكولاتة أو الشوفان",
        image: "https://images.unsplash.com/photo-1499636133212-1a6f2ca8c784?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "دوناتس",
        price: "8 ج.م",
        category: "dessert",
        description: "دوناتس محشو أو مغطى بالشوكولاتة",
        image: "https://images.unsplash.com/photo-1551024601-b1e64bda6047?auto=format&fit=crop&w=500&q=80"
    }
];

// Global variables
let currentCategory = 'drinks';
let currentSubCategory = 'cold';
let searchTerm = '';
let currentFoodSubCategory = 'all';

// DOM elements
const menuGrid = document.getElementById('menuGrid');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');
const subcategoryButtons = document.querySelectorAll('.subcategory-btn');
const subcategoriesContainer = document.getElementById('subcategories');
const foodSubcategories = document.getElementById('foodSubcategories');
const drinksSubcategories = document.getElementById('drinksSubcategories');

// Initialize the menu
function init() {
    renderMenuItems();
    setupEventListeners();
}

// Render menu items
function renderMenuItems() {
    const filteredItems = filterMenuItems();
    
    // Clear current items with fade out
    const currentItems = menuGrid.querySelectorAll('.menu-item');
    currentItems.forEach(item => {
        item.classList.add('fade-out');
    });
    
    // Wait for fade out animation then render new items
    setTimeout(() => {
        menuGrid.innerHTML = '';
        
        if (filteredItems.length === 0) {
            menuGrid.innerHTML = `
                <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #8b6f47;">
                    <h3 style="font-size: 1.5rem; margin-bottom: 10px;">لا توجد نتائج</h3>
                    <p>جرب البحث بكلمات مختلفة أو تغيير الفئة</p>
                </div>
            `;
            return;
        }
        
        filteredItems.forEach((item, index) => {
            const menuCard = createMenuCard(item, index);
            menuGrid.appendChild(menuCard);
        });
    }, 300);
}

// Create menu card element
function createMenuCard(item, index) {
    const card = document.createElement('div');
    card.className = 'menu-item';
    card.style.animationDelay = `${index * 0.05}s`;
    
    const hasImage = item.image && item.image.trim() !== '';
    const itemNumber = index + 1;
    
    card.innerHTML = `
        <div class="menu-item-content">
            <div class="menu-item-text">
                <h3 class="item-name">
                    <span class="item-number">${itemNumber}</span>
                    ${item.name}
                </h3>
                <p class="item-description">${item.description}</p>
            </div>
            <div class="menu-item-right">
                <span class="item-price">${item.price}</span>
                ${hasImage ? `<img src="${item.image}" alt="${item.name}" class="item-thumbnail">` : ''}
            </div>
        </div>
    `;
    
    return card;
}

// Filter menu items based on category, subcategory and search
function filterMenuItems() {
    return menuData.filter(item => {
        const matchesCategory = item.category === currentCategory;
        let matchesSubCategory = true;
        
        if (currentCategory === 'drinks') {
            matchesSubCategory = currentSubCategory === 'all' || item.subCategory === currentSubCategory;
        } else if (currentCategory === 'food') {
            matchesSubCategory = currentFoodSubCategory === 'all' || item.subCategory === currentFoodSubCategory;
        }
        
        const matchesSearch = item.name.includes(searchTerm) || 
                             item.description.includes(searchTerm);
        return matchesCategory && matchesSubCategory && matchesSearch;
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderMenuItems();
    });
    
    // Category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all category buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            currentCategory = button.dataset.category;
            
            // Show/hide subcategories based on category
            if (currentCategory === 'drinks') {
                subcategoriesContainer.classList.remove('hide');
                foodSubcategories.style.display = 'none';
                drinksSubcategories.style.display = 'flex';
                // Keep current subcategory when switching to drinks
                subcategoryButtons.forEach(btn => btn.classList.remove('active'));
                const activeSubBtn = document.querySelector(`[data-subcategory="${currentSubCategory}"]`) || document.querySelector('[data-subcategory="all"]');
                activeSubBtn.classList.add('active');
            } else if (currentCategory === 'food') {
                subcategoriesContainer.classList.remove('hide');
                foodSubcategories.style.display = 'flex';
                drinksSubcategories.style.display = 'none';
                // Keep current food subcategory when switching to food
                subcategoryButtons.forEach(btn => btn.classList.remove('active'));
                const activeFoodBtn = document.querySelector(`[data-subcategory="${currentFoodSubCategory}"]`) || document.querySelector('#foodSubcategories [data-subcategory="all"]');
                activeFoodBtn.classList.add('active');
            } else {
                subcategoriesContainer.classList.add('hide');
            }
            
            renderMenuItems();
        });
    });
    
    // Subcategory buttons
    subcategoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all subcategory buttons
            subcategoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Update the appropriate subcategory variable
            if (currentCategory === 'drinks') {
                currentSubCategory = button.dataset.subcategory;
            } else if (currentCategory === 'food') {
                currentFoodSubCategory = button.dataset.subcategory;
            }
            
            renderMenuItems();
        });
    });
}

// Add to cart function (placeholder)
function addToCart(itemName) {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #4b2c20;
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        font-family: 'Cairo', sans-serif;
        font-weight: 600;
        z-index: 1000;
        animation: slideDown 0.3s ease;
    `;
    notification.textContent = `تمت إضافة "${itemName}" إلى السلة`;
    
    // Add animation keyframes if not already present
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideDown {
                from {
                    transform: translateX(-50%) translateY(-100px);
                    opacity: 0;
                }
                to {
                    transform: translateX(-50%) translateY(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease reverse';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
