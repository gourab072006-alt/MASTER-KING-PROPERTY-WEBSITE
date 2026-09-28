/**
 * MASTER KINGS PROPERTY - APPLICATION CONTROLLER
 * Location: Near New Town Bus Stand, Action Area 1, Kolkata
 * Official Phone: +91 74396 75500
 * Coordinates: 22.588225, 88.451987
 * Maps: https://maps.app.goo.gl/3m4oKjSoRqc14JiJ8
 */

// =============================================================================
// 1. PROPERTY DATASET (VERIFIED LOCAL NEW TOWN & KOLKATA LISTINGS)
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
    priceFormatted: "₹78.5 Lakhs",
    pricePerSqft: "₹5,304 / sq.ft",
    area: 1480,
    areaFormatted: "1,480 sq.ft (Super Built-up)",
    carpetArea: "1,140 sq.ft",
    beds: 3,
    baths: 3,
    balconies: 2,
    parking: "1 Covered Reserved",
    floor: "4th of 8 Floors",
    facing: "South-East (Vaastu Compliant)",
    status: "Ready to Move",
    ownership: "Freehold (Title Verified)",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Exceptional 3 BHK residential apartment situated in the heart of Action Area 1, just 5 minutes walk from New Town Bus Stand. Features large airy living spaces, modular granite kitchen, premium vitrified tiles, 24/7 security guard, automated Schindler elevator, and dedicated covered car parking.",
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
    bankApproval: "Approved by SBI, HDFC, ICICI, Bank of Baroda"
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
    priceFormatted: "₹48.0 Lakhs",
    pricePerSqft: "₹5,000 / sq.ft",
    area: 960,
    areaFormatted: "960 sq.ft (Built-up)",
    carpetArea: "765 sq.ft",
    beds: 2,
    baths: 2,
    balconies: 1,
    parking: "1 Reserved Space",
    floor: "2nd of 4 Floors (Standalone G+4)",
    facing: "North-East",
    status: "Ready to Move",
    ownership: "Freehold Individual Registry",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
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
    location: "Action Area 1 (Near Mahisbathan / Sector V connector)",
    landmark: "Quick 7 mins drive to Sector V IT Offices",
    price: 24000,
    priceFormatted: "₹24,000 / month",
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
    ownership: "Corporate / Family Lease",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Fully furnished modern 2 BHK apartment curated for IT professionals, expats, and small families. Equipped with 2 Split ACs, Queen sized beds with orthopedic mattresses, modular kitchen with chimney & refrigerator, 43-inch LED Smart TV, and fiber optic broadband connectivity.",
    amenities: [
      "Fully Furnished Interiors",
      "Split Air Conditioning",
      "Modular Kitchen + Appliances",
      "High-Speed Elevators",
      "Clubhouse & Gym Access",
      "Round-the-clock Security"
    ],
    bankApproval: "Registered Lease Agreement Provided"
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
    priceFormatted: "₹1.65 Crore",
    pricePerSqft: "₹6,226 / sq.ft",
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
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80"
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
    priceFormatted: "₹28,500 / month",
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
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80"
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
    priceFormatted: "₹1,10,000 / month",
    pricePerSqft: "₹50 / sq.ft lease rate",
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
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80"
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
    priceFormatted: "₹68.0 Lakhs",
    pricePerSqft: "₹5,037 / sq.ft",
    area: 1350,
    areaFormatted: "1,350 sq.ft",
    carpetArea: "1,080 sq.ft",
    beds: 3,
    baths: 3,
    balconies: 2,
    parking: "1 Ground Floor Covered Parking",
    floor: "3rd of 4 Floors",
    facing: "South-Facing Open Front",
    status: "Ready to Move",
    ownership: "Single Owner Clear Title",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80"
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
    priceFormatted: "₹2.20 Crore",
    pricePerSqft: "₹12,222 / sq.ft",
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
    ownership: "Commercial Freehold",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
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

// =============================================================================
// 2. DOM ELEMENTS & INITIALIZATION
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProperties(PROPERTY_DATABASE);
  initSearchEngine();
  initFilterChips();
  initEmiCalculator();
  initSellerForm();
  initVisitModal();
  initMobileMenu();
  initScrollHeader();
});

// =============================================================================
// 3. PROPERTY RENDERING SYSTEM
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
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #ffffff; border-radius: 16px; border: 1px dashed #cbd5e1;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5" style="margin: 0 auto 16px;">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">No Properties Found</h3>
        <p style="color: #64748b; font-size: 0.9375rem; max-width: 480px; margin: 0 auto 20px;">
          We couldn't find matching properties for your exact criteria. Please reset your filters or contact Master Kings Property directly for off-market listings.
        </p>
        <button class="btn btn-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = properties.map(p => `
    <article class="property-card" data-id="${p.id}">
      <div class="card-media-wrapper">
        <img class="card-img" src="${p.image}" alt="${p.title}" loading="lazy">
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>${p.location}</span>
        </div>

        <div class="card-specs-grid">
          <div class="spec-item" title="Bedrooms">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 7v11m0-4h18m0-7v11M7 11h10M7 7a2 2 0 012-2h6a2 2 0 012 2v4H7V7z"></path>
            </svg>
            <span>${p.beds > 0 ? p.beds + ' BHK' : 'Office'}</span>
          </div>

          <div class="spec-item" title="Bathrooms">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7M2 12h20M7 12V5a2 2 0 012-2h6a2 2 0 012 2v7"></path>
            </svg>
            <span>${p.baths} Baths</span>
          </div>

          <div class="spec-item" title="Super Area">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
            <span>${p.area} sq.ft</span>
          </div>
        </div>

        <div class="card-footer">
          <button class="btn btn-outline" onclick="openPropertyModal('${p.id}')">
            View Details
          </button>
          <a class="btn btn-whatsapp" href="${generateWhatsAppLink(p)}" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 16.48c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.134 8.134 0 01-1.25-4.32c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.78 2.39 1.54 1.55 2.39 3.6 2.39 5.79 0 4.51-3.67 8.16-8.16 8.16z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

// =============================================================================
// 4. SEARCH & FILTER ENGINE
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

  // Also filter on change of dropdowns
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
    // 1. Purpose filter (Buy vs Rent vs Commercial vs All)
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

    // 5. Budget Range Filter
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
// 5. PROPERTY DETAILS MODAL
// =============================================================================
let activeProperty = null;

function openPropertyModal(propertyId) {
  const property = PROPERTY_DATABASE.find(p => p.id === propertyId);
  if (!property) return;
  activeProperty = property;

  const modal = document.getElementById("propertyDetailsModal");
  if (!modal) return;

  // Populate data
  document.getElementById("modalPropertyImg").src = property.image;
  document.getElementById("modalPropertyImg").alt = property.title;
  document.getElementById("modalPropertyTitle").textContent = property.title;
  document.getElementById("modalPropertyPrice").textContent = property.priceFormatted;
  document.getElementById("modalPropertyRate").textContent = property.pricePerSqft;
  document.getElementById("modalPropertyLocation").textContent = property.location;
  document.getElementById("modalPropertyLandmark").textContent = property.landmark;
  document.getElementById("modalPropertyDesc").textContent = property.description;

  // Specs
  document.getElementById("modalSpecBeds").textContent = property.beds > 0 ? `${property.beds} Bedrooms` : "N/A (Office)";
  document.getElementById("modalSpecBaths").textContent = `${property.baths} Bathrooms`;
  document.getElementById("modalSpecArea").textContent = property.areaFormatted;
  document.getElementById("modalSpecCarpet").textContent = property.carpetArea;
  document.getElementById("modalSpecFacing").textContent = property.facing;
  document.getElementById("modalSpecFloor").textContent = property.floor;
  document.getElementById("modalSpecParking").textContent = property.parking;
  document.getElementById("modalSpecStatus").textContent = property.status;

  // Amenities
  const amenitiesList = document.getElementById("modalAmenitiesList");
  amenitiesList.innerHTML = property.amenities.map(a => `
    <div class="modal-amenity-item">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      <span>${a}</span>
    </div>
  `).join("");

  // Bank approval
  document.getElementById("modalBankApproval").textContent = property.bankApproval;

  // WhatsApp Link
  document.getElementById("modalWhatsAppBtn").href = generateWhatsAppLink(property);

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

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
    if (e.key === "Escape") closePropertyModal();
  });
}

function generateWhatsAppLink(p) {
  const text = encodeURIComponent(
    `Hello Master Kings Property,\nI am interested in inspecting "${p.title}" (${p.priceFormatted}) in ${p.location}.\nPlease share floor plans and schedule a physical site visit with your team.`
  );
  return `https://wa.me/917439675500?text=${text}`;
}

// =============================================================================
// 6. EMI & MORTGAGE CALCULATOR
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

    // Update text labels
    loanDisplay.textContent = formatIndianCurrency(P);
    rateDisplay.textContent = `${annualRate.toFixed(1)}% p.a.`;
    tenureDisplay.textContent = `${tenureYears} Years (${tenureYears * 12} Mos)`;

    // Monthly interest calculation
    const r = annualRate / 12 / 100;
    const n = tenureYears * 12;

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    monthlyEmiDisplay.textContent = `₹ ${Math.round(emi).toLocaleString("en-IN")}`;
    principalDisplay.textContent = `₹ ${Math.round(P).toLocaleString("en-IN")}`;
    interestDisplay.textContent = `₹ ${Math.round(totalInterest).toLocaleString("en-IN")}`;
    paymentDisplay.textContent = `₹ ${Math.round(totalPayment).toLocaleString("en-IN")}`;

    // Update Visual Bars
    const principalPct = Math.round((P / totalPayment) * 100);
    const interestPct = 100 - principalPct;

    if (barPrincipal) barPrincipal.style.width = `${principalPct}%`;
    if (barInterest) barInterest.style.width = `${interestPct}%`;
  }

  [loanSlider, rateSlider, tenureSlider].forEach(slider => {
    if (slider) slider.addEventListener("input", calculateEmi);
  });

  // Run initial calculation
  if (loanSlider) calculateEmi();
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
// 7. SELLER SUBMISSION & APPOINTMENT HANDLERS
// =============================================================================
function initSellerForm() {
  const form = document.getElementById("sellerListingForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("sellerName").value;
    const phone = document.getElementById("sellerPhone").value;
    const type = document.getElementById("sellerPropertyType").value;
    const loc = document.getElementById("sellerLocation").value;
    const price = document.getElementById("sellerPrice").value;

    const text = encodeURIComponent(
      `Hello Master Kings Property,\nI would like to list my property with your agency:\n- Owner: ${name}\n- Phone: ${phone}\n- Property: ${type}\n- Location: ${loc}\n- Expected Price/Rent: ${price}\nKindly get in touch with me for physical inspection and listing.`
    );

    showToast("Opening WhatsApp with your property details...");
    setTimeout(() => {
      window.open(`https://wa.me/917439675500?text=${text}`, "_blank");
      form.reset();
    }, 800);
  });
}

function handleVisitBooking(e) {
  if (e) e.preventDefault();
  const name = document.getElementById("visitName")?.value || "Client";
  const phone = document.getElementById("visitPhone")?.value || "";
  const date = document.getElementById("visitDate")?.value || "Earliest";
  const propName = activeProperty ? activeProperty.title : "New Town Properties";

  const text = encodeURIComponent(
    `Hello Master Kings Property,\nI want to book a free physical site visit:\n- Name: ${name}\n- Phone: ${phone}\n- Preferred Date: ${date}\n- Property of Interest: ${propName}\nPlease confirm the pickup/meeting location near New Town Bus Stand.`
  );

  showToast("Connecting to Master Kings Property on WhatsApp...");
  setTimeout(() => {
    window.open(`https://wa.me/917439675500?text=${text}`, "_blank");
    closePropertyModal();
  }, 600);
}

// =============================================================================
// 8. TOAST NOTIFICATION & UI UTILITIES
// =============================================================================
function showToast(message) {
  let toast = document.getElementById("globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    toast.className = "toast";
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cca03c" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span id="toastMsgText"></span>
    `;
    const container = document.createElement("div");
    container.className = "toast-container";
    container.appendChild(toast);
    document.body.appendChild(container);
  }

  document.getElementById("toastMsgText").textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const header = document.querySelector(".site-header");
  if (toggleBtn && header) {
    toggleBtn.addEventListener("click", () => {
      header.classList.toggle("menu-open");
    });
  }
}

function initScrollHeader() {
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });
}
