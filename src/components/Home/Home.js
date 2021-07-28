import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';
import './Home.css';

const Home = () => {
    return (
  <div>
        <Header/>
        <Shop></Shop>
       
        <About></About>
        <Footer></Footer>
        </div>
    );
};

export default Home;