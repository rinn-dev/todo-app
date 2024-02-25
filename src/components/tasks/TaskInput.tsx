import type { FC } from 'react';
import './task-input.scss';

export const TaskInput: FC = () => {
  const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSumit} className="task-input">
      <input
        type="text"
        placeholder="Add your todo..."
        className="task-input__input"
      />
      <button type="submit" className="task-input__submit">
        Add
      </button>
    </form>
  );
};
