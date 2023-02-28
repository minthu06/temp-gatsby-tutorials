import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../component/Layout';
import RecipesList from '../component/RecipesList';
import SEO from '../component/SEO';

const TagTemplate = ({data, pageContext}) => {
    const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title={pageContext.tag} />
        <main className='page'>
            <h2>{pageContext.tag}</h2>
            <div className="tag-recipes">
                <RecipesList recipes={recipes}/>

            </div>
        </main>
    </Layout>
  )
}

export const query = graphql`
  query ($tag: String) {
    allContentfulRecipe(
        filter: {content: {tags: {eq: $tag}}},
        sort: {title: ASC}) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`


export default TagTemplate
