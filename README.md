# 🧭 Next.js Rendering Modes Demo — Pages Router & App Router

This project demonstrates **all 4 major rendering strategies** in **Next.js**, implemented in **both the Pages Router** (legacy) and the **App Router** (Next.js 13+).  
It’s a great reference for understanding how **CSR, SSR, SSG, and ISR** work in both systems.

## 🚀 Features

- ✅ Client-Side Rendering (CSR)
- ✅ Server-Side Rendering (SSR)
- ✅ Static Site Generation (SSG)
- ✅ Incremental Static Regeneration (ISR)
- 💅 Styled with Tailwind CSS
- 🧱 Implemented in **both Pages & App Router**

## 🗂️ Folder Structure

```bash
next-render-demo/
│
├── app/ # ⚡ Next.js App Router (13+)
│ ├── layout.tsx # Shared layout for App Router
│ ├── page.tsx # App Router Home
│ ├── csr/page.tsx # Client-Side Rendering example
│ ├── ssr/page.tsx # Server-Side Rendering example
│ ├── ssg/page.tsx # Static Site Generation example
│ ├── isr/page.tsx # Incremental Static Regeneration example
│ └── api/time/route.ts # API route for App Router CSR
│
├── pages/ # 🧱 Classic Pages Router
│ ├── api/time.ts # API route for CSR (Pages Router)
│ ├── csr.tsx # Client-Side Rendering
│ ├── ssr.tsx # Server-Side Rendering
│ ├── ssg.tsx # Static Site Generation
│ ├── isr.tsx # Incremental Static Regeneration
│ └── index.tsx # Home for Pages Router
│
├── styles/
│ └── globals.css # Tailwind base styles
│
├── public/
├── tailwind.config.js
├── postcss.config.mjs
├── package.json
└── README.md
```

## ⚙️ Installation

```bash
git clone https://github.com/your-username/next-render-demo.git
cd next-render-demo
npm install
npm run dev
```

## 🌐 Rendering Examples

### 🧩 1. Client-Side Rendering (CSR)

**Paths:**
- `/csr` (App Router)
- `/csr` (Pages Router)

🧠 Data fetched **on the client** via `useEffect`.  
No pre-rendered HTML.  
👉 *View Source (`Ctrl + U`) → time not visible.*

---

### ⚡ 2. Server-Side Rendering (SSR)

**Paths:**
- `/ssr` (App Router)
- `/ssr` (Pages Router)

Data fetched **on each request** from the server.  
👉 *View Source → current time visible.*

---

### 📦 3. Static Site Generation (SSG)

**Paths:**
- `/ssg` (App Router)
- `/ssg` (Pages Router)

Page generated **at build time** and never changes until the next build.  
👉 *Same time always, even after refresh.*

---

### 🔄 4. Incremental Static Regeneration (ISR)

**Paths:**
- `/isr` (App Router)
- `/isr` (Pages Router)

Static page that **regenerates every 10 seconds**.

- Refresh before 10s → same time  
- Refresh after 10s → updated time (regenerated in background)


## 🧠 Tech Stack

- **Next.js 14+**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **App Router + Pages Router**

## 📜 License

This project is open-source under the **MIT License**.


## ✨ About

This repository demonstrates and compares **rendering models** in both:

- 🧱 The **Pages Router (Next.js legacy)**
- ⚡ The **App Router (Next.js 13+)**

It’s designed as a **hands-on educational tool** for developers learning how Next.js handles **CSR, SSR, SSG, and ISR** under the hood.
