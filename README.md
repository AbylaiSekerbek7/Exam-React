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

# Demo

The db.json
![image](https://github.com/user-attachments/assets/1523813c-8f21-46c4-b8ae-6557cae417eb)

Home page
![image](https://github.com/user-attachments/assets/66ac1138-c602-4a90-9162-2ea9e51b9e54)

Books page
![image](https://github.com/user-attachments/assets/f2f27cb3-a214-4215-8d72-421f16a691f0)

Book page
![image](https://github.com/user-attachments/assets/1fa0ec2e-2db1-429b-8e24-eaf79c367815)

Search 
![image](https://github.com/user-attachments/assets/cdc12f83-4d9d-48f9-a5c8-7d35e39e9609)

Admin panel - all books
![image](https://github.com/user-attachments/assets/9bf41907-1b2c-46cf-bde1-445c2c2410e7)

Admin panel - add book
![image](https://github.com/user-attachments/assets/1ae20c40-3d6e-4336-a900-bf22f6b7b195)



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
