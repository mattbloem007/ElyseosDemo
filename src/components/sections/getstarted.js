import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"
import ContactForm from "../form"

const GetStarted = () => (
  <StyledSection>
    <GetStartedContainer>
      <ExchangeBox>
        <FeatureText>FTM/USD now = $ </FeatureText>
      </ExchangeBox>
      <FeaturesGrid>
      <FeatureItem>
        <ContactForm />
      </FeatureItem>
      </FeaturesGrid>
    </GetStartedContainer>
  </StyledSection>
)

export default GetStarted

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
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

const ExchangeBox = styled.div`
  width: 379px;
  height: 60px;
  background: #ED6F1B 0% 0% no-repeat padding-box;
  opacity: 1;
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 100px;
  padding: 0px 0 40px;
  width: 1094px;
  height: 900px;
  margin-bottom: 300px;
  background: #ED6F1B00 0% 0% no-repeat padding-box;
  border: 1px solid #ED6F1B;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`

const TryItButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const Subtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  padding-top: 16px;
  font-size: 14px;
  color: ${props => props.theme.color.primary};
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subheading = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`
