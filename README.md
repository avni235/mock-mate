
# MockMate 🎙️

**MockMate** is a fullstack mock interview platform built using **Next.js**, **PostgreSQL**, and **Tailwind CSS**. It simulates real-world interview experiences using AI-generated questions, tracks user progress, and provides an interactive, secure environment for self-evaluation.

---

## 📸 Preview

![MockMate Preview](public/web2.jpg)

---

## 🚀 Features

- 🔒 **Authentication** — Secure login system (Sign In / Sign Up)
- 🧠 **AI-Driven Questions** — Dynamically generated based on role and skill
- 📸 **Camera Access & Recording** — Records user answers using webcam and stores sessions for review
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
app/
├── (auth)/                  # Route group for authentication
│   ├── sign-in/             # Custom Sign-In logic via Clerk
│   │   └── [[...sign-in]]/page.jsx
│   └── sign-up/             # Custom Sign-Up route
│       └── [[...sign-up]]/page.jsx
│
├── dashboard/               # Main user dashboard after login
│   ├── _components/         # Reusable UI modules in dashboard
│   │   ├── AddNewInterview.jsx    
│   │   ├── Banner.jsx              
│   │   ├── Header.jsx              
│   │   ├── InterviewItemCard.jsx  
│   │   ├── InterviewList.jsx      
│   │   └── SliderText.jsx         
│
├── about-us/               # Static page with about section
│   └── page.jsx
│
├── faqs/                   # Frequently Asked Questions page
│   └── page.jsx
│
├── interview/[interviewId]/     # Dynamic route: Handles individual interview sessions
│   ├── start/                   # Interview Start Page
│   │   ├── _components/         
│   │   └── page.jsx             
│   ├── feedback/                # Post-interview feedback/results
│   │   └── page.jsx             
│   └── page.jsx                 
│
├── layout.jsx              # Root layout (wraps pages, defines global structure)
├── page.jsx                # Home page (landing or redirect)

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
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Database
NEXT_PUBLIC_DATABASE_URL=postgresql://username:password@host:port/dbname

# Gemini AI (Google AI) Key
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key

# UI Text Customization
NEXT_PUBLIC_INFORMATION='Enable video web cam and microphone to start your AI Generated Mock interview. It has 5 questions which you can answer and at the last you will get the report on the basis of your answers. NOTE: We never record your video, Web cam access you can disable it at any time if you want.'
NEXT_PUBLIC_QUESTION_NOTE='Click on record answer when you want to answer the question. At the end of the interview we will give you the feedback along with correct answer for each of question and your answer to compare it.'
```

---

## 🔗 Live Demo

👉 [https://mock-mate-ten.vercel.app](https://mock-mate-ten.vercel.app)

---


## 🤝 About the Creator

Hi! I’m **Avneet Kaur**, a passionate full-stack developer and Fourth-year Computer Science student. I enjoy building modern, user-friendly web applications using technologies like **React**, **Next.js**, **Node.js**, and **PostgreSQL**. I'm also exploring the exciting world of **AI/ML** and love working on projects that solve real-world problems. I believe in continuous learning and enjoy collaborating on innovative ideas. Currently open to internship opportunities and tech collaborations.
 
Feel free to connect with me:

- 🌐 [Portfolio](https://avneet-kaur.framer.website)
- 💼 [LinkedIn](https://linkedin.com/in/avneet-kaur2)

---
