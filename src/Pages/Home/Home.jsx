import React from 'react';
import "./Home.scss";
import heroVideo from "./files/world-1992.mp4";
import Navbar from '../../components/navbar/navbar';
const hero=1;

const Home = () => {
  return (
    <div className='header'>
        <video autoPlay loop muted playsInline className='main-video'>
            <source src={hero} type='video/mp4' />
        </video>
    <div className="navcontainer">
    <div className="logo">
        <a href="#">
        <ion-icon name="logo-stackoverflow" className="l"></ion-icon>
        </a>
    </div>
      <Navbar />
      </div>
      <div>
      <h1 className="introtext">Creative Technological Solutions</h1>
      <br />
      <h3 className="introdes">We see what others don't | We deliver what others won't.</h3>
      <br />
      <button className="talk"><h1>Let's Talk</h1></button>
      </div>
    </div>
  )
}

export default Home;
