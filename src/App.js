import React from "react";
import "./App.css";

import Auth from "./Components/Auth";
import TodoForm from "./Components/TodoForm";
import { useSelector } from "react-redux/es/hooks/useSelector";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="App">
      {isAuth && <TodoForm />}
      {!isAuth && <Auth />}
    </div>
  );
}

export default App;
