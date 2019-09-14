import React, { Component } from "react";
import Login from "./Login";
export default class Header extends Component {
  constructor(){
    super();
    this.state={
      login:false,
      search:false,
      searchQuery:'',
      searchResult:false
    }
  }
  searchResultToggle=()=>{
    this.setState({searchResult:!this.state.searchResult});
  }
  switchLogin=()=>{
    this.setState({login:!this.state.login});
  }
  switchSearch=()=>{
    this.setState({search:!this.state.search});
  }
  searchQuery=(e)=>{
      this.setState({searchQuery:e.target.value});
  }

  render() {
    return (
      <section className="login-signup">
        {this.state.login ? <Login login={this.switchLogin}></Login> : null}
        <header>
          {this.state.search ? (
            <div className="top-slide" id="top-slide">
              <div className="row">
                <div className="col s12">
                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input
                        type="text"
                        id="autocomplete-input"
                        className="autocomplete"
                      />
                      <label for="autocomplete-input">I'm looking in</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <div className="header">
            <div className="navbar-fixed header-nav">
              <nav>
                <div className="nav-wrapper nav-cantact">
                  <a
                    href="#"
                    data-activates="mobile-demo"
                    className="button-collapse"
                  >
                    <i className="material-icons">menu</i>
                  </a>
                  <ul className="right hide-on-med-and-down">
                    <li>demo</li>
                    <li>demo</li>
                    <li>demo</li>
                  </ul>
                  <ul className="side-nav" id="mobile-demo">
                    <ul>
                      <li className="nav-dropdown">

                        <a className="bold-nav" href="#">
                          Advertise with us
                        </a>
                      </li>
                      <li className="nav-dropdown">

                        <a className="bold-nav" href="#">
                          Register your buisness
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="container">
              <div className="header-icon">

                <a className="login" href="#" onClick={this.switchLogin}>
                  <i className="fa fa-user"></i>
                </a>
              </div>
              <div className="header-top">

                <a className="logo" href="#">
                  <img src="./image/logo.png" alt="logo" />
                </a>
                <div className="search-bar">
                  <form>
                    <input
                      type="search"
                      className="search search-all"
                      placeholder="Search"
                      value={this.state.searchQuery}
                      onChange={this.searchQuery}
                    />
                    {
                      this.state.searchResult ? (<div className="search-query">
                        <ul>
                          <li>
                            <i class="material-icons dp48">content_cut</i>
                            <p>text</p>
                            <span>+</span>
                          </li>
                          <li>
                            <i class="material-icons dp48">content_cut</i>
                            <p>text</p>
                            <span>+</span>
                          </li>
                          <li>
                            <i class="material-icons dp48">content_cut</i>
                            <p>text</p>
                            <span>+</span>
                          </li>
                          <li>
                            <i class="material-icons dp48">content_cut</i>
                            <p>text</p>
                            <span>+</span>
                          </li>
                        </ul>
                      </div>):null
                    }

                    <select className="search-all">
                      <option>All categories</option>
                      <option>All categories</option>
                      <option>All categories</option>
                    </select>
                    <button type="button" className="search-button search-all"
                    onClick={this.searchResultToggle}
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div id="mySidebar" className="header-bottom">
                <div className="header-bottom-inner">
                  <div className="header-bottom-left">
                    <div className="col-3">
                      {" "}
                      <span>
                        <i className="material-icons dp48">location_on</i>
                      </span>
                      <p></p>
                      <h4 onClick={this.switchSearch}>
                        Hyderabad
                        <a href="#" id="btn1">
                          {" "}
                          <i className="fa fa-chevron-down down-btn"></i>{" "}
                        </a>
                      </h4>
                    </div>
                    <div className="col-9">
                      <ul>
                        <li className="nav-dropdown">
                          {" "}
                          <i className="fa fa-chevron-down down-btn"></i>{" "}
                          <a className="bold-nav" href="#">
                            Categories
                          </a>
                          <ul className="drop-down-menu">
                            <li>
                              <a href="#">Lorem</a>
                            </li>
                            <li>
                              <a href="#">Lorem</a>
                            </li>
                            <li>
                              <a href="#">Lorem</a>
                            </li>
                            <li>
                              <a href="#">Lorem</a>
                            </li>
                            <li>
                              <a href="#">Lorem</a>
                            </li>
                            <li>
                              <a href="#">Lorem</a>
                            </li>
                            <li>
                              <a href="#">Lorem</a>
                            </li>
                            <li>
                              <a href="#">Lorem</a>
                            </li>
                            <li>
                              <a href="#">Lorem</a>
                            </li>
                            <li>
                              <a href="#">Lorem</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="header-bottom-right">
                    <div className="header-bottom-right-inner">
                      <div className="col-9">
                        <ul>
                          <li className="nav-dropdown">

                            <i className="fa fa-chevron-down down-btn"></i>
                            <a className="bold-nav" href="#">
                              Advertise with us
                            </a>
                            <ul className="drop-down-menu">
                              <li>
                                <a href="#">Lorem</a>
                              </li>
                              <li>
                                <a href="#">Lorem</a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-dropdown">

                            <i className="fa fa-chevron-down down-btn"></i>
                            <a className="bold-nav" href="#">
                              Register your buisness
                            </a>
                            <ul className="drop-down-menu">
                              <li>
                                <a href="#">Lorem</a>
                              </li>
                              <li>
                                <a href="#">Lorem</a>
                              </li>
                            </ul>
                          </li>
                          <li className="login-display-none">
                            <a href="#" onClick={this.switchLogin}>
                              Login/Sign UP
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 sm-contact">
              <div className="container">
                <span>
                  <i className="fa fa-map-marker-alt"></i>
                </span>
                Hyderabad <a href="#"> Change </a>
              </div>
            </div>
          </div>
        </header>
      </section>
    );
  }
}
