import React from "react";
import PropTypes from "prop-types";

import { FormHelperText } from "@material-ui/core";

export const ErrorMessage = ({ errorMessage }) => (
  <FormHelperText error={true} children={errorMessage} />
);

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string
};
