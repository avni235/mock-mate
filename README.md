
# MockMate 🎙️

**MockMate** is a fullstack mock interview platform built using **Next.js**, **PostgreSQL**, and **Tailwind CSS**. It simulates real-world interview experiences using AI-generated questions, tracks user progress, and provides an interactive, secure environment for self-evaluation.

---

## 📸 Preview

![MockMate Preview](public/web2.jpg)

---

## 🚀 Features

- 🔒 **Authentication** — Secure login system
- 🧠 **AI-Driven Questions** — Dynamically generated based on role and skill
- 📈 **Progress Tracking** — Analyze and review past interview attempts
- ⚙️ **Fully Responsive UI** — Built with Tailwind CSS
- 🧩 **Modular Architecture** — Clean, scalable file structure
- 🌐 **Deployed on Vercel**

---

## 🧱 Tech Stack

| Layer       | Tech                     |
|-------------|--------------------------|
| **Frontend**| Next.js, Tailwind CSS    |
| **Backend** | Next.js API Routes       |
| **Database**| PostgreSQL               |
| **ORM**     | Drizzle 
| **Hosting** | Vercel, Neon (DB)        |

---

## 📂 Project Structure

```
mockmate/
├── app/ or pages/       # Next.js routes
├── components/          # Reusable UI components
├── lib/                 # Helpers, utils, DB config
├── prisma/              # Prisma schema (if used)
├── styles/              # Tailwind configs / globals
├── public/              # Static assets
└── .env                 # Environment variables
```

---

## 🛠️ Local Setup

```bash
# Clone the repo
git clone https://github.com/avni235/mock-mate.git
cd mock-mate

# Install dependencies
npm install

# Create a .env file and add DB URL, etc.
cp .env.example .env

# Run locally
npm run dev
```

---

## 🧪 Environment Variables (example)

```env
DATABASE_URL=postgresql://username:password@host:port/dbname
NEXTAUTH_SECRET=your-secret-key
OPENAI_API_KEY=your-openai-api-key
```

---

## 🔗 Live Demo

👉 [https://mock-mate-ten.vercel.app](https://mock-mate-ten.vercel.app)

---


## 🤝 About the Creator

Hi! I'm **Avneet Kaur**, a full-stack developer passionate about building useful tools with Next.js, PostgreSQL, and AI.  
Feel free to connect with me:

- 🌐 [Portfolio](https://avneet-kaur.framer.website)
- 💼 [LinkedIn](https://linkedin.com/in/avneet-kaur2)

---
