import { api } from "@/lib/api-client";
import type { TaskDto } from "../types";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { type QueryConfig } from "@/lib/react-query";

async function getTasks(): Promise<TaskDto[]> {
  return api.get("/tasks");
}

export const getTasksQueryOptions = () => {
  return queryOptions({
    queryKey: ["tasks"],
    queryFn: () => getTasks(),
  });
};

type UseTasksOptions = {
  queryConfig?: QueryConfig<typeof getTasksQueryOptions>;
};

export const UseTasks = ({ queryConfig }: UseTasksOptions = {}) => {
  return useQuery({
    ...getTasksQueryOptions(),
    ...queryConfig,
  });
};
