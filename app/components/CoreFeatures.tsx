import Image from 'next/image'

const features = [
  {
    badge: "Inventory Control",
    title: "Inventory & Stock Management",
    tag: "Most Popular",
    description: "Never run out of stock again! Our intelligent inventory system provides real-time tracking, predictive analytics, and automated alerts to keep your business running smoothly.",
    bullets: [
      "Real-time stock level monitoring with instant alerts",
      "AI-powered reorder point predictions",
      "Multi-location warehouse management",
      "Barcode & QR code scanning integration",
      "Low stock automated notifications"
    ],
    stats: [
      { number: "95%", label: "Accuracy Rate" },
      { number: "40%", label: "Cost Reduction" }
    ],
    demoBtn: "View Live Demo",
    image: "/image/Inventory & Stock Management.jpg"
  },
  {
    badge: "Sales Engine",
    title: "Production/Sales & Order Management",
    description: "Transform your sales workflow with our comprehensive order management system that automates everything from quotes to final delivery confirmation.",
    bullets: [
      "Drag-and-drop order pipeline management",
      "One-click quote to invoice conversion",
      "Automated order status updates",
      "Customer portal for order tracking",
      "Sales performance analytics dashboard"
    ],
    stats: [
      { number: "60%", label: "Faster Processing" },
      { number: "35%", label: "More Sales" }
    ],
    demoBtn: "Try Sales Demo",
    image: "/image/Sales & Order Management.jpg"
  },
  {
    badge: "Smart Logistics",
    title: "Route & Delivery Tracking",
    tag: "New",
    description: "Revolutionize your delivery operations with AI-powered route optimization, live GPS tracking, and automated customer communications for superior service.",
    bullets: [
      "AI-powered route optimization algorithms",
      "Live GPS tracking with ETA predictions",
      "Automated SMS/WhatsApp delivery updates",
      "Digital proof of delivery with signatures",
      "Delivery performance analytics"
    ],
    stats: [
      { number: "30%", label: "Fuel Savings" },
      { number: "99.2%", label: "On-Time Rate" }
    ],
    integrations: ["Google Maps", "Waze", "GPS"],
    demoBtn: "Track Demo Route",
    image: "/image/Route & Delivery Tracking.jpg"
  },
  {
    badge: "Customer Success",
    title: "Customer Relationship Management (CRM)",
    description: "Build lasting customer relationships with our intelligent CRM that tracks every interaction, predicts customer needs, and automates personalized communications.",
    bullets: [
      "360° customer profile with interaction history",
      "Automated follow-up and reminder system",
      "Customer behavior analytics & insights",
      "Personalized communication templates",
      "Customer lifetime value tracking"
    ],
    stats: [
      { number: "45%", label: "Higher Retention" },
      { number: "25%", label: "More Revenue" }
    ],
    demoBtn: "Explore CRM",
    image: "/image/Customer Relationship Management.jpg"
  },
  {
    badge: "Financial Control",
    title: "Payments & Collections",
    description: "Accelerate cash flow with our comprehensive payment solution featuring multiple gateways, automated collections, and intelligent payment reminders.",
    bullets: [
      "Multi-gateway payment processing (Card, Bank, Mobile)",
      "Smart payment reminder automation",
      "Partial payment tracking & management",
      "Real-time financial dashboard",
      "Automated reconciliation reports"
    ],
    stats: [
      { number: "50%", label: "Faster Collection" },
      { number: "15%", label: "Reduced Late Payments" }
    ],
    integrations: ["Stripe", "PayPal", "Bank Transfer", "JazzCash"],
    demoBtn: "Test Payments",
    image: "/image/Payments & Collections.jpg"
  },
  {
    badge: "Business Intelligence",
    title: "Reports & Analytics",
    tag: "Advanced",
    description: "Make smarter business decisions with powerful analytics, customizable reports, and predictive insights that reveal hidden opportunities in your data.",
    bullets: [
      "Interactive dashboard with real-time metrics",
      "Custom report builder with drag-and-drop",
      "Predictive analytics & trend forecasting",
      "Automated report scheduling & delivery",
      "Export to PDF, Excel, and Google Sheets"
    ],
    stats: [
      { number: "20+", label: "Report Types" },
      { number: "Real-time", label: "Data Updates" }
    ],
    demoBtn: "View Sample Reports",
    image: "/image/Reports & Analytics.jpg"
  },
  {
    badge: "Social Commerce",
    title: "WhatsApp Order Integration",
    tag: "Trending",
    description: "Tap into the power of WhatsApp commerce! Accept orders, send catalogs, and manage customer communications all through the world's most popular messaging app.",
    bullets: [
      "WhatsApp Business API integration",
      "Automated catalog sharing & updates",
      "Order placement via chat messages",
      "WhatsApp payment link generation",
      "Bulk messaging & broadcast campaigns"
    ],
    stats: [
      { number: "3x", label: "Higher Engagement" },
      { number: "80%", label: "Response Rate" }
    ],
    integrations: ["WhatsApp Business", "Meta API"],
    demoBtn: "See WhatsApp Demo",
    image: "/image/WhatsApp Order IntegrationT.jpg"
  },
  {
    badge: "Procurement Hub",
    title: "Requisition & Supplier Ordering",
    description: "Streamline procurement processes with intelligent supplier management, automated purchase orders, and approval workflows that save time and reduce costs.",
    bullets: [
      "Multi-level approval workflow system",
      "Supplier performance scorecards",
      "Automated purchase order generation",
      "Budget tracking & spend analysis",
      "Supplier communication portal"
    ],
    stats: [
      { number: "65%", label: "Faster Approvals" },
      { number: "20%", label: "Cost Savings" }
    ],
    demoBtn: "Try Procurement",
    image: "/image/Requisition & Supplier Ordering.jpg"
  },
  {
    badge: "Document Automation",
    title: "Invoice & Receipt Generation",
    description: "Create stunning, professional invoices and receipts in seconds with our smart document generator featuring custom branding and automated tax calculations.",
    bullets: [
      "Professional invoice templates library",
      "Custom branding & logo integration",
      "Multi-currency & tax rate support",
      "Automatic payment link inclusion",
      "Digital delivery via email/WhatsApp"
    ],
    stats: [
      { number: "10x", label: "Faster Creation" },
      { number: "100%", label: "Compliance" }
    ],
    integrations: ["PDF Export", "Email", "WhatsApp"],
    demoBtn: "Generate Sample Invoice",
    image: "/image/Invoice & Receipt Generation.jpg"
  },
  {
    badge: "Mobile First",
    title: "Seamless Mobile Workflow",
    tag: "Essential",
    description: "Run your entire business from your smartphone! Our mobile-optimized platform ensures you never miss a beat, with intuitive touch controls, offline capabilities, and seamless synchronization across all your devices.",
    bullets: [
      "Responsive mobile interface optimized for all screen sizes",
      "Offline mode with automatic sync when connection returns",
      "Touch-friendly controls and gesture navigation",
      "Push notifications for real-time updates",
      "Cross-device synchronization and data backup"
    ],
    stats: [
      { number: "100%", label: "Mobile Compatible" },
      { number: "24/7", label: "Accessibility" }
    ],
    demoBtn: "Try Mobile Demo",
    image: "/image/Seamless Mobile Workflow.png"
  }
]

export default function CoreFeatures() {
  return (
    <section className="core-features" id="features">
      <div className="container">
        <h2 className="section-title">Dockzen — Core Features & Highlights</h2>
        
        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-content">
                <div className="feature-badge">{feature.badge}</div>
                <h3>
                  {feature.title}
                  {feature.tag && <span className="feature-tag">{feature.tag}</span>}
                </h3>
                <p>{feature.description}</p>
                <ul className="feature-bullets">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
                <div className="feature-stats">
                  {feature.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="feature-stat">
                      <span className="feature-stat-number">{stat.number}</span>
                      <span className="feature-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
                {feature.integrations && (
                  <div className="integration-badges">
                    {feature.integrations.map((integration, integrationIndex) => (
                      <span key={integrationIndex} className="integration-badge">{integration}</span>
                    ))}
                  </div>
                )}
                <a href="#" className="feature-demo-btn">{feature.demoBtn}</a>
              </div>
              <div className="feature-placeholder">
                <Image 
                  src={feature.image}
                  alt={`${feature.title} Dashboard`}
                  width={600}
                  height={350}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
