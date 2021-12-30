const TodoList = ({ todos, setTodos, setEditTodo, editTodo }) => {
  const handleThic = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodos = todos.find((todo) => todo.id === id);
    setEditTodo(findTodos);
  };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo, idx) => (
        <li key={idx} style={{ display: "flex" }}>
          <input type="text" value={todo.title} className="task-input" />

          <div>
            <button
              title="Done"
              className="button-complete "
              onClick={() => handleThic(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              title="Edit"
              className="button-edit "
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              title="Delete"
              className="button-delete"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
