const fs = require("fs");
const path = require("path");
// 1. Make sure the pages directory exists

exports.onPreBootstrap = ({ reporter, store }, options) => {
  const { program } = store.getState();

  const contentPath = options.contentPath || "data";
  const imagesPath = options.imagesPath || "images";
  const dir = path.join(program.directory, imagesPath);

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }

  if (!fs.existsSync(dir)) {
    reporter.info(`creating the ${dir} directory`);
    fs.mkdirSync(dir);
  }
};

// 2. Define the pa ge type
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Link {
      name: String!
      link: String
    }

    type Section {
      id: String!
      header: String
      links: [Link!]
    }
  `);

  actions.createTypes(`
    type StaticPage implements Node @dontInfer {
      id: ID!
      name: String!
      bio: String!
      sections: [Section!]!
      slug: String!
    }`);
};

// 3. Define resolvers for any custom fields (slug)

exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || "/";

  const slugify = string => {
    const slug = string
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-%)+/g, "");
    return `/${basePath}/${slug}`.replace(/\/\/+/g, "/");
  };

  createResolvers({
    StaticPage: {
      slug: {
        resolve: source => slugify(source.name)
      }
    }
  });
};
// 4. Query for pages and create them

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const result = await graphql(`
    query StaticPageQuery {
      allStaticPage {
        edges {
          node {
            id
            name
            bio
            sections {
              header
              links {
                name
                link
              }
            }
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("error loading static pages", result.errors);
    return;
  }
  const staticPages = result.data.allStaticPage.edges;

  staticPages.forEach(staticPage => {
    actions.createPage({
      path: staticPage.node.slug,
      component: require.resolve("./src/templates/aboutMe.js"),
      context: {
        pageId: staticPage.node.id
      }
    });
  });
};
