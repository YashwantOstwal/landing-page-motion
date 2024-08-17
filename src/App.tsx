// src/App.tsx
import React from 'react';
import LandingPage from './LandingPage';
import NavBar from './component/shared/Header';




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

