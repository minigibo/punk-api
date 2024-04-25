import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DrivingCalc from "./DrivingCalc";

describe("DrivingCalc Component Tests", () => {
  it("should render the DrivingCalc container with title and form elements", () => {
    render(
      <MemoryRouter>
        <DrivingCalc isFullWidth={false} />
      </MemoryRouter>
    );

    const title = screen.getByText(/driving calculator/i);
    expect(title).toBeInTheDocument();

    const weightInput = screen.getByLabelText(/weight \(kg\):/i);
    expect(weightInput).toBeInTheDocument();

    const genderSelect = screen.getByLabelText(/gender:/i);
    expect(genderSelect).toBeInTheDocument();

    const calcButton = screen.getByText(/calculate/i);
    expect(calcButton).toBeInTheDocument();
  });

  it("should only have 'male' and 'female' as options for gender", () => {
    render(
      <MemoryRouter>
        <DrivingCalc isFullWidth={false} />
      </MemoryRouter>
    );

    const genderSelect = screen.getByLabelText(/gender:/i) as HTMLSelectElement;

    const options = Array.from(genderSelect.options).map(
      (option) => option.value
    );

    expect(options).toEqual(["male", "female"]);
  });
});
