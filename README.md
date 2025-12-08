 Banking System – MERN Stack Project

A full-stack digital banking application built using MongoDB, Express.js, React.js, and Node.js (MERN).
This project enables users to register, log in, transfer money, track transactions, and manage their accounts securely.

 Features
 Authentication

User Registration

Secure Login using JWT (JSON Web Tokens)

Password hashing with bcrypt

 Banking Operations

Check account balance

Transfer money between accounts

View transaction history

(Optional) Deposit & Withdraw funds

 User Profile

View name, email, account number

Check available balance

Joined date

 Frontend UI

Clean and modern React interface

Navigation bar

Fully responsive design

(Optional) Dark/Light mode

 Tech Stack
Frontend

React.js

Axios

React Router

Bootstrap / Custom CSS

Backend

Node.js

Express.js

Mongoose

JWT Authentication

Bcrypt Password Hashing

Database

MongoDB

 Installation & Setup
 Clone the repository
git clone <your-repo-url>
cd banking-system

 Backend Setup
Install backend dependencies
cd backend
npm install

Create a .env file inside /backend
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=5000

Start the backend server
nodemon server.js


 Backend runs at: http://localhost:5000

 Frontend Setup
Install frontend dependencies
cd ../frontend
npm install
npm start


 Frontend runs at: http://localhost:3000

 API Endpoints (Backend)
Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
GET	/api/auth/profile	Get user profile
Banking Routes
Method	Endpoint	Description
POST	/api/account/transfer	Transfer money
GET	/api/account/transactions	Fetch transaction history
 How to Run the Project

Start backend → nodemon server.js

Start frontend → npm start

Create an account

Login

Access dashboard

Transfer funds

View transactions

View profile
