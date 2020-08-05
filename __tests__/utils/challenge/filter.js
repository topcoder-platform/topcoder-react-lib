import {
  setText, setTags, setTypes, setStartDate,
} from '../../../src/utils/challenge/filter';

describe('challenge filter', () => {
  let res;
  test('setText', () => {
    res = setText({}, '');
    expect(res).toEqual({});
    res = setText({}, 'text');
    expect(res).toEqual({ text: 'text' });
    res = setText({ text: 'text' });
    expect(res).toEqual({});
  });

  test('setTags', () => {
    res = setTags({});
    expect(res).toEqual({});
    res = setTags({}, 'tags');
    expect(res).toEqual({ tags: 'tags' });
    res = setTags({ tags: 'tags' });
    expect(res).toEqual({});
  });

  test('setTypes', () => {
    res = setTypes({});
    expect(res).toEqual({});
    res = setTypes({}, 'types');
    expect(res).toEqual({ types: 'types' });
    res = setTypes({ types: 'types' });
    expect(res).toEqual({});
  });

  test('setStartDate', () => {
    res = setStartDate({});
    expect(res).toEqual({});
    res = setStartDate({}, 'startDate');
    expect(res).toEqual({ startDate: 'startDate' });
    res = setStartDate({ startDate: 'startDate' });
    expect(res).toEqual({});
  });
});
