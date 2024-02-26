import { Progress } from '../components/progress/Progress';
import { TaskInput } from '../components/tasks/TaskInput';
import { Tasks } from '../components/tasks/Tasks';
import { useGetTodosQuery } from '../services/todo';
import '../styles/app.scss';

export const AppIndex = () => {
  const { data: tasks = [] } = useGetTodosQuery();
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <main className="app">
      <div className="app__card">
        <div className="app__progress">
          <Progress
            totalTasks={tasks.length}
            finishedTasks={completedTasks.length}
          />
        </div>
        <div className="app__tasks">
          <Tasks />
        </div>
        <TaskInput />
      </div>
    </main>
  );
};
