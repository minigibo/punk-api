import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { BrowserRouter as Router } from "react-router-dom";
import { Beer } from "../../data/types";

describe("Card Component Tests", () => {
  it("should render the Card component", () => {
    const mockBeer: Partial<Beer> = {
      name: "Test Beer",
      description: "Test description",
      abv: 5,
      image_url: "https://example.com/beer-image.jpg",
    };

    render(
      <Router>
        <Card beer={mockBeer as Beer} beerId="1" />
      </Router>
    );

    const cardElement = screen.getByRole("link", { name: /test beer/i });
    expect(cardElement).toBeInTheDocument();
  });
});
