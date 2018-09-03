export interface MinusOneMap {
  0: never;
  1: 0;
  2: 1;
  3: 2;
  4: 3;
  5: 4;
  6: 5;
  7: 6;
  8: 7;
  9: 8;
  10: 9;
  11: 10;
  12: 11;
  13: 12;
  14: 13;
}

export type Num = keyof MinusOneMap;

export type MinusOne<X extends Num> = MinusOneMap[X];

export type PlusOne<V> = {
  [K in keyof MinusOneMap]: V extends MinusOneMap[K] ? K : never;
}[keyof MinusOneMap];

export interface GtMap {
    0: Exclude<Num, 0>;
  1: Exclude<GtMap[0], 1>;
  2: Exclude<GtMap[1], 2>;
  3: Exclude<GtMap[2], 3>;
  4: Exclude<GtMap[3], 4>;
  5: Exclude<GtMap[4], 5>;
  6: Exclude<GtMap[5], 6>;
  7: Exclude<GtMap[6], 7>;
  8: Exclude<GtMap[7], 8>;
  9: Exclude<GtMap[8], 9>;
  10: Exclude<GtMap[9], 10>;
  11: Exclude<GtMap[10], 11>;
  12: Exclude<GtMap[11], 12>;
  13: Exclude<GtMap[12], 13>;
  14: Exclude<GtMap[13], 14>;
}
