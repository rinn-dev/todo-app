import { useState, type FC, ChangeEvent } from 'react';
import './task-input.scss';
import { useCreateTodoMutation } from '../../services/todo';
import { RenderIf } from '../utils/RenderIf';

export const TaskInput: FC = () => {
  const [createTodo] = useCreateTodoMutation();
  const [isRequiredError, setIsRequiredError] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');

  const handleSumit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = title.trim();

    if (value) {
      setTitle('');
      await createTodo(value);
    } else {
      setIsRequiredError(true);
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    if (value) {
      setIsRequiredError(false);
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
          onChange={handleTitleChange}
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
