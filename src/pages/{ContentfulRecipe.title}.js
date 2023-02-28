import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs'
import Layout from '../component/Layout'
import SEO from '../component/SEO'
const slugify = require('slugify')

const RecipeTemplate = ({data}) => {
    const{
        title,
        cookTime,
        content,
        prepTime,
        serving,
        description :{ description},
        image
    } = data.contentfulRecipe
    const pathToImage =getImage(image)
    const {ingredients, instructions, tags, tools} = content
  return (
    <Layout>
        <SEO title={title} description = {description}/>
    <main className='page'>
        <div className="recipe-page">
            <section className='recipe-hero'>
                <GatsbyImage image={pathToImage} alt={title} className="about-img"/>
                <article className='recipe-info'>
                    <h2>{title}</h2>
                    <p>{description}</p>

                    <div className="recipe-icons">
                    <article>
                        <BsClock/>
                        <h5>Prep Time</h5>
                        <p>{prepTime} min</p>
                    </article>

                    <article>
                        <BsClockHistory/>
                        <h5>Cook Time</h5>
                        <p>{cookTime} min</p>
                    </article>

                    <article>
                        <BsPeople/>
                        <h5>Serving</h5>
                        <p>{serving}</p>
                    </article>
                    </div>

                    <p className='recipe-tags'> Tags:  { tags.map((tag, index)=> {
                        const slug = slugify(tag, {lower: true})
                        return (
                            <Link to={`/tags/${slug}`} key={index}> {tag} </Link>
                        )

                    }) }</p>
                </article>
            </section>
            <section className='recipe-content'>
                <article>
                    <h4>instructions</h4>
                    {instructions.map((item, index) => {
                        return (
                            <div className='single-instruction' key={index}>
                                <header>
                                    <p>step {index + 1} </p>
                                    <div></div>
                                </header>
                                <p>{item}</p>
                            </div>
                        )
                    })}
                </article>
                <article className='second-column'>
                   <div>
                    <h4>ingredients</h4>
                        {ingredients.map((item, index) => {
                            return (
                                <div className='single-ingredient' key={index}>
                                    <header>
                                        <p>{item} </p>
                                    </header>
                                </div>
                            )
                        })}
                   </div>

                   <div>
                    <h4>tools</h4>
                        {tools.map((item, index) => {
                            return (
                                <div className='single-tool' key={index}>
                                    <header>
                                        <p> {item} </p>
                                    </header>
                                </div>
                            )
                        })}
                   </div>
                </article>
            </section>
        </div>
    </main>
    </Layout>
  )
}

export const query = graphql`
  query ($title: String) {
    contentfulRecipe(title: {eq: $title}) {
        title
        cookTime
        description {
          description
        }
        prepTime
        serving
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          ingredients
          instructions
          tags
          tools
        }
      }
  }
`

export default RecipeTemplate