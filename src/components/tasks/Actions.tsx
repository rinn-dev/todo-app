import {
  forwardRef,
  type Dispatch,
  type SetStateAction,
  CSSProperties,
} from 'react';
import './actions.scss';

interface ActionsProps {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  handleDelete: () => void;
  floatingStyles: CSSProperties;
}

export const Actions = forwardRef<HTMLDivElement, ActionsProps>(
  ({ setIsEditing, handleDelete, floatingStyles }, ref) => {
    return (
      <div ref={ref} style={floatingStyles} className="actions">
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
  }
);
