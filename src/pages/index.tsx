import { Progress } from '../components/progress/Progress';
import '../styles/app.scss';

export const AppIndex = () => {
  return (
    <main className="app">
      <div className="app__card">
        <div className="app__progress">
          <Progress totalTasks={10} finishedTasks={3} />
        </div>
      </div>
    </main>
  );
};
