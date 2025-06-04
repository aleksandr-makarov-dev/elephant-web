import { api } from "@/lib/api-client";
import type { BoardResponse } from "../types/board";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { type QueryConfig } from "@/lib/react-query";
import { mockBoards } from "../mock";

async function getBoards(): Promise<BoardResponse[]> {
  // return api.get("/boards");
  return Promise.resolve(mockBoards);
}

export const getBoardsQueryOptions = () => {
  return queryOptions({
    queryKey: ["boards"],
    queryFn: () => getBoards(),
  });
};

type UseBoardsOptions = {
  queryConfig?: QueryConfig<typeof getBoardsQueryOptions>;
};

export const useBoards = ({ queryConfig }: UseBoardsOptions = {}) => {
  return useQuery({
    ...getBoardsQueryOptions(),
    ...queryConfig,
  });
};
