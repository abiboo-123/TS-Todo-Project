# 📝 TypeScript ToDo API

A professional backend API built with **Node.js**, **Express**, **TypeScript**, and **MongoDB (Mongoose)**.  
Includes task creation, editing, deletion, filtering, search, and pagination.

---

## 🚀 Features

- ✅ Add / Edit / Delete Tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Filter by completion status
- ✅ Search by keyword
- ✅ Pagination support
- ✅ Get task statistics
- ✅ Validation using Zod
- ✅ Clean MVC structure
- ✅ Ready-to-test Postman collection

---

## 📦 Installation

```bash
git clone https://github.com/abiboo-123/TS-Todo-Project
cd TS-Todo-Project
npm install
```

---

## ⚙️ Environment Setup

Create a `.env` file using the provided `.env.example`:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/todo-db
```

---

## 🧪 Run the API

```bash
npm run dev
```

> Runs on: [http://localhost:3000](http://localhost:3000)

---

## 🔌 API Endpoints

| Method | Endpoint                | Description                     |
| ------ | ----------------------- | ------------------------------- |
| GET    | `/api/tasks`            | List all tasks (with filters)   |
| GET    | `/api/tasks/:id`        | Get task by ID                  |
| POST   | `/api/tasks/add`        | Add a new task                  |
| PUT    | `/api/tasks/edit/:id`   | Update task (title, completed)  |
| DELETE | `/api/tasks/delete/:id` | Delete task                     |
| GET    | `/api/tasks/count`      | Get task stats (total/complete) |

---

## 🔍 Filtering & Pagination

Supports:

```
GET /api/tasks?keyword=read&completed=true&limit=5&page=2
```

- `keyword`: Search in title
- `completed`: `true` or `false`
- `limit`: Number of tasks per page
- `page`: Page number

---

## 🧪 Postman Collection

You can test all endpoints using the provided Postman collection:

📁 **Download**: [`todo-api.postman_collection.json`](./todo-api.postman_collection.json)

1. Open Postman
2. Click **Import**
3. Load the file
4. Run and test endpoints easily

---

## 📁 Project Structure

```
src/
├── controllers/        # Request handlers
├── models/             # Mongoose schemas
├── routes/             # Route definitions
├── validations/        # Zod schemas
├── middlewares/        # Custom middleware
├── index.ts            # Entry point
```

---

## 👨‍💻 Author

- GitHub: [abiboo-123](https://github.com/abiboo-123)

---

## 🪪 License

This project is open-source and free to use under the MIT license.
