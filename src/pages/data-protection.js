import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"

const DataProtectionPage = () => (
  <Layout>
    <SEO title="Data Protection" />
    <Section>
      <H1>Data Protection</H1>
      <H3>This Site</H3>
        <P>We consider data protection to be very important. Therefore, the use of this website is possible without offering person-related information. </P>
        <P>This site is a personal and non-commercial blog organized and maintained by 
          authors of Oneamongmany for the purpose of sharing opinions about different topics happening around the globe. 
          As such this site has no intention to gather and process any person-related data. 
          Therefore this site in itself does not use Google analytics, trackers, advertising or marketing hooks.</P>
        <P>Furthermore, this site does not 
          offer newsletters or contact forms and the owner of this site does not 
          store any person-related information in connection to this site.</P>
      <H3>Hosting and Internet Provider</H3>
        <P>However, like all other websites this site is hosted by an internet provider. In the case of this site the internet provider is https://netlify.com. Netlify is using 
        common internet technologies, such as cookies and web server logs for monitoring access to this website.</P>
        <P>Most internet providers are generating log files that usually contain the visitor’s browser type, language preference, referring site, additional websites requested, the date and time of each 
          visitor request and potentially personally-identifying information like Internet Protocol (IP) addresses.</P>
        <P>The reason for doing so is 
          to better understand how visitors use the website, 
          and to monitor and protect the security of the website</P>
        <P>Please read more about Netlify's privacy statement 
          in order to find out about their approach to protecting data.</P>
      <H3>Do Not Track</H3>
        <P>In general, you can prevent the analysis of user behavior by blocking the use of cookies in your browser, for example by make an exception 
          in the browser (such as Firefox browser). Please look in the program help for how this can be set up 
          in your browser.</P>
        <P>Of course, you can also on occasion, in individual cases 
          or periodically delete cookies in your browser to clear tracking information. 
          If you have activated the so-called Do-Not-Track function ("DNT") in your browser, 
          then your visit to websites will not automatically be recorded by web analysis tools. 
          However, this does not work with every browser. To enable DNT in your browser, 
          please check your browser's help function if you do not know how to activate it.</P>
        <H3>Changes to the privacy policy</H3>
          <P>We reserve the right to change this privacy policy. 
            The current version of the privacy policy is 
            available at https://oneamongmany.netlify.com/data-protection.</P>
        <H3>Inquiry</H3>
          <P>All inquires concerning the data protection for this website can be addressed to:</P>
          <P>One Among Many</P>
          <P>oneamongmany.politics@gmail.com</P>


    </Section>
  </Layout>
)

export default DataProtectionPage
