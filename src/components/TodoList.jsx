import { useContext, useEffect } from "react";

import { TodoContext } from "../context/TodoContext";
import Todo from "./Todo";
const TodoList = () => {
  const [todos] = useContext(TodoContext);
  console.log(todos, "in todo list ");
  useEffect(() => {
    console.log("from todo list", JSON.parse(localStorage.getItem("todos")));
  }, [todos]);

  return (
    <div>
      {0 < todos.length ? (
        todos.map((item) => {
          return (
            <Todo
              key={item.id}
              id={item.id}
              title={item.title}
              completed={item.completed}
            />
          );
        })
      ) : (
        <h4>No todo found. Please add some...</h4>
      )}
    </div>
  );
};

export default TodoList;
