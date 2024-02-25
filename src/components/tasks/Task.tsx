import { useState, type FC } from 'react';
import Dots from '../../icons/dots.svg';
import './task.scss';
import classNames from 'classnames';
import { Checkbox } from '../checkbox/Checkbox';
import { RenderIf } from '../utils/RenderIf';
import { Actions } from './Actions';
import { useClickAway } from '../../hooks/useClickAway';

interface TaskProps {
  id: string;
  title: string;
  completed: boolean;
}

export const Task: FC<TaskProps> = ({ title, completed }) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(completed);
  const [isActionsOpen, setIsActionsOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [taskTitle, setTaskTitle] = useState<string>(title);

  const handleOutsideClick = () => {
    setIsActionsOpen(false);
  };
  const ref = useClickAway<HTMLDivElement>({ callback: handleOutsideClick });

  const handleSave = () => {
    // Perform save logic
    setIsEditing(false);
  };

  return (
    <div className="task">
      <div className="task__info">
        <RenderIf condition={!isEditing}>
          <Checkbox
            isChecked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
          />
        </RenderIf>
        <RenderIf condition={!isEditing}>
          <span className={classNames({ completed: isCompleted })}>
            {taskTitle}
          </span>
        </RenderIf>
        <RenderIf condition={isEditing}>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="task__info__input"
          />
        </RenderIf>
      </div>
      <div ref={ref} className="task__actions">
        <RenderIf condition={!isEditing}>
          <button
            type="button"
            role="menu"
            onClick={() => setIsActionsOpen(!isActionsOpen)}
            className="task__actions__trigger"
          >
            <img width={24} height={24} src={Dots} alt="dots" />
          </button>
          <RenderIf condition={isActionsOpen}>
            <Actions setIsEditing={setIsEditing} />
          </RenderIf>
        </RenderIf>
        <RenderIf condition={isEditing}>
          <button
            type="button"
            onClick={handleSave}
            className="task__actions__save"
          >
            Save
          </button>
        </RenderIf>
      </div>
    </div>
  );
};
