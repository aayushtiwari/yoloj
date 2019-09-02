import React from 'react';
import './css/materialize.min.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/owlcarousel.css';
import './css/style.css';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';
import PopularSearches from './components/PopularSearches';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Cards></Cards>
      <PopularSearches></PopularSearches>
      <PopularSearches></PopularSearches>
      <ul class="fixed-link">
        <li>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
      <Footer></Footer>
    </div>
  );
}

export default App;
