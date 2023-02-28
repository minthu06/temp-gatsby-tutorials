import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import RecipesList from './RecipesList'
import TagList from './TagList'

export const query = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  // const { allContentfulRecipe: {nodes: recipes} } = useStaticQuery(query) // cachs 2
  const data = useStaticQuery(query)
  const recipes =data.allContentfulRecipe.nodes
  return (
    <section className='recipes-container'>
        <TagList recipes = {recipes}/>
        <RecipesList recipes = {recipes} />

    </section>
  )
}

export default AllRecipes
