import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import FeatureRows from "../components/sections/faq"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Banner from "../components/sections/banner"
import LayoutOne from "../components/sections/layoutOne"
import EmailSignUp from "../components/sections/emailSignUp"


const Email = () => (
  <Layout>
    <Navigation />
    <Banner />
    <EmailSignUp />
    <Footer />
  </Layout>
)

export default Email
