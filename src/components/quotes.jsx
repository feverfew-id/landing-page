import React from "react"

import Quotes from "../../static/quotes.png"

const quotes = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body is-paddingless">
        <figure className="image">
          <img src={Quotes} alt="" />
        </figure>
      </div>
    </section>
  )
}

export default quotes
