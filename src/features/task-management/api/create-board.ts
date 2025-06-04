import { api } from "@/lib/api-client";
import type { BoardCreateRequest, BoardResponse } from "../types/board";
import type { MutationConfig } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";

function createBoard({
  data,
}: {
  data: BoardCreateRequest;
}): Promise<BoardResponse> {
  return api.post("/boards", data);
}

type UseCreateBoardOptions = {
  mutationConfig?: MutationConfig<typeof createBoard>;
};

export const useCreateBoard = ({
  mutationConfig,
}: UseCreateBoardOptions = {}) => {
  return useMutation({ ...mutationConfig, mutationFn: createBoard });
};
