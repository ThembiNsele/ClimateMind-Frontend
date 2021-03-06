import React from 'react';
import { render, wait } from '@testing-library/react';
import PersonalValues from '../../pages/PersonalValuesFeed';
import 'jest-canvas-mock';

// TODO: ResiseObserver and canvas not implemented in JSDOM so cant work out how to test the chart just now
jest.mock('react-chartjs-2', () => ({
  Radar: () => null,
}));

// Mock react router to simulate history.push on button click
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

jest.mock('../../api/getPersonalValues', () => ({
  personalValues: [
    {
      description:
        'You strive to control. Whether that is being dominant over people around you or having the power over resources. The functioning of social institutions requires some degree of status differentiation and so we must treat power as a value.',
      id: 'power',
      name: 'power',
      shortDescription:
        'You strive to control. Whether that is being dominant over people around you or having the power over resources. The functioning of social institutions requires some degree of status differentiation and so we must treat power as a value.',
    },
    {
      description:
        'You are independent and are happiest when choosing, creating or exploring. Self-direction derives from organismic needs for control and mastery. You are likely creative and relish in freedom and choosing your own goals. You are curious, have self-respect, intelligence and value your privacy.',
      id: 'self_direction',
      name: 'self direction',
      shortDescription:
        'You are independent and are happiest when choosing, creating or exploring. Self-direction derives from organismic needs for control and mastery. You are likely creative and relish in freedom and choosing your own goals. You are curious, have self-respect, intelligence and value your privacy.',
    },
    {
      description:
        'You value the understanding, appreciation, tolerance, and protection for the welfare of all people and for nature. Universalism values derive from survival needs of individuals and groups. You are broadminded and are interested in social justice, equality, seeing the world at peace, the world of beauty, unity with nature, wisdom and protecting the environment.',
      id: 'universalism',
      name: 'universalism',
      shortDescription:
        'You value the understanding, appreciation, tolerance, and protection for the welfare of all people and for nature. Universalism values derive from survival needs of individuals and groups. You are broadminded and are interested in social justice, equality, seeing the world at peace, the world of beauty, unity with nature, wisdom and protecting the environment.',
    },
  ],
}));

describe('Climate Personality', () => {
  it('it has the call to action', () => {
    const { getByText } = render(<PersonalValues />);
    expect(
      getByText(
        /You are about to see the effects of climate change and how you can take action against it/i
      )
    ).toBeInTheDocument();
  });
  it('has the button to advance to the feed', () => {
    const { getByText } = render(<PersonalValues />);
    expect(getByText(/retake the quiz/i)).toBeInTheDocument();
  });
  it('has the button to advance to re-take the quiz', () => {
    const { getByText } = render(<PersonalValues />);
    expect(getByText(/yes, i???m ready!/i)).toBeInTheDocument();
  });
  it('it has the correct number of cards', async () => {
    const { queryAllByTestId } = render(<PersonalValues />);
    const cards = queryAllByTestId('CMCard');
    wait(() => expect(cards.length).toBe(3));
  });
});
