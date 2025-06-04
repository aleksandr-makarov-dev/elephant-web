import { Flex, Heading, Skeleton, VStack } from "@chakra-ui/react";

export type PageHeadingProps = {
  title?: string;
  subElements?: React.ReactNode;
  loading?: boolean;
  action?: React.ReactNode;
};

export const PageHeading = ({
  title,
  subElements,
  loading = false,
  action,
}: PageHeadingProps) => {
  return (
    <Flex justify="space-between" align="start" gap="2">
      <VStack align="start" gap="2">
        <Skeleton loading={loading}>
          <Heading size="3xl">{title}</Heading>
        </Skeleton>
        {subElements}
      </VStack>
      {action}
    </Flex>
  );
};
