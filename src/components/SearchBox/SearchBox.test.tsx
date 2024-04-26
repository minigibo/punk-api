import { render, screen } from "@testing-library/react";
import SearchBox from "./SearchBox";

describe("SearchBox Component Tests", () => {
  it("should render the SearchBox component", () => {
    render(<SearchBox searchTerm="" handleInput={() => {}} />);
    const searchBox = screen.getByPlaceholderText("Filter by Name");
    expect(searchBox).toBeInTheDocument();
  });

  it("should have the correct placeholder text 'Filter by Name'", () => {
    render(<SearchBox searchTerm="" handleInput={() => {}} />);
    const searchInput = screen.getByPlaceholderText("Filter by Name");
    expect(searchInput).toBeInTheDocument();
  });
});
