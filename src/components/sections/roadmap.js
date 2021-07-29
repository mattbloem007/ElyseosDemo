import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Container, Section } from "../global"
import ContactForm from "../form"
import RoadNav from "../common/roadmapNav/roadNav.js"

const Roadmap = () => {
  const data = useStaticQuery(
    graphql`
    query rmQuery {
      contentfulRoadmap {
        slogan
        title
        timelineNodes {
          title
          description
        }
        slug
        description {
          raw
        }
      }
    }
`)
  return (
    <StyledSection>
      <SectionTitle style={{color: "white"}}>Roadmap Epoch 1</SectionTitle>
      <Subtitle>Timing is everything</Subtitle>
      <IntroContainer>
        <IntroText>
        <FeatureText style={{color: "white"}}> The Elyseos DAO has a rhythm to its operations known as Epochs. At the beginning of each Epoch we have an opportunity to set growth, engagement, service and other goals, at the end of each Epoch there is a further issuance of ELYS tokens Epochs run from 6-18 months based on votes within the DAO.
        </FeatureText>
        </IntroText>
      </IntroContainer>
      <RoadNav data={data}/>
    </StyledSection>
  )
}

export default Roadmap

const StyledSection = styled(Section)`
  background-color: #231B17;
`

const IntroContainer = styled.div`
  display: flex;
  padding-left: 100px;
  padding-right: 100px;

`

const IntroText = styled.div`
  padding-left: 100px;
  padding-right: 100px;
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
  margin: 0px auto;
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
