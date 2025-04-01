# 📝 TypeScript ToDo API

![TypeScript](https://img.shields.io/badge/Built%20With-TypeScript-blue)
![License](https://img.shields.io/github/license/abiboo-123/my-ts-api)

A simple in-memory ToDo List API built with **Node.js**, **Express**, and **TypeScript**.  
Supports task creation, editing, deletion, completion, filtering, and searching.

---

## 🚀 Features

- Add, edit, delete tasks
- Mark tasks as complete/incomplete
- Filter by completion status
- Search by keyword
- Get task counts (total, complete, incomplete)
- In-memory data (no database required)

---

## 📦 Installation

```bash
git clone https://github.com/abiboo-123/my-ts-api.git
cd my-ts-api
npm install
```

---

## 🔧 Prerequisites

- Node.js (v18 or higher recommended)
- npm installed

---

## 🧪 Run the API

```bash
npm run dev
```

> Runs on: [http://localhost:3000](http://localhost:3000)

---

## 🔌 API Endpoints

> 📡 Base URL: `http://localhost:3000/api/tasks`

| Method | Endpoint                      | Description               |
|--------|-------------------------------|---------------------------|
| GET    | `/api/tasks/all`              | Get all tasks             |
| GET    | `/api/tasks/:id`              | Get task by ID            |
| POST   | `/api/tasks/add`              | Add a new task            |
| PUT    | `/api/tasks/edit/:id`         | Edit task title           |
| PUT    | `/api/tasks/complete/:id`     | Mark task as completed    |
| PUT    | `/api/tasks/uncomplete/:id`   | Mark task as incomplete   |
| DELETE | `/api/tasks/delete/:id`       | Delete a task             |
| GET    | `/api/tasks/completed`        | List completed tasks      |
| GET    | `/api/tasks/incompleted`      | List incomplete tasks     |
| GET    | `/api/tasks/search?keyword=x` | Search tasks by keyword   |
| GET    | `/api/tasks/count`            | Get task stats            |

---

## 📁 Project Structure

```
TS-Todo-Project/
├── src/              # TypeScript source files
├── .env              # Port config
├── nodemon.json      # Dev server settings
├── tsconfig.json     # TypeScript config
├── .eslintrc.json    # ESLint config
└── package.json
```

---

## 📬 Author

- GitHub: [abiboo-123](https://github.com/abiboo-123)

---

## 🪪 License

This project is open-source and free to use.