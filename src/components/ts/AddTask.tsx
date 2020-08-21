import React, { useState, ReactElement, FC } from "react";
import { Input, Button } from "@material-ui/core";

import "../css/AddTask.css";
import ErrorMessage from "./ErrorMessage";
import { IAddTaskProps } from "./interfaces";

const AddTask: FC<IAddTaskProps> = ({
  addTaskHandler,
}: IAddTaskProps): ReactElement => {
  const [task, setTask] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);

  const onButtonClick = (): void => {
    if (task) {
      setHasError(false);
      addTaskHandler(task);
      setTask("");
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="add-task-wrapper">
      <h5>Add something to the list</h5>
      <Input
        inputProps={{ "data-testid": "add-task-input" }}
        placeholder="Task"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTask(e.target.value)
        }
        value={task}
      />
      <Button
        data-testid="add-task-button"
        className="add-task-button"
        variant="contained"
        color="primary"
        onClick={() => onButtonClick()}
      >
        Add to list
      </Button>
      {hasError && (
        <ErrorMessage>Please fill out the input field.</ErrorMessage>
      )}
    </div>
  );
};

export default AddTask;
