import React from "react";
import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "../src/pages/Dashbord/Dashboard";

interface FloorData {
  id: number;
  percentage: number;
}

describe("Dashboard test", () => {
  beforeEach(() => {
    render(<Dashboard />);
  });

  const mockFloorData: FloorData[] = [
    { id: 1, percentage: 50 },
    { id: 2, percentage: 80 },
    { id: 3, percentage: 20 },
    { id: 4, percentage: 100 },
    { id: 5, percentage: 30 },
    { id: 6, percentage: 70 },
    { id: 7, percentage: 90 },
    { id: 8, percentage: 40 },
    { id: 9, percentage: 60 },
  ];

  

  test("renders dashboard title", () => {
    const dashboardTitle = screen.getByText(/Floors/i);
    expect(dashboardTitle).toBeInTheDocument();
  });

  test("renders floor cards", () => {
    const floorCards = screen.getAllByTestId("floor-card");
    expect(floorCards).toHaveLength(9);
  });

  test("renders user greeting", () => {
    const userGreeting = screen.getByText(/Good/i);
    expect(userGreeting).toBeInTheDocument();
  });

  test("renders floor cards correctly", () => {
    const floorCards = screen.getAllByTestId("floor-card");

    floorCards.forEach((card, index) => {
      const floorId = mockFloorData[index].id;
      expect(card).toHaveTextContent(`${floorId}`);
    });
  });
});
