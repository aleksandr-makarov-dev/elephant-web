import { z } from "zod";
import type {
  TaskCreateRequestSchema,
  TaskPrioritySchema,
  TaskStatuSchema,
} from "../schemas/task";

export type TaskResponse = {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: Date;
  dueDate?: Date | undefined;
};

export type TaskStatus = z.infer<typeof TaskStatuSchema>;

export type TaskPriority = z.infer<typeof TaskPrioritySchema>;

export type TaskCreateRequest = z.infer<typeof TaskCreateRequestSchema>;
