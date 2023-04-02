import "./OutlineButtonStyle.css";
import React from "react";
import Button from "react-bootstrap/Button";
const OutlinedButton = ({ text, ...rest }) => {
  return (
    <div>
      <Button {...rest} variant="outline-primary">
        {text}
      </Button>
    </div>
  );
};

export default OutlinedButton;
