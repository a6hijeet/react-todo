import { useState } from 'react'
import './App.css'

function App() {
  const [toDos, setToDos] = useState(['Task 1', 'Task 2']);
  const [newToDo, setNewToDo] = useState('');

  const handleInput = (e) => {
    e.preventDefault();
    setNewToDo(e.target.value);
  }

  const handleAddToDo = () => {
    const input = document.getElementById('toDoInput');
    const val = input.value;
    if (val.trim() !== "") {
      setToDos(t => [...t, val]);
      input.value = '';
    }
  }

  const handleDelete = (index) => {
    const newToDo = toDos.filter((_, i) => i !== index);
    setToDos(newToDo);
  }

  const handleMoveUp = (index) => {
    const updatedToDo = [...toDos];
    if(index > 0) {
      [updatedToDo[index], updatedToDo[index - 1]] = [updatedToDo[index - 1], updatedToDo[index]];
      setToDos(updatedToDo);
    }
  }
  const handleMoveDown = (index) => {
    const updatedToDo = [...toDos];
    if (index < toDos.length - 1) {
      [updatedToDo[index], updatedToDo[index + 1]] = [updatedToDo[index + 1], updatedToDo[index]];
      setToDos(updatedToDo);
    }
  }


  return (
    <div className='todo-wrapper'>
      <h1>To Do</h1>
      <div className='form'>
        <input type='text' name='todoInput' id='toDoInput' onChange={(e) => handleInput(e)}/>
        <button onClick={handleAddToDo}>Add</button>
      </div>
      <ul className='todo-list-wrapper'>
        { toDos.length > 0 ?
          toDos.map((toDo, index) => 
          <li className='todo-list' key={index}>
            <p>{toDo}</p>
            <div className='button-wrapper'>
              <button onClick={() => handleDelete(index)} className='delete'>Delete</button>
              <button onClick={() => handleMoveUp(index)} className='up'>Up</button>
              <button onClick={() => handleMoveDown(index)} className='down'>Down</button>
            </div>
          </li>
        ):  <p>Add your list</p> 
        }
      </ul>
    </div>
  )
}

export default App
