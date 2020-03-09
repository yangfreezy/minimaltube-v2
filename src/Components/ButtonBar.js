import React from "react";

import { Button } from "@material-ui/core";

import { Layout } from "./../Layouts";

const ButtonBar = ({ toggleDisplay, showRelevantVideos, clearState }) => {
  return (
    <Layout stylesClass="button-bar">
      <Button size="small" onClick={toggleDisplay}>
        {showRelevantVideos ? "Hide" : "Show More"}
      </Button>
      <Button size="small" onClick={clearState}>
        Clear
      </Button>
    </Layout>
  );
};

export default ButtonBar;
