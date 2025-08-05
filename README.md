![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen)
![Express](https://img.shields.io/badge/Express-5.1.0-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)
![MIT License](https://img.shields.io/badge/license-MIT-blue)

![REST API Starter - Minimal Banner](https://img.shields.io/badge/REST%20API%20Starter-%20Node.js%20%7C%20Express%20%7C%20MongoDB-blueviolet?style=for-the-badge&logo=node.js)

## 🚀 REST API Starter
** Jumpstart your next project with a modern, secure, and production-ready REST API boilerplate.**

Built for speed, learning, and real-world use.
- 🚀 No more boilerplate headache: Authentication, CRUD, modular structure, all ready-to-go.
- 🧑‍💻 Perfect for hackathons, startups, tutorials, and open source.
- 🌎 Deploy to the cloud, demo for your team, or learn best practices by example.

Give your next Node.js API a professional foundation—with one git clone.

---

## 🧑‍💻 About
A modern, beginner-friendly REST API boilerplate for Node.js.
Features user authentication with JWT, modular project structure, clean code, and MongoDB integration.
Ideal for building scalable APIs, learning backend best practices, or starting a new project!

---

## ✨ Features

- User authentication (register/login) with JWT
- Modular structure: controllers, models, routes, middlewares
- Sample protected resource CRUD (Posts)
- Centralized error handling
- MongoDB with Mongoose (ready for cloud or local)
- ESLint + Prettier for code quality
- .env.example included for easy setup

---

## 🛠️ Tech Stack

- Node.js, Express
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- ESLint & Prettier
- dotenv

---

## 🚀 Getting Started

1. Clone the repo:
```
git clone https://github.com/Yasir-Rafique/rest-api-starter.git
cd rest-api-starter
```

2. Install dependencies:
```
npm install
```

3. Configure environment variables:

- Copy .env.example to .env
- Fill in your values (see comments in file)

4. Start MongoDB:

- Use [MongoDB Atlas](https://www.mongodb.com/atlas) (recommended!) or local MongoDB

5. Run the server:
```
npm run dev
```

- Your server runs on http://localhost:5000 by default

---

## 🛡️ API Endpoints

Auth
- POST /api/auth/register — Register a new user
- POST /api/auth/login — Log in and get JWT token
- GET /api/auth/me — Get current user (protected)

Posts (all require JWT in Authorization: Bearer <token>)

- POST /api/posts — Create post
- GET /api/posts — List all your posts
- GET /api/posts/:id — Get a specific post
- PUT /api/posts/:id — Update your post
- DELETE /api/posts/:id — Delete your post

---

## 📬 Example Requests

Register
```
POST /api/auth/register
{
  "name": "Your Name",
  "email": "your@email.com",
  "password": "yourpassword"
}
```

Login
```
POST /api/auth/login
{
  "email": "your@email.com",
  "password": "yourpassword"
}
```

Copy the token from login and use it in protected routes:
`Authorization: Bearer <token>`

---

📝 Contributing

- Fork the repo
- Create a new branch (git checkout -b feature/your-feature)
- Commit your changes (git commit -am 'Add something')
- Push to the branch (git push origin feature/your-feature)
- Open a Pull Request

---

⭐ Like this project?
Give it a star!
Sharing and feedback are appreciated.

---

🪪 License
MIT — see LICENSE for details.

---



