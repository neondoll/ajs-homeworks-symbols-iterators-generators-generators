import canIterate from '../canIterate';

test.each([
  ['new Map()', new Map(), true],
  ['new Set()', new Set(), true],
  ['null', null, false],
  ['10', 10, false],
  ['"Netology"', 'Netology', true],
])('Testing the canIterate function with attribute %s', (_, attribute, expected) => {
  const result = canIterate(attribute);

  expect(result).toBe(expected);
});
