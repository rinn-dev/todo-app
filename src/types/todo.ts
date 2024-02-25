export interface Todos {
  todos: Todo[];
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
