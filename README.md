# OneCart
Open backend and frontend to run the project
- Frontend Link: [One-Cart (frontend)](https://one-cart-3.onrender.com/)
- backend Link: [One-Cart (backend)](https://one-cart-1cvg.onrender.com/)

Admin Dashboard :
- Access deployed admin dashboard: [One-Cart (admin)](https://one-cart-5.onrender.com/)

OneCart is a full-stack e-commerce platform with separate admin and user frontends, and a Node.js backend. It allows users to browse products, add items to cart, place orders, and admins to manage products and orders.

## Project Structure

- `admin/` — Admin dashboard (React + Vite)
- `frontend/` — User-facing storefront (React + Vite)
- `backend/` — Node.js/Express REST API server.

## Features

### Frontend
- Browse products and collections
- Add to cart, view cart, place orders
- User authentication and registration
- Order history and details

### Admin
- Product management (add, edit, delete)
- Order management
- User management
- Authentication for admin access

### Backend
- RESTful API for products, users, orders, cart
- MongoDB database integration
- Authentication and authorization (JWT)
- File uploads (Cloudinary)

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB database

### Setup

1. **Clone the repository:**
   ```powershell
   git clone <repo-url>
   cd OneCart
   ```

2. **Install dependencies:**
   ```powershell
   cd backend; npm install
   cd ../admin; npm install
   cd ../frontend; npm install
   ```

3. **Configure environment variables:**
   - Create `.env` files in `backend/` for database, JWT secret, Cloudinary, etc.

4. **Start backend server:**
   ```powershell
   cd backend; npm start
   ```

5. **Start admin and frontend apps:**
   ```powershell
   cd admin; npm run dev
   cd ../frontend; npm run dev
   ```

## Usage
- Access user site at `http://localhost:3000` (default Vite port)
- Access admin dashboard at `http://localhost:5173` (default Vite port)
- Backend API runs at `http://localhost:5000`

## Technologies Used
- React, Vite
- Node.js, Express
- MongoDB, Mongoose
- Cloudinary (file uploads)
- JWT (authentication)

## License
MIT License

---
Feel free to contribute or open issues for improvements!
=======

