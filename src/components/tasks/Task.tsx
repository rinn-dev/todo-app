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

  const handleOutsideClick = () => {
    setIsActionsOpen(false);
  };
  const ref = useClickAway<HTMLDivElement>({ callback: handleOutsideClick });

  return (
    <div className="task">
      <div className="task__info">
        <Checkbox
          isChecked={isCompleted}
          onChange={() => setIsCompleted(!isCompleted)}
        />
        <span className={classNames({ completed: isCompleted })}>{title}</span>
      </div>
      <div ref={ref} className="task__actions">
        <button
          type="button"
          role="menu"
          onClick={() => setIsActionsOpen(!isActionsOpen)}
          className="task__actions__trigger"
        >
          <img width={24} height={24} src={Dots} alt="dots" />
        </button>
        <RenderIf condition={isActionsOpen}>
          <Actions />
        </RenderIf>
      </div>
    </div>
  );
};
