import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import PropTypes from "prop-types";

import "../css/AddTask.css";
import ErrorMessage from "./ErrorMessage";

const AddTask = ({ addTaskHandler }) => {
  const [task, setTask] = useState("");
  const [hasError, setHasError] = useState(false);

  const onButtonClick = () => {
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
      <Input placeholder="Task" onChange={(e) => setTask(e.target.value)} value={task} />
      <Button
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

AddTask.propTypes = {
  addTaskHandler: PropTypes.func.isRequired,
};

export default AddTask;
