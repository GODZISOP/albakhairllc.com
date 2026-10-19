import defaultLogo from '../images/smartaiventures-logo.svg';

/**
 * =========================================================================
 * 🌟 GLOBAL SITE CONFIGURATION (CENTRAL CONTROL PANEL)
 * =========================================================================
 * SMART AI VENTURES LLC — Sirf yahan se sab kuch change karo!
 * Website ka koi bhi text, link, phone, email, about, footer sab yahan hai.
 * =========================================================================
 */

export const siteConfig = {

  // ─────────────────────────────────────────────
  // 🏢 COMPANY IDENTITY
  // ─────────────────────────────────────────────
  companyName:     "Smart AI Ventures LLC",
  shortName:       "Smart AI Ventures",
  legalName:       "SMART AI VENTURES LLC",
  tagline:         "Smart Technology, Wholesale Trading & Global Distribution",
  heroSubtitle:    "Direct manufacturer sourcing, dependable bulk supply chains, and exceptional consumer essentials curated by Smart AI Ventures LLC.",
  eyebrowStandard: "THE SMART AI VENTURES STANDARD OF EXCELLENCE",

  // ─────────────────────────────────────────────
  // 📞 PHONE, WHATSAPP & EMAIL
  // ─────────────────────────────────────────────
  phonePrimary:    "(+966) 53 098 7507",   // Top nav display
  phonePrimaryTel: "+966530987507",         // tel: dial link
  phoneDirect:     "(+966) 53 098 7507",   // Contact page direct line
  phoneDirectTel:  "+966530987507",         // tel: dial link
  whatsappNumber:  "966530987507",          // Numbers only (no + or spaces)
  whatsappDisplay: "(+966) 53 098 7507",
  email:           "info@smartaiventuresllc.com",
  website:         "www.smartaiventuresllc.com",

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
  // 📖 ABOUT US PAGE — Yahan se About text change karo
  // ─────────────────────────────────────────────
  about: {
    // Main paragraphs
    mission:      "At Smart AI Ventures LLC, our mission is to deliver exceptional wholesale value, connecting premier international manufacturers with retailers, commercial distributors, and online merchants worldwide. Founded on the principles of trust, transparency, and trade excellence, we serve as a reliable bridge between global suppliers and growing businesses.",
    b2bNote:      "Whether you operate independent retail stores, supermarket chains, or e-commerce marketplaces, Smart AI Ventures LLC provides flexible minimums, volume price tiers, and dependable fulfillment. Our team ensures every order meets the highest quality and delivery standards you can count on.",
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
    formSuccess:  "Thank you! Your message has been received by Smart AI Ventures LLC. We will reply within 24 hours.",
    labels: {
      email:      "Email",
      phone:      "Phone Number",
      hub:        "Operating Trade Hub",
      whatsapp:   "WhatsApp Chat",
      management: "Management"
    }
  },

  // ─────────────────────────────────────────────
  // 🦶 FOOTER — Sab footer text yahan se change karo
  // ─────────────────────────────────────────────
  footer: {
    description:        "Quality products online. Sourcing and distribution dedicated to supplying top tier merchandise with transparent global logistics.",
    operationsLabel:    "Global Distribution & Wholesale Trade Hub",
    newsletterTagline:  "Receive exclusive price updates, catalog drops, and seasonal availability lists.",
    newsletterSuccess:  "✓ Thank you for subscribing to our wholesale bulletin!",
    copyrightSuffix:    "All rights reserved.",
    managedByLabel:     "Global Logistics & Distribution Hub",
    websiteUrl:         "https://www.smartaiventuresllc.com",
    domain:             "smartaiventuresllc.com",

    // Social media — sirf URL update karo
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
    quote:  "Partnering with Smart AI Ventures LLC transformed our wholesale inventory turnover. Top-tier product authenticity, fast fulfillment, and flawless communication.",
    author: "Verified Commercial Trade Partner"
  },

  // ─────────────────────────────────────────────
  // 💰 CURRENCY SYMBOL
  // ─────────────────────────────────────────────
  currencySymbol: "$",  // Change to 'SAR', 'AED', '₨' etc.

  // ─────────────────────────────────────────────
  // 🖼️ LOGO
  // ─────────────────────────────────────────────
  logo: defaultLogo,

  // ─────────────────────────────────────────────
  // 🎨 COLOR THEME (Modern Executive Tech Sapphire)
  // ─────────────────────────────────────────────
  theme: {
    primaryNavy:   "#09172a",
    secondaryTeal: "#132a48",
    accentTeal:    "#0284c7",
    accentHover:   "#0369a1",
    accentGold:    "#0284c7",
    bgLight:       "#f8fafc"
  }
};
