import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="container">
          <div class="footer-right">
            <ul>
              <li>
                <a href="#">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-google-plus-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-left">
            <p>Copyright © 2018 Yoloj. All right Reserved</p>
          </div>
        </div>
      </footer>
    );
  }
}
