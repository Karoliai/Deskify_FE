import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../src/components/Header/Header";
import { BrowserRouter } from "react-router-dom";

interface FloorData {
  id: number;
  percentage: number;
}

describe("Dashboard test", () => {
  test("renders with given text and user icon", () => {
    const text = "Hello World";
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <Header text={text} />
      </BrowserRouter>
    );
    expect(getByText(text)).toBeInTheDocument();
    expect(getByAltText("profile-icon")).toBeInTheDocument();
  });
});
