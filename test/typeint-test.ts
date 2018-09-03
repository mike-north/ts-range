import { Gt, Gte, Lt, Lte, Not } from 'typeint';

QUnit.module('typeint tests');

QUnit.test('hello', assert => {
  assert.ok(true);
  // These should all be ok
  let x: Gt<10> & Lt<13> = 11;
  x = 12;
  let y: Gte<10> & Lte<12> & Not<11> = 12;
  y = 10;
  // tslint:disable-next-line:no-console
  console.log([x, y]);
  // // These should all fail
  // let nx: Gt<10> & Lte<12> = 14;
  // let ny: Gt<10> & Lt<11> = 11;
  // let nz: Gt<10> & Lte<12> & Not<11> = 11;
  // // tslint:disable-next-line:no-console
  // console.log([nx, ny]);
});
