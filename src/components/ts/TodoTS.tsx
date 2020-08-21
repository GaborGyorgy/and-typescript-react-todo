import React, { useEffect, useState, ReactElement } from "react";

import "../css/Todo.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import DeleteTaskModal from "./DeleteTaskModal";
import { getLocalStorageItem, setLocalStorageItem } from "./localStorageHelper";

import { ITask, ITodoTSProps } from "./interfaces";

const LOCAL_STORAGE_KEY = "savedTasks";

const TodoTS = ({ headerText, noTaskText }: ITodoTSProps): ReactElement => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskToDeleteIndex, setTaskToDeleteIndex] = useState<number | null>(
    null
  );

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

  const deleteTaskHandler = (index: number): void => {
    setTaskToDeleteIndex(index);
  };

  const deleteConfirmedHandler = async (): Promise<void> => {
    //without this if check, the splice method wouldnt work because it requires a number argument
    if (taskToDeleteIndex !== null) {
      const tasksCopy = [...tasks];
      tasksCopy.splice(taskToDeleteIndex, 1);
      setTaskToDeleteIndex(null);
      setTasks(tasksCopy);
      await setLocalStorageItem(LOCAL_STORAGE_KEY, tasksCopy);
    }
  };

  const deleteCancelledHandler = (): void => {
    setTaskToDeleteIndex(null);
  };

  const taskCheckedHandler = async (index: number): Promise<void> => {
    const tasksCopy = [...tasks];
    tasksCopy[index].isComplete = !tasksCopy[index].isComplete;
    setTasks(tasksCopy);
    await setLocalStorageItem(LOCAL_STORAGE_KEY, tasksCopy);
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

export default TodoTS;
