import React, { Component } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { Menu, X } from "react-feather"
import { Link, navigate } from "gatsby"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { Section, Container } from "../../global"
import email from '../../../images/Subscribe_V1.4.png'

import {
  MenuWrapper,
  SectionTitle,
  SignupBox,
  EmailSymbol,
  Flex,
  Submit,
  Label,
  SignupWrapper,
  Circle
} from "./style"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Signup extends Component {

  constructor(props){
		super(props);
		this.state = {
      signupOpen: false,
    };

	}

  componentDidMount() {
  }


  handleClick = (e) => {
      this.setState({
        signupOpen: !this.state.signupOpen
      })
  }

  closeSignup = () => {
    if (this.state.signupOpen) {
      this.setState({
        signupOpen: !this.state.signupOpen
      })
    }
  }

  render() {
    return (
      <SignupWrapper>
      {
        this.state.signupOpen ?
        <MenuWrapper id="features" onClick={(e) => this.handleClick(e)} style={{position: "unset", cursor: "pointer"}}>
          <Circle>
            <div className="btn-close" color="none" aria-label="Close" style={{cursor: "pointer"}} onClick={() => this.closeSignup()}/>
          </Circle>
          <SectionTitle>Subscribe to our newsletter</SectionTitle>
          </MenuWrapper>
          :
          <MenuWrapper id="features" onClick={(e) => this.handleClick(e)}>
            <Circle style={{display: "none"}}>
              <div className="btn-close" color="none" aria-label="Close" />
            </Circle>
            <SectionTitle>Subscribe to our newsletter</SectionTitle>
            </MenuWrapper>
      }

          {
            this.state.signupOpen ? <SignupBox style={{maxHeight: "100%"}}>
              <EmailSymbol src={email} />
              <Formik
                initialValues={{ email: "", name: "" }}
                onSubmit={(data, {resetForm}) => {
                  console.log(data)
                    fetch("/", {
                      method: "POST",
                      headers: { "Content-Type": "application/x-www-form-urlencoded" },
                      body: encode({
                        "form-name": "email-newsletter-signup",
                        ...data,
                      }),
                    })
                      .then(() => {
                        resetForm();
                      })
                      .catch(error => alert(error))

                }}
              >
              {({formik}) => (
                <Form
                  name="email-newsletter-signup"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  style={{width: "100%", display: "flex", flexDirection: "column"}}
                >
                  <Field type="hidden" name="form-name" />
                  <Field type="hidden" name="bot-field" />

                  <Flex>
                    <Field name="name" placeholder="Your name:" type="text" style={{background: "#FBB88C", borderStyle: "none", borderRadius: "30px", width: "323px", height: "33px", paddingLeft: "10px"}}/>
                  </Flex>
                  <br />
                  <Flex>
                      <Field name="email" placeholder="Your email:" type="text" style={{background: "#FBB88C", borderStyle: "none", borderRadius: "30px", width: "323px", height: "33px", paddingLeft: "10px"}}/>
                  </Flex>
                  <br />
                  <Flex style={{marginBottom: "50px", justifyContent: "center"}}>
                    <Submit style={{color: "white"}} type="submit">Submit</Submit>
                  </Flex>
                </Form>
                )}
              </Formik>
            </SignupBox>
            :
            null
          }

      </SignupWrapper>
    )
  }
}
