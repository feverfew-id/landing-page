import React from "react"

const video = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/oYgCHUKJ-Vc"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p className="is-size-2">Masih bingung pilih tim yang mana? SKUY!</p>
        </div>
      </div>
    </section>
  )
}

export default video
