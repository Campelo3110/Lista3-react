import React, { useState } from 'react';

function ListaKey() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Tarefa 1' },
    { id: 2, text: 'Tarefa 2' },
    { id: 3, text: 'Tarefa 3' },
  ])

  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => handleRemoveTask(task.id)}>Remover</button>
        </li>
      ))}
    </ul>
  )
}

export default ListaKey;