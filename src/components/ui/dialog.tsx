import {
  Button,
  CloseButton,
  Dialog as ChakraDialog,
  Portal,
} from "@chakra-ui/react";
import type React from "react";

type DialogProps = {
  title: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  trigger?: React.ReactNode | undefined;
  actions?: React.ReactNode | undefined;
  children?: React.ReactNode | undefined;
};

export const Dialog = ({
  title,
  open,
  actions,
  children,
  trigger,
  setOpen,
}: DialogProps) => {
  return (
    <ChakraDialog.Root
      lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      {trigger && (
        <ChakraDialog.Trigger asChild>{trigger}</ChakraDialog.Trigger>
      )}
      <Portal>
        <ChakraDialog.Backdrop />
        <ChakraDialog.Positioner>
          <ChakraDialog.Content>
            <ChakraDialog.Header>
              <ChakraDialog.Title>{title}</ChakraDialog.Title>
            </ChakraDialog.Header>
            <ChakraDialog.Body>{children}</ChakraDialog.Body>
            <ChakraDialog.Footer>
              <ChakraDialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </ChakraDialog.ActionTrigger>
              {actions}
            </ChakraDialog.Footer>
            <ChakraDialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </ChakraDialog.CloseTrigger>
          </ChakraDialog.Content>
        </ChakraDialog.Positioner>
      </Portal>
    </ChakraDialog.Root>
  );
};
