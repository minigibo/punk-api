import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BeerInfoCard from "./BeerInfo";

describe("BeerInfoCard Component Tests", () => {
  it("should render the BeerInfoCard component", async () => {
    render(
      <MemoryRouter initialEntries={["/beer/1"]}>
        <Routes>
          <Route
            path="/beer/:beerId"
            element={<BeerInfoCard isFullWidth={false} />}
          />
        </Routes>
      </MemoryRouter>
    );

    const beerInfoCard = await waitFor(() =>
      screen.getByTestId("beer-info-card")
    );

    expect(beerInfoCard).toBeInTheDocument();
  });

  it("should display the correct image", async () => {
    render(
      <MemoryRouter initialEntries={["/beer/1"]}>
        <Routes>
          <Route
            path="/beer/:beerId"
            element={<BeerInfoCard isFullWidth={false} />}
          />
        </Routes>
      </MemoryRouter>
    );

    const beerImage = await waitFor(() => screen.getByRole("img"));

    expect(beerImage).toBeInTheDocument();
  });
});
