import defaultLogo from '../images/shaikrahmathullah-logo.svg';

/**
 * =========================================================================
 * 🌟 GLOBAL SITE CONFIGURATION (CENTRAL CONTROL PANEL)
 * =========================================================================
 * SHAIK RAHMATHULLAH LLC — Central Brand, Contact & Color Settings
 * =========================================================================
 */

export const siteConfig = {

  // ─────────────────────────────────────────────
  // 🏢 COMPANY IDENTITY
  // ─────────────────────────────────────────────
  companyName:     "Shaik Rahmathullah LLC",
  shortName:       "Shaik Rahmathullah",
  legalName:       "SHAIK RAHMATHULLAH LLC",
  tagline:         "Premium Wholesale, General Trading & Global Distribution",
  heroSubtitle:    "Direct manufacturer sourcing, dependable bulk supply chains, and exceptional consumer essentials curated by Shaik Rahmathullah LLC.",
  eyebrowStandard: "THE SHAIK RAHMATHULLAH STANDARD OF EXCELLENCE",

  // ─────────────────────────────────────────────
  // 📞 PHONE, WHATSAPP & EMAIL
  // ─────────────────────────────────────────────
  phonePrimary:    "(+966) 53 098 7507",   // Top nav display
  phonePrimaryTel: "+966530987507",         // tel: dial link
  phoneDirect:     "(+966) 53 098 7507",   // Contact page direct line
  phoneDirectTel:  "+966530987507",         // tel: dial link
  whatsappNumber:  "966530987507",          // Numbers only (no + or spaces)
  whatsappDisplay: "(+966) 53 098 7507",
  email:           "info@shaikrahmathullahllc.com",
  website:         "www.shaikrahmathullahllc.com",

  // ─────────────────────────────────────────────
  // 📍 ADDRESS & HUBS
  // ─────────────────────────────────────────────
  address: {
    line1:        "Global Distribution Trade Desk",
    line2:        "Middle East & North America Logistics",
    full:         "Global Distribution Trade Hub",
    cityStateZip: "Global Logistics Trade Desk",
    jurisdiction: "Commercial LLC Registered"
  },
  hubs: {
    originText:   "Dispatched via Global Logistics & Freight Hubs",
    dispatchNote: "Dispatched from our primary international distribution hubs and regional fulfillment centers."
  },

  // ─────────────────────────────────────────────
  // 📖 ABOUT US PAGE
  // ─────────────────────────────────────────────
  about: {
    // Main paragraphs
    mission:      "At Shaik Rahmathullah LLC, our mission is to deliver exceptional wholesale value, connecting premier international manufacturers with retailers, commercial distributors, and online merchants worldwide. Founded on the principles of trust, transparency, and trade excellence, we serve as a reliable bridge between global suppliers and growing businesses.",
    b2bNote:      "Whether you operate independent retail stores, supermarket chains, or e-commerce marketplaces, Shaik Rahmathullah LLC provides flexible minimums, volume price tiers, and dependable fulfillment. Our team ensures every order meets the highest quality and delivery standards you can count on.",
    sourcingNote: "We pride ourselves on thoughtful sourcing — choosing products that deliver genuine performance, high customer satisfaction, and dependable quality for retail and wholesale partners worldwide.",

    // 3 value cards shown on the About Us page
    cards: [
      {
        title:       "Integrity First",
        description: "Transparent pricing, transparent communication, and verified product authenticity."
      },
      {
        title:       "Logistics Agility",
        description: "Fast customs turnaround, reliable carrier contracts, and multi-hub fulfillment."
      },
      {
        title:       "Partner Centric",
        description: "Dedicated trade managers ready to accommodate customer requirements and custom schedules."
      }
    ],

    // CTA button text on About page
    ctaButton: "Contact Management Desk"
  },

  // ─────────────────────────────────────────────
  // 📞 CONTACT US PAGE — Labels & helper texts
  // ─────────────────────────────────────────────
  contact: {
    sectionTag:   "GET IN TOUCH",
    tagline:      "We are at your service for catalog requests, partnership discussions, or general inquiries.",
    cardTitle:    "Direct Coordinates",
    formTitle:    "Send Us a Message",
    formSuccess:  "Thank you! Your message has been received by Shaik Rahmathullah LLC. We will reply within 24 hours.",
    labels: {
      email:      "Email",
      phone:      "Phone Number",
      hub:        "Operating Trade Hub",
      whatsapp:   "WhatsApp Chat",
      management: "Management"
    }
  },

  // ─────────────────────────────────────────────
  // 🦶 FOOTER
  // ─────────────────────────────────────────────
  footer: {
    description:        "Quality products online. Sourcing and distribution dedicated to supplying top tier merchandise with transparent global logistics.",
    operationsLabel:    "Global Distribution & Wholesale Trade Hub",
    newsletterTagline:  "Receive exclusive price updates, catalog drops, and seasonal availability lists.",
    newsletterSuccess:  "✓ Thank you for subscribing to our wholesale bulletin!",
    copyrightSuffix:    "All rights reserved.",
    managedByLabel:     "Global Logistics & Distribution Hub",
    websiteUrl:         "https://www.shaikrahmathullahllc.com",
    domain:             "shaikrahmathullahllc.com",

    // Social media
    socials: [
      { label: "Facebook",  url: "https://facebook.com/" },
      { label: "Instagram", url: "https://instagram.com/" },
      { label: "TikTok",    url: "https://tiktok.com/" }
    ],

    // Footer navigation menu
    menu: [
      { label: "Home",    tab: "home" },
      { label: "Shop",    tab: "home", scrollTo: "featured-products-section" },
      { label: "About",   tab: "about" },
      { label: "Contact", tab: "contact" }
    ]
  },

  // ─────────────────────────────────────────────
  // ⭐ TESTIMONIAL
  // ─────────────────────────────────────────────
  testimonial: {
    quote:  "Partnering with Shaik Rahmathullah LLC transformed our wholesale inventory turnover. Top-tier product authenticity, fast fulfillment, and flawless communication.",
    author: "Verified Commercial Trade Partner"
  },

  // ─────────────────────────────────────────────
  // 💰 CURRENCY SYMBOL
  // ─────────────────────────────────────────────
  currencySymbol: "$",

  // ─────────────────────────────────────────────
  // 🖼️ LOGO
  // ─────────────────────────────────────────────
  logo: defaultLogo,

  // ─────────────────────────────────────────────
  // 🎨 COLOR THEME (Luxury Gold & Deep Royal Navy)
  // ─────────────────────────────────────────────
  theme: {
    primaryNavy:   "#091526",
    secondaryTeal: "#112a45",
    accentTeal:    "#d97706",
    accentHover:   "#b45309",
    accentGold:    "#f59e0b",
    bgLight:       "#f8fafc"
  }
};
