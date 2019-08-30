import React, { Component } from "react";

export default class PopularSearches extends Component {
  render() {
    return (
      <section className="popular">
        <div class="sec-mdl-footer">
          <div class="container">
            <h3>Popular searches</h3>
            <ul>
              <li>
                <div class="sec-mdl-footer-box">

                  <img
                    src="./image/image1.jpg"
                    width="312"
                    height="209"
                    alt="image1"
                  />
                  <div class="sec-mdl-footer-box-text">
                    <h2>What is Lorem Ipsum?</h2>

                  </div>
                </div>
              </li>
              <li>
                <div class="sec-mdl-footer-box">

                  <img
                    src="./image/image2.jpg"
                    width="312"
                    height="209"
                    alt="image2"
                  />
                  <div class="sec-mdl-footer-box-text">
                    <h2>What is Lorem Ipsum?</h2>

                  </div>
                </div>
              </li>
              <li>
                <div class="sec-mdl-footer-box">
                  <img
                    src="./image/image3.jpg"
                    width="312"
                    height="209"
                    alt="image3"
                  />
                  <div class="sec-mdl-footer-box-text">
                    <h2>What is Lorem Ipsum?</h2>

                  </div>
                </div>
              </li>
              <li>
                <div class="sec-mdl-footer-box">

                  <img
                    src="image/image4.jpg"
                    width="312"
                    height="209"
                    alt="image4"
                  />
                  <div class="sec-mdl-footer-box-text">
                    <h2>What is Lorem Ipsum?</h2>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
