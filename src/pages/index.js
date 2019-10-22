import React, { Fragment } from 'react'
import Banner from "../components/banner"
import Video from "../components/video"
import Problem from "../components/problem"
import Quotes from "../components/quotes"
import Footer from "../components/footer"

import "../style.scss"

const index = () => {
  return (
    <Fragment>
      <Banner />
      <Video />
      <Problem />
      <Quotes />
      <Footer />
    </Fragment>
  )
}

export default index

