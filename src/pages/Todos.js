import React, { useState } from "react";

export function Todos() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todos.find((todo) => todo.todoName === inputValue)) {
      alert("please be unique");
      return;
    }
    setTodos([...todos, { todoName: inputValue, isDone: false }]);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="add your todo"
          value={inputValue}
          onChange={handleChange}
        />

        <input type="submit" />
      </form>
      <ul>
        {todos.map((item) => {
          return <li>{item.todoName}</li>;
        })}
      </ul>
    </div>
  );
}
