import express from 'express';
import { addTodo, getTodo, getTodos, removeTodo, updateTodo } from '../data.js';

const router = express.Router();

router.post('/todos', (req, res) => {
  const text = req.body.text;
  const addedTodo = addTodo(text);
  res.json({ message: 'Todo added!', todo: addedTodo });
});

router.get('/todos', (req, res) => {
  const todos = getTodos();
  res.json({ todos });
});

router.get('/todos/:id', (req, res) => {
  const todo = getTodo(+req.params.id);
  res.json({ todo });
});

router.patch('/todos/:id', (req, res) => {
  const updatedTodo = updateTodo(+req.params.id, req.body.text);
  res.json({ message: 'Todo updated', todo: updatedTodo });
});

router.delete('/todos/:id', (req, res) => {
  removeTodo(+req.params.id);
  res.json({ message: 'Todo deleted!' });
});

export default router;

// This means: I can give any name I want when importing
// The name doesn’t have to match the exported variable..
// So if I import it like this, it will work:
// import anyName from './routes/todo.js';
