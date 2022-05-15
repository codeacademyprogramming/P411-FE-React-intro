import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import { Todos } from "./pages/Todos";
import { Blogs } from "./pages/Blogs";
import { StopWatch } from "./components/StopWatch";
import { MemoExample } from "./components/MemoExample";
import { UserContextProvider } from "./context/user";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ErrorBoundary>
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="todos" element={<Todos />} />
            <Route path="counter" element={<Counter />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="stopwatch" element={<StopWatch />} />
            <Route path="memo-example" element={<MemoExample />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  </ErrorBoundary>
);
