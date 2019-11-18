module.exports = ({
  contentPath = "data",
  imagesPath = "images",
  basePath = "/"
}) => ({
  plugins: [
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: "StaticPage"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: contentPath
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: imagesPath
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp"
  ]
});
