import { createContext, useEffect, useContext, useState } from "react";

export const TodoContext = createContext();

export const useCustomContext = () => useContext(TodoContext);

export const TodoProvider = (props) => {
  const value =
    typeof window !== undefined
      ? JSON.parse(localStorage.getItem("todos"))
      : [];
  const [todos, setTodos] = useState(value);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
