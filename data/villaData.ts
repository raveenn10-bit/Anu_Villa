export interface FacilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  image: string;
  details: string[];
}

export interface RoomItem {
  id: string;
  title: string;
  bedType: string;
  capacity: string;
  size: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'all' | 'exterior' | 'bedrooms' | 'living' | 'garden';
  image: string;
  alt: string;
}

export interface NearbyPlace {
  id: string;
  name: string;
  category: string;
  distance: string;
  travelTime: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  flag: string;
  rating: number;
  date: string;
  review: string;
  stayType: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'booking' | 'stay' | 'facilities' | 'location';
}

export const VILLA_DATA = {
  name: "Anu Villa",
  tagline: "Your Private Getaway in Galle",
  subtitle: "WELCOME TO ANU VILLA",
  location: "Unawatuna, Galle, Southern Province, Sri Lanka",
  phones: ["+94 76 452 6021", "+94 77 518 3955"],
  rawPhones: ["94764526021", "94775183955"],
  whatsappNumber: "94764526021",
  email: "info@anuvillaunawatuna.com",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  minimumStay: "1 Night",
  capacity: "Up to 8 - 10 Guests",
  bedroomsCount: 4,
  bathroomsCount: 4,
  kitchensCount: 2,
  
  description: {
    hero: "Anu Villa offers you a peaceful retreat surrounded by nature with luxury, comfort and privacy.",
    about: "Anu Villa is a beautiful private villa located in the heart of Unawatuna, Galle. Whether you're planning a family vacation, a romantic getaway or a peaceful holiday with friends, Anu Villa is the perfect choice for your stay.",
    longAbout: "Nestled in the lush tropical greenery of Unawatuna just minutes from the golden sands of the Indian Ocean, Anu Villa is a sanctuary designed for tranquility and effortless luxury. Featuring 4 spacious air-conditioned suites with private en-suite bathrooms, two fully-equipped kitchens, expansive living and dining areas, a private swimming pool, and an enchanting enclosed garden, our villa promises unmatched privacy and heartfelt Sri Lankan hospitality."
  },

  keyHighlights: [
    { title: "4 Bedrooms", subtitle: "Spacious & Comfortable", icon: "Bed" },
    { title: "Up to 8 Guests", subtitle: "Perfect for Families", icon: "Users" },
    { title: "Swimming Pool", subtitle: "Private & Relaxing", icon: "Waves" },
    { title: "Galle, Sri Lanka", subtitle: "Prime Location", icon: "MapPin" }
  ],

  aboutChecklist: [
    "Modern & Spacious Rooms",
    "Fully Equipped Kitchen",
    "Private Swimming Pool",
    "Free Wi-Fi & Parking"
  ],

  facilities: [
    {
      id: "bedrooms",
      title: "4 Bedrooms",
      subtitle: "Spacious bedrooms with AC and comfort.",
      description: "Four king-sized air-conditioned master bedrooms, each with premium linen, mosquito netting, ambient lighting, and en-suite bathrooms.",
      iconName: "BedDouble",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      details: ["King Size Luxury Beds", "Quiet Inverter Air Conditioning", "Private Wardrobes & Safe", "Blackout Curtains & Garden Views"]
    },
    {
      id: "bathrooms",
      title: "4 Bathrooms",
      subtitle: "Clean & modern attached bathrooms.",
      description: "Sparkling clean en-suite attached bathrooms for every bedroom with solar-powered hot showers, premium toiletries, and plush bath towels.",
      iconName: "Bath",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      details: ["Solar Hot Water 24/7", "Modern Rain Showers", "Complimentary Organic Toiletries", "Fresh Towels & Hairdryers"]
    },
    {
      id: "pool",
      title: "Swimming Pool",
      subtitle: "Private pool for your relaxation.",
      description: "Immaculate, crystal-clear outdoor swimming pool surrounded by sun loungers and tropical palm trees for refreshing dips anytime.",
      iconName: "Waves",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
      details: ["Exclusive Private Access", "Sun Deck with Comfortable Loungers", "Poolside Ambient Night Lighting", "Regular Fresh Chlorination"]
    },
    {
      id: "living",
      title: "Living Area",
      subtitle: "Comfortable living space with TV.",
      description: "Generous open-concept living area with comfortable designer sofas, 55-inch 4K Smart TV, high-speed fiber Wi-Fi, and garden vistas.",
      iconName: "Tv",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      details: ["55-inch 4K Smart TV with Netflix", "High-Speed Mesh Wi-Fi (100+ Mbps)", "Handcrafted Teak Furniture", "Natural Cross-Breeze Ventilation"]
    },
    {
      id: "kitchen",
      title: "Fully Equipped Kitchen",
      subtitle: "Cook your favorite meals with ease.",
      description: "Two fully-equipped modern kitchens featuring refrigerators, gas stoves, microwaves, blenders, cookware, and dining ware.",
      iconName: "UtensilsCrossed",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      details: ["2 Complete Kitchens", "Double-Door Refrigerator & Freezer", "Coffee & Tea Maker", "Chef On-Request Available"]
    },
    {
      id: "garden",
      title: "Outdoor Area",
      subtitle: "Beautiful garden & relaxing outdoor space.",
      description: "Lush tropical manicured lawns, tall coconut palms, outdoor dining table, BBQ facility, and serene spots for morning yoga or evening tea.",
      iconName: "Trees",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      details: ["Enclosed & Gated Tropical Garden", "Al Fresco Dining Area", "BBQ Grill Setup Available", "Night Illumination & Security"]
    }
  ],

  galleryImages: [
    {
      id: 1,
      title: "Villa Exterior & Private Pool at Dusk",
      category: "exterior",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      alt: "Anu Villa exterior architecture and swimming pool"
    },
    {
      id: 2,
      title: "Master Suite with Four-Poster Canopy Bed",
      category: "bedrooms",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      alt: "Anu Villa air-conditioned master bedroom"
    },
    {
      id: 3,
      title: "Spacious Living & Dining Lounge",
      category: "living",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      alt: "Anu Villa comfortable living room"
    },
    {
      id: 4,
      title: "Lush Tropical Garden Pathway",
      category: "garden",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      alt: "Anu Villa green garden and palms"
    },
    {
      id: 5,
      title: "Crystal Clear Swimming Pool & Deck",
      category: "exterior",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
      alt: "Anu Villa private swimming pool loungers"
    },
    {
      id: 6,
      title: "Modern Fully-Equipped Kitchen",
      category: "living",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      alt: "Anu Villa modern kitchen"
    },
    {
      id: 7,
      title: "En-suite Bathroom with Rain Shower",
      category: "bedrooms",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
      alt: "Anu Villa luxury bathroom"
    },
    {
      id: 8,
      title: "Outdoor Al Fresco Dining Area",
      category: "garden",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      alt: "Anu Villa patio outdoor dining"
    }
  ] as GalleryItem[],

  nearbyAttractions: [
    {
      id: "unawatuna-beach",
      name: "Unawatuna Golden Beach",
      category: "Beach & Water Sports",
      distance: "1.8 km",
      travelTime: "5 mins drive",
      description: "One of Sri Lanka's most renowned curved golden sand bays, ideal for swimming, paddle boarding, vibrant beach cafes, and sunset dinners.",
      image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
      highlights: ["Safe Swimming Bay", "Beachfront Seafood Restaurants", "Scuba Diving & Snorkeling"]
    },
    {
      id: "jungle-beach",
      name: "Jungle Beach & Rumassala",
      category: "Hidden Gem & Nature",
      distance: "2.5 km",
      travelTime: "7 mins drive",
      description: "Secluded cove surrounded by dense tropical forest and coral reefs with calm turquoise waters perfect for snorkeling with colorful fish.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      highlights: ["Live Coral Reefs", "Shaded Forest Walk", "Peaceful Atmosphere"]
    },
    {
      id: "dalawella-beach",
      name: "Dalawella & Wijaya Beach (Turtle Lagoon)",
      category: "Wildlife & Scenery",
      distance: "2.2 km",
      travelTime: "6 mins drive",
      description: "Famous for the iconic coconut tree rope swing, natural coral reef pool where giant wild sea turtles swim daily alongside visitors.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      highlights: ["Swim with Wild Sea Turtles", "Famous Rope Swing", "Wood-fired Pizza by the Beach"]
    },
    {
      id: "galle-fort",
      name: "UNESCO Galle Dutch Fort",
      category: "Heritage & Culture",
      distance: "4.5 km",
      travelTime: "12 mins drive",
      description: "Magnificent 16th-century Portuguese and Dutch colonial walled fortress packed with boutique shops, art galleries, gelato cafes, and sunset ramparts.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
      highlights: ["Galle Lighthouse", "Boutique Shopping & Cafes", "Colonial Architecture"]
    },
    {
      id: "peace-pagoda",
      name: "Japanese Peace Pagoda",
      category: "Scenic Viewpoint & Spirituality",
      distance: "3.1 km",
      travelTime: "8 mins drive",
      description: "Majestic white stupa perched on Rumassala Hill offering 360-degree panoramic ocean views of the Galle harbour and lush coastline.",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
      highlights: ["Panoramic Ocean Views", "Serene Sunset Spot", "Buddhist Shrines & Statues"]
    },
    {
      id: "mirissa",
      name: "Mirissa Harbour & Whale Watching",
      category: "Excursions",
      distance: "22 km",
      travelTime: "30 mins drive",
      description: "World-class destination for Blue Whale and dolphin watching expeditions, surfing at Coconut Tree Hill, and vibrant beach nightlife.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      highlights: ["Blue Whale Watching Cruises", "Coconut Tree Hill", "Sunset Surf Breaks"]
    }
  ] as NearbyPlace[],

  testimonials: [
    {
      id: "1",
      name: "Charlotte & David Miller",
      country: "United Kingdom",
      flag: "🇬🇧",
      rating: 5,
      date: "February 2026",
      review: "Anu Villa exceeded all our expectations! The villa is immaculate, the private pool is heaven after a day exploring Galle Fort, and the calm green surroundings made our stay unforgettable. Having 4 spacious en-suite rooms gave our family total comfort. We will definitely return!",
      stayType: "Family Holiday (7 Nights)"
    },
    {
      id: "2",
      name: "Lukas & Sophie Becker",
      country: "Germany",
      flag: "🇩🇪",
      rating: 5,
      date: "January 2026",
      review: "The peace and privacy here are unbeatable. Just 5 minutes from Unawatuna beach, yet completely secluded in a lush garden sanctuary. The kitchen is fully equipped, AC works perfectly, and the host was exceptionally helpful on WhatsApp with local tips and transport.",
      stayType: "Friends Group (5 Nights)"
    },
    {
      id: "3",
      name: "Ranil & Dilani Perera",
      country: "Australia / Sri Lanka",
      flag: "🇦🇺",
      rating: 5,
      date: "December 2025",
      review: "We booked the whole villa for a family reunion. The pool, the spacious dining area, and the garden were so wonderful for kids and adults alike. Very clean bathrooms, fast Wi-Fi, and great security. 10/10 recommendation for anyone visiting Galle!",
      stayType: "Family Reunion (4 Nights)"
    }
  ] as Testimonial[],

  faq: [
    {
      question: "How do I book Anu Villa?",
      answer: "You can book directly by clicking the 'Book Now' or 'WhatsApp Us' button on our website. We provide instant confirmation, transparent direct rates with no hidden third-party fees, and flexible payment options.",
      category: "booking"
    },
    {
      question: "Is the swimming pool completely private to our group?",
      answer: "Yes, 100%! When you book Anu Villa, the entire property including the 4 bedrooms, 2 kitchens, private pool, living areas, and garden are exclusively yours.",
      category: "facilities"
    },
    {
      question: "What are the check-in and check-out times?",
      answer: "Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out can be arranged subject to villa availability upon prior request.",
      category: "stay"
    },
    {
      question: "Are cooking facilities and private chefs available?",
      answer: "The villa has 2 fully equipped modern kitchens with refrigerators, stoves, microwaves, and cookware for self-catering. We can also arrange an experienced local private chef to prepare authentic Sri Lankan seafood curries or western breakfast upon request.",
      category: "facilities"
    },
    {
      question: "How far is the villa from Unawatuna Beach and Galle Fort?",
      answer: "Anu Villa is located just 5 minutes (1.8 km) from Unawatuna Beach and 12 minutes (4.5 km) from the historic Galle Dutch Fort. We can easily arrange trusted tuk-tuks, scooter rentals, or van transfers.",
      category: "location"
    },
    {
      question: "Can you arrange airport transfer from Colombo (BIA)?",
      answer: "Yes! We can arrange private, air-conditioned highway transfers directly from Bandaranaike International Airport (Colombo) to Anu Villa via the Southern Expressway (approx. 2 hours smooth drive).",
      category: "booking"
    }
  ] as FAQItem[],

  pricing: {
    baseNightlyRateUSD: 140, // standard entire villa direct booking rate
    currencies: {
      USD: { symbol: "$", rate: 1 },
      LKR: { symbol: "Rs.", rate: 310 },
      EUR: { symbol: "€", rate: 0.92 },
      GBP: { symbol: "£", rate: 0.79 },
      AUD: { symbol: "A$", rate: 1.55 }
    }
  }
};
