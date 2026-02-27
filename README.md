# Blog Platform – MERN Stack Project

## Project Overview

This is a simple blog platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js).  
Users can register, login, create blog posts, edit their own posts, delete posts, and view posts created by others.

The main goal of this project was to understand authentication using JWT, protected routes, and full CRUD operations in a MERN application.

---

## Features

- User Registration and Login
- Password hashing using bcrypt
- JWT based authentication
- Protected routes (Create, Edit, Delete)
- Create, Read, Update, Delete blog posts
- Profile page (shows user’s own posts)
- Search posts by title
- Custom 404 page
- Error handling and loading states
- Responsive basic UI

---

## Tech Stack

Frontend:
- React.js
- React Router
- Axios

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt.js

---

## Folder Structure

backend/
- models
- routes
- controllers
- middleware
- config

client/
- pages
- components
- context
- utils

---

## How to Run the Project

1. Clone the repository
2. Install backend dependencies:
   npm install
3. Install frontend dependencies:
   cd client
   npm install
4. Add .env file in backend with:
   MONGO_URI
   JWT_SECRET
   PORT
5. Run backend:
   node server.js
6. Run frontend:
   npm start

---

## Challenges Faced

- Connecting MongoDB Atlas properly (IP access issue)
- Managing authentication state using localStorage
- Protecting routes both in frontend and backend
- Handling edit/delete permissions for only the author

---

## What I Learned

- How JWT works in stateless authentication
- How middleware protects backend routes
- How to manage state using React Context
- How to structure a full-stack project cleanly
- How frontend and backend communicate using REST APIs