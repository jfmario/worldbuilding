
import React, { Component } from 'react';

import CarolinaAuth from '../../../auth/src/react/lib/CarolinaAuth';

class LoginStatus extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isLoggedIn: false,
      username: null
    };
  }

  async componentDidMount() {

    var loginStatus = await CarolinaAuth.authCheck();
    this.setState({
      isLoggedIn: loginStatus,
      username: CarolinaAuth.currentUser
    });

    // drop next into localStorage
    if (!loginStatus) {
      window.localStorage.setItem('carolinaNext', '/namegen');
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return(
        <div className="bg-info card text-white mb-3">
          <div className="card-body">
            <p>
              You are logged in as <b>{this.state.username}</b>.
            </p>
          </div>
        </div>
      )
    }
    else {
      return(
        <div className="bg-danger card text-white mb-3">
          <div className="card-body">

            <p>
              You are not logged in.
            </p>

            <a className="btn btn-primary" href="/auth">Log In</a>
          </div>
        </div>
      )
    }
  }
}

export default LoginStatus;
