#  Banking System – MERN Stack Project

A fully functional **online banking application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
This project supports **user registration, login, balance checking, money transfers, and transaction history**, with full deployment on **Render (backend)** and **Vercel (frontend)**.

---

##  Live Demo

### 🌐 **Frontend (User UI)**
🔗 https://banking-system-mu-two.vercel.app

### ⚙️ **Backend (REST API)**
🔗 https://banking-system-nc7o.onrender.com

---

##  Features

###  **User Authentication**
- Register with unique account number generation  
- Login using JWT-based authentication  
- Secure password hashing

###  **Banking Operations**
- Check account balance  
- Transfer money between accounts  
- View transaction history  
- Validations for insufficient balance

###  **Deployment**
- **Frontend**: Vercel  
- **Backend**: Render  
- **Database**: MongoDB Atlas  
- CORS enabled for secure communication

---

##  Tech Stack

### Frontend
- React.js  
- React Router  
- Axios  

### Backend
- Node.js  
- Express.js  
- JWT  
- Bcrypt  
- Mongoose  

### Database
- MongoDB Atlas

---

##  Project Structure

banking-system/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ ├── package.json
│
└── frontend/
├── src/
├── public/
├── package.json

---

##  Installation & Setup (Local)

### 1. Clone the repository
```bash
git clone https://github.com/KanthaAnanya/banking-system.git
cd banking-system

---

## ▶️ Installation & Setup (Local)

### 1. Clone the repository
```bash
git clone https://github.com/KanthaAnanya/banking-system.git

Backend Setup
cd banking-system
cd backend
npm install
Create .env file:
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your_secret_key
Start Backend:
npm start
Frontend Setup
cd frontend
npm install
npm start
 API Endpoints
Auth
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
Account

| GET | /api/account/balance | Get balance |
| POST | /api/account/transfer | Transfer money |

Transactions

| GET | /api/transactions | Get transactions |

 Conclusion

This project demonstrates a complete, secure, fully deployed MERN-based banking system with real-time API communication and database integration—ideal for academic submissions, portfolio projects, and interviews.

