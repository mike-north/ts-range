# Type-Int

TypeScript utility types for working with integer ranges from 0-100.

```ts
import { Gt, Lt, Gte, Lte, Not } from 'typeint';

const x: Lte<4>; // 4 | 3 | 2 | 1 | 0

const y: Gt<7> & Lte<12>; // 8 | 9 | 10 | 11 | 12

const z: Gte<1> & Lt<5> & Not<3>; // 1 | 2 | 4

```

---
(c) LinkedIn 2018
