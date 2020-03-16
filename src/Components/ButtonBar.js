import React from "react";

import { Button } from "@material-ui/core";

const ButtonBar = ({ toggleDisplay, displayRelevantVideos, clearState }) => {
  return (
    <div className="button-bar">
      <Button size="small" onClick={toggleDisplay}>
        {displayRelevantVideos ? "Hide" : "Show More"}
      </Button>
      <Button size="small" onClick={clearState}>
        Clear
      </Button>
    </div>
  );
};

export default ButtonBar;
