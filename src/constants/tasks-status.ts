import { SelectOption } from '../components/select/Select';

export const taskStatuses = [
  {
    title: 'All',
    value: 'all',
  },
  {
    title: 'Done',
    value: 'done',
  },
  {
    title: 'Undone',
    value: 'undone',
  },
] satisfies SelectOption[];
