import { useState, type FC } from 'react';
import classNames from 'classnames';
import { Checkbox } from '../checkbox/Checkbox';
import { RenderIf } from '../utils/RenderIf';
import { Actions } from './Actions';
import { useClickAway } from '../../hooks/useClickAway';
import Dots from '../../icons/dots.svg';
import './task.scss';
import { useFloating } from '../../hooks/useFloating';
import {
  useSetStatusMutation,
  useUpdateTitleMutation,
} from '../../services/todo';

interface TaskProps {
  id: string;
  title: string;
  completed: boolean;
  initDelete: (id: string) => void;
}

export const Task: FC<TaskProps> = ({ title, completed, initDelete, id }) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(completed);
  const [isActionsOpen, setIsActionsOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [taskTitle, setTaskTitle] = useState<string>(title);
  const { refs, floatingStyles } = useFloating();
  const [setStatus] = useSetStatusMutation();
  const [updateTitle] = useUpdateTitleMutation();

  const handleOutsideClick = () => {
    setIsActionsOpen(false);
  };
  const ref = useClickAway<HTMLDivElement>({ callback: handleOutsideClick });

  const handleSave = async () => {
    await updateTitle({ id, title: taskTitle });
    setIsEditing(false);
  };

  const handleDelete = () => {
    initDelete(id);
  };

  const toggleTaskStatus = async () => {
    const completed = !isCompleted;
    setIsCompleted(completed);
    await setStatus({ id, completed });
  };

  return (
    <div className="task">
      <div className="task__info">
        <RenderIf condition={!isEditing}>
          <Checkbox isChecked={isCompleted} onChange={toggleTaskStatus} />
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
            ref={refs.setReference}
            onClick={() => setIsActionsOpen(!isActionsOpen)}
            className="task__actions__trigger"
          >
            <img width={24} height={24} src={Dots} alt="dots" />
          </button>
          <RenderIf condition={isActionsOpen}>
            <Actions
              ref={refs.setFloating}
              setIsEditing={setIsEditing}
              handleDelete={handleDelete}
              floatingStyles={floatingStyles}
            />
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
