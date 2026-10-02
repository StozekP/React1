import { useState } from 'react'

function TodoForm({ onAddTask }) {
  const [text, setText] = useState("")

  const handleAdd = () => {
    if (text.trim() === "") {
      alert("Ziomek wpisz cos synku")
    } else {
      onAddTask(text)
      setText("")
    }
  }

  return (
    <div>
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Wpisz zadanie..."
      />

      <button onClick={handleAdd}>
        Dodaj
      </button>

      <p>Wpisujesz: {text}</p>
    </div>
  )
}

export default TodoForm;
