import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Container, Section } from "../global"
import ContactForm from "../form"
import RoadNav from "../common/roadmapNav/roadNav.js"
import eco1 from "../../images/Ecosystem 1_3.png"
import eco2 from "../../images/Elyseos Ecosystem 2_3.png"
import eco3 from "../../images/Elyseos Ecosystem 3_3.png"
import Signup from "../common/signupBox/signup"

const Roadmap = () => {
  const data = useStaticQuery(
    graphql`
    query allRoadmapsQuery {
    allContentfulRoadmap(sort: {order: ASC, fields: order}, filter: {sys: {revision: {eq: null}}}) {
      edges {
        node {
          timelineNodes {
            title
            description
          }
          title
          description {
            raw
          }
          colour
          slogan
          symbol {
          file {
            url
          }
        }
        }
      }
    }
    }
`)
console.log("NEW ROAD ", data)
  return (
    <StyledSection>
      <SectionTitle style={{color: "white"}}>Ecosystem</SectionTitle>
      <IntroContainer>
        <IntroText>
        <Subtitle> The Elyseos ecosystem is made up of many arms to support  community development.
        </Subtitle>
        </IntroText>
      </IntroContainer>
      <RoadNav data={data}/>
      <IntroContainer>
        <ecoImages src={eco1}/>
        <ecoImages src={eco2}/>
        <ecoImages src={eco3}/>
      </IntroContainer>
      <Signup />
    </StyledSection>
  )
}

export default Roadmap

const StyledSection = styled(Section)`
  background-color: #231B17;
  margin-right: 200px;

  @media (max-width: ${props => props.theme.screen.md}) {
    margin-right: 0px;
  }
`

const IntroContainer = styled.div`
  display: flex;
  padding-left: 100px;
  padding-right: 100px;

`

const IntroText = styled.div`
margin-left: auto;
margin-right: auto;
max-width: 780px;
`

const ecoImages = styled.img`
  padding-right: 50px;
  padding-left: 50px;
  width: 100%;
  height: 70%;
  opacity: 1;
  z-index: 1;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 0px 0;
  }
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 0px;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-style: italic;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  margin: 80px;
  margin-top: 30px;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureText = styled.p`
  text-align: center;
  color: ${props => props.theme.color.background.white};
`
const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 0 40px;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`
