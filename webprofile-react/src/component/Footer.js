import React from 'react'

const Footer = () => {
  return (
    <>
         {/* footer */}
      <section id="contact">
          <nav class="navbar" style={{ backgroundColor: 'rgb(171,109,132)' }}>
            <div class="container-fluid">
              <div class="container text-center container-fluid">
                <div class="col">
                  <br></br>
                  <div class="heading">
                    <div class="first">Tripple</div>
                    <div class="last">N</div>
                  </div>
                </div>
                <div class="col">
                  <b style={{ color: "white" }}>Please click on the link below if you need us</b>
                </div>
                <div class="col">
                  <div class="container text-center">
                    <div class="row align-items-start">
                      <div class="col">
                        <div class="social">
                          <br></br>
                          <a href="https://smktelkom-mlg.sch.id/"><i class="fa fa-google"></i></a>
                          <a href="https://www.instagram.com/smktelkommalang/" ><i class="fa fa-instagram"></i></a>
                          <a href="https://www.youtube.com/c/smktelkommalang" ><i class="fa fa-youtube"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="copyright">
                    <b style={{ color: "rgb(205, 188, 188) " }}>Copyright © 2022 TrippleN designed by kelompok 7</b>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          
        </section>

    </>
  )
}

export default Footer