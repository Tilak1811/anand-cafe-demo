# Anand Cafe Demo ☕

A premium, modern, interactive café website demo designed for client pitches to local café, restaurant, and business owners in **Anand and Vallabh Vidyanagar, Gujarat, India**.

> **Note**: This is a portfolio demonstration website. All business details, prices, contact information, and customer reviews are fictional samples for demonstration purposes.

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
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with custom warm espresso & caramel theme
- **Typography**: Google Fonts (`Playfair Display` for serif headings & `Lato` for body text)
- **Icons**: Accessible inline SVGs and Unicode icons (zero heavy icon dependencies)
- **Images**: Next.js optimized `<Image />` with Unsplash imagery
- **Deployment**: [Vercel](https://vercel.com)

---

## 📁 Project Structure

```text
tulsi-cafe/
├── src/
│   ├── app/
│   │   ├── globals.css           # Tailwind v4 theme, font variables & responsive styling
│   │   ├── layout.tsx            # Root layout with fonts & SEO metadata
│   │   └── page.tsx              # Home page assembling all sections
│   ├── components/
│   │   ├── DemoBanner.tsx        # Top demo disclaimer bar
│   │   ├── Navbar.tsx            # Sticky navbar with mobile hamburger & dual CTAs
│   │   ├── Hero.tsx              # Hero section with high-contrast ambience & hours chip
│   │   ├── Menu.tsx              # Interactive category tabs (Coffee, Tea, Snacks, Desserts)
│   │   ├── SignatureSpecial.tsx  # Editorial spotlight on Kesar Pista Iced Latte
│   │   ├── About.tsx             # Editorial story & brand pillars (V.V. Nagar)
│   │   ├── Gallery.tsx           # Asymmetric grid with interactive Lightbox modal
│   │   ├── Testimonials.tsx      # Transparent customer experience showcase (demo)
│   │   ├── Contact.tsx           # Direct call, WhatsApp, directions & opening hours
│   │   ├── PitchSection.tsx      # "Want a Website Like This?" with 4 business services
│   │   ├── Footer.tsx            # Brand info, quick links, and developer credit
│   │   └── WhatsAppButton.tsx    # Floating quick-chat WhatsApp demo button
│   └── lib/
│       └── constants.ts          # Central configuration file for all café & developer data
├── next.config.ts                # Remote image domains & Turbopack config
├── package.json
└── tsconfig.json
```

---

## ⚙️ Customizing for Client Pitches

All text, prices, links, and contact details are centralized in **[`src/lib/constants.ts`](./src/lib/constants.ts)**:

- **Café Name & Tagline**: Change `CAFE_NAME`, `CAFE_TAGLINE`, `CAFE_SUBTITLE`, and `CAFE_DESCRIPTION`
- **Menu Items & Categories**: Add, edit, or adjust items in `MENU_ITEMS` (includes `category`, `price`, `isVeg`, `badge`, and `image`)
- **Signature Special**: Customize `SIGNATURE_SPECIAL` with your client's hero dish or drink
- **Gallery**: Update images in `GALLERY_IMAGES`
- **Reviews**: Update sample testimonials in `TESTIMONIALS`
- **Café Contact**: Update `PHONE_NUMBER`, `EMAIL`, `ADDRESS`, and `OPENING_HOURS`
- **Developer Services**: Update `DEVELOPER_WHATSAPP_NUMBER` and `DEVELOPER_SERVICES`

---

## 🚢 Deploying to Vercel

When you are ready to update the live Vercel deployment:

```bash
# Stage and commit your changes
git add .
git commit -m "Upgrade café demo with interactive menu, signature special, gallery lightbox, and testimonials"

# Push to GitHub
git push origin main
```

Vercel will automatically detect the commit on `main` and trigger a production deployment.

---

## 🧪 Available Scripts

Inside the `tulsi-cafe` folder:

- `npm run dev`: Starts local development server on port 3000
- `npm run build`: Generates optimized production build
- `npm run start`: Runs the production server
- `npm run lint`: Runs ESLint validation
- `npx tsc --noEmit`: Checks TypeScript types
