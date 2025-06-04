import type { BoardResponse } from "../types/board";

export const mockBoards: BoardResponse[] = [
  {
    id: 1,
    title: "Welcome Board",
    description: "Getting started with the basics.",
    status: "PUBLISHED",
    createdAt: new Date("2025-01-15T10:00:00Z"),
  },
  {
    id: 2,
    title: "Project Alpha",
    description: "Initial planning and requirements gathering.",
    status: "DRAFT",
    createdAt: new Date("2025-02-03T09:30:00Z"),
  },
  {
    id: 3,
    title: "Sprint Goals",
    description: "Define the goals for the current sprint.",
    status: "PUBLISHED",
    createdAt: new Date("2025-03-01T14:45:00Z"),
  },
  {
    id: 4,
    title: "Marketing Plan",
    description: "Outline Q2 marketing initiatives.",
    status: "ARCHIVED",
    createdAt: new Date("2024-12-20T08:15:00Z"),
  },
  {
    id: 5,
    title: "Design Review",
    description: "Collect feedback on UI/UX designs.",
    status: "DRAFT",
    createdAt: new Date("2025-04-12T12:20:00Z"),
  },
  {
    id: 6,
    title: "Product Roadmap",
    description: "Vision and plans for the next 6 months.",
    status: "PUBLISHED",
    createdAt: new Date("2025-01-10T11:05:00Z"),
  },
  {
    id: 7,
    title: "Bug Triage",
    description: "List of high-priority bugs to address.",
    status: "PUBLISHED",
    createdAt: new Date("2025-05-04T16:00:00Z"),
  },
  {
    id: 8,
    title: "Team Retrospective",
    description: "Insights and learnings from last sprint.",
    status: "ARCHIVED",
    createdAt: new Date("2025-02-28T17:30:00Z"),
  },
  {
    id: 9,
    title: "Release Notes",
    description: "Details of the v1.3.0 release.",
    status: "PUBLISHED",
    createdAt: new Date("2025-03-22T07:50:00Z"),
  },
  {
    id: 10,
    title: "Client Feedback",
    description: "Comments and reviews from end users.",
    status: "DRAFT",
    createdAt: new Date("2025-05-20T13:10:00Z"),
  },
];
