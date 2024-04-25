import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";
import { Beer } from "../../data/types";

describe("Home Component Tests", () => {
  it("should render the Home component", () => {
    const sampleBeers: Beer[] = [];

    render(
      <MemoryRouter>
        <Home filteredBeers={sampleBeers} isFullWidth={false} />
      </MemoryRouter>
    );

    const homeComponent = screen.getByTestId("home-container");
    expect(homeComponent).toBeInTheDocument();
  });

  it("should render the 'home__beerList' div in the Home component", () => {
    render(
      <MemoryRouter>
        <Home filteredBeers={[]} isFullWidth={false} />
      </MemoryRouter>
    );

    const beerListDiv = screen.getByTestId("home__beerList");

    expect(beerListDiv).toBeInTheDocument();
  });
});
