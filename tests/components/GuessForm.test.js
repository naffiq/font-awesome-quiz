import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

import GuessForm from './../../src/components/GuessForm';

describe('Icon guess form', () => {
  it('should not call prop callback without value entered', () => {
    const f = jest.fn();

    const component = renderer.create(
      <GuessForm onGuess={f}/>
    );

    let tree = component.toJSON();

    tree.props.onSubmit({preventDefault: f => f});
    expect(f).not.toHaveBeenCalled();
  });

  it('should call prop callback ', () => {
    const f = jest.fn();
    const iconComponent = ReactTestUtils.renderIntoDocument(
      <GuessForm onGuess={f}/>
    );

    const guessInput = ReactTestUtils.findRenderedDOMComponentWithTag(iconComponent, 'input');
    const form = ReactTestUtils.findRenderedDOMComponentWithTag(iconComponent, 'form');

    expect(guessInput).toBeDefined();
    expect(form).toBeDefined();
    ReactTestUtils.Simulate.change(guessInput, {target: {value: 'trash'}});
    ReactTestUtils.Simulate.submit(form);

    expect(f).toHaveBeenCalledWith('trash');
  });
});
