# TS-Range

[![Build Status](https://travis-ci.org/mike-north/ts-range.svg?branch=master)](https://travis-ci.org/mike-north/ts-range)
[![Version](https://img.shields.io/npm/v/:package.svg)](http://npmjs.com/package/ts-range)

TypeScript utility types for working with integer ranges from 0-100.

```ts
import { Gt, Lt, Gte, Lte, Not } from 'ts-range';

const x: Lte<4>; // 4 | 3 | 2 | 1 | 0

const y: Gt<7> & Lte<12>; // 8 | 9 | 10 | 11 | 12

const z: Gte<1> & Lt<5> & Not<3>; // 1 | 2 | 4

```

---
(c) 2018 LinkedIn
