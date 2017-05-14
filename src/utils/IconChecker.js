export default (guessedIcon, originalIcon) => {
  if (guessedIcon === originalIcon.id || (originalIcon.aliases && originalIcon.aliases.includes(guessedIcon))) {
    return true;
  }

  return false;
};
