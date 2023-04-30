import React from "react";
import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "../src/pages/Dashbord/Dashboard";
import { BrowserRouter } from "react-router-dom";
import jest from "jest-mock";

interface FloorData {
  id: number;
  percentage: number;
}

describe("Dashboard test", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
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

  test("renders floor cards correctly", () => {
    const floorCards = screen.getAllByTestId("floor-card");

    floorCards.forEach((card, index) => {
      const floorId = mockFloorData[index].id;
      expect(card).toHaveTextContent(`${floorId}`);
    });
  });
});

describe("Dashboard component", () => {
  describe("getGreetingsByTimeOfDay function", () => {
    test("returns 'Good morning!' in the morning", () => {
      jest
        .spyOn(global.Date, "now")
        .mockImplementationOnce(() =>
          new Date("2023-04-15T07:00:00.000Z").valueOf()
        );

      const { getByTestId } = render(
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      );

      expect(getByTestId("header")).toHaveTextContent("Good morning!");
    });

    test("returns 'Good afternoon!' in the afternoon", () => {
      jest
        .spyOn(global.Date, "now")
        .mockImplementationOnce(() =>
          new Date("2023-04-15T14:00:00.000Z").valueOf()
        );

      const { getByTestId } = render(
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      );

      expect(getByTestId("header")).toHaveTextContent("Good afternoon!");
    });

    test("returns 'Good evening!' in the evening", () => {
      jest
        .spyOn(global.Date, "now")
        .mockImplementationOnce(() =>
          new Date("2023-04-15T20:00:00.000Z").valueOf()
        );

      const { getByTestId } = render(
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      );

      expect(getByTestId("header")).toHaveTextContent("Good evening!");
    });
  });
});
