import React from "react";
import styled from "styled-components";
import { FaFirstAid } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";

const Image = () => {
  return (
    <Wrap>
        <article>
            <h4>constrained / default </h4>
            <StaticImage
                src="../assets/images/1.jpg"
                alt="food"
                height={400}
                placeholder = "tracedSVG"
                layout="constrained"
                className="example-img"
                as="section"/>

        </article>
        <article>
            <h4>constrained / default </h4>
            <StaticImage
                src="../assets/images/1.jpg"
                alt="food"
                height={400}
                placeholder = "blurred"
                layout="constrained"
                className="example-img"
                as="div"/>

        </article>
        <article>
            <h4>constrained / default </h4>
            <StaticImage
                src="../assets/images/1.jpg"
                alt="food"
                height={400}
                placeholder = "dominantColor"
                layout="constrained"
                className="example-img"
                as="article"/>

        </article>
    </Wrap>
  )
}

const Wrap = styled.section`
 width: 70vw;
 margin: 0 auto;
 article {
    border: 2px solid red;
 }
`

export default Image
