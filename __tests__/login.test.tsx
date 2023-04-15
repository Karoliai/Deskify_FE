import React from "react";
import { beforeEach, describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../src/pages/Login/Login";

describe("Login test", () => {
  beforeEach(() => {
    render(<Login />);
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
});
