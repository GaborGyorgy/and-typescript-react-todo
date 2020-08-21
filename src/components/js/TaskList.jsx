import React from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  Checkbox,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  ListItemIcon,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const TaskList = ({ tasks, deleteTaskHandler, taskCheckedHandler }) => {
  return (
    <List>
      {tasks.map((task, index) => {
        return (
          <ListItem key={`${task.label}_${index}`} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                color="primary"
                checked={task.isComplete}
                onClick={() => taskCheckedHandler(index)}
              />
            </ListItemIcon>
            <ListItemText primary={task.label} />
            <ListItemSecondaryAction onClick={() => deleteTaskHandler(index)}>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      isComplete: PropTypes.bool,
    })
  ),
  deleteTaskHandler: PropTypes.func.isRequired,
  taskCheckedHandler: PropTypes.func.isRequired,
};

export default TaskList;
