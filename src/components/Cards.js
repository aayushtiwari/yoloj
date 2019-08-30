import React, { Component } from 'react'

export default class Cards extends Component {
  render() {
    return (
      <div className="container">
      <div className="tab-inner-bg">
        <div id="test1" className="col s12 active" >
          <div className="row">
            <div className="col l6 m12">
              <div className="col s12">
                <div className="slideshow-container">
                  <div>
                    <div className="slide-right-box"> <img src="./image/pexels-photo-459225.jpeg"/>
                      <div className="slide-right-box-inner"> <span className="left-side"> <i className="material-icons dp48">content_cut</i>
                        <h4>culinary</h4>
                        </span> <span className="right-side"> <i className="material-icons dp48">access_time</i>
                        <h4>27/02/2018</h4>
                        </span> </div>
                      <h2>Tite of the new</h2>
                      <p>the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                    </div>
                  </div>
                  <div className="mySlides fade">
                    <div className="numbertext">2 / 3</div>
                    <div className="slide-right-box"> <img src="./image/pexels-photo-459225.jpeg"/>
                      <div className="slide-right-box-inner"> <span className="left-side"> <i className="material-icons dp48">content_cut</i>
                        <h4>culinary</h4>
                        </span> <span className="right-side"> <i className="material-icons dp48">access_time</i>
                        <h4>27/02/2018</h4>
                        </span> </div>
                      <h2>Tite of the new</h2>
                      <p>the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                    </div>
                  </div>
                  <div className="mySlides fade">
                    <div className="numbertext">3 / 3</div>
                    <div className="slide-right-box"> <img src="./image/pexels-photo-459225.jpeg"/>
                      <div className="slide-right-box-inner"> <span className="left-side"> <i className="material-icons dp48">content_cut</i>
                        <h4>culinary</h4>
                        </span> <span className="right-side"> <i className="material-icons dp48">access_time</i>
                        <h4>27/02/2018</h4>
                        </span> </div>
                      <h2>Tite of the new</h2>
                      <p>the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                    </div>
                  </div>
                 </div>
              </div>
            </div>
            <div className="col l6 m12 slide-right-box">
              <ul className="tabs1">
                <li className="tab col s12"> <a href="#test11">
                  <div className="slide-right-box-main">
                    <div className="slide-right-box-content"> <img src="./image/slide-small-img.jpg" alt="slide-img"/></div>
                    <div className="box-content-text">
                      <h3>27/02/2018</h3>
                      <p>when an unknown printer took a galley </p>
                      <span className="slide-icon"><i className="fa fa-chevron-right" aria-hidden="true"></i></span> </div>
                  </div>
                  </a> </li>
                <li className="tab col s12"> <a className="active" href="#test22">
                  <div className="slide-right-box-main">
                    <div className="slide-right-box-content"> <img src="./image/slide-small-img.jpg" alt="slide-img"/> </div>
                    <div className="box-content-text">
                      <h3>28/02/2018</h3>
                      <p>when an unknown printer took a galley </p>
                      <span className="slide-icon"><i className="fa fa-chevron-right" aria-hidden="true"></i></span> </div>
                  </div>
                  </a> </li>
                <li className="tab col s12"> <a href="#test33">
                  <div className="slide-right-box-main">
                    <div className="slide-right-box-content"> <img src="./image/slide-small-img.jpg" alt="slide-img"/></div>
                    <div className="box-content-text">
                      <h3>29/02/2018</h3>
                      <p>when an unknown printer took a galley </p>
                      <span className="slide-icon"><i className="fa fa-chevron-right" aria-hidden="true"></i></span> </div>
                  </div>
                  </a> </li>
                <li className="tab col s12"> <a href="#test44">
                  <div className="slide-right-box-main border-none">
                    <div className="slide-right-box-content"> <img src="./image/slide-small-img.jpg" alt="slide-img"/> </div>
                    <div className="box-content-text">
                      <h3>30/02/2018</h3>
                      <p>when an unknown printer took a galley </p>
                      <span className="slide-icon"><i className="fa fa-chevron-right" aria-hidden="true"></i></span> </div>
                  </div>
                  </a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
