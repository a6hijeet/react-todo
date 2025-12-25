import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setToDos] = useState(["test 1", "test 2"]);
  const [newToDo, setNewToDo] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setNewToDo(e.target.value);
  }

  const handleAddToDo = () => {
    const input = document.getElementById("todoInput");
    const val = input.value;
    setToDos(t => [...t, val]);
    input.value = "";
  }

  const handleDelete = (index) => {
    const newToDo = todos.filter((_, i) => i !== index);
    setToDos(newToDo);
  }

  const handleMoveUp = (index) => {
    const updatedToDo = [...todos];
    if(index > 0) {
      [updatedToDo[index], updatedToDo[index - 1]] = [updatedToDo[index - 1], updatedToDo[index]];
      setToDos(updatedToDo);
    }
  }
  const handleMoveDown = (index) => {
    const updatedToDo = [...todos];
    if (index < todos.length - 1) {
      [updatedToDo[index], updatedToDo[index + 1]] = [updatedToDo[index + 1], updatedToDo[index]];
      setToDos(updatedToDo);
    }
  }


  return (
    <div className="todo-wrapper">
      <h1>To Do</h1>
      <div className='form'>
        <input type="text" name="todoInput" id="todoInput" onChange={(e) => handleInput(e)}/>
        <button onClick={handleAddToDo}>Add</button>
      </div>
      <ul className='todo-list-wrapper'>
        {todos.map((todo, index) => 
          <li className="todo-list" key={index}>
            <p>{todo}</p>
            <div className='button-wrapper'>
              <button onClick={() => handleDelete(index)} className='delete'>Delete</button>
              <button onClick={() => handleMoveUp(index)} className='up'>Up</button>
              <button onClick={() => handleMoveDown(index)} className='down'>Down</button>
            </div>
          </li>
          
        )}
      </ul>
    </div>
  )
}

export default App
