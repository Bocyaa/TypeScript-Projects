interface Todo {
  id: number;
  text: string;
}

let TODOS: Todo[] = [];

export function addTodo(text: string) {
  const newTodo = { id: Math.random(), text };
  TODOS.push(newTodo);
  return newTodo;
}

export function getTodo(id: number) {
  // 1. Iterates over the array, executes callback on each element
  // 2. If the callback returns 'true', that element is returned immediately
  // 3. When callback returns only 'false', .find() returns 'undefined'

  const todo = TODOS.find((t) => t.id === id);
  if (!todo) {
    throw new Error('Todo not found!');
  }
  return todo;
}

export function getTodos() {
  return TODOS;
}

export function removeTodo(id: number) {
  // 1. Iterates over the array, executes callback on each element
  // 2. It returns a new array with only the elements for which the callback returns true.
  TODOS = TODOS.filter((t) => t.id !== id);
}

export function updateTodo(id: number, text: string) {
  const todo = getTodo(id);
  todo.text = text;
  return todo;
}
