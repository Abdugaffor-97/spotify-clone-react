import React from "react";
import { Alert, Spinner } from "react-bootstrap";

export const DangerAlert = ({ messsage }) => (
  <div>
    <Alert variant="danger">{messsage}</Alert>
  </div>
);

export const CustomSpinner = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Spinner animation="border" variant="success" />
  </div>
);
