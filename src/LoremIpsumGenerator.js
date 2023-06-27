import React, { Component } from "react";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

export default class LoremIpsumGenerator extends Component {
  state = {
    words: 0,
    sentence: ""
  };

  changeHandle = e => {
    const words = e.target.value;
    const updatedState = {
      words: words
    };
    this.setState({
      ...updatedState
    });
  };

  submitHandle = e => {
    const number = Number(this.state.words);
    this.setState({
      sentence: lorem.generateWords(number)
    });
    e.preventDefault();
  };

  render() {
    return (
      <div className="Lorem">
        <h2>Generateur de mots</h2>
        <form onSubmit={this.submitHandle}>
          <label>
            <p>Combien de mots avez vous besoin ?</p>
            <input
              type="text"
              value={this.state.words}
              onChange={this.changeHandle}
            />
          </label>
          <input className="input-word" type="submit" value="Generer" />
        </form>
        <p className="sortie">{this.state.sentence}</p>
      </div>
      
    );
  }
}
