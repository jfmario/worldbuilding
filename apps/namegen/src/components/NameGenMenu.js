
import React, { Component } from 'react';

import CarolinaAuth from '../../../auth/src/react/lib/CarolinaAuth';
import NameGenService from '../lib/NameGenService';

class NameGenMenu extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isLoggedIn: false,
      languages: []
    };
  }

  async componentDidMount() {

    var loginStatus = await CarolinaAuth.authCheck();
    this.setState({
      isLoggedIn: loginStatus,
      username: CarolinaAuth.currentUser
    });

    var languages = await NameGenService.getPublicLangs();
    this.setState({ languages: languages });
  }

  render() {
    return (
      <div className="bg-primary card text-white mb-3">
        <div className="card-body">

          <h4 className="text-white">Public Languages</h4>

          <ul>
            {this.state.languages.map((lang, i) =>
              <li>{lang.name}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default NameGenMenu;
