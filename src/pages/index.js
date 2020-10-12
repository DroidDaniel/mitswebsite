import React from "react"
import { graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Dualinfoblock from '../components/Reuseable/Dualinfoblock'
import Speech from '../components/Talks/Speech'
import Navbar from '../components/Reuseable/Navbar'
import Footer from '../components/Reuseable/Footer'
import BannerSection from '../components/Reuseable/BannerSection'
import Workforce from '../components/Reuseable/Workforce'
import ActionBox from '../components/Reuseable/ActionBox'
import Heading from '../components/Reuseable/Heading'
import Portal from '../components/Reuseable/Portal'












const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Navbar navsection={data.navsection} logosection={data.logosection}/>
    <BannerSection herostripe={data.herostripe}/>
    <Workforce workforce={data.workforce}/>
    <ActionBox action={data.action}/>
    <Heading heading={data.heading}/>
    {/* <Infoblock device={data.device}/> */}
    <Portal portal={data.portal}/>
    <Dualinfoblock technology={data.technology} techlist={data.techlist}/>
    {/*
    <Speech wepinars={data.wepinars}/>
         <Footer/>*/}
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "hexnode-webinars.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    wepinars:allContentfulWepinars{
      totalCount
      edges {
        node {
          id
          title
          category
          description{
            description
          }
          image{
            fixed(width:200, height:120){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }



    navsection:allContentfulNavbar{
      totalCount
      edges {
        node {
          id
          navicationMenu
          navicationUrl
        }
      }
    }


    logosection:allContentfulCompanylogo{
      edges {
        node {
          id
          alttext
          logourl
          logo {
            fixed(width:146, height:40){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }


    herostripe:allContentfulHerosection{
      edges {
        node {
          id
          heroTitle
          heroBg {
            fixed(width:661, height:628){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          texture {
            fixed(width:174, height:648){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          stripe {
            fixed(width:221, height:229){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }



    workforce:allContentfulWorkforce{
      edges {
        node {
          id
          title
          description {
            id
            description
          }
        }
      }
    }


    action:allContentfulActionsmenu{
      edges {
        node {
          id
          title
          icon {
            fixed(width:40, height:40){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }


    heading:allContentfulHeading{
      edges {
        node {
          id
          title
        }
      }
    }


    device:allContentfulChooseDevice{
      edges {
        node {
          id
          poster {
            fixed(width:661, height:628){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          texture {
            fixed(width:174, height:648){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          title
          description {
            id
            description
          }
        }
      }
    }



    technology:allContentfulTechnology{
      edges {
        node {
          id
          poster {
            fixed(width:661, height:628){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          title
          description
        }
      }
    }


    techlist:allContentfulTechnoList{
      edges {
        node {
          id
          icon {
            fixed(width:16, height:16){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          list
        }
      }
    }



    portal:allContentfulPortal{
      edges {
        node {
          id
          title
          playIcon {
            fixed(width:120, height:120){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          poster {
            fixed(width:600, height:440){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          description {
            id
            description
          }
          btntext
        }
      }
    }


}
`

export default IndexPage
