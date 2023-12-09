import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';

const App = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route exact path={route.path} render={route.component} />
      ))}
    </Routes>
  );
};

export default App;
