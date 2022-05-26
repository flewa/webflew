import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import RedirectLink from './pages/RedirectLink';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/discord' element={<RedirectLink url="https://discord.gg/w5ZuHPg3zz"/>}/>
        <Route path='/youtube' element={<RedirectLink url="https://www.youtube.com/channel/UCfYRalY6WJqRtpzQl3O1TWg/videos"/>}/>
        <Route path='/github' element={<RedirectLink url="https://github.com/flewa"/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;