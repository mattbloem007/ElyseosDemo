import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import Thankyou from "../components/sections/thankyou"
import Banner from "../components/sections/banner"
import LayoutOne from "../components/sections/layoutOne"
import Contact from "../components/sections/contactInfo"


const ContactUs = () => (
  <Layout>
    <SEO title="Roadmap" />
    <Navigation />
    <Banner />
    <Contact />
    <Footer />
  </Layout>
)

export default ContactUs
