import React from "react";
import { VILLA_DATA } from "@/data/villaData";

export default function SchemaMarkup() {
  const reviewsData = VILLA_DATA.testimonials.map((t) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.name,
    },
    datePublished: "2024-02-01",
    reviewBody: t.review,
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  }));

  const lodgingImages = [
    "https://www.msaanuvilla.com/images/hero/hero-slide-3.jpg",
    "https://www.msaanuvilla.com/images/hero/hero-slide-1.jpg",
    "https://www.msaanuvilla.com/images/hero/hero-slide-2.jpg",
    "https://www.msaanuvilla.com/images/villa/pool-real.jpg",
    "https://www.msaanuvilla.com/images/villa/estate/estate-01.jpg",
    "https://www.msaanuvilla.com/images/villa/estate/estate-02.jpg",
    "https://www.msaanuvilla.com/images/villa/estate/estate-03.jpg",
    "https://www.msaanuvilla.com/images/villa/estate/estate-04.jpg",
    "https://www.msaanuvilla.com/images/villa/estate/estate-05.jpg",
    "https://www.msaanuvilla.com/images/villa/estate/estate-06.jpg",
    "https://www.msaanuvilla.com/images/villa/estate/estate-07.jpg",
    "https://www.msaanuvilla.com/images/villa/apartment-1/apartment-1-08.jpg",
    "https://www.msaanuvilla.com/images/villa/apartment-2/apartment-2-01.jpg",
    "https://www.msaanuvilla.com/images/villa/room-1/room-1-01.jpg",
  ];

  // 100% Google Search Console Valid VacationRental & Lodging Schema
  const vacationRentalSchema = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    "@id": "https://www.msaanuvilla.com/#vacationrental",
    identifier: "MSA-ANU-VILLA-001",
    additionalType: "https://schema.org/House",
    name: VILLA_DATA.officialName,
    alternateName: [
      "Anu Villa",
      "M.S.A Anu Villa Unawatuna",
      "Anu Villa Thalpe",
      "MSA Anu Villa Galle",
      "M.S.A AnuVilla",
    ],
    description:
      "M.S.A Anu Villa is a luxury 6-bedroom private pool villa in Samagiya, Thalpe North, Unawatuna, Galle, Sri Lanka. Offering 6 en-suite air-conditioned suites, private swimming pool, kitchen, garden BBQ, and accommodation for up to 12 guests at $140/night.",
    url: "https://www.msaanuvilla.com",
    telephone: "+94775183955",
    email: "contact@msaanuvilla.com",
    priceRange: "$$",
    currenciesAccepted: "USD, LKR, EUR, GBP, AUD",
    paymentAccepted: "Cash, Bank Transfer, Online Payment",
    image: lodgingImages,
    logo: "https://www.msaanuvilla.com/images/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Samagiya, Thalpe North",
      addressLocality: "Unawatuna",
      addressRegion: "Southern Province",
      postalCode: "80600",
      addressCountry: "LK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.0132375,
      longitude: 80.2604219,
    },
    hasMap: "https://maps.app.goo.gl/fcMUFhyUnG87FR4y7",
    checkinTime: "12:00:00",
    checkoutTime: "10:00:00",
    numberOfRooms: 6,
    numberOfBedrooms: 6,
    numberOfBathroomsTotal: 6,
    occupancy: {
      "@type": "QuantitativeValue",
      value: 12,
      minValue: 1,
      maxValue: 12,
      unitText: "person",
    },
    bed: [
      {
        "@type": "BedDetails",
        numberOfBeds: 6,
        typeOfBed: "King Bed",
      },
    ],
    petsAllowed: false,
    smokingAllowed: false,
    starRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: 48,
      reviewCount: 48,
    },
    review: reviewsData,
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Private Swimming Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Air Conditioning",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "En-Suite Bathrooms with Hot Water",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Fully Equipped Kitchen",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Poolside BBQ Grill & Dining Patio",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free High-Speed Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24/7 CCTV Security Surveillance",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free Secure Private On-Site Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "1.5 km to Turtle Beach & Dalawella Beach",
        value: true,
      },
    ],
    containsPlace: [
      {
        "@type": "Accommodation",
        "@id": "https://www.msaanuvilla.com/#entire-villa-unit",
        identifier: "MSA-UNIT-WHOLE-VILLA",
        additionalType: "https://schema.org/House",
        name: "Entire 6-Bedroom Private Villa",
        description:
          "Exclusive whole villa reservation featuring 6 air-conditioned suites with private en-suite bathrooms, private swimming pool, self-catering kitchen, and garden BBQ facilities.",
        numberOfRooms: 6,
        numberOfBedrooms: 6,
        numberOfBathroomsTotal: 6,
        occupancy: {
          "@type": "QuantitativeValue",
          value: 12,
          minValue: 1,
          maxValue: 12,
          unitText: "person",
        },
        bed: [
          {
            "@type": "BedDetails",
            numberOfBeds: 6,
            typeOfBed: "King Bed",
          },
        ],
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Private Swimming Pool",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Air Conditioning",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Attached Bathroom with Hot Water Shower",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Kitchen & Refrigerator",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Free Wi-Fi",
            value: true,
          },
        ],
      },
    ],
    sameAs: [
      "https://maps.app.goo.gl/fcMUFhyUnG87FR4y7",
      "https://www.booking.com/hotel/lk/msa-anuvilla-unawatuna.html",
      "https://www.airbnb.co.uk/rooms/1604148565476290714",
      "https://www.facebook.com/share/1dwdJ81Bb2/",
      "https://www.tiktok.com/@m.s.a.anu.villa",
    ],
    offers: {
      "@type": "Offer",
      identifier: "MSA-OFFER-WHOLE-VILLA",
      name: "Exclusive Whole 6-Bedroom Villa Rental",
      price: "140",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01",
      checkinTime: "12:00:00",
      checkoutTime: "10:00:00",
      url: "https://www.msaanuvilla.com/#rates",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is M.S.A Anu Villa located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "M.S.A Anu Villa is located in Samagiya, Thalpe North, Unawatuna, Galle, Southern Province, Sri Lanka (Postal Code: 80600). It is conveniently situated approximately 1.5 km (4 minutes drive) from Turtle Beach (Dalawella) and Thalpe Coral Rock Pools, and 7.5 km (14 minutes) from historic Galle Dutch Fort.",
        },
      },
      {
        "@type": "Question",
        name: "What is the nightly rate to book M.S.A Anu Villa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "M.S.A Anu Villa offers a transparent direct booking rate of $140 USD (approx. Rs. 43,400 LKR / €129 EUR / £111 GBP) per night for the entire private 6-bedroom villa, including private pool, kitchen, and BBQ facilities, for up to 12 guests with zero hidden fees.",
        },
      },
      {
        "@type": "Question",
        name: "How many guests can stay at M.S.A Anu Villa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The villa accommodates up to 12 guests comfortably across 6 private air-conditioned suites, each equipped with its own attached en-suite bathroom with hot water showers.",
        },
      },
      {
        "@type": "Question",
        name: "What amenities and facilities are available at M.S.A Anu Villa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "M.S.A Anu Villa features a private outdoor swimming pool and sun deck, 6 A/C bedrooms with private attached bathrooms, a fully equipped self-catering kitchen, poolside BBQ grill and dining patio, shaded veranda lounge, high-speed Wi-Fi, tropical garden sanctuary, and free secure private parking.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book M.S.A Anu Villa directly with host M. Mangala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book directly with host M. Mangala via WhatsApp at +94 77 518 3955 or call +94 76 452 6021 / +94 74 118 0163. Direct booking guarantees the best price ($140/night) with zero OTA commission markups.",
        },
      },
      {
        "@type": "Question",
        name: "Is M.S.A Anu Villa safe and child-friendly for families with babies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! M.S.A Anu Villa is a securely gated, fully fenced single-level ground floor property with zero road hazards, toddler-friendly layouts, and safe swimming pool access, providing a 100% safe and danger-free holiday haven for babies, toddlers, and young children.",
        },
      },
      {
        "@type": "Question",
        name: "What is the advance payment and booking policy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To confirm your reservation, an advance payment is required 2 days prior to your check-in date. Payment is conveniently accepted via Bank Transfer, Online Transfer, or Cash upon arrival.",
        },
      },
      {
        "@type": "Question",
        name: "Is M.S.A Anu Villa also listed on Booking.com and Airbnb?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, M.S.A Anu Villa is officially listed on Booking.com (M.S.A AnuVilla Unawatuna) and Airbnb. However, booking directly with the host via WhatsApp offers the best available rate.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.msaanuvilla.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Villa",
        item: "https://www.msaanuvilla.com/#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Suites & Facilities",
        item: "https://www.msaanuvilla.com/#facilities",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Photo Gallery",
        item: "https://www.msaanuvilla.com/#gallery",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Rates & Booking",
        item: "https://www.msaanuvilla.com/#rates",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Nearby Attractions",
        item: "https://www.msaanuvilla.com/#nearby",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Contact & Location",
        item: "https://www.msaanuvilla.com/#contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vacationRentalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
