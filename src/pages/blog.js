import React from "react"
import { Link, graphql } from "gatsby"
import { Heading, Text } from "rebass"

import Layout from "../components/Layout"
import Section from "../components/Section"
import Img from 'gatsby-image'
import SEO from "../components/SEO"
import { H1, H3, P } from "../components/VerticalRhythm"
import header from "../images/header.jpg"
import { ThemeProvider, BackgroundImage } from 'pcln-design-system'
import { Flex, Box } from "rebass"
import RespGrid from "../components/RespGrid"
import Shadow from "../components/Shadow"

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
          <BackgroundImage>
            <img src={header} />
          </BackgroundImage>
        </ThemeProvider>

        <Section>
          <H1>Blog</H1>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <Flex flexWrap="wrap">
                  <Box width={"150px"} mr={"15px"} mb={"20px"} height={"70%"}>
                    <Link to={node.fields.slug}>
                      <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} /></Link>
                  </Box>
                  <Shadow>
                    <Box width={"800px"}>
                      <Heading as="h3" fontSize={3} mt={"10px"} fontFamily="PT Sans">
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
                    </Box>
                  </Shadow>
                </Flex>
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
            featuredImage {
              childImageSharp{
                  sizes(maxWidth: 200) {
                      ...GatsbyImageSharpSizes
                  }
              }
          }
          }
        }
      }
    }
  }
`
