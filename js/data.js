/**
 * Salesman PWA - Mock Data
 * Hardcoded data for mockup demonstration
 */

const MOCK_DATA = {
    // Current User
    user: {
        id: 1,
        name: "Ahmad Salesman",
        phone: "012-3456789",
        email: "ahmad@salesman.com",
        area: "Selangor",
        avatar: "A"
    },

    // Recent Activities
    activities: [
        {
            id: 1,
            type: "invoice",
            title: "New Invoice Created",
            description: "INV-005 for Kedai Runcit XYZ",
            time: "10 mins ago"
        },
        {
            id: 2,
            type: "payment",
            title: "Payment Received",
            description: "RM 1,500 from Kedai ABC",
            time: "1 hour ago"
        },
        {
            id: 3,
            type: "delivery",
            title: "Delivery Completed",
            description: "DO-003 to Restoran Seri Maju",
            time: "2 hours ago"
        },
        {
            id: 4,
            type: "visit",
            title: "Customer Visit",
            description: "Checked in at Pasaraya Mini",
            time: "3 hours ago"
        },
        {
            id: 5,
            type: "invoice",
            title: "Invoice Updated",
            description: "INV-003 marked as paid",
            time: "Yesterday"
        }
    ],

    // Resellers/Customers
    resellers: [
        {
            id: 1,
            name: "Kedai Runcit ABC",
            phone: "011-1234567",
            status: "active",
            location: "Shah Alam, Selangor",
            address: "No. 123, Jalan Maju, Seksyen 7, Shah Alam",
            lastOrder: "2025-11-20"
        },
        {
            id: 2,
            name: "Restoran Seri Maju",
            phone: "012-9876543",
            status: "active",
            location: "Klang, Selangor",
            address: "Lot 45, Jalan Besar, Klang",
            lastOrder: "2025-11-22"
        },
        {
            id: 3,
            name: "Pasaraya Mini Jaya",
            phone: "013-5556789",
            status: "active",
            location: "Petaling Jaya, Selangor",
            address: "No. 88, SS2, Petaling Jaya",
            lastOrder: "2025-11-18"
        },
        {
            id: 4,
            name: "Kedai Serbaneka",
            phone: "019-1112233",
            status: "debt",
            location: "Subang Jaya, Selangor",
            address: "No. 12, USJ 10, Subang Jaya",
            lastOrder: "2025-10-15"
        },
        {
            id: 5,
            name: "Mart Express",
            phone: "016-4445566",
            status: "active",
            location: "Shah Alam, Selangor",
            address: "No. 55, Seksyen 13, Shah Alam",
            lastOrder: "2025-11-25"
        },
        {
            id: 6,
            name: "Kedai Runcit XYZ",
            phone: "017-7778899",
            status: "inactive",
            location: "Klang, Selangor",
            address: "No. 99, Taman Sentosa, Klang",
            lastOrder: "2025-09-10"
        }
    ],

    // Invoices
    invoices: [
        {
            id: "INV-001",
            customer: "Kedai Runcit ABC",
            customerId: 1,
            amount: 1500,
            status: "paid",
            date: "2025-11-25",
            items: [
                { name: "Product A", qty: 10, price: 50 },
                { name: "Product B", qty: 20, price: 25 },
                { name: "Product C", qty: 10, price: 50 }
            ]
        },
        {
            id: "INV-002",
            customer: "Restoran Seri Maju",
            customerId: 2,
            amount: 2300,
            status: "paid",
            date: "2025-11-23",
            items: [
                { name: "Product A", qty: 20, price: 50 },
                { name: "Product D", qty: 13, price: 100 }
            ]
        },
        {
            id: "INV-003",
            customer: "Pasaraya Mini Jaya",
            customerId: 3,
            amount: 850,
            status: "pending",
            date: "2025-11-20",
            items: [
                { name: "Product B", qty: 17, price: 50 }
            ]
        },
        {
            id: "INV-004",
            customer: "Mart Express",
            customerId: 5,
            amount: 3200,
            status: "paid",
            date: "2025-11-26",
            items: [
                { name: "Product A", qty: 30, price: 50 },
                { name: "Product C", qty: 17, price: 100 }
            ]
        },
        {
            id: "INV-005",
            customer: "Kedai Runcit XYZ",
            customerId: 6,
            amount: 1800,
            status: "pending",
            date: "2025-11-27",
            items: [
                { name: "Product A", qty: 20, price: 50 },
                { name: "Product B", qty: 16, price: 50 }
            ]
        }
    ],

    // Delivery Orders
    deliveryOrders: [
        {
            id: "DO-001",
            invoiceId: "INV-001",
            customer: "Kedai Runcit ABC",
            address: "No. 123, Jalan Maju, Seksyen 7, Shah Alam",
            status: "delivered",
            date: "2025-11-25"
        },
        {
            id: "DO-002",
            invoiceId: "INV-002",
            customer: "Restoran Seri Maju",
            address: "Lot 45, Jalan Besar, Klang",
            status: "delivered",
            date: "2025-11-24"
        },
        {
            id: "DO-003",
            invoiceId: "INV-004",
            customer: "Mart Express",
            address: "No. 55, Seksyen 13, Shah Alam",
            status: "in-transit",
            date: "2025-11-27"
        },
        {
            id: "DO-004",
            invoiceId: "INV-005",
            customer: "Kedai Runcit XYZ",
            address: "No. 99, Taman Sentosa, Klang",
            status: "pending",
            date: "2025-11-27"
        }
    ],

    // Unpaid Invoices
    unpaidInvoices: [
        {
            id: "INV-010",
            customer: "Kedai Serbaneka",
            amount: 4500,
            dueDate: "2025-10-01",
            daysOverdue: 57
        },
        {
            id: "INV-015",
            customer: "Kedai Runcit XYZ",
            amount: 2800,
            dueDate: "2025-10-15",
            daysOverdue: 43
        },
        {
            id: "INV-020",
            customer: "Pasaraya Mini Jaya",
            amount: 1200,
            dueDate: "2025-11-01",
            daysOverdue: 26
        },
        {
            id: "INV-025",
            customer: "Restoran Seri Maju",
            amount: 3500,
            dueDate: "2025-11-10",
            daysOverdue: 17
        },
        {
            id: "INV-030",
            customer: "Mart Express",
            amount: 500,
            dueDate: "2025-11-20",
            daysOverdue: 7
        }
    ],

    // Stock/Inventory
    stock: [
        {
            id: 1,
            name: "Product A - Premium",
            sku: "PRD-A001",
            qty: 150,
            minQty: 50,
            price: 50
        },
        {
            id: 2,
            name: "Product B - Standard",
            sku: "PRD-B001",
            qty: 45,
            minQty: 50,
            price: 25
        },
        {
            id: 3,
            name: "Product C - Economy",
            sku: "PRD-C001",
            qty: 200,
            minQty: 30,
            price: 15
        },
        {
            id: 4,
            name: "Product D - Deluxe",
            sku: "PRD-D001",
            qty: 0,
            minQty: 20,
            price: 100
        },
        {
            id: 5,
            name: "Product E - Basic",
            sku: "PRD-E001",
            qty: 80,
            minQty: 40,
            price: 35
        },
        {
            id: 6,
            name: "Product F - Special",
            sku: "PRD-F001",
            qty: 25,
            minQty: 30,
            price: 75
        }
    ],

    // Returns
    returns: [
        {
            id: "RTN-001",
            product: "Product B - Standard",
            qty: 5,
            reason: "Damaged",
            status: "approved",
            date: "2025-11-20"
        },
        {
            id: "RTN-002",
            product: "Product A - Premium",
            qty: 2,
            reason: "Expired",
            status: "pending",
            date: "2025-11-25"
        },
        {
            id: "RTN-003",
            product: "Product C - Economy",
            qty: 10,
            reason: "Wrong Item",
            status: "pending",
            date: "2025-11-26"
        }
    ],

    // Schedules
    schedules: [
        {
            id: 1,
            customer: "Kedai Runcit ABC",
            location: "Shah Alam",
            date: "2025-11-27",
            time: "09:00 AM",
            type: "Visit",
            notes: "Monthly order collection"
        },
        {
            id: 2,
            customer: "Mart Express",
            location: "Shah Alam",
            date: "2025-11-27",
            time: "11:00 AM",
            type: "Delivery",
            notes: "Deliver DO-003"
        },
        {
            id: 3,
            customer: "Pasaraya Mini Jaya",
            location: "Petaling Jaya",
            date: "2025-11-27",
            time: "02:00 PM",
            type: "Visit",
            notes: "Follow up on payment"
        },
        {
            id: 4,
            customer: "Restoran Seri Maju",
            location: "Klang",
            date: "2025-11-28",
            time: "10:00 AM",
            type: "Visit",
            notes: "New product introduction"
        }
    ],

    // Daily Reports
    reports: [
        {
            id: 1,
            date: "2025-11-26",
            visits: 8,
            sales: 5500,
            items: 45,
            notes: "Good day, completed all scheduled visits"
        },
        {
            id: 2,
            date: "2025-11-25",
            visits: 6,
            sales: 3200,
            items: 28,
            notes: "Rain in the afternoon, some visits postponed"
        },
        {
            id: 3,
            date: "2025-11-24",
            visits: 10,
            sales: 7800,
            items: 62,
            notes: "Best day this week! New customer acquired"
        },
        {
            id: 4,
            date: "2025-11-23",
            visits: 7,
            sales: 4100,
            items: 35,
            notes: "Normal day"
        },
        {
            id: 5,
            date: "2025-11-22",
            visits: 5,
            sales: 2800,
            items: 22,
            notes: "Public holiday affected some shops"
        }
    ],

    // Rankings
    rankings: [
        { id: 1, name: "Ahmad", sales: 24500, rank: 1, badge: "Top Seller" },
        { id: 2, name: "Bakar", sales: 18500, rank: 2, badge: "Rising Star" },
        { id: 3, name: "Chong", sales: 15200, rank: 3, badge: "" },
        { id: 4, name: "Devi", sales: 14800, rank: 4, badge: "" },
        { id: 5, name: "Farid", sales: 12500, rank: 5, badge: "" },
        { id: 6, name: "Goh", sales: 11200, rank: 6, badge: "" },
        { id: 7, name: "Hakim", sales: 10800, rank: 7, badge: "" },
        { id: 8, name: "Ismail", sales: 9500, rank: 8, badge: "" },
        { id: 9, name: "Johan", sales: 8200, rank: 9, badge: "" },
        { id: 10, name: "Kumar", sales: 7500, rank: 10, badge: "" }
    ],

    // Notifications
    notifications: [
        {
            id: 1,
            type: "schedule",
            title: "Upcoming Visit",
            message: "Visit to Kedai Runcit ABC at 9:00 AM tomorrow",
            time: "Just now",
            read: false
        },
        {
            id: 2,
            type: "payment",
            title: "Payment Received",
            message: "RM 1,500 received from Kedai Runcit ABC",
            time: "1 hour ago",
            read: false
        },
        {
            id: 3,
            type: "ranking",
            title: "Weekly Ranking",
            message: "You are #1 this week! Keep it up!",
            time: "2 hours ago",
            read: false
        },
        {
            id: 4,
            type: "invoice",
            title: "Invoice Overdue",
            message: "INV-010 from Kedai Serbaneka is 57 days overdue",
            time: "Yesterday",
            read: true
        },
        {
            id: 5,
            type: "schedule",
            title: "Visit Reminder",
            message: "Don't forget to visit Pasaraya Mini Jaya today",
            time: "Yesterday",
            read: true
        }
    ],

    // GPS History
    gpsHistory: [
        {
            id: 1,
            type: "Check In",
            location: "Kedai Runcit ABC, Shah Alam",
            time: "09:15 AM",
            lat: 3.0738,
            lng: 101.5183
        },
        {
            id: 2,
            type: "Check Out",
            location: "Kedai Runcit ABC, Shah Alam",
            time: "09:45 AM",
            lat: 3.0738,
            lng: 101.5183
        },
        {
            id: 3,
            type: "Check In",
            location: "Mart Express, Shah Alam",
            time: "10:30 AM",
            lat: 3.0856,
            lng: 101.5290
        },
        {
            id: 4,
            type: "Check Out",
            location: "Mart Express, Shah Alam",
            time: "11:15 AM",
            lat: 3.0856,
            lng: 101.5290
        }
    ],

    // Products (for forms)
    products: [
        { id: 1, name: "Product A - Premium", price: 50 },
        { id: 2, name: "Product B - Standard", price: 25 },
        { id: 3, name: "Product C - Economy", price: 15 },
        { id: 4, name: "Product D - Deluxe", price: 100 },
        { id: 5, name: "Product E - Basic", price: 35 },
        { id: 6, name: "Product F - Special", price: 75 }
    ]
};

// Export for use in modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MOCK_DATA;
}
