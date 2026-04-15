import { useEffect, type FC } from "react"
import { useTypedSelector } from "./hooks/useTypedSelector"
import { useActions } from "./hooks/useActions"

const TodoList: FC = () => {
  const { todos, loading, error, limit, page } = useTypedSelector(
    (state) => state.todo
  )
  const { fetchTodos, setTodoPage } = useActions()
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {todos.map((item) => (
        <div key={item.id}>
          {item.id} - {item.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((item) => (
          <div
            onClick={() => setTodoPage(item)}
            key={item}
            style={{
              border: item === page ? "2px solid green" : "1px solid gray",
              padding: 10,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
