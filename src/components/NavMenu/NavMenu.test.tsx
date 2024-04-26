import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavMenu from "./NavMenu";

describe("NavMenu Component Tests", () => {
  it("should render the NavMenu component", () => {
    render(
      <MemoryRouter>
        <NavMenu
          onClose={() => {}}
          handleInput={() => {}}
          searchTerm=""
          handleFiltersChange={() => {}}
          activeFilters={[]}
        />
      </MemoryRouter>
    );

    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
  });

  it("should render the filtering div", () => {
    render(
      <MemoryRouter>
        <NavMenu
          onClose={() => {}}
          handleInput={() => {}}
          searchTerm=""
          handleFiltersChange={() => {}}
          activeFilters={[]}
        />
      </MemoryRouter>
    );

    const filteringDiv = screen.getByTestId("nav-menu__filtering");
    expect(filteringDiv).toBeInTheDocument();
  });
});
