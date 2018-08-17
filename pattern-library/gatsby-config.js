const path = require(`path`)

// Federalist provides this env variable
const baseurl = process.env.BASEURL || '/';

module.exports = {
  pathPrefix: `${baseurl}`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(path.join(__dirname, `../gatsby-site`, `src/components`)),
        name: `components`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(path.join(__dirname, `src/docs`)),
        name: `docs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(path.join(__dirname, `src/data`)),
        name: `data`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [path.resolve(path.join(__dirname, 'src/sass'))],
      }
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-transformer-react-docgen`,
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-transformer-yaml`,
    },
  ],
}
