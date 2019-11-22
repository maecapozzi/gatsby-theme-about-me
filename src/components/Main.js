/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const Main = ({ children }) => (
  <div
    sx={{
      bg: `primary`,
      color: `secondary`,
      gridArea: `main`,
      padding: [`50px`, `25vh 20px`],
      textAlign: [``, `left`],
      minWidth: `200px`,
      height: `100vh`
    }}
  >
    {children}
  </div>
);

export default Main;
