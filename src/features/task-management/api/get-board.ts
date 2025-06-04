import type { BoardResponse } from "../types/board";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { type QueryConfig } from "@/lib/react-query";
import { mockBoards } from "../mock";

export function getBoard({
  boardId,
}: {
  boardId: number;
}): Promise<BoardResponse> {
  // return api.get(`/boards/${boardId}`);
  return Promise.resolve(
    mockBoards.find((v) => v.id === boardId) ?? mockBoards[0]
  );
}

export const getBoardQueryOptions = (boardId: number) => {
  return queryOptions({
    queryKey: ["boards", boardId],
    queryFn: () => getBoard({ boardId }),
  });
};

type UseBoardOptions = {
  boardId: number;
  queryConfig?: QueryConfig<typeof getBoardQueryOptions>;
};

export const useBoard = ({ boardId, queryConfig }: UseBoardOptions) => {
  return useQuery({
    ...getBoardQueryOptions(boardId),
    ...queryConfig,
  });
};
