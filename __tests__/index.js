test('Library interface test', () => {
  expect(require('../src')).toMatchSnapshot();
});
