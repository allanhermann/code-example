import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { UserContext } from "../../context/userContext";
import { EmptyState } from "./partials/empty";
import { Header } from "./partials/header";

describe("Header Component", () => {
  it("Test that the link has the correct redirect page", () => {
    const link = render(<Header />).container.querySelector("#goBack");
    expect(link).toHaveAttribute("href", "/login");
  });

  it("Test that the name in the context is shown correctly", () => {
    render(
      <UserContext.Provider value={{ userName: "Test Context Name" }}>
        <Header />
      </UserContext.Provider>
    );
    const text = screen.getByText("Test Context Name");
    expect(text).toBeInTheDocument;
  });
});

describe("Empty State", () => {
  it("Test that the link has the correct redirect page", () => {
    render(<EmptyState />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/login");
  });

  it("Test that the texts are shown correctly", () => {
    render(<EmptyState />);

    expect(
      screen.getByText("It seems like you run through all the Breweries!")
    ).toBeInTheDocument();
    expect(screen.getByText("Click here")).toBeInTheDocument();
    expect(
      screen.getByText("to go back to the login page")
    ).toBeInTheDocument();
  });
});
