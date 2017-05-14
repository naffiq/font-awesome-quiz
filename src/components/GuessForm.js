import React, {Component} from 'react';
import {FormControl, InputGroup, Form, FormGroup, Button} from 'react-bootstrap';

export default class GuessForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guessedName: ''
    };
  }

  handleGuess = (e) => {
    e.preventDefault();
    const {onGuess} = this.props;
    const {guessedName} = this.state;

    if (guessedName.length > 0) {
      onGuess(guessedName);
    }
  };

  handleChange = (event) => {
    this.setState({guessedName: event.target.value});
  }

  render() {
    return (
      <Form className="" onSubmit={this.handleGuess}>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              onChange={this.handleChange}
              value={this.state.value}
              placeholder="Enter your version"
            />
            <InputGroup.Button>
              <Button type="submit" bsStyle="primary">Guess</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}
