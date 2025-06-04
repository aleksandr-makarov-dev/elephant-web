import { api } from "@/lib/api-client";
import type { MutationConfig } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";

function deleteTask({ taskId }: { taskId: number }) {
  return api.delete(`/tasks/${taskId}`);
}

type UseDeleteTaskOptions = {
  mutationConfig?: MutationConfig<typeof deleteTask>;
};

export const useDeleteTask = ({
  mutationConfig,
}: UseDeleteTaskOptions = {}) => {
  return useMutation({ ...mutationConfig, mutationFn: deleteTask });
};
