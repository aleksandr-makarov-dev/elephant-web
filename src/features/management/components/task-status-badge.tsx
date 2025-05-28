import { Badge } from "@chakra-ui/react";
import type { TaskStatus } from "../types";

type StatusConfig = {
  label: string;
  colorPalette?: string;
};

const STATUS_MAP: Record<TaskStatus, StatusConfig> = {
  PLANNED: { label: "Planned" },
  IN_PROGRESS: { label: "In progress", colorPalette: "blue" },
  IN_REVIEW: { label: "In review", colorPalette: "orange" },
  DONE: { label: "Done", colorPalette: "green" },
  OVERDUE: { label: "Overdue", colorPalette: "red" },
};

export const TaskStatusBadge = ({ status }: { status: TaskStatus }) => {
  const config = STATUS_MAP[status] ?? {
    label: "Unknown",
    colorPalette: "gray",
  };
  return <Badge colorPalette={config.colorPalette}>{config.label}</Badge>;
};
