# 📚 Books Store Website

A modern web application for browsing, searching, and managing books. Built with **React**, using **Vite**, **Axios**, and **JSON Server** as a fake backend.

---

## 🚀 Technologies Used

- ⚛️ React (Vite)
- 🖌️ HTML / CSS
- 📡 Axios
- 🗄️ JSON Server

---

## 🔗 Routes Overview

| Path             | Component       | Description                       |
|------------------|------------------|-----------------------------------|
| `/`              | `<Home />`       | Homepage                          |
| `/books`         | `<Books />`      | List of all books                 |
| `/books/:id`     | `<Book />`       | Single book details               |
| `/search`        | `<Search />`     | Search page                       |
| `/admin`         | `<Admin />`      | Admin panel                       |
| `*`              | `<Error_404 />`  | 404 Not Found page                |

---

## ⚙️ Features

- 📖 View books
- 🔃 Sort by title (ascending/descending)
- 🏷️ Filter by genre
- ⭐ Top 10 books section
- 💬 Add comments to books
- 🔍 Search books by title
- 📥 Download book files
- 🔐 Admin panel for managing books

---

## 💾 Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/books-store.git
cd books-store

2. **Install dependencies:**

```bash
npm install

3. **Install JSON Server globally (if not installed):**
```bash
npm install -g json-server

4. **Start JSON Server (mock backend):**
```bash
json-server --watch db.json --port 3001

5. **Start the frontend (Vite dev server):**
```bash
npm run dev

📌 Visit the app in your browser: http://localhost:5173

---

🗂 Project Structure (main parts)
📁 public/
📁 src/
 ┣ 📁 components/
 ┣ 📁 pages/
 ┣ 📁 assets/
 ┣ 📄 App.jsx
 ┣ 📄 main.jsx
📄 db.json
📄 README.md
📄 package.json


👨‍💻 Author
Developed by Abylaikhan Sekerbek
Student at IT Step | Astana IT University

📌 Notes
Backend runs at http://localhost:3001
Frontend runs at http://localhost:5173
All data is stored in db.json

⭐ Star this repo if you like the project!
