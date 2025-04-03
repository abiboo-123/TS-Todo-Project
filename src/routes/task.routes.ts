import { query, Router } from 'express';
import { addTodoTask, getAllTodos, getTodoById, editTask, deleteTask, getTaskCount } from '../controllers/task.controller';
import { validate } from '../middleware/validate';
import { taskSchema, taskUpdateSchema, taskIdSchema, taskSearchSchema } from '../validations/task.schema';

const router = Router();

router.post('/add', validate(taskSchema), addTodoTask);
router.get('/all', validate(taskSearchSchema, 'query'), getAllTodos);
router.get('/count', getTaskCount);
router.get('/:id', validate(taskIdSchema, 'params'), getTodoById);
router.put('/edit/:id', validate(taskIdSchema, 'params'), validate(taskUpdateSchema, 'body'), editTask);
router.delete('/delete/:id', validate(taskIdSchema, 'params'), deleteTask);

export default router;
