import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import AllRecipes from "../component/AllRecipes"
import Layout from "../component/Layout"


const getData = graphql`
{
  site {
    info: siteMetadata {
      title
      description
      author
      person {
        name
        age
      }
      complexData {
        name, age
      }

    }
  }
}`


function Reciples() {
  const data = useStaticQuery(getData)
  return (
    <Layout>
      <main className="page">
        <AllRecipes/>
      </main>
    </Layout>
  )
}

export default Reciples
