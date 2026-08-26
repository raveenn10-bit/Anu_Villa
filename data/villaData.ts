export interface VillaData {
  name: string;
  officialName: string;
  tagline: string;
  slogan: string;
  location: string;
  addressShort: string;
  distanceToBeach: string;
  hostName: string;
  phones: string[];
  rawPhones: string[];
  whatsappNumber: string;
  capacity: {
    bedrooms: number;
    bathrooms: number;
    maxGuests: number;
  };
  checkInTime: string;
  checkOutTime: string;
  minimumStay: string;
  pricing: {
    baseNightlyRateUSD: number;
    currencies: {
      USD: { symbol: "$"; rate: 1; label: "USD ($)" };
      LKR: { symbol: "Rs. "; rate: 310; label: "LKR (Rs)" };
      EUR: { symbol: "€"; rate: 0.92; label: "EUR (€)" };
      GBP: { symbol: "£"; rate: 0.79; label: "GBP (£)" };
      AUD: { symbol: "A$"; rate: 1.52; label: "AUD (A$)" };
    };
  };
  description: {
    hero: string;
    about: string;
    longAbout: string;
  };
  website: string;
  social: {
    facebook: string;
    tiktok: string;
    googleMaps: string;
    bookingCom: string;
    airbnb: string;
  };
  mapCoordinates: {
    lat: number;
    lng: number;
  };
  googleMapsEmbedUrl: string;
  aboutChecklist: string[];
  facilities: FacilityItem[];
  galleryImages: GalleryItem[];
  nearbyAttractions: NearbyPlace[];
  testimonials: Testimonial[];
  faq: FAQItem[];
}

export interface FacilityItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  image: string;
  description: string;
  details: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "exterior" | "bedrooms" | "living" | "garden" | "all";
  image: string;
  alt: string;
}

export interface NearbyPlace {
  id: string;
  name: string;
  category: string;
  distance: string;
  travelTime: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  flag: string;
  date: string;
  rating: number;
  stayType: string;
  review: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const VILLA_DATA: VillaData = {
  name: "Anu Villa",
  officialName: "M.S.A Anu Villa",
  tagline: "Your Perfect Getaway in Unawatuna",
  slogan: "Stay • Relax • Enjoy",
  location: "Samagiya, Thalpe North, Unawatuna, Galle, Sri Lanka",
  addressShort: "Thalpe North, Unawatuna, Galle",
  distanceToBeach: "1.5 km to beach",
  hostName: "M. Mangala",
  phones: ["+94 77 518 3955", "+94 76 452 6021", "+94 74 118 0163"],
  rawPhones: ["94775183955", "94764526021", "94741180163"],
  whatsappNumber: "94775183955",
  capacity: {
    bedrooms: 6,
    bathrooms: 6,
    maxGuests: 12,
  },
  checkInTime: "12:00 PM",
  checkOutTime: "10:00 AM",
  minimumStay: "1 Night",
  pricing: {
    baseNightlyRateUSD: 140,
    currencies: {
      USD: { symbol: "$", rate: 1, label: "USD ($)" },
      LKR: { symbol: "Rs. ", rate: 310, label: "LKR (Rs)" },
      EUR: { symbol: "€", rate: 0.92, label: "EUR (€)" },
      GBP: { symbol: "£", rate: 0.79, label: "GBP (£)" },
      AUD: { symbol: "A$", rate: 1.52, label: "AUD (A$)" },
    },
  },
  description: {
    hero: "Escape the busy city life and enjoy a peaceful, comfortable stay at M.S.A Anu Villa in Thalpe North, Unawatuna. 6 spacious en-suite rooms, private pool, and tropical serenity.",
    about: "Escape the busy city life and enjoy a peaceful, comfortable stay at ANU VILLA. Offering comfortable & private accommodation, peaceful surroundings, spacious rooms, and modern amenities ideal for families & groups.",
    longAbout: "Nestled in the tranquil sanctuary of Samagiya, Thalpe North in Unawatuna, M.S.A Anu Villa offers the quintessential tropical escape. With 6 fully air-conditioned bedrooms featuring private attached bathrooms, an outdoor swimming pool, fully equipped kitchen, BBQ facilities, and peaceful lush gardens, our villa accommodates up to 12 guests in complete comfort and privacy. Just 1.5 km from the beach and minutes from historic Galle Fort, it is the perfect holiday destination for families, group getaways, and friends.",
  },
  website: "https://www.msaanuvilla.com",
  social: {
    facebook: "https://www.facebook.com/share/1dwdJ81Bb2/",
    tiktok: "https://www.tiktok.com/@m.s.a.anu.villa?_r=1&_t=ZS-999U9uyxsjl",
    googleMaps: "https://maps.app.goo.gl/fcMUFhyUnG87FR4y7",
    bookingCom: "https://www.booking.com/hotel/lk/msa-anuvilla-unawatuna.html",
    airbnb: "https://www.airbnb.co.uk/rooms/1604148565476290714?viralityEntryPoint=1&s=76",
  },
  mapCoordinates: {
    lat: 6.0132375,
    lng: 80.2604219,
  },
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=6.0132375,80.2604219&hl=en&z=15&output=embed",
  aboutChecklist: [
    "6 Spacious A/C Rooms with Attached Bathrooms",
    "Private Outdoor Swimming Pool & Sun Deck",
    "Fully Equipped Kitchen & BBQ Facilities",
    "High-Speed Wi-Fi & Secure Private Parking",
    "Accommodates up to 12 Guests Comfortably",
    "Peaceful Surroundings Just 1.5 km to the Beach",
  ],
  facilities: [
    {
      id: "bedrooms",
      title: "6 Air-Conditioned Suites",
      subtitle: "Accommodates up to 12 Guests",
      iconName: "BedDouble",
      image: "/images/villa/apartment-1/apartment-1-08.webp",
      description: "Spacious independent bedroom suites with canopy four-poster beds, whisper-quiet air conditioning, study desks, ceiling fans, wardrobe space, and tropical garden views.",
      details: [
        "6 Independent spacious bedrooms",
        "Accommodates up to 12 guests",
        "Individual remote-controlled A/C",
        "Canopy four-poster beds with mosquito netting",
        "Premium linens & fresh towels provided",
      ],
    },
    {
      id: "bathrooms",
      title: "6 Attached En-Suite Baths",
      subtitle: "Private Bathroom for Every Room",
      iconName: "Bath",
      image: "/images/img_0770.webp",
      description: "Every single bedroom has its own private attached bathroom with modern polished cement finishes, rain showers, continuous hot water, and complimentary toiletries.",
      details: [
        "6 Private attached en-suite bathrooms",
        "Continuous hot & cold water",
        "Modern rain showerheads",
        "Artisanal polished cement vanities",
        "Clean towels & essentials supplied",
      ],
    },
    {
      id: "pool",
      title: "Private Swimming Pool",
      subtitle: "Exclusive for Your Group",
      iconName: "Waves",
      image: "/images/villa/pool-real.webp",
      description: "Dive into your sparkling private outdoor pool, complete with sun loungers, tropical poolside relaxation areas, and evening mood lighting.",
      details: [
        "Crystal clear freshwater pool",
        "Daily automated cleaning & maintenance",
        "Poolside sun loungers & umbrellas",
        "Evening ambient lighting for night dips",
      ],
    },
    {
      id: "bbq",
      title: "Poolside Dining & Garden BBQ",
      subtitle: "Alfresco Tropical Dining",
      iconName: "UtensilsCrossed",
      image: "/images/img_0781.webp",
      description: "Enjoy breezy outdoor dining and barbecue evenings surrounded by lush banana and coconut greenery on our poolside patio.",
      details: [
        "Dedicated BBQ grill & accessories",
        "Outdoor dining tables by the pool & gazebo",
        "Lush garden atmosphere under tropical palms",
        "Host assistance available for fresh local seafood sourcing",
      ],
    },
    {
      id: "kitchen",
      title: "Kitchen & Dining Hall",
      subtitle: "Fully Equipped for Home Cooking",
      iconName: "UtensilsCrossed",
      image: "/images/villa/room-2/room-2-04.webp",
      description: "Prepare fresh home meals with ease in the equipped kitchen area featuring gas stove, refrigerator, cookware, dinnerware, microwave, and kettle.",
      details: [
        "Gas burners & cooking stations",
        "Large refrigerator & freezer",
        "Pots, pans, dinnerware & cutlery",
        "Electric kettle & Ceylon tea station",
      ],
    },
    {
      id: "garden",
      title: "Garden & Balcony Panoramas",
      subtitle: "Peaceful Natural Sanctuary",
      iconName: "Trees",
      image: "/images/img_0767.webp",
      description: "A secure, peaceful estate surrounded by coconut palms and exotic flora, offering private on-site parking and serene balcony views over green hills.",
      details: [
        "Lush tropical garden landscaping",
        "Upper floor balcony overlooking valley hills",
        "Free secure private on-site parking with gated entry",
        "Quiet residential setting in Samagiya, Thalpe North",
      ],
    },
  ],

  galleryImages: [
    // ── Apartment 1 (Canopy master suite & en-suites) ─────────
    {
      id: "gal-apt1-1",
      title: "Apartment 1 — Master Suite & Study Desk",
      category: "bedrooms",
      image: "/images/villa/apartment-1/apartment-1-08.webp",
      alt: "Spacious master bedroom with four-poster canopy bed and study area at M.S.A Anu Villa",
    },
    {
      id: "gal-apt1-2",
      title: "Apartment 1 — Canopy Four-Poster Bed",
      category: "bedrooms",
      image: "/images/villa/apartment-1/apartment-1-01.webp",
      alt: "Canopy four-poster bed with mosquito net at Anu Villa",
    },
    {
      id: "gal-apt1-3",
      title: "Apartment 1 — Air Conditioned Bedroom View",
      category: "bedrooms",
      image: "/images/villa/apartment-1/apartment-1-02.webp",
      alt: "Spacious bedroom suite in Apartment 1 with air conditioning",
    },
    {
      id: "gal-apt1-4",
      title: "Apartment 1 — Polished Cement Vanity Bathroom",
      category: "bedrooms",
      image: "/images/villa/apartment-1/apartment-1-03.webp",
      alt: "Clean en-suite bathroom with artisanal cement vanity and mirror at Anu Villa",
    },
    {
      id: "gal-apt1-5",
      title: "Apartment 1 — Terracotta Vanity En-Suite",
      category: "bedrooms",
      image: "/images/villa/apartment-1/apartment-1-04.webp",
      alt: "Private attached bathroom with terracotta wash basin at Anu Villa",
    },
    {
      id: "gal-apt1-6",
      title: "Apartment 1 — Tropical Veranda Dining",
      category: "garden",
      image: "/images/villa/apartment-1/apartment-1-05.webp",
      alt: "Tropical veranda dining table with lush garden backdrop at M.S.A Anu Villa",
    },
    {
      id: "gal-apt1-7",
      title: "Apartment 1 — Living Space & Suite Entrance",
      category: "living",
      image: "/images/villa/apartment-1/apartment-1-06.webp",
      alt: "Apartment 1 suite entrance and living area",
    },
    {
      id: "gal-apt1-8",
      title: "Apartment 1 — Canopy Bed & Work Area",
      category: "bedrooms",
      image: "/images/villa/apartment-1/apartment-1-07.webp",
      alt: "Apartment 1 canopy bed and wooden work table",
    },
    {
      id: "gal-apt1-9",
      title: "Apartment 1 — Polished Teal Floor & Wardrobe",
      category: "bedrooms",
      image: "/images/villa/apartment-1/apartment-1-09.webp",
      alt: "Apartment 1 polished colored cement floor and clothing rack",
    },
    {
      id: "gal-apt1-10",
      title: "Apartment 1 — Suite Air Conditioning",
      category: "bedrooms",
      image: "/images/villa/apartment-1/apartment-1-10.webp",
      alt: "Apartment 1 air conditioned room layout",
    },
    {
      id: "gal-apt1-11",
      title: "Apartment 1 — Garden Veranda Outlook",
      category: "garden",
      image: "/images/villa/apartment-1/apartment-1-11.webp",
      alt: "Lush tropical palm tree view from Apartment 1 veranda",
    },

    // ── Apartment 2 (High timber ceiling suite & baths) ────────
    {
      id: "gal-apt2-1",
      title: "Apartment 2 — Timber Ceiling Master Suite",
      category: "bedrooms",
      image: "/images/villa/apartment-2/apartment-2-01.webp",
      alt: "Apartment 2 bedroom suite with high timber ceiling and air conditioning at Anu Villa",
    },
    {
      id: "gal-apt2-2",
      title: "Apartment 2 — Suite Layout & Canopy Bed",
      category: "bedrooms",
      image: "/images/villa/apartment-2/apartment-2-02.webp",
      alt: "Apartment 2 king bed with netting and timber beams",
    },
    {
      id: "gal-apt2-3",
      title: "Apartment 2 — En-Suite Shower Room",
      category: "bedrooms",
      image: "/images/villa/apartment-2/apartment-2-03.webp",
      alt: "Apartment 2 attached shower room with hot water",
    },
    {
      id: "gal-apt2-4",
      title: "Apartment 2 — Modern En-Suite Bathroom",
      category: "bedrooms",
      image: "/images/img_0770.webp",
      alt: "Attached polished cement bathroom with hot water rain shower at Anu Villa",
    },
    {
      id: "gal-apt2-5",
      title: "Apartment 2 — Rain Shower & Modern Fixtures",
      category: "bedrooms",
      image: "/images/villa/apartment-2/apartment-2-05.webp",
      alt: "Apartment 2 clean en-suite shower fittings",
    },
    {
      id: "gal-apt2-6",
      title: "Apartment 2 — Master Bedroom Atmosphere",
      category: "bedrooms",
      image: "/images/villa/apartment-2/apartment-2-06.webp",
      alt: "Comfortable spacious bedroom in Apartment 2",
    },
    {
      id: "gal-apt2-7",
      title: "Apartment 2 — En-Suite Vanity & Mirror",
      category: "bedrooms",
      image: "/images/img_0787.webp",
      alt: "Apartment 2 vanity sink and mirror",
    },
    {
      id: "gal-apt2-8",
      title: "Apartment 2 — Artisanal Basin & Blue Wall",
      category: "bedrooms",
      image: "/images/villa/apartment-2/apartment-2-08.webp",
      alt: "Artisan washbasin and mirror detail in en-suite bathroom",
    },
    {
      id: "gal-apt2-9",
      title: "Apartment 2 — Vaulted Ceiling Interior",
      category: "bedrooms",
      image: "/images/villa/apartment-2/apartment-2-09.webp",
      alt: "High timber ceiling architectural bedroom",
    },
    {
      id: "gal-apt2-10",
      title: "Apartment 2 — Rain Shower En-Suite",
      category: "bedrooms",
      image: "/images/villa/apartment-2/apartment-2-10.webp",
      alt: "Rain shower and bathroom detail in Apartment 2",
    },

    // ── Room 1 (Private guest room & bath) ────────────────────
    {
      id: "gal-rm1-1",
      title: "Room 1 — Double Bedroom Suite",
      category: "bedrooms",
      image: "/images/villa/room-1/room-1-01.webp",
      alt: "Room 1 bedroom suite with canopy bed",
    },
    {
      id: "gal-rm1-2",
      title: "Room 1 — Air Conditioning & Comfort",
      category: "bedrooms",
      image: "/images/villa/room-1/room-1-02.webp",
      alt: "Room 1 air conditioned guest bedroom",
    },
    {
      id: "gal-rm1-3",
      title: "Room 1 — Attached Bathroom",
      category: "bedrooms",
      image: "/images/villa/room-1/room-1-03.webp",
      alt: "Room 1 private en-suite bathroom",
    },
    {
      id: "gal-rm1-4",
      title: "Room 1 — Modern Rain Shower",
      category: "bedrooms",
      image: "/images/villa/room-1/room-1-04.webp",
      alt: "Clean modern bathroom with shower and vanity in Room 1",
    },

    // ── Room 2 (Guest room, kitchen & dining) ─────────────────
    {
      id: "gal-rm2-1",
      title: "Room 2 — Bedroom Suite",
      category: "bedrooms",
      image: "/images/villa/room-2/room-2-01.webp",
      alt: "Room 2 comfortable guest bedroom suite",
    },
    {
      id: "gal-rm2-2",
      title: "Room 2 — Wardrobe & Room Layout",
      category: "bedrooms",
      image: "/images/villa/room-2/room-2-02.webp",
      alt: "Room 2 spacious interior layout",
    },
    {
      id: "gal-rm2-3",
      title: "Room 2 — Attached Bathroom",
      category: "bedrooms",
      image: "/images/villa/room-2/room-2-03.webp",
      alt: "Room 2 private en-suite bath",
    },
    {
      id: "gal-rm2-4",
      title: "Kitchenette & Indoor Dining Table",
      category: "living",
      image: "/images/villa/room-2/room-2-04.webp",
      alt: "Equipped kitchen and dining area at Anu Villa Unawatuna",
    },
    {
      id: "gal-rm2-5",
      title: "Refrigerator & Kitchen Facilities",
      category: "living",
      image: "/images/villa/room-2/room-2-05.webp",
      alt: "Kitchen amenities and refrigerator for guest cooking",
    },
    {
      id: "gal-rm2-6",
      title: "Room 2 — En-Suite Mirror & Vanity",
      category: "bedrooms",
      image: "/images/villa/room-2/room-2-06.webp",
      alt: "Room 2 bathroom washbasin and mirror",
    },
    {
      id: "gal-rm2-7",
      title: "Room 2 — Shower & Hot Water",
      category: "bedrooms",
      image: "/images/villa/room-2/room-2-07.webp",
      alt: "Room 2 clean shower area",
    },

    // ── Exterior, Estate & Pool Sanctuary ────────────────────
    {
      id: "gal-estate-1",
      title: "Poolside Dining & Banana Grove Patio",
      category: "garden",
      image: "/images/img_0781.webp",
      alt: "Poolside outdoor dining table and banana palm garden at M.S.A Anu Villa",
    },
    {
      id: "gal-estate-2",
      title: "Elevated Pool & Valley View Cabana",
      category: "exterior",
      image: "/images/img_0758.webp",
      alt: "Elevated view of private swimming pool and cabana overlooking green hills",
    },
    {
      id: "gal-estate-3",
      title: "Estate Entrance & Bamboo Security Gate",
      category: "exterior",
      image: "/images/villa/estate/estate-03.webp",
      alt: "Secure private entrance with blue pillars and bamboo gates at Anu Villa",
    },
    {
      id: "gal-estate-4",
      title: "Covered Veranda Lounge & Pool View",
      category: "garden",
      image: "/images/img_0755.webp",
      alt: "Covered ground floor veranda lounge with pool and tropical palm views",
    },
    {
      id: "gal-estate-5",
      title: "Courtyard Pool & Sun Reflections",
      category: "exterior",
      image: "/images/img_0764.webp",
      alt: "Courtyard swimming pool with crystal clear water and tropical flora",
    },
    {
      id: "gal-estate-6",
      title: "Upper Balcony Dining & Hilltop Vista",
      category: "garden",
      image: "/images/img_0767.webp",
      alt: "Upper floor balcony dining area overlooking lush tropical jungle",
    },
    {
      id: "gal-estate-7",
      title: "Poolside Gazebo Bar & Tiled Pool",
      category: "exterior",
      image: "/images/img_0817.webp",
      alt: "Poolside gazebo cabana bar with swimming pool at Anu Villa",
    },
    {
      id: "gal-estate-8",
      title: "Lush Poolside Oasis & Tropical Palms",
      category: "exterior",
      image: "/images/img_0778.webp",
      alt: "Lush poolside garden oasis with sun terrace and tropical coconut palms",
    },
    {
      id: "gal-estate-9",
      title: "Private Villa Estate Grounds",
      category: "exterior",
      image: "/images/img_0806.webp",
      alt: "Serene private villa estate gardens and poolside cabana",
    },
    {
      id: "gal-estate-10",
      title: "Evening Tropical Pool Reflections",
      category: "exterior",
      image: "/images/img_0807.webp",
      alt: "Tropical evening swimming pool views at M.S.A Anu Villa",
    },
    {
      id: "gal-ext-1",
      title: "Private Outdoor Pool & Sun Courtyard",
      category: "exterior",
      image: "/images/villa/pool-real.webp",
      alt: "Private outdoor swimming pool and sun patio at M.S.A Anu Villa",
    },
  ],

  nearbyAttractions: [
    {
      id: "turtle-beach",
      name: "Turtle Beach (Dalawella)",
      category: "Beach & Wildlife",
      distance: "1.5 km",
      travelTime: "4 mins",
      image: "/images/attractions/dalawella-turtle-beach.webp",
      description: "Famous lagoon beach where wild giant sea turtles swim up close in shallow, crystal clear waters.",
      highlights: ["Swim with giant sea turtles", "Safe natural swimming reef lagoon", "Iconic coconut tree rope swing"],
    },
    {
      id: "mihiripanne-beach",
      name: "Mihiripanne Beach",
      category: "Pristine Beach",
      distance: "1.8 km",
      travelTime: "5 mins",
      image: "/images/attractions/mihiripanna-beach.webp",
      description: "A tranquil golden sand beach with calm waters, coconut palms, and peaceful tropical sunsets.",
      highlights: ["Quiet & uncrowded coastline", "Perfect for morning walks & sunbathing", "Local beach cafes nearby"],
    },
    {
      id: "thalpe-beach",
      name: "Thalpe Beach (Rock Pools)",
      category: "Natural Wonder",
      distance: "2.0 km",
      travelTime: "5 mins",
      image: "/images/attractions/thalpe-rock-pools.webp",
      description: "Renowned for its unique historic natural coral rock pools carved into the sea reef, offering safe saltwater plunge baths.",
      highlights: ["Unique coral rock swimming pools", "Sunset photography spot", "Crystal clear turquoise water"],
    },
    {
      id: "yatagala-temple",
      name: "Yatagala Raja Maha Viharaya",
      category: "Culture & Heritage",
      distance: "3.5 km",
      travelTime: "8 mins",
      image: "/images/attractions/yatagala-temple.webp",
      description: "Ancient 2,300-year-old rock cave temple nestled among serene giant boulders and lush jungle canopy.",
      highlights: ["Historic rock cave paintings", "Peaceful Buddhist meditation vibe", "Lush tropical nature surroundings"],
    },
    {
      id: "galle-fort",
      name: "Galle Dutch Fort (UNESCO)",
      category: "UNESCO World Heritage",
      distance: "7.5 km",
      travelTime: "14 mins",
      image: "/images/attractions/galle-fort-lighthouse.webp",
      description: "Walk the 17th-century ramparts, explore boutique cafes, gem jewelers, colonial architecture, and the iconic lighthouse.",
      highlights: ["Scenic rampart sunset walk", "Historic lighthouse & maritime museums", "Artisan cafes & fine dining"],
    },
    {
      id: "koggala-safari",
      name: "Koggala River Safari",
      category: "Nature & Lake Safari",
      distance: "5.0 km",
      travelTime: "10 mins",
      image: "/images/attractions/koggala-river-safari.webp",
      description: "Scenic boat cruise across Koggala Lake, visiting Cinnamon Island, spice gardens, and birdwatching mangrove lagoons.",
      highlights: ["Cinnamon Island demonstration", "Mangrove birdwatching & wildlife", "Tranquil freshwater lake scenery"],
    },
  ],
  testimonials: [
    {
      id: "rev-1",
      name: "David & Emma S.",
      country: "United Kingdom",
      flag: "🇬🇧",
      date: "February 2026",
      rating: 5,
      stayType: "Family Vacation (8 Guests)",
      review: "Anu Villa was the highlight of our Sri Lanka trip! All 6 rooms with attached bathrooms made our extended family stay effortless. The private pool and garden are marvelous, and host Mangala was exceptionally welcoming and attentive.",
    },
    {
      id: "rev-2",
      name: "Lukas & Friends",
      country: "Germany",
      flag: "🇩🇪",
      date: "January 2026",
      rating: 5,
      stayType: "Group Getaway (10 Guests)",
      review: "We stayed for a week and loved the location in Thalpe North. Just 4 minutes to the turtle beach, yet peaceful and quiet at night. The BBQ evening by the pool was unforgettable. Outstanding value at $140/night for the entire villa!",
    },
    {
      id: "rev-3",
      name: "Chaminda & Nilmini",
      country: "Sri Lanka / Australia",
      flag: "🇦🇺",
      date: "December 2025",
      rating: 5,
      stayType: "Holiday Reunion (12 Guests)",
      review: "Clean, spacious, and very private. Having full kitchen facilities and 6 private bathrooms for all our guests gave us complete peace of mind. Highly recommend booking direct with Mr. Mangala for the best rate!",
    },
  ],
  faq: [
    {
      question: "What is the check-in and check-out time at Anu Villa?",
      answer: "Standard check-in is from 12:00 PM (noon) and check-out is by 10:00 AM. Early check-in or late check-out can be requested depending on availability.",
    },
    {
      question: "What is the rate for the entire villa, and are there extra guest fees?",
      answer: "The entire villa is priced at USD 140 per night (accommodating up to 12 guests across 6 en-suite bedrooms). There are no hidden extra guest charges.",
    },
    {
      question: "Are all 6 bedrooms air-conditioned with attached bathrooms?",
      answer: "Yes! All 6 bedrooms are fully air-conditioned and each features its own private attached bathroom with hot water shower.",
    },
    {
      question: "How far is Anu Villa from the beach and attractions?",
      answer: "Anu Villa is located approximately 1.5 km (3 to 5 minutes by tuk-tuk or scooter) from Turtle Beach, Mihiripanne Beach, and Thalpe Beach. Historic Galle Fort is approximately 14 minutes away.",
    },
    {
      question: "Is kitchen and BBQ equipment available for guests?",
      answer: "Yes! Guests have full access to the equipped kitchen with stove, refrigerator, microwave, kettle, and cookware, as well as an outdoor BBQ grill setup for alfresco dinners.",
    },
    {
      question: "Is Anu Villa safe and child-friendly for families with babies?",
      answer: "Yes, absolutely! Anu Villa is a private, securely gated and fully fenced single-level ground-floor property with zero road hazards, toddler-friendly layouts, and safe swimming pool access, providing a 100% safe and danger-free holiday haven for babies and kids.",
    },
    {
      question: "What is the payment and booking confirmation policy?",
      answer: "To confirm your reservation, an advance payment is required 2 days prior to your check-in date. Payments can be easily made via Bank Transfer, Online Transfer, or Cash upon arrival.",
    },
    {
      question: "How do I book or pay?",
      answer: "You can book directly via WhatsApp or phone with host M. Mangala (+94 77 518 3955 / +94 76 452 6021 / +94 74 118 0163) for the guaranteed best direct rate, or via our official Booking.com listing.",
    },
  ],
};
