
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import DeleteLanguage from './components/DeleteLanguage';
import EditLanguage from './components/EditLanguage';
import ViewLanguage from './components/ViewLanguage';

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
              <Route exact path="/language/view/:languageId" component={ViewLanguage} />
              <Route exact path="/language/edit/:languageId" component={EditLanguage} />
              <Route exact path="/language/delete/:languageId" component={DeleteLanguage} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
