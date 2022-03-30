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
import AlohaList from "./alohaList"
import backdrop from '../../images/Elys Banner.png'
import Signup from "../common/signupBox/signup"


import { useStaticQuery, graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {BrowserView, MobileView} from 'react-device-detect';

import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import { Section, Container } from "../global"
import ab from '../../images/AlohaBokayé-1921.jpg'
import get from 'lodash/get'

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

const AlohaBokaye = ({ children }) => {
  return (

        <StyledSection style={{ backgroundImage: `url(${ab})` }}>
          <IntroContainer>
          <FeatureText>Introducing the official broadcast channel & the communications arm of Elyseos: Aloha! Bokayé! We are
sourcing & creating interesting, inspiring, helpful & relevant content for: regular weekly and monthly podcasts
from a variety of presenters, online ceremonies & attunements, embodiment master classes covering a wide
variety of technologies, live music events dance sets. All gathered to explore and experience Sacramental
Technologies - the Arts & Sciences available to us globally that aid us to root well and goodly, sustainably
and rightly for the children for the future as Human Beings here now together with all that is. </FeatureText>
          <FeatureText>Here we explore the limits and gifts that the emerging meta verse has to offer us on our individual and collective
journey to mastery.. Living Abundantly & Artfully! We are going to be linking together as many different social media
platforms as we are able to - including both mainstream & decentralised blockchain platforms - because...why not?!
This is the age of accessibility, so our mission is to call out across boundaries thus embracing inclusive ‘rainbow’ philosophies.
There is a dire need for a change in the ‘education system’ on this planet and we intend to help in every-which-way we can!
We leave no thing out of the term ‘education system’: it is broad sweeping and includes not only schools and and
training facilities for all ages, but our very culture as a humanity, the social structuring and governance of our society. </FeatureText>
          <FeatureText>The ‘education system’ has installed in humanity beliefs that have grown up with us through childhood experiences,
and are deeply routed in the ancestral frequencies of our beings e.g. the belief that we are separate from everything around
us, and there is not enough of everything we need for all of life to live well. Because of the lack of truth, integrity and
sustainability in said system - Earth and all of her occupants are facing a dire future - unless we make some big changes.
Change begins within, so yes...it is time we bring responsibility back home.</FeatureText>
          </IntroContainer>
          <AlohaList />
          <Signup />
        </StyledSection>
)
}

export default AlohaBokaye

const StyledContainer = styled(Container)``

const StyledSection = styled(Section)`
  background-color: #231B17;
  padding-top: 30px;
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 0px;
`

const BackDrop = styled.img`
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

const Subtitle = styled.h5`
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
  font-family: Parisine;
  text-align: left;
  padding-bottom: 10px;
  width: 80%;

`

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 550px;

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
