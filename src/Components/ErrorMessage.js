import React from "react";

import { FormHelperText } from "@material-ui/core";

const ErrorMessage = ({ errorMessage }) => (
  <FormHelperText error={true} children={errorMessage} />
);

export default ErrorMessage;
