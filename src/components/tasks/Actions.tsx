import type { FC } from 'react';
import './actions.scss';

interface ActionsProps {}

export const Actions: FC<ActionsProps> = () => {
  return (
    <div className="actions">
      <button className="actions__item">Edit</button>
      <button className="actions__item actions__item-delete">Delete</button>
    </div>
  );
};
