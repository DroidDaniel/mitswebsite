import React from "react"
import { graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Herosection from '../components/Reuseable/HeroSection'
import Infoblock from '../components/Reuseable/Infoblock'
import Dualinfoblock from '../components/Reuseable/Dualinfoblock'



const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Herosection img={data.img.childImageSharp.fluid} title="Hexnode" subtitle="Mitsogo" heroclass="about-background"/>
    <Infoblock heading="About Us"/>
    <Dualinfoblock heading="Our Team"/>

  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
}
`

export default AboutPage
