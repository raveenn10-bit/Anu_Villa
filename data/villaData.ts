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
      title: "6 Spacious Bedrooms",
      subtitle: "Accommodates up to 12 Guests",
      iconName: "BedDouble",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
      description: "6 king and queen bedrooms featuring whisper-quiet air conditioning, plush hotel-grade mattresses, ceiling fans, wardrobe space, and tropical garden views.",
      details: [
        "6 Independent spacious bedrooms",
        "Accommodates up to 12 guests",
        "Individual remote-controlled A/C",
        "Premium linens & fresh towels provided",
        "Ample luggage storage & wardrobe space",
      ],
    },
    {
      id: "bathrooms",
      title: "6 Attached Bathrooms",
      subtitle: "Private En-Suite for Every Room",
      iconName: "Bath",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      description: "Every single bedroom has its own private attached bathroom with modern sanitary fittings, hot water showers, and complimentary toiletries.",
      details: [
        "6 Private attached en-suite bathrooms",
        "Continuous hot & cold water",
        "Modern rain showerheads",
        "Clean towels & essentials supplied",
      ],
    },
    {
      id: "pool",
      title: "Private Swimming Pool",
      subtitle: "Exclusive for Your Group",
      iconName: "Waves",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
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
      title: "BBQ & Outdoor Dining",
      subtitle: "Alfresco Garden Grill",
      iconName: "UtensilsCrossed",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      description: "Enjoy festive outdoor barbecue evenings under the stars with our dedicated BBQ grill setup, outdoor dining tables, and garden seating.",
      details: [
        "Dedicated BBQ grill & accessories",
        "Outdoor dining table for group meals",
        "Lush garden atmosphere under the stars",
        "Host assistance available for seafood sourcing",
      ],
    },
    {
      id: "kitchen",
      title: "Kitchen Facilities",
      subtitle: "Fully Equipped for Home Cooking",
      iconName: "UtensilsCrossed",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      description: "Prepare fresh meals with ease in the equipped kitchen featuring gas stove, refrigerator, cookware, dinnerware, microwave, and electric kettle.",
      details: [
        "Gas burners & microwave oven",
        "Large refrigerator & freezer",
        "Pots, pans, dinnerware & cutlery",
        "Electric kettle & Ceylon tea station",
      ],
    },
    {
      id: "garden",
      title: "Garden & Outdoor Area",
      subtitle: "Peaceful Natural Sanctuary",
      iconName: "Trees",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      description: "A secure, peaceful garden surrounded by coconut palms and exotic flora, offering private on-site parking and a serene place to unwind.",
      details: [
        "Lush tropical garden landscaping",
        "Spacious outdoor relaxation area",
        "Free secure private on-site parking",
        "Quiet residential setting in Samagiya, Thalpe",
      ],
    },
  ],
  galleryImages: [
    {
      id: "gal-1",
      title: "Private Swimming Pool & Villa Exterior",
      category: "exterior",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80",
      alt: "Anu Villa private outdoor swimming pool and tropical facade in Unawatuna Galle",
    },
    {
      id: "gal-2",
      title: "Spacious Air-Conditioned Bedroom",
      category: "bedrooms",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
      alt: "Comfortable air conditioned bedroom with attached bathroom at Anu Villa",
    },
    {
      id: "gal-3",
      title: "Modern Attached Bathroom",
      category: "bedrooms",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
      alt: "Clean en-suite bathroom with hot water rain shower",
    },
    {
      id: "gal-4",
      title: "Garden & BBQ Dining Area",
      category: "garden",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      alt: "Lush tropical garden and alfresco dining patio",
    },
    {
      id: "gal-5",
      title: "Fully Equipped Kitchen & Dining",
      category: "living",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      alt: "Modern equipped kitchen for guest cooking",
    },
    {
      id: "gal-6",
      title: "Poolside Evening Lounge",
      category: "exterior",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80",
      alt: "Illuminated evening pool at Anu Villa",
    },
    {
      id: "gal-7",
      title: "Master Suite with Garden View",
      category: "bedrooms",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
      alt: "Bright and airy master bedroom",
    },
    {
      id: "gal-8",
      title: "Spacious Living Room Lounge",
      category: "living",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      alt: "Cozy sofa seating in the living hall",
    },
  ],
  nearbyAttractions: [
    {
      id: "turtle-beach",
      name: "Turtle Beach (Dalawella)",
      category: "Beach & Wildlife",
      distance: "1.5 km",
      travelTime: "4 mins",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      description: "Famous lagoon beach where wild giant sea turtles swim up close in shallow, crystal clear waters.",
      highlights: ["Swim with giant sea turtles", "Safe natural swimming reef lagoon", "Iconic coconut tree rope swing"],
    },
    {
      id: "mihiripanne-beach",
      name: "Mihiripanne Beach",
      category: "Pristine Beach",
      distance: "1.8 km",
      travelTime: "5 mins",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      description: "A tranquil golden sand beach with calm waters, coconut palms, and peaceful tropical sunsets.",
      highlights: ["Quiet & uncrowded coastline", "Perfect for morning walks & sunbathing", "Local beach cafes nearby"],
    },
    {
      id: "thalpe-beach",
      name: "Thalpe Beach (Rock Pools)",
      category: "Natural Wonder",
      distance: "2.0 km",
      travelTime: "5 mins",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
      description: "Renowned for its unique historic natural coral rock pools carved into the sea reef, offering safe saltwater plunge baths.",
      highlights: ["Unique coral rock swimming pools", "Sunset photography spot", "Crystal clear turquoise water"],
    },
    {
      id: "yatagala-temple",
      name: "Yatagala Raja Maha Viharaya",
      category: "Culture & Heritage",
      distance: "3.5 km",
      travelTime: "8 mins",
      image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=800&q=80",
      description: "Ancient 2,300-year-old rock cave temple nestled among serene giant boulders and lush jungle canopy.",
      highlights: ["Historic rock cave paintings", "Peaceful Buddhist meditation vibe", "Lush tropical nature surroundings"],
    },
    {
      id: "galle-fort",
      name: "Galle Dutch Fort (UNESCO)",
      category: "UNESCO World Heritage",
      distance: "7.5 km",
      travelTime: "14 mins",
      image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
      description: "Walk the 17th-century ramparts, explore boutique cafes, gem jewelers, colonial architecture, and the iconic lighthouse.",
      highlights: ["Scenic rampart sunset walk", "Historic lighthouse & maritime museums", "Artisan cafes & fine dining"],
    },
    {
      id: "koggala-safari",
      name: "Koggala River Safari",
      category: "Nature & Lake Safari",
      distance: "5.0 km",
      travelTime: "10 mins",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
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
      question: "How do I book or pay?",
      answer: "You can book directly via WhatsApp or phone with host M. Mangala (+94 77 518 3955 / +94 76 452 6021 / +94 74 118 0163) for the guaranteed best direct rate, or via our Airbnb and Booking.com listings.",
    },
  ],
};
