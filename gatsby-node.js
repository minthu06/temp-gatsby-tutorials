const path = require(`path`)
const slugify = require('slugify')

const templatePath = path.resolve('src/templates/tag-template.js')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  result.data.allContentfulRecipe.nodes.forEach((recipe) => {
    recipe.content.tags.forEach(tag => {
        const tagsSlug = slugify(tag, {lower: true})
        createPage({
        path: `tags/${tagsSlug}`,
        component: templatePath,
        context: {
            tag: tag
        },
      })})

  })
}
