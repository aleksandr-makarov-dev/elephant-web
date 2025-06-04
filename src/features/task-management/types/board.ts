import { z } from "zod";
import type {
  BoardCreateRequestSchema,
  BoardStatusSchema,
  BoardUpdateRequestSchema,
} from "../schemas/board";

export type BoardResponse = {
  id: number;
  title: string;
  description: string;
  status: BoardStatus;
  createdAt: Date;
};

export type BoardStatus = z.infer<typeof BoardStatusSchema>;

export type BoardCreateRequest = z.infer<typeof BoardCreateRequestSchema>;

export type BoardUpdateRequest = z.infer<typeof BoardUpdateRequestSchema>;
