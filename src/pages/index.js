import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../component/Layout"
import Image from "../example/image"
import FetchData from "../example/Fetch"
import Testing from "./Testing"
import AllRecipes from "../component/AllRecipes"
import SEO from "../component/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home Page"/>
      <main className="page">
        <header className="hero">
        <StaticImage src="../assets/images/7.jpg"
            alt="bannerFoodie"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"/>
        <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Recipes</h1>
              <h4>No Fluff, Just Recipes</h4>
            </div>
        </div>
        </header>
        {/* <section>
          <div className="tags-container">
            <h4>Recipes </h4>
            <div className="tags-list">

            </div>
          </div>
        </section> */}
        <AllRecipes/>
      </main>

    </Layout>
  )
}
