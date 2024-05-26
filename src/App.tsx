import { Link, Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import { PickQuiz } from './pages/PickQuiz';
import { StartQuiz } from './pages/StartQuiz';
import { TakeQuiz } from './pages/TakeQuiz';
import { css } from '@emotion/react';

const rootStyles = css`
  display: grid;
  height: 100vh;
  width: 100vw;
  place-items: center;
`;

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go back to the home page</Link>
      </p>
    </div>
  );
}

export const App: FC = () => (
  <div css={rootStyles}>
    <Routes>
      <Route path="/" element={<PickQuiz />}>
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path="/start/:genre/:id" element={<StartQuiz />} />
      <Route path="/:id" element={<TakeQuiz />} />
    </Routes>
  </div>
);
