/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const Grid = ({ children }) => (
  <section
    sx={{
      display: [`block`, `grid`],
      height: `100vh`,
      gridTemplateAreas: [``, `'asideLeft main'`],
      gridTemplateRows: [``, `auto`],
      gridTemplateColumns: [``, `2fr 10fr`]
    }}
  >
    {children}
  </section>
);

export default Grid;
