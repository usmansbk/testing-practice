const stringLength = require("./stringLength");

test('returns the character count of any string', () => {
    expect(stringLength('Hello World!')).toBe(12);
});