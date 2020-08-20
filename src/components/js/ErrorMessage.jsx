import React from "react";
import PropTypes from "prop-types";
import "../css/ErrorMessage.css";

const ErrorMessage = ({ children }) => (
  <div className="error-message-container">{children}</div>
);
ErrorMessage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ErrorMessage;
