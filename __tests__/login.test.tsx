import React from "react";
import { beforeEach, describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../src/pages/Login/Login";
import { BrowserRouter } from "react-router-dom";

describe("Login test", () => {
  beforeEach(() => {
    localStorage.clear();
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  test("No username or password inputted", async () => {
    const loginButton = screen.getByText(/Sign In/i);
    fireEvent.click(loginButton);

    expect(await screen.findByText(/Bad Username or Password/i)).toBeDefined();
  });

  test("Username inputted incorrectly", async () => {
    const usernameInput: HTMLInputElement =
      screen.getByPlaceholderText(/Enter your username/i);
    const passwordInput: HTMLInputElement =
      screen.getByPlaceholderText(/Enter your password/i);
    const loginButton = screen.getByText(/Sign In/i);

    usernameInput.value = "Bad Username";
    passwordInput.value = "admin1";

    fireEvent.click(loginButton);

    expect(await screen.findByText(/Bad Username or Password/i)).toBeDefined();
  });

  test("Username inputted incorrectly", async () => {
    const usernameInput: HTMLInputElement =
      screen.getByPlaceholderText(/Enter your username/i);
    const passwordInput: HTMLInputElement =
      screen.getByPlaceholderText(/Enter your password/i);
    const loginButton = screen.getByText(/Sign In/i);

    usernameInput.value = "qwerty123";
    passwordInput.value = "Bad Password";

    fireEvent.click(loginButton);

    expect(await screen.findByText(/Bad Username or Password/i)).toBeDefined();
  });

  test("Username and password inputted correctly", async () => {
    const usernameInput: HTMLInputElement =
      screen.getByPlaceholderText(/Enter your username/i);
    const passwordInput: HTMLInputElement =
      screen.getByPlaceholderText(/Enter your password/i);
    const loginButton = screen.getByText(/Sign In/i);

    usernameInput.value = "qwerty123";
    passwordInput.value = "admin1";

    fireEvent.click(loginButton);

    expect(await screen.queryByText(/Bad Username or Password/i)).toBeNull();
  });
  
  test("User is an admin", async () => {
    const usernameInput: HTMLInputElement =
      screen.getByPlaceholderText(/Enter your username/i);
    const passwordInput: HTMLInputElement =
      screen.getByPlaceholderText(/Enter your password/i);
    const loginButton = screen.getByText(/Sign In/i);

    usernameInput.value = "admin";
    passwordInput.value = "admin";

    fireEvent.click(loginButton);

    expect(await localStorage.getItem("isAdmin")).toBeDefined();
  });

  test("User is NOT an admin", async () => {
    const usernameInput: HTMLInputElement =
      screen.getByPlaceholderText(/Enter your username/i);
    const passwordInput: HTMLInputElement =
      screen.getByPlaceholderText(/Enter your password/i);
    const loginButton = screen.getByText(/Sign In/i);

    usernameInput.value = "qwerty123";
    passwordInput.value = "admin1";

    fireEvent.click(loginButton);

    expect(await localStorage.getItem("isAdmin")).toBeNull();
  });
});
