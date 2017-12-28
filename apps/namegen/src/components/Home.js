
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return(
      <div>

        <h1 className="display">Name Generator</h1>

        <p>
          This is a name generator for fantasy languages.
          Select a public language from the left.
          If you are logged in, you will also be able to create
          your own languages by providing a list of sample names which will
          be used to inform the creation of other names based on your input.
        </p>

        <h2>How It Works</h2>

        <p>
          The computer generates names based on studying
          example material using
          a <a href="https://en.wikipedia.org/wiki/Markov_chain" target="_blank">Markov Chain</a> algorithm.
        </p>

        <h2>How To Use</h2>

        <p>
          You should log in and then create your own languages.
          When you create one, you will be prompted to provide several lists
          of names. The names you provide will form a basis for the
          generation of more names. Once you have saved a language, you
          can click on its name on the left side menu (if you saved it and
          it does not appear, please refresh the page).
        </p>
        <p>
          Once you are viewing your language, you will see sample names
          which you can re-roll at any time.
        </p>
        <p>
          For best results, please supply at least 50 names (preferably 100).
          Your names should cover all the common letter combinations in your
          language and the frequency of the letter combinations is also
          worth paying attention to.
        </p>
        <p>
          If your language does not have different names for males and females,
          or if male and female names have the same forms and letter combination
          frequency, simply supply the same list for both genders.
        </p>
      </div>
    )
  }
}

export default Home;
