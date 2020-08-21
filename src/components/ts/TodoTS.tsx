import React, { useEffect, useState, ReactElement } from "react";

import "../css/Todo.css";
import AddTask from "./AddTask";
import { getLocalStorageItem, setLocalStorageItem } from "./localStorageHelper";

import { ITask, ITodoTSProps } from "./interfaces";

const LOCAL_STORAGE_KEY = "savedTasks";

const TodoTS = ({ headerText, noTaskText }: ITodoTSProps): ReactElement => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    (async () => {
      const savedTasks = await getLocalStorageItem<ITask[]>(
        LOCAL_STORAGE_KEY,
        []
      );
      setTasks(savedTasks);
    })();
  }, []);

  const addTaskHandler = async (task: string): Promise<void> => {
    const tasksCopy = [...tasks];
    tasksCopy.push({ label: task, isComplete: false });

    setTasks(tasksCopy);
    await setLocalStorageItem(LOCAL_STORAGE_KEY, tasksCopy);
  };

  return (
    <div className="container">
      <h3 className="title">{headerText}</h3>
      <AddTask addTaskHandler={addTaskHandler} />
      <div>{noTaskText}</div>
    </div>
  );
};

export default TodoTS;
