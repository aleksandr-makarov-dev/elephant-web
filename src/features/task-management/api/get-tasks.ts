import { api } from "@/lib/api-client";
import type { TaskResponse } from "../types/task";
import { queryOptions, useQuery } from "@tanstack/react-query";
import type { QueryConfig } from "@/lib/react-query";

export const getTasks = ({
  boardId,
}: {
  boardId: number;
}): Promise<TaskResponse[]> => {
  return api.get(`/tasks?boardId=${boardId}`);
};

export const getTasksQueryOptions = (boardId: number) => {
  return queryOptions({
    queryKey: ["tasks", boardId],
    queryFn: () => getTasks({ boardId }),
  });
};

type UseTasksOptions = {
  boardId: number;
  queryConfig?: QueryConfig<typeof getTasksQueryOptions>;
};

export const useTasks = ({ boardId, queryConfig }: UseTasksOptions) => {
  return useQuery({
    ...getTasksQueryOptions(boardId),
    ...queryConfig,
  });
};
