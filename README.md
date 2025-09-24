# Tot per Fira - Event Equipment Rental & Organization Platform

A modern and responsive web application for **Tot per Fira**, a company specialized in sound equipment rental, freezers, beverage supply, and complete event organization in Onda, Castellón, Spain.

## 🌟 Key Features

### 🎯 Core Functionality
- **Custom Budget System**: Intuitive multi-step form for requesting quotes
- **Complete Product Catalog**: Management of sound equipment, freezers, beverages, and additional services
- **Responsive Design**: Optimized for mobile and desktop devices
- **Admin Panel**: Order management and budget consultation
- **Secure Authentication**: Login system for administrators

### 🎨 User Experience
- **Modern UI**: Attractive design with visual effects (fireworks, confetti)
- **Intuitive Navigation**: Step-by-step form with shopping cart
- **Visual Feedback**: Availability indicators and real-time notifications
- **Accessibility**: Mobile-first design optimized for all devices

### 📋 Service Management
- **Sound Equipment**: Systems from 500W to 6,000W
- **Refrigeration**: Freezers and ice supply
- **Beverages**: Complete catalog of alcoholic and non-alcoholic drinks
- **Additional Services**: Cleaning packs, tableware, and specialized staff

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion) and custom CSS effects

### Backend & Database
- **API**: tRPC for type-safe communication
- **Database**: Turso (SQLite) with Drizzle ORM
- **Authentication**: Better Auth
- **Validation**: Zod schemas

### Development Tools
- **Monorepo**: Turborepo for workspace management
- **Package Manager**: pnpm
- **Linting**: ESLint with Next.js configuration
- **Deployment**: Docker with docker-compose for Dokploy

## 🚀 Installation & Development

### Prerequisites
- Node.js 18+ 
- pnpm 8+

### Local Setup

```bash
# Clone the repository
git clone <repository-url>
cd tot-per-fira-app

# Install dependencies
pnpm install

# Configure environment variables
cp apps/web/.env.example apps/web/.env.local
# Edit the necessary environment variables

# Run in development mode
pnpm dev

# The application will be available at:
# Web: http://localhost:3001
```

### Available Scripts

```bash
# Development
pnpm dev              # Run the entire application
pnpm dev:web          # Web application only
pnpm dev:server       # Server only

# Build
pnpm build            # Build the entire application
pnpm check-types      # Verify TypeScript types

# Database
pnpm db:push          # Sync schema with database
pnpm db:studio        # Open Drizzle Studio
pnpm db:generate      # Generate migrations
```

## 📁 Project Structure

```
tot-per-fira-app/
├── apps/
│   ├── web/                      # Main Next.js application
│   │   ├── src/
│   │   │   ├── app/              # Next.js App Router
│   │   │   │   ├── _components/  # Landing page components
│   │   │   │   ├── admin/        # Admin panel
│   │   │   │   ├── fira-onda/    # Fira d'Onda specific page
│   │   │   │   └── solicitar-presupuesto/ # Budget system
│   │   │   ├── components/       # Reusable components
│   │   │   │   ├── presupuesto/  # Form components
│   │   │   │   └── ui/           # Design system
│   │   │   ├── data/             # Product catalog
│   │   │   ├── lib/              # Utilities and configuration
│   │   │   └── types/            # TypeScript definitions
│   │   └── public/               # Static assets
│   └── server/                   # tRPC server (future development)
├── docker-compose.yml            # Dokploy configuration
└── package.json                  # Monorepo configuration
```

## 🎨 Design Features

### Consistent Design System
- **Typography**: Clash Display and Khand for visual hierarchy
- **Colors**: Corporate palette with custom CSS variables
- **Components**: System based on shadcn/ui with custom styling
- **Iconography**: Lucide icons for visual consistency

### Visual Effects
- **Fireworks**: For the Fira d'Onda page
- **Confetti**: Celebrations on confirmations
- **Animations**: Smooth transitions and micro-interactions

### Mobile-First
- Fully responsive design
- Optimized for touch experience
- Adaptive menus and intuitive navigation

## 🔧 Highlighted Features

### Budget System
1. **Contact Information**: Customer and group data
2. **Equipment Selection**: Sound systems of different powers
3. **Refrigeration**: Freezers and ice
4. **Beverages**: Complete catalog with prices
5. **Additional Services**: Cleaning and tableware packs
6. **Summary & Submission**: Confirmation and processing

### Admin Panel
- Consultation of submitted budgets
- Order management
- Secure authentication system

### SEO & Performance
- Optimized metadata for SEO
- Structured data (Schema.org)
- Image optimization
- Optimized Core Web Vitals

## 🚀 Deployment

The application is configured for deployment with **Dokploy** using Docker:

```bash
# Build and deploy
docker-compose up -d
```

The `docker-compose.yml` file includes the necessary configuration for production deployment.

## 📄 License

**Non-Commercial Use** - This project is developed exclusively for portfolio and demonstration purposes.

**Restrictions:**
- ❌ Commercial use not permitted
- ❌ Redistribution not allowed
- ❌ Commercial modification not permitted
- ✅ Allowed for portfolio viewing and evaluation

All rights reserved. Content, design, and functionality are property of their respective authors and are protected by copyright.

## 👤 Development

This project has been developed as a demonstration of skills in:
- Full-Stack Development with TypeScript
- Modern architecture with Next.js and tRPC
- Responsive and accessible UI/UX design
- State management and complex forms
- SEO optimization and performance
- DevOps with Docker and modern tools

---

**Note**: This README documents only the main web application. The tRPC server is under development for future advanced functionalities.
