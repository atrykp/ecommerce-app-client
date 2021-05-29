import React from "react";
import { Alert } from "react-bootstrap";
interface IMessage {
  variant: string;
  children: string;
}
const Message = ({ variant = "info", children }: IMessage) => {
  return <Alert variant={variant}>{children}</Alert>;
};

export default Message;
