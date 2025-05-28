import z from "zod";

export type TaskDto = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  status: TaskStatus;
  assignee: string;
};

export const taskCreateDtoSchema = z.object({
  title: z.string().min(5).max(100),
  description: z.string(),
});

export type TaskCreateDto = z.infer<typeof taskCreateDtoSchema>;

export type TaskStatus =
  | "PLANNED"
  | "IN_PROGRESS"
  | "IN_REVIEW"
  | "DONE"
  | "OVERDUE";
