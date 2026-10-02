import TodoItem from '../TodoItem/TodoItem'

function TodoList({ tasks }) {
  return (
    <section>
      {tasks.map((task) => (
        <TodoItem
          key={task}
          text={task}
        />
      ))}
    </section>
  )
}

export default TodoList;