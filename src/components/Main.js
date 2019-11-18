/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const Main = ({ children }) => (
  <div
    sx={{
      background: `primary`,
      color: `secondary`,
      gridArea: `main`,
      padding: [`50px`, `230px 20px`],
      textAlign: [``, `left`],
      minWidth: `200px`
    }}
  >
    {children}
  </div>
);

export default Main;
