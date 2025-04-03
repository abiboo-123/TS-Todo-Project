import { Request, Response, NextFunction } from 'express';
import { stat } from 'fs';
import Todo from '../models/Todos';
import { ITodo } from '../models/Todos';

export const addTodoTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description, completed } = req.body;

    const newTask: ITodo = await Todo.create({
      title,
      description,
      completed
    });

    const id = newTask._id;

    res.status(200).json({ message: 'Task added successfully', id });
  } catch (err) {
    next(err);
  }
};

export const getAllTodos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      keyword,
      completed: completedStr,
      limit,
      page
    } = req.query as {
      keyword?: string;
      completed?: string;
      limit?: string;
      page?: string;
    };

    const completed = completedStr === 'true' ? true : completedStr === 'false' ? false : undefined;

    const query = {
      ...(keyword && { title: { $regex: keyword, $options: 'i' } }),
      ...(completed !== undefined && { completed })
    };

    const pageNum = page ? parseInt(page) : 1;
    const limitNum = limit ? parseInt(limit) : 10;
    const skip = (pageNum - 1) * limitNum;

    const tasks = await Todo.find(query).skip(skip).limit(limitNum);
    const total = await Todo.countDocuments(query);

    res.status(200).json({
      tasks,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(total / limitNum)
      }
    });
  } catch (err) {
    next(err);
  }
};

export const getTodoById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    const task: ITodo[] | null = await Todo.findById(id);

    if (!task) {
      res.status(400).json({ message: 'Task not found' });
      return;
    }

    res.status(200).json({ message: 'Task found', task });
  } catch (err) {
    next(err);
  }
};

export const editTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const { title, description, completed } = req.body;

    const task: ITodo | null = await Todo.findByIdAndUpdate(
      id,
      {
        title,
        description,
        completed
      },
      { new: true }
    );

    if (!task) {
      res.status(400).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task edited successfully', task });
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    await Todo.findByIdAndDelete(id);

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    next(err);
  }
};

export const getTaskCount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allTasksCount = await Todo.countDocuments();
    const completedTasksCount = await Todo.countDocuments({ completed: true });
    const inCompletedTasksCount = await Todo.countDocuments({ completed: false });

    res.status(200).json({
      message: 'Task statistics retrieved successfully',
      stats: {
        total: allTasksCount,
        completed: completedTasksCount,
        incomplete: inCompletedTasksCount
      }
    });
  } catch (err) {
    next(err);
  }
};
