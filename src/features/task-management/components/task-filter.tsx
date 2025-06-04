import { Flex, Group, Input, InputGroup, NativeSelect } from "@chakra-ui/react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const TaskFilter = () => {
  return (
    <Flex>
      <Group>
        <InputGroup startElement={<FaMagnifyingGlass />}>
          <Input bg="bg" />
        </InputGroup>
        <NativeSelect.Root width="240px" bg="bg">
          <NativeSelect.Field placeholder="Select option">
            <option value="react">All Boards</option>
            <option value="vue">Drafts</option>
            <option value="angular">Published</option>
            <option value="svelte">Archived</option>
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </Group>
    </Flex>
  );
};
