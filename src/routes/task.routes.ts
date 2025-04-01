import { Router } from "express";
import {
  addTodoTask,
  getAllTodos,
  getTodoById,
  editTask,
  completeTask,
  deleteTask,
  getCompletedTasks,
  getInCompletedTasks,
  unCompleteTask,
  searchTaskByKeyword,
  getTaskCount,
} from "../controllers/task.controller";

const router = Router();

router.post("/add", addTodoTask);
router.get("/all", getAllTodos);
router.get("/:id", getTodoById);
router.put("/edit/:id", editTask);
router.put("/complete/:id", completeTask);
router.put("/uncomplete/:id", unCompleteTask);
router.delete("/delete/:id", deleteTask);
router.get("/completed", getCompletedTasks);
router.get("/incompleted", getInCompletedTasks);
router.get("/search", searchTaskByKeyword);
router.get("/count", getTaskCount);

export default router;
