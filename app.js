/**
 * MASTER KINGS PROPERTY - APPLICATION CONTROLLER
 * Location: Near New Town Bus Stand, Action Area 1, Kolkata - 700156
 * Official Phone / WhatsApp: +91 74396 75500
 * Coordinates: 22.588225, 88.451987
 * Official Google Maps Link: https://maps.app.goo.gl/4f8Qm9wLCQFCabFWA
 */

// =============================================================================
// 1. ARCHITECTURAL FLOOR PLAN SVG BLUEPRINTS
// =============================================================================
const FLOOR_PLANS = {
  "3bhk-standard": `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 550" width="100%" height="100%" style="background:%230b1a30;font-family:sans-serif;">
    <rect width="100%" height="100%" fill="%230b1a30"/>
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="%231e3a5f" stroke-width="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(%23grid)" opacity="0.6"/>
    <!-- Outer Walls -->
    <rect x="50" y="40" width="700" height="460" fill="none" stroke="%23cca03c" stroke-width="4"/>
    
    <!-- Living & Dining -->
    <rect x="250" y="40" width="320" height="300" fill="%23132742" stroke="%2394a3b8" stroke-width="2"/>
    <text x="410" y="180" fill="%23ffffff" font-size="16" font-weight="bold" text-anchor="middle">LIVING &amp; DINING</text>
    <text x="410" y="205" fill="%23cca03c" font-size="14" text-anchor="middle">24&apos;-0&quot; x 14&apos;-6&quot;</text>
    
    <!-- Master Bedroom 1 -->
    <rect x="50" y="40" width="200" height="260" fill="%230f2038" stroke="%2394a3b8" stroke-width="2"/>
    <text x="150" y="160" fill="%23ffffff" font-size="15" font-weight="bold" text-anchor="middle">MASTER BEDROOM</text>
    <text x="150" y="185" fill="%23cca03c" font-size="13" text-anchor="middle">14&apos;-0&quot; x 12&apos;-0&quot;</text>
    <!-- Master Bath -->
    <rect x="50" y="300" width="120" height="100" fill="%230c182a" stroke="%2394a3b8" stroke-width="1.5"/>
    <text x="110" y="355" fill="%2394a3b8" font-size="11" text-anchor="middle">TOILET 8&apos;x5&apos;</text>

    <!-- Bedroom 2 -->
    <rect x="570" y="40" width="180" height="240" fill="%230f2038" stroke="%2394a3b8" stroke-width="2"/>
    <text x="660" y="150" fill="%23ffffff" font-size="15" font-weight="bold" text-anchor="middle">BEDROOM 2</text>
    <text x="660" y="175" fill="%23cca03c" font-size="13" text-anchor="middle">12&apos;-6&quot; x 11&apos;-0&quot;</text>

    <!-- Bedroom 3 -->
    <rect x="570" y="280" width="180" height="220" fill="%230f2038" stroke="%2394a3b8" stroke-width="2"/>
    <text x="660" y="380" fill="%23ffffff" font-size="15" font-weight="bold" text-anchor="middle">BEDROOM 3</text>
    <text x="660" y="405" fill="%23cca03c" font-size="13" text-anchor="middle">11&apos;-6&quot; x 11&apos;-0&quot;</text>

    <!-- Kitchen & Utility -->
    <rect x="170" y="340" width="160" height="160" fill="%23132742" stroke="%2394a3b8" stroke-width="2"/>
    <text x="250" y="420" fill="%23ffffff" font-size="14" font-weight="bold" text-anchor="middle">KITCHEN</text>
    <text x="250" y="445" fill="%23cca03c" font-size="12" text-anchor="middle">10&apos;-6&quot; x 8&apos;-0&quot;</text>

    <!-- Common Toilet -->
    <rect x="50" y="400" width="120" height="100" fill="%230c182a" stroke="%2394a3b8" stroke-width="1.5"/>
    <text x="110" y="455" fill="%2394a3b8" font-size="11" text-anchor="middle">TOILET 7&apos;x5&apos;</text>

    <!-- Balcony 1 -->
    <rect x="330" y="440" width="160" height="60" fill="%231a365d" stroke="%2338bdf8" stroke-dasharray="4" stroke-width="2"/>
    <text x="410" y="475" fill="%2338bdf8" font-size="12" font-weight="bold" text-anchor="middle">BALCONY 12&apos;x4&apos;</text>

    <!-- Balcony 2 -->
    <rect x="490" y="440" width="80" height="60" fill="%231a365d" stroke="%2338bdf8" stroke-dasharray="4" stroke-width="2"/>
    <text x="530" y="475" fill="%2338bdf8" font-size="11" text-anchor="middle">UTILITY</text>

    <!-- Title Badge -->
    <rect x="60" y="55" width="220" height="35" rx="4" fill="%23050b14" stroke="%23cca03c" stroke-width="1"/>
    <text x="170" y="78" fill="%23ffffff" font-size="13" font-weight="bold" text-anchor="middle">3 BHK ARCHITECTURAL PLAN</text>
  </svg>`,

  "2bhk-smart": `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" width="100%" height="100%" style="background:%230b1a30;font-family:sans-serif;">
    <rect width="100%" height="100%" fill="%230b1a30"/>
    <defs>
      <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="%231e3a5f" stroke-width="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(%23grid2)" opacity="0.6"/>
    <!-- Outer boundary -->
    <rect x="60" y="40" width="680" height="440" fill="none" stroke="%23cca03c" stroke-width="4"/>
    
    <!-- Living & Dining -->
    <rect x="250" y="40" width="310" height="270" fill="%23132742" stroke="%2394a3b8" stroke-width="2"/>
    <text x="405" y="165" fill="%23ffffff" font-size="16" font-weight="bold" text-anchor="middle">LIVING &amp; DINING</text>
    <text x="405" y="195" fill="%23cca03c" font-size="14" text-anchor="middle">19&apos;-6&quot; x 12&apos;-0&quot;</text>

    <!-- Master Bedroom -->
    <rect x="60" y="40" width="190" height="250" fill="%230f2038" stroke="%2394a3b8" stroke-width="2"/>
    <text x="155" y="155" fill="%23ffffff" font-size="15" font-weight="bold" text-anchor="middle">MASTER BEDROOM</text>
    <text x="155" y="180" fill="%23cca03c" font-size="13" text-anchor="middle">13&apos;-0&quot; x 11&apos;-0&quot;</text>
    <!-- Attached Toilet -->
    <rect x="60" y="290" width="110" height="90" fill="%230c182a" stroke="%2394a3b8" stroke-width="1.5"/>
    <text x="115" y="340" fill="%2394a3b8" font-size="11" text-anchor="middle">TOILET 7&apos;x5&apos;</text>

    <!-- Bedroom 2 -->
    <rect x="560" y="40" width="180" height="250" fill="%230f2038" stroke="%2394a3b8" stroke-width="2"/>
    <text x="650" y="155" fill="%23ffffff" font-size="15" font-weight="bold" text-anchor="middle">BEDROOM 2</text>
    <text x="650" y="180" fill="%23cca03c" font-size="13" text-anchor="middle">11&apos;-6&quot; x 10&apos;-6&quot;</text>

    <!-- Kitchen -->
    <rect x="170" y="310" width="170" height="170" fill="%23132742" stroke="%2394a3b8" stroke-width="2"/>
    <text x="255" y="395" fill="%23ffffff" font-size="14" font-weight="bold" text-anchor="middle">KITCHEN</text>
    <text x="255" y="420" fill="%23cca03c" font-size="12" text-anchor="middle">9&apos;-6&quot; x 7&apos;-6&quot;</text>

    <!-- Common Toilet -->
    <rect x="60" y="380" width="110" height="100" fill="%230c182a" stroke="%2394a3b8" stroke-width="1.5"/>
    <text x="115" y="435" fill="%2394a3b8" font-size="11" text-anchor="middle">COMMON 7&apos;x5&apos;</text>

    <!-- Balcony -->
    <rect x="340" y="400" width="220" height="80" fill="%231a365d" stroke="%2338bdf8" stroke-dasharray="4" stroke-width="2"/>
    <text x="450" y="445" fill="%2338bdf8" font-size="13" font-weight="bold" text-anchor="middle">BALCONY 11&apos;x4&apos;-6&quot;</text>

    <!-- Title Badge -->
    <rect x="70" y="55" width="210" height="35" rx="4" fill="%23050b14" stroke="%23cca03c" stroke-width="1"/>
    <text x="175" y="78" fill="%23ffffff" font-size="13" font-weight="bold" text-anchor="middle">2 BHK SMART FLOOR PLAN</text>
  </svg>`,

  "penthouse-duplex": `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 550" width="100%" height="100%" style="background:%230b1a30;font-family:sans-serif;">
    <rect width="100%" height="100%" fill="%230b1a30"/>
    <rect x="40" y="30" width="720" height="490" fill="none" stroke="%23cca03c" stroke-width="4"/>
    
    <!-- Grand Living -->
    <rect x="40" y="30" width="460" height="320" fill="%23132742" stroke="%2394a3b8" stroke-width="2"/>
    <text x="270" y="170" fill="%23ffffff" font-size="18" font-weight="bold" text-anchor="middle">DOUBLE-HEIGHT GRAND LIVING</text>
    <text x="270" y="200" fill="%23cca03c" font-size="15" text-anchor="middle">28&apos;-0&quot; x 18&apos;-0&quot;</text>

    <!-- Open Sky Terrace Deck -->
    <rect x="500" y="30" width="260" height="280" fill="%231a365d" stroke="%2338bdf8" stroke-dasharray="4" stroke-width="2"/>
    <text x="630" y="150" fill="%2338bdf8" font-size="16" font-weight="bold" text-anchor="middle">PRIVATE SKY TERRACE</text>
    <text x="630" y="175" fill="%23cca03c" font-size="13" text-anchor="middle">450 SQ.FT OPEN DECK</text>
    <text x="630" y="200" fill="%2394a3b8" font-size="12" text-anchor="middle">(270° Panoramic View)</text>

    <!-- Master Suite Lower -->
    <rect x="40" y="350" width="260" height="170" fill="%230f2038" stroke="%2394a3b8" stroke-width="2"/>
    <text x="170" y="430" fill="%23ffffff" font-size="14" font-weight="bold" text-anchor="middle">MASTER SUITE 1</text>
    <text x="170" y="455" fill="%23cca03c" font-size="12" text-anchor="middle">16&apos;-0&quot; x 13&apos;-6&quot;</text>

    <!-- Kitchen & Dining -->
    <rect x="300" y="350" width="200" height="170" fill="%23132742" stroke="%2394a3b8" stroke-width="2"/>
    <text x="400" y="430" fill="%23ffffff" font-size="14" font-weight="bold" text-anchor="middle">ISLAND KITCHEN</text>
    <text x="400" y="455" fill="%23cca03c" font-size="12" text-anchor="middle">14&apos;-0&quot; x 10&apos;-0&quot;</text>

    <!-- Upper Duplex Stairs -->
    <rect x="500" y="310" width="260" height="210" fill="%230c182a" stroke="%23cca03c" stroke-width="1.5"/>
    <text x="630" y="405" fill="%23cca03c" font-size="14" font-weight="bold" text-anchor="middle">UPPER DUPLEX LEVEL</text>
    <text x="630" y="430" fill="%23ffffff" font-size="12" text-anchor="middle">3 En-Suite Bedrooms + Lounge</text>

    <!-- Title Badge -->
    <rect x="50" y="45" width="240" height="35" rx="4" fill="%23050b14" stroke="%23cca03c" stroke-width="1"/>
    <text x="170" y="68" fill="%23ffffff" font-size="13" font-weight="bold" text-anchor="middle">DUPLEX PENTHOUSE LAYOUT</text>
  </svg>`,

  "commercial-office": `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" width="100%" height="100%" style="background:%230b1a30;font-family:sans-serif;">
    <rect width="100%" height="100%" fill="%230b1a30"/>
    <rect x="50" y="40" width="700" height="440" fill="none" stroke="%23cca03c" stroke-width="4"/>
    
    <!-- Open Workstation Bay -->
    <rect x="230" y="40" width="350" height="320" fill="%23132742" stroke="%2394a3b8" stroke-width="2"/>
    <text x="405" y="180" fill="%23ffffff" font-size="16" font-weight="bold" text-anchor="middle">OPEN WORKSTATION BAY</text>
    <text x="405" y="205" fill="%23cca03c" font-size="14" text-anchor="middle">45 Linear Workstations</text>
    <text x="405" y="230" fill="%2394a3b8" font-size="12" text-anchor="middle">Precision AC &amp; Dual Cat-6 Cabling</text>

    <!-- Boardroom -->
    <rect x="50" y="40" width="180" height="240" fill="%230f2038" stroke="%2394a3b8" stroke-width="2"/>
    <text x="140" y="150" fill="%23ffffff" font-size="14" font-weight="bold" text-anchor="middle">10-SEATER</text>
    <text x="140" y="172" fill="%23ffffff" font-size="14" font-weight="bold" text-anchor="middle">BOARDROOM</text>
    <text x="140" y="195" fill="%23cca03c" font-size="12" text-anchor="middle">16&apos; x 12&apos;</text>

    <!-- Cabins -->
    <rect x="580" y="40" width="170" height="160" fill="%230f2038" stroke="%2394a3b8" stroke-width="2"/>
    <text x="665" y="115" fill="%23ffffff" font-size="13" font-weight="bold" text-anchor="middle">DIRECTOR CABIN 1</text>
    <text x="665" y="138" fill="%23cca03c" font-size="12" text-anchor="middle">14&apos; x 11&apos;</text>

    <rect x="580" y="200" width="170" height="160" fill="%230f2038" stroke="%2394a3b8" stroke-width="2"/>
    <text x="665" y="275" fill="%23ffffff" font-size="13" font-weight="bold" text-anchor="middle">DIRECTOR CABIN 2</text>
    <text x="665" y="298" fill="%23cca03c" font-size="12" text-anchor="middle">14&apos; x 11&apos;</text>

    <!-- Reception -->
    <rect x="50" y="280" width="180" height="200" fill="%23132742" stroke="%2394a3b8" stroke-width="2"/>
    <text x="140" y="375" fill="%23ffffff" font-size="14" font-weight="bold" text-anchor="middle">RECEPTION</text>
    <text x="140" y="398" fill="%23cca03c" font-size="12" text-anchor="middle">&amp; VISITOR LOUNGE</text>

    <!-- Pantry & Server Room -->
    <rect x="230" y="360" width="180" height="120" fill="%230c182a" stroke="%2394a3b8" stroke-width="1.5"/>
    <text x="320" y="420" fill="%2394a3b8" font-size="12" text-anchor="middle">SERVER / IT ROOM</text>

    <rect x="410" y="360" width="170" height="120" fill="%230c182a" stroke="%2394a3b8" stroke-width="1.5"/>
    <text x="495" y="420" fill="%2394a3b8" font-size="12" text-anchor="middle">PANTRY &amp; DINING</text>

    <!-- Washrooms -->
    <rect x="580" y="360" width="170" height="120" fill="%230c182a" stroke="%2394a3b8" stroke-width="1.5"/>
    <text x="665" y="420" fill="%2394a3b8" font-size="12" text-anchor="middle">EXECUTIVE TOILETS</text>

    <!-- Title Badge -->
    <rect x="60" y="55" width="220" height="35" rx="4" fill="%23050b14" stroke="%23cca03c" stroke-width="1"/>
    <text x="170" y="78" fill="%23ffffff" font-size="12" font-weight="bold" text-anchor="middle">GRADE-A OFFICE LAYOUT</text>
  </svg>`
};

// =============================================================================
// 2. PROPERTY DATASET (VERIFIED LOCAL LISTINGS WITH RICH PHOTO GALLERIES)
// =============================================================================
const PROPERTY_DATABASE = [
  {
    id: "mkp-01",
    title: "Grand Vista Heights - Premium 3 BHK",
    tagline: "South-Facing Sunlit Apartment with 2 Wide Balconies",
    purpose: "sale",
    category: "3bhk",
    locationZone: "aa1",
    location: "Action Area 1, New Town (5 mins from Bus Stand)",
    landmark: "Near New Town Bus Stand & Clock Tower",
    price: 7850000,
    priceFormatted: "₹ 78.50 Lakhs",
    pricePerSqft: "₹ 5,304 / sq.ft",
    area: 1480,
    areaFormatted: "1,480 sq.ft (Super Built-up)",
    carpetArea: "1,140 sq.ft",
    beds: 3,
    baths: 3,
    balconies: 2,
    parking: "1 Covered Reserved Stilt",
    floor: "4th of 8 Floors (Schindler Elevator)",
    facing: "South-East (Vaastu Compliant)",
    status: "Ready to Move",
    ownership: "Freehold Individual Title (100% Verified)",
    floorPlanKey: "3bhk-standard",
    images: [
      { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", label: "Front Building Facade" },
      { url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80", label: "Spacious Living & Dining Hall" },
      { url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80", label: "Modular Granite Kitchen" },
      { url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80", label: "Sunlit Master Bedroom" },
      { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80", label: "Wide Open Balcony View" }
    ],
    description: "Exceptional 3 BHK residential apartment situated in the heart of Action Area 1, just a 5-minute walk from New Town Bus Stand. Features large airy living spaces, modular granite kitchen, premium vitrified tiles, 24/7 security guard, automated Schindler elevator, and dedicated covered car parking.",
    amenities: [
      "24/7 Gated Security & CCTV",
      "Automatic High-Speed Lift",
      "100% DG Power Backup",
      "Dedicated Covered Parking",
      "Intercom Facility",
      "Filtered 24hr Water Supply",
      "Community Hall",
      "Fire Safety Systems"
    ],
    bankApproval: "SBI, HDFC, ICICI & Bank of Baroda Pre-Approved"
  },
  {
    id: "mkp-02",
    title: "Sunrise Greens - Smart 2 BHK Apartment",
    tagline: "Ideal for Young Families & Tech Professionals",
    purpose: "sale",
    category: "2bhk",
    locationZone: "aa1",
    location: "CE Block, Action Area 1, New Town, Kolkata",
    landmark: "Walking distance to CE Market & Axis Mall",
    price: 4800000,
    priceFormatted: "₹ 48.00 Lakhs",
    pricePerSqft: "₹ 5,000 / sq.ft",
    area: 960,
    areaFormatted: "960 sq.ft (Built-up)",
    carpetArea: "765 sq.ft",
    beds: 2,
    baths: 2,
    balconies: 1,
    parking: "1 Reserved Space",
    floor: "2nd of 4 Floors (Standalone G+4)",
    facing: "North-East (Morning Sunshine)",
    status: "Ready to Move",
    ownership: "Freehold Individual Registry",
    floorPlanKey: "2bhk-smart",
    images: [
      { url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80", label: "Building Exterior" },
      { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80", label: "Comfortable Living Room" },
      { url: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80", label: "Kitchen with Exhaust Setup" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", label: "Master Bedroom" }
    ],
    description: "Well-crafted 2 BHK flat in a quiet residential CE block lane in Action Area 1. Zero wasted corridor space, excellent natural ventilation, proximity to New Town Bus Stand and upcoming metro corridor. Very low society maintenance charges.",
    amenities: [
      "Lift with Battery Backup",
      "Reserved Stilt Parking",
      "24/7 Security Attendant",
      "Rooftop Terrace Access",
      "Submersible Water Supply",
      "Low Monthly Maintenance"
    ],
    bankApproval: "Home Loan Available with all major nationalized banks"
  },
  {
    id: "mkp-03",
    title: "The Cosmopolitan - Fully Furnished 2 BHK",
    tagline: "Plug-and-Play Living Close to Salt Lake Sector V IT Hub",
    purpose: "rent",
    category: "2bhk",
    locationZone: "aa1",
    location: "Action Area 1 (Mahisbathan Connector)",
    landmark: "Quick 7 mins drive to Sector V IT Offices",
    price: 24000,
    priceFormatted: "₹ 24,000 / month",
    pricePerSqft: "Maintenance Included",
    area: 1050,
    areaFormatted: "1,050 sq.ft",
    carpetArea: "820 sq.ft",
    beds: 2,
    baths: 2,
    balconies: 1,
    parking: "1 Covered Space",
    floor: "6th of 12 Floors",
    facing: "East-Facing",
    status: "Immediately Available",
    ownership: "Corporate / Family Lease Agreement",
    floorPlanKey: "2bhk-smart",
    images: [
      { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80", label: "Living Room with Split AC" },
      { url: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80", label: "Equipped Kitchen + Refrigerator" },
      { url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80", label: "Queen Bedroom with Wardrobes" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", label: "Modern Geyser Bathroom" }
    ],
    description: "Fully furnished modern 2 BHK apartment curated for IT professionals, corporate employees, and small families. Equipped with 2 Split ACs, Queen sized beds with orthopedic mattresses, modular kitchen with chimney & refrigerator, 43-inch LED Smart TV, and fiber optic broadband connectivity.",
    amenities: [
      "Fully Furnished Interiors",
      "Split Air Conditioning",
      "Modular Kitchen + Appliances",
      "High-Speed Elevators",
      "Clubhouse & Gym Access",
      "Round-the-clock Security"
    ],
    bankApproval: "Registered 11-Month Renewable Lease Agreement"
  },
  {
    id: "mkp-04",
    title: "Skyline Elegance - 4 BHK Duplex Penthouse",
    tagline: "Private Sky Garden with 270° Panoramic City Views",
    purpose: "sale",
    category: "luxury",
    locationZone: "aa2",
    location: "Action Area 2, Near Eco Park, New Town",
    landmark: "Overlooking Eco Park Waterbodies & City Skyline",
    price: 16500000,
    priceFormatted: "₹ 1.65 Crore",
    pricePerSqft: "₹ 6,226 / sq.ft",
    area: 2650,
    areaFormatted: "2,650 sq.ft (Duplex)",
    carpetArea: "2,100 sq.ft + 450 sq.ft Terrace",
    beds: 4,
    baths: 4,
    balconies: 3,
    parking: "2 Covered Dedicated Parkings",
    floor: "Top 14th & 15th Floors",
    facing: "South & West (Open Horizons)",
    status: "Ready to Move",
    ownership: "Freehold Luxury Title",
    floorPlanKey: "penthouse-duplex",
    images: [
      { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80", label: "Double-Height Grand Hall" },
      { url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80", label: "Open Sky Deck & Lounge" },
      { url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80", label: "Master Suite with Balcony" },
      { url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80", label: "Gourmet Island Kitchen" }
    ],
    description: "The pinnacle of urban elegance in New Town. Custom-designed duplex penthouse offering expansive double-height living room, Italian marble flooring, private jacuzzi-ready open sky terrace, separate servant quarters, and access to five-star club amenities.",
    amenities: [
      "Private Landscaped Sky Terrace",
      "Italian Marble Flooring",
      "Infinity Swimming Pool & Spa",
      "Luxury Clubhouse & Squash Court",
      "Dual Covered Basement Parking",
      "Smart Home Automation Pre-Wired",
      "3-Tier Biometric Security"
    ],
    bankApproval: "Pre-approved by SBI Wealth & HDFC Premier"
  },
  {
    id: "mkp-05",
    title: "Greenfield Parkview - Spacious 3 BHK Flat",
    tagline: "Serene Gated Community with Lush Garden Views",
    purpose: "rent",
    category: "3bhk",
    locationZone: "aa2",
    location: "Action Area 2, New Town / Rajarhat Belt",
    landmark: "Near City Centre 2 & Chinar Park Junction",
    price: 28500,
    priceFormatted: "₹ 28,500 / month",
    pricePerSqft: "Competitive Rental Yield",
    area: 1320,
    areaFormatted: "1,320 sq.ft",
    carpetArea: "1,040 sq.ft",
    beds: 3,
    baths: 2,
    balconies: 2,
    parking: "1 Covered Space Included",
    floor: "5th of 10 Floors",
    facing: "South-Facing Park View",
    status: "Immediately Available",
    ownership: "Individual Owner Agreement",
    floorPlanKey: "3bhk-standard",
    images: [
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", label: "Gated Society Courtyard" },
      { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80", label: "Bright Living Space" },
      { url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80", label: "Master Bed overlooking Lawn" },
      { url: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80", label: "Fitted Modular Kitchen" }
    ],
    description: "Semi-furnished family apartment in an established gated society. Features modular kitchen cabinets, geysers in both bathrooms, wide balcony overlooking central green lawn, children play park, gym, and 24/7 security surveillance.",
    amenities: [
      "Gated Complex with Security",
      "Swimming Pool & Gymnasium",
      "Children's Play Park",
      "Covered Stilt Parking",
      "Power Backup & Lift",
      "Convenience Grocery Store Inside"
    ],
    bankApproval: "Standard 11-Month Renewable Lease"
  },
  {
    id: "mkp-06",
    title: "Millennium Tech Tower - Grade-A Office Space",
    tagline: "Fully Furnished IT / Corporate Office with 45 Workstations",
    purpose: "commercial",
    category: "commercial",
    locationZone: "sector5",
    location: "Salt Lake Sector V / New Town Border, Kolkata",
    landmark: "2 mins from Sector V Metro Station",
    price: 110000,
    priceFormatted: "₹ 1,10,000 / month",
    pricePerSqft: "₹ 50 / sq.ft lease rate",
    area: 2200,
    areaFormatted: "2,200 sq.ft Carpet Area",
    carpetArea: "2,200 sq.ft",
    beds: 0,
    baths: 2,
    balconies: 0,
    parking: "2 Reserved Covered Car Parks",
    floor: "7th of 18 Floors",
    facing: "North-West Commercial Glazing",
    status: "Ready for Possession",
    ownership: "Commercial Grade-A IT Park",
    floorPlanKey: "commercial-office",
    images: [
      { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", label: "Open Workstation Floor" },
      { url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80", label: "10-Seater Video Boardroom" },
      { url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80", label: "Executive Director Cabin" },
      { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80", label: "Commercial Glass Facade" }
    ],
    description: "Modern plug-and-play corporate workplace ready for immediate IT/ITES or consulting operations. Features reception desk, 45 linear modular workstations, 2 director cabins, 10-seater video-conference boardroom, server room with precision AC, and pantry area.",
    amenities: [
      "45 Plug-and-Play Workstations",
      "10-Seater Boardroom + Conference AV",
      "100% Dual DG Power Backup",
      "Central HVAC Air Conditioning",
      "4 High-Speed Passenger Elevators",
      "Multi-Tier Security & Biometric Access",
      "Cafeteria in Building"
    ],
    bankApproval: "Clear Commercial Sanction & Fire NOC"
  },
  {
    id: "mkp-07",
    title: "Royal Heritage - Independent 3 BHK Floor",
    tagline: "Low Density Living in CE Block Standalone Building",
    purpose: "sale",
    category: "3bhk",
    locationZone: "aa1",
    location: "CE Block, Action Area 1, New Town",
    landmark: "Direct access to Main Arterial Road & Bus Stand",
    price: 6800000,
    priceFormatted: "₹ 68.00 Lakhs",
    pricePerSqft: "₹ 5,037 / sq.ft",
    area: 1350,
    areaFormatted: "1,350 sq.ft",
    carpetArea: "1,080 sq.ft",
    beds: 3,
    baths: 3,
    balconies: 2,
    parking: "1 Ground Floor Covered Garage",
    floor: "3rd of 4 Floors",
    facing: "South-Facing Open Front",
    status: "Ready to Move",
    ownership: "Single Owner Clear Title (Freehold)",
    floorPlanKey: "3bhk-standard",
    images: [
      { url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80", label: "Standalone Building Frontage" },
      { url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80", label: "Independent Living Hall" },
      { url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80", label: "Parallel Kitchen Layout" },
      { url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80", label: "Master Bedroom with Attached Bath" }
    ],
    description: "A rare opportunity to acquire an independent full-floor flat in CE Block, Action Area 1. Offers total privacy with only one apartment per floor, 3 attached bathrooms, spacious south-facing drawing-dining hall, lift, and dedicated garage space.",
    amenities: [
      "One Flat Per Floor Privacy",
      "Dedicated Covered Garage",
      "Automatic Elevator",
      "Individual Electricity & Water Meter",
      "Walking Distance to Bus Stand",
      "Zero Dispute Clear Title"
    ],
    bankApproval: "SBI, PNB & Axis Bank Approved"
  },
  {
    id: "mkp-08",
    title: "Prime Commercial Retail Showroom",
    tagline: "High-Visibility Main Road Frontage Near Bus Stand",
    purpose: "commercial",
    category: "commercial",
    locationZone: "aa1",
    location: "Main Arterial Road, Action Area 1, New Town",
    landmark: "Adjacent to New Town Bus Stand & Traffic Hub",
    price: 22000000,
    priceFormatted: "₹ 2.20 Crore",
    pricePerSqft: "₹ 12,222 / sq.ft",
    area: 1800,
    areaFormatted: "1,800 sq.ft Ground Floor",
    carpetArea: "1,550 sq.ft",
    beds: 0,
    baths: 2,
    balconies: 0,
    parking: "Front Customer Parking",
    floor: "Ground Floor",
    facing: "Main Arterial Road (35 ft Glass Frontage)",
    status: "Ready for Fit-out",
    ownership: "Commercial Freehold Title",
    floorPlanKey: "commercial-office",
    images: [
      { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80", label: "Street Frontage View" },
      { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", label: "Expansive Showroom Floor" },
      { url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80", label: "Back Office Setup" }
    ],
    description: "Unrivaled high-street commercial showroom space with 35-foot wide road frontage right near the New Town Bus Stand. High pedestrian and vehicle footfall. Excellent choice for bank branch, brand retail, diagnostic clinic, or restaurant franchise.",
    amenities: [
      "35 Feet Clear Road Frontage",
      "Double-Height Ceiling (Option for Mezzanine)",
      "High Power Load Sanctioned",
      "Dedicated Ample Customer Parking",
      "100% Clear Commercial Mutation",
      "High Expected Rental Yield of 7.5%+"
    ],
    bankApproval: "Commercial Loan Sanctioned by Major Banks"
  }
];

// Active card photo indexes: { [propertyId]: currentIndex }
const cardPhotoState = {};

// =============================================================================
// 3. INITIALIZATION
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProperties(PROPERTY_DATABASE);
  initSearchEngine();
  initFilterChips();
  initEmiCalculator();
  initSellerForm();
  initVisitModal();
  initLightbox();
  initMobileMenu();
  initScrollHeader();
});

// =============================================================================
// 4. PROPERTY RENDERING (VISUAL FIRST WITH IN-CARD PHOTO FLIPPER)
// =============================================================================
function renderProperties(properties) {
  const grid = document.getElementById("propertiesGrid");
  const counter = document.getElementById("resultsCounter");
  if (!grid) return;

  if (counter) {
    counter.textContent = `Showing ${properties.length} Verified Properties`;
  }

  if (properties.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #ffffff; border-radius: 12px; border: 1px dashed #cbd5e1;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5" style="margin: 0 auto 16px;">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">No Matching Properties Found</h3>
        <p style="color: #64748b; font-size: 0.9375rem; max-width: 480px; margin: 0 auto 20px;">
          We couldn't find listings matching your exact search filters. Reset your filters or contact Master Kings Property directly for private listings.
        </p>
        <button class="btn btn-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = properties.map(p => {
    // Current image index for this card
    const currentIdx = cardPhotoState[p.id] || 0;
    const currentImg = p.images[currentIdx] || p.images[0];
    const totalImgs = p.images.length;

    return `
      <article class="property-card" data-id="${p.id}">
        <!-- Image Container with Carousel Controls -->
        <div class="card-media-wrapper" id="mediaWrap_${p.id}">
          <img class="card-img" id="cardImg_${p.id}" src="${currentImg.url}" alt="${p.title} - ${currentImg.label}" loading="lazy">
          
          <!-- Image Flipper Controls -->
          <div class="card-carousel-controls">
            <button class="card-arrow-btn prev" onclick="flipCardPhoto('${p.id}', -1, event)" aria-label="Previous photo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <span class="card-photo-counter" id="photoCounter_${p.id}">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
              ${currentIdx + 1}/${totalImgs}
            </span>
            <button class="card-arrow-btn next" onclick="flipCardPhoto('${p.id}', 1, event)" aria-label="Next photo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

          <!-- Badges -->
          <div class="card-badges">
            <span class="badge-tag ${p.purpose}">${p.purpose === 'sale' ? 'For Sale' : (p.purpose === 'rent' ? 'For Rent' : 'Commercial')}</span>
            <span class="badge-tag status">${p.status}</span>
          </div>
          
          <div class="card-verified-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Title Verified
          </div>
        </div>

        <div class="card-body">
          <div class="card-price-row">
            <div class="card-price">${p.priceFormatted}</div>
            <div class="card-price-rate">${p.pricePerSqft}</div>
          </div>

          <h3 class="card-title">${p.title}</h3>
          
          <div class="card-location">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${p.location}</span>
          </div>

          <!-- Visual Specs Grid -->
          <div class="card-specs-grid">
            <div class="spec-item" title="Configuration">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 7v11m0-4h18m0-7v11M7 11h10M7 7a2 2 0 012-2h6a2 2 0 012 2v4H7V7z"></path>
              </svg>
              <span>${p.beds > 0 ? p.beds + ' BHK' : 'Office'}</span>
            </div>

            <div class="spec-item" title="Bathrooms">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7M2 12h20M7 12V5a2 2 0 012-2h6a2 2 0 012 2v7"></path>
              </svg>
              <span>${p.baths} Baths</span>
            </div>

            <div class="spec-item" title="Super Built-up Area">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              <span>${p.area} sq.ft</span>
            </div>

            <div class="spec-item" title="Car Parking">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
              <span>${p.parking.includes('Covered') ? 'Covered' : 'Parking'}</span>
            </div>
          </div>

          <div class="card-footer">
            <button class="btn btn-outline" onclick="openPropertyModal('${p.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <span>Photos &amp; Plan</span>
            </button>
            <a class="btn btn-whatsapp" href="${generateWhatsAppLink(p)}" target="_blank" rel="noopener noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 16.48c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.134 8.134 0 01-1.25-4.32c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.78 2.39 1.54 1.55 2.39 3.6 2.39 5.79 0 4.51-3.67 8.16-8.16 8.16z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// =============================================================================
// 5. IN-CARD PHOTO FLIPPER
// =============================================================================
window.flipCardPhoto = function(propertyId, delta, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }

  const property = PROPERTY_DATABASE.find(p => p.id === propertyId);
  if (!property || !property.images || property.images.length === 0) return;

  let current = cardPhotoState[propertyId] || 0;
  current = (current + delta + property.images.length) % property.images.length;
  cardPhotoState[propertyId] = current;

  const imgEl = document.getElementById(`cardImg_${propertyId}`);
  const counterEl = document.getElementById(`photoCounter_${propertyId}`);

  if (imgEl) {
    imgEl.src = property.images[current].url;
    imgEl.alt = `${property.title} - ${property.images[current].label}`;
  }

  if (counterEl) {
    counterEl.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
      ${current + 1}/${property.images.length}
    `;
  }
};

// =============================================================================
// 6. SEARCH & FILTER LOGIC
// =============================================================================
let currentPurpose = "all";
let currentChip = "all";

function initSearchEngine() {
  const searchTabs = document.querySelectorAll(".search-tab-btn");
  const searchBtn = document.getElementById("searchSubmitBtn");
  const locationSelect = document.getElementById("searchLocation");
  const typeSelect = document.getElementById("searchType");
  const budgetSelect = document.getElementById("searchBudget");

  searchTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      searchTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentPurpose = tab.getAttribute("data-purpose");
      applyFilters();
    });
  });

  if (searchBtn) {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      applyFilters();
      const el = document.getElementById("featuredProperties");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  }

  [locationSelect, typeSelect, budgetSelect].forEach(sel => {
    if (sel) sel.addEventListener("change", applyFilters);
  });
}

function initFilterChips() {
  const chipButtons = document.querySelectorAll(".chip-btn");
  chipButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      chipButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentChip = btn.getAttribute("data-filter");
      applyFilters();
    });
  });
}

function applyFilters() {
  const locationVal = document.getElementById("searchLocation")?.value || "all";
  const typeVal = document.getElementById("searchType")?.value || "all";
  const budgetVal = document.getElementById("searchBudget")?.value || "all";

  let results = PROPERTY_DATABASE.filter(p => {
    // 1. Purpose filter
    if (currentPurpose !== "all") {
      if (currentPurpose === "sale" && p.purpose !== "sale") return false;
      if (currentPurpose === "rent" && p.purpose !== "rent") return false;
      if (currentPurpose === "commercial" && p.purpose !== "commercial") return false;
    }

    // 2. Chip quick filter
    if (currentChip !== "all") {
      if (currentChip === "sale" && p.purpose !== "sale") return false;
      if (currentChip === "rent" && p.purpose !== "rent") return false;
      if (currentChip === "2bhk" && p.category !== "2bhk") return false;
      if (currentChip === "3bhk" && p.category !== "3bhk") return false;
      if (currentChip === "luxury" && p.category !== "luxury") return false;
      if (currentChip === "commercial" && p.category !== "commercial") return false;
    }

    // 3. Location Select
    if (locationVal !== "all" && p.locationZone !== locationVal) {
      return false;
    }

    // 4. Type Select
    if (typeVal !== "all" && p.category !== typeVal) {
      return false;
    }

    // 5. Budget Range
    if (budgetVal !== "all") {
      if (budgetVal === "under-50l" && p.price > 5000000) return false;
      if (budgetVal === "50l-1cr" && (p.price < 5000000 || p.price > 10000000)) return false;
      if (budgetVal === "1cr-2cr" && (p.price < 10000000 || p.price > 20000000)) return false;
      if (budgetVal === "above-2cr" && p.price < 20000000) return false;
      if (budgetVal === "rent-budget" && (p.purpose !== "rent" || p.price > 35000)) return false;
    }

    return true;
  });

  renderProperties(results);
}

function resetFilters() {
  currentPurpose = "all";
  currentChip = "all";
  
  document.querySelectorAll(".search-tab-btn").forEach((t, i) => {
    t.classList.toggle("active", i === 0);
  });
  document.querySelectorAll(".chip-btn").forEach((b, i) => {
    b.classList.toggle("active", i === 0);
  });

  const loc = document.getElementById("searchLocation");
  const typ = document.getElementById("searchType");
  const bud = document.getElementById("searchBudget");
  if (loc) loc.value = "all";
  if (typ) typ.value = "all";
  if (bud) bud.value = "all";

  renderProperties(PROPERTY_DATABASE);
}

// =============================================================================
// 7. PROPERTY DETAILS MODAL (WITH PHOTO GALLERY & ARCHITECTURAL FLOOR PLAN)
// =============================================================================
let currentModalProperty = null;
let currentModalImgIndex = 0;
let modalActiveTab = "photos"; // "photos" or "floorplan"

function openPropertyModal(propertyId) {
  const property = PROPERTY_DATABASE.find(p => p.id === propertyId);
  if (!property) return;
  currentModalProperty = property;
  currentModalImgIndex = 0;
  modalActiveTab = "photos";

  const modal = document.getElementById("propertyDetailsModal");
  if (!modal) return;

  // Title, Pricing & Location
  document.getElementById("modalPropertyTitle").textContent = property.title;
  document.getElementById("modalPropertyPrice").textContent = property.priceFormatted;
  document.getElementById("modalPropertyRate").textContent = property.pricePerSqft;
  document.getElementById("modalPropertyLocation").textContent = property.location;
  document.getElementById("modalPropertyLandmark").textContent = property.landmark;
  document.getElementById("modalPropertyDesc").textContent = property.description;

  // Specs
  document.getElementById("modalSpecBeds").textContent = property.beds > 0 ? `${property.beds} Bedrooms` : "Office Setup";
  document.getElementById("modalSpecBaths").textContent = `${property.baths} Bathrooms`;
  document.getElementById("modalSpecArea").textContent = property.areaFormatted;
  document.getElementById("modalSpecCarpet").textContent = property.carpetArea;
  document.getElementById("modalSpecFacing").textContent = property.facing;
  document.getElementById("modalSpecFloor").textContent = property.floor;
  document.getElementById("modalSpecParking").textContent = property.parking;
  document.getElementById("modalSpecStatus").textContent = property.status;

  // Render Amenities
  const amenitiesList = document.getElementById("modalAmenitiesList");
  amenitiesList.innerHTML = property.amenities.map(a => `
    <div class="modal-amenity-item">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      <span>${a}</span>
    </div>
  `).join("");

  // Bank approval
  document.getElementById("modalBankApproval").textContent = property.bankApproval;

  // WhatsApp Button
  document.getElementById("modalWhatsAppBtn").href = generateWhatsAppLink(property);

  // Render Visual Media (Photos + Floor Plan)
  renderModalMediaView();

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function renderModalMediaView() {
  const p = currentModalProperty;
  if (!p) return;

  const photoViewEl = document.getElementById("modalPhotoView");
  const floorPlanViewEl = document.getElementById("modalFloorPlanView");
  const tabPhotosBtn = document.getElementById("tabBtnPhotos");
  const tabPlanBtn = document.getElementById("tabBtnPlan");

  if (modalActiveTab === "photos") {
    if (tabPhotosBtn) tabPhotosBtn.classList.add("active");
    if (tabPlanBtn) tabPlanBtn.classList.remove("active");
    if (photoViewEl) photoViewEl.style.display = "block";
    if (floorPlanViewEl) floorPlanViewEl.style.display = "none";

    const currentImg = p.images[currentModalImgIndex] || p.images[0];
    const mainImgEl = document.getElementById("modalMainImg");
    const imgCaptionEl = document.getElementById("modalImgCaption");
    const thumbsContainer = document.getElementById("modalThumbsRow");

    if (mainImgEl) {
      mainImgEl.src = currentImg.url;
      mainImgEl.alt = `${p.title} - ${currentImg.label}`;
    }
    if (imgCaptionEl) {
      imgCaptionEl.textContent = `${currentModalImgIndex + 1} of ${p.images.length}: ${currentImg.label}`;
    }

    if (thumbsContainer) {
      thumbsContainer.innerHTML = p.images.map((img, i) => `
        <button class="thumb-btn ${i === currentModalImgIndex ? 'active' : ''}" onclick="switchModalPhoto(${i})" aria-label="View ${img.label}">
          <img src="${img.url}" alt="${img.label}">
          <span>${img.label}</span>
        </button>
      `).join("");
    }
  } else {
    // Floor plan active
    if (tabPhotosBtn) tabPhotosBtn.classList.remove("active");
    if (tabPlanBtn) tabPlanBtn.classList.add("active");
    if (photoViewEl) photoViewEl.style.display = "none";
    if (floorPlanViewEl) floorPlanViewEl.style.display = "block";

    const planSvg = FLOOR_PLANS[p.floorPlanKey] || FLOOR_PLANS["3bhk-standard"];
    const planImgEl = document.getElementById("modalFloorPlanImg");
    if (planImgEl) {
      planImgEl.src = planSvg;
      planImgEl.alt = `${p.title} Architectural Floor Plan`;
    }
  }
}

window.setModalTab = function(tabName) {
  modalActiveTab = tabName;
  renderModalMediaView();
};

window.switchModalPhoto = function(index) {
  if (!currentModalProperty) return;
  currentModalImgIndex = index;
  renderModalMediaView();
};

window.flipModalPhoto = function(delta) {
  if (!currentModalProperty) return;
  const count = currentModalProperty.images.length;
  currentModalImgIndex = (currentModalImgIndex + delta + count) % count;
  renderModalMediaView();
};

function closePropertyModal() {
  const modal = document.getElementById("propertyDetailsModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function initVisitModal() {
  const closeBtn = document.getElementById("modalCloseBtn");
  const modal = document.getElementById("propertyDetailsModal");
  if (closeBtn) closeBtn.addEventListener("click", closePropertyModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closePropertyModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      closePropertyModal();
    }
  });
}

function generateWhatsAppLink(p) {
  const text = encodeURIComponent(
    `Hello Master Kings Property,\nI would like to inquire about "${p.title}" (Price: ${p.priceFormatted}) in ${p.location}.\nPlease share floor plans and schedule a physical site visit with your agent.`
  );
  return `https://wa.me/917439675500?text=${text}`;
}

// =============================================================================
// 8. FULLSCREEN LIGHTBOX FOR HIGH-RESOLUTION IMAGE ZOOM
// =============================================================================
function initLightbox() {
  const lightbox = document.getElementById("imageLightbox");
  const closeBtn = document.getElementById("lightboxCloseBtn");
  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
}

window.openCurrentModalInLightbox = function() {
  if (!currentModalProperty) return;
  const lightbox = document.getElementById("imageLightbox");
  const imgEl = document.getElementById("lightboxImg");
  const captionEl = document.getElementById("lightboxCaption");

  if (modalActiveTab === "photos") {
    const imgObj = currentModalProperty.images[currentModalImgIndex];
    if (imgEl && imgObj) {
      imgEl.src = imgObj.url;
      imgEl.alt = imgObj.label;
    }
    if (captionEl && imgObj) {
      captionEl.textContent = `${currentModalProperty.title} • ${imgObj.label}`;
    }
  } else {
    const planSvg = FLOOR_PLANS[currentModalProperty.floorPlanKey] || FLOOR_PLANS["3bhk-standard"];
    if (imgEl) {
      imgEl.src = planSvg;
      imgEl.alt = "Architectural Blueprint";
    }
    if (captionEl) {
      captionEl.textContent = `${currentModalProperty.title} • Architectural Blueprint Plan`;
    }
  }

  if (lightbox) {
    lightbox.classList.add("active");
  }
};

window.closeLightbox = function() {
  const lightbox = document.getElementById("imageLightbox");
  if (lightbox) {
    lightbox.classList.remove("active");
  }
};

// =============================================================================
// 9. EMI & MORTGAGE CALCULATOR
// =============================================================================
function initEmiCalculator() {
  const loanSlider = document.getElementById("loanAmountSlider");
  const rateSlider = document.getElementById("interestRateSlider");
  const tenureSlider = document.getElementById("tenureSlider");

  const loanDisplay = document.getElementById("loanAmountDisplay");
  const rateDisplay = document.getElementById("interestRateDisplay");
  const tenureDisplay = document.getElementById("tenureDisplay");

  const monthlyEmiDisplay = document.getElementById("monthlyEmiDisplay");
  const principalDisplay = document.getElementById("totalPrincipalDisplay");
  const interestDisplay = document.getElementById("totalInterestDisplay");
  const paymentDisplay = document.getElementById("totalPaymentDisplay");

  const barPrincipal = document.getElementById("barPrincipal");
  const barInterest = document.getElementById("barInterest");

  function calculateEmi() {
    const P = parseFloat(loanSlider.value);
    const annualRate = parseFloat(rateSlider.value);
    const tenureYears = parseFloat(tenureSlider.value);

    loanDisplay.textContent = formatIndianCurrency(P);
    rateDisplay.textContent = `${annualRate.toFixed(1)}% p.a.`;
    tenureDisplay.textContent = `${tenureYears} Years (${tenureYears * 12} Mos)`;

    const r = annualRate / 12 / 100;
    const n = tenureYears * 12;

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    monthlyEmiDisplay.textContent = `₹ ${Math.round(emi).toLocaleString("en-IN")}`;
    principalDisplay.textContent = `₹ ${Math.round(P).toLocaleString("en-IN")}`;
    interestDisplay.textContent = `₹ ${Math.round(totalInterest).toLocaleString("en-IN")}`;
    paymentDisplay.textContent = `₹ ${Math.round(totalPayment).toLocaleString("en-IN")}`;

    const principalPct = Math.round((P / totalPayment) * 100);
    const interestPct = 100 - principalPct;

    if (barPrincipal) barPrincipal.style.width = `${principalPct}%`;
    if (barInterest) barInterest.style.width = `${interestPct}%`;
  }

  [loanSlider, rateSlider, tenureSlider].forEach(slider => {
    if (slider) slider.addEventListener("input", calculateEmi);
  });

  calculateEmi();
}

function formatIndianCurrency(num) {
  if (num >= 10000000) {
    return `₹ ${(num / 10000000).toFixed(2)} Crore`;
  } else if (num >= 100000) {
    return `₹ ${(num / 100000).toFixed(2)} Lakhs`;
  }
  return `₹ ${num.toLocaleString("en-IN")}`;
}

// =============================================================================
// 10. SELLER & LANDLORD LISTING SUBMISSION
// =============================================================================
function initSellerForm() {
  const form = document.getElementById("sellerListingForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("sellerName")?.value || "";
    const phone = document.getElementById("sellerPhone")?.value || "";
    const propType = document.getElementById("sellerPropertyType")?.value || "";
    const location = document.getElementById("sellerLocation")?.value || "";
    const price = document.getElementById("sellerPrice")?.value || "";

    const message = `Hello Master Kings Property,\nI would like to list my property with your agency:\n- Owner Name: ${name}\n- Phone: ${phone}\n- Property Type: ${propType}\n- Location / Block: ${location}\n- Expected Price / Rent: ${price}\n\nPlease contact me for valuation and physical site inspection.`;

    const waUrl = `https://wa.me/917439675500?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");

    form.reset();
  });
}

// =============================================================================
// 11. MOBILE MENU & HEADER SCROLL
// =============================================================================
function initMobileMenu() {
  const toggle = document.getElementById("mobileMenuToggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }
}

function initScrollHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}
