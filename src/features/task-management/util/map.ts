import type { BoardStatus } from "../types/board";
import type { TaskPriority, TaskStatus } from "../types/task";

export const taskPriorityMap: Record<
  TaskPriority,
  { label: string; color: string }
> = {
  LOW: { label: "Low", color: "green" },
  MEDIUM: { label: "Medium", color: "yellow" },
  HIGH: { label: "High", color: "orange" },
  CRITICAL: { label: "Critical", color: "red" },
};

export const taskStatusMap: Record<
  TaskStatus,
  { label: string; color: string }
> = {
  PLANNED: { label: "Planned", color: "yellow" },
  IN_PROGRESS: { label: "In progress", color: "blue" },
  COMPLETED: { label: "Completed", color: "green" },
  OVERDUE: { label: "Overdue", color: "red" },
  ARCHIVED: { label: "Archived", color: "gray" },
};

export const boardStatusMap: Record<
  BoardStatus,
  { label: string; color: string }
> = {
  DRAFT: { label: "Draft", color: "gray" },
  PUBLISHED: { label: "Published", color: "green" },
  ARCHIVED: { label: "Archived", color: "red" },
};
