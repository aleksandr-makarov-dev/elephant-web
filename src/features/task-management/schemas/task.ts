import { isFutureDate } from "@/util/date";
import { z } from "zod";

export const TaskStatuSchema = z.union([
  z.literal("PLANNED"),
  z.literal("IN_PROGRESS"),
  z.literal("COMPLETED"),
  z.literal("OVERDUE"),
  z.literal("ARCHIVED"),
]);

export const TaskPrioritySchema = z.union([
  z.literal("LOW"),
  z.literal("MEDIUM"),
  z.literal("HIGH"),
  z.literal("CRITICAL"),
]);

export const TaskCreateRequestSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters long" })
    .max(100, { message: "Title must be at most 100 characters long" }),

  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters long" })
    .max(500, { message: "Description must be at most 500 characters long" }),

  priority: TaskPrioritySchema,

  dueDate: z
    .string()
    .refine(isFutureDate, { message: "Due date must be in the future" })
    .optional(),

  boardId: z.number().min(1, { message: "Board ID must be greater than 0" }),
});
