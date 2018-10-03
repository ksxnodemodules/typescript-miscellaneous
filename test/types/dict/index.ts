import assert from 'static-type-assert'
import { Dict } from '../../../index'
import compare = assert.compare

namespace sym {
  export const a = Symbol()
  export const b = Symbol()
  export type A = typeof a
  export type B = typeof b
}

compare<
  Dict<0 | 1 | 2, 'val'>,
  {
    0: 'val'
    1: 'val'
    2: 'val'
  }
>('equal')

compare<
  Dict<'a' | 'b', 'val'>,
  {
    a: 'val'
    b: 'val'
  }
>('equal')

compare<
  Dict<sym.A | sym.B, 'val'>,
  {
    [sym.a]: 'val'
    [sym.b]: 'val'
  }
>('equal')

compare<
  Dict<'a' | 'b' | 0 | 1 | sym.A | sym.B, 'val'>,
  {
    a: 'val'
    b: 'val'
    0: 'val'
    1: 'val'
    [sym.a]: 'val'
    [sym.b]: 'val'
  }
>('equal')
