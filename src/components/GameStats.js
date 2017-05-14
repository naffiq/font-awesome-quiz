import React from 'react';
import {Label} from 'react-bootstrap';

export default ({guessedCorrect, guessedWrong}) => (
  <div className="Game-stats pull-xs-right">
    <h3>
      Your stats so far: <Label bsStyle="success">
        <i className="fa fa-check" /> {guessedCorrect}
      </Label> <Label bsStyle="danger">
        <i className="fa fa-ban" /> {guessedWrong}
      </Label>
    </h3>
  </div>
);
