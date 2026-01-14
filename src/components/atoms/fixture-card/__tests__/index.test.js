import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from "@testing-library/user-event";
import { FixtureCard } from '../index';

describe('FixtureCard', () => {
  const mockFixtures = [
    { date: '2024-08-10', team: 'Team A', side: 'Home' },
    { date: '2024-08-17', team: 'Team B', side: 'Away' },
  ];

  const setup = (overrides = {}) => {
    const props = {
      games: mockFixtures,
      setClickedMonth: jest.fn(),
      setIsHovering: jest.fn(),
      setHoveredTeam: jest.fn(),
      ...overrides
    }
    
    render(<FixtureCard {...props} />);
    return { props };
  }

  it('should render card and fixtures on the page', () => {
    setup();
    const fixtureCard = screen.getByTestId('fixture-card');
    const fixtures = screen.getAllByTestId('game');

    expect(fixtureCard).toBeInTheDocument();
    expect(fixtures).toHaveLength(2);
  });

  it('should call passed-in function, when user clicks on cross button', async () => {
    const user = userEvent.setup();
    const { props } = setup();

    const exitBTN = screen.getByRole('button');
    await user.click(exitBTN)

    expect(props.setClickedMonth).toHaveBeenCalled();
    expect(props.setClickedMonth).toHaveBeenCalledWith(null);
  });

  it('should set team when hovering over the fixture', async () => {
    const user = userEvent.setup();
    const { props } = setup();

    const fixtures = screen.getAllByTestId('game');
    const teamName = within(fixtures[0]).getByText("Team A");

    await user.hover(fixtures[0]);

    expect(props.setHoveredTeam).toHaveBeenCalledWith(teamName.innerHTML);
    expect(props.setIsHovering).toHaveBeenCalledWith(true);
  })
  it('clears team when user hovers off of the fixture', async () => {
    const user = userEvent.setup();
    const { props } = setup();

    const fixtures = screen.getAllByTestId('game');

    await user.hover(fixtures[0]);
    await user.unhover(fixtures[0]);

    expect(props.setIsHovering).toHaveBeenCalledWith(true);
    expect(props.setIsHovering).toHaveBeenLastCalledWith(false);
  })
});
