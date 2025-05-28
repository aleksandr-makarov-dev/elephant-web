import {
  Box,
  Flex,
  Group,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaFolder, FaInfoCircle, FaVectorSquare } from "react-icons/fa";
import { FaBell, FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import { useLocation } from "react-router";

type DashboardLayoutProps = {
  title: string;
  children?: React.ReactNode;
};

type NavItemProps = {
  text: string;
  href: string;
  icon: React.ReactNode;
};

const NavItem = ({ text, href, icon }: NavItemProps) => {
  const { pathname } = useLocation();

  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      display="flex"
      alignItems="center"
      flexDirection="row"
      gap="0.5rem"
      py="1.5"
      pl="4"
      pr="3"
      borderRadius="sm"
      outline="none"
      fontWeight={isActive ? "medium" : "normal"}
      bg={isActive ? "blue.subtle" : "none"}
      color={isActive ? "blue.fg" : "fg.muted"}
      _hover={{ textDecoration: "none", color: "fg", bg: "gray.subtle" }}
    >
      <Flex gap="3" align="center">
        <Icon>{icon}</Icon>
        <Text>{text}</Text>
      </Flex>
    </Link>
  );
};

export function DashboardLayout({ title, children }: DashboardLayoutProps) {
  return (
    <React.Fragment>
      <title>{title}</title>
      <Flex minH="100vh">
        <Box
          as="aside"
          bg="bg.subtle"
          w="280px"
          borderRightWidth="1px"
          borderColor="border"
        >
          <Box h="56px" px="4" py="0">
            <Flex align="center" h="100%" gap="2">
              <Icon color="fg.info" size="md">
                <FaVectorSquare />
              </Icon>
              <Heading>Elephant</Heading>
            </Flex>
          </Box>
          <Stack px="4" py="6" gap="0.5">
            <NavItem
              href="/dashboard/boards"
              text="Projects"
              icon={<FaFolder />}
            />
            <NavItem href="/dashboard/users" text="Users" icon={<FaFolder />} />
            <NavItem href="/dashboard/files" text="Files" icon={<FaFolder />} />
          </Stack>
        </Box>
        <Box as="main" bg="bg" flex="1">
          <Stack gap="0">
            <Box h="56px" px="6" borderBottomWidth="1px" borderColor="border">
              <Flex align="center" justify="space-between" h="100%" gap="4">
                <InputGroup
                  startElement={
                    <Icon>
                      <FaMagnifyingGlass />
                    </Icon>
                  }
                >
                  <Input variant="subtle" width="sm" />
                </InputGroup>
                <Group>
                  <IconButton variant="ghost">
                    <FaBell />
                  </IconButton>
                  <IconButton variant="ghost">
                    <FaInfoCircle />
                  </IconButton>
                  <IconButton variant="ghost">
                    <FaUser />
                  </IconButton>
                </Group>
              </Flex>
            </Box>
            <Box p="6">{children}</Box>
          </Stack>
        </Box>
      </Flex>
    </React.Fragment>
  );
}
