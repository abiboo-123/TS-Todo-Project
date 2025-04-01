import { Request, Response, NextFunction } from "express";
import { stat } from "fs";
/*
enum statuses {
  Active= "active",
  Inactive= "inactive" 
}

export interface User {
  id: number | number;
  name: string;
  status: statuses;
}

const users: User[] = [
  { id: 1, name: "John Doe", status: statuses.Active },
  { id: 2, name: "John Nolan", status: statuses.Inactive },
];

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(users);
  } catch (err) {
    next(err);
  }
};

export const getUserById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id);
    const user = users.find((u) => u.id === id);
    if (!user) {
      res.sendStatus(404);
      return;
    }
    if (user.status === statuses.Inactive) {
      res.status(403).json({ error: "User is inactive" });
      return;
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
};
*/

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

class TodoList {
  private todo: Todo[] = [];

  addTodo(title: string): number {
    const id: number = this.todo.length + 1;
    const newTodo: Todo = { id: id, title: title, completed: false };

    this.todo.push(newTodo);

    return id;
  }
  getAllTodos(): Todo[] {
    return this.todo;
  }
  getTodoById(id: number): Todo | undefined {
    return this.todo.find((task) => task.id === id);
  }

  editTask(id: number, title: string): string | Todo {
    let task = this.getTodoById(id);

    if (!task) {
      return `Task not found`;
    }

    task.title = title;

    return task;
  }

  completeTask(id: number): string | Todo {
    let task = this.getTodoById(id);

    if (!task) {
      return `Task not found`;
    }

    task.completed = true;

    return task;
  }
  unCompleteTask(id: number): string | Todo {
    let task = this.getTodoById(id);

    if (!task) {
      return `Task not found`;
    }

    task.completed = false;

    return task;
  }
  deleteTask(id: number): void {
    this.todo = this.todo.filter((task) => task.id === id);
  }
  getCompletedTasks(): Todo[] {
    return this.todo.filter((task) => task.completed === true);
  }
  getInCompletedTasks(): Todo[] {
    return this.todo.filter((task) => task.completed === false);
  }
  searchTaskByKeyword(keyword: string): Todo[] {
    return this.todo.filter((task) =>
      task.title.toLowerCase().includes(keyword.toLowerCase()),
    );
  }
}

let todoList: TodoList = new TodoList();

export const addTodoTask = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const title: string = req.body.title;

    if (!title) {
      res.status(500).json({ message: "Title is required" });
      return;
    }

    const id: number = todoList.addTodo(title);

    res.status(200).json({ message: "Task added successfully", id });
  } catch (err) {
    next(err);
  }
};
export const getAllTodos = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const tasks = todoList.getAllTodos();

    res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
};

export const getTodoById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id);
    const task = todoList.getTodoById(id);

    if (!task) {
      res.status(400).json({ message: "Task not found" });
      return;
    }

    res.status(200).json({ message: "Task found", task });
  } catch (err) {
    next(err);
  }
};

export const editTask = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const title: string = req.body.title;

    if (!title) {
      res.status(500).json({ message: "Title is required" });
      return;
    }

    const task = todoList.editTask(id, title);

    if (typeof task === "string") {
      res.status(400).json({ message: task });
      return;
    }

    res.status(200).json({ message: "Task edited successfully", task });
  } catch (err) {
    next(err);
  }
};

export const deleteTask = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    todoList.deleteTask(id);

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    next(err);
  }
};

export const completeTask = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id);
    todoList.completeTask(id);

    res.status(200).json({ message: "Task completed successfully" });
  } catch (err) {
    next(err);
  }
};

export const unCompleteTask = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id);
    todoList.unCompleteTask(id);

    res.status(200).json({ message: "Task completed successfully" });
  } catch (err) {
    next(err);
  }
};

export const getCompletedTasks = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const tasks = todoList.getCompletedTasks();

    res.status(200).json({ message: "Completed tasks", tasks });
  } catch (err) {
    next(err);
  }
};

export const getInCompletedTasks = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const tasks = todoList.getInCompletedTasks();

    res.status(200).json({ message: "Incompleted tasks", tasks });
  } catch (err) {
    next(err);
  }
};

export const searchTaskByKeyword = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const keyword: string = req.params.keyword;
    const tasks = todoList.searchTaskByKeyword(keyword);

    if (tasks.length === 0) {
      res.status(400).json({ message: "No task found" });
      return;
    }

    res.status(200).json({ message: "Tasks found", tasks });
  } catch (err) {
    next(err);
  }
};

export const getTaskCount = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const allTasksCount = todoList.getAllTodos().length;
    const completedTasksCount = todoList.getCompletedTasks().length;
    const inCompletedTasksCount = todoList.getInCompletedTasks().length;

    res.status(200).json({
      message: "Total tasks",
      allTasksCount,
      completedTasksCount,
      inCompletedTasksCount,
    });
  } catch (err) {
    next(err);
  }
};
