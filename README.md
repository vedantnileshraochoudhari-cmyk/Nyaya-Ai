# Nyaya AI – Legal Intelligence Platform

Nyaya AI is an AI-powered legal intelligence platform that provides legal analysis across multiple jurisdictions such as **India, UK, UAE, and KSA**.

The system integrates a **FastAPI backend** with a **React + Vite frontend** to provide legal analysis, procedural steps, and statutory references for legal queries.

---

# Project Structure

This repository contains two main components:

```
Nyaya-Ai
│
├── backend      → FastAPI backend (API + legal intelligence engine)
├── frontend     → React + Vite frontend (user interface)
└── README.md
```

---

# System Architecture

```
User (Browser)
      │
      ▼
Frontend (React + Vite)
      │
      ▼
Backend API (FastAPI)
      │
      ▼
Legal Intelligence Engine
(BM25 search + statutes + procedures)
```

The frontend communicates with the backend API to generate legal analysis for user queries.

---

# Prerequisites

Before running the project locally, install the following:

* Python **3.10 or higher**
* Node.js **18 or higher**
* npm
* Git

---

# Backend Setup

Open a terminal and navigate to the backend folder:

```
cd backend
```

Create a virtual environment:

```
python -m venv venv
```

Activate the environment (Windows):

```
venv\Scripts\Activate.ps1
```

Install dependencies:

```
pip install -r requirements.txt
```

Start the backend server:

```
uvicorn api.main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

API documentation is available at:

```
http://127.0.0.1:8000/docs
```

---

# Frontend Setup

Open another terminal and navigate to the frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start the frontend development server:

```
npm run dev
```

Frontend will run at:

```
http://localhost:3000
```

---

# Running the Integrated System

1. Start the backend server.
2. Start the frontend server.
3. Open the browser and go to:

```
http://localhost:3000
```

4. Click **Continue as Guest**.
5. Enter a legal query.

Example query:

```
How to remove tenant in India?
```

The system will generate:

* Legal analysis
* Applicable statutes
* Procedural steps
* Available remedies
* Enforcement decision

---

# Features

* Multi-jurisdiction legal analysis
* Legal statute retrieval
* Procedural guidance
* Case timeline generation
* Legal glossary
* AI-assisted legal reasoning

---

# Technologies Used

Frontend:

* React
* Vite

Backend:

* FastAPI
* Python

Legal Intelligence Engine:

* BM25 search
* Legal statute database
* Procedural datasets

---

