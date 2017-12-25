
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CarolinaAuth from '../../../auth/src/react/lib/CarolinaAuth';
import NameGenService from '../lib/NameGenService';

class NameGenMenu extends Component {

  constructor(props) {

    super(props);

    this.createNewLanguage = this.createNewLanguage.bind(this);
    this.state = {
      isLoggedIn: false,
      languages: [],
      privateLangs: []
    };
  }

  async componentDidMount() {

    var loginStatus = await CarolinaAuth.authCheck();
    this.setState({
      isLoggedIn: loginStatus,
      username: CarolinaAuth.currentUser
    });

    if (loginStatus) {
      var privateLangs = await NameGenService.getPrivateLangs();
      this.setState({ privateLangs: privateLangs });
    }

    var languages = await NameGenService.getPublicLangs();
    this.setState({ languages: languages });
  }

  async createNewLanguage(e) {

    e.preventDefault();

    var newLanguageId = await NameGenService.createLanguage();
    window.location.hash = `#/language/edit/${newLanguageId}`;
  }

  render() {
    return (
      <div className="bg-primary card text-white mb-3">
        <div className="card-body">

          {this.state.isLoggedIn &&
            <div>
              <h4 className="card-title text-white">My Languages</h4>

              <ul>

                {this.state.privateLangs.map((lang) =>
                  <li>
                    <Link className="text-white" to={'/language/view/' + lang._id}>{lang.name}</Link>
                  </li>
                )}

                <li><a className="text-white" href="#" onClick={this.createNewLanguage}>CREATE NEW!</a></li>
              </ul>
            </div>
          }

          <h4 className="card-title text-white">Public Languages</h4>

          <ul>
            {this.state.languages.map((lang, i) =>
              <li>
                <Link className="text-white" to={'/language/view/' + lang._id}>{lang.name}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default NameGenMenu;
