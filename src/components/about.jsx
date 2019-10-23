import React from "react"

import Logo from "../../static/logo_orin.svg"

const about = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={Logo} alt="" />
              </figure>
            </div>
            <div className="column vertical-center">
              <div className="paragraf">
                <h1 className="title is-size-2">About</h1>
                <p className="is-size-4 has-text-justified">
                  Dalam setiap hal yang kami kerjakan, kami selalu menghargai
                  waktu. Setiap orang memiliki 24 jam yang sama, yang berbeda
                  adalah bagaimana mereka menghabiskannya. Bagi kami, mereka
                  yang punya kontrol penuh untuk 24 jam tersebut punya kontrol
                  penuh juga untuk masa depan dirinya. Karena semua hal datang
                  pada mereka yang sabar menunggu, tapi hanya hal-hal yang
                  disisakan oleh mereka yang bekerja keras.
                </p>
                <br />
                <p className="is-size-4 has-text-justified">
                  Cara kami untuk menghargai waktu adalah membuat produk kami
                  agar bisa digunakan kapanpun dimanapun, menjangkau semua
                  kalangan dan tentunya nyaman bagi pengguna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about
