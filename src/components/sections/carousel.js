import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image';
import styled from "styled-components"
import Layout from "../common/layout/layout"
import { Section, Container } from "../global"

const SimpleSlider = ({ children }) => {
  const data = useStaticQuery(
    graphql`
    query featureItemQuery {
   allYoutubeVideo {
     edges {
     node {
       title
       videoId
       description
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
  return (
    <Layout>
      <Section style={{backgroundColor: "#231B17"}} className='container-fluid' >
        <SectionTitle style={{color: "white"}}>Latest Blogs</SectionTitle>
        <Subtitle>Read all about it</Subtitle>
          <div style={{justifyContent: "center", marginBottom: "300px"}} className="row">
              <div className="col-6">
                  <Carousel>
                  {
                    data.allYoutubeVideo.edges.map(videos => {
                      return (
                        <Carousel.Item>
                        <Img fluid={videos.node.localThumbnail.childImageSharp.fluid}/>
                            <Carousel.Caption>
                                <Link target="_blank" to={"https://youtube.com/watch?v=" + videos.node.videoId}><h3 style={{color: "#ED6F1B", fontStyle: "italic", textDecoration: "underline"}}>{videos.node.title}</h3></Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                      )
                    })
                  }
                  </Carousel>
              </div>
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
