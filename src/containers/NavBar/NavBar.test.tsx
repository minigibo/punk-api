import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("NavBar Component Tests", () => {
  it("should render the NavBar", () => {
    render(
      <MemoryRouter>
        <NavBar
          setIsFullWidth={() => {}}
          handleInput={() => {}}
          searchTerm=""
          handleFiltersChange={() => {}}
          activeFilters={[]}
        />
      </MemoryRouter>
    );

    const navBar = screen.getByRole("navigation");
    expect(navBar).toBeInTheDocument();
  });

  it("should render the menu icon and respond to clicks", async () => {
    render(
      <MemoryRouter>
        <NavBar
          setIsFullWidth={() => {}}
          handleInput={() => {}}
          searchTerm=""
          handleFiltersChange={() => {}}
          activeFilters={[]}
        />
      </MemoryRouter>
    );

    const menuIcon = screen.getByRole("img", { name: /menu icon/i });

    expect(menuIcon).toBeInTheDocument();

    await userEvent.click(menuIcon);
  });
});
