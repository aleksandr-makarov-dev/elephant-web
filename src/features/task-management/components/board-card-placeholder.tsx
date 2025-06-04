import { Avatar } from "@/components/ui/avatar";
import { Badge, Button, Card, HStack, Skeleton, Text } from "@chakra-ui/react";

export const BoardCardPlaceholder = () => {
  return (
    <Card.Root>
      <Card.Header>
        <HStack>
          <Skeleton loading>
            <Badge>Unknown</Badge>
          </Skeleton>
        </HStack>
      </Card.Header>
      <Card.Body py="4">
        <Skeleton loading mb="2">
          <Card.Title>Simple title</Card.Title>
        </Skeleton>
        <Skeleton loading>
          <Card.Description>Simple card description</Card.Description>
        </Skeleton>
      </Card.Body>
      <Card.Footer>
        <HStack flex="1" justify="space-between">
          <HStack>
            <Skeleton loading>
              <Avatar name="John Doe" size="xs" />
            </Skeleton>
            <Skeleton loading>
              <Text fontWeight="semibold" textStyle="sm">
                John Doe
              </Text>
            </Skeleton>
          </HStack>
          <Skeleton loading>
            <Button size="sm">View Details</Button>
          </Skeleton>
        </HStack>
      </Card.Footer>
    </Card.Root>
  );
};
