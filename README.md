# 🏦 Banking System – MERN Stack Project

A fully functional **Online Banking Application** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

The application allows users to register, securely log in, check their account balance, transfer money, and view transaction history. It is fully deployed with **Vercel** (Frontend), **Render** (Backend), and **MongoDB Atlas** (Database).

---

# 🚀 Live Demo

### 🌐 Frontend
https://banking-system-mu-two.vercel.app

### ⚙️ Backend API
https://banking-system-nc7o.onrender.com

---

# ✨ Features

## 🔐 User Authentication
- User Registration
- Automatic Account Number Generation
- Secure Login using JWT Authentication
- Password Hashing with Bcrypt

## 💰 Banking Operations
- View Account Balance
- Transfer Money Between Accounts
- Transaction History
- Insufficient Balance Validation
- Secure API Authorization

## ☁️ Deployment
- Frontend deployed on **Vercel**
- Backend deployed on **Render**
- Database hosted on **MongoDB Atlas**
- CORS configured for secure communication

---

# 🛠 Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios

## Backend
- Node.js
- Express.js
- JWT Authentication
- Bcrypt
- Mongoose

## Database
- MongoDB Atlas

---

# 📁 Project Structure

```text
banking-system/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/KanthaAnanya/banking-system.git
cd banking-system
```

---

## 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the **backend** folder:

```env
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm start
```

---

## 3. Frontend Setup

Open another terminal.

```bash
cd frontend
npm install
npm start
```

The React application will run on:

```
http://localhost:3000
```

---

# 📡 REST API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

---

## Account

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/account/balance` | Get account balance |
| POST | `/api/account/transfer` | Transfer money |

---

## Transactions

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/transactions` | Get transaction history |

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing using Bcrypt
- Protected API Routes
- MongoDB Atlas Database
- Environment Variables
- CORS Configuration

---

# 🎯 Future Enhancements

- Deposit & Withdraw Module
- Email Notifications
- Admin Dashboard
- Profile Management
- Password Reset
- Transaction Search & Filters
- Responsive Mobile UI

---

# 📸 Screenshots

> Add screenshots of:
- Login Page
- Registration Page
- Dashboard
- Money Transfer
- Transaction History

---

# 👩‍💻 Author

**Ananya Kantha**

GitHub: https://github.com/KanthaAnanya

---

# 📄 License

This project is developed for **learning, portfolio, and academic purposes**.
