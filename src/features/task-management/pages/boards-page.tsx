import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { PageHeading } from "@/components/layouts/page-heading";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import { FaFileImport } from "react-icons/fa";
import { FaFileCirclePlus } from "react-icons/fa6";
import { BoardFilter } from "../components/board-filter";
import { BoardGrid } from "../components/board-grid";

export function BoardsPage() {
  return (
    <DashboardLayout title="Boards">
      <Stack gap="4">
        <PageHeading
          title="Your Boards"
          action={
            <ButtonGroup>
              <Button variant="outline" bg="bg">
                <FaFileImport /> Import
              </Button>
              <Button>
                <FaFileCirclePlus /> Create Board
              </Button>
            </ButtonGroup>
          }
        />
        <BoardFilter />
        <BoardGrid />
      </Stack>
    </DashboardLayout>
  );
}
