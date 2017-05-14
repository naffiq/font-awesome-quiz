import React from 'react';

export default ({icon, lastGuess}) => {
  const renderAliases = () => {
    if (lastGuess !== undefined && icon.aliases) {
      return icon.aliases.map(alias => <h4 key={alias}>fa fa-{ alias }</h4>);
    }
  }

  return (
    <div className="icon">
      <h1><i className={`fa fa-${icon.id}`}/></h1>
      <h4>fa fa-{ lastGuess === undefined ? '"?"' : icon.id }</h4>
      { renderAliases() }
    </div>
  );
}
