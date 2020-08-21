import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "../css/Todo.css";
import AddTask from "./AddTask";
import { getLocalStorageItem, setLocalStorageItem } from "./localStorageHelper";
import TaskList from "./TaskList";
import DeleteTaskModal from "./DeleteTaskModal";

const LOCAL_STORAGE_KEY = "savedTasks";

const TodoJS = ({ headerText, noTaskText }) => {
  //javascript version of overloading - JS does not support it natively
  if ((headerText && !noTaskText) || (!headerText && noTaskText))
    throw new Error(
      "You have to provide both headerText and noTaskText or neither."
    );

  const [tasks, setTasks] = useState([]);
  const [taskToDeleteIndex, setTaskToDeleteIndex] = useState(null);

  useEffect(() => {
    const savedTasks = getLocalStorageItem(LOCAL_STORAGE_KEY, []);
    setTasks(savedTasks);
  }, []);

  const addTaskHandler = (task) => {
    const tasksCopy = [...tasks];
    tasksCopy.push({ label: task, isComplete: false });

    setTasks(tasksCopy);
    setLocalStorageItem(LOCAL_STORAGE_KEY, tasksCopy);
  };

  const deleteTaskHandler = (index) => {
    setTaskToDeleteIndex(index);
  };

  const deleteConfirmedHandler = () => {
    const tasksCopy = [...tasks];
    tasksCopy.splice(taskToDeleteIndex, 1);
    setTaskToDeleteIndex(null);
    setTasks(tasksCopy);
    setLocalStorageItem(LOCAL_STORAGE_KEY, tasksCopy);
  };

  const deleteCancelledHandler = () => {
    setTaskToDeleteIndex(null);
  };

  const taskCheckedHandler = (index) => {
    const tasksCopy = [...tasks];
    tasksCopy[index].isComplete = true;
    setTasks(tasksCopy);
    setLocalStorageItem(LOCAL_STORAGE_KEY, tasksCopy);
  };

  return (
    <div className="container">
      <h3 className="title">{headerText}</h3>
      <AddTask addTaskHandler={addTaskHandler} />
      {tasks.length ? (
        <TaskList
          tasks={tasks}
          deleteTaskHandler={deleteTaskHandler}
          taskCheckedHandler={taskCheckedHandler}
        />
      ) : (
        <div>{noTaskText}</div>
      )}
      <DeleteTaskModal
        deleteCancelledHandler={deleteCancelledHandler}
        deleteConfirmedHandler={deleteConfirmedHandler}
        isOpen={taskToDeleteIndex !== null}
      />
    </div>
  );
};

TodoJS.propTypes = {
  headerText: PropTypes.string,
  noTaskText: PropTypes.string,
};

TodoJS.defaultProps = {
  headerText: "",
  noTaskText: "",
};

export default TodoJS;
