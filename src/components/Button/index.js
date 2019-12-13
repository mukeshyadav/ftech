import React from "react";
import { Button } from "reactstrap";
export const button = ({ label, handler, loader }) => (
  <>
    <Button
      onClick={handler}
      color="primary"
      className={"btn-primary" + loader ? " btn-loader" : ""}
    >
      {label}
    </Button>
  </>
);
