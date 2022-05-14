import React, { useEffect, useRef, useState } from "react";

export function Todos() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const someRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();

    someRef.current
      .querySelectorAll("input")
      .forEach((input) => input.classList.remove("something"));
  }, []);

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
      <form onSubmit={onSubmit} ref={someRef}>
        <input
          placeholder="add your todo"
          value={inputValue}
          onChange={handleChange}
          ref={inputRef}
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
