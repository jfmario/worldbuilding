
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';

import LoginStatus from './components/LoginStatus';
import NameGenMenu from './components/NameGenMenu';

class Main extends Component {
  render() {
    return(
      <div className="container">

        <br />
        <br />

        <div className="row">
          <div className="col-sm-3">
            <LoginStatus />
            <NameGenMenu />
          </div>
          <div className="col-sm-9">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
