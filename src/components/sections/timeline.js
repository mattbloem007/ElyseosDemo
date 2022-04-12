import React from 'react';
import styled from "styled-components"
import Timeline from '@material-ui/lab/Timeline';
import MuiTimelineItem from './styledTimeline'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { useStaticQuery, graphql, Link } from "gatsby"

import { Section, Container } from "../global"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

const Bold = ({ children }) => <span style={{color: "white"}}>{children}</span>
const Text = ({ children }) => <p style={{color: "white", textAlign: "center"}}>{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}




const TimeLine = ({ data }) => {
  console.log("Timeline Data : ", data)

  let sloganCol = "white";
  let titleCol = "#ED6F1B"
  let sectionCol = "#231B17"
  let itemCol = "white"
  if (data.colour == "white") {
    sloganCol = "#ED6F1B";
    titleCol = "#231B17";
    sectionCol = "white";
    itemCol = "#231B17"
  }
  return (
  <Section id="features">
    <StyledSection style={{backgroundColor: `${sectionCol}`}}>
      <Timeline style={{padding: "0px", marginLeft: "25px"}}>
      <SectionTitle style={{color: `${sloganCol}`, fontWeight: "bold"}}>{data.slogan}</SectionTitle>
      <Subtitle style={{color: `${titleCol}`}}>{data.title}</Subtitle>
      <IntroText>
        {data.description ? documentToReactComponents(JSON.parse(data.description.raw, options)) : null}
      </IntroText>
    </Timeline>
    </StyledSection>
  </Section>
  )
}

export default TimeLine

const StyledContainer = styled(Container)``

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 90%;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    width: 90%;
  }


`

const SectionTitle = styled.h5`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 0px;
  @media (max-width: ${props => props.theme.screen.md}) {
      margin-right: 22px;
      justify-content: flex-start;
  }

`


const Subtitle = styled.h1`
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-style: italic;
  @media (max-width: ${props => props.theme.screen.md}) {
      margin-right: 122px;
      font-size: 25px;
      text-align: left;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    margin-right: 122px;
    font-size: 25px;
    text-align: left;
  }
`

const IntroText = styled.div`
  margin: 0px auto;
  margin-left: 10px;
  padding-left: 20px;
  width: 70%;
  @media (max-width: ${props => props.theme.screen.md}) {
    padding-left: 0px;

  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    padding-left: 10px;
    width: 50%;
  }

`
