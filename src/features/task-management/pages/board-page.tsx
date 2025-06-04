import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { useBoard } from "../api/get-board";
import { useParams } from "react-router";
import {
  Badge,
  Button,
  Card,
  Flex,
  Group,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PageHeading } from "@/components/layouts/page-heading";
import { FaFileCirclePlus } from "react-icons/fa6";
import { TaskFilter } from "../components/task-filter";
import { boardStatusMap } from "../util/map";
import { Avatar } from "@/components/ui/avatar";

export function BoardPage() {
  const { boardId } = useParams<{ boardId: string }>();
  const boardQuery = useBoard({ boardId: Number(boardId) });

  return (
    <DashboardLayout title="Board Details">
      <Stack gap="6">
        <PageHeading
          title={boardQuery.data?.title}
          loading={boardQuery.isLoading}
          action={
            <Button>
              <FaFileCirclePlus /> Create Task
            </Button>
          }
          subElements={
            boardQuery.isSuccess ? (
              <HStack gap="4">
                <Badge
                  variant="solid"
                  colorPalette={boardStatusMap[boardQuery.data.status].color}
                >
                  {boardStatusMap[boardQuery.data?.status].label}
                </Badge>
                <Group>
                  <Text textStyle="sm" color="fg.muted">
                    Created by
                  </Text>
                  <Avatar size="xs" name="John Doe" />
                  <Text fontWeight="semibold" fontStyle="sm">
                    John Doe
                  </Text>
                </Group>
              </HStack>
            ) : null
          }
        />
        <TaskFilter />
        <Flex gap="3">
          <Stack p="2" borderRadius="md" bg="bg.emphasized" w="280px" h="500px">
            <Badge variant="solid" colorPalette="gray" size="lg">
              Planned
            </Badge>
            <Card.Root size="sm">
              <Card.Body>
                <Card.Title>Моя первая задача.</Card.Title>
              </Card.Body>
            </Card.Root>
          </Stack>

          <Stack p="2" borderRadius="md" bg="bg.emphasized" w="280px" h="500px">
            <Badge variant="solid" colorPalette="blue" size="lg">
              In progress
            </Badge>
          </Stack>
          <Stack p="2" borderRadius="md" bg="bg.emphasized" w="280px" h="500px">
            <Badge variant="solid" colorPalette="green" size="lg">
              Complete
            </Badge>
          </Stack>
          <Stack p="2" borderRadius="md" bg="bg.emphasized" w="280px" h="500px">
            <Badge variant="solid" colorPalette="red" size="lg">
              Overdue
            </Badge>
          </Stack>
        </Flex>
      </Stack>
    </DashboardLayout>
  );
}
