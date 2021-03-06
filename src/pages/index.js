import React from "react"

import Layout from "../components/common/layout/layout"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import FeatureRows from "../components/sections/faq"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Banner from "../components/sections/banner"
import LayoutOne from "../components/sections/layoutOne"



const IndexPage = () => (
  <Layout>
    <Navigation />
    <Banner />
    <Features />
    <Footer />
  </Layout>
)

export default IndexPage
