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
     <Footer></Footer>
    </div>
  );
}

export default App;
