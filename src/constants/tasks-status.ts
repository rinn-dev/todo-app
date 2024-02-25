import { SelectOption } from '../components/select/Select';

export const taskStatuses = [
  {
    id: 1,
    title: 'All',
    value: 'all',
  },
  {
    id: 2,
    title: 'Done',
    value: 'done',
  },
  {
    id: 3,
    title: 'Undone',
    value: 'undone',
  },
] satisfies SelectOption[];
