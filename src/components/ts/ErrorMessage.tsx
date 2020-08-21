import React, { ReactElement } from "react";
import "../css/ErrorMessage.css";
import { IErrorMessageProps } from "./interfaces";

const ErrorMessage = ({ children }: IErrorMessageProps): ReactElement => (
  <div className="error-message-container">{children}</div>
);

export default ErrorMessage;
