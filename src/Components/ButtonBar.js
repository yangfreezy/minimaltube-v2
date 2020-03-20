import React from "react";
import PropTypes from "prop-types";

import { Button } from "@material-ui/core";

// Two Buttons: One toggles relevant videos, the other clears state

export const ButtonBar = ({
  toggleRelevantVideos,
  showRelevantVideos,
  clearState
}) => {
  return (
    <div className="button-bar">
      <Button size="small" onClick={toggleRelevantVideos}>
        {showRelevantVideos ? "Hide" : "Show More"}
      </Button>
      <Button size="small" onClick={clearState}>
        Clear Videos
      </Button>
    </div>
  );
};

ButtonBar.propTypes = {
  toggleRelevantVideos: PropTypes.func,
  showRelevantVideos: PropTypes.bool,
  clearState: PropTypes.func
};
