
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return(
      <div>
        <h1 className="display">Name Generator</h1>

        <p>
          This is a name generator for fantasy languages.
          Select a language from the left.
          If you are logged in, you will also be able to create
          your own languages.
        </p>
      </div>
    )
  }
}

export default Home;
