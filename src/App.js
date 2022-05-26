import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discord" component={() => { 
            window.location.href = 'https://example.com/1234'; 
            return null;
        }} />
        <Route path="/youtube" component={() => { 
            window.location.href = 'https://example.com/1234'; 
            return null;
        }} />
        <Route path="/github" component={() => { 
            window.location.href = 'https://github.com/flewa'; 
            return null;
        }} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;