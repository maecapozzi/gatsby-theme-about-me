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
      minWidth: [``, `600px`],
      padding: [`20px`],
      textAlign: [`center`, `right`]
    }}
  >
    {children}
  </div>
);

export default Aside;
