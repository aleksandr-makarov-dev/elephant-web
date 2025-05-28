import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { UseTasks } from "@/features/management/api/get-tasks";
import { TaskCreateDialog } from "@/features/management/components/task-create-dialog";
import { TaskTable } from "@/features/management/components/task-table";
import { Button, ButtonGroup, Flex, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowUp, FaPlus } from "react-icons/fa";

export function BoardsPage() {
  const getTasksQuery = UseTasks();

  const [taskCreateDialogOpen, setTaskCreateDialogOpen] =
    useState<boolean>(false);

  return (
    <DashboardLayout title="Boards">
      <Stack gap="4">
        <Flex align="center" justify="space-between">
          <Heading size="3xl">All Tasks</Heading>
          <ButtonGroup size="sm" gap="2">
            <Button variant="subtle">
              <FaArrowUp /> Export
            </Button>
            <Button
              colorPalette="blue"
              onClick={() => setTaskCreateDialogOpen(true)}
            >
              <FaPlus /> Create task
            </Button>
          </ButtonGroup>
        </Flex>
        <TaskTable data={getTasksQuery.data} />
      </Stack>
      <TaskCreateDialog
        open={taskCreateDialogOpen}
        setOpen={setTaskCreateDialogOpen}
      />
    </DashboardLayout>
  );
}
