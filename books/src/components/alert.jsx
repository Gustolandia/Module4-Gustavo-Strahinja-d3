import React from "react";
import {Alert} from "react-bootstrap";

const AlertDanger = (props) => {
    return (
        <Alert variant='danger'>
            {props.text}!
        </Alert>
    );
  };

export default AlertDanger;