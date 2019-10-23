import React from "react"

import Pacul from "../../static/pacul.png"
import Pande from "../../static/pande.png"

const problem = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div class="columns">
            {/* Pande */}
            <div class="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image problem-image">
                    <img src={Pande} alt="Orang Sibuk" />
                  </figure>
                </div>
                <div className="card-content">
                  <div class="content">
                    <h3>Dirga</h3>
                    <p>Orang sibuk yang tidak punya waktu untuk membaca buku</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-one-fifth vertical-center">
              <strong>Atau</strong>
            </div>
            {/* Dendy */}
            <div class="column">
              <div className="card">
                <div class="card-image">
                  <figure class="image problem-image">
                    <img src={Pacul} alt="Orang malas" />
                  </figure>
                </div>
                <div className="card-content">
                  <div class="content">
                    <h3>Dendy</h3>
                    <p>Orang malas yang tidak punya minat untuk membaca buku</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default problem
