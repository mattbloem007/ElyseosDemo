import React from "react"
import styled from "styled-components"
import {Link} from 'gatsby'

import { Container, Section } from "../global"
import twitter from "../../images/Social Media Icons Black - V1.0 - Twitter.png"
import github from "../../images/Social Media Icons Black - V1.0 - Github.png"
import medium from "../../images/Social Media Icons Black - V1.0 - Medium.png"
import rss from "../../images/Social Media Icons Black - V1.0 - RSS.png"
import soundcloud from "../../images/Social Media Icons Black - V1.0 - Soundcloud.png"
import spotify from "../../images/Social Media Icons Black - V1.0 - Spotify.png"
import email from "../../images/email-icon.png"
import youtube from "../../images/Social Media Icons Black - V1.0 - YouTube.png"
import discord from "../../images/Social Media Icons Black - V1.0 - Discord.png"
import facebook from "../../images/Social Media Icons Black - V1.0 - Facebook.png"
import instagram from "../../images/Social Media Icons Black - V1.0 - Instagram.png"
import telegram from "../../images/Social Media Icons Black - V1.0 - Telegram.png"
import EmailForm from "../emailSignUp"

const Footer = () => (
  <FooterWrapper id="footer">
  <Section id="features">
    <StyledSection>
      <GetStartedContainer>
          <EmailForm />
      </GetStartedContainer>
    </StyledSection>
  </Section>
    <FooterColumnContainer>
      <FooterColumn>
        <span>General</span>
        <ul>
          <ListLink href="/home"><li>About</li></ListLink>
          <ListLink href="/faq"><li>FAQ</li></ListLink>
          <li>Support</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Technology</span>
        <ul>
          <ListLink href="/roadmap"><li>Roadmap</li></ListLink>
          <ListLink href="/token-timelines"><li>Token</li></ListLink>
          <ListLink href="/litepaper"><li>Litepaper</li></ListLink>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Community</span>
        <ul>
        <ListLink href="/roadmap"><li>Roadmap</li></ListLink>
        <li>Governance</li>
        <ListLink href="/litepaper"><li>Litepaper</li></ListLink>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Listings</span>
        <ul>
          <ListLink target="_blank" href="https://nomics.com/assets/elys-elyseos"><li>Nomics</li></ListLink>
        </ul>
      </FooterColumn>
      <FooterColumn>
      <SocialContainer>
        <a target="_blank" href="https://t.me/joinchat/kJCUkY1WacpkZTVk">
          <SocialSymbol src={telegram}/>
        </a>
        <a target="_blank" href="https://discord.gg/gY2WMAnBem">
          <SocialSymbol src={discord} />
        </a>
        <a target="_blank" href="https://twitter.com/ElyseosFDN">
          <SocialSymbol src={twitter} />
        </a>
        <a target="_blank" href="https://github.com/elyseos/contracts">
          <SocialSymbol src={github} />
        </a>
        <a target="_blank" href="https://medium.com/@Elyseos">
          <SocialSymbol src={medium} />
        </a>
        <a target="_blank" href="https://medium.com/@Elyseos">
          <SocialSymbol src={facebook} />
        </a>
        <a target="_blank" href="https://medium.com/@Elyseos">
          <SocialSymbol src={instagram} />
        </a>
        <a target="_blank" href="https://medium.com/@Elyseos">
          <SocialSymbol src={youtube} />
        </a>
        <a target="_blank" href="https://medium.com/@Elyseos">
          <SocialSymbol src={soundcloud} />
        </a>
        <a target="_blank" href="https://medium.com/@Elyseos">
          <SocialSymbol src={spotify} />
        </a>
        <a target="_blank" href="https://medium.com/@Elyseos">
          <SocialSymbol src={rss} />
        </a>
        <Link to="/email-signup">
          <SocialSymbol src={email} />
        </Link>
      </SocialContainer>
      </FooterColumn>
    </FooterColumnContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: #FACBAC;
`

const StyledSection = styled(Section)`
  background-color: #231B17;
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
  padding-top: 50px;
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

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 100px;
  padding: 0px 0 40px;
  width: 1094px;
  height: 300px;
  margin-bottom: 300px;
  background: #ED6F1B00 0% 0% no-repeat padding-box;
  border: 1px solid #ED6F1B;
`

const Logo = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  margin-right: 20px;
`

const SocialSymbol = styled.img`
  height: 28px;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-right: 50px;

`

const ListLink = styled.a`
    text-decoration: none;
    color: #231B17;

  :hover {
    color: #ED6F1B;
  }
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 32px;
  padding-top: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  justify-content: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 14px;
      margin-left: 2px;
    }
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export default Footer
