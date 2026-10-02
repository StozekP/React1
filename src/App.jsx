import './App.css'
import { useState } from 'react'
import Header from './components/Header/Header'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import UserInfo from './components/UserInfo/UserInfo'


function App() {
  const name = 'Goat'
  const age = 10

  const [tasks, setTasks] = useState([
    "Nauczyć się Reacta",
    "Zrobić zadanie domowe",
    "Powtórzyć JavaScript"
  ])

  return (
    <>
      <Header />
      <UserInfo name={name} age={age} />
      <TodoForm onAddTask={addTask} />
      <TodoList tasks={tasks} />


    </>
  )
}

export default App;
