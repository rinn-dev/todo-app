import type { FC } from 'react';
import Dots from '../../icons/dots.svg';
import './task.scss';
import classNames from 'classnames';

interface TaskProps {
  id: string;
  title: string;
  completed: boolean;
}

export const Task: FC<TaskProps> = ({ title, completed }) => {
  return (
    <div className="task">
      <div className="task__info">
        <span className={classNames({ completed })}>{title}</span>
      </div>
      <div className="task__actions">
        <button className="task__actions__trigger">
          <img width={24} height={24} src={Dots} alt="dots" />
        </button>
      </div>
    </div>
  );
};
