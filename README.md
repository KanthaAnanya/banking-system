<<<<<<< HEAD
#  Banking System – MERN Stack Project
=======
# 🏦 Banking System – MERN Stack Project
>>>>>>> 2eedc28 (Updated README documentation)

A full-stack digital banking application built using **MongoDB, Express.js, React.js, and Node.js (MERN)**.  
This project allows users to register, log in, transfer money, view transactions, and manage their account securely.

---

<<<<<<< HEAD
##  Features

###  Authentication
=======
## 🚀 Features

### 🔐 Authentication
>>>>>>> 2eedc28 (Updated README documentation)
- User Registration  
- Secure Login with **JWT (JSON Web Tokens)**  
- Password hashing using **bcrypt**  

<<<<<<< HEAD
###  Banking Operations
=======
### 💳 Banking Operations
>>>>>>> 2eedc28 (Updated README documentation)
- Check account balance  
- Transfer money between accounts  
- View transaction history  
- (Optional) Deposit & Withdraw  

<<<<<<< HEAD
###  User Profile
=======
### 👤 User Profile
>>>>>>> 2eedc28 (Updated README documentation)
- View name, email, account number  
- View balance  
- Joined date  

<<<<<<< HEAD
###  Frontend UI
=======
### 🎨 Frontend UI
>>>>>>> 2eedc28 (Updated README documentation)
- Clean and modern React interface  
- Navigation bar  
- Responsive design  
- (Optional) Dark/Light mode  

---

<<<<<<< HEAD
##  Tech Stack
=======
## 🛠 Tech Stack
>>>>>>> 2eedc28 (Updated README documentation)

### **Frontend**
- React.js  
- Axios  
- React Router  
- Bootstrap / CSS  

### **Backend**
- Node.js  
- Express.js  
- Mongoose  
- JWT Authentication  
- Bcrypt Password Hashing  

### **Database**
- MongoDB  
## ⚙️ Installation & Setup

### Clone the repository
```bash
cd banking-system


 ## **Backend Setup**:

## Install backend dependencies
cd backend
npm install

## Create a .env file:
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=5000

## Start backend
nodemon server.js


## Backend runs at

http://localhost:5000

 ## **Frontend Setup**:
## Install frontend dependencies
cd ../frontend
npm install
npm start


## Frontend runs at:

http://localhost:3000

## **API Endpoints** (Backend):
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
GET	/api/auth/profile	Get user profile
POST	/api/account/transfer	Transfer money
GET	/api/account/transactions	Fetch transactions

## **How to Run the Project**

-Start backend → nodemon server.js
-Start frontend → npm start
-Create an account
-Login
-Explore dashboard
-Transfer funds
-View transactions
-View profile

