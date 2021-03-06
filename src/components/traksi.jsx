import React from "react"

const traksi = () => {
  return (
    <section className="hero is-fullheight is-info">
      <div className="hero-body">
        <div className="container">
          <div className="has-text-centered max-w-650 mx-auto">
            <h1 className="has-text-white title is-size-2 font-900">
              Tetaplah bersama kami
            </h1>
            <p className="has-text-white is-size-5">
              Jika kamu adalah orang yang ingin melihat dunia, tetapi TIDAK
              SEMPAT atau bahkan MALAS membuka jendela, tetaplah terhubung
              dengan kami
            </p>
            <br />
            {/* <div className="field is-grouped">
              <p className="control is-expanded">
                <input
                  className="input is-medium"
                  type="text"
                  placeholder="Your email"
                />
              </p>
              <p className="control">
                <a className="button is-danger is-medium">Submit</a>
              </p>
            </div> */}
            <a
              href="https://forms.gle/nykgxstk1NL36ygy6"
              className="button is-danger"
            >
              <strong>KLIK DISINI</strong>
            </a>
          </div>
          {/* <div className="navbar-divider"></div>
          <div className="has-text-centered lh-2">
            <h1 className="has-text-white is-size-6 font-900">
              feverfew© 2019
            </h1>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default traksi
