import Header from './components/Header';
import goalsImg from './assets/goals.jpg';
import CourseGoals from './components/CourseGoals';
import { useState } from 'react';
import NewGoalForm from './components/NewGoalForm';

function App() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Learn TS',
      description: 'Learn TypeScript from the ground up.',
    },
    {
      id: 2,
      title: 'Practice TS',
      description: 'Practice working with TypeScript.',
    },
  ]);

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((g) => g.id !== id));
  }

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) =>
      prevGoals.concat({ id: Math.random(), title: goal, description: summary })
    );
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoalForm onAdd={handleAddGoal} />
      <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
