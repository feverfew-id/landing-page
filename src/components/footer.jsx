import React from "react"

const footer = () => {
  return (
    // <section className="hero is-full is-info">
    //   <div className="hero-body">
    //     <div className="container">
    //       <div className="has-text-centered">
    //         <p>Email</p>
    //       </div>
    //       <div className="line"></div>
    //       <div className="has-text-centered">2019</div>
    //     </div>
    //   </div>
    // </section>
    <footer className="footer has-background-info">
      <div className="container">
        <div className="has-text-centered max-w-650 mx-auto">
          <h1 className="has-text-white title is-size-2 font-900">
            Stay in the know
          </h1>
          <p className="has-text-white is-size-5">
            Lorem ipsum is common placeholder text used to demonstrate the
            graphic elements of a document or visual presentation.
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
        <div className="navbar-divider"></div>
        <div className="has-text-centered lh-2">
          <h1 className="has-text-white is-size-6 font-900">feverfew© 2019</h1>
        </div>
      </div>
      {/* <img src="./img/footer-curve.png" alt="" /> */}
    </footer>
  )
}

export default footer
