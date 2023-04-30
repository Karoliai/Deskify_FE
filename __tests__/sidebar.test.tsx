import { fireEvent, render } from "@testing-library/react";
import Sidebar from "../src/components/Sidebar/Sidebar";
import jest from "jest-mock";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { expect } from "vitest";

describe("Sidebar component", () => {
  it("renders the logo image", () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    const logoImage = getByAltText("company-logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage.getAttribute("src")).toEqual("/src/assets/logo.png");
  });

  it("calls the LogOut function when the log-out button is clicked", () => {
    const navigateMock = jest.fn();
    jest
      .spyOn(require("react-router"), "useNavigate")
      .mockReturnValue(navigateMock);

    const { getByRole } = render(<Sidebar />);
    const logOutButton = getByRole("button");
    fireEvent.click(logOutButton);

    expect(navigateMock).toHaveBeenCalledWith("/login");
  });

  it("removes the isAdmin key from localStorage when the log-out button is clicked", () => {
    const navigateMock = jest.fn();
    jest
      .spyOn(require("react-router"), "useNavigate")
      .mockReturnValue(navigateMock);

    const { getByRole } = render(<Sidebar />);
    const logOutButton = getByRole("button");
    fireEvent.click(logOutButton);

    expect(localStorage.getItem("isAdmin")).toBeNull();
  });
});
