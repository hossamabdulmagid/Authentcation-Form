import React, { Fragment } from 'react';
import './App.css'
import HomePage from './components/homepage';
import LayOut from './components/Grid'
const App = () => {
  return (
    <Fragment>
      <LayOut />
      <HomePage />
    </Fragment>

  );
}

export default App;

