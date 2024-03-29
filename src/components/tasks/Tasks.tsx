import { useState, type FC, useMemo } from 'react';
import './styles.scss';
import { Select } from '../select/Select';
import { taskStatuses } from '../../constants/tasks-status';
import { Task } from './Task';
import { Modal } from '../modal/Modal';
import { useDeleteTodoMutation, useGetTodosQuery } from '../../services/todo';
import { RenderIf } from '../utils/RenderIf';
import { Skeleton } from './Skeleton';
import { AxiosError } from 'axios';

interface TasksProps {}

export const Tasks: FC<TasksProps> = () => {
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [deletedId, setDeletedId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [deleteTodo, { isLoading }] = useDeleteTodoMutation();

  const {
    data: tasks = [],
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  const taskTobeDeleted = useMemo(
    () => tasks.find((task) => task.id === deletedId),
    [deletedId, tasks]
  );

  const initDelete = (id: string) => {
    setDeletedId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (deletedId) {
      await deleteTodo(deletedId);
      setIsModalOpen(false);
      setDeletedId(null);
    }
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
  }, [filterStatus, tasks]);

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
        <RenderIf condition={isFetching && !isSuccess}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </RenderIf>
        <RenderIf condition={isSuccess}>
          {filteredTasks.map((task) => (
            <Task {...task} key={task.id} initDelete={initDelete} />
          ))}
        </RenderIf>
        <RenderIf condition={isSuccess && !filteredTasks.length}>
          <p className="tasks__list__warning">
            <RenderIf condition={filterStatus === 'all'}>
              No tasks found. Try adding a new todo.
            </RenderIf>
            <RenderIf condition={filterStatus === 'undone'}>
              Congrats! No uncompleted task found.
            </RenderIf>
            <RenderIf condition={filterStatus === 'done'}>
              Try to complete some tasks.
            </RenderIf>
          </p>
        </RenderIf>
        <RenderIf condition={isError}>
          <p className="tasks__list__warning">
            {(error as AxiosError)?.message}: Failed to fetch tasks.
            <br /> Please check your internet connection or api endpoint.
          </p>
        </RenderIf>
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
              {isLoading ? 'Deleting' : 'Delete'}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
