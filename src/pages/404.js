import React from "react"
import Layout from "../component/Layout"
import SEO from "../component/SEO"

function Error() {
  return (
    <Layout>
      <SEO title="ERROR"/>
      <main className="error-page">
        <section>
          <h1> 404</h1>
          <h3>Page Not Found</h3>
        </section>
      </main>

    </Layout>
  )
}

export default Error
