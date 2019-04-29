import React from "react"
import { Flex, Box } from "rebass"
import { H1, H2, H3, H4, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import { ThemeProvider, BackgroundImage, Heading } from 'pcln-design-system'
import header from "../images/header.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  fab,
  faFacebookSquare,
  faTwitterSquare,
  faRedditSquare
} from "@fortawesome/free-brands-svg-icons"


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <ThemeProvider>
      <BackgroundImage>
        <img src={header} />
      </BackgroundImage>
    </ThemeProvider>
    <Section>
      <Flex flexWrap="wrap">
        <Box width={"650px"} pr={[0, 2]}>
          <H2 fontSize={[2]} lineHeight={[0.5]}>
            Welcome to oneamongmany!
      </H2>
          <P>If you’re interested in reading yet another opinion about the events shaping our world,
            you’ve certainly come to the right place. We are living in uncertain times, and there’s
            no shortage of issues to discuss. In this blog, a number of topics will be covered to address
            the ongoing issues around the globe, such as the migrant crisis facing the EU, the UK leaving the EU, as well as the rise of China, climate change,
            and American politics.
          </P>
          <P>Stay tuned for upcoming blogs!</P>
        </Box>
        <Box width={"300px"} pl={[0, 2]}>
          <H2>Let's talk!</H2>
          <Flex width={"15rem"}
            justifyContent="space-between"
            fontSize={"25px"} >
            <a
              href="https://twitter.com/_OneAmongMany"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a
              href="https://www.facebook.com/oneamongmany.politics"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </a>
            <a
              href="https://www.reddit.com/user/one--among--many"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "reddit-alien"]} />
            </a>
          </Flex>
        </Box>
      </Flex>
    </Section>
  </Layout>
)

export default AboutPage
