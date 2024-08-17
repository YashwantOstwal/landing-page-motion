// src/App.tsx
import React from 'react';

import NavBar from './component/shared/Header';
import LandingPage from './Page/LandingPage';





const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <main>
        {/* Your main content goes here */}
      </main>
    </div>
  );
};

export default App;

