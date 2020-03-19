import React from "react";

import { FormHelperText } from "@material-ui/core";

export const ErrorMessage = ({ errorMessage }) => (
  <FormHelperText error={true} children={errorMessage} />
);
