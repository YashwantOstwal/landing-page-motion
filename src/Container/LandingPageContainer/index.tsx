import React, { useEffect, useState } from 'react';

import '../../Styles/LandingPage.css';
import PlanetView from '../../View/PlanetView';

const LandingPageContainer: React.FC = () => {
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

  return (
    <div className="landing-page">
      <PlanetView scrollY={scrollY} />
      <h1 className="header-2 text-color-white">
        <p>Where NFT communities</p>
        <p>come to vibe</p>
      </h1>
    </div>
  );
};

export default LandingPageContainer;
