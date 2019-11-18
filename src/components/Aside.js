/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const Aside = ({ children }) => (
  <div
    sx={{
      bg: `secondary`,
      alignItems: `center`,
      color: `primary`,
      gridArea: `asideLeft`,
      padding: [`20px`, `0px 200px`],
      textAlign: [`center`, `left`]
    }}
  >
    {children}
  </div>
);

export default Aside;
