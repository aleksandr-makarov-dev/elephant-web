import { Badge, Button, Card, HStack, Text } from "@chakra-ui/react";
import type { BoardStatus } from "../types/board";
import { boardStatusMap } from "../util/map";
import { Avatar } from "@/components/ui/avatar";
import { NavLink } from "react-router";

export type BoardCardProps = {
  id: number;
  title: string;
  description: string;
  status: BoardStatus;
};

export const BoardCard = ({
  id,
  title,
  description,
  status,
}: BoardCardProps) => {
  const { label, color } = boardStatusMap[status];

  return (
    <Card.Root>
      <Card.Header>
        <HStack>
          <Badge variant="solid" colorPalette={color}>
            {label}
          </Badge>
        </HStack>
      </Card.Header>
      <Card.Body py="4">
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Body>
      <Card.Footer>
        <HStack flex="1" justify="space-between">
          <HStack>
            <Avatar name="John Doe" size="xs" />
            <Text fontWeight="semibold" textStyle="sm">
              John Doe
            </Text>
          </HStack>
          <Button size="sm" asChild>
            <NavLink to={`/d/boards/${id}`}>View Details</NavLink>
          </Button>
        </HStack>
      </Card.Footer>
    </Card.Root>
  );
};
