import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

const ImageData = graphql`
{
    allFile(filter: {extension: {eq: "jpg"}}) {
      totalCount
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: {grayscale: false}
            width: 200
            height: 200
          )
        }
      }
    }
}
`

const Gallery = () => {
    const data = useStaticQuery(ImageData)
    const nodes =data.allFile.nodes
  return (
    <Wrapper>
        {nodes.map((item, index) => {
        const { name } = item
        const pathToImage = getImage(item)
        return( <article key={index} className="item">
                    <GatsbyImage image={pathToImage} alt={name}
                    className = "gallery-img "/>
                    <p>{name}</p>
                </article>)
        })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    .item {
        margin-right: 1rem;
    }
    .gallery-img {
        border-radius: 1rem;
    }
`

export default Gallery
