/** @jsx jsx */
import React from "react"; // eslint-disable-line no-unused-vars
import { jsx } from "theme-ui";

import Aside from "./Aside";
import Grid from "./Grid";
import Links from "./Links";
import Main from "./Main";
import ProfilePic from "./ProfilePic";
import Text from "./Text";

const AboutMe = ({ sections, bio, img }) => {
  return (
    <Grid>
      <Aside>
        <ProfilePic img={img.node.childImageSharp.fluid} />
        <div
          sx={{
            marginTop: `40px`
          }}
        >
          <Text text={bio} />
        </div>
      </Aside>
      <Main>
        <div
          sx={{
            margin: [``, `0 20px`]
          }}
        >
          {sections.map(section => {
            return (
              <>
                <h3>{section.header}</h3>
                <Links links={section.links} />
              </>
            );
          })}
        </div>
      </Main>
    </Grid>
  );
};

export default AboutMe;
