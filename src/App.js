import react from 'react'; 
import TodoForm from './components/TodoForm'; 
import Todolist from './components/Todolist';
import './App.css';

function App() {
  return (
    <div className="Todoapp">
      <Todolist />
    </div>
  );
}

export default App;
