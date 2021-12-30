import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formdata = ({
  addItemsToPage,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const [input, setInput] = useState("");
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const inputHandle = (e) => {
    setInput(e.target.value);
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );

    setTodos(newTodo);
    setEditTodo("");
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      if (input === "") return alert("please enter some text");
      addItemsToPage({
        id: uuidv4(),
        title: input,
        completed: false,
      });
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <form onSubmit={formSubmit}>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="Typehere"
          className="task-input"
          value={input}
          onChange={inputHandle}
        />

        <button onClick={formSubmit} type="button" className="btn-note">
          {editTodo ? "Edit" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default Formdata;
