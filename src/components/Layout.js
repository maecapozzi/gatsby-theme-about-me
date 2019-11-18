import { ThemeProvider } from "theme-ui";
import React from "react";
import theme from "../gatsby-plugin-theme-ui/theme";

const Layout = props => {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Layout;
