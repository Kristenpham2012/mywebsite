import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Figure from "../components/Figure"
import { H1, P } from "../components/VerticalRhythm"
import background from "../images/1200/16x9/02.jpg"
import { ThemeProvider, BackgroundImage, Heading } from 'pcln-design-system'
import Carousel from 'nuka-carousel'
import post1 from "../images/post1.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`appdevelopment`, `cbs`, `react`]} />
    <ThemeProvider>
      <BackgroundImage
        image='https://cdn1.imggmi.com/uploads/2019/4/22/b9ddbd7b5ddff081e2d07f96cf58ea87-full.jpg'
        height={"180px"}>
      </BackgroundImage>
    </ThemeProvider>
    <Section>
      <H1>Recently uploaded</H1>
      <P>Slide right for the most recently updated blog post about geopolitics.</P>
      <P>
        Websites are the basis and anchor for any successful marketing strategy.
        Read more about it in the blog post:{" "}
        <Link to="blog/importance-of-websites/">
          The Importance of Websites
        </Link>
        .
      </P>
      <P>
        This template is responsive. It teaches you design with fonts and images
        as well as aspects of SEO. The template comes with the latest JavaScript
        technologies: React, Gatsby, Styled Components, GraphQL and CSS layouts.
        Of course, you can also use icons, e.g.{" "}
        <FontAwesomeIcon icon="coffee" />, <FontAwesomeIcon icon="yin-yang" />,{" "}
        <FontAwesomeIcon icon="peace" />.
      </P>
      <P>Now you have the basis to build something great.</P>
      <P>Have fun with it!</P>
    </Section>
    <Carousel>
      <img src={post1} />
      <img src={post1} />
      <img src={post1} />
      <img src={post1} />
      <img src={post1} />
      <img src={post1} />
    </Carousel>
  </Layout>
)

export default IndexPage
