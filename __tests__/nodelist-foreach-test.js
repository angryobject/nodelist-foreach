beforeEach(() => {
  jest.resetModules();
});

test('add polyfill function if NodeList doesn\'t have forEach', () => {
  global.NodeList = { prototype: {} };

  require('../nodelist-foreach');

  expect(global.NodeList.prototype.forEach).toBeDefined();
  expect(typeof global.NodeList.prototype.forEach).toBe('function');
});

test('polyfill function without second argument', () => {
  global.NodeList = { prototype: {} };

  require('../nodelist-foreach');

  const forEach = global.NodeList.prototype.forEach;
  const arr = [1,2,3,4];
  const cb = jest.fn();

  forEach.call(arr, cb);

  expect(cb.mock.calls.length).toBe(arr.length);
  cb.mock.instances.forEach(i => {
    expect(i).toBeUndefined();
  });
});

test('polyfill function with second argument', () => {
  global.NodeList = { prototype: {} };

  require('../nodelist-foreach');

  const forEach = global.NodeList.prototype.forEach;
  const arr = [1,2,3,4];
  const cb = jest.fn();
  const thisArg = {};

  forEach.call(arr, cb, thisArg);

  expect(cb.mock.calls.length).toBe(arr.length);
  cb.mock.instances.forEach(i => {
    expect(i).toBe(thisArg);
  });
});

test('return if NodeList has forEach', () => {
  const forEach = jest.fn();
  global.NodeList = { prototype: { forEach } };

  require('../nodelist-foreach');

  expect(global.NodeList.prototype.forEach).toBe(forEach);
});
