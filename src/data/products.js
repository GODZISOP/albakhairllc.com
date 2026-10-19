import cookwareImg from '../images/cookware-set.jpg';
import charcuterieImg from '../images/charcuterie-board.jpg';
import wirelessChargerImg from '../images/wireless-charging-dock.jpg';
import honeyImg from '../images/royal-sidr-honey.jpg';

export const categories = [
  {
    id: 'home-kitchen',
    name: 'Home Accents & Culinary Ware',
    description: 'Precision multi-ply stainless cookware, handcrafted serving ware, and curated kitchen essentials.',
    buttonText: 'Shop Culinary & Home',
    link: '#',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'luxury-perfumery',
    name: 'Luxury Fragrances & Pure Attars',
    description: 'Master-distilled pure Arabian attars, concentrated Taif rose oils, and long-lasting extrait de parfum.',
    buttonText: 'Shop Fragrances',
    link: '#',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'smart-gadgets',
    name: 'Smart Electronics & Mobile Gear',
    description: 'High-fidelity spatial audio ANC headsets, fast wireless desktop magnetic docks, and modern consumer tech.',
    buttonText: 'Shop Electronics',
    link: '#',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'specialty-gourmet',
    name: 'Gourmet Provisions & Specialty Reserves',
    description: 'Single-estate early harvest extra virgin olive oils, wild highland mountain raw honey, and artisanal foods.',
    buttonText: 'Shop Gourmet',
    link: '#',
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  }
];

export const products = [
  {
    id: 1,
    name: 'Al Bakhair Royale 7-Piece Tri-Ply Stainless Steel Cookware Suite',
    category: 'home-kitchen',
    categoryName: 'Home Accents & Culinary Ware',
    sku: 'ABK-KIT-101',
    price: '$ 118',
    priceNumeric: 118,
    packSize: 'Master Export Crate (7-Piece Set with Tempered Glass Lids)',
    availability: 'In Stock (Ready to Dispatch)',
    stockUnits: 1450,
    minOrder: '1 Master Unit',
    rating: 5.0,
    reviewCount: 96,
    priceNote: 'Direct Factory & Bulk Wholesale Tier Available',
    image: cookwareImg,
    link: '#',
    description: 'Professional commercial-grade tri-ply encapsulated induction cookware with brushed ergonomic stay-cool handles and precision laser-etched volume markers.',
    longDescription: 'Curated and distributed by Al Bakhair LLC for fine dining institutions, hospitality venues, and specialty retail stores. Heavy-gauge tri-ply construction combines interior 304 food-grade stainless steel with a high-conductivity aluminum core for rapid, even heat distribution free of hot spots.',
    features: [
      'Heavy-gauge commercial tri-ply (18/10 stainless interior, aluminum core, magnetic induction exterior)',
      'Dual-riveted stay-cool ergonomic cast stainless handles engineered for rigorous commercial kitchens',
      'Shatter-resistant tempered glass lids featuring steam release valves and stainless steel rims',
      'Oven-safe up to 500°F (260°C) and completely dishwasher-safe for effortless sanitation',
      'Laser-etched internal metric and imperial measurement markings for chef precision'
    ],
    tiers: [
      { range: '1 - 15 Sets', price: '$ 118', discount: 'Base Wholesale' },
      { range: '16 - 50 Sets', price: '$ 98', discount: '17% Bulk Discount' },
      { range: '51+ Sets', price: '$ 82', discount: '31% Pallet Tier' }
    ],
    specs: [
      { label: 'Set Includes', value: '8" Skillet, 10" Skillet, 2.5Qt Saucepan, 6Qt Stockpot with Lids' },
      { label: 'Material', value: 'Tri-Ply 304 Stainless Steel & Aluminum Core' },
      { label: 'Cooktop Compatibility', value: 'Gas, Induction, Ceramic, Electric, Halogen' },
      { label: 'Certifications', value: 'FDA, LFGB & ISO 9001 Commercial Food Contact' },
      { label: 'Warranty', value: '10-Year Commercial Replacement Warranty' }
    ]
  },
  {
    id: 2,
    name: 'Artisan Marble & Acacia Wood Charcuterie Serving Board Set',
    category: 'home-kitchen',
    categoryName: 'Home Accents & Culinary Ware',
    sku: 'ABK-HOM-102',
    price: '$ 32',
    priceNumeric: 32,
    packSize: 'Gift Packaged Master Case of 4 Units',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 2800,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 74,
    priceNote: 'Volume Tier Pricing',
    image: charcuterieImg,
    link: '#',
    description: 'Hand-crafted dual-surface natural white Carrara marble and sustainable seasoned acacia wood board with brushed brass hanging loop.',
    longDescription: 'Supplied directly by Al Bakhair LLC for luxury tableware retailers and boutique catering companies. The natural cool temperature of the solid Carrara marble keeps cheeses and antipasti fresh, while the organic acacia grain provides a durable cutting surface.',
    features: [
      'Genuine hand-cut natural Carrara white marble paired with sustainably harvested golden acacia',
      'Smooth food-safe organic beeswax and mineral oil finish enhancing natural wood luster',
      'Solid brushed brass hanging ring for decorative vertical kitchen wall display',
      'Non-scratch silicone feet installed to protect delicate stone and glass dining surfaces',
      'Individually boxed in eco-kraft presentation packaging ideal for high-end gifting'
    ],
    tiers: [
      { range: '1 - 24 Units', price: '$ 32', discount: 'Standard Price' },
      { range: '25 - 99 Units', price: '$ 25', discount: '22% Bulk Discount' },
      { range: '100+ Units', price: '$ 19', discount: '40% Master Carton' }
    ],
    specs: [
      { label: 'Dimensions', value: '16" L x 8.5" W x 0.75" Thick' },
      { label: 'Materials', value: 'Natural Carrara Marble & Acacia Hardwood' },
      { label: 'Care Instructions', value: 'Hand Wash with Mild Soap; Do Not Soak' },
      { label: 'Packaging', value: 'Premium Kraft Gift Box with Corner Protectors' }
    ]
  },
  {
    id: 3,
    name: 'Sultan Al Bakhair Concentrated Taif Rose & Aged Amber Dehn (12ml)',
    category: 'luxury-perfumery',
    categoryName: 'Luxury Fragrances & Pure Attars',
    sku: 'ABK-OUD-201',
    price: '$ 46',
    priceNumeric: 46,
    packSize: 'Velvet Lined Presentation Box (12ml Crystal Flacon with Glass Dipstick)',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 1900,
    minOrder: '1 Master Box',
    rating: 5.0,
    reviewCount: 112,
    priceNote: 'Distributor Volume Discounts',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Artisanal alcohol-free perfume oil steeped with first-harvest Taif mountain roses, golden amber resin, and refined Cambodian agarwood.',
    longDescription: 'Curated by Al Bakhair LLC for luxury oriental boutiques and fragrance connoisseurs. Distilled using traditional copper alembics to preserve the fragile aromatic fractions of rare Taif rose petals, anchored by centuries-old aged dark amber and royal sweet sandalwood.',
    features: [
      '100% pure alcohol-free concentrated perfume oil (Attar / Dehn) with 24-hour skin longevity',
      'Crafted from first-harvest mountain Taif rose distillates and aged wild amber resin',
      'Hand-cut heavy crystal flacon featuring an ornate gold-plated applicator dipstick wand',
      'Packaged in an embossed rigid royal navy velvet jewel box with magnetic closure',
      'IFRA certified and skin-safety tested under dermatological supervision'
    ],
    tiers: [
      { range: '1 - 19 Units', price: '$ 46', discount: 'Retail Base' },
      { range: '20 - 79 Units', price: '$ 36', discount: '22% Wholesale' },
      { range: '80+ Units', price: '$ 29', discount: '37% Case Import Tier' }
    ],
    specs: [
      { label: 'Volume', value: '12 ml (approx. 1 Tola Pure Concentrated Oil)' },
      { label: 'Formulation', value: 'Non-Alcoholic Pure Perfume Oil' },
      { label: 'Fragrance Profile', value: 'Taif Rose, Golden Amber, Cambodian Agarwood, Musk' },
      { label: 'Sillage', value: 'Extremely Long Lasting (24+ Hours Projection)' }
    ]
  },
  {
    id: 4,
    name: 'Bakhair Imperial Noir Extrait de Parfum (100ml Spray)',
    category: 'luxury-perfumery',
    categoryName: 'Luxury Fragrances & Pure Attars',
    sku: 'ABK-PRF-202',
    price: '$ 58',
    priceNumeric: 58,
    packSize: '100ml Matte Black Heavy Glass Spray Bottle (Master Pack of 12)',
    availability: 'In Stock (Ready to Dispatch)',
    stockUnits: 2150,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 88,
    priceNote: 'Direct Sourcing Wholesale Tier Available',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'High-projection 35% concentration extrait de parfum opening with Italian bergamot and dry cardamom over smoky cedarwood and velvety musk.',
    longDescription: 'A signature masculine and unisex evening scent curated by Al Bakhair LLC. Formulated in Grasse and bottled in luxury flacons, Imperial Noir delivers unmatched depth, sillage, and magnetic presence across formal gatherings.',
    features: [
      'Concentrated 35% Extrait de Parfum formulation ensuring 16+ hours of vibrant longevity',
      'Complex pyramid: Top notes of Calabrian Bergamot & Pink Pepper; Heart of Iris & Smoked Birch; Base of Ambergris & Java Vetiver',
      'Weighted soft-touch matte black glass flacon with a heavy magnetic metal cap',
      'Micro-fine mist atomizer engineered for even, silky fragrance dispersal without pooling',
      'Manufactured adhering to strict European cosmetic GMP standards'
    ],
    tiers: [
      { range: '1 - 24 Units', price: '$ 58', discount: 'Base Price' },
      { range: '25 - 99 Units', price: '$ 45', discount: '22% Bulk Tier' },
      { range: '100+ Units', price: '$ 36', discount: '38% Distributor Tier' }
    ],
    specs: [
      { label: 'Concentration', value: 'Extrait de Parfum (35% Fragrance Oil Concentration)' },
      { label: 'Bottle Volume', value: '100 ml / 3.4 fl. oz.' },
      { label: 'Origin', value: 'French Oil Distillation, Gulf Compounding' },
      { label: 'Shelf Life', value: '36 Months from Date of Bottling' }
    ]
  },
  {
    id: 5,
    name: 'AeroPulse Spatial Audio Wireless ANC Studio Headphones',
    category: 'smart-gadgets',
    categoryName: 'Smart Electronics & Mobile Gear',
    sku: 'ABK-AUD-301',
    price: '$ 48',
    priceNumeric: 48,
    packSize: 'Retail Master Carton (10 Sets with Protective Hard Case)',
    availability: 'In Stock (Ready to Dispatch)',
    stockUnits: 3400,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 142,
    priceNote: 'Direct Factory & Bulk Wholesale Tier Available',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: '40mm titanium dynamic drivers delivering 3D spatial acoustics, hybrid 42dB active noise cancellation, and 65 hours of continuous battery playback.',
    longDescription: 'Sourced and tested by Al Bakhair LLC for tech retailers and audiophiles. Features ultra-responsive dual-feedforward and feedback ANC microphones that cancel ambient airplane and street noise in real time, accompanied by memory-foam protein leather ear cushions.',
    features: [
      'Hybrid 42dB active noise cancellation with 3 ambient transparency awareness modes',
      'Custom 40mm titanium diaphragm acoustic drivers delivering rich bass and crisp highs up to 40kHz',
      'Ultra-long 65-hour battery life with Quick Charge (10 minutes charge gives 5 hours playback)',
      'Multi-point Bluetooth 5.3 seamlessly paired with laptop and smartphone simultaneously',
      'Foldable ergonomic design with ballistic nylon EVA travel protective carrying case included'
    ],
    tiers: [
      { range: '1 - 19 Units', price: '$ 48', discount: 'Standard Wholesale' },
      { range: '20 - 99 Units', price: '$ 38', discount: '21% Bulk Order' },
      { range: '100+ Units', price: '$ 31', discount: '35% Master Carton' }
    ],
    specs: [
      { label: 'Driver Size', value: '40mm Titanium Composite Dynamic Drivers' },
      { label: 'Battery Capacity', value: '800 mAh Lithium-Polymer (65h Runtime)' },
      { label: 'Bluetooth Version', value: 'Bluetooth 5.3 + AAC, LDAC, SBC Codecs' },
      { label: 'Certifications', value: 'CE, FCC, RoHS, UKCA Commercial Compliance' }
    ]
  },
  {
    id: 6,
    name: 'NovaCharge 3-in-1 Magnetic Fast Wireless Charging Dock',
    category: 'smart-gadgets',
    categoryName: 'Smart Electronics & Mobile Gear',
    sku: 'ABK-CHG-302',
    price: '$ 26',
    priceNumeric: 26,
    packSize: 'Commercial Wholesale Pack (20 Units with Braided 1m Type-C Cables)',
    availability: 'In Stock (Ready to Dispatch)',
    stockUnits: 4100,
    minOrder: '1 Master Unit',
    rating: 4.8,
    reviewCount: 95,
    priceNote: 'Volume Tier Pricing',
    image: wirelessChargerImg,
    link: '#',
    description: 'Aircraft-grade anodized aluminum folding stand simultaneously rapid-charging Qi smartphone, smartwatch, and wireless earbuds with smart thermal management.',
    longDescription: 'Curated by Al Bakhair LLC for commercial workspaces, hotels, and consumer electronics distributors. The precision magnetic ring locks mobile devices in place in both vertical portrait and horizontal movie modes while preventing overcharging and heat accumulation.',
    features: [
      'Simultaneous 3-device rapid induction charging (15W Phone + 5W Watch + 5W Earbuds)',
      'Constructed from precision CNC-machined aerospace grade aluminum alloy',
      'Compact foldable form factor with multi-angle hinges ideal for travel and clean desks',
      'Intelligent Foreign Object Detection (FOD) with over-voltage and thermal protection',
      'Subtle breathing LED indicator light that automatically dims during night-time charging'
    ],
    tiers: [
      { range: '1 - 24 Units', price: '$ 26', discount: 'Base Price' },
      { range: '25 - 99 Units', price: '$ 20', discount: '23% Bulk Tier' },
      { range: '100+ Units', price: '$ 15', discount: '42% Master Crate' }
    ],
    specs: [
      { label: 'Total Output', value: 'Up to 25W Fast Wireless Output' },
      { label: 'Input Interface', value: 'USB Type-C (Supports PD & QC 3.0)' },
      { label: 'Materials', value: 'Anodized Aluminum & Tempered Scratch-Proof Glass' },
      { label: 'Safety Protections', value: 'Overheat, Overcurrent, Short-Circuit Protection' }
    ]
  },
  {
    id: 7,
    name: 'Heritage Mountain Wildflower & Raw Honey Reserve (750g)',
    category: 'specialty-gourmet',
    categoryName: 'Gourmet Provisions & Specialty Reserves',
    sku: 'ABK-HON-401',
    price: '$ 28',
    priceNumeric: 28,
    packSize: 'Food-Grade Hexagonal Glass Jars (Pack of 6 Jars / 750g each)',
    availability: 'In Stock (Ready to Dispatch)',
    stockUnits: 3600,
    minOrder: '1 Master Case (6 Jars)',
    rating: 5.0,
    reviewCount: 168,
    priceNote: 'Direct Producer Wholesale Tier Available',
    image: honeyImg,
    link: '#',
    description: '100% pure unfiltered raw mountain honey harvested from pesticide-free highland flora, naturally rich in active enzymes and golden floral notes.',
    longDescription: 'Directly sourced and laboratory-certified by Al Bakhair LLC. Raw, cold-extracted, unpasteurized honey that preserves its natural pollen grains, antioxidants, and rich floral bouquet, collected from isolated mountain apiaries.',
    features: [
      '100% unpasteurized raw monofloral mountain honey cold-centrifuged to protect enzymes',
      'Zero additives, zero artificial syrups, and non-GMO verified with full batch traceability',
      'Rich amber hue with thick natural crystallization and smooth butter-like mouthfeel',
      'Heavy-duty hexagonal glass flacon with airtight gold lug tamper-evident vacuum seal',
      'Tested and certified for purity by certified international food analysis labs'
    ],
    tiers: [
      { range: '1 - 19 Jars', price: '$ 28', discount: 'Standard Wholesale' },
      { range: '20 - 79 Jars', price: '$ 22', discount: '21% Bulk Tier' },
      { range: '80+ Jars', price: '$ 17', discount: '39% Commercial Pallet' }
    ],
    specs: [
      { label: 'Net Weight', value: '750 grams (26.4 oz) per jar' },
      { label: 'Processing', value: 'Raw, Unheated, Cold-Extracted Centrifugal' },
      { label: 'Moisture Level', value: '< 17.5% (High Density Premium Grade)' },
      { label: 'Storage', value: 'Store at Room Temperature; Natural Crystallization is Normal' }
    ]
  },
  {
    id: 8,
    name: 'Al Bakhair Cold-Pressed Single-Estate Extra Virgin Olive Oil (1000ml)',
    category: 'specialty-gourmet',
    categoryName: 'Gourmet Provisions & Specialty Reserves',
    sku: 'ABK-OIL-402',
    price: '$ 24',
    priceNumeric: 24,
    packSize: 'Dark UV-Resistant Glass Bottles with Pour Spout (Case of 12 Bottles)',
    availability: 'In Stock (Ready to Dispatch)',
    stockUnits: 5200,
    minOrder: '1 Master Case (12 Units)',
    rating: 4.9,
    reviewCount: 130,
    priceNote: 'Direct Estate Import & Volume Tier Available',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'First cold-pressed extra virgin olive oil harvested from early-season mature groves, boasting ultra-low acidity (<0.2%) and polyphenol richness.',
    longDescription: 'Imported and distributed internationally by Al Bakhair LLC. Pressed within 4 hours of mechanical hand-harvesting, this reserve captures radiant golden-green hues, aromatic artichoke notes, and a peppery polyphenol finish prized by culinary chefs worldwide.',
    features: [
      'First cold extraction performed strictly below 24°C (75°F) within 4 hours of picking',
      'Ultra-low certified acidity below 0.2% indicating pristine fruit quality and care',
      'High polyphenol content (>450 mg/kg) offering exceptional health benefits and antioxidant stability',
      'Heavy UV-blocking dark marasca glass bottle preserving delicate organoleptic profiles',
      'Integrated retractable non-drip pourer spout for clean kitchen dispensing'
    ],
    tiers: [
      { range: '1 - 24 Bottles', price: '$ 24', discount: 'Base Case Rate' },
      { range: '25 - 99 Bottles', price: '$ 18', discount: '25% Wholesale Volume' },
      { range: '100+ Bottles', price: '$ 14', discount: '42% Pallet Import Tier' }
    ],
    specs: [
      { label: 'Volume', value: '1000 ml (1 Liter) UV-Shield Bottle' },
      { label: 'Harvest Period', value: 'Early Season Green Harvest' },
      { label: 'Acidity', value: '< 0.2% Extra Virgin Standard' },
      { label: 'Certification', value: 'Protected Designation of Origin (PDO) & ISO 22000' }
    ]
  }
];
