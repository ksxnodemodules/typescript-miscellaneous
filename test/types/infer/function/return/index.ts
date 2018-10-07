import assert from 'static-type-assert'
import { ReturnOf } from '../../../../../index'
import compare = assert.compare

compare<
  ReturnOf<() => 123>,
  123
>('equal')

compare<
  ReturnOf<() => void>,
  void
>('equal')
