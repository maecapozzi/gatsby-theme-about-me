import React from "react";
import { Helmet } from "react-helmet";
import AboutMe from "../components/AboutMe";
import Layout from "../components/Layout";

export const query = graphql`
  query($pageId: String!) {
    staticPage(id: { eq: $pageId }) {
      name
      bio
      profilePicAltText
      sections {
        id
        links {
          name
          link
        }
        header
      }
      id
    }
    allFile(
      filter: {
        sourceInstanceName: { eq: "data" }
        relativePath: { eq: "profile-pic.jpg" }
      }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const AboutMeTemplate = ({ data }) => {
  let image;
  data.allFile.edges.forEach(img => {
    image = img;
  });

  const {
    name,
    sections,
    bio,
    profilePicAltText,
    documentLanguage
  } = data.staticPage;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang={documentLanguage} />
        <title>{name}</title>
      </Helmet>
      <AboutMe
        name={name}
        sections={sections}
        bio={bio}
        img={image}
        profilePicAltText={profilePicAltText}
      />
    </Layout>
  );
};

export default AboutMeTemplate;
