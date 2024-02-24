import { useState, type FC } from 'react';
import './styles.scss';
import { Select } from '../select/Select';
import { taskStatuses } from '../../constants/tasks-status';
import { Task } from './Task';

interface TasksProps {}

const tasks = [
  {
    id: '5fe3f4ca-193c-4170-83c1-cb5a19908601',
    title: 'Buy food for dinner',
    completed: true,
  },
  {
    id: 'f619466c-a016-4281-b584-7db2795d103d',
    title: 'Call Marie at 10.00 PM',
    completed: false,
  },
  {
    id: '5fe3f4ca-193c-4170-83c1-cb5a19908602',
    title: 'Write a react blog post',
    completed: false,
  },
];

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
      <div className="tasks__list">
        {tasks.map((task) => (
          <Task {...task} key={task.id} />
        ))}
      </div>
    </div>
  );
};
