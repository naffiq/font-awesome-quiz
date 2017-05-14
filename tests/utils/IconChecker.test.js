import IconRandomizer, {randomEntry, aliasedIcons} from './../../src/utils/IconRandomizer';
import IconChecker from './../../src/utils/IconChecker';

describe('IconChecker', () => {
  it('should match same icon', () => {
    const icon = IconRandomizer();
    expect(IconChecker(icon.id, icon)).toBeTruthy();
  });

  it('should not match other icon', () => {
    const icon = {id: 'trash'};
    expect(IconChecker('pencil', icon)).toBeFalsy();
  })

  it('should recognize aliases', () => {
    const icon = aliasedIcons();
    expect(IconChecker(icon.aliases[0], icon)).toBeTruthy();
  });
});
