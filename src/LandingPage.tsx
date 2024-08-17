import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Styles/LandingPage.css';
import redRockImage from './assests/redrock.png'; 
import greyPlanetImage from './assests/greyplanet.png'; 
import redPlanetImage from './assests/red.png'; 
import bluePlanetImage from './assests/blueplanet.png'; 
import orangePlanetImage from './assests/orange.png'; 
import pinkPlanetImage from './assests/pinkplanet.png';

const LandingPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const rotation = Math.min(scrollY * 0.1, 10);
  const redRockRotation = -scrollY * 0.1;
  const bluePlanetMove = scrollY * 0.2;
  const greyPlanetMove = -scrollY * 0.6;
  const pinkPlanetMove = -scrollY * 0.4;
  const pinkPlanetRotation = -rotation;

  return (
    <div className="landing-page">
      <motion.img
        src={bluePlanetImage}
        alt="Blue Planet"
        className="fixed-blue-planet"
        style={{ y: bluePlanetMove }}  
      />

      <motion.img
        src={orangePlanetImage}
        alt="Orange Planet"
        className="fixed-orange-planet"
        style={{
          rotate: scrollY * 0.05,
        }}
        transition={{ ease: 'linear' }} 
      />

      <motion.img
        src={pinkPlanetImage}
        alt="Pink Planet"
        className="fixed-pink-planet"
        style={{
          rotate: pinkPlanetRotation,
          y: pinkPlanetMove,
          transform: `rotate(-30deg)`,
        }}
        transition={{ ease: 'linear' }}
      />

      <div className="left-side-images">
        <motion.img 
          src={redRockImage} 
          alt="Redrock" 
          className="left-image redrock"
          style={{ rotate: redRockRotation }}  
        />

        <motion.img
          src={greyPlanetImage}
          alt="Grey Planet"
          className="left-image grey-planet"
          style={{ y: greyPlanetMove }}  
        />

        <motion.img
          src={redPlanetImage}
          alt="Red Planet"
          className="left-image red-planet"
          style={{ y: -scrollY * 0.5 }} 
          animate={{ rotate: rotation }} 
          transition={{ ease: 'linear' }}
        />
      </div>

      <h1 className="header-2 text-color-white"><p>Where NFT communities</p><p>come to vibe</p></h1>
    </div>
  );
};

export default LandingPage;


