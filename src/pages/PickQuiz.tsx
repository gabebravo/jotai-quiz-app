import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const PickQuiz: FC = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('start/Movies/st-123');
  }

  return (
    <div>
      <h2>Pick Quiz Page</h2>
      <button type="button" onClick={handleClick}>
        Start Quiz
      </button>
    </div>
  );
};
