import React, { useEffect, useState } from "react";
import "../css/Todo.css";
import AddTask from "./AddTask";

const TodoJS = () => {
  const [tasks, setTasks] = useState([]);
  const addTaskHandler = (task) => {
    console.log("task", task);
  };

  return (
    <div className="container">
      <h3 className="title">Todo JSX example</h3>
      <AddTask addTaskHandler={addTaskHandler} />
    </div>
  );
};

export default TodoJS;
