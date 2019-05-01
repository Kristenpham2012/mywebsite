import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Figure from "../components/Figure"
import { H1, H2, H3, H4, P } from "../components/VerticalRhythm"
import { ThemeProvider, BackgroundImage, Heading } from 'pcln-design-system'
import Carousel from 'nuka-carousel'
import post1 from "../images/posts/trumpcontroversy.jpg"
import post2 from "../images/posts/brexitni.jpg"
import post3 from "../images/posts/qatar.jpg"
import post4 from "../images/posts/jerusalem.jpg"
import header from "../images/header.jpg"
import { Flex, Box } from "rebass"
import RespGrid from "../components/RespGrid"
import ontyranny from "../images/ontyranny.png"
import thumbnail1 from "../images/thumbnails/trumpcontroversy.png"
import thumbnail2 from "../images/thumbnails/irandeal.png"
import thumbnail3 from "../images/thumbnails/brexit.png"
import thumbnail4 from "../images/thumbnails/polandhungary.png"
import thumbnail5 from "../images/thumbnails/turkey.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`appdevelopment`, `cbs`, `react`]} />
    <ThemeProvider>
      <BackgroundImage>
        <img src={header} />
      </BackgroundImage>
    </ThemeProvider>
    <Section>
      <Flex flexWrap="wrap">
        <Box width={"550px"} pl={[0, 2]} mt={"15px"}>
          <H2>Featured Blog</H2>
          <Carousel width={"480px"}>
            <Link to="blog/trumpcontroversy/"><img src={post1} /></Link>
            <Link to="blog/brexit/"><img src={post2} /></Link>
            <Link to="blog/hello-world/"><img src={post4} /></Link>
            <Link to="blog/qatar/"><img src={post3} /></Link>
          </Carousel>
          <H2>Review of The Month</H2>
          <Flex flexWrap="wrap">
            <Box width={"100px"} mr={"5px"}>
              <Link to="blog/ontyranny/"><img src={ontyranny} /></Link>
            </Box>
            <Box width={"320px"} mt={"35px"}>
              <Link to="blog/ontyranny/"><P>'On Tyranny' -  The vulnerability of democracy</P></Link>
            </Box>
          </Flex>
        </Box>
        <Box width={"400px"} pr={[0, 2]} mt={"15px"}>
          <Section>
            <H2>Recently uploaded</H2></Section>
          <Section>
            <Flex flexWrap="wrap">
              <Box width={"100px"} mr={"6px"} mb={"10px"}>
                <Link to="blog/trumpcontroversy/"><img src={thumbnail1} /></Link>
              </Box>
              <Box width={"250px"}>
                <H4><Link to="blog/trumpcontroversy/">
                  Donald and the controvery over white farmers in South Africa
                      </Link>
                </H4>
              </Box>
            </Flex>
          </Section>
          <Section>
            <Flex flexWrap="wrap">
              <Box width={"100px"} mr={"6px"} mb={"10px"}>
                <Link to="blog/irandeal/"><img src={thumbnail2} /></Link>
              </Box>
              <Box width={"260px"}>
                <H4><Link to="blog/irandeal/">
                  The potential pitfalls of US withdrawal from the Iran nuclear deal
                  </Link>
                </H4>
              </Box>
            </Flex>
          </Section>
          <Section>
            <Flex flexWrap="wrap">
              <Box width={"100px"} mr={"6px"} mb={"10px"}>
                <Link to="blog/brexit/"><img src={thumbnail3} /></Link>
              </Box>
              <Box width={"250px"}>
                <H4><Link to="blog/brexit/">
                  Brexit and the security concerns facing Nothern Ireland
                  </Link>
                </H4>
              </Box>
            </Flex>
          </Section>
          <Section>
            <Flex flexWrap="wrap">
              <Box width={"100px"} mr={"6px"} mb={"10px"}>
                <Link to="blog/importance-of-websites/"><img src={thumbnail4} /></Link>
              </Box>
              <Box width={"250px"}>
                <H4><Link to="blog/importance-of-websites/">
                  The European Union's showdown with Poland and Hungary
                  </Link>
                </H4>
              </Box>
            </Flex>
          </Section>
          <Section>
            <Flex flexWrap="wrap">
              <Box width={"100px"} mr={"6px"} mb={"10px"}>
                <Link to="blog/your-story/"><img src={thumbnail5} /></Link>
              </Box>
              <Box width={"250px"}>
                <H4><Link to="blog/your-story/">
                  Turkish assault on Afrin and Germany’s role
                  </Link>
                </H4>
              </Box>
            </Flex>
          </Section>
        </Box>
      </Flex>
    </Section>
  </Layout>
)

export default IndexPage
