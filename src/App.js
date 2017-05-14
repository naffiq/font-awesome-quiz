import React, { Component } from 'react';
import {Button, Col} from 'react-bootstrap';

import GuessForm from './components/GuessForm';
import GameStats from './components/GameStats';
import Icon from './components/Icon';

import iconRandomizer from './utils/IconRandomizer';
import iconChecker from './utils/IconChecker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: iconRandomizer(),
      guessedCorrect: 0,
      guessedWrong: 0,
      lastGuess: undefined
    };
  }

  handleGuess = (guessedName) => {
    const {icon} =  this.state;

    if (iconChecker(guessedName, icon)) {
      this.increaseCorrect();
    } else {
      this.increaseWrong();
    }
  };

  randomizeIcon = () => {
    this.setState({
      lastGuess: undefined, icon: iconRandomizer()
    });
  };

  increaseCorrect = () => {
    this.setState(prevState => {
      return {guessedCorrect: prevState.guessedCorrect + 1, lastGuess: 'correct'};
    });
  };

  increaseWrong = () => {
    this.setState(prevState => {
      return {guessedWrong: prevState.guessedWrong + 1, lastGuess: 'wrong'};
    });
  };

  render() {
    const {icon, guessedCorrect, guessedWrong, lastGuess} = this.state;

    const renderForm = () => {
      if (lastGuess === undefined) {
        return <GuessForm onGuess={this.handleGuess}/>;
      }

      return (
        <div className="last-guess">
          <div className={`alert alert-${lastGuess === 'correct' ? 'success' : 'danger'}`}>
            You guessed {lastGuess}!
          </div>

          <Button onClick={this.randomizeIcon} block>Next icon</Button>
        </div>

      );
    };

    return (
      <div className="App">
        <div className="game-container">
          <div className="container">
            <div className="row">
              <Col md={7}>
                <div className="game-title">
                  <h1><i className="fa fa-flag" /> Font Awesome Quiz</h1>
                  <h4 className="sub-header">Check your icons' classes knowledge</h4>
                </div>
                <GameStats { ...{guessedCorrect, guessedWrong} } />
              </Col>
              <Col md={4}>
                  <Icon {...{icon, lastGuess}} />
                  { renderForm() }
              </Col>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="Footer">
            Created by <a href="https://naffiq.com" target="_blank" ref="nofollow">
              naffiq
            </a>. Powered by React.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
