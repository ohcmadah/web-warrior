import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
// https://stackoverflow.com/questions/66869576/gatsby-warn-attempted-import-error-css-does-not-contain-a-default-export-i
import * as styles from "../styles/home.module.css"
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link to="/projects" className={styles.btn}>
            My Portfolio Projects
          </Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
