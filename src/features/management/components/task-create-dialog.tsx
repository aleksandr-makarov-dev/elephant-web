import { Dialog, Button, Portal, CloseButton } from "@chakra-ui/react";
import { TaskCreateForm } from "./task-create-form";
import type { TaskCreateDto } from "../types";

type TaskCreateDialogProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const TaskCreateDialog = ({ open, setOpen }: TaskCreateDialogProps) => {
  const handleSubmit = (value: TaskCreateDto) => {};

  return (
    <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>New Task</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <TaskCreateForm id="task-create-form" onSubmit={handleSubmit} />
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button type="submit" form="task-create-form">
                Create
              </Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
