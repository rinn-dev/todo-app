import type { Dispatch, FC, SetStateAction } from 'react';
import './actions.scss';

interface ActionsProps {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}

export const Actions: FC<ActionsProps> = ({ setIsEditing }) => {
  return (
    <div className="actions">
      <button
        type="button"
        onClick={() => setIsEditing(true)}
        className="actions__item"
      >
        Edit
      </button>
      <button className="actions__item actions__item-delete">Delete</button>
    </div>
  );
};
