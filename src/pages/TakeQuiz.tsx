import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const TakeQuiz: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  function handleClick() {
    navigate('/');
  }

  return (
    <div>
      <h2>Take Quiz Page</h2>
      <p>id: {id}</p>
      <button type="button" onClick={handleClick}>
        Pick New Quiz
      </button>
    </div>
  );
};
