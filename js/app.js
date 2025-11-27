/**
 * Salesman PWA - Main Application
 * Vanilla JavaScript SPA with routing and state management
 */

// ===================================
// App State
// ===================================
const AppState = {
    currentPage: 'home',
    currentTab: 'home',
    pageHistory: [],
    isNavigating: false
};

// Page titles mapping
const PAGE_TITLES = {
    'home': 'Salesman',
    'sales': 'Sales',
    'customers': 'Customers',
    'inventory': 'Inventory',
    'more': 'More',
    'invoice-list': 'Invoices',
    'invoice-detail': 'Invoice Details',
    'invoice-form': 'New Invoice',
    'delivery-list': 'Delivery Orders',
    'delivery-detail': 'D/O Details',
    'unpaid-list': 'Unpaid',
    'reseller-list': 'Resellers',
    'reseller-detail': 'Customer Details',
    'reseller-form': 'Add Customer',
    'schedule-list': 'Schedule',
    'schedule-form': 'Add Visit',
    'stock-list': 'Stock',
    'stock-detail': 'Product Details',
    'return-list': 'Returns',
    'return-form': 'New Return',
    'report-list': 'Daily Reports',
    'report-form': 'New Report',
    'ranking-list': 'Ranking',
    'gps-page': 'GPS Tracking',
    'registration-page': 'Registration',
    'notification-list': 'Notifications',
    'setting-page': 'Settings'
};

// Tab to pages mapping
const TAB_PAGES = {
    'home': 'home',
    'sales': 'sales',
    'customers': 'customers',
    'inventory': 'inventory',
    'more': 'more'
};

// ===================================
// DOM Elements
// ===================================
const DOM = {
    mainContent: null,
    header: null,
    headerTitle: null,
    headerBack: null,
    headerNotification: null,
    notificationBadge: null,
    tabBar: null,
    tabItems: null
};

// ===================================
// Initialize App
// ===================================
function initApp() {
    // Cache DOM elements
    DOM.mainContent = document.getElementById('mainContent');
    DOM.header = document.getElementById('header');
    DOM.headerTitle = document.getElementById('headerTitle');
    DOM.headerBack = document.getElementById('headerBack');
    DOM.headerNotification = document.getElementById('headerNotification');
    DOM.notificationBadge = document.getElementById('notificationBadge');
    DOM.tabBar = document.getElementById('tabBar');
    DOM.tabItems = document.querySelectorAll('.tab-item');

    // Setup event listeners
    setupTabNavigation();
    setupHeaderNavigation();
    setupActionHandlers();

    // Load initial page
    navigateToPage('home');

    // Update notification badge
    updateNotificationBadge();

    console.log('[App] Salesman PWA initialized');
}

// ===================================
// Navigation
// ===================================
function setupTabNavigation() {
    DOM.tabItems.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            if (tabName && tabName !== AppState.currentTab) {
                // Reset history when switching tabs
                AppState.pageHistory = [];
                navigateToTab(tabName);
            }
        });
    });
}

function setupHeaderNavigation() {
    // Back button
    DOM.headerBack.addEventListener('click', () => {
        navigateBack();
    });

    // Notification button
    DOM.headerNotification.addEventListener('click', () => {
        navigateToPage('notification-list');
    });
}

function navigateToTab(tabName) {
    // Update active tab
    DOM.tabItems.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });

    AppState.currentTab = tabName;

    // Navigate to tab's main page
    const page = TAB_PAGES[tabName];
    navigateToPage(page, false);
}

function navigateToPage(pageName, addToHistory = true) {
    if (AppState.isNavigating) return;
    AppState.isNavigating = true;

    // Add current page to history if navigating forward
    if (addToHistory && AppState.currentPage && AppState.currentPage !== pageName) {
        AppState.pageHistory.push(AppState.currentPage);
    }

    // Update state
    AppState.currentPage = pageName;

    // Update header
    updateHeader(pageName);

    // Render page
    renderPage(pageName);

    setTimeout(() => {
        AppState.isNavigating = false;
    }, 200);
}

function navigateBack() {
    if (AppState.pageHistory.length > 0) {
        const previousPage = AppState.pageHistory.pop();
        navigateToPage(previousPage, false);
    } else {
        // Go to current tab's main page
        navigateToPage(TAB_PAGES[AppState.currentTab], false);
    }
}

function updateHeader(pageName) {
    // Update title
    DOM.headerTitle.textContent = PAGE_TITLES[pageName] || 'Salesman';

    // Show/hide back button
    const isMainPage = Object.values(TAB_PAGES).includes(pageName);
    DOM.headerBack.style.display = isMainPage ? 'none' : 'flex';
}

// ===================================
// Page Rendering
// ===================================
function renderPage(pageName) {
    const template = document.getElementById(`page-${pageName}`);

    if (template) {
        const content = template.content.cloneNode(true);
        DOM.mainContent.innerHTML = '';
        DOM.mainContent.appendChild(content);

        // Initialize page-specific functionality
        initPageFunctions(pageName);
    } else {
        console.warn(`[App] Template not found: page-${pageName}`);
    }
}

function initPageFunctions(pageName) {
    switch (pageName) {
        case 'home':
            initHomePage();
            break;
        case 'sales':
        case 'customers':
        case 'inventory':
            initSubMenuPage(pageName);
            break;
        case 'more':
            initMorePage();
            break;
        case 'invoice-list':
            initInvoiceList();
            break;
        case 'invoice-detail':
            initInvoiceDetail();
            break;
        case 'invoice-form':
            initInvoiceForm();
            break;
        case 'delivery-list':
            initDeliveryList();
            break;
        case 'delivery-detail':
            initDeliveryDetail();
            break;
        case 'unpaid-list':
            initUnpaidList();
            break;
        case 'reseller-list':
            initResellerList();
            break;
        case 'reseller-detail':
            initResellerDetail();
            break;
        case 'reseller-form':
            initResellerForm();
            break;
        case 'schedule-list':
            initScheduleList();
            break;
        case 'schedule-form':
            initScheduleForm();
            break;
        case 'stock-list':
            initStockList();
            break;
        case 'stock-detail':
            initStockDetail();
            break;
        case 'return-list':
            initReturnList();
            break;
        case 'return-form':
            initReturnForm();
            break;
        case 'report-list':
            initReportList();
            break;
        case 'report-form':
            initReportForm();
            break;
        case 'ranking-list':
            initRankingList();
            break;
        case 'gps-page':
            initGpsPage();
            break;
        case 'registration-page':
            initRegistrationPage();
            break;
        case 'notification-list':
            initNotificationList();
            break;
        case 'setting-page':
            initSettingPage();
            break;
    }
}

// ===================================
// Action Handlers Setup
// ===================================
function setupActionHandlers() {
    // Delegate click events for dynamic content
    DOM.mainContent.addEventListener('click', (e) => {
        const actionCard = e.target.closest('[data-action]');
        const subMenuCard = e.target.closest('[data-page]');
        const listCard = e.target.closest('.list-card');
        const filterTab = e.target.closest('.filter-tab');
        const viewBtn = e.target.closest('.view-btn');

        if (actionCard) {
            handleActionCard(actionCard.dataset.action);
        } else if (subMenuCard) {
            navigateToPage(subMenuCard.dataset.page);
        } else if (listCard && listCard.dataset.id) {
            handleListCardClick(listCard);
        } else if (filterTab) {
            handleFilterTab(filterTab);
        } else if (viewBtn) {
            handleViewToggle(viewBtn);
        }
    });
}

function handleActionCard(action) {
    const actionPages = {
        'invoice': 'invoice-list',
        'delivery': 'delivery-list',
        'unpaid': 'unpaid-list',
        'reseller': 'reseller-list',
        'schedule': 'schedule-list',
        'stock': 'stock-list',
        'return': 'return-list',
        'report': 'report-list',
        'ranking': 'ranking-list',
        'gps': 'gps-page',
        'notification': 'notification-list',
        'setting': 'setting-page'
    };

    if (actionPages[action]) {
        navigateToPage(actionPages[action]);
    }
}

function handleListCardClick(card) {
    const pageType = AppState.currentPage.replace('-list', '');
    navigateToPage(`${pageType}-detail`);
}

function handleFilterTab(tab) {
    const parent = tab.parentElement;
    parent.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Filter logic would go here
    const filter = tab.dataset.filter;
    console.log(`[App] Filter: ${filter}`);
}

function handleViewToggle(btn) {
    const parent = btn.parentElement;
    parent.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const view = btn.dataset.view;
    const listView = document.getElementById('scheduleListView');
    const calendarView = document.getElementById('scheduleCalendarView');

    if (listView && calendarView) {
        listView.style.display = view === 'list' ? 'block' : 'none';
        calendarView.style.display = view === 'calendar' ? 'block' : 'none';
    }
}

// ===================================
// Page Initializers
// ===================================

// Home Page
function initHomePage() {
    // Update user name
    const userNameEl = document.getElementById('userName');
    if (userNameEl && MOCK_DATA.user) {
        userNameEl.textContent = MOCK_DATA.user.name;
    }

    // Render recent activity
    renderRecentActivity();
}

function renderRecentActivity() {
    const container = document.getElementById('recentActivity');
    if (!container || !MOCK_DATA.activities) return;

    container.innerHTML = MOCK_DATA.activities.slice(0, 5).map(activity => `
        <div class="activity-item">
            <div class="activity-icon" style="background-color: ${getActivityColor(activity.type)}20;">
                ${getActivityIcon(activity.type)}
            </div>
            <div class="activity-content">
                <p class="activity-title">${activity.title}</p>
                <p class="activity-desc">${activity.description}</p>
            </div>
            <span class="activity-time">${activity.time}</span>
        </div>
    `).join('');
}

function getActivityColor(type) {
    const colors = {
        'invoice': '#DC2626',
        'delivery': '#3B82F6',
        'payment': '#10B981',
        'visit': '#F59E0B'
    };
    return colors[type] || '#6B7280';
}

function getActivityIcon(type) {
    const icons = {
        'invoice': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
        'delivery': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
        'payment': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
        'visit': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
    };
    return icons[type] || '';
}

// Sub-Menu Pages
function initSubMenuPage(pageName) {
    // Sub-menu cards already have data-page attributes
    console.log(`[App] Sub-menu page: ${pageName}`);
}

// More Page
function initMorePage() {
    // More menu items already have data-page attributes
    console.log('[App] More page initialized');
}

// Invoice List
function initInvoiceList() {
    const container = document.getElementById('invoiceList');
    const addBtn = document.getElementById('btnAddInvoice');

    if (container && MOCK_DATA.invoices) {
        renderInvoiceList(container, MOCK_DATA.invoices);
    }

    if (addBtn) {
        addBtn.addEventListener('click', () => navigateToPage('invoice-form'));
    }
}

function renderInvoiceList(container, invoices) {
    container.innerHTML = invoices.map(inv => `
        <div class="list-card" data-id="${inv.id}">
            <div class="list-card-header">
                <span class="list-card-id">${inv.id}</span>
                <span class="badge ${getStatusBadgeClass(inv.status)}">${capitalizeFirst(inv.status)}</span>
            </div>
            <div class="list-card-body">
                <p class="list-card-title">${inv.customer}</p>
            </div>
            <div class="list-card-footer">
                <span class="list-card-amount">RM ${formatNumber(inv.amount)}</span>
                <span class="list-card-date">${formatDate(inv.date)}</span>
            </div>
        </div>
    `).join('');
}

// Invoice Detail
function initInvoiceDetail() {
    // For mockup, show first invoice details
    const invoice = MOCK_DATA.invoices[0];
    if (!invoice) return;

    setTextContent('invoiceId', invoice.id);
    setTextContent('invoiceCustomer', invoice.customer);
    setTextContent('invoiceDate', formatDate(invoice.date));
    setTextContent('invoiceAmount', `RM ${formatNumber(invoice.amount)}`);

    const statusEl = document.getElementById('invoiceStatus');
    if (statusEl) {
        statusEl.textContent = capitalizeFirst(invoice.status);
        statusEl.className = `badge ${getStatusBadgeClass(invoice.status)}`;
    }

    // Render items
    const itemsContainer = document.getElementById('invoiceItems');
    if (itemsContainer && invoice.items) {
        itemsContainer.innerHTML = invoice.items.map(item => `
            <div class="item-row">
                <div>
                    <p class="item-name">${item.name}</p>
                    <p class="item-qty">x${item.qty}</p>
                </div>
                <span class="item-price">RM ${formatNumber(item.price * item.qty)}</span>
            </div>
        `).join('');
    }
}

// Invoice Form
function initInvoiceForm() {
    const customerSelect = document.getElementById('invoiceCustomerSelect');
    const form = document.getElementById('invoiceForm');

    // Populate customer dropdown
    if (customerSelect && MOCK_DATA.resellers) {
        customerSelect.innerHTML = '<option value="">Select customer</option>' +
            MOCK_DATA.resellers.map(r => `<option value="${r.id}">${r.name}</option>`).join('');
    }

    // Form submission
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Invoice created successfully!');
            navigateBack();
        });
    }
}

// Delivery List
function initDeliveryList() {
    const container = document.getElementById('deliveryList');
    if (container && MOCK_DATA.deliveryOrders) {
        container.innerHTML = MOCK_DATA.deliveryOrders.map(d => `
            <div class="list-card" data-id="${d.id}">
                <div class="list-card-header">
                    <span class="list-card-id">${d.id}</span>
                    <span class="badge ${getStatusBadgeClass(d.status)}">${capitalizeFirst(d.status)}</span>
                </div>
                <div class="list-card-body">
                    <p class="list-card-title">${d.customer}</p>
                </div>
                <div class="list-card-footer">
                    <span class="list-card-date">${d.invoiceId}</span>
                    <span class="list-card-date">${formatDate(d.date)}</span>
                </div>
            </div>
        `).join('');
    }
}

// Delivery Detail
function initDeliveryDetail() {
    const d = MOCK_DATA.deliveryOrders[0];
    if (!d) return;

    setTextContent('doId', d.id);
    setTextContent('doInvoice', d.invoiceId);
    setTextContent('doCustomer', d.customer);
    setTextContent('doAddress', d.address);

    const statusEl = document.getElementById('doStatus');
    if (statusEl) {
        statusEl.textContent = capitalizeFirst(d.status);
        statusEl.className = `badge ${getStatusBadgeClass(d.status)}`;
    }

    const completeBtn = document.getElementById('btnCompleteDelivery');
    if (completeBtn) {
        completeBtn.addEventListener('click', () => {
            showToast('Delivery marked as complete!');
        });
    }
}

// Unpaid List
function initUnpaidList() {
    const container = document.getElementById('unpaidList');
    const totalEl = document.getElementById('totalUnpaid');

    if (container && MOCK_DATA.unpaidInvoices) {
        const unpaid = MOCK_DATA.unpaidInvoices;
        const total = unpaid.reduce((sum, inv) => sum + inv.amount, 0);

        if (totalEl) totalEl.textContent = `RM ${formatNumber(total)}`;

        container.innerHTML = unpaid.map(inv => `
            <div class="list-card" data-id="${inv.id}">
                <div class="list-card-header">
                    <span class="list-card-id">${inv.id}</span>
                    <span class="badge ${getAgingBadgeClass(inv.daysOverdue)}">${inv.daysOverdue} days</span>
                </div>
                <div class="list-card-body">
                    <p class="list-card-title">${inv.customer}</p>
                </div>
                <div class="list-card-footer">
                    <span class="list-card-amount text-danger">RM ${formatNumber(inv.amount)}</span>
                    <span class="list-card-date">Due: ${formatDate(inv.dueDate)}</span>
                </div>
            </div>
        `).join('');
    }
}

// Reseller List
function initResellerList() {
    const container = document.getElementById('resellerList');
    const addBtn = document.getElementById('btnAddReseller');
    const searchInput = document.getElementById('resellerSearch');

    if (container && MOCK_DATA.resellers) {
        renderResellerList(container, MOCK_DATA.resellers);
    }

    if (addBtn) {
        addBtn.addEventListener('click', () => navigateToPage('reseller-form'));
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = MOCK_DATA.resellers.filter(r =>
                r.name.toLowerCase().includes(query) ||
                r.location.toLowerCase().includes(query)
            );
            renderResellerList(container, filtered);
        });
    }
}

function renderResellerList(container, resellers) {
    container.innerHTML = resellers.map(r => `
        <div class="list-card" data-id="${r.id}">
            <div class="list-card-header">
                <span class="list-card-id">${r.name}</span>
                <span class="badge ${getStatusBadgeClass(r.status)}">${capitalizeFirst(r.status)}</span>
            </div>
            <div class="list-card-body">
                <p class="list-card-title">${r.location}</p>
            </div>
            <div class="list-card-footer">
                <span class="list-card-date">${r.phone}</span>
                <span class="list-card-date">Last: ${formatDate(r.lastOrder)}</span>
            </div>
        </div>
    `).join('');
}

// Reseller Detail
function initResellerDetail() {
    const r = MOCK_DATA.resellers[0];
    if (!r) return;

    setTextContent('resellerName', r.name);
    setTextContent('resellerPhone', r.phone);
    setTextContent('resellerLocation', r.location);
    setTextContent('resellerLastOrder', formatDate(r.lastOrder));

    const avatarEl = document.getElementById('resellerAvatar');
    if (avatarEl) avatarEl.textContent = r.name.charAt(0);

    const statusEl = document.getElementById('resellerStatus');
    if (statusEl) {
        statusEl.textContent = capitalizeFirst(r.status);
        statusEl.className = `badge ${getStatusBadgeClass(r.status)}`;
    }
}

// Reseller Form
function initResellerForm() {
    const form = document.getElementById('resellerForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Customer added successfully!');
            navigateBack();
        });
    }
}

// Schedule List
function initScheduleList() {
    const container = document.getElementById('scheduleList');
    const addBtn = document.getElementById('btnAddSchedule');

    if (container && MOCK_DATA.schedules) {
        container.innerHTML = MOCK_DATA.schedules.map(s => `
            <div class="list-card">
                <div class="list-card-header">
                    <span class="list-card-id">${s.time}</span>
                    <span class="badge badge-info">${s.type}</span>
                </div>
                <div class="list-card-body">
                    <p class="list-card-title">${s.customer}</p>
                </div>
                <div class="list-card-footer">
                    <span class="list-card-date">${s.location}</span>
                </div>
            </div>
        `).join('');
    }

    if (addBtn) {
        addBtn.addEventListener('click', () => navigateToPage('schedule-form'));
    }
}

// Schedule Form
function initScheduleForm() {
    const form = document.getElementById('scheduleForm');
    const customerSelect = document.getElementById('scheduleCustomerSelect');
    const dateInput = document.getElementById('scheduleDateInput');

    // Set default date to today
    if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }

    // Populate customers
    if (customerSelect && MOCK_DATA.resellers) {
        customerSelect.innerHTML = '<option value="">Select customer</option>' +
            MOCK_DATA.resellers.map(r => `<option value="${r.id}">${r.name}</option>`).join('');
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Visit scheduled successfully!');
            navigateBack();
        });
    }
}

// Stock List
function initStockList() {
    const container = document.getElementById('stockList');
    const searchInput = document.getElementById('stockSearch');

    if (container && MOCK_DATA.stock) {
        renderStockList(container, MOCK_DATA.stock);
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = MOCK_DATA.stock.filter(s =>
                s.name.toLowerCase().includes(query) ||
                s.sku.toLowerCase().includes(query)
            );
            renderStockList(container, filtered);
        });
    }
}

function renderStockList(container, stock) {
    container.innerHTML = stock.map(s => `
        <div class="list-card" data-id="${s.id}">
            <div class="list-card-header">
                <span class="list-card-id">${s.name}</span>
                <span class="badge ${getStockBadgeClass(s.qty, s.minQty)}">${s.qty} pcs</span>
            </div>
            <div class="list-card-body">
                <p class="list-card-title">${s.sku}</p>
            </div>
            <div class="list-card-footer">
                <span class="list-card-date">Min: ${s.minQty}</span>
                <span class="list-card-amount">RM ${formatNumber(s.price)}</span>
            </div>
        </div>
    `).join('');
}

// Stock Detail
function initStockDetail() {
    const s = MOCK_DATA.stock[0];
    if (!s) return;

    setTextContent('productName', s.name);
    setTextContent('productSku', `SKU: ${s.sku}`);
    setTextContent('currentStock', s.qty.toString());
    setTextContent('minStock', s.minQty.toString());

    const stockInBtn = document.getElementById('btnStockIn');
    const stockOutBtn = document.getElementById('btnStockOut');

    if (stockInBtn) {
        stockInBtn.addEventListener('click', () => showToast('Stock added!'));
    }
    if (stockOutBtn) {
        stockOutBtn.addEventListener('click', () => showToast('Stock removed!'));
    }
}

// Return List
function initReturnList() {
    const container = document.getElementById('returnList');
    const addBtn = document.getElementById('btnAddReturn');

    if (container && MOCK_DATA.returns) {
        container.innerHTML = MOCK_DATA.returns.map(r => `
            <div class="list-card">
                <div class="list-card-header">
                    <span class="list-card-id">${r.id}</span>
                    <span class="badge ${getStatusBadgeClass(r.status)}">${capitalizeFirst(r.status)}</span>
                </div>
                <div class="list-card-body">
                    <p class="list-card-title">${r.product}</p>
                </div>
                <div class="list-card-footer">
                    <span class="list-card-date">${r.reason}</span>
                    <span class="list-card-date">${formatDate(r.date)}</span>
                </div>
            </div>
        `).join('');
    }

    if (addBtn) {
        addBtn.addEventListener('click', () => navigateToPage('return-form'));
    }
}

// Return Form
function initReturnForm() {
    const form = document.getElementById('returnForm');
    const invoiceSelect = document.getElementById('returnInvoiceSelect');

    if (invoiceSelect && MOCK_DATA.invoices) {
        invoiceSelect.innerHTML = '<option value="">Select invoice</option>' +
            MOCK_DATA.invoices.map(i => `<option value="${i.id}">${i.id} - ${i.customer}</option>`).join('');
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Return submitted for approval!');
            navigateBack();
        });
    }
}

// Report List
function initReportList() {
    const container = document.getElementById('reportList');
    const addBtn = document.getElementById('btnAddReport');

    if (container && MOCK_DATA.reports) {
        container.innerHTML = MOCK_DATA.reports.map(r => `
            <div class="list-card">
                <div class="list-card-header">
                    <span class="list-card-id">${formatDate(r.date)}</span>
                    <span class="badge badge-success">Submitted</span>
                </div>
                <div class="list-card-body">
                    <p class="list-card-title">${r.visits} visits | RM ${formatNumber(r.sales)} sales</p>
                </div>
                <div class="list-card-footer">
                    <span class="list-card-date">${r.items} items sold</span>
                </div>
            </div>
        `).join('');
    }

    if (addBtn) {
        addBtn.addEventListener('click', () => navigateToPage('report-form'));
    }
}

// Report Form
function initReportForm() {
    const form = document.getElementById('reportForm');
    const dateInput = document.getElementById('reportDateInput');

    if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Daily report submitted!');
            navigateBack();
        });
    }
}

// Ranking List
function initRankingList() {
    const container = document.getElementById('rankingList');
    if (container && MOCK_DATA.rankings) {
        // Skip top 3 (shown in podium)
        const remaining = MOCK_DATA.rankings.slice(3);
        container.innerHTML = remaining.map((r, i) => `
            <div class="list-card">
                <div class="list-card-header">
                    <span class="list-card-id">#${i + 4} ${r.name}</span>
                </div>
                <div class="list-card-footer">
                    <span class="list-card-amount">RM ${formatNumber(r.sales)}</span>
                </div>
            </div>
        `).join('');
    }
}

// GPS Page
function initGpsPage() {
    const checkInOutBtn = document.getElementById('btnCheckInOut');
    const historyContainer = document.getElementById('gpsHistory');

    if (checkInOutBtn) {
        checkInOutBtn.addEventListener('click', () => {
            const currentText = checkInOutBtn.textContent.trim();
            if (currentText.includes('Check Out')) {
                checkInOutBtn.innerHTML = `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    Check In
                `;
                setTextContent('gpsStatus', 'Checked Out');
                showToast('Checked out successfully!');
            } else {
                checkInOutBtn.innerHTML = `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    Check Out
                `;
                setTextContent('gpsStatus', 'Checked In');
                showToast('Checked in successfully!');
            }
        });
    }

    if (historyContainer && MOCK_DATA.gpsHistory) {
        historyContainer.innerHTML = MOCK_DATA.gpsHistory.map(h => `
            <div class="item-row">
                <div>
                    <p class="item-name">${h.type}</p>
                    <p class="item-qty">${h.location}</p>
                </div>
                <span class="item-price">${h.time}</span>
            </div>
        `).join('');
    }
}

// Registration Page
function initRegistrationPage() {
    const form = document.getElementById('registrationForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Registration submitted!');
        });
    }
}

// Notification List
function initNotificationList() {
    const container = document.getElementById('notificationList');
    if (container && MOCK_DATA.notifications) {
        container.innerHTML = MOCK_DATA.notifications.map(n => `
            <div class="notification-item ${n.read ? '' : 'unread'}">
                <div class="notification-icon">
                    ${getNotificationIcon(n.type)}
                </div>
                <div class="notification-content">
                    <p class="notification-title">${n.title}</p>
                    <p class="notification-desc">${n.message}</p>
                    <span class="notification-time">${n.time}</span>
                </div>
            </div>
        `).join('');
    }
}

function getNotificationIcon(type) {
    const icons = {
        'schedule': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
        'payment': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
        'invoice': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
        'ranking': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
    };
    return icons[type] || icons['invoice'];
}

// Setting Page
function initSettingPage() {
    const logoutBtn = document.getElementById('btnLogout');
    const user = MOCK_DATA.user;

    if (user) {
        setTextContent('settingName', user.name);
        setTextContent('settingArea', `${user.area} Area`);

        const avatarEl = document.getElementById('settingAvatar');
        if (avatarEl) avatarEl.textContent = user.name.charAt(0);
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to logout?')) {
                showToast('Logged out successfully');
                // In real app, would redirect to login
            }
        });
    }
}

// ===================================
// Utility Functions
// ===================================
function updateNotificationBadge() {
    if (!MOCK_DATA.notifications) return;
    const unreadCount = MOCK_DATA.notifications.filter(n => !n.read).length;

    if (DOM.notificationBadge) {
        DOM.notificationBadge.textContent = unreadCount;
        DOM.notificationBadge.style.display = unreadCount > 0 ? 'flex' : 'none';
    }
}

function setTextContent(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function formatNumber(num) {
    return num.toLocaleString('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-MY', { day: 'numeric', month: 'short', year: 'numeric' });
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getStatusBadgeClass(status) {
    const classes = {
        'paid': 'badge-success',
        'active': 'badge-success',
        'delivered': 'badge-success',
        'approved': 'badge-success',
        'pending': 'badge-warning',
        'in-transit': 'badge-warning',
        'unpaid': 'badge-danger',
        'overdue': 'badge-danger',
        'inactive': 'badge-gray',
        'debt': 'badge-danger'
    };
    return classes[status.toLowerCase()] || 'badge-gray';
}

function getAgingBadgeClass(days) {
    if (days <= 30) return 'badge-warning';
    if (days <= 60) return 'badge-danger';
    return 'badge-danger';
}

function getStockBadgeClass(qty, minQty) {
    if (qty <= 0) return 'badge-danger';
    if (qty <= minQty) return 'badge-warning';
    return 'badge-success';
}

function showToast(message) {
    // Simple toast notification
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #1F2937;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 1000;
        animation: fadeIn 0.2s ease-out;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.2s';
        setTimeout(() => toast.remove(), 200);
    }, 2000);
}

// ===================================
// Initialize on DOM Ready
// ===================================
document.addEventListener('DOMContentLoaded', initApp);
