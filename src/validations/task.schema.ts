import { z } from 'zod';

export const taskSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  completed: z.boolean().optional()
});

export const taskUpdateSchema = z.object({
  title: z.string().min(1, 'Title is required').optional(),
  description: z.string().optional(),
  completed: z.boolean().optional()
});

export const taskIdSchema = z.object({
  id: z.string().length(24, 'Invalid ID format')
});

export const taskSearchSchema = z.object({
  keyword: z.string().optional(),
  completed: z.string().optional(),
  limit: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Number(val)), {
      message: 'Limit must be a number'
    }),
  page: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Number(val)), {
      message: 'Page must be a number'
    })
});
