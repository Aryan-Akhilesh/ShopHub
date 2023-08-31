import { Alert } from "react-bootstrap";

function Message({ varient = "info", children }) {
  return <Alert variant={varient}>{children}</Alert>;
}

export default Message;
