import { useState, type FC } from 'react';
import './task-input.scss';
import { useCreateTodoMutation } from '../../services/todo';
import { RenderIf } from '../utils/RenderIf';

export const TaskInput: FC = () => {
  const [createTodo] = useCreateTodoMutation();
  const [isRequiredError, setIsRequiredError] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');

  const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = title.trim();

    if (value) {
      createTodo(value);
      setIsRequiredError(false);
      setTitle('');
    } else {
      setIsRequiredError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSumit} className="task-input">
        <input
          type="text"
          name="title"
          placeholder="Add your todo..."
          className="task-input__input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="task-input__submit">
          Add
        </button>
      </form>
      <RenderIf condition={isRequiredError}>
        <span className="task-input-error">Title must not be empty!</span>
      </RenderIf>
    </>
  );
};
