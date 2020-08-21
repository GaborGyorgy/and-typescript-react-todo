import React, { ReactElement, FC } from "react";
import { Modal, Fade, Button } from "@material-ui/core";
import "../css/DeleteTaskModal.css";

import { IDeleteTaskModalProps } from "./interfaces";

const DeleteTaskModal: FC<IDeleteTaskModalProps> = ({
  deleteConfirmedHandler,
  deleteCancelledHandler,
  isOpen,
}: IDeleteTaskModalProps): ReactElement => {
  return (
    <Modal
      open={isOpen}
      className="delete-task-modal"
      data-testid="delete-modal"
    >
      <Fade in={isOpen}>
        <div className="delete-task-modal-fade">
          {/* the classname had to be moved to this ^ div because TS didnt like it on the Fade component */}
          <h3 className="delete-task-modal-header">Deletion confirmation.</h3>
          <p>Are you sure you want to delete the selected task?</p>
          <div className="delete-task-modal-button-container">
            <Button
              variant="contained"
              size="medium"
              color="secondary"
              onClick={deleteCancelledHandler}
            >
              No
            </Button>
            <Button
              data-testid="delete-task-button"
              variant="contained"
              size="medium"
              color="primary"
              onClick={deleteConfirmedHandler}
            >
              Yes
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default DeleteTaskModal;
