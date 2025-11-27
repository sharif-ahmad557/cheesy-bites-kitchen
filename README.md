# 🍽️ Cheesy Bites Kitchen

**Cheesy Bites Kitchen** is a modern, full-stack restaurant application built with **Next.js**, **Tailwind CSS**, and **MongoDB**.  
It features a premium Amber & Black dark theme, dynamic menu management, Firebase authentication, and a fully responsive UI.

---

## 🚀 Features

- **Dynamic Menu:** Real-time search with debounce filtering.
- **Product Details Page:** Ingredients, nutrition facts, related foods, etc.
- **Authentication:** Firebase-based secure Login & Signup.
- **Admin Dashboard:** Add new items and Manage (View/Delete) existing items.
- **Responsive Design:** Mobile, Tablet & Desktop optimized.
- **Interactive UI:** Swiper.js sliders, Glassmorphism effects & smooth animations.

---

## 🛠️ Tech Stack

### **Frontend**

- Next.js 14+ (App Router)
- Tailwind CSS

### **Backend**

- Node.js
- Express.js

### **Database**

- MongoDB (CRUD operations)

### **Authentication**

- Firebase Auth

### **Libraries**

- React Icons
- Lucide React
- Swiper.js
- React Hot Toast

---

## ⚙️ Setup & Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sharif-ahmad557/cheesy-bites-kitchen
```

---

## 🖥️ 2️⃣ Client-Side Setup (Frontend)

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Create `.env.local` in root directory

````
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyA_oKg7upIFkzEaEPvYa_5qydw6Xly0v5U
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=cheesy-bites-kitchen.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=cheesy-bites-kitchen
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=cheesy-bites-kitchen.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123288326696
NEXT_PUBLIC_FIREBASE_APP_ID=1:123288326696:web:112be691b1942891e4db1d```

### Run the Development Server

```bash
npm run dev
````

👉 Frontend runs at: **http://localhost:3000**

---

## 🔧 3️⃣ Server-Side Setup (Backend)

### Install Backend Dependencies

```bash
npm install express cors mongodb dotenv
```

### Create `.env` for backend

```
DB_USER=cheesybites
DB_PASS=HaMmAd%4012580
PORT=5000
```

### Run Backend Server

```bash
node index.js
# or
nodemon index.js
```

👉 Backend runs at: \*\*http://localhost:5000/menu

---

## 📂 Route Summary

### 🌍 Public Routes

| Path         | Description                                           |
| ------------ | ----------------------------------------------------- |
| `/`          | Home page (Hero, Featured Items, Chefs, Testimonials) |
| `/menu`      | All food items with live search                       |
| `/menu/[id]` | Single food item details                              |
| `/about`     | About Us page                                         |
| `/contact`   | Contact form & location                               |
| `/login`     | Login page                                            |
| `/signup`    | Signup page                                           |

---

### 🔐 Protected Routes (Requires Login)

| Path               | Description          |
| ------------------ | -------------------- |
| `/add-product`     | Add new food items   |
| `/manage-products` | View/Delete products |

---

## 🔗 API Endpoints (Backend)

| Method | Endpoint    | Description             |
| ------ | ----------- | ----------------------- |
| GET    | `/menu`     | Get all menu items      |
| GET    | `/menu/:id` | Get a single item by ID |
| POST   | `/menu`     | Add a new food item     |
| DELETE | `/menu/:id` | Delete a food item      |

---

## 👨‍💻 Author

Developed by **Shariful Islam**  
Feel free to ⭐ the repository!
