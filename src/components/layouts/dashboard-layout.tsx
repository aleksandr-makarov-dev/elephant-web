import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";

export type DashboardLayoutProps = {
  title: string;
  children?: React.ReactNode;
};

export function DashboardLayout({ title, children }: DashboardLayoutProps) {
  return (
    <React.Fragment>
      <title>{title}</title>
      <Flex h="100vh" bg="bg.muted">
        <Stack w="280px" gap="0" flexShrink="0">
          <Flex
            h="48px"
            bg="bg"
            align="center"
            px="4"
            borderRightWidth="1px"
            borderBottomWidth="1px"
          >
            <Heading>Elephant</Heading>
          </Flex>
          <Stack bg="bg" flex="1" borderRightWidth="1px"></Stack>
        </Stack>

        <Stack w="100%" overflowY="auto" gap="0">
          <Flex
            h="48px"
            bg="bg"
            flexShrink="0"
            position="sticky"
            top="0"
            borderBottomWidth="1px"
            zIndex="1"
          />
          <Box p="6" flex="1">
            {children}
          </Box>
        </Stack>
      </Flex>
    </React.Fragment>
  );
}
