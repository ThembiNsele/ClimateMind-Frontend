import { rest } from 'msw';

// Mock responses
import myths from './responses/myths.json';
import session from './responses/session.json';
import questions from './responses/questions.json';
import scores from './responses/scores.json';
import personalValues from './responses/personal-values.json';
import climateFeed from './responses/climate-feed.json';
import solutions from './responses/solutions.json';

export const handlers = [
  rest.post('http://localhost:5000/session', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(session)
    );
  }),
  rest.get('http://localhost:5000/myths', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(myths)
    );
  }),
  rest.get('http://localhost:5000/questions', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(questions)
    );
  }),
  rest.post('http://localhost:5000/scores', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(201),
      ctx.json(scores)
    );
  }),
  rest.get(
    `http://localhost:5000/personal_values?quizId=${session.sessionId}`,
    (req, res, ctx) => {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json(personalValues)
      );
    }
  ),
  rest.get(
    `http://localhost:5000/feed?quizId=${session.sessionId}`,
    (req, res, ctx) => {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json(climateFeed)
      );
    }
  ),
  rest.get(
    `http://localhost:5000/solutions?quizId=${session.sessionId}`,
    (req, res, ctx) => {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json(solutions)
      );
    }
  ),
];
