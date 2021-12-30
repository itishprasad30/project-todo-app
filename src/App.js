import "./App.css";
import Header from "./Header";
import React, { useState } from "react";
import TodoList from "./TodoList";
import Formdata from "./Formdata";
import RuleBox from "./RuleBox";
import DisplayRule from "./DisplayRule";
import Boxmodel from "./Boxmodel";
import SearchArea from "./SearchArea";
import Piechart from "./Piechart";
import DisplayTable from "./DisplayTable";

function App() {
  //for notes box
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  //for rules box
  const [rules, setRules] = useState([]);

  const addItemsToPage = (todo) => {
    setTodos([...todos, todo]);
  };
  console.log(todos);
  return (
    <div className="layout">
      <div>
        <div style={{ display: "flex", minWidth: "900px" }}>
          {/* Search area for finding something */}
          <SearchArea />
          {/* // pie chart here */}
          <Piechart />
        </div>

        <div style={{ display: "flex" }}>
          <Boxmodel />
          <DisplayTable />
        </div>
      </div>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="app-wrapper">
          <div>
            <Header />
          </div>
          <Formdata
            addItemsToPage={addItemsToPage}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>

        <div className="app-wrapper">
          <RuleBox rules={rules} setRules={setRules} />

          <DisplayRule rules={rules} setRules={setRules} />
        </div>
      </div>
    </div>
  );
}

export default App;
