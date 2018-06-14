import reverseNumber from './reverseNumber';

describe('utils/reverseNumber', () => {
  it('should mirror number', () => {
    const mirroredNumber = reverseNumber('123');
    expect(mirroredNumber).toBe('987');
  });

  it("doesn't crash when passed a number", () => {
    const mirroredNumber = reverseNumber(123);
    expect(mirroredNumber).toBe('987');
  });

  it('works with negative numbers properly', () => {
    const mirroredNumber = reverseNumber(-123);
    expect(mirroredNumber).toBe('-987');
  });
});
