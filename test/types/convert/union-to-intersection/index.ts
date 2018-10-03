import assert from 'static-type-assert'
import { UnionToIntersection } from '../../../../index'

assert.compare<
  UnionToIntersection<
    { a: 0 } |
    { b: 1 } |
    { c: 2 }
  >,
  {
    a: 0
    b: 1
    c: 2
  }
>('equal')
