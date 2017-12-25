
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NameGenService from '../lib/NameGenService';

class EditLanguage extends Component {

  constructor(props) {

    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleMaleNameChange = this.handleMaleNameChange.bind(this);
    this.handleFemaleNameChange = this.handleFemaleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleCityNameChange = this.handleCityNameChange.bind(this);
    this.handleProvinceNameChange = this.handleProvinceNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      languageId: props.match.params.languageId,
      language: null
    };
  }

  async componentDidMount() {
    var language = await NameGenService.getLanguage(this.state.languageId);
    this.setState({
      language: language,
      name: language.name,
      description: language.description,
      maleName: language.seeds.maleName.split(',').join('\n'),
      femaleName: language.seeds.femaleName.split(',').join('\n'),
      surname: language.seeds.surname.split(',').join('\n'),
      cityName: language.seeds.cityName.split(',').join('\n'),
      provinceName: language.seeds.provinceName.split(',').join('\n')
    });
  }
  async componentWillReceiveProps(props) {
    if (props.match.params.languageId != this.state.languageId) {

      this.setState({ language: null });

      var languageId = props.match.params.languageId;
      var language = await NameGenService.getLanguage(languageId);

      this.setState({
       languageId: languageId,
       language: language,
       name: language.name,
       description: language.description,
       maleName: language.seeds.maleName.split(',').join('\n'),
       femaleName: language.seeds.femaleName.split(',').join('\n'),
       surname: language.seeds.surname.split(',').join('\n'),
       cityName: language.seeds.cityName.split(',').join('\n'),
       provinceName: language.seeds.provinceName.split(',').join('\n')
      });
    }
  }

  async handleNameChange(v) {
    this.setState({ name: v.target.value })
  }
  async handleDescriptionChange(v) {
    this.setState({ description: v.target.value });
  }
  async handleMaleNameChange(v) {
    this.setState({ maleName: v.target.value });
  }
  async handleFemaleNameChange(v) {
    this.setState({ femaleName: v.target.value });
  }
  async handleSurnameChange(v) {
    this.setState({ surname: v.target.value });
  }
  async handleCityNameChange(v) {
    this.setState({ cityName: v.target.value });
  }
  async handleProvinceNameChange(v) {
    this.setState({ provinceName: v.target.value });
  }

  async handleSubmit(e) {

    e.preventDefault();

    await NameGenService.editLanguage(this.state.languageId, {
      name: this.state.name,
      description: this.state.description,
      maleName: this.state.maleName.split('\n'),
      femaleName: this.state.femaleName.split('\n'),
      surname: this.state.surname.split('\n'),
      cityName: this.state.cityName.split('\n'),
      provinceName: this.state.provinceName.split('\n')
    });
    window.location.hash = `#/language/view/${this.state.languageId}`;
  }

  render() {
    return(
      <div>
        {this.state.language &&

          <div>

            <h2 className="display">{this.state.language.name}</h2>

            <p>
              Edit your language here. Once done, click the save button
              at the bottom.
            </p>

            <form className="form" onSubmit={this.handleSubmit}>

              <div className="form-group">

                <fieldset>

                  <label className="control-label">Name</label>

                  <input className="form-control" onChange={this.handleNameChange} value={this.state.name} />
                </fieldset>
                <fieldset>

                  <label className="control-label">Description</label>

                  <textarea className="form-control" onChange={this.handleDescriptionChange} value={this.state.description} />
                </fieldset>

                <br />

                <p>
                  For the following inputs, write or paste in a set of source
                  names.
                  There should be one name per line, and it is recommended to
                  have 40-200 source names for each category.
                </p>

                <fieldset>

                  <label className="control-label">Male Name Seed</label>

                  <textarea className="form-control" rows="20" onChange={this.handleMaleNameChange} value={this.state.maleName} />
                </fieldset>
                <fieldset>

                  <label className="control-label">Female Name Seed</label>

                  <textarea className="form-control" rows="20" onChange={this.handleFemaleNameChange} value={this.state.femaleName} />
                </fieldset>
                <fieldset>

                  <label className="control-label">Last Name Seed</label>

                  <textarea className="form-control" rows="20" onChange={this.handleSurnameChange} value={this.state.surname} />
                </fieldset>
                <fieldset>

                  <label className="control-label">City Name Seed</label>

                  <textarea className="form-control" rows="20" onChange={this.handleCityNameChange} value={this.state.cityName} />
                </fieldset>
                <fieldset>

                  <label className="control-label">Province Name Seed</label>

                  <textarea className="form-control" rows="20" onChange={this.handleProvinceNameChange} value={this.state.provinceName} />
                </fieldset>
              </div>

              <button className="btn btn-primary" type="submit">Save</button>
              <Link className="btn btn-warning" to="/">Cancel</Link>
            </form>
          </div>
        }
      </div>
    );
  }
}

export default EditLanguage;
