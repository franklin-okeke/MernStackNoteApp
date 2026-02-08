MERN Note App 📝

A full-stack MERN (MongoDB, Express, React/Next.js, Node.js) note-taking application with modern
features such as rate limiting, environment variable management, and cloud deployment. This project
demonstrates hands-on experience connecting a Next.js frontend with an Express backend, secure API
practices, and scalable architecture.

🚀 FEATURES
Full-stack architecture: Next.js frontend + Express.js backend

MongoDB integration: Stores notes with a flexible schema

RESTful API endpoints: Create, read, update, delete notes (CRUD)

Rate Limiting: Prevents API abuse using Redis as a caching layer

Environment Variables: Secure configuration using .env and .env.local

CORS Configured: Allows cross-origin requests from frontend in dev and production

Frontend Features:

Responsive UI with Tailwind CSS

Dynamic note rendering

Loading states and user notifications via react-hot-toast

PROJECT STRUCTURE
noteMern/
│
├─ client/              # Next.js frontend
│   ├─ pages/
│   ├─ components/
│   ├─ public/
│   └─ .env.local        # Frontend environment variables
│
├─ server/              # Express backend
│   ├─ routes/
│   ├─ controllers/
│   ├─ models/
│   ├─ config/
│   └─ .env             # Backend environment variables
│
├─ README.md
└─ package.json

⚙️ TECHNOLOGIES USED

Frontend: Next.js, React, Tailwind CSS, Axios, react-hot-toast

Backend: Node.js, Express.js, MongoDB, Mongoose

Caching/Rate Limiting: Redis (via Stash.com)

Deployment: Vercel (frontend), Render (backend)

Cloud Storage: Cloudinary (optional, for images)

🔗 DELOYMENT

Frontend: Vercel
Point to /client folder
Set NEXT_PUBLIC_API_URL to your deployed backend URL

Backend: Render
Point to /server folder
Set environment variables (MONGO_URI, REDIS_URL)
CORS: Make sure backend allows frontend URL:

🌟 Highlights & Skills Demonstrated

Full-stack development with Next.js and Express
Secure environment management for dev and production
Rate limiting using Redis to prevent abuse
Integration with MongoDB database
Handling CORS issues between frontend and backend
Cloud deployment on Vercel and Render
Optional image upload and storage using Cloudinary

📝 Future Improvements
User authentication & JWT-based sessions
Pagination and search for notes
Dark/light mode toggle
Enhanced caching for API responses
File uploads for attachments with Cloudinary

🔗 Live Demo
Frontend (Vercel): https://note-app-backend-xhoz.onrender.com
Backend (Render): https://note-app-backend-xhoz.onrender.com

Deployment Ready: Frontend deployed on Vercel, backend on Render (or any cloud provider)

Cloud Storage (Optional): Supports storing images in Cloudinary
