import { fireEvent, render, screen } from "@testing-library/react";
import { Cross } from "../index";

describe("Cross", () => {
  it("renders on the page", () => {
    render(<Cross />);

    const cross = screen.getByRole("button");
    expect(cross).toBeInTheDocument();
  });

  it("calls function when clicked", () => {
    const mockSetCardClicked = jest.fn();
    render(<Cross setCardClicked={mockSetCardClicked} />);

    const cross = screen.getByRole("button");
    fireEvent.click(cross);

    expect(mockSetCardClicked).toHaveBeenCalledWith(null);
  });
});
