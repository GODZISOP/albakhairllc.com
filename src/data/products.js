import honeyImg from '../images/royal-sidr-honey.jpg';

export const categories = [
  {
    id: 'home-living',
    name: 'Home & Modern Living',
    description: 'Smart ambient climate systems, architectural task lighting, and curated residential hardware.',
    buttonText: 'Shop Home & Living',
    link: '#',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'personal-care',
    name: 'Personal Care & Fragrances',
    description: 'Dermatologist-grade peptide skincare, luxury botanical elixirs, and signature artisanal perfumes.',
    buttonText: 'Shop Personal Care',
    link: '#',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'smart-electronics',
    name: 'Smart Tech & Gadgets',
    description: 'High-fidelity spatial audio systems, 100W GaN fast power stations, and modern consumer tech.',
    buttonText: 'Shop Electronics',
    link: '#',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'gourmet-pantry',
    name: 'Gourmet & Pantry Staples',
    description: 'Single-estate cold extracted olive reserves, Grade A+ mountain Sidr honey, and artisanal provisions.',
    buttonText: 'Shop Gourmet',
    link: '#',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  }
];

export const products = [
  {
    id: 1,
    name: 'AeroPure Smart HEPA Air Purifier & Ionizer',
    category: 'home-living',
    categoryName: 'Home & Modern Living',
    sku: 'SAV-AIR-101',
    price: '$ 48',
    priceNumeric: 48,
    packSize: 'Smart IoT 3-Stage True HEPA Air Filtration Console',
    availability: 'In Stock (Ready for Dispatch)',
    stockUnits: 3400,
    minOrder: '1 Master Unit',
    rating: 5.0,
    reviewCount: 78,
    priceNote: 'Direct Factory & Bulk Wholesale Tier Available',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Purify commercial suites and living spaces with medical-grade H13 True HEPA filtration, smart air quality sensors, and whisper-quiet brushless motor.',
    longDescription: 'Curated and sourced by Smart AI Ventures LLC, the AeroPure Smart Purifier captures 99.97% of airborne particles down to 0.3 microns including allergens, fine dust, and volatile compounds. Features real-time laser PM2.5 tracking, mobile app telemetry, and ultra-low energy consumption for commercial and residential applications.',
    features: [
      'Medical-grade H13 True HEPA filter + active honeycomb carbon odor neutralizer',
      'High-precision laser sensor with dynamic color-coded PM2.5 air quality readout',
      'Ultra-silent brushless motor operating at a whisper-quiet 22dB in night mode',
      'Smart WiFi & IoT connectivity compatible with voice assistants and scheduled timers',
      'Commercial coverage up to 550 sq. ft. with complete air exchange every 15 minutes'
    ],
    tiers: [
      { range: '1 - 19 Units', price: '$ 48', discount: 'Retail Base' },
      { range: '20 - 99 Units', price: '$ 41', discount: '15% Wholesale' },
      { range: '100+ Units', price: '$ 34', discount: '29% Commercial Pallet' }
    ],
    specs: [
      { label: 'Filtration Stage', value: '3-in-1 Pre-filter, H13 HEPA, Activated Carbon' },
      { label: 'CADR Rating', value: '380 m³/h' },
      { label: 'Power Rating', value: '38W Energy Star Certified' },
      { label: 'Coverage Area', value: 'Up to 550 sq. ft.' },
      { label: 'Warranty', value: '2 Year Commercial Replacement Guarantee' }
    ]
  },
  {
    id: 2,
    name: 'Lumina Touch LED Ambient Desk Lamp & Fast Wireless Charger',
    category: 'home-living',
    categoryName: 'Home & Modern Living',
    sku: 'SAV-LUM-102',
    price: '$ 32',
    priceNumeric: 32,
    packSize: 'Architectural Aluminum Task Light with 15W Qi Charging Base',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 2900,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 56,
    priceNote: 'Volume Tier Pricing',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Sleek anodized aluminum desk lamp with full-spectrum eye-care illumination, 5 color temperature presets, and integrated fast wireless charging.',
    longDescription: 'Supplied directly by Smart AI Ventures LLC for modern corporate suites and home workstations. Designed with smooth touch-slide dimming, memory function, zero blue-light hazard certification, and dual-axis folding hinges for flexible angle adjustments.',
    features: [
      'Full-spectrum LED panel delivers CRI > 95 natural sunlight simulation',
      'Built-in 15W Qi fast wireless charging pad + additional 5V/2A USB-A output port',
      '5 color temperature modes (2700K Warm - 6500K Daylight) with stepless dimming',
      'Aircraft-grade sandblasted aluminum alloy chassis with weighted anti-slip silicone base',
      'Automatic 45-minute auto-off sleep timer and smart brightness memory'
    ],
    tiers: [
      { range: '1 - 24 Units', price: '$ 32', discount: 'Standard Price' },
      { range: '25 - 99 Units', price: '$ 26', discount: '19% Bulk Discount' },
      { range: '100+ Units', price: '$ 21', discount: '34% Master Carton' }
    ],
    specs: [
      { label: 'Chassis Material', value: 'Anodized Aircraft Aluminum' },
      { label: 'Wireless Charging', value: '15W Qi Fast Standard' },
      { label: 'Color Temperature', value: '2700K - 6500K Adjustable' },
      { label: 'LED Lifespan', value: '50,000+ Hours Rated' }
    ]
  },
  {
    id: 3,
    name: 'Velvet Amber & Royal Oud Artisan Eau de Parfum',
    category: 'personal-care',
    categoryName: 'Personal Care & Fragrances',
    sku: 'SAV-PRF-201',
    price: '$ 38',
    priceNumeric: 38,
    packSize: '100ml Heavy Crystal Flacon with Magnetic Metallic Atomizer',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 3800,
    minOrder: '1 Unit',
    rating: 5.0,
    reviewCount: 95,
    priceNote: 'Boutique & Perfumery Wholesale Available',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Exquisite oriental fragrance opening with Sicilian bergamot and saffron, blending into aged Cambodian agarwood and smoky ambergris.',
    longDescription: 'Handcrafted and batch-matured under the highest artisanal fragrance standards for Smart AI Ventures LLC. A long-lasting 25% Extrait concentration designed for high-end boutique perfumeries and discerning retailers worldwide, presented in a luxury matte black gift box.',
    features: [
      '25% Extrait de Parfum concentration delivering 14+ hours of lasting sillage',
      'Masterfully blended with natural aged Cambodian oud, amber resin, and wild roses',
      'Custom magnetic atomizer cap with ultra-fine micro-mist nozzle dispersion',
      'Free from synthetic parabens, phthalates, and animal testing',
      'Luxury gift-ready packaging with individual authenticity batch certificate'
    ],
    tiers: [
      { range: '1 - 29 Units', price: '$ 38', discount: 'Base Price' },
      { range: '30 - 119 Units', price: '$ 31', discount: '18% Salon Tier' },
      { range: '120+ Units', price: '$ 24', discount: '37% Wholesale MOQ' }
    ],
    specs: [
      { label: 'Volume', value: '100ml / 3.4 fl. oz.' },
      { label: 'Fragrance Family', value: 'Warm Oriental Woody & Amber' },
      { label: 'Concentration', value: 'Extrait de Parfum (25%)' },
      { label: 'Shelf Life', value: '36 Months' }
    ]
  },
  {
    id: 4,
    name: 'Botanical Ceramide Barrier Recovery Serum & Cream Duo',
    category: 'personal-care',
    categoryName: 'Personal Care & Fragrances',
    sku: 'SAV-SKN-202',
    price: '$ 34',
    priceNumeric: 34,
    packSize: 'Clinical Hydration Treatment Kit with Niacinamide & Squalane',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 4200,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 88,
    priceNote: 'Dermatologist Tested & Approved',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Fortify the skin lipid barrier with bioactive multi-ceramides, vegan squalane, and bio-fermented hyaluronic peptides.',
    longDescription: 'Formulated for clinical skincare distributors and beauty retailers under Smart AI Ventures LLC standards. Dermatologist-tested, non-comedogenic, and 100% cruelty-free formulation packaged in airless luxury glass dispensers to preserve active ingredient stability.',
    features: [
      'Bio-identical 5-Ceramide complex (EOP, NS, NP, AS, AP) repairs damaged skin barriers',
      'Botanical olive squalane and 5% niacinamide reduce redness and even skin tone',
      'Triple molecular weight hyaluronic acid delivers continuous 72-hour deep cellular hydration',
      'Hypoallergenic, fragrance-free formula certified safe for highly sensitive skin',
      'Vacuum airless pump containers prevent bacterial contamination and oxidation'
    ],
    tiers: [
      { range: '1 - 19 Units', price: '$ 34', discount: 'Single Unit Price' },
      { range: '20 - 79 Units', price: '$ 27', discount: '21% Retailer Tier' },
      { range: '80+ Units', price: '$ 21', discount: '38% Master Carton' }
    ],
    specs: [
      { label: 'Kit Components', value: '50ml Recovery Serum + 50g Lipid Cream' },
      { label: 'Active Ingredients', value: 'Ceramides NP/AP/EOP, Niacinamide, Squalane' },
      { label: 'Certification', value: 'Dermatologist Tested, Hypoallergenic' },
      { label: 'Origin', value: 'Certified GMP & ISO-22716 Facility' }
    ]
  },
  {
    id: 5,
    name: 'ApexPro ANC Spatial Wireless Studio Headphones',
    category: 'smart-electronics',
    categoryName: 'Smart Tech & Gadgets',
    sku: 'SAV-APX-301',
    price: '$ 64',
    priceNumeric: 64,
    packSize: 'Hi-Res Spatial Audio Over-Ear Headset with Hard Travel Case',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 2500,
    minOrder: '1 Unit',
    rating: 5.0,
    reviewCount: 114,
    priceNote: 'Wholesale Electronics Tier Available',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Immerse in studio acoustics with 45dB hybrid active noise cancellation, custom 40mm beryllium drivers, and 50-hour battery life.',
    longDescription: 'Curated and distributed globally by Smart AI Ventures LLC. Built with dual transparency mode, spatial audio head tracking, Bluetooth 5.4 multi-point streaming, and memory-foam ear cushions wrapped in breathable protein leather for unmatched acoustic comfort.',
    features: [
      'Hybrid ANC with 6 dedicated feedforward/feedback mics cancels up to 45dB noise',
      'Beryllium-coated 40mm acoustic drivers deliver crystalline highs and sub-bass depth',
      '50 hours playback on single charge (10-minute USB-C quick charge provides 6 hours)',
      'Bluetooth 5.4 Multipoint seamlessly pairs with laptop, tablet, and smartphone',
      'Built-in AI beamforming ENC microphone ensures studio-grade voice calls'
    ],
    tiers: [
      { range: '1 - 14 Units', price: '$ 64', discount: 'Base Wholesale' },
      { range: '15 - 59 Units', price: '$ 53', discount: '17% Distributor' },
      { range: '60+ Units', price: '$ 43', discount: '33% Bulk Pallet' }
    ],
    specs: [
      { label: 'Bluetooth Protocol', value: 'Bluetooth 5.4 with LDAC & AAC' },
      { label: 'Battery Capacity', value: '900 mAh (Up to 50h Playback)' },
      { label: 'Noise Reduction', value: 'Up to 45dB Hybrid Active ANC' },
      { label: 'Warranty', value: '1 Year Full Replacement Guarantee' }
    ]
  },
  {
    id: 6,
    name: 'NovaCharge 100W GaN Quad-Port Fast Desktop Charger',
    category: 'smart-electronics',
    categoryName: 'Smart Tech & Gadgets',
    sku: 'SAV-CHG-302',
    price: '$ 28',
    priceNumeric: 28,
    packSize: 'High-Speed 4-Port GaN Desktop Charger (3x USB-C + 1x USB-A)',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 5100,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 82,
    priceNote: 'High Velocity Retail Ready',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Rapidly charge laptops, tablets, and phones simultaneously with GaN III technology and intelligent dynamic power distribution.',
    longDescription: 'Procured by Smart AI Ventures LLC for consumer electronics wholesalers. 60% smaller than conventional silicon chargers, featuring comprehensive heat dissipation, surge protection, and global 100-240V compatibility for seamless international travel and office setups.',
    features: [
      'Next-generation Gallium Nitride (GaN III) architecture operates 30% cooler',
      '100W single port max output charges 16" laptops to 50% in just 30 minutes',
      'Dynamic power balancing intelligently allocates power across 4 connected devices',
      'Foldable US plug with interchangeable UK & EU adapters included in package',
      'Multi-layer safety: over-voltage, over-temperature, and short-circuit protection'
    ],
    tiers: [
      { range: '1 - 29 Units', price: '$ 28', discount: 'Retail Base' },
      { range: '30 - 119 Units', price: '$ 22.50', discount: '20% Volume' },
      { range: '120+ Units', price: '$ 17.80', discount: '36% Wholesale Carton' }
    ],
    specs: [
      { label: 'Total Output', value: '100W Max' },
      { label: 'Ports', value: '3x USB-C (PD 3.0/PPS) + 1x USB-A (QC 4.0)' },
      { label: 'Input Voltage', value: '100-240V ~ 50/60Hz 2.0A' },
      { label: 'Certifications', value: 'CE, FCC, RoHS, UL Tested' }
    ]
  },
  {
    id: 7,
    name: 'Royal Sidr Mountain Raw Honey Reserve (Grade A+)',
    category: 'gourmet-pantry',
    categoryName: 'Gourmet & Pantry Staples',
    sku: 'SAV-HNY-401',
    price: '$ 24',
    priceNumeric: 24,
    packSize: '500g Hexagonal Glass Hex-Jar with Hand-Carved Honey Dipper',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 5800,
    minOrder: '1 Master Unit',
    rating: 5.0,
    reviewCount: 138,
    priceNote: 'Export Grade Certified 100% Raw & Halal',
    image: honeyImg,
    link: '#',
    description: 'Unpasteurized, pure monofloral Sidr honey harvested from pristine wild mountain valleys with rich antibacterial properties.',
    longDescription: 'Directly imported from verified highland beekeepers by Smart AI Ventures LLC. Lab-certified purity, high enzymatic activity, and a distinct butterscotch-amber flavor profile favored by gourmet grocers and luxury hospitality suites.',
    features: [
      '100% pure raw unheated mountain Sidr honey with zero additive sugars',
      'Abundant in natural enzymes, antioxidants, and immune-supporting bio-nutrients',
      'Heavy hexagonal glass jar with gold-embossed tamper-evident security seal',
      'Includes complimentary handcrafted natural olivewood honey dipper',
      'Certified 100% Halal, Non-GMO, and batch tested for purity'
    ],
    tiers: [
      { range: '1 - 39 Units', price: '$ 24', discount: 'Standard Price' },
      { range: '40 - 149 Units', price: '$ 19.50', discount: '19% Retail Pack' },
      { range: '150+ Units', price: '$ 15.20', discount: '37% Export Tier' }
    ],
    specs: [
      { label: 'Net Weight', value: '500g / 17.6 oz' },
      { label: 'Floral Source', value: 'Wild Sidr Tree (Ziziphus spina-christi)' },
      { label: 'Processing', value: 'Cold-Extracted, Unfiltered Raw' },
      { label: 'Shelf Life', value: 'Indefinite (Best within 36 Months)' }
    ]
  },
  {
    id: 8,
    name: 'Artisan Single-Estate Extra Virgin Olive Oil (Cold-Extracted)',
    category: 'gourmet-pantry',
    categoryName: 'Gourmet & Pantry Staples',
    sku: 'SAV-EVO-402',
    price: '$ 22',
    priceNumeric: 22,
    packSize: '750ml Dark UV-Protected Marasca Glass with Precision Pourer',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 4600,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 96,
    priceNote: 'Restaurant & Wholesale Bulk Rates',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'First cold-pressed single estate extra virgin olive oil with low acidity (<0.2%), grassy fruity notes, and a peppery polyphenol finish.',
    longDescription: 'Brought directly to commercial dining establishments and premium grocers by Smart AI Ventures LLC. Harvested by hand within 24 hours of pressing, retaining maximum polyphenol vitality and natural vitamin E, ideal for dressings, dipping, and culinary finishing.',
    features: [
      'First cold mechanical extraction under 24°C preserves delicate polyphenols',
      'Certified ultra-low acidity (<0.2%) ranking in the top international EVOO grade',
      'Dark UV-coated Marasca glass bottle with integrated anti-drip pourer spout',
      'High polyphenol count (>450 mg/kg) providing proven cellular wellness benefits',
      'Traceable single-estate harvest with complete laboratory analysis certificates'
    ],
    tiers: [
      { range: '1 - 24 Units', price: '$ 22', discount: 'Single Bottle' },
      { range: '25 - 99 Units', price: '$ 17.50', discount: '20% Wholesale Case' },
      { range: '100+ Units', price: '$ 14.00', discount: '36% Commercial Pallet' }
    ],
    specs: [
      { label: 'Net Volume', value: '750ml / 25.4 fl. oz.' },
      { label: 'Acidity', value: '< 0.2% at harvest' },
      { label: 'Extraction Method', value: 'Mechanical First Cold Press' },
      { label: 'Harvest Profile', value: 'Single-Estate Early Harvest' }
    ]
  }
];
