import React, { ReactElement } from "react";
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

import { ITaskListProps } from "./interfaces";

const TaskList = ({ tasks }: ITaskListProps): ReactElement => {
  return (
    <List>
      {tasks.map((task, index) => {
        return (
          <ListItem
            data-testid="task-list-item"
            key={`${task.label}_${index}`}
            dense
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                color="primary"
                //@ts-ignore <- currently TS only supports native attributes and "data-testid" is not one of them, hence the ignore
                inputProps={{ "data-testid": "check-task-button" }}
              />
            </ListItemIcon>
            <ListItemText primary={task.label} data-testid="task-item-label" />
            <ListItemSecondaryAction data-testid="task-item-delete-button">
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

export default TaskList;
