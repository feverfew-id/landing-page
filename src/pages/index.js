import React, { Fragment } from 'react'
import Banner from "../components/banner"
import Tagline from "../components/tagline"
import Video from "../components/video"
import Problem from "../components/problem"
import Footer from "../components/footer"

import "../style.scss"

const index = () => {
  return (
    <Fragment>
      <Banner />
      <Video />
      <Problem />
      <Footer />
    </Fragment>
  )
}

export default index

