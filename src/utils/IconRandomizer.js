// Taken from https://gist.github.com/RobinMalfait/b2632576462910a4cd67
// Huge thanks !
import {icons} from './../resources/FontAwesome.json';

export const randomEntry = (data) => {
  return data[Math.floor(Math.random() * data.length)];

};

export const aliasedIcons = () => {
  const resultData = [];
  for (let iconKey in icons) {
    if (icons[iconKey]['aliases']) {
      resultData.push(icons[iconKey]);
    }
  }

  return randomEntry(resultData);
}

export default () => {
  return randomEntry(icons);
}
