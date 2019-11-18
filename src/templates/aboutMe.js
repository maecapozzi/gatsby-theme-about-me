import React from "react";
import AboutMe from "../components/AboutMe";
import Layout from "../components/Layout";

export const query = graphql`
  query($pageId: String!) {
    staticPage(id: { eq: $pageId }) {
      name
      bio
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

  const { name, sections, bio } = data.staticPage;
  return (
    <Layout>
      <AboutMe name={name} sections={sections} bio={bio} img={image} />
    </Layout>
  );
};

export default AboutMeTemplate;
