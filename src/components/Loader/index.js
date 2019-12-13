import React from "react";

import { Spinner } from "reactstrap";

export const Loader = () => (
  <>
    <div className="page-loader d-flex justify-content-center align-items-center">
      <Spinner
        type="grow"
        color="danger"
        style={{ width: "1rem", height: "1rem" }}
      />
      <Spinner
        type="grow"
        color="success"
        style={{ width: "2rem", height: "2rem" }}
      />
      <Spinner
        type="grow"
        color="primary"
        style={{ width: "3rem", height: "3rem" }}
      />
    </div>
  </>
);
