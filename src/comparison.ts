import { GtMap, MinusOne, Num } from './-private/maps';

export type GtImpl<X extends Num, R extends Num> = MinusOne<R> extends never ? R : GtMap[X];
export type Gt<X extends Num> = GtImpl<X, X>;
export type Lt<X extends Num> = Exclude<Num, Gt<X> | X>;
export type Gte<X extends Num> = X | Gt<X>;
export type Lte<X extends Num> = X | Lt<X>;

export type Not<X extends Num> = Exclude<Num, X>;
