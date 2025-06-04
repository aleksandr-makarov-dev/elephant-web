import { Grid } from "@/components/ui/grid";
import { BoardCard } from "./board-card";
import { BoardCardPlaceholder } from "./board-card-placeholder";
import { EmptyState } from "@/components/ui/empty-state";
import { useBoards } from "../api/get-boards";

export const BoardGrid = () => {
  const boardsQuery = useBoards();

  return (
    <Grid
      columns={3}
      gap="2"
      items={boardsQuery.data}
      isLoading={boardsQuery.isLoading}
      isEmpty={!!boardsQuery.data && boardsQuery.data.length === 0}
      isError={boardsQuery.isError}
      emptyState={
        <EmptyState
          title="No Boards Available"
          description="You haven’t created any boards yet. Start by creating a new board to organize your ideas."
        />
      }
      errorState={
        <EmptyState
          title="Oops! Something Went Wrong"
          description="We couldn’t load your boards. Please check your connection or try refreshing the page."
        />
      }
      render={(item) => (
        <BoardCard
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          status={item.status}
        />
      )}
      placeholderCount={6}
      renderPlaceholder={(index) => (
        <BoardCardPlaceholder key={`grid-card-placeholder-${index}`} />
      )}
    />
  );
};
