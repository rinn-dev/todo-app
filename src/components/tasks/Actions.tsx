import type { Dispatch, FC, SetStateAction } from 'react';
import './actions.scss';

interface ActionsProps {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  handleDelete: () => void;
}

export const Actions: FC<ActionsProps> = ({ setIsEditing, handleDelete }) => {
  return (
    <div className="actions">
      <button
        type="button"
        onClick={() => setIsEditing(true)}
        className="actions__item"
      >
        Edit
      </button>
      <button
        type="button"
        onClick={() => handleDelete()}
        className="actions__item actions__item-delete"
      >
        Delete
      </button>
    </div>
  );
};
