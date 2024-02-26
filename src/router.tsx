import { createBrowserRouter } from 'react-router-dom';
import { AppIndex } from './pages';

export const router = createBrowserRouter([
  { path: '/', element: <AppIndex /> },
]);
