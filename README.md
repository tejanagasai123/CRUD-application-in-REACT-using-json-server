# CRUD Application in React using JSON Server

A full-fledged CRUD (Create, Read, Update, Delete) application built using **React.js** on the frontend and **JSON Server** as a mock backend. This app allows users to manage data dynamically with full integration between UI and API calls.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Backend (Mock API):** JSON Server
- **Tools:** Axios, React Router DOM, Vite

## 🚀 Features

- ✅ Create: Add new records via a form.
- 📄 Read: Fetch and display a list of all records from JSON Server.
- ✏️ Update: Edit existing records through dynamic routing.
- 🗑️ Delete: Remove records with confirmation.

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/tejanagasai123/CRUD-application-in-REACT-using-json-server.git
cd CRUD-application-in-REACT-using-json-server
2. Install dependencies
bash
Copy
Edit
npm install
3. Start JSON Server (Make sure db.json is in the root)
bash
Copy
Edit
npx json-server --watch db.json --port 3001
4. Run React App
bash
Copy
Edit
npm run dev
Make sure both the React app (default on port 5173) and JSON Server (on port 3001) are running simultaneously.

📁 Folder Structure
css
Copy
Edit
├── components
│   ├── AddUser.jsx
│   ├── EditUser.jsx
│   └── Home.jsx
├── App.jsx
├── db.json
├── main.jsx
📬 API Endpoints (via JSON Server)
GET /users – Fetch all users

POST /users – Add a new user

PUT /users/:id – Update a user

DELETE /users/:id – Delete a user

📌 Key Concepts Used
React Hooks (useState, useEffect)

React Router DOM for routing

Axios for HTTP requests

JSON Server for fake REST API

✨ Future Improvements
Input validation and error handling

Search/filtering capabilities

Persistent backend with Node.js/Express and MongoDB
