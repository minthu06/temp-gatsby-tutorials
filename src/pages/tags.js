import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../component/Layout"
import setupTags from "../utils/setupTags"

const Tags = ({data}) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
        {newTags.map((tag, index) => {
            const [text, value] = tag
            return <Link to={`/${text}`} key={index}  className="tag"> <h5>{text}</h5> <p>{value} recipe</p> </Link>
        })}
        </section>

      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}, filter: {featured: {eq: true}}) {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
export default Tags
