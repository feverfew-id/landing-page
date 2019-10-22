import React from "react"

const video = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <figure className="image is-16by9">
            <iframe
              className="has-ratio"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/oYgCHUKJ-Vc"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default video
