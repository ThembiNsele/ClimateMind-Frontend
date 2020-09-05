import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import Question from '../../../components/Question';

const TestQuestion = {
  index: 1,
  questionNumber: 1,
  question: 'What is the capital of spain',
  answers: ['Madrid', 'Seville', 'London', 'Alicante', 'Marbella'],
};

const setAnswer = jest.fn();

describe('Question Renders', () => {
  it('it loads', () => {
    const { getByTestId, getByText } = render(
      <Question {...TestQuestion} setAnswer={setAnswer} />
    );
    expect(getByTestId('Question')).toBeInTheDocument();
  });
  it('Displays the question', () => {
    const { getByText } = render(
      <Question {...TestQuestion} setAnswer={setAnswer} />
    );
    expect(getByText('What is the capital of spain')).toBeInTheDocument();
  });
  it('displays all of answers', () => {
    const { getByText } = render(
      <Question {...TestQuestion} setAnswer={setAnswer} />
    );
    expect(getByText('Madrid')).toBeInTheDocument();
    expect(getByText('Seville')).toBeInTheDocument();
    expect(getByText('London')).toBeInTheDocument();
    expect(getByText('Alicante')).toBeInTheDocument();
    expect(getByText('Marbella')).toBeInTheDocument();
  });
  it('matches the snapshot', () => {
    const question = render(
      <Question {...TestQuestion} setAnswer={setAnswer} />
    );
    expect(question).toMatchSnapshot();
  });
});
