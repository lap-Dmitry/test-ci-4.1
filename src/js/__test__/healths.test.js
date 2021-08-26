import getHealth from '../health';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 3 }, 'critical'],
  [{ name: 'Маг', health: 25 }, 'wounded'],
])('%0', (status, expected) => {
  const result = getHealth(status);
  expect(result).toBe(expected);
});
