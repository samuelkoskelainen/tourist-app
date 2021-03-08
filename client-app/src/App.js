import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Mainpage from './components/Mainpage/Mainpage';

const App = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Mainpage} />
    </Fragment>
  );
};

export default App;
