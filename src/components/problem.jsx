import React from "react"

const problem = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-head has-text-centered">
        <h1 className="title">Kamu yang mana?</h1>
      </div>
      <div className="hero-body">
        <div className="container">
          <div class="columns">
            <div class="column">
              <div className="box has-text-centered has-background-info">
                <p className="title has-text-white">Pande</p>
                <p className="subtitle has-text-white">Jeleme sibuk</p>
                <p className="has-text-white">Sing ngelah waktu mace buku</p>
              </div>
            </div>
            <div class="column has-text-centered is-one-fifth">
              <strong>Atau</strong>
            </div>
            <div class="column">
              <div className="box has-text-centered has-background-danger">
                <p className="title has-text-white">Dendy</p>
                <p className="subtitle has-text-white">Jeleme males</p>
                <p className="has-text-white">Sing demen mace buku</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default problem
