require('ts-node').register({ files: true })

module.exports = {
  siteMetadata: {
    title: 'Andrew Chang-DeWitt',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: { implementation: require('sass') },
    },
    'gatsby-plugin-typescript',
    'gatsby-transformer-typescript-css-modules',
    {
      resolve: 'gatsby-plugin-codegen',
      options: {},
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
  ],
}
