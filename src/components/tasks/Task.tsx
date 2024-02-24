import { useState, type FC } from 'react';
import Dots from '../../icons/dots.svg';
import './task.scss';
import classNames from 'classnames';
import { Checkbox } from '../checkbox/Checkbox';

interface TaskProps {
  id: string;
  title: string;
  completed: boolean;
}

export const Task: FC<TaskProps> = ({ title, completed }) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(completed);
  return (
    <div className="task">
      <div className="task__info">
        <Checkbox
          isChecked={isCompleted}
          onChange={() => setIsCompleted(!isCompleted)}
        />
        <span className={classNames({ completed: isCompleted })}>{title}</span>
      </div>
      <div className="task__actions">
        <button className="task__actions__trigger">
          <img width={24} height={24} src={Dots} alt="dots" />
        </button>
      </div>
    </div>
  );
};
