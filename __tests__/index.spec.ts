import fn from '../src';

describe('api.basic', () => {
  test('list should be filtered', () => {
    const props = { l: true, x: true, y: true, children: [], rel: true };
    const list = ['rel', 'x', 'y'];
    expect(fn(props, list)).toEqual({
      children: []
    });
  });
});
