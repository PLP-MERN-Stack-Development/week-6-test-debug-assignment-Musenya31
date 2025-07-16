const validateBug = require('../helpers/validateBug');

describe('validateBug', () => {
  it('returns false if title or description is missing', () => {
    expect(validateBug({ title: '', description: 'desc' })).toBe(false);
    expect(validateBug({ title: 'Bug', description: '' })).toBe(false);
  });
  it('returns false if title is too short', () => {
    expect(validateBug({ title: 'ab', description: 'desc' })).toBe(false);
  });
  it('returns true for valid input', () => {
    expect(validateBug({ title: 'Bug', description: 'desc' })).toBe(true);
  });
}); 