
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NameGenService from '../lib/NameGenService';

class DeleteLanguage extends Component {

  constructor(props) {

    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      languageId: props.match.params.languageId,
      languageName: ''
    };
  }

  async componentDidMount() {
    var language = await NameGenService.getLanguage(this.state.languageId);
    this.setState({
      languageName: language.name
    });
  }
  async componentWillReceiveProps(props) {
    if (props.match.params.languageId != this.state.languageId) {

      this.setState({ languageName: '' });

      var languageId = props.match.params.languageId;
      var language = await NameGenService.getLanguage(languageId);

      this.setState({
        languageId: languageId,
        languageName: language.name
      });
    }
  }

  async handleDelete() {
    await NameGenService.deleteLanguage(this.state.languageId);
    window.location.hash = `#/`;
  }

  render() {
    return(
      <div>

        <h2 className="display">Delete {this.state.languageName}?</h2>

        <button className="btn btn-danger" onClick={this.handleDelete}>Yes, Delete</button>
        <Link className="btn btn-warning" to={`/language/view/${this.state.languageId}`}>Cancel</Link>
      </div>
    )
  }
}

export default DeleteLanguage;
