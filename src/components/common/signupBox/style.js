import styled from "styled-components"
import logo from "../../../images/Elyseos Logo.png"
import { Section, Container } from "../../global"

export const SignupWrapper = styled.div`
  padding: 0 auto;
  position: absolute;
  bottom: 0px;
  right: 0px;
  height: 300px;
`

export const MenuWrapper = styled.div`
  height: 50px;
  width: 250px;
  display: flex;
  position: absolute;
  cursor: pointer;
  bottom: 0px;
  right: 0px;
  flex-direction: column;
  background-color: #EC7019;
  border-radius: 20px 20px 0px 0px;
  padding: 0 auto;
`

export const Circle = styled.div`
    display: flex;
    width: 35px;
    height: 35px;
    opacity: 0.8;
    background: grey;
    justify-content: center;
    align-items: center;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    z-index: 1;
    position: absolute;
    top: -14px;
    left: -14px;
`

export const SignupBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #FACBAC;
  width: 250px;
  max-height: 0%;
  transition: 0.8s;
  overflow: hidden;
`

export const EmailSymbol = styled.img`
  height: 35px;
  margin-bottom: 20px;
  margin-top: 10px;
`

export const Label = styled.label`
width: 100%;
text-align: left;
letter-spacing: 0px;
color: #FFFFFF;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`

export const Submit = styled.button`
float: right;
border-radius: 45px;
width: 160px;
background-color: rgb(236, 112, 25);
border: none;
border-radius: 20px;
height: 40px;
color: rgb(255, 255, 255);
font-size: 15px;
`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ActiveItem = styled.span`
width: 270px;
height: 0px;
border-bottom: 3px solid #EC7019;
opacity: 1;
`

export const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
`

export const FeaturesGrid = styled.div`
  max-width: 870px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  margin-top: 30px;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding-left: 24px;
    padding-right: 64px;
  }
`

export const IntroContainer = styled.div`
  display: flex;
  padding-left: 244px;
  padding-right: 200px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    padding-bottom: 50px;
  }
`

export const IntroText = styled.div`
  margin: 0px auto;
  margin-left: 10px;
  padding-left: 20px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-left: 0px;
  }
`

export const Divimage = styled.div`
  display:inline-block;
  width: 110px;
  text-align: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 70px;
  }
`

export const FeatureText = styled.p`
  text-align: center;
  color: white;
`

export const TimeLineContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 300px;
`


export const LinksWrapper = styled.div`
  width: 500px;
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

export const LinkList = styled.ul`

    padding-right: 15px;
    padding-left: 5px;

    @media (max-width: ${props => props.theme.screen.md}) {
      padding-left: 0px;
      padding-right: 0px;
    }

`

export const LinkItem = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: flex-start
`

export const SacramentSymbol = styled.img`
  height: 40px;
  margin-bottom: 10px;
  padding-right: 30px;

`

export const LinkListLi = styled.li`
position: relative;

  list-style-type: none;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 30px;
  top: 8px;
  padding: 3px;

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, .5);
    transition: color .3s ease;
  }
`

export const MobileMenu = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: ${props => props.theme.color.regular};
`

export const Logo = styled.div`
top: 86px;
left: 140px;
width: 133px;
height: 140px;
background-image: url(${logo});
opacity: 1;
`

export const Brand = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin-left: 150px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    a {
      color: ${props => props.theme.color.black.regular};
      text-decoration: none;
    }
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 150px;
  @media (max-width: ${props => props.theme.screen.xs}) {
    display: none;
  }


`

export const Mobile = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.screen.xs}) {
    display: block;
  }

  ${props =>
    props.hide &&
    `
    display: block;

    @media (max-width: ${props.theme.screen.xs}) {
      display: none;
    }
  `}
`

export const SectionTitle = styled.h5`
  font-family: Parisine;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 18px;
  text-align: center;
  margin-bottom: 0px;
`


export const Subtitle = styled.h1`
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-style: italic;
`

// Background blur info
// background-color: ${props => props.scrolled && `rgba(245, 245, 250, .8`};
// box-shadow:  ${props =>
//   props.scrolled &&
//   `0 0 0 1px rgba(0,0,50,.02) inset, 0 1px 1px rgba(0,0,50,.05) inset, 0 2px 4px rgba(0,0,50,.04) inset`};
//   backdrop-filter: ${props => props.scrolled && `blur(15px)`};
