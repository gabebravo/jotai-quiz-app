import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const StartQuiz: FC = () => {
  const navigate = useNavigate();
  const { genre, id } = useParams();

  function handleClick() {
    navigate('/nx-123');
  }

  return (
    <div>
      <h2>Start Quiz Page</h2>
      <p>Genre: {genre}</p>
      <p>id: {id}</p>
      <button type="button" onClick={handleClick}>
        Next Question
      </button>
    </div>
  );
};
