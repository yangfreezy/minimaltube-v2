import React from "react";

import { Button } from "@material-ui/core";

// Two Buttons: One toggles relevant videos, the other clears state

const ButtonBar = ({
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

export default ButtonBar;
