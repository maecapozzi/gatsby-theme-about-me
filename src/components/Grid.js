/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const Grid = ({ children }) => (
  <div
    sx={{
      display: [`block`, `grid`],
      height: `100vh`,
      gridTemplateAreas: [``, `'asideLeft main'`],
      gridTemplateRows: [``, `auto`],
      gridTemplateColumns: [``, `2fr 10fr`]
    }}
  >
    {children}
  </div>
);

export default Grid;
