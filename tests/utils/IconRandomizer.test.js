import IconRandomizer, {aliasedIcons} from './../../src/utils/IconRandomizer';
import iconsData from './../../src/resources/FontAwesome.json';

describe('IconRandomizer', () => {
  it('Should return key from "FontAwesome.json"', () => {
    const iconName = IconRandomizer();

    expect(iconName).toBeDefined();
    expect(iconName.id).toBeDefined();
  });

  it('Should return aliased icons only', () => {
    let iconName = aliasedIcons();
    expect(iconName).toBeDefined();
    expect(iconName.id).toBeDefined();
    expect(iconName.aliases).toBeDefined();
  });
});
