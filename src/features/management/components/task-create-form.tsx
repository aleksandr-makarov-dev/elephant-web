import { Controller, useForm } from "react-hook-form";
import { taskCreateDtoSchema, type TaskCreateDto } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "@/components/ui/field";
import { Input, Stack, Textarea } from "@chakra-ui/react";

export type TaskCreateFormProps = {
  id: string;
  onSubmit: (value: TaskCreateDto) => void;
};

export const TaskCreateForm = ({ id, onSubmit }: TaskCreateFormProps) => {
  const form = useForm<TaskCreateDto>({
    resolver: zodResolver(taskCreateDtoSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  return (
    <form id={id} onSubmit={form.handleSubmit(onSubmit)}>
      <Stack>
        <Controller
          control={form.control}
          name="title"
          render={({ field, fieldState }) => (
            <Field
              label="Title"
              invalid={fieldState.invalid}
              errorText={fieldState.error?.message}
              required
            >
              <Input colorPalette="blue" {...field} />
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="description"
          render={({ field, fieldState }) => (
            <Field
              label="Description"
              invalid={fieldState.invalid}
              errorText={fieldState.error?.message}
            >
              <Textarea rows={3} colorPalette="blue" {...field} />
            </Field>
          )}
        />
      </Stack>
    </form>
  );
};
