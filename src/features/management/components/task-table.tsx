import { Checkbox } from "@/components/ui/checkbox";
import { IconButton, Table } from "@chakra-ui/react";
import { type TaskDto } from "../types";
import { FaEllipsisV } from "react-icons/fa";
import { TaskStatusBadge } from "./task-status-badge";

const columns = ["Title", "Assigned To", "Due Date", "Status"];

export type TaskTableProps = {
  data?: TaskDto[];
};

export const TaskTable = ({ data }: TaskTableProps) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>
            <Checkbox />
          </Table.ColumnHeader>
          {columns.map((col) => (
            <Table.ColumnHeader>{col}</Table.ColumnHeader>
          ))}
          <Table.ColumnHeader></Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data?.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell>
              <Checkbox />
            </Table.Cell>
            <Table.Cell>{item.title}</Table.Cell>
            <Table.Cell>{item.assignee}</Table.Cell>
            <Table.Cell>{item.dueDate}</Table.Cell>
            <Table.Cell>
              <TaskStatusBadge status={item.status} />
            </Table.Cell>
            <Table.Cell>
              <IconButton size="xs" variant="ghost">
                <FaEllipsisV />
              </IconButton>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
