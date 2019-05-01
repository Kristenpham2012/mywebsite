import React from "react"
import { Flex, Box } from "rebass"
import { H1, H2, P, Ol } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import header from "../images/header.jpg"


import { ThemeProvider, BackgroundImage, Heading } from 'pcln-design-system'

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    <ThemeProvider>
      <BackgroundImage>
        <img src={header} />
      </BackgroundImage>
    </ThemeProvider>
    <Section>
      <H2>References</H2>
      <Ol>
        <li>Donald Trump and the controversy over white farmers in South Africa</li>
        <ul>
          <a
            href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A42fc342e-dfaf-4601-ad35-d0bb446b15da"
            target="_blank"
            rel="nofollow noopener"
          >
            Click here to view reference for this blog post
            </a>
        </ul>
        <li>The potential pitfalls of US withdrawal from the Iran nuclear deal</li>
        <ul>
          <a
            href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A205ed255-8782-4872-abfc-c94b0d4bc176"
            target="_blank"
            rel="nofollow noopener"
          >
            Click here to view reference for this blog post
            </a>
        </ul>
        <li>Brexit and The Security Concerns Facing Northern Ireland</li>
        <ul>
          <a
            href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A768a8d97-5498-4538-83b5-31403542eb39"
            target="_blank"
            rel="nofollow noopener"
          >
            Click here to view reference for this blog post
            </a>
        </ul>
        <li>The European Union's showdown with Poland and Hungary</li>
        <ul>
          <a
            href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A82628452-02b4-467d-944f-25d4a6fd2b65"
            target="_blank"
            rel="nofollow noopener"
          >
            Click here to view reference for this blog post
            </a>
        </ul>
        <li>Turkish assault on Afrin and Germany’s role</li>
        <ul>
          <a
            href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A2bdc6d21-41d7-47c7-9f11-93dbef77c100"
            target="_blank"
            rel="nofollow noopener"
          >
            Click here to view reference for this blog post
            </a>
        </ul>
        <li>The two-state solution is dead. Long live independent Jerusalem</li>
        <ul>
          <a
            href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A54502303-28e9-4801-928c-79fad08b7ee3"
            target="_blank"
            rel="nofollow noopener"
          >
            Click here to view reference for this blog post
            </a>
        </ul>
        <li>Trump's tax cut ambitions</li>
        <ul>
          <a
            href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A1f8f20ac-3576-4298-b79c-2e7b0048cbb9"
            target="_blank"
            rel="nofollow noopener"
          >
            Click here to view reference for this blog post
            </a>
        </ul>
        <li>Qatar and its World Cup woes</li>
        <ul>
          <a
            href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A9f098795-e957-4aaf-a872-884464d9011f"
            target="_blank"
            rel="nofollow noopener"
          >
            Click here to view reference for this blog post
            </a>
        </ul>
        <li>What will it take to halt western support of Saudi Arabia’s bombing campaign in Yemen?</li>
        <ul>
          <a
            href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A19142ee1-1203-4588-8cb6-60dde39566ee"
            target="_blank"
            rel="nofollow noopener"
          >
            Click here to view reference for this blog post
            </a>
        </ul>
        <li>Canada, Bill C-16, and freedom of expression</li>
        <ul>
          <a
            href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A1e490446-a2d3-4078-9796-93b8af4f9e5f"
            target="_blank"
            rel="nofollow noopener"
          >
            Click here to view reference for this blog post
            </a>
        </ul>
        <li>The governmental structure of the European Union is largely democratic but it contains one huge flaw: the European Commission</li>
        <ul>
          <a
            href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A4345af78-cb48-4563-a05b-2f62af115905"
            target="_blank"
            rel="nofollow noopener"
          >
            Click here to view reference for this blog post
            </a>
        </ul>

      </Ol>
    </Section>
  </Layout>
)

export default ResourcesPage
