import React, { Component } from 'react'

export default class SearchOptions extends Component {
  render() {
    return (
      <section>
        <div class="row">
          <div class="tab-bg">
            <div class="container"> </div>
          </div>
          <div class="container">
            <div class="inner-bg">
              <form action="#">
                <div class="input-field col s2" id="select">
                  <select>
                    <option value="" disabled selected>75 Lac</option>
                    <option value="1">80 Lac</option>
                    <option value="2">90 Lac</option>
                    <option value="3">95 Lac</option>
                  </select>
                  <label>Total Payout</label>
                </div>
                <div class="input-field col s2" id="select">
                  <select>
                    <option value="" disabled selected>60 Yrs</option>
                    <option value="1">60 Yrs</option>
                    <option value="2">60 Yrs</option>
                    <option value="3">60 Yrs</option>
                  </select>
                  <label>Cover Upto</label>
                </div>
                <div class="input-field col s2" id="select">
                  <select>
                    <option value="" disabled selected>Regular</option>
                    <option value="1">Regular</option>
                    <option value="2">Regular</option>
                    <option value="3">Regular</option>
                  </select>
                  <label>PayType</label>
                </div>
                <div class="input-field col s2" id="select">
                  <select>
                    <option value="" disabled selected>Lumpsum</option>
                    <option value="1">Lumpsum</option>
                    <option value="2">Lumpsum</option>
                    <option value="3">Lumpsum</option>
                  </select>
                  <label>Payout</label>
                </div>
                <div class="file-field input-field col s2">
                  <div class=""> <span></span>
                    <input type="file" multiple />
            </div>
                    <div class="file-path-wrapper">
                      <input class="file-path validate" type="text" value="Edit user" />
                        <i class="material-icons prefix edit">mode_edit</i> <i class="material-icons prefix account">account_circle</i>
                        <label>Edit user</label>
            </div>
                    </div>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit <i class="material-icons right">send</i> </button>
        </form>
                  <div class="col s12">
                    <nav>
                      <div class="nav-wrapper">
                        <ul id="nav-mobile" class="left hide-on-med-and-down">
                          <li><a href="">sass</a></li>
                          <li><a href="">sass</a></li>
                          <li><a href="">sass</a></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
            <div className="search-query">
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
            </div>
    </div>
            </div>
</section>
    )
  }
}
