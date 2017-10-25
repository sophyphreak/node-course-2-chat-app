const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    const nonStringVal = 123;
    expect(isRealString(nonStringVal)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    const onlySpaces = '   ';
    expect(isRealString(onlySpaces)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    const nonSpaceChars = 'asdf';
    expect(isRealString(nonSpaceChars)).toBe(true);
  });
});
