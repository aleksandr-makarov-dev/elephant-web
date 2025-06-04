import z from "zod";

export const BoardStatusSchema = z.union([
  z.literal("DRAFT"),
  z.literal("PUBLISHED"),
  z.literal("ARCHIVED"),
]);

export const BoardCreateRequestSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, { message: "Title length must be between 5 and 100 characters" })
    .max(100, { message: "Title length must be between 5 and 100 characters" }),

  description: z
    .string()
    .trim()
    .min(5, {
      message: "Description length must be between 5 and 250 characters",
    })
    .max(250, {
      message: "Description length must be between 5 and 250 characters",
    }),
});

export const BoardUpdateRequestSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, { message: "Title length must be between 5 and 100 characters" })
    .max(100, { message: "Title length must be between 5 and 100 characters" }),

  description: z
    .string()
    .trim()
    .min(5, {
      message: "Description length must be between 5 and 250 characters",
    })
    .max(250, {
      message: "Description length must be between 5 and 250 characters",
    }),

  status: BoardStatusSchema,
});
