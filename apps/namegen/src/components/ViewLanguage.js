
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NameGenService from '../lib/NameGenService';

class ViewLanguage extends Component {

  constructor(props) {

    super(props);

    this.getNames = this.getNames.bind(this);
    this.state = {
      languageId: props.match.params.languageId,
      language: null,
      languageName: '',
      languageDesc: '',
      maleNames: [],
      femaleNames: [],
      surnames: [],
      cityNames: [],
      provinceNames: []
    };
  }

  async componentDidMount() {
    var langData = await NameGenService.getLanguageInfo(this.state.languageId);
    this.setState({
      language: langData,
      languageName: langData.name,
      languageDesc: langData.description
    });
    this.getNames();
  }
  async componentWillReceiveProps(props) {
    if (props.match.params.languageId != this.state.languageId) {

      var languageId = props.match.params.languageId;
      var langData = await NameGenService.getLanguageInfo(languageId);

      this.setState({
        languageId: languageId,
        language: langData,
        languageName: langData.name,
        languageDesc: langData.description,
        maleNames: [],
        femaleNames: [],
        surnames: [],
        cityNames: [],
        provinceNames: []
      });
      this.getNames();
    }
  }

  async getNames() {

    this.setState({
      maleNames: [],
      femaleNames: [],
      surnames: [],
      cityNames: [],
      provinceNames: []
    });

    let results = await Promise.all([
      NameGenService.getNames('maleName', this.state.languageId),
      NameGenService.getNames('femaleName', this.state.languageId),
      NameGenService.getNames('surname', this.state.languageId),
      NameGenService.getNames('cityName', this.state.languageId),
      NameGenService.getNames('provinceName', this.state.languageId),
    ]);
    this.setState({
      maleNames: results[0],
      femaleNames: results[1],
      surnames: results[2],
      cityNames: results[3],
      provinceNames: results[4]
    });
  }

  render() {
    return (
      <div>

        <h2 className="display">{this.state.languageName}</h2>

        <div>
          {this.state.language && (!this.state.language.isPublic) &&
            <div>
              <Link className="btn btn-info" to={`/language/edit/${this.state.languageId}`}>Edit</Link>
              <Link className="btn btn-danger" to={`/language/delete/${this.state.languageId}`}>Delete</Link>
            </div>
          }
        </div>

        <p className="lead">{this.state.languageDesc}</p>

        <h4>Names</h4>

        <br />

        <p><button className="btn btn-success" onClick={this.getNames}>Re-roll</button></p>

        <div className="row">
          <div className="col-md-4">

            <h5>Male Full Names</h5>

            <ul className="list-group">
              {this.state.maleNames.slice(0,5).map((name, i) =>
                <li className="list-group-item">{name} {this.state.surnames[i]}</li>
              )}
            </ul>
          </div>
          <div className="col-md-4">

            <h5>Female Full Names</h5>

            <ul className="list-group">
              {this.state.femaleNames.slice(0,5).map((name, i) =>
                <li className="list-group-item">{name} {this.state.surnames[i + 5]}</li>
              )}
            </ul>
          </div>
          <div className="col-md-4">

            <h5>City, Province Names</h5>

            <ul className="list-group">
              {this.state.cityNames.slice(0,5).map((name, i) =>
                <li className="list-group-item">{name}, {this.state.provinceNames[i]}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewLanguage;
