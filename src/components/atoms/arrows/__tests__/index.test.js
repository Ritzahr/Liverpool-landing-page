import { Arrows } from '..';
import { screen, render, fireEvent } from "@testing-library/react";

describe('Arrow Buttons', () => {
  let mockClick;

  beforeEach(() => {
    mockClick = jest.fn();
    render(<Arrows arrowClick={mockClick} />);
  })

  it('should render both Arrow Buttons on the screen', () => {
    const arrows = screen.getAllByRole("button");

    expect(arrows).not.toBe(null);
    expect(arrows.length).toEqual(2);
  });

  it('should trigger passed-in function when arrow is clicked', () => {
    const arrows = screen.getAllByRole("button");
    const leftArrow = arrows[0];
    const rightArrow = arrows[1];

    fireEvent.click(leftArrow);
    fireEvent.click(rightArrow);
    expect(mockClick).toHaveBeenCalledTimes(2);
    expect(mockClick).toHaveBeenCalledWith("left");
    expect(mockClick).toHaveBeenCalledWith("right");
  });
});
