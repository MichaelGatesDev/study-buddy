import React from "react";
import { Alert } from "react-bootstrap";

type AlertVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "dark"
  | "light";

interface Props {
  variant: AlertVariant;
  title: string;
  content?: JSX.Element | string;
}

export const SimpleAlert = (props: Props): JSX.Element => {
  return (
    <Alert variant={props.variant}>
      <Alert.Heading>{props.title}</Alert.Heading>
      <p>{props.content}</p>
    </Alert>
  );
};
