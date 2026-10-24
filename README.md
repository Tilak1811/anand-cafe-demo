# Anand Cafe Demo ☕

A premium, modern, mobile-responsive café website demo designed for client pitches to local café and restaurant owners in **Anand, Gujarat, India**.

> **Note**: This is a portfolio demonstration website. All business details, prices, contact information, and imagery are fictional samples for demonstration purposes.

---

## 🚀 Quick Start (Running Locally)

To launch the website on your local machine:

```bash
# 1. Navigate to the project directory
cd tulsi-cafe

# 2. Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with custom warm theme
- **Typography**: Google Fonts (`Playfair Display` for serif headings & `Lato` for body text)
- **Icons**: Accessible inline SVGs (no heavy icon libraries needed)
- **Images**: Next.js optimized `<Image />` with Unsplash imagery

---

## 📁 Project Structure

```text
tulsi-cafe/
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4 theme, font variables & styling
│   │   ├── layout.tsx          # Root layout with fonts & SEO metadata
│   │   └── page.tsx            # Home page assembling all sections
│   ├── components/
│   │   ├── DemoBanner.tsx      # Top demo disclaimer bar
│   │   ├── Navbar.tsx          # Responsive navbar with mobile hamburger menu
│   │   ├── Hero.tsx            # Hero section with call-to-actions
│   │   ├── Menu.tsx            # 6 featured items with sample pricing
│   │   ├── About.tsx           # Story section with imagery & sample stats
│   │   ├── Gallery.tsx         # 6-item responsive image grid with hover effects
│   │   ├── Contact.tsx         # Address (Anand, Gujarat), hours & directions
│   │   ├── Footer.tsx          # Branding, quick links, copyright & demo note
│   │   └── WhatsAppButton.tsx  # Floating quick-chat WhatsApp button
│   └── lib/
│       └── constants.ts        # Central configuration file for all café data
├── next.config.ts              # Remote image domains & Turbopack config
├── package.json
└── tsconfig.json
```

---

## ⚙️ Customizing for Client Pitches

All text, prices, links, and contact details are centralized in **[`src/lib/constants.ts`](./src/lib/constants.ts)**:

- **Café Name & Tagline**: Change `CAFE_NAME`, `CAFE_TAGLINE`, and `CAFE_DESCRIPTION`
- **WhatsApp Button**: Update `WHATSAPP_NUMBER` with the client's business phone number
- **Contact Details**: Update `PHONE_NUMBER`, `EMAIL`, and `ADDRESS` (pre-configured for Anand, Gujarat)
- **Menu Items**: Add, edit, or adjust items in `MENU_ITEMS`
- **Gallery**: Swap images in `GALLERY_IMAGES`
- **Google Maps**: Update `GOOGLE_MAPS_URL` with the client's actual Google Maps link

---

## 🧪 Available Scripts

Inside the `tulsi-cafe` folder:

- `npm run dev`: Starts local development server on port 3000
- `npm run build`: Generates optimized production build
- `npm run start`: Runs the production server
- `npm run lint`: Runs ESLint validation
- `npx tsc --noEmit`: Checks TypeScript types
