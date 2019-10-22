import React from "react"

import BG from "../../static/svg-bg-01.png"
import BookStack from "../../static/book-stack.png"
import Logo from "../../static/logo1.png"

const banner = () => {
  return (
    <div className="banner">
      <img src={BG} alt="" className="is-absolute" />
      <div className="container has-text-centered-mobile">
        <figure className="image is-w200 logo">
          <img src={Logo} alt="" />
        </figure>
        <div className="columns">
          <div className="column has-text-centered">
            <div className="tagline">
              <h1 className="title is-size-3 text1">
                "So Many Book, So Little Time"
              </h1>
              <h1 className="title is-size-3 text1">
                "So Many Time, So Little Interest"
              </h1>
              {/* <p className="subtitle is-size-4 text2">Kamu tim yang mana?</p> */}
            </div>
          </div>
          <div className="column">
            <figure className="image bookstack">
              <img src={BookStack} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default banner
