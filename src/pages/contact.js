import React from "react"
import Layout from "../component/Layout"
import '../assets/css/main.css'
import RecipesList from "../component/RecipesList"
import { graphql } from "gatsby"
import SEO from "../component/SEO"

const Contact = ( {data : {allContentfulRecipe : {nodes : recipes}}}) => {
  // const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <SEO title="Contact"/>
      <main className="page">
        <section className="contact-page">
          <article>
            <h3>Want To Get In Touch?</h3>
            <p>Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk intelligentsia edison bulb synth.</p>
            <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
            <p>Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny pack bicycle rights cardigan poke.</p>
          </article>
          <article>
            <form action="https://formspree.io/f/mail@gmail.com" method="POST" className="form contact-form">
              <div className="form-row">
                <label htmlFor="name"> Your Name</label>
                <input type="text" name="name" id="name"></input>
              </div>

              <div className="form-row">
                <label htmlFor="email"> Your Email</label>
                <input type="text" name="email" id="email"></input>
              </div>

              <div className="form-row">
                <label htmlFor="message">Message</label>
                <input type="text" name="message" id="message"></input>
              </div>
                <buton type="submit" className="btn block">Submit</buton>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
            <h5>Look At This Awesomesouce!</h5>
            <RecipesList recipes={ recipes }/>
          </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}, filter: {featured: {eq: true}}) {
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

export default Contact
