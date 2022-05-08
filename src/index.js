import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import { Todos } from "./pages/Todos";
import { Blogs } from "./pages/Blogs";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="todos" element={<Todos />} />
          <Route path="counter" element={<Counter />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
);
