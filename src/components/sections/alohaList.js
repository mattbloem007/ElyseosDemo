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
import EpisodeList from "./episodeList"


import { useStaticQuery, graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {BrowserView, MobileView} from 'react-device-detect';

import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import { Section, Container } from "../global"
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

const {
  useCallback,
  useState,
} = React;

// const hashVideoRx = /^#!\/video\/(\d)$/;
// const hash = typeof window.location !== 'undefined'
//   ? window.location.hash : ''; // eslint-disable-line no-undef
// const defaultVideo = hashVideoRx.test(hash)
//   ? parseInt(hash.replace(hashVideoRx, '$1'), 10)
//   : 0;

const videos = [
  { id: 'ZuuVjuLNvFY', name: 'The Alchemy of Remembrance', description: 'Lorem ipsum dolor sit amet, consector' },
  { id: 'ZuuVjuLNv3Y', name: 'The Crowning Series: Conversations', description: 'Lorem ipsum dolor sit amet, consector' },
  { id: 'PYE7jXNjFWw', name: 'The Crowning Series: Attunements', description: 'Lorem ipsum dolor sit amet, consector' },
  { id: 'ld8ugY47cps', name: 'Terra Tarot: Tools for Earthly Abundance', description: 'Lorem ipsum dolor sit amet, consector' },
];

const AlohaList = ({ children }) => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [suggestedQuality, setSuggestedQuality] = useState('auto');
  const [volume, setVolume] = useState(1);
  const [paused, setPaused] = useState(false);

  const video = videos[videoIndex];

  function selectVideo(index) {
    setVideoIndex(index);
  }

  const data = useStaticQuery(
    graphql`
    query videoQuery {

      alchemy: allYoutubeVideo(filter: {title: {regex: "/The Alchemy of Remembrance/"}}) {
        edges {
        node {
          title
          videoId
          description
          publishedAt(formatString: "DD MMMM, YYYY")
          localThumbnail {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
           }
         }
      }

      cattunements: allYoutubeVideo(filter: {title: {regex: "/The Crowning Series: Attunements/"}}) {
        edges {
        node {
          title
          videoId
          description
          publishedAt(formatString: "DD MMMM, YYYY")
          localThumbnail {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
           }
         }
      }

      cconversations: allYoutubeVideo(filter: {title: {regex: "/The Crowning Series: Conversations/"}}) {
        edges {
        node {
          title
          videoId
          description
          publishedAt(formatString: "DD MMMM, YYYY")
          localThumbnail {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
           }
         }
      }

      terra: allYoutubeVideo(filter: {title: {regex: "/Terra Tarot/"}}) {
        edges {
        node {
          title
          videoId
          description
          publishedAt(formatString: "DD MMMM, YYYY")
          localThumbnail {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
           }
         }
      }

     }
    `
  )
  console.log("Carousel data: ", data)
  const ytVids = []
  let component
  // const ytVidsConversations = []
  // const ytVidsTerra = []
  // const ytVidsAttunements = []

  switch (videoIndex) {
    case 0:
      data.alchemy.edges.map(ytvid => {
        ytVids.push({id: ytvid.node.videoId, name: ytvid.node.title, description: ytvid.node.description, publishedAt: ytvid.node.publishedAt })
      })
      component = <EpisodeList video={ytVids} />
    break;

    case 1:
      data.cconversations.edges.map(ytvid => {
        ytVids.push({id: ytvid.node.videoId, name: ytvid.node.title, description: ytvid.node.description, publishedAt: ytvid.node.publishedAt })
      })
      component = <EpisodeList video={ytVids} />
    break;

    case 2:
      data.cattunements.edges.map(ytvid => {
        ytVids.push({id: ytvid.node.videoId, name: ytvid.node.title, description: ytvid.node.description, publishedAt: ytvid.node.publishedAt })
      })
      component = <EpisodeList video={ytVids} />
    break;

    case 3:
      data.terra.edges.map(ytvid => {
        ytVids.push({id: ytvid.node.videoId, name: ytvid.node.title, description: ytvid.node.description, publishedAt: ytvid.node.publishedAt })
      })
      component = <EpisodeList video={ytVids} />
    break;

    default:

  }

  return (
          <ListContainer>
          <span style={{display: "flex", flexDirection: "row", marginTop: "10px"}}>
            <SectionTitle style={{fontFamily: "Parisine", color: "white", margin: "0px"}}>Series hosted on</SectionTitle>
            <SectionTitle style={{color: "white", fontFamily: "Tahu", margin: "0px"}}>&nbsp;Aloha Bokaye</SectionTitle>
          </span>
          <Section id="features" style={{width: "100%", display: "flex", justifyContent: "space-evenly"}}>
          <TimeLineContainer>
            <div className="col s4" style={{width: "100%"}}>
              <div className="collection" style={{width: "555px", border: "none"}}>
                {videos.map((choice, index) => {
                  let excerpt = choice.description.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")
                  let shortDescription = excerpt[0] + " " + excerpt[1] + "..."
                    if (video === choice) {
                      return(
                        <CollectionItemActive>
                          <VideoTitleContainer>
                            <SectionTitle style={{fontFamily: "Parisine", color: "white"}}>
                              <a
                                key={choice.id}
                                href={`#!/video/${choice.id}`}
                                style={{marginRight: "20px", color: "white"}}
                                onClick={() => selectVideo(index)}
                              >
                                {choice.name}
                              </a>
                            </SectionTitle>
                            <Subtitle style={{fontFamily: "Parisine", color: "white"}}>{shortDescription}</Subtitle>
                          </VideoTitleContainer>
                        </CollectionItemActive>
                      )
                    }
                    else {
                      return(
                        <CollectionItem>
                          <VideoTitleContainer>
                            <SectionTitle style={{fontFamily: "Parisine", color: "white"}}>
                              <a
                                key={choice.id}
                                href={`#!/video/${choice.id}`}
                                style={{marginRight: "20px", color: "white"}}
                                onClick={() => selectVideo(index)}
                              >
                                {choice.name}
                              </a>
                            </SectionTitle>
                            <Subtitle style={{fontFamily: "Parisine", color: "white"}}>{shortDescription}</Subtitle>
                          </VideoTitleContainer>
                        </CollectionItem>
                      )
                    }



                })}
              </div>
            </div>

              </TimeLineContainer>
            <IntroContainer>
            {component}
            </IntroContainer>
        </Section>
          </ListContainer>
)
}

export default AlohaList

//alchemy={ytVidsAlchemy} cconversations={ytVidsConversations} cattunements={ytVidsAttunements} terra={ytVidsTerra}

const StyledContainer = styled(Container)``

const StyledSection = styled(Section)`
  background-color: #231B17;
  padding-top: 30px;
`

const CollectionItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.5rem;
  padding: 10px 20px;
  margin: 0;
  padding-left: 0px;

`
const CollectionItemActive = styled.div`
  display: flex;
  justify-content: flex-start
  align-items: flex-start;
  line-height: 1.5rem;
  padding-left: 0px;
  padding: 10px 20px;
  margin: 0;
  background-color: #ED6F1B;
`
const TimeLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  height: 555px;
  align-items: flex-start;
  margin: 10px;
  width: 63.3333333%;
`

const VideoTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
  width: 63.3333333%;
`

const LinksWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
  padding: 10px;
  margin-top: 0px;
  text-align: right;
  opacity: 1;
  transition: all .7s ease-out;
  transition-delay: .3s;
  letter-spacing: 2px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 0px;
    margin: 0px;
  }
`

const ListContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  width: 80%;
  height: 100%;
  margin-bottom: 300px;
  background: #171717 0% 0% no-repeat padding-box;
  padding-left: 100px;
  padding-right: 100px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-left: 0px;
    padding-right: 0px;
  }

`

const SectionTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  margin-bottom: 0px;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  text-align: left;
  margin-top: 10px;
  font-style: italic;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 600px 300px;
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
  flex-direction: row;
  padding-right: 50px;
  align-items: flex-start;

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
