import React, { useState, useEffect } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import {navigate} from 'gatsby'
import styled from "styled-components"
import * as Yup from "yup";


import Recaptcha from "react-recaptcha"
import Radio from "./radio"
import RadioGroup from "./radiogroup"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
function EmailForm() {
  const [token, setToken] = useState(null)
  return (
    <Formik
      initialValues={{ email: "", telegram: "" }}
      validationSchema={Yup.object().shape({
                      email: Yup.number()
                        .required("Give us one or both of these as a means of contacting you"),
                      telegram: Yup.number()
                        .required("Give us one or both of these as a means of contacting you"),
                    })}
      onSubmit={(data, {resetForm}) => {
        console.log(data)
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": "email-newsletter",
              ...data,
            }),
          })
            .then(() => {
              resetForm();
              navigate('/email-success')
            })
            .catch(error => alert(error))

      }}
    >
    {({
        values,
        errors,
        touched,
        handleSubmit,
        isSubmitting,
        validating,
        valid,
      }) => (
      <Form
        name="email-newsletter"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        style={{width: "100%", display: "flex", flexDirection: "column"}}
      >
        <Field type="hidden" name="form-name" />
        <Field type="hidden" name="bot-field" />

        <Flex>
          <Field name="telegram" valid={touched.telegram && !errors.telegram} error={touched.telegram && errors.telegram} placeholder="We will contact you here:" type="text" style={{background: "#FBB88C", borderStyle: "none", borderRadius: "30px", width: "323px", height: "33px", paddingLeft: "10px"}}/>
          <ErrorMessage name="telegram">
            {(msg) => (
              <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
            )}
          </ErrorMessage>
        </Flex>
        <br />
        <Flex>
            <Field name="email" valid={touched.email && !errors.email} error={touched.email && errors.email} placeholder="We will contact you here:" type="text" style={{background: "#FBB88C", borderStyle: "none", borderRadius: "30px", width: "323px", height: "33px", paddingLeft: "10px"}}/>
            <ErrorMessage name="email">
              {(msg) => (
                <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
              )}
            </ErrorMessage>
        </Flex>
        <br />
        <Flex>
            <Field name="message" placeholder="Lorem ipsum" type="text" style={{background: "#FBB88C", borderStyle: "none", borderRadius: "30px", width: "493px", height: "223px", paddingLeft: "10px"}}/>
          <ErrorMessage name="message" />
        </Flex>
        <br/>
        <Flex style={{marginBottom: "50px", justifyContent: "flex-end"}}>
          <Submit style={{color: "white"}} type="submit">Submit</Submit>
        </Flex>
      </Form>
      )}
    </Formik>
  )
}

export default EmailForm

const HeaderInput = styled.input`
  width: 262px;
  height: 30px;
  background: #FACBAC 0% 0% no-repeat padding-box;
  border: 2px solid #ED6F1B;
  border-radius: 30px;
  opacity: 1;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`


const Label = styled.label`
width: 100%;
text-align: left;
letter-spacing: 0px;
color: #FFFFFF;
`

const Styled = styled.div`
  display: inline-block;
  > input {
    opacity: 0;
  }
  > input + label {
    position: relative; /* permet de positionner les pseudo-éléments */
    padding-left: 25px; /* fait un peu d'espace pour notre case à venir */
    cursor: pointer;    /* affiche un curseur adapté */
    &:before {
      content: '';
      position: absolute;
      left:0; top: 1px;
      width: 17px; height: 17px; /* dim. de la case */
      border: 1px solid #aaa;
      background: #f8f8f8;
      border-radius: 3px; /* angles arrondis */
      box-shadow: inset 0 1px 3px rgba(0,0,0,.3) /* légère ombre interne */
    }
    &:after {
      content: '✔';
      position: absolute;
      top: -1px; left: 2px;
      font-size: 16px;
      color: #09ad7e;
      transition: all .2s; /* on prévoit une animation */
    }
  }
  > input:not(:checked) + label {
      &:after {
        opacity: 0; /* coche invisible */
        transform: scale(0); /* mise à l'échelle à 0 */
      }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
  }
  > input:checked + label {
    &:after {
      opacity: 1; /* coche opaque */
      transform: scale(1); /* mise à l'échelle 1:1 */
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`

const CheckLabel = styled.label`
  background: #FACBAC;
  text-align: left;
  letter-spacing: 0px;
  color: "black";
`;


const CheckInput = styled.input`
&:checked + ${CheckLabel} {
    background: #FACBAC;
  }
`

const Flex = styled.div`
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

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  margin: 0px auto;
  grid-column-gap: 40px;
  margin-top: 50px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureText = styled.p`
  text-align: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    display: none
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: none
  }
`

const StyledInlineErrorMessage = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: block;
  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  white-space: pre-line;
`

const Submit = styled.button`
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

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
