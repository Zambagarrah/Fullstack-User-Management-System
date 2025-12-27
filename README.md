# Fullstack User Management System

A modular fullstack user management app built with React, Vite, Django, and JWT. Includes protected routes, user profiles, and admin dashboard functionality.

---

## 🌐 Live Demo

> _[]_

---

## Features

- ✅ User Registration / Login / Logout
- 🔐 JWT Authentication (access + refresh) via SimpleJWT
- 🧑‍💼 User Profile: View + Edit email / password
- 🛡️ Admin Panel: View, Edit, Delete Users
- 🚫 Protected Routes (both frontend + backend)
- 🎨 Responsive UI with Bootstrap 5
- 🔔 Feedback via `react-toastify` alerts and `react-loading-skeleton` loaders.

---

## 🧰 Tech Stack


| Layer         | Tools Used                          |
|--------------|--------------------------------------|
| Frontend      | React + Vite + Yarn + Bootstrap 5    |
| Backend       | Django + Django REST Framework       |
| Authentication| JWT via djangorestframework-simplejwt |
| API Handling  | Axios with token interceptor         |
| Database      | SQLite (default, swappable)          |


---

## ⚙️ Local Development Setup

### 1️⃣ Clone the Repo

```
git clone https://github.com/zablon/fullstack-user-mgmt.git
```

### 2️⃣ Backend Setup
```
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
### 3️⃣ Frontend Setup
```
cd frontend
yarn
yarn dev
```

## 🛠 Deployment Notes
- 🔒 Use `.env` files for JWT secrets, DB config, and API URLs

- ☁️ Frontend: Vercel / Netlify

- 🔙 Backend: Render / Railway (or Docker for containerization)

- 📁 Optional: Add `/docs/index.md` with architectural diagrams and API maps

## 🧠 Author & Vision

Crafted by Zablon; builder, educator, and architect of reproducible fullstack apps. Every feature is modular, every commit is documented, and the entire codebase is designed to scale, teach, and impress.
