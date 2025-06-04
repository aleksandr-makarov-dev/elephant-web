import { SimpleGrid, type SimpleGridProps } from "@chakra-ui/react";
import React from "react";

export type GridProps<T> = {
  items?: T[];
  isLoading: boolean;
  isEmpty: boolean;
  isError: boolean;
  emptyState?: React.ReactNode;
  errorState?: React.ReactNode;
  render: (item: T, index: number) => React.ReactNode;
  renderPlaceholder: (index: number) => React.ReactNode;
  placeholderCount: number;
} & SimpleGridProps;

export const Grid = <T,>({
  items,
  isLoading,
  isEmpty,
  isError,
  emptyState,
  errorState,
  render,
  renderPlaceholder,
  placeholderCount,
  ...props
}: GridProps<T>) => {
  if (isLoading) {
    return (
      <SimpleGrid {...props}>
        {Array.from({ length: placeholderCount }, (_, i) =>
          renderPlaceholder(i)
        )}
      </SimpleGrid>
    );
  }

  if (isError) return errorState;

  if (isEmpty) return emptyState;

  return (
    <SimpleGrid {...props}>
      {items?.map((item, i) => render(item, i))}
    </SimpleGrid>
  );
};
