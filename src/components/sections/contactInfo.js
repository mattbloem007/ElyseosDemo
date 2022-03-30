import React from "react"
import styled from "styled-components"
import Layout from "../common/layout/layout"
import SEO from "../seo"
import Navigation from "../common/navigation/navigation"
import Banner from "./banner"
import Header from "./header"
import ContactFeatures from "./contactFeatures"
import Footer from "./footer"
import SimpleSlider from "./carousel"
import EmailSignUp from "./emailSignUp"



import { useStaticQuery, graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {BrowserView, MobileView} from 'react-device-detect';

import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import { Section, Container } from "../global"
import ti from '../../images/iboga-white-icon.png'
import sp from '../../images/sanpedro-white-icon.png'
import am from '../../images/amanita-icon-white-1.png'
import cacao from '../../images/cacao-white-icon.png'
import aya from '../../images/aya-white-icon.png'
import canna from '../../images/cannabis-white-icon.png'
import psilo from '../../images/psilocybin-trans-white.png'
import salvia from '../../images/salvia-white-icon.png'
import get from 'lodash/get'
import Signup from "../common/signupBox/signup"

const Bold = ({ children }) => <span style={{color: "white"}}>{children}</span>
const Text = ({ children }) => <p style={{color: "white", textAlign: "center"}}>{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const url = node.data.target.fields.file.url
      console.log("URL: ", url)
      return <img src={url} />
    },
  },
}

const Contact = ({ children }) => {
  const data = useStaticQuery(
    graphql`
    query ContactPageQuery {
      allContentfulContactPage {
      edges {
        node {
          title
          subtitle
          contactInfo {
            email
            name
            roleDescription
          }
        }
      }
    }

    }
    `
  )

  let node = data.allContentfulContactPage.edges[0].node
  console.log("contact data: ", node)
  return (

        <StyledSection>
          <SectionTitle style={{color: "white"}}>{node.title}</SectionTitle>
          <Subtitle>{node.subtitle}</Subtitle>
          <IntroContainer>
            <SacramentSymbolsContainer>
              <SacramentSymbol src={ti} />
              <SacramentSymbol src={sp} />
              <SacramentSymbol src={am} />
              <SacramentSymbol src={cacao} />
            </SacramentSymbolsContainer>
            <IntroText>
            <ContactFeatures data={node.contactInfo}/>
            </IntroText>
            <SacramentSymbolsContainer>
              <SacramentSymbol src={aya} />
              <SacramentSymbol src={canna} />
              <SacramentSymbol src={psilo} />
              <SacramentSymbol src={salvia} />
            </SacramentSymbolsContainer>
          </IntroContainer>
          <EmailSignUp/>
          <Signup />
        </StyledSection>
)
}

export default Contact

const StyledContainer = styled(Container)``

const StyledSection = styled(Section)`
  background-color: #231B17;
  padding-top: 30px;
`

const SectionTitle = styled.h3`
  font-family: Parisine;
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 0px;
`

const Subtitle = styled.h5`
  font-family: Parisine;
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 50px;
  font-style: italic;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ImageandTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
`

const FeatureTitle = styled.h5`
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
  padding-bottom: 100px;

`

const IntroContainer = styled.div`
  display: flex;
  padding-left: 100px;
  padding-right: 100px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-left: 0px;
    padding-right: 0px;
  }
`

const SacramentSymbolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SacramentSymbol = styled.img`
  height: 40px;
  margin-bottom: 10px;
  margin-top: 20px;
  padding-right: 30px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-right: 5px;
  }
`

const IntroText = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 780px;

  @media (max-width: ${props => props.theme.screen.md}) {
    text-align: center;
  }
`
