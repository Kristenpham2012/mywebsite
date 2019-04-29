import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import CookieConsent from "react-cookie-consent"
import "./styled/layout.css"
import { ThemeProvider } from "styled-components"
import { Flex } from "rebass"
import "typeface-montserrat"
import "typeface-dosis"
import "typeface-cute-font"
import "typeface-ubuntu"
import "typeface-source-sans-pro"
import "typeface-cuprum"
import "typeface-pt-sans"
import "typeface-special-elite"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


import { library } from "@fortawesome/fontawesome-svg-core"
import {
  fab,
  faFacebookSquare,
  faTwitterSquare,
  faRedditSquare
} from "@fortawesome/free-brands-svg-icons"
import { faPeace, faCoffee, faYinYang } from "@fortawesome/free-solid-svg-icons"

import theme from "../../theme"
import Container from "../Container"
import Header from "../Header"
import Logo from "../Logo"
import Main from "../Main"
import Footer from "../Footer"
import Menu from "../Menu"
import MenuItem from "../MenuItem"
import imgLogo from "../../images/officiallogo.png"

library.add(
  fab,
  faCoffee,
  faPeace,
  faYinYang,
  faTwitterSquare,
  faFacebookSquare
)

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            version
          }
        }
      }
    `
  )
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <Logo to="/" text="One Among Many" img={imgLogo} />
        </Header>
        <Menu>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/blog/">Blogs - Reviews</MenuItem>
          <MenuItem to="/resources/">Resources</MenuItem>
          <MenuItem to="/about/">About</MenuItem>
          <Flex
            width={"7rem"}
            justifyContent="space-between"
            marginLeft={"700px"}
            marginTop={"4px"}
            fontSize={"19px"}>
            <a
              href="https://twitter.com/_OneAmongMany"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "twitter-square"]} color="#fff"/>
            </a>
            <a
              href="https://www.facebook.com/oneamongmany.politics"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon
                icon={["fab", "facebook-square"]}
                color="#fff"
              />
            </a>
            <a
              href="https://www.reddit.com/user/one--among--many"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "reddit-square"]} color="#fff" />
            </a>
          </Flex>
        </Menu>
        <Main>{children}</Main>
        <Footer>
          <div>© One among many</div>
          <Flex width={"8rem"} justifyContent="space-between" >
            <a
              href="https://twitter.com/_OneAmongMany"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "twitter-square"]} />
            </a>
            <a
              href="https://www.facebook.com/oneamongmany.politics"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            </a>
            <a
              href="https://www.reddit.com/user/one--among--many"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "reddit-square"]} />
            </a>
          </Flex>
          <Flex flexDirection="column">
            <span>Version: {site.siteMetadata.version}</span>
            <Link to="/imprint/">Imprint</Link>
            <Link to="/data-protection/">Data Protection</Link>
          </Flex>
        </Footer>
        <CookieConsent
          location="bottom"
          buttonText="I agree"
          cookieName="gsuaCookie"
          style={{ background: "#465A65" }}
          buttonStyle={{ color: "#4e503b", fontSize: "15px" }}
          expires={150}
        >
          By using this website you agree to the application of cookies.
        </CookieConsent>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
