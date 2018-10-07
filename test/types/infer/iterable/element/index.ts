import assert from 'static-type-assert'
import { ElementOf } from '../../../../../index'
import compare = assert.compare

compare<
  ElementOf<[0, 1, 2]>,
  0 | 1 | 2
>('equal')

compare<
  ElementOf<'hello'>,
  string
>('equal')

compare<
  ElementOf<Iterable<'x'>>,
  'x'
>('equal')
