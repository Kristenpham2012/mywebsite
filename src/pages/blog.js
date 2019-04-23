import React from "react"
import { Link, graphql } from "gatsby"
import { Heading, Text } from "rebass"

import Layout from "../components/Layout"
import Section from "../components/Section"
import SEO from "../components/SEO"
import { H1, H3, P } from "../components/VerticalRhythm"

import { ThemeProvider, BackgroundImage } from 'pcln-design-system'

class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <ThemeProvider>
          <BackgroundImage
            image='https://cdn1.imggmi.com/uploads/2019/4/22/b9ddbd7b5ddff081e2d07f96cf58ea87-full.jpg'
            height={"180px"}>
          </BackgroundImage>
        </ThemeProvider>

        <Section>
          <H1>Blog</H1>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <Heading as="h3" fontSize={3}>
                  <Link to={node.fields.slug}>{title}</Link>
                </Heading>
                <small>{node.frontmatter.date}</small>
                <Text
                  mt={"1rem"}
                  mb={"2rem"}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </Section>
      </Layout>
    )
  }
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
