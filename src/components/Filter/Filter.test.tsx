import { render, screen } from "@testing-library/react";
import Filters from "./Filter";

describe("Filters Component Tests", () => {
  it("should render the Filters component", () => {
    render(<Filters handleFiltersChange={() => {}} activeFilters={[]} />);

    const filtersContainer = screen.getByTestId("filters-list");
    expect(filtersContainer).toBeInTheDocument();
  });

  it("should contain three labels with associated form controls", () => {
    render(<Filters handleFiltersChange={() => {}} activeFilters={[]} />);

    const labels = screen.getAllByRole("checkbox");
    expect(labels.length).toBe(3);
  });
});
