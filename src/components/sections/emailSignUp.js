import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"
import EmailForm from "../emailSignUp"
import email from '../../images/Social_Media_Icons_Light_Orange_1_Email_-_V1.0.png'
import telegram from '../../images/Social_Media_Icons_Light_Orange_Telegram_-_V1.0.png'

const Email = () => (
  <Section id="features">
  <GetInTouchContainer>
    <SectionTitle style={{color: "white", fontSize: "40px"}}>Get in Touch!</SectionTitle>
    <ImageandTitle>
      <SacramentSymbol src={telegram} />
      <FeatureTitle style={{color: "white", fontSize: "20px"}}>Telegram Number</FeatureTitle>
    </ImageandTitle>
    <ImageandTitle>
      <SacramentSymbol style={{marginBottom: "100px"}} src={email} />
      <FeatureTitle style={{color: "white", fontSize: "20px", marginBottom: "100px"}}>Email Address</FeatureTitle>
    </ImageandTitle>
    <FeatureItem>
      <FeatureText style={{color: "white", fontSize: "20px"}}>Share what you propose, need or anything at all!</FeatureText>
    </FeatureItem>
  </GetInTouchContainer>
  <StyledSection>

    </StyledSection>
        <EmailContainer>
        <FeaturesGrid>
        <FeatureItem>
          <EmailForm />
        </FeatureItem>
        </FeaturesGrid>
        </EmailContainer>

  </Section>
)

export default Email

const StyledContainer = styled(Container)``

const StyledSection = styled(Section)`
  background-color: #231B17;
  padding-top: 50px;
`

const SectionTitle = styled.h3`
  font-family: Parisine;
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 0px;
  font: "Parisine Plus STD" 60px;
`

const GetStartedContainer = styled(Container)`
  width: 80%;
  height: 100%;
  position: relative;
`

const EmailContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 40px;
  padding: 0px 0 40px;
  width: 80%;
  height: 100%;
  margin-bottom: 300px;
  background: #FACBAC 0% 0% no-repeat padding-box;
  border: 1px solid #ED6F1B;

`

const GetInTouchContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  flex-direction: column;
  gap: 8px;
  padding: 0px 0 40px;
  vertical-align: middle;
  position: absolute;
  width: 300px;
  height: 500px;
  z-index: 9;
  margin-left: 100px;
  margin-bottom: 300px;
  padding-left: 30px;
  background: #ED6F1B 0% 0% no-repeat padding-box;
  border: 1px solid #ED6F1B;
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
  padding-top: 50px;
  margin: 0px 300px;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  position: relative;

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
  align-items: baseline;
  flex-direction: row;
`

const FeatureTitle = styled.h5`
  font-family: Parisine;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  font-family: Parisine;
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;
}
`

const ExchangeBox = styled.div`
  width: 379px;
  height: 60px;
  background: #ED6F1B 0% 0% no-repeat padding-box;
  opacity: 1;
`



const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`

const IntroContainer = styled.div`
  display: flex;
  padding-left: 100px;
  padding-right: 100px;

`

const SacramentSymbolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SacramentSymbol = styled.img`
  height: 20px;
  margin-bottom: 10px;
  padding-right: 30px;
`

const IntroText = styled.div`
  padding-left: 100px;
  padding-right: 100px;

  @media (max-width: ${props => props.theme.screen.md}) {
    text-align: center;
  }
`
