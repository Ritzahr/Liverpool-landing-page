import { act, fireEvent, render, screen } from "@testing-library/react";
import { CalendarArrow } from "..";

describe("Calendar Arrow", () => {
  const mockScrollBy = jest.fn();
  const mockContainerRef = { current: { scrollBy: mockScrollBy } };
  beforeEach(() => {
    render(<CalendarArrow containerRef={mockContainerRef} />);
  });

  it("renders on the screen", () => {
    const arrow = screen.getByRole("button");

    expect(arrow).toBeInTheDocument();
    expect(arrow).not.toBe();
  });

  it("when clicked calls the onClick function", async () => {
    const arrow = screen.getByRole("button");

    act(() => {
      fireEvent.click(arrow);
    });

    expect(mockScrollBy).toHaveBeenCalled();
  });
});
