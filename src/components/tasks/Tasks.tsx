import { useState, type FC } from 'react';
import './styles.scss';
import { Select } from '../select/Select';
import { taskStatuses } from '../../constants/tasks-status';

interface TasksProps {}

export const Tasks: FC<TasksProps> = () => {
  const [filterStatus, setFilterStatus] = useState<string>('all');

  return (
    <div className="tasks">
      <div className="tasks__header">
        <h2>Tasks</h2>
        <Select
          options={taskStatuses}
          value={filterStatus}
          onChange={setFilterStatus}
        />
      </div>
    </div>
  );
};
