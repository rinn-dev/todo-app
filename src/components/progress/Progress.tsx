import type { FC } from 'react';
import './styles.scss';

interface ProgressProps {
  totalTasks: number;
  finishedTasks: number;
}

export const Progress: FC<ProgressProps> = ({ totalTasks, finishedTasks }) => {
  const progress = (finishedTasks / totalTasks) * 100;

  return (
    <div className="progress">
      <h1 className="progress__header">Progress</h1>
      <div className="progress__bar">
        <div
          className="progress__bar__thumb"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="progress__count">{finishedTasks} completed</span>
    </div>
  );
};
