# 🌟 Personal Portfolio with REST APIs

## �� Project Title & Description
**Dynamic Developer Portfolio (FastAPI + Next.js)**  

This project is a **personal portfolio web application** powered by a **FastAPI backend** and a **Next.js frontend**.  
Unlike a static portfolio, this setup exposes **REST APIs** for projects, blog posts, and contact messages, making it more dynamic, scalable, and professional.  

**Why it matters:**  
- Provides a **real-world full-stack example** of building and consuming APIs.  
- Demonstrates backend + frontend integration skills.  
- Serves as my professional portfolio to showcase my **skills, projects, and experience**.  

---

## 🛠️ Tech Stack
### 🔹 Backend (API)
- **FastAPI** – REST API framework  
- **SQLAlchemy** – ORM for database operations  
- **SQLite / PostgreSQL** – database  
- **Pydantic** – data validation  
- **Uvicorn** – ASGI server  

### 🔹 Frontend (Client)
- **Next.js (React)** – frontend framework  
- **TailwindCSS** – styling  
- **Axios** – API requests  
- **Framer Motion** – animations  

### 🔹 Testing & Deployment
- **Backend Tests:** Pytest (unit + integration)  
- **Frontend Tests:** Jest + React Testing Library  
- **Deployment:**  
  - Backend → Render / Railway / DigitalOcean  
  - Frontend → Vercel  

---

## 🧠 AI Integration Strategy
AI will be used thoughtfully throughout development:

### 🔹 Code Generation
- Scaffold FastAPI routers (`/projects`, `/blog`, `/contact`) with AI assistance.  
- Generate Next.js pages and reusable components with Tailwind styling.  
- Auto-generate TypeScript interfaces from OpenAPI schema.  

### 🔹 Testing
- Use AI to generate unit tests for FastAPI endpoints.  
- Create integration tests for frontend API calls.  
- Apply schema-aware prompts to ensure consistency with OpenAPI.  

### 🔹 Documentation
- Auto-generate API docs (Swagger UI from FastAPI).  
- AI-written **docstrings, inline comments, commit messages, PR summaries, and release notes**.  
- Maintain up-to-date README with AI-assisted summaries.  

### 🔹 Context-Aware Techniques
- Feed **OpenAPI schema** into AI to keep backend + frontend aligned.  
- Provide **file trees & diffs** for AI-powered PR reviews (CodeRabbit).  
- AI-assisted refactoring for accessibility & performance.  

---

## 📊 API Endpoints (Backend)
| Method | Endpoint       | Description                     |
|--------|---------------|---------------------------------|
| GET    | `/projects`   | Fetch list of portfolio projects |
| GET    | `/blog`       | Fetch blog posts / articles      |
| POST   | `/contact`    | Submit contact form              |
| GET    | `/`           | API health check                 |

---

## 🎯 Features
- 📖 **About Me** – introduction & skills.  
- 💼 **Projects** – served dynamically from REST API.  
- 📝 **Blog** – optional section for reflections or tutorials.  
- 📬 **Contact Form** – submits messages to API (stored in DB).  
- 🎨 **Responsive UI** – mobile-friendly, Tailwind + animations.  
- 🌙 **Dark Mode Toggle** (optional).  

---

## 🚀 Deployment Plan
1. **Backend**  
   - Run locally:  
     ```bash
     cd backend
     uvicorn app.main:app --reload
     ```  
   - Deploy to **Render/Railway/DigitalOcean**.  

2. **Frontend**  
   - Run locally:  
     ```bash
     cd frontend
     npm run dev
     ```  
   - Deploy to **Vercel** (connected to GitHub).  

3. **Integration**  
   - Frontend consumes backend API (set `NEXT_PUBLIC_API_URL`).  
   - CI/CD auto-deploys on push.  

---

## ✅ Deliverables
1. **Planning:** This README.md (project plan).  
2. **Build & Review:** FastAPI backend + Next.js frontend, with AI-assisted commits, reviews, and tests.  
3. **Showcase:**  
   - Final deployed portfolio (frontend + backend).  
   - Walkthrough demo (video or docs).  
   - Reflection file on AI-assisted development.  

---

## 👨‍💻 Author
**Brian Kyalo**  
- Backend Developer
- Specialized in the **PRIME Stack** (Python, REST APIs, Interactive Databases, Microservices, Engineering).  
- Passionate about building impactful solutions with AI and open-source. 

