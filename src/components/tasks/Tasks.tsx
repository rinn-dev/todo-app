import { useState, type FC, useMemo } from 'react';
import './styles.scss';
import { Select } from '../select/Select';
import { taskStatuses } from '../../constants/tasks-status';
import { Task } from './Task';
import { Modal } from '../modal/Modal';

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
  const [deletedId, setDeletedId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const taskTobeDeleted = useMemo(
    () => tasks.find((task) => task.id === deletedId),
    [deletedId]
  );

  const initDelete = (id: string) => {
    setDeletedId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log('Deleting task with id:', deletedId);
    setIsModalOpen(false);
  };

  const filteredTasks = useMemo(() => {
    switch (filterStatus) {
      case 'done':
        return tasks.filter((task) => task.completed);
      case 'undone':
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  }, [filterStatus]);

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
        {filteredTasks.map((task) => (
          <Task {...task} key={task.id} initDelete={initDelete} />
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeletedId(null)}
      >
        <div className="tasks__confirmation">
          <h1 className="tasks__confirmation__header">
            Are you sure want to delete the task "{taskTobeDeleted?.title}"?
            This action cannot be undone.
          </h1>
          <div className="tasks__confirmation__actions">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="tasks__confirmation__actions__cancel"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirmDelete}
              className="tasks__confirmation__actions__confirm"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
