import React, { Fragment } from 'react';
import './App.css'
import HomePage from './components/homepage';
import LayOut from './components/grid'
import Trig from './components/trig';
const App = () => {
  return (
    <Fragment>
      <LayOut />
      <HomePage />
      <Trig />
    </Fragment>

  );
}

export default App;

