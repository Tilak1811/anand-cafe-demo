// ==========================================
// ANAND CAFÉ DEMO - CENTRAL CONFIGURATION
// ==========================================
// All sample café information below is fictional and designed
// for demonstration purposes when pitching to local business owners.

export const CAFE_NAME = "The Anand Café";
export const CAFE_TAGLINE = "Where Every Sip Tells a Story";
export const CAFE_SUBTITLE = "Artisanal Coffee & Crafted Chai in Anand & Vallabh Vidyanagar";
export const CAFE_DESCRIPTION =
  "Experience the warmth of authentic flavours in the heart of Anand, Gujarat. From slow-steeped cold brews and fragrant spiced chai to freshly toasted gourmet sandwiches, we blend traditional Gujarati hospitality with modern café culture.";

// Fictional Café Demo Contact (distinct from Developer contact)
export const WHATSAPP_NUMBER = "+919876543210"; // DEMO placeholder number
export const PHONE_NUMBER = "+91 98765 43210"; // DEMO placeholder number
export const EMAIL = "hello@anandcafedemo.example.com";

export const ADDRESS = {
  line1: "123, Heritage Boulevard (DEMO)",
  line2: "Near V.V. Nagar Circle, Opp. University Road",
  city: "Anand",
  state: "Gujarat",
  pincode: "388001",
  country: "India",
  full: "123, Heritage Boulevard (DEMO), Near V.V. Nagar Circle, Anand, Gujarat 388001",
};

export const OPENING_HOURS = [
  { day: "Monday – Friday", hours: "8:00 AM – 10:00 PM" },
  { day: "Saturday", hours: "8:30 AM – 11:00 PM" },
  { day: "Sunday", hours: "9:00 AM – 10:00 PM" },
];

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=22.5539,72.9304&destination_place_id=DEMO_PLACEHOLDER";

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Special", href: "#special" },
  { label: "Story", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

// ==========================================
// MENU CATEGORIES & ITEMS
// ==========================================
export type MenuCategory = "All" | "Coffee" | "Tea" | "Snacks" | "Desserts";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: "Coffee" | "Tea" | "Snacks" | "Desserts";
  image: string;
  isVeg: boolean;
  badge?: string;
  isFeatured?: boolean;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  "All",
  "Coffee",
  "Tea",
  "Snacks",
  "Desserts",
];

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: 1,
    name: "Anand Signature Cold Brew",
    description:
      "18-hour slow steeped single-origin Arabica with natural caramel undertones and a splash of fresh cream.",
    price: "₹ 169",
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&h=450&fit=crop&q=80",
    isVeg: true,
    badge: "Signature Pick",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Velvet Café Latte",
    description:
      "Freshly pulled double-shot espresso layered with silky microfoam milk and delicate barista art.",
    price: "₹ 149",
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=450&fit=crop&q=80",
    isVeg: true,
  },
  {
    id: 3,
    name: "Roasted Hazelnut Cappuccino",
    description:
      "Classic dark roast espresso kissed with roasted hazelnut essence, dense froth, and Belgian cocoa powder.",
    price: "₹ 159",
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&h=450&fit=crop&q=80",
    isVeg: true,
    badge: "Bestseller",
  },
  {
    id: 4,
    name: "Belgian Dark Mocha Frappé",
    description:
      "Blended espresso milkshake with melted 70% dark Belgian chocolate, crowned with freshly whipped cream.",
    price: "₹ 189",
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=450&fit=crop&q=80",
    isVeg: true,
  },

  // TEA
  {
    id: 5,
    name: "Kadak Masala Chai",
    description:
      "Handcrafted Assam CTC tea leaves slow-simmered with crushed ginger, green cardamom, cloves, and whole milk.",
    price: "₹ 49",
    category: "Tea",
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&h=450&fit=crop&q=80",
    isVeg: true,
    badge: "Local Favourite",
    isFeatured: true,
  },
  {
    id: 6,
    name: "Kashmiri Saffron Kahwa",
    description:
      "Soothing whole-leaf green tea steeped with pure saffron strands, crushed almonds, cinnamon bark, and wild honey.",
    price: "₹ 99",
    category: "Tea",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&h=450&fit=crop&q=80",
    isVeg: true,
    badge: "Premium Herbal",
  },

  // SNACKS
  {
    id: 7,
    name: "Tandoori Paneer Tikka Sandwich",
    description:
      "Marinated grilled cottage cheese, bell peppers, melted mozzarella, and fresh mint chutney on toasted sourdough.",
    price: "₹ 179",
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=450&fit=crop&q=80",
    isVeg: true,
    badge: "Chef Special",
    isFeatured: true,
  },
  {
    id: 8,
    name: "Bombay Veg Club Supreme",
    description:
      "Triple-decker toasted sandwich loaded with spiced potato masala, beetroot, cucumber, cheddar cheese, and house mayo.",
    price: "₹ 199",
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600&h=450&fit=crop&q=80",
    isVeg: true,
  },
  {
    id: 9,
    name: "Crispy Peri-Peri Fries",
    description:
      "Hand-cut golden potato wedges tossed with fiery peri-peri herbs, served alongside our signature garlic dip.",
    price: "₹ 129",
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=450&fit=crop&q=80",
    isVeg: true,
  },
  {
    id: 10,
    name: "Chilli Cheese Toasties",
    description:
      "Artisan baguette slices toasted with a spicy blend of diced green chillies, coriander, and bubbling melted cheese.",
    price: "₹ 149",
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=450&fit=crop&q=80",
    isVeg: true,
  },

  // DESSERTS
  {
    id: 11,
    name: "Fudge Chocolate Brownie",
    description:
      "Dense, gooey dark chocolate brownie loaded with toasted walnuts, drizzled with warm chocolate ganache.",
    price: "₹ 139",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=450&fit=crop&q=80",
    isVeg: true,
    badge: "Bestseller",
  },
  {
    id: 12,
    name: "Lotus Biscoff Cheesecake",
    description:
      "Velvety smooth no-bake cheesecake layered over a crunchy spiced Biscoff biscuit crust with caramel glaze.",
    price: "₹ 199",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=450&fit=crop&q=80",
    isVeg: true,
    badge: "House Special",
    isFeatured: true,
  },
];

// ==========================================
// SIGNATURE SPECIAL HIGHLIGHT
// ==========================================
export const SIGNATURE_SPECIAL = {
  name: "Kesar Pista Iced Latte",
  tagline: "Signature Heritage Fusion",
  description:
    "An exclusive tribute to Anand: robust cold espresso poured over chilled whole milk, infused with aromatic saffron syrup, crushed Kashmiri pistachios, and a whisper of green cardamom.",
  price: "₹ 189",
  badge: "Chef's Signature Drink",
  image:
    "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&h=600&fit=crop&q=80",
  highlights: [
    "Steeped Pure Saffron",
    "Single-Origin Arabica",
    "Crushed Pistachio Dusting",
  ],
};

// ==========================================
// GALLERY IMAGES
// ==========================================
export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  caption: string;
  span?: string; // CSS grid span class
}

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop&q=80",
    alt: "Warm interior seating at Anand Café demo",
    title: "Cozy Dining Ambience",
    caption: "Warm natural wood and ambient pendant lighting designed for relaxed conversations.",
    span: "col-span-1 md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=450&fit=crop&q=80",
    alt: "Artisan latte art in ceramic cup",
    title: "Crafted Latte Art",
    caption: "Hand-poured microfoam designs atop freshly extracted espresso shots.",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=450&fit=crop&q=80",
    alt: "Spacious café study and seating tables",
    title: "Quiet Study Tables",
    caption: "Welcoming space for Vidyanagar students, freelancers, and book readers.",
  },
  {
    src: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&h=450&fit=crop&q=80",
    alt: "Freshly baked croissants and dessert display",
    title: "Artisanal Bakes Counter",
    caption: "Freshly baked morning pastries and delicate gourmet desserts made daily.",
  },
  {
    src: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&h=450&fit=crop&q=80",
    alt: "Outdoor garden patio seating area",
    title: "Veranda Garden Seating",
    caption: "Open-air breeze with lush green planters for evening coffee catch-ups.",
  },
  {
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=450&fit=crop&q=80",
    alt: "Skilled barista brewing specialty coffee",
    title: "Specialty Brewing",
    caption: "Careful temperature control and premium extraction for every single cup.",
  },
];

// ==========================================
// TESTIMONIAL DEMO (Fictional Sample Reviews)
// ==========================================
export interface Testimonial {
  id: number;
  author: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
  favouriteItem: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "Aarav Patel",
    role: "Engineering Student (BVM)",
    location: "Vallabh Vidyanagar",
    comment:
      "The quiet ambience and fast Wi-Fi make this our go-to spot near V.V. Nagar Circle. Their Masala Chai and Peri-Peri fries keep us energized through long exam study sessions.",
    rating: 5,
    favouriteItem: "Kadak Masala Chai",
  },
  {
    id: 2,
    author: "Pooja & Rohan Shah",
    role: "Local Residents",
    location: "Anand Town",
    comment:
      "A breath of fresh air in Anand! The warm cream decor feels sophisticated yet deeply welcoming. The Kesar Pista Iced Latte is an absolute must-try.",
    rating: 5,
    favouriteItem: "Kesar Pista Iced Latte",
  },
  {
    id: 3,
    author: "Dr. Mihir Trivedi",
    role: "University Professor",
    location: "S.P. University, Anand",
    comment:
      "Outstanding coffee quality and attentive hospitality. It has become my favourite place for quiet reading and weekend coffee catch-ups with colleagues.",
    rating: 5,
    favouriteItem: "Anand Signature Cold Brew",
  },
];

// ==========================================
// DEVELOPER PORTFOLIO CONTACT (REAL CONTACT)
// ==========================================
// This section is strictly separate from the fictional café demo info.
export const DEVELOPER_NAME = "Tilak Bhadani";
export const DEVELOPER_WHATSAPP_NUMBER = "+918469181118";
export const DEVELOPER_PHONE_DISPLAY = "+91 84691 81118";
export const DEVELOPER_LOCATION = "Anand / Vallabh Vidyanagar, Gujarat";

export const DEVELOPER_SERVICES = [
  {
    title: "Cafés & Bistros",
    description:
      "Mobile QR digital menus, ambience visual galleries, location directions, and instant customer WhatsApp ordering.",
    icon: "☕",
    features: ["Digital Menu Filter", "WhatsApp Quick Order", "Google Maps Directions"],
  },
  {
    title: "Restaurants & Diners",
    description:
      "Multi-course culinary showcases, chef specials, table reservation inquiries, operating hours, and customer reviews.",
    icon: "🍽️",
    features: ["Table Query Form", "Chef Highlights", "Mobile-First Design"],
  },
  {
    title: "Coaching Classes & Tutors",
    description:
      "Curriculum outlines, batch schedules, faculty profiles, fee structures, and quick student admission inquiry buttons.",
    icon: "📚",
    features: ["Batch Schedule Table", "Inquiry Form", "Course Catalogs"],
  },
  {
    title: "Salons, Boutiques & Local Retail",
    description:
      "Service catalogues with clear pricing, portfolio galleries, Google business reviews, and appointment booking via WhatsApp.",
    icon: "✂️",
    features: ["Service Rate Card", "Portfolio Grid", "Instant Appointment CTA"],
  },
];
