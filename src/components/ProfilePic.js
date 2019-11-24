/** @jsx jsx */
import React from "react";
import Img from "gatsby-image";
import { jsx } from "theme-ui";

const ProfilePic = ({ img, profilePicAltText }) => (
  <div
    sx={{
      marginTop: [``, `25vh`]
    }}
  >
    <div
      sx={{
        display: "flex",
        justifyContent: `center`
      }}
    >
      <Img
        sx={{
          borderRadius: `50%`,
          height: `200px`,
          width: `200px`
        }}
        alt={profilePicAltText}
        fluid={img}
      ></Img>
    </div>
  </div>
);

export default ProfilePic;
