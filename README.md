# AuraICS

AuraICS is the comprehensive school management platform for the Aura International Christian School. It's a modern, full-stack web application built on Next.js and Supabase, designed to streamline operations and enhance communication between the school, parents, and students. The platform features a public-facing website, a secure parent portal, and a powerful administrative dashboard.

## Architecture Overview

The platform is built on a scalable and modern architecture, leveraging serverless functions, a robust database system, and a feature-rich frontend. The system is divided into three primary user-facing applications, all served from a single Next.js codebase.

*   **Public Website (`/`)**: A static, performant marketing site for prospective parents and visitors. It includes pages for about, academics, admissions, and contact information.
*   **Parent Portal (`/portal`)**: A secure, authenticated application for parents to view their child's academic progress, attendance records, communicate with teachers, and schedule conferences. It features real-time updates for messaging and notifications.
*   **Admin Dashboard (`/admin`)**: A role-based access control (RBAC) zone for school administrators and teachers. It provides tools for managing students, grades, attendance, payments, school-wide notices, and system settings.

## Tech Stack

*   **Framework**: Next.js 14 (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS
*   **Deployment**: Vercel
*   **Transactional Emails**: Resend
*   **Payments**: Pesapal / Flutterwave

## Project Structure

The repository is organized as a monorepo containing the entire Next.js application, database schema, and configuration.

```bash
aics-website/
├── public/                         # Static assets served at /
│   ├── images/
│   ├── favicon.ico
│   ├── manifest.json             # PWA config
│   ├── robots.txt                # Disallow /portal and /admin
│   └── sitemap.xml
│
├── emails/                         # Email templates using React Email
│   ├── EnquiryConfirmation.tsx
│   ├── PortalInvitation.tsx
│   └── PaymentReceipt.tsx
│
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── (public)/              # Marketing pages
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── about/page.tsx
│   │   │   └── ...
│   │   │
│   │   ├── (portal)/              # Parent portal (authenticated)
│   │   │   ├── layout.tsx
│   │   │   └── portal/
│   │   │       ├── page.tsx
│   │   │       ├── grades/page.tsx
│   │   │       └── ...
│   │   │
│   │   ├── (admin)/               # Admin dashboard (authenticated, role-based)
│   │   │   ├── layout.tsx
│   │   │   └── admin/
│   │   │       ├── page.tsx
│   │   │       ├── students/page.tsx
│   │   │       └── ...
│   │   │
│   │   ├── api/                   # API Route handlers
│   │   │   ├── enquiry/route.ts
│   │   │   ├── payments/webhook/route.ts
│   │   │   └── ...
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── not-found.tsx
│   │
│   ├── components/               # Shared React components (UI, layout)
│   ├── lib/                      # Utilities & core services (Prisma client, Supabase helpers)
│   ├── hooks/                    # Custom React hooks (e.g., for data fetching)
│   ├── actions/                  # Server Actions for mutations
│   └── middleware.ts             # Authentication & authorization guard
│
├── .env.example                  # Environment variable template
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```
