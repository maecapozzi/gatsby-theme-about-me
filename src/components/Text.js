/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const Text = ({ text }) => (
  <p
    sx={{
      fontSize: `3`
    }}
  >
    {text}
  </p>
);

export default Text;
