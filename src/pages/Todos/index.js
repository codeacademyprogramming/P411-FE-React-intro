import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodoItem } from "./TodoItem";

export function Todos() {
  const navigate = useNavigate();

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

  useEffect(() => {
    if (todos.length === 5) {
      navigate("/blogs");
    }
  }, [todos, navigate]);

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
        {todos.map((item, index) => {
          return <TodoItem todo={item} key={index} />;
        })}
      </ul>
    </div>
  );
}
