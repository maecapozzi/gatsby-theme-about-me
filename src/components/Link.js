/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const Link = ({ link, children }) => (
  <a
    sx={{
      color: `tertiary`,
      fontSize: `12`
    }}
    href={link}
  >
    {children}
  </a>
);

export default Link;
