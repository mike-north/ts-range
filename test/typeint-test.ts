import hello from 'typeint';

QUnit.module('typeint tests');

QUnit.test('hello', assert => {
  assert.equal(hello(), 'Hello from typeint');
});
