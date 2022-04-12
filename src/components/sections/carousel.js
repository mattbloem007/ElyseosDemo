import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image';
import styled from "styled-components"
import Layout from "../common/layout/layout"
import { Section, Container } from "../global"
import eco1 from "../../images/Ecosystem 1_3.png"

const SimpleSlider = ({ children }) => {
  const data = useStaticQuery(
    graphql`
    query featureItemQuery {
   allYoutubeVideo(limit: 10) {
     edges {
     node {
       title
       videoId
       description
       localThumbnail {
         childImageSharp {
           fluid {
             src
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
  return (
    <Layout>
      <Section style={{backgroundColor: "#231B17"}} className='container-fluid' >
        <SectionTitle style={{color: "white"}}>Latest Blogs</SectionTitle>
        <Subtitle>Read all about it</Subtitle>
          <div style={{justifyContent: "center", marginBottom: "300px"}} className="row">
                  <CCarousel controls indicators>
                  {
                    data.allYoutubeVideo.edges.map(videos => {
                      return (
                        <CCarouselItem style={{position: "relative"}}>
                          <CImage src={videos.node.localThumbnail.childImageSharp.fluid.src}/>
                              <CCarouselCaption className="d-none d-md-block">
                                  <Link target="_blank" to={"https://youtube.com/watch?v=" + videos.node.videoId}><h3 style={{color: "#ED6F1B", fontStyle: "italic", textDecoration: "underline"}}>{videos.node.title}</h3></Link>
                              </CCarouselCaption>
                        </CCarouselItem>
                      )
                    })
                  }
                  </CCarousel>

          </div>
      </Section>
  </Layout>
)
}

export default SimpleSlider

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
