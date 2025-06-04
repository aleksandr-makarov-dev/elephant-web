import { api } from "@/lib/api-client";
import type { MutationConfig } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import type { TaskCreateRequest, TaskResponse } from "../types/task";

function createTask({
  data,
}: {
  data: TaskCreateRequest;
}): Promise<TaskResponse> {
  return api.post("/tasks", data);
}

type UseCreateTaskOptions = {
  mutationConfig?: MutationConfig<typeof createTask>;
};

export const useCreateTask = ({
  mutationConfig,
}: UseCreateTaskOptions = {}) => {
  return useMutation({ ...mutationConfig, mutationFn: createTask });
};
