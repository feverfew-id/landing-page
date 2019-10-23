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
              Waktu anda terbatas, jadi jangan sia-siakan dengan menjalani hidup
              orang lain. Jika anda salah satu orang yang menghargai waktu
              tetaplah terhuubung dengan kami
            </p>
            <br />
            <div className="field is-grouped">
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
            </div>
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
