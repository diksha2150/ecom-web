import React from "react";
import { Form, FormText } from "react-bootstrap";

const Input = (props) => {
  return (
    <>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
        {props.errorMessage && (
          <FormText className="text-muted">{props.errorMessage}</FormText>
        )}
      </Form.Group>
    </>
  );
};

export default Input;
