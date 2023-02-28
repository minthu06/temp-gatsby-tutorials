/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path:`.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "@johnsmilga",
    person: {name: "john", age: 32},
    simpleData: ["item 1", "item 2"],

    complexData: [
      {name: "john", age: 32},
      {name: "Susan", age: 22},
      {name: "Joss", age: 52}
    ]

  },
  plugins: [`gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `example`,
      path: `${__dirname}/src/example`,
    },
  },
  {
    resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `wi1c5i0pb5th`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
  },
  {
    resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants:[ "400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"]
            },
          ],
        },
      },
  },
  `gatsby-plugin-react-helmet`,
 ],
}
